import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { SectionLabel, CTAButton, EllipseDecor } from "@/components/ui";
import { products } from "@/data/products";
import { useScrollReveal } from "@/hooks/useScrollAnimations";

export default function ProductsPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  useScrollReveal(rootRef);

  return (
    <div ref={rootRef}>
      <SEO
        title="Catalogo Prodotti per GDO e Retail | Allestimenti Punto Vendita - Europromo"
        description="14 famiglie di prodotto per l'allestimento del punto vendita: stampe grande formato, insegne 3D, profili scaffali, portaprezzi, light box, totem, roll-up e molto altro. Produzione su misura per GDO e retail."
        canonical="https://www.europromo.it/prodotti"
      />

      <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
        <EllipseDecor className="right-[-15%] top-[5%] w-[40rem] text-ink" />
        <div className="container-grid relative">
          <SectionLabel index="CATALOGO">Tutti i prodotti</SectionLabel>
          <h1 data-reveal className="max-w-[18ch] font-display text-[clamp(2.25rem,6vw,5rem)] font-bold leading-[0.95] tracking-tightest text-balance">
            14 famiglie di prodotto per ogni esigenza del punto vendita.
          </h1>
          <p data-reveal className="mt-8 max-w-2xl text-base leading-relaxed text-graphite md:text-lg">
            Dalla stampa grande formato ai cestini spesa: ogni prodotto è
            disponibile in formati standard o su misura, con produzione
            singola, in serie o per rollout su rete nazionale.
          </p>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-paper py-section">
        <div className="container-grid">
          <div data-reveal-group className="grid gap-px sm:grid-cols-2 lg:grid-cols-3 bg-ink/10">
            {products.map((p) => (
              <Link
                key={p.slug}
                to={`/prodotti/${p.slug}`}
                data-reveal
                className="group relative flex flex-col justify-between bg-paper p-8 transition-colors duration-300 hover:bg-ink hover:text-paper min-h-[260px]"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs tabular text-blue">{p.number}</span>
                  <ArrowUpRight className="size-5 text-graphite transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-blue" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold tracking-tight leading-tight">
                    {p.shortName}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-graphite transition-colors group-hover:text-paper/70">
                    {p.tagline}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-paper py-section-lg">
        <div className="container-grid">
          <div data-reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-[clamp(1.85rem,5vw,3.75rem)] font-bold leading-[0.95] tracking-tightest text-balance">
              Non trovi quello che serve?
            </h2>
            <p className="mx-auto mt-6 max-w-lg leading-relaxed text-paper/65">
              Realizziamo anche progetti su misura non a catalogo. Descrivici
              l'esigenza: materiali, quantità e punti vendita coinvolti.
            </p>
            <CTAButton to="/contatti" variant="light" className="mt-10">
              Richiedi un progetto su misura
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
