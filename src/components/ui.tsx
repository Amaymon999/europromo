import { type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export function SectionLabel({ index, children }: { index: string; children: ReactNode }) {
  return (
    <div
      data-reveal
      className="mb-12 flex items-center gap-4 text-[11px] uppercase tracking-[0.18em] text-graphite"
    >
      <span className="text-blue tabular">{index} —</span>
      {children}
    </div>
  );
}

export function CTAButton({
  to,
  children,
  variant = "primary",
  className = "",
}: {
  to: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "dark" | "light";
  className?: string;
}) {
  // base = resting state colors. fill = the circle that expands on hover.
  // textClass = full static class list for the label, including the hover text color.
  const styles: Record<string, { base: string; fill: string; textClass: string }> = {
    primary: {
      base: "bg-blue text-white",
      fill: "bg-ink",
      textClass: "relative z-10 flex items-center gap-2 transition-colors duration-500 group-hover:text-white",
    },
    outline: {
      base: "border border-ink text-ink",
      fill: "bg-ink",
      textClass: "relative z-10 flex items-center gap-2 transition-colors duration-500 group-hover:text-paper",
    },
    dark: {
      base: "bg-ink text-paper",
      fill: "bg-blue",
      textClass: "relative z-10 flex items-center gap-2 transition-colors duration-500 group-hover:text-white",
    },
    light: {
      base: "bg-paper text-ink",
      fill: "bg-blue",
      textClass: "relative z-10 flex items-center gap-2 transition-colors duration-500 group-hover:text-white",
    },
  };

  const s = styles[variant];

  return (
    <Link
      to={to}
      className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.15em] ${s.base} ${className}`}
    >
      {/* expanding circle fill, centered, scales from 0 to cover the pill */}
      <span
        aria-hidden="true"
        className={`absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full ${s.fill} scale-0 transition-transform duration-700 ease-industrial group-hover:scale-[18]`}
      />
      <span className={s.textClass}>
        {children}
        <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}

export function StatBlock({ value, label }: { value: string; label: string }) {
  return (
    <div data-reveal className="border-t border-ink/15 pt-6">
      <div className="font-display text-[clamp(2.75rem,6vw,5.5rem)] font-extrabold leading-none tracking-tightest tabular">
        {value}
      </div>
      <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-graphite">{label}</p>
    </div>
  );
}

export function EllipseDecor({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 130"
      className={`pointer-events-none absolute opacity-[0.06] ${className}`}
      aria-hidden="true"
    >
      <path
        d="M59 113C14 103-4 76 9 49 24 18 70 3 112 8L102 32C70 32 40 44 31 63 23 81 36 95 66 101Z M85 113L95 91C132 91 165 70 170 48 176 28 161 15 132 10L141 1C184 6 204 33 191 62 174 98 126 115 85 113Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
      />
    </svg>
  );
}
