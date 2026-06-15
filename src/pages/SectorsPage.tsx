import { useRef } from "react";
import { SEO } from "@/components/SEO";
import { SectionLabel, CTAButton, EllipseDecor, StatBlock } from "@/components/ui";
import { PlaceholderScene } from "@/components/placeholders/PlaceholderScene";
import { useScrollReveal } from "@/hooks/useScrollAnimations";
import { products } from "@/data/products";
import { Link } from "react-router-dom";

const sectorBlocks = [
  {
    title: "Supermercati e ipermercati",
    desc: "Allestimento completo del punto vendita: segnaletica di corsia, profili scaffali, portaprezzi, light box per banchi freschi e gastronomia, totem promozionali e separatori cassa.",
    products: ["comunicazione-corsie", "profili-scaffali", "portaprezzi-scaffali", "light-box"],
  },
  {
    title: "Catene di negozi e franchising",
    desc: "Coerenza visiva su ogni punto vendita della rete: insegne, vetrofanie, totem e roll-up prodotti in serie e distribuiti con kit identificati per negozio.",
    products: ["insegne-lettere-3d", "adesivi-vetrina", "totem", "roll-up"],
  },
  {
    title: "Farmacie e parafarmacia",
    desc: "Sistemi di ordine e visibilità per banchi e scaffali: divisori in plexiglass, profili slim, portaprezzi e segnaletica di reparto su misura.",
    products: ["profili-slim-plexi", "portaprezzi-scaffali", "delimitatori-pvc"],
  },
  {
    title: "Cosmetica e profumeria",
    desc: "Espositori e sistemi pusher per valorizzare il prodotto a scaffale, insegne luminose per il punto vendita e comunicazione vetrina per lanci stagionali.",
    products: ["profili-slim-plexi", "light-box", "adesivi-vetrina"],
  },
];

export default function SectorsPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  useScrollReveal(rootRef);

  const findProduct = (slug: string) => products.find((p) => p.slug === slug)!;

  return (
    <div ref={rootRef}>
      <SEO
        title="Soluzioni per la GDO e il Retail | Allestimenti Punto Vendita - Europromo"
        description="Soluzioni di comunicazione visiva per supermercati, ipermercati, catene retail, farmacie e cosmetica. Allestimenti coordinati e rollout multi-negozio in tutta Italia."
        canonical="https://www.europromo.it/settori-gdo"
      />

      <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
        <EllipseDecor className="left-[-15%] top-[10%] w-[40rem] text-blue !opacity-10" />
        <div className="container-grid relative">
          <SectionLabel index="GDO">Settori serviti</SectionLabel>
          <h1 data-reveal className="max-w-[20ch] font-display text-[clamp(2.25rem,6vw,5rem)] font-bold leading-[0.95] tracking-tightest text-balance">
            Soluzioni per la grande distribuzione e il retail.
          </h1>
          <p data-reveal className="mt-8 max-w-2xl text-base leading-relaxed text-graphite md:text-lg">
            Lavoriamo con supermercati, ipermercati, catene di negozi e
            franchising che devono mantenere la stessa identità visiva su
            decine o centinaia di punti vendita, con tempi e qualità
            costanti.
          </p>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-paper py-section">
        <div className="container-grid">
          <div data-reveal-group className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-4">
            <StatBlock value="14" label="Famiglie di prodotto disponibili" />
            <StatBlock value="N" label="Punti vendita seguiti in rollout" />
            <StatBlock value="1" label="Referente unico per la rete" />
            <StatBlock value="IT" label="Distribuzione su tutto il territorio" />
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-paper py-section-lg">
        <div className="container-grid">
          <SectionLabel index="01">Aree di intervento</SectionLabel>
          <div data-reveal-group className="space-y-px bg-ink/10">
            {sectorBlocks.map((s) => (
              <div key={s.title} data-reveal className="grid gap-10 bg-paper p-8 md:grid-cols-12 md:p-12">
                <div className="md:col-span-5">
                  <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">{s.title}</h2>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-graphite">{s.desc}</p>
                </div>
                <div className="md:col-span-7">
                  <p className="mb-4 text-[10px] uppercase tracking-[0.18em] text-graphite">Prodotti correlati</p>
                  <div className="flex flex-wrap gap-3">
                    {s.products.map((slug) => {
                      const p = findProduct(slug);
                      return (
                        <Link
                          key={slug}
                          to={`/prodotti/${slug}`}
                          className="rounded-full border border-ink/15 px-4 py-2 text-xs uppercase tracking-[0.1em] transition-colors hover:border-blue hover:text-blue"
                        >
                          {p.shortName}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-paper py-section-lg">
        <div className="container-grid">
          <SectionLabel index="02">Allestimento coordinato</SectionLabel>
          <div className="grid gap-12 lg:grid-cols-12">
            <div data-reveal className="lg:col-span-6">
              <h2 className="max-w-[14ch] font-display text-[clamp(1.85rem,5vw,3.75rem)] font-bold leading-[0.95] tracking-tightest text-balance">
                Un solo linguaggio visivo, su ogni punto vendita.
              </h2>
              <p className="mt-6 max-w-lg leading-relaxed text-paper/65">
                Per le reti con molti punti vendita, il problema non è
                produrre un singolo elemento, ma mantenerne la coerenza su
                decine di negozi, con tempi di consegna allineati al
                lancio della campagna. Gestiamo il rollout completo: dalla
                produzione alla suddivisione dei kit per destinazione.
              </p>
              <CTAButton to="/progetti" variant="light" className="mt-10">
                Vedi un progetto tipo
              </CTAButton>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <PlaceholderScene variant="warehouse" className="aspect-[4/5] w-full" grayscale />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-section-lg">
        <div className="container-grid">
          <div data-reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-[clamp(1.85rem,5vw,3.75rem)] font-bold leading-[0.95] tracking-tightest text-balance">
              Hai una rete di punti vendita da allestire?
            </h2>
            <p className="mx-auto mt-6 max-w-lg leading-relaxed text-graphite">
              Raccontaci la rete, i formati coinvolti e i tempi del lancio.
              Definiamo insieme materiali e configurazione della fornitura.
            </p>
            <CTAButton to="/contatti" variant="dark" className="mt-10">
              Parla con il nostro team
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
