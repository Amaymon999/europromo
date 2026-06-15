import { useRef } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import { SEO } from "@/components/SEO";
import { SectionLabel, CTAButton, EllipseDecor } from "@/components/ui";
import { PlaceholderScene } from "@/components/placeholders/PlaceholderScene";
import { products, getProductBySlug } from "@/data/products";
import { useScrollReveal } from "@/hooks/useScrollAnimations";

const placeholderVariants = [
  "hero-aisle", "print-roll", "packaging-line", "signage-3d", "shelf-strips",
  "lightbox", "totem", "rollup", "checkout-divider", "window-decal",
  "aisle-comms", "basket", "warehouse", "team",
] as const;

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const rootRef = useRef<HTMLDivElement>(null);
  useScrollReveal(rootRef);

  const product = slug ? getProductBySlug(slug) : undefined;
  if (!product) return <Navigate to="/prodotti" replace />;

  const index = products.findIndex((p) => p.slug === product.slug);
  const visual = placeholderVariants[index % placeholderVariants.length];
  const next = products[(index + 1) % products.length];

  return (
    <div ref={rootRef}>
      <SEO
        title={product.seoTitle}
        description={product.seoDescription}
        canonical={`https://www.europromo.it/prodotti/${product.slug}`}
      />

      {/* Breadcrumb + hero */}
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
        <EllipseDecor className="right-[-10%] top-[0%] w-[36rem] text-ink" />
        <div className="container-grid relative">
          <nav className="mb-8 flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-graphite">
            <Link to="/prodotti" className="hover:text-blue transition-colors">Prodotti</Link>
            <span>/</span>
            <span className="text-ink">{product.shortName}</span>
          </nav>
          <SectionLabel index={product.number}>{product.shortName}</SectionLabel>
          <div className="grid gap-12 lg:grid-cols-12">
            <div data-reveal className="lg:col-span-7">
              <h1 className="max-w-[20ch] font-display text-[clamp(2.25rem,6vw,5rem)] font-bold leading-[0.95] tracking-tightest text-balance">
                {product.name}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-blue font-medium">
                {product.tagline}
              </p>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-graphite">
                {product.description}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <CTAButton to="/contatti" variant="dark">
                  Richiedi un preventivo
                </CTAButton>
                <CTAButton to="/prodotti" variant="outline">
                  Tutti i prodotti
                </CTAButton>
              </div>
            </div>
            <div className="lg:col-span-5">
              <PlaceholderScene variant={visual} className="aspect-[4/5] w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Long description */}
      <section className="border-t border-ink/10 bg-paper py-section">
        <div className="container-grid">
          <div className="grid gap-16 lg:grid-cols-12">
            <div data-reveal className="lg:col-span-7">
              <SectionLabel index="01">Descrizione</SectionLabel>
              <p className="max-w-2xl text-base leading-relaxed text-graphite md:text-lg">
                {product.longDescription}
              </p>
            </div>
            <div data-reveal className="lg:col-span-4 lg:col-start-9">
              <SectionLabel index="02">Caratteristiche</SectionLabel>
              <ul className="space-y-4">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm leading-relaxed">
                    <Check className="mt-0.5 size-4 shrink-0 text-blue" strokeWidth={2.5} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Materials / formats / applications grid */}
      <section className="border-t border-ink/10 bg-mist/40 py-section">
        <div className="container-grid">
          <SectionLabel index="03">Specifiche</SectionLabel>
          <div data-reveal-group className="grid gap-px sm:grid-cols-3 bg-ink/10">
            {[
              { title: "Materiali", items: product.materials },
              { title: "Formati e versioni", items: product.formats },
              { title: "Applicazioni", items: product.applications },
            ].map((col) => (
              <div key={col.title} data-reveal className="bg-mist/40 p-8">
                <h3 className="font-display text-lg font-bold tracking-tight">{col.title}</h3>
                <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-graphite">
                  {col.items.map((item) => (
                    <li key={item} className="border-t border-ink/10 pt-2.5 first:border-t-0 first:pt-0">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + next product */}
      <section className="bg-ink text-paper py-section-lg">
        <div className="container-grid">
          <div className="grid gap-12 lg:grid-cols-12">
            <div data-reveal className="lg:col-span-7">
              <h2 className="max-w-[16ch] font-display text-[clamp(1.75rem,4vw,3.25rem)] font-bold leading-[0.95] tracking-tightest text-balance">
                Parliamo del tuo progetto di {product.shortName.toLowerCase()}.
              </h2>
              <p className="mt-6 max-w-lg leading-relaxed text-paper/65">
                Inviaci misure, quantità e punti vendita coinvolti: ti
                rispondiamo con materiali, tempi e configurazione della
                fornitura.
              </p>
              <CTAButton to="/contatti" variant="light" className="mt-10">
                Richiedi un preventivo
              </CTAButton>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 self-end">
              <Link
                to={`/prodotti/${next.slug}`}
                data-reveal
                className="group flex items-center justify-between gap-4 border-t border-paper/20 pt-6"
              >
                <div>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-paper/40">Prossimo prodotto</span>
                  <h3 className="mt-2 font-display text-xl font-bold">{next.shortName}</h3>
                </div>
                <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-blue" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
