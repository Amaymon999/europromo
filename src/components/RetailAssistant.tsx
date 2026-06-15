import { useMemo, useState } from "react";
import { Bot, Check, ChevronRight, MessageSquareText, Sparkles, X } from "lucide-react";

const guidedFlow = [
  {
    question: "Che tipo di punto vendita devi allestire?",
    options: ["Supermercato", "Catena retail", "Farmacia / parafarmacia", "Temporary promo"],
  },
  {
    question: "Qual è l'obiettivo principale?",
    options: ["Comunicazione corsie", "Prezzi e scaffali", "Vetrina / ingresso", "Rollout completo"],
  },
  {
    question: "Di cosa hai già un'idea?",
    options: ["Misure precise", "Solo categoria prodotto", "Numero punti vendita", "Serve consulenza"],
  },
];

const categoryHints = [
  "Profili scaffale + portaprezzi per ordine e prezzi leggibili.",
  "Light box o totem per messaggi ad alta visibilità.",
  "Banner e vetrofanie per campagne stagionali rapide.",
];

export function RetailAssistant() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const current = guidedFlow[step];
  const brief = useMemo(() => {
    if (!answers.length) return "Brief in costruzione: scegli una risposta per iniziare.";
    return [`Scenario: ${answers[0] ?? "da definire"}`, `Priorità: ${answers[1] ?? "da definire"}`, `Input disponibili: ${answers[2] ?? "da definire"}`].join(" · ");
  }, [answers]);

  const chooseOption = (option: string) => {
    const nextAnswers = [...answers];
    nextAnswers[step] = option;
    setAnswers(nextAnswers);
    if (step < guidedFlow.length - 1) setStep((value) => value + 1);
  };

  const reset = () => {
    setStep(0);
    setAnswers([]);
  };

  return (
    <div className="retail-assistant" aria-live="polite">
      <button
        type="button"
        className="assistant-launcher group"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={open ? "Chiudi consulente retail" : "Apri consulente retail"}
      >
        <span className="assistant-launcher__pulse" aria-hidden="true" />
        <Bot className="size-5" />
        <span className="hidden text-left sm:block">
          <span className="block text-[10px] uppercase tracking-[0.18em] text-white/50">AI Retail</span>
          <span className="block text-xs font-semibold uppercase tracking-[0.12em]">Costruisci brief</span>
        </span>
      </button>

      {open && (
        <section className="assistant-panel" aria-label="AI shopping assistant Europromo">
          <div className="flex items-start justify-between gap-4 border-b border-white/10 p-5">
            <div>
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-blue">
                <Sparkles className="size-3.5" /> Consulente retail intelligente
              </div>
              <h2 className="mt-2 font-display text-xl font-bold tracking-tight text-white">
                Trova la configurazione giusta.
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-white/55">
                Flusso guidato per raccogliere esigenze, prodotti e priorità di progetto.
              </p>
            </div>
            <button
              type="button"
              className="grid size-9 shrink-0 place-items-center rounded-full border border-white/10 text-white/70 transition-colors hover:border-blue hover:text-blue"
              onClick={() => setOpen(false)}
              aria-label="Chiudi assistant"
            >
              <X className="size-4" />
            </button>
          </div>

          <div className="space-y-5 p-5">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-white/40">
                <span>Step {step + 1}/3</span>
                <span>Brief generator</span>
              </div>
              <p className="text-sm font-medium leading-snug text-white">{current.question}</p>
              <div className="mt-4 grid gap-2">
                {current.options.map((option) => (
                  <button
                    key={option}
                    type="button"
                    className="group flex items-center justify-between rounded-xl border border-white/10 px-4 py-3 text-left text-xs text-white/70 transition-all duration-300 hover:border-blue/70 hover:bg-blue/10 hover:text-white"
                    onClick={() => chooseOption(option)}
                  >
                    <span>{option}</span>
                    <ChevronRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-white p-4 text-ink shadow-2xl shadow-blue/10">
              <div className="mb-2 flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-blue">
                <MessageSquareText className="size-3.5" /> Brief automatico
              </div>
              <p className="text-xs leading-relaxed text-graphite">{brief}</p>
              {answers.length === guidedFlow.length && (
                <div className="mt-4 rounded-xl bg-mist/60 p-3 text-xs leading-relaxed text-graphite">
                  <div className="mb-2 flex items-center gap-2 font-semibold text-ink">
                    <Check className="size-3.5 text-blue" /> Suggerimento Europromo
                  </div>
                  Invia misure, quantità e punti vendita: il team può proporre combinazione prodotto, materiali e tempi.
                </div>
              )}
            </div>

            <div className="grid gap-2">
              {categoryHints.map((hint) => (
                <div key={hint} className="rounded-xl border border-white/10 px-3 py-2 text-[11px] leading-relaxed text-white/45">
                  {hint}
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={reset}
              className="text-[10px] uppercase tracking-[0.18em] text-white/40 transition-colors hover:text-blue"
            >
              Ricomincia il percorso
            </button>
          </div>
        </section>
      )}
    </div>
  );
}
