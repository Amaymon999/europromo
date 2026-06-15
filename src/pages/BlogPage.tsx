import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { SectionLabel, CTAButton, EllipseDecor } from "@/components/ui";
import { blogPosts } from "@/data/blog";
import { useScrollReveal } from "@/hooks/useScrollAnimations";

export default function BlogPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  useScrollReveal(rootRef);

  return (
    <div ref={rootRef}>
      <SEO
        title="Blog e Risorse | Guide su Allestimenti Punto Vendita - Europromo"
        description="Guide pratiche su profili scaffali, portaprezzi, totem, light box e allestimento del punto vendita per la GDO e il retail."
        canonical="https://www.europromo.it/blog"
      />

      <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
        <EllipseDecor className="right-[-10%] top-[5%] w-[40rem] text-ink" />
        <div className="container-grid relative">
          <SectionLabel index="RISORSE">Blog</SectionLabel>
          <h1 data-reveal className="max-w-[18ch] font-display text-[clamp(2.25rem,6vw,5rem)] font-bold leading-[0.95] tracking-tightest text-balance">
            Guide pratiche per allestire il punto vendita.
          </h1>
          <p data-reveal className="mt-8 max-w-2xl text-base leading-relaxed text-graphite md:text-lg">
            Approfondimenti su materiali, formati e best practice per chi
            gestisce l'allestimento di negozi e reti retail.
          </p>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-paper py-section">
        <div className="container-grid">
          <div data-reveal-group className="grid gap-px sm:grid-cols-2 bg-ink/10">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                data-reveal
                className="group flex flex-col justify-between bg-paper p-8 transition-colors hover:bg-mist/40 min-h-[260px]"
              >
                <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.15em] text-graphite">
                  <span className="text-blue">{post.category}</span>
                  <span>{post.readTime} lettura</span>
                </div>
                <div className="mt-8">
                  <h2 className="font-display text-2xl font-bold tracking-tight leading-tight">
                    {post.title}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-graphite">{post.excerpt}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] group-hover:text-blue transition-colors">
                    Leggi
                    <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
