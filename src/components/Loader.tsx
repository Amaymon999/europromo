import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export function Loader({ onComplete }: { onComplete?: () => void }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<SVGSVGElement>(null);
  const pathsRef = useRef<SVGPathElement[]>([]);
  const squareRef = useRef<SVGRectElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const wordRef = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      onComplete?.();
      setHidden(true);
      return;
    }

    const ctx = gsap.context(() => {
      const panels = root.querySelectorAll(".loader-panel");
      const particles = root.querySelectorAll(".loader-particle");
      const grid = root.querySelector(".loader-grid");
      const scanline = root.querySelector(".loader-scanline");

      gsap.set(root, { autoAlpha: 1, clipPath: "inset(0 0 0% 0)" });
      gsap.set(panels, { yPercent: 0, scaleY: 1, transformOrigin: "50% 0%" });
      gsap.set(pathsRef.current, { strokeDashoffset: 720, strokeDasharray: 720 });
      gsap.set(squareRef.current, { scale: 0, rotate: -35, transformOrigin: "center" });
      gsap.set(logoRef.current, { scale: 0.92, rotateX: 58, rotateZ: -7, transformPerspective: 900 });
      gsap.set(wordRef.current, { y: 24, opacity: 0, filter: "blur(12px)" });
      gsap.set(particles, { opacity: 0, z: 0 });
      gsap.set(grid, { opacity: 0, y: 24 });
      gsap.set(scanline, { yPercent: -120 });

      const counter = { value: 0 };
      const tl = gsap.timeline({
        defaults: { ease: "power4.out" },
        onComplete: () => {
          onComplete?.();
          setHidden(true);
        },
      });

      tl.to(grid, { opacity: 0.55, y: 0, duration: 0.7 })
        .to(scanline, { yPercent: 120, duration: 1.4, ease: "power2.inOut" }, 0)
        .to(
          particles,
          {
            opacity: 1,
            x: "random(-180, 180, 1)",
            y: "random(-110, 110, 1)",
            rotate: "random(-35, 35, 1)",
            duration: 0.9,
            stagger: 0.025,
          },
          0.1,
        )
        .to(
          pathsRef.current,
          {
            strokeDashoffset: 0,
            duration: 1.05,
            stagger: 0.08,
            ease: "expo.out",
          },
          0.18,
        )
        .to(squareRef.current, { scale: 1, rotate: 0, duration: 0.55, ease: "back.out(2.4)" }, 0.55)
        .to(logoRef.current, { rotateX: 0, rotateZ: 0, scale: 1, duration: 1.25, ease: "expo.out" }, 0.28)
        .to(wordRef.current, { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.85 }, 0.48)
        .to(
          counter,
          {
            value: 100,
            duration: 1.25,
            ease: "power2.inOut",
            onUpdate: () => {
              if (counterRef.current) {
                counterRef.current.textContent = `REVEAL / ${Math.round(counter.value).toString().padStart(3, "0")}`;
              }
            },
          },
          0.25,
        )
        .to(particles, { opacity: 0, scale: 0.2, duration: 0.45, stagger: 0.01, ease: "power3.in" }, 1.35)
        .to(logoRef.current, { y: -34, scale: 0.94, opacity: 0, filter: "blur(10px)", duration: 0.55, ease: "power3.inOut" }, 1.48)
        .to(wordRef.current, { y: -18, opacity: 0, duration: 0.42, ease: "power2.in" }, 1.56)
        .to(
          panels,
          {
            yPercent: -103,
            scaleY: 1.04,
            duration: 0.95,
            stagger: 0.07,
            ease: "expo.inOut",
          },
          1.66,
        )
        .to(root, { autoAlpha: 0, duration: 0.18, ease: "none" }, 2.54);
    }, root);

    return () => ctx.revert();
  }, [onComplete]);

  if (hidden) return null;

  return (
    <div ref={rootRef} className="loader-screen" aria-hidden="true">
      <div className="loader-panel loader-panel--left" />
      <div className="loader-panel loader-panel--center" />
      <div className="loader-panel loader-panel--right" />
      <div className="loader-grid" />
      <div className="loader-scanline" />

      <div className="loader-particles">
        {Array.from({ length: 20 }).map((_, index) => (
          <span key={index} className="loader-particle" />
        ))}
      </div>

      <div className="loader-content">
        <svg ref={logoRef} viewBox="0 0 200 130" className="loader-logo text-paper">
          <path
            ref={(el) => {
              if (el) pathsRef.current[0] = el;
            }}
            d="M59 113C14 103-4 76 9 49 24 18 70 3 112 8L102 32C70 32 40 44 31 63 23 81 36 95 66 101Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
          />
          <path
            ref={(el) => {
              if (el) pathsRef.current[1] = el;
            }}
            d="M85 113L95 91C132 91 165 70 170 48 176 28 161 15 132 10L141 1C184 6 204 33 191 62 174 98 126 115 85 113Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
          />
          <rect ref={squareRef} x="93" y="51" width="28" height="28" fill="#0052FF" />
        </svg>
        <div ref={wordRef} className="loader-word">
          <span>EUROPROMO</span>
          <small>Industrial retail systems</small>
        </div>
      </div>

      <span ref={counterRef} className="loader-counter tabular">
        REVEAL / 000
      </span>
      <span className="loader-baseline">Print. Pack. Perform.</span>
    </div>
  );
}
