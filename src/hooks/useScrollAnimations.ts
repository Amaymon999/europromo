import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Applies a fade-up reveal to every element with [data-reveal] inside
 * the given container ref, staggered by their order in the DOM.
 */
export function useScrollReveal(containerRef: React.RefObject<HTMLElement>) {
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const groups = root.querySelectorAll<HTMLElement>("[data-reveal-group]");

      groups.forEach((group) => {
        const items = group.querySelectorAll<HTMLElement>("[data-reveal]");
        if (!items.length) return;
        gsap.fromTo(
          items,
          { opacity: 0, y: 90 },
          {
            opacity: 1,
            y: 0,
            duration: 1.6,
            ease: "power4.out",
            stagger: 0.14,
            scrollTrigger: {
              trigger: group,
              start: "top 88%",
              once: true,
            },
          },
        );
      });

      // standalone items not in a group
      const lone = root.querySelectorAll<HTMLElement>(
        "[data-reveal]:not([data-reveal-group] [data-reveal])",
      );
      lone.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 90 },
          {
            opacity: 1,
            y: 0,
            duration: 1.6,
            ease: "power4.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              once: true,
            },
          },
        );
      });
    }, root);

    return () => ctx.revert();
  }, [containerRef]);
}

/**
 * Parallax effect for images / media blocks marked with [data-parallax].
 */
export function useParallax(containerRef: React.RefObject<HTMLElement>) {
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const els = root.querySelectorAll<HTMLElement>("[data-parallax]");
      els.forEach((el) => {
        gsap.to(el, {
          yPercent: 22,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        });
      });
    }, root);

    return () => ctx.revert();
  }, [containerRef]);
}
