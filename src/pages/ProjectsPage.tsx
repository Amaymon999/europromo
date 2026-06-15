import { useRef } from "react";
import { SEO } from "@/components/SEO";
import { SectionLabel, CTAButton, EllipseDecor } from "@/components/ui";
import { PlaceholderScene } from "@/components/placeholders/PlaceholderScene";
import { useScrollReveal } from "@/hooks/useScrollAnimations";

const caseStudies = [
  {
    tag: "GDO / Allestimento nazionale",
    title: "Rinnovo segnaletica di corsia per catena di supermercati",
    desc: "Sostituzione coordinata di testate gondola, bandiere e segnaletica di reparto su una rete multi-regionale, con kit identificati per punto vendita e installazione pianificata per fasi.",
    visual: "aisle-comms" as const,
    stats: [["Materiali", "5 famiglie di prodotto"], ["Fasi", "Rollout per regione"], ["Coordinamento", "Kit per negozio"]],
  },
  {
    tag: "Retail / Vetrine stagionali",
    title: "Campagna vetrofanie stagionale multi-formato",
    desc: "Produzione e distribuzione di vetrofanie sagomate per il cambio stagione su una rete di negozi, con grafiche differenziate per formato vetrina e tempi di consegna allineati al lancio.",
    visual: "window-decal" as const,
    stats: [["Formati", "Su misura per vetrina"], ["Materiale", "Vinile microforato"], ["Consegna", "Allineata al lancio"]],
  },
  {
    tag: "GDO / Reparto freschi",
    title: "Sistema light box per banchi gastronomia",
    desc: "Progettazione e installazione di light box retroilluminati per banchi gastronomia e freschi, con grafiche intercambiabili per rotazione promozionale stagionale.",
    visual: "lightbox" as const,
    stats: [["Struttura", "Alluminio LED"], ["Grafica", "Intercambiabile"], ["Reparti", "Gastronomia · Freschi"]],
  },
  {
    tag: "Catena negozi / Lancio prodotto",
    title: "Totem promozionali per lancio prodotto multi-negozio",
    desc: "Produzione in serie di totem in cartone alveolare per il lancio di un nuovo prodotto, distribuiti su rete nazionale con tempi di consegna sincronizzati su tutti i punti vendita.",
    visual: "totem" as const,
    stats: [["Materiale", "Cartone alveolare"], ["Quantità", "Produzione in serie"], ["Distribuzione", "Rete nazionale"]],
  },
];

export default function ProjectsPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  useScrollReveal(rootRef);

  return (
    <div ref={rootRef}>
      <SEO
        title="Progetti e Case Study | Allestimenti GDO e Retail - Europromo"
        description="Esempi di allestimenti coordinati per la GDO e il retail: rollout multi-negozio, campagne stagionali, light box, totem e segnaletica di corsia."
        canonical="https://www.europromo.it/progetti"
      />

      <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
        <EllipseDecor className="left-[-15%] top-[10%] w-[40rem] text-blue !opacity-10" />
        <div className="container-grid relative">
          <SectionLabel index="PROGETTI">Esempi di lavoro</SectionLabel>
          <h1 data-reveal className="max-w-[18ch] font-display text-[clamp(2.25rem,6vw,5rem)] font-bold leading-[0.95] tracking-tightest text-balance">
            Allestimenti coordinati, dal singolo negozio alla rete nazionale.
          </h1>
          <p data-reveal className="mt-8 max-w-2xl text-base leading-relaxed text-graphite md:text-lg">
            Una selezione di progetti tipo che rappresentano il modo in cui
            lavoriamo: un brief, una produzione coordinata, una distribuzione
            puntuale su ogni punto vendita coinvolto.
          </p>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-paper py-section">
        <div className="container-grid space-y-px bg-ink/10" data-reveal-group>
          {caseStudies.map((c, i) => (
            <article
              key={c.title}
              data-reveal
              className="group grid gap-10 bg-paper p-8 md:grid-cols-12 md:p-12"
            >
              <div className={`md:col-span-7 overflow-hidden ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <PlaceholderScene
                  variant={c.visual}
                  className="aspect-[16/10] w-full transition-transform duration-700 ease-industrial group-hover:scale-105"
                  grayscale
                />
              </div>
              <div className={`md:col-span-5 flex flex-col justify-center ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <span className="text-[11px] uppercase tracking-[0.18em] text-blue">{c.tag}</span>
                <h2 className="mt-5 font-display text-2xl font-bold tracking-tight md:text-3xl">{c.title}</h2>
                <p className="mt-5 text-sm leading-relaxed text-graphite">{c.desc}</p>
                <dl className="mt-8 grid gap-4 text-sm sm:grid-cols-3">
                  {c.stats.map(([dt, dd]) => (
                    <div key={dt} className="border-t border-ink/15 pt-3">
                      <dt className="text-[10px] uppercase tracking-[0.15em] text-graphite">{dt}</dt>
                      <dd className="mt-1.5 font-medium">{dd}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-ink text-paper py-section-lg">
        <div className="container-grid">
          <div data-reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-[clamp(1.85rem,5vw,3.75rem)] font-bold leading-[0.95] tracking-tightest text-balance">
              Il prossimo progetto coordinato potrebbe essere il tuo.
            </h2>
            <p className="mx-auto mt-6 max-w-lg leading-relaxed text-paper/65">
              Raccontaci il punto vendita, la rete e gli obiettivi della
              campagna. Definiamo insieme i materiali e i tempi di
              produzione.
            </p>
            <CTAButton to="/contatti" variant="light" className="mt-10">
              Parla con il nostro team
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
