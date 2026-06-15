import { useState, useEffect, type CSSProperties } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Prodotti", to: "/prodotti" },
  { label: "Settori GDO", to: "/settori-gdo" },
  { label: "Chi siamo", to: "/chi-siamo" },
  { label: "Progetti", to: "/progetti" },
  { label: "Risorse", to: "/blog" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", open);
    return () => document.documentElement.classList.remove("menu-open");
  }, [open]);

  return (
    <header
      className={`site-header fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-industrial ${
        scrolled || open ? "site-header--scrolled" : ""
      }`}
    >
      <div className={`container-grid relative z-50 flex items-center justify-between transition-all duration-500 ${scrolled ? "h-16" : "h-[5.25rem]"}`}>
        <Link to="/" className="group flex h-10 items-center gap-3" aria-label="Europromo home">
          <img
            src="/brand/europromo-mark-white.png"
            alt=""
            className="h-6 w-10 object-contain transition-transform duration-500 group-hover:scale-95 md:h-7 md:w-12"
          />
          <span className="font-display text-sm font-bold leading-none tracking-[0.16em] text-paper">
            EUROPROMO
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.035] p-1 text-[10px] uppercase tracking-[0.16em] text-paper/65 backdrop-blur-xl lg:flex">
          {navLinks.map((link) => {
            const active = location.pathname === link.to || location.pathname.startsWith(`${link.to}/`);
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`relative rounded-full px-4 py-2.5 transition-all duration-300 hover:bg-white/10 hover:text-white ${
                  active ? "bg-white/10 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]" : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contatti"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-blue/30 bg-blue px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_18px_55px_rgba(0,82,255,0.25)]"
          >
            <span
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full bg-white transition-transform duration-700 ease-industrial group-hover:scale-[16]"
            />
            <span className="relative z-10 flex items-center gap-2 transition-colors duration-500 group-hover:text-ink">
              Richiedi preventivo
              <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        </div>

        <button
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          className="grid size-11 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-paper backdrop-blur-xl transition-colors hover:border-blue lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div className={`mobile-menu lg:hidden ${open ? "mobile-menu--open" : ""}`}>
        <div className="container-grid flex min-h-[100svh] flex-col justify-center pb-12 pt-24">
          <nav className="grid gap-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.to}
                to={link.to}
                className="mobile-menu-link group flex items-center justify-between border-b border-white/10 py-5 font-display text-[clamp(2rem,10vw,4.8rem)] font-bold leading-none tracking-tightest text-paper transition-colors hover:text-blue"
                style={{ "--delay": `${index * 70}ms` } as CSSProperties}
              >
                {link.label}
                <ArrowUpRight className="size-7 text-blue transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            ))}
          </nav>
          <Link
            to="/contatti"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-blue px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-white"
          >
            Richiedi preventivo
            <ArrowUpRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </header>
  );
}
