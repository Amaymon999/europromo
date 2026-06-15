import { useRef } from "react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { CTAButton, EllipseDecor } from "@/components/ui";
import { LogoMark } from "@/components/Logo";
import { useScrollReveal } from "@/hooks/useScrollAnimations";

export default function NotFoundPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  useScrollReveal(rootRef);

  return (
    <div ref={rootRef}>
      <SEO
        title="Pagina non trovata | Europromo"
        description="La pagina richiesta non è disponibile. Torna alla home o esplora il catalogo prodotti Europromo."
      />

      <section className="relative flex min-h-[90svh] items-center overflow-hidden pt-20">
        <EllipseDecor className="left-[-15%] top-[15%] w-[40rem] text-blue !opacity-10" />
        <EllipseDecor className="right-[-20%] bottom-[5%] w-[36rem] text-ink" />

        <div className="container-grid relative w-full">
          <div data-reveal className="mx-auto max-w-2xl text-center">
            <LogoMark className="mx-auto h-12 w-auto text-ink" />

            <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.2em] text-blue tabular">
              Errore 404
            </p>
            <h1 className="mt-6 font-display text-[clamp(2.5rem,8vw,6rem)] font-bold leading-[0.95] tracking-tightest text-balance">
              Questa pagina non è a catalogo.
            </h1>
            <p className="mx-auto mt-6 max-w-md leading-relaxed text-graphite">
              L'indirizzo richiesto non esiste o è stato spostato. Torna alla
              home o esplora i prodotti per allestimenti GDO e retail.
            </p>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <CTAButton to="/" variant="dark">
                Torna alla home
              </CTAButton>
              <Link
                to="/prodotti"
                className="text-[11px] font-semibold uppercase tracking-[0.15em] text-ink transition-colors hover:text-blue"
              >
                Vai al catalogo prodotti
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
