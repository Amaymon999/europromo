import { useRef } from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { SectionLabel, CTAButton, StatBlock, EllipseDecor } from "@/components/ui";
import { PlaceholderScene } from "@/components/placeholders/PlaceholderScene";
import { HeroExperience } from "@/components/HeroExperience";
import { products, sectors } from "@/data/products";
import { useScrollReveal, useParallax } from "@/hooks/useScrollAnimations";
import { Link } from "react-router-dom";

const processSteps = [
  ["BRIEF", "Misure, quantità, punti vendita e tempistiche."],
  ["PROGETTO", "Materiali, finiture e file pronti per la produzione."],
  ["PRODUZIONE", "Stampa, fresatura, taglio e assemblaggio in linea."],
  ["CONSEGNA", "Kit identificati per negozio, pronti al montaggio."],
];

const specs = [
  ["STAMPA DA BOBINA", "FINO A 3,2 m", "PVC · TESSUTO · CARTA", "GRANDE FORMATO"],
  ["STAMPA UV PIANA", "FINO A 2,5 × 3,1 m", "PANNELLI · PMMA · ALLUMINIO", "SUPPORTI RIGIDI"],
  ["TAGLIO DIGITALE", "FINO A 3,2 × 3,2 m", "MULTIMATERIALE", "SAGOMATURA"],
  ["FRESATURA CNC", "ELEMENTI 3D", "PVC · ALLUMINIO · METALLO", "INSEGNE E LETTERE"],
];

