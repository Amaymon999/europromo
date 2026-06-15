import { useEffect, useRef, useState } from "react";

const interactiveSelector = [
  "a",
  "button",
  "input",
  "textarea",
  "select",
  "summary",
  "[role='button']",
  "[data-cursor='hover']",
].join(",");

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const lerped = useRef({ x: 0, y: 0 });
  const dot = useRef({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateEnabled = () => setEnabled(finePointer.matches && !reduceMotion.matches);

    updateEnabled();
    finePointer.addEventListener("change", updateEnabled);
    reduceMotion.addEventListener("change", updateEnabled);

    return () => {
      finePointer.removeEventListener("change", updateEnabled);
      reduceMotion.removeEventListener("change", updateEnabled);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    document.documentElement.classList.add("has-custom-cursor");

    const onMove = (event: MouseEvent) => {
      pos.current.x = event.clientX;
      pos.current.y = event.clientY;
      dot.current.x = event.clientX;
      dot.current.y = event.clientY;
    };

    const onOver = (event: MouseEvent) => {
      const target = event.target as Element | null;
      setHovering(Boolean(target?.closest(interactiveSelector)));
    };

    const tick = () => {
      lerped.current.x += (pos.current.x - lerped.current.x) * 0.16;
      lerped.current.y += (pos.current.y - lerped.current.y) * 0.16;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${lerped.current.x}px, ${lerped.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dot.current.x}px, ${dot.current.y}px, 0) translate(-50%, -50%)`;
      }

      frame = requestAnimationFrame(tick);
    };

    let frame = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot" aria-hidden="true" />
      <div
        ref={cursorRef}
        className={`custom-cursor-ring ${hovering ? "custom-cursor-ring--hover" : ""}`}
        aria-hidden="true"
      >
        <span />
      </div>
    </>
  );
}
