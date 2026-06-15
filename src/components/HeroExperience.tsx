import { useEffect, useRef, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CTAButton } from "@/components/ui";
import { products } from "@/data/products";

gsap.registerPlugin(ScrollTrigger);

const objectTypes = ["banner", "lightbox", "profile", "totem", "divider", "signage"] as const;

function WireObject({ type }: { type: (typeof objectTypes)[number] }) {
  if (type === "banner") {
    return (
      <svg viewBox="0 0 120 80" aria-hidden="true">
        <rect x="12" y="16" width="96" height="48" rx="3" />
        <path d="M26 64V76M94 64V76M22 28h76M22 44h52" />
      </svg>
    );
  }

  if (type === "lightbox") {
    return (
      <svg viewBox="0 0 120 80" aria-hidden="true">
        <rect x="18" y="12" width="84" height="56" rx="6" />
        <rect x="28" y="22" width="64" height="36" rx="2" />
        <path d="M38 40h44M46 50h28" />
      </svg>
    );
  }

  if (type === "profile") {
    return (
      <svg viewBox="0 0 120 80" aria-hidden="true">
        <path d="M12 32h96v16H12zM22 28v24M42 28v24M62 28v24M82 28v24M102 28v24" />
        <path d="M18 60h84" />
      </svg>
    );
  }

  if (type === "totem") {
    return (
      <svg viewBox="0 0 120 80" aria-hidden="true">
        <rect x="42" y="8" width="36" height="60" rx="3" />
        <path d="M49 24h22M49 36h22M49 48h16M34 72h52" />
      </svg>
    );
  }

  if (type === "divider") {
    return (
      <svg viewBox="0 0 120 80" aria-hidden="true">
        <path d="M15 56C35 38 55 29 82 18" />
        <path d="M20 62h80M82 18l16 8M82 18l7 16" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 120 80" aria-hidden="true">
      <path d="M18 60h84M60 18v42" />
      <path d="M34 16h52l14 18-14 18H34L20 34z" />
      <path d="M42 34h36" />
    </svg>
  );
}

export function HeroExperience() {
  const heroRef = useRef<HTMLElement>(null);
  const videoSectionRef = useRef<HTMLElement>(null);
  const browserMockupRef = useRef<HTMLDivElement>(null);
  const featured = products.slice(0, 6);

  useEffect(() => {
    const root = heroRef.current;
    if (!root) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let frame = 0;

    const render = () => {
      current.x += (target.x - current.x) * 0.08;
      current.y += (target.y - current.y) * 0.08;
      root.style.setProperty("--mx", current.x.toFixed(3));
      root.style.setProperty("--my", current.y.toFixed(3));
      frame = requestAnimationFrame(render);
    };

    const onMove = (event: MouseEvent) => {
      const rect = root.getBoundingClientRect();
      target.x = (event.clientX - rect.left) / rect.width - 0.5;
      target.y = (event.clientY - rect.top) / rect.height - 0.5;
    };

    root.addEventListener("mousemove", onMove, { passive: true });
    frame = requestAnimationFrame(render);

    return () => {
      root.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const section = videoSectionRef.current;
    const mockup = browserMockupRef.current;
    if (!section || !mockup) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        mockup,
        {
          scale: 0.78,
          yPercent: 0,
          borderRadius: 32,
          opacity: 1,
        },
        {
          scale: 1.1,
          yPercent: -34,
          borderRadius: 0,
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 82%",
            end: "bottom top",
            scrub: 0.75,
          },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={heroRef} className="hero-experience relative min-h-[112svh] overflow-hidden pt-20 text-paper">
        <div className="hero-animated-bg" aria-hidden="true">
          <span className="hero-bg-blur hero-bg-blur--one" />
          <span className="hero-bg-blur hero-bg-blur--two" />
          <span className="hero-bg-blur hero-bg-blur--three" />
        </div>
        <div className="hero-gradient" aria-hidden="true" />
        <div className="hero-technical-grid" aria-hidden="true" />
        <div className="hero-orb hero-orb--one" aria-hidden="true" />
        <div className="hero-orb hero-orb--two" aria-hidden="true" />

        <div className="container-grid relative z-10 flex min-h-[calc(112svh-5rem)] flex-col justify-between pb-[24vh] md:pb-[28vh]">
          <div className="mt-8 flex justify-between gap-6 text-[10px] uppercase tracking-[0.18em] text-paper/55 md:mt-12">
            <span>Allestimenti per GDO e Retail / Italia</span>
            <span className="hidden md:block">Stampa · Produzione · Distribuzione nazionale</span>
          </div>

          <div className="hero-stage hero-stage--centered" data-cursor="hover">
            <div className="hero-constellation hero-constellation--around-title" aria-label="Slider 3D prodotti Europromo">
              <div className="hero-core">
                <span />
                <small>EU</small>
              </div>
              {featured.map((product, index) => {
                const type = objectTypes[index % objectTypes.length];
                return (
                  <Link
                    key={product.slug}
                    to={`/prodotti/${product.slug}`}
                    className={`hero-object hero-object--${index + 1}`}
                    style={{ "--i": index } as CSSProperties}
                  >
                    <div className="hero-object__wire">
                      <WireObject type={type} />
                    </div>
                    <div className="hero-object__meta">
                      <span>{product.number}</span>
                      <strong>{product.shortName}</strong>
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="hero-title-block hero-title-block--centered">
              <span data-reveal className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-paper/55 backdrop-blur-xl">
                <span className="size-1.5 rounded-full bg-blue shadow-[0_0_18px_rgba(0,82,255,0.9)]" />
                Immersive retail systems
              </span>
              <h1
                data-reveal
                className="mx-auto max-w-[12ch] font-display text-[clamp(3rem,8vw,7.5rem)] font-bold leading-[0.88] tracking-tightest text-balance"
              >
                Vesti i punti vendita. <span className="text-blue">Su scala.</span>
              </h1>
              <p data-reveal className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-paper/72 md:mt-8 md:text-lg">
                Stampe grande formato, insegne, profili scaffali, light box, totem e
                allestimenti completi: progettiamo, produciamo e distribuiamo la
                comunicazione visiva per supermercati, catene e negozi in tutta
                Italia.
              </p>
              <div data-reveal className="mt-8 flex flex-wrap items-center justify-center gap-4 md:mt-10">
                <CTAButton to="/prodotti" variant="primary">
                  Scopri i 14 prodotti
                </CTAButton>
                <Link
                  to="/contatti"
                  className="group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-paper/60 transition-colors hover:text-blue"
                >
                  Costruisci un brief
                  <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute bottom-[9vh] left-4 hidden items-center gap-3 text-[10px] tracking-[0.2em] text-paper/50 sm:flex md:left-[clamp(1rem,4vw,5rem)]">
            <span className="rotate-90">SCORRI</span>
            <span className="h-12 w-px bg-blue" />
          </div>
          <div className="hero-philosophy-card" data-reveal>
            <div className="hero-philosophy-card__image">
              <span />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.18em] text-blue">Filosofia Europromo</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                Sistemi visivi modulari, precisi e pronti per rollout retail su larga scala.
              </p>
            </div>
          </div>
          <ArrowDownRight className="pointer-events-none absolute bottom-[9vh] right-[clamp(1rem,4vw,5rem)] hidden size-5 text-blue md:block" />
        </div>
      </section>

      <section ref={videoSectionRef} className="hero-video-scroll relative z-20 -mt-[24vh] min-h-[150vh] bg-transparent px-4 pb-24 md:px-[4vw]">
        <div ref={browserMockupRef} className="hero-browser-mockup sticky top-[12vh] mx-auto max-w-[1440px] overflow-hidden">
          <div className="hero-browser-chrome">
            <span />
            <span />
            <span />
            <small>europromo.it / cinematic reveal</small>
          </div>
          <video
            className="hero-browser-video"
            src="/media/europromo-luxury-industrial-reveal.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        </div>
      </section>
    </>
  );
}