export default function HomePage() {
  const rootRef = useRef<HTMLDivElement>(null);
  useScrollReveal(rootRef);
  useParallax(rootRef);

  const heroProducts = products.slice(0, 6);

  return (
    <div ref={rootRef}>
      <SEO
        title="Europromo | Comunicazione Visiva e Allestimenti per GDO e Retail"
        description="Europromo progetta e produce comunicazione visiva per il punto vendita: stampe grande formato, insegne 3D, profili scaffali, light box, totem e roll-up per la GDO e il retail in tutta Italia."
        canonical="https://www.europromo.it/"
      />

      {/* ============ HERO ============ */}
      <HeroExperience />

      {/* ============ VALUE STRIP ============ */}
      <section className="border-b border-ink/10 bg-paper py-16 md:py-24">
        <div className="container-grid">
          <div data-reveal-group className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4">
            <StatBlock value="14" label="Famiglie di prodotto" />
            <StatBlock value="1" label="Referente unico di commessa" />
            <StatBlock value="100%" label="Controllo del flusso produttivo" />
            <StatBlock value="N" label="Punti vendita serviti in rollout" />
          </div>
        </div>
      </section>

      {/* ============ METHOD ============ */}
      <section className="relative border-b border-ink/10 bg-paper py-section-lg">
        <EllipseDecor className="right-[-10%] top-[10%] w-[40rem] text-ink" />
        <div className="container-grid relative">
          <SectionLabel index="01">Il nostro metodo</SectionLabel>
          <div data-reveal className="max-w-4xl">
            <h2 className="font-display text-[clamp(2rem,5.5vw,4.75rem)] font-bold leading-[0.95] tracking-tightest text-balance">
              Non vendiamo semplici stampe.{" "}
              <span className="text-blue">Costruiamo sistemi di comunicazione.</span>
            </h2>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-graphite md:text-lg">
              Dalla segnaletica di corsia al singolo portaprezzi: progettiamo
              ogni componente, lo produciamo in scala e lo prepariamo per la
              distribuzione capillare nei punti vendita, con un unico
              referente dall'ordine alla consegna.
            </p>
          </div>
        </div>
      </section>

      {/* ============ PRODUCTS OVERVIEW ============ */}
      <section id="prodotti" className="border-b border-ink/10 bg-paper py-section-lg">
        <div className="container-grid">
          <SectionLabel index="02">I 14 prodotti</SectionLabel>
          <div className="grid gap-12 lg:grid-cols-12">
            <div data-reveal className="lg:col-span-5">
              <h2 className="max-w-[14ch] font-display text-[clamp(1.85rem,5vw,4rem)] font-bold leading-[0.95] tracking-tightest text-balance">
                Tutto ciò che comunica nel punto vendita.
              </h2>
              <p className="mt-8 max-w-sm leading-relaxed text-graphite">
                Quattordici famiglie di prodotto, formati standard o su
                misura. Produzione singola, in serie o per rollout su
                centinaia di negozi.
              </p>
              <CTAButton to="/prodotti" variant="outline" className="mt-10">
                Vedi il catalogo completo
              </CTAButton>
            </div>

            <div data-reveal-group className="lg:col-span-7 lg:col-start-6">
              {heroProducts.map((p) => (
                <Link
                  key={p.slug}
                  to={`/prodotti/${p.slug}`}
                  data-reveal
                  className="group grid grid-cols-[3rem_1fr_auto] items-center gap-4 border-t border-ink/10 py-7 last:border-b hover:bg-mist/40 transition-colors"
                >
                  <span className="text-xs tabular text-blue">{p.number}</span>
                  <div>
                    <h3 className="font-display text-xl font-bold tracking-tight md:text-2xl">
                      {p.shortName}
                    </h3>
                    <p className="mt-1.5 max-w-lg text-sm leading-relaxed text-graphite hidden sm:block">
                      {p.tagline}
                    </p>
                  </div>
                  <ArrowUpRight className="size-5 text-graphite transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-blue" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ GDO / SECTORS BAND (dark) ============ */}
      <section className="bg-ink text-paper">
        <div className="container-grid py-section-lg">
          <SectionLabel index="03">Per chi lavoriamo</SectionLabel>
          <div data-reveal className="max-w-3xl">
            <h2 className="font-display text-[clamp(1.85rem,5vw,4rem)] font-bold leading-[0.95] tracking-tightest text-balance">
              Supermercati, catene e negozi multi-store in tutta Italia.
            </h2>
            <p className="mt-6 max-w-xl leading-relaxed text-paper/65">
              Lavoriamo con realtà della grande distribuzione organizzata e
              con catene retail che devono mantenere la stessa identità
              visiva su decine o centinaia di punti vendita.
            </p>
          </div>
          <div data-reveal-group className="mt-16 grid border-t border-paper/15 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((s, i) => (
              <div
                key={s.slug}
                data-reveal
                className="flex items-center justify-between border-b border-paper/15 py-8 text-lg font-medium md:text-xl group hover:text-blue transition-colors"
              >
                <span>{s.name}</span>
                <span className="font-mono text-[10px] tabular text-blue">{String(i + 1).padStart(2, "0")}</span>
              </div>
            ))}
          </div>
          <div data-reveal className="mt-16">
            <CTAButton to="/settori-gdo" variant="light">
              Scopri le soluzioni per la GDO
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ============ PRODUCTION / SPECS ============ */}
      <section className="border-b border-ink/10 bg-paper py-section-lg">
        <div className="container-grid">
          <SectionLabel index="04">Produzione</SectionLabel>
          <div className="grid gap-16 lg:grid-cols-12">
            <div data-reveal className="lg:col-span-5">
              <h2 className="max-w-[12ch] font-display text-[clamp(1.85rem,5vw,4rem)] font-bold leading-[0.95] tracking-tightest text-balance">
                Dal materiale al punto vendita.
              </h2>
              <p className="mt-8 max-w-sm leading-relaxed text-graphite">
                Stampa, fresatura, taglio digitale, laminazione, assemblaggio
                e confezionamento: un flusso unico per mantenere uniformi
                misure, colori e finiture su ogni commessa.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[640px] border-collapse text-left text-xs uppercase tracking-[0.1em]">
                  <thead className="text-graphite">
                    <tr>
                      {["Processo", "Formato", "Materiali", "Impiego"].map((h) => (
                        <th key={h} className="border-y border-ink/15 py-5 font-normal">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {specs.map((row) => (
                      <tr key={row[0]} data-reveal className="hover:bg-mist/40 transition-colors">
                        {row.map((v, i) => (
                          <td
                            key={v}
                            className={`border-b border-ink/15 py-6 tabular ${i === 0 ? "text-blue" : ""}`}
                          >
                            {v}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="relative mt-10 overflow-hidden">
                <PlaceholderScene
                  variant="print-roll"
                  className="aspect-[16/9] w-full transition-transform duration-700 ease-industrial hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PROJECT TYPE (dark accent) ============ */}
      <section className="bg-ink text-paper">
        <div className="container-grid py-section-lg">
          <SectionLabel index="05">Progetto tipo</SectionLabel>
          <h2 data-reveal className="max-w-[14ch] font-display text-[clamp(1.85rem,5vw,4rem)] font-bold leading-[0.95] tracking-tightest text-balance">
            Un brief. Tutti i punti vendita.
          </h2>
          <article data-reveal className="group mt-20 grid gap-10 border-t border-paper/15 pt-10 lg:grid-cols-12">
            <div className="overflow-hidden lg:col-span-8">
              <PlaceholderScene
                variant="packaging-line"
                className="aspect-[16/9] w-full transition-all duration-700 ease-industrial group-hover:scale-105"
                grayscale
              />
            </div>
            <div className="flex flex-col lg:col-span-4">
              <span className="text-[11px] uppercase tracking-[0.18em] text-blue">
                GDO / Allestimento nazionale
              </span>
              <h3 className="mt-8 font-display text-2xl font-bold md:text-3xl">
                Kit coordinato per la rete vendita
              </h3>
              <p className="mt-6 text-sm leading-relaxed text-paper/65">
                Materiali diversi, un solo linguaggio visivo. Ogni kit viene
                verificato, suddiviso per negozio e preparato per
                l'installazione, anche su rollout di centinaia di punti
                vendita.
              </p>
              <dl className="mt-12 grid gap-5 text-sm">
                {[
                  ["Ingresso", "Brief, misure e quantità per punto vendita"],
                  ["Produzione", "Stampa, componenti e assemblaggio"],
                  ["Uscita", "Kit identificati per destinazione e consegna"],
                ].map(([dt, dd]) => (
                  <div key={dt} className="border-t border-paper/15 pt-4">
                    <dt className="text-paper/45 uppercase text-[11px] tracking-[0.15em]">{dt}</dt>
                    <dd className="mt-1.5">{dd}</dd>
                  </div>
                ))}
              </dl>
              <CTAButton to="/progetti" variant="light" className="mt-10 self-start">
                Vedi i progetti
              </CTAButton>
            </div>
          </article>
        </div>
      </section>

      {/* ============ PROCESS STEPS ============ */}
      <section className="border-b border-ink/10 bg-paper py-section-lg">
        <div className="container-grid">
          <SectionLabel index="06">Come lavoriamo</SectionLabel>
          <div data-reveal-group className="grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map(([title, desc], i) => (
              <div key={title} data-reveal className="border-t border-ink/15 pt-7">
                <span className="font-mono text-[11px] tabular text-blue">0{i + 1}</span>
                <h3 className="mt-4 font-display text-xl font-bold tracking-tight">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-graphite">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BLOG / RESOURCES PREVIEW ============ */}
      <section className="border-b border-ink/10 bg-mist/40 py-section-lg">
        <div className="container-grid">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionLabel index="07">Risorse e guide</SectionLabel>
          </div>
          <div data-reveal className="max-w-2xl">
            <h2 className="font-display text-[clamp(1.75rem,4vw,3.25rem)] font-bold leading-[0.95] tracking-tightest text-balance">
              Guide pratiche per allestire il punto vendita.
            </h2>
          </div>
          <div className="mt-14">
            <CTAButton to="/blog" variant="outline">
              Vai al blog
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="relative overflow-hidden bg-paper py-section-lg">
        <EllipseDecor className="left-[-15%] bottom-[-20%] w-[36rem] text-blue !opacity-10" />
        <div className="container-grid relative">
          <div data-reveal className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-[clamp(2rem,6vw,4.75rem)] font-bold leading-[0.95] tracking-tightest text-balance">
              Pronto ad allestire il tuo punto vendita?
            </h2>
            <p className="mx-auto mt-6 max-w-lg leading-relaxed text-graphite">
              Raccontaci il progetto: prodotto, misure, quantità e numero di
              punti vendita. Ti rispondiamo con tempi e configurazione della
              fornitura.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <CTAButton to="/contatti" variant="dark">
                Richiedi un preventivo
              </CTAButton>
              <Link
                to="/prodotti"
                className="group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-ink hover:text-blue transition-colors"
              >
                Esplora il catalogo
                <ArrowDownRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
