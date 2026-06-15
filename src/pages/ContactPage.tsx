import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { SEO } from "@/components/SEO";
import { SectionLabel, EllipseDecor } from "@/components/ui";
import { useScrollReveal } from "@/hooks/useScrollAnimations";
import { products } from "@/data/products";

export default function ContactPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  useScrollReveal(rootRef);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div ref={rootRef}>
      <SEO
        title="Contatti | Richiedi un Preventivo per Allestimenti GDO - Europromo"
        description="Contatta Europromo per un preventivo su stampe grande formato, insegne, profili scaffali, totem e allestimenti per GDO e retail. Risposta rapida per progetti singoli e rollout multi-negozio."
        canonical="https://www.europromo.it/contatti"
      />

      <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
        <EllipseDecor className="right-[-10%] top-[5%] w-[40rem] text-blue !opacity-10" />
        <div className="container-grid relative">
          <SectionLabel index="CONTATTI">Parliamo del progetto</SectionLabel>
          <h1 data-reveal className="max-w-[18ch] font-display text-[clamp(2.25rem,6vw,5rem)] font-bold leading-[0.95] tracking-tightest text-balance">
            Richiedi un preventivo.
          </h1>
          <p data-reveal className="mt-8 max-w-2xl text-base leading-relaxed text-graphite md:text-lg">
            Descrivi il prodotto, le quantità e i punti vendita coinvolti.
            Ti rispondiamo con materiali, tempi e configurazione della
            fornitura.
          </p>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-paper py-section">
        <div className="container-grid">
          <div className="grid gap-16 lg:grid-cols-12">
            {/* Form */}
            <div data-reveal className="lg:col-span-7">
              {submitted ? (
                <div className="rounded-2xl border border-blue/20 bg-blue/5 p-10">
                  <h2 className="font-display text-2xl font-bold">Richiesta inviata</h2>
                  <p className="mt-4 text-graphite leading-relaxed">
                    Grazie, abbiamo ricevuto i dettagli del progetto. Il nostro
                    team commerciale ti risponderà a breve all'indirizzo
                    indicato.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-[11px] uppercase tracking-[0.15em] text-graphite">
                        Nome e cognome
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        className="w-full rounded-lg border border-ink/15 bg-paper px-4 py-3 text-sm focus:border-blue focus:outline-none focus:ring-1 focus:ring-blue"
                        placeholder="Mario Rossi"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="mb-2 block text-[11px] uppercase tracking-[0.15em] text-graphite">
                        Azienda
                      </label>
                      <input
                        id="company"
                        type="text"
                        className="w-full rounded-lg border border-ink/15 bg-paper px-4 py-3 text-sm focus:border-blue focus:outline-none focus:ring-1 focus:ring-blue"
                        placeholder="Nome azienda"
                      />
                    </div>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="mb-2 block text-[11px] uppercase tracking-[0.15em] text-graphite">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        className="w-full rounded-lg border border-ink/15 bg-paper px-4 py-3 text-sm focus:border-blue focus:outline-none focus:ring-1 focus:ring-blue"
                        placeholder="mario.rossi@azienda.it"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-2 block text-[11px] uppercase tracking-[0.15em] text-graphite">
                        Telefono
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className="w-full rounded-lg border border-ink/15 bg-paper px-4 py-3 text-sm focus:border-blue focus:outline-none focus:ring-1 focus:ring-blue"
                        placeholder="+39 ..."
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="product" className="mb-2 block text-[11px] uppercase tracking-[0.15em] text-graphite">
                      Prodotto di interesse
                    </label>
                    <select
                      id="product"
                      className="w-full rounded-lg border border-ink/15 bg-paper px-4 py-3 text-sm focus:border-blue focus:outline-none focus:ring-1 focus:ring-blue"
                    >
                      <option value="">Seleziona un prodotto (opzionale)</option>
                      {products.map((p) => (
                        <option key={p.slug} value={p.slug}>{p.shortName}</option>
                      ))}
                      <option value="altro">Altro / Progetto su misura</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="stores" className="mb-2 block text-[11px] uppercase tracking-[0.15em] text-graphite">
                      Numero di punti vendita coinvolti
                    </label>
                    <input
                      id="stores"
                      type="text"
                      className="w-full rounded-lg border border-ink/15 bg-paper px-4 py-3 text-sm focus:border-blue focus:outline-none focus:ring-1 focus:ring-blue"
                      placeholder="Es. 1 negozio, 25 punti vendita, rete nazionale..."
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-2 block text-[11px] uppercase tracking-[0.15em] text-graphite">
                      Descrizione del progetto
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      className="w-full rounded-lg border border-ink/15 bg-paper px-4 py-3 text-sm focus:border-blue focus:outline-none focus:ring-1 focus:ring-blue"
                      placeholder="Misure, materiali, tempi e qualsiasi altro dettaglio utile..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-blue px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-white"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full bg-ink transition-transform duration-700 ease-industrial group-hover:scale-[20]"
                    />
                    <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                      Invia richiesta
                    </span>
                  </button>
                </form>
              )}
            </div>

            {/* Contact info */}
            <div data-reveal className="lg:col-span-4 lg:col-start-9">
              <div className="rounded-2xl bg-ink p-8 text-paper">
                <h2 className="font-display text-xl font-bold">Ufficio commerciale</h2>
                <ul className="mt-8 space-y-5 text-sm">
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 size-4 shrink-0 text-blue" strokeWidth={2} />
                    <a href="mailto:info@europromo.it" className="hover:text-blue transition-colors">info@europromo.it</a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 size-4 shrink-0 text-blue" strokeWidth={2} />
                    <span>+39 02 0000 0000</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-blue" strokeWidth={2} />
                    <span>Milano, Italia</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="mt-0.5 size-4 shrink-0 text-blue" strokeWidth={2} />
                    <span>Lun–Ven · 08:30–18:00</span>
                  </li>
                </ul>
                <p className="mt-10 text-sm leading-relaxed text-paper/60">
                  Per rollout su rete nazionale o richieste urgenti, indica il
                  numero di punti vendita e i tempi previsti: ti
                  contatteremo prioritariamente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
