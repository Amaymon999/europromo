import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { LogoMark } from "./Logo";
import { products } from "@/data/products";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      {/* decorative ellipse rings from the brand mark */}
      <div className="ellipse-ring -left-32 -top-32 size-[28rem] text-paper" />
      <div className="ellipse-ring -bottom-48 -right-24 size-[34rem] text-blue !opacity-[0.12]" />

      <div className="container-grid relative py-section-lg">
        <div className="grid-12">
          <div className="col-span-12 lg:col-span-5">
            <LogoMark className="h-10 w-auto text-paper" />
            <h2 className="mt-10 max-w-[14ch] font-display text-[clamp(2rem,4.5vw,4rem)] font-bold leading-[0.95] tracking-tightest text-balance">
              Allestiamo i punti vendita su scala nazionale.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-paper/60">
              Descrivi il progetto, le quantità e i punti vendita coinvolti. Ti
              rispondiamo con materiali, tempi e configurazione della fornitura.
            </p>
            <Link
              to="/contatti"
              className="group relative mt-8 inline-flex items-center gap-2 overflow-hidden rounded-full bg-blue px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-white"
            >
              <span
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full bg-white transition-transform duration-700 ease-industrial group-hover:scale-[16]"
              />
              <span className="relative z-10 flex items-center gap-2 transition-colors duration-500 group-hover:text-ink">
                Richiedi un preventivo
                <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </div>

          <div className="col-span-6 lg:col-span-3 lg:col-start-7 mt-12 lg:mt-0">
            <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-paper/40">
              Prodotti
            </p>
            <ul className="space-y-3 text-sm text-paper/70">
              {products.slice(0, 7).map((p) => (
                <li key={p.slug}>
                  <Link to={`/prodotti/${p.slug}`} className="transition-colors hover:text-blue">
                    {p.shortName}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/prodotti" className="text-blue transition-colors hover:text-white">
                  Vedi tutti →
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-6 lg:col-span-4 mt-12 lg:mt-0">
            <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-paper/40">
              Contatti
            </p>
            <ul className="space-y-4 text-sm text-paper/70">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-blue" strokeWidth={2} />
                <a href="mailto:info@europromo.it" className="transition-colors hover:text-white">
                  info@europromo.it
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-blue" strokeWidth={2} />
                <span>+39 02 0000 0000</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-blue" strokeWidth={2} />
                <span>Milano, Italia — Lun–Ven 08:30–18:00</span>
              </li>
            </ul>

            <nav className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.15em] text-paper/50">
              <Link to="/settori-gdo" className="hover:text-blue">Settori GDO</Link>
              <Link to="/chi-siamo" className="hover:text-blue">Chi siamo</Link>
              <Link to="/progetti" className="hover:text-blue">Progetti</Link>
              <Link to="/blog" className="hover:text-blue">Blog</Link>
            </nav>
          </div>
        </div>

        {/* Giant shimmer wordmark */}
        <div className="mt-24 lg:mt-32 overflow-hidden">
          <h3
            className="footer-shimmer select-none text-center font-display font-bold leading-none tracking-tightest"
            style={{ fontSize: "clamp(3.2rem, 16vw, 13rem)" }}
            data-text="EUROPROMO"
            aria-hidden="true"
          >
            EUROPROMO
          </h3>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-paper/10 pt-6 text-[10px] uppercase tracking-[0.16em] text-paper/40 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Europromo — Comunicazione visiva per GDO e retail</span>
          <span>Print. Pack. Perform.</span>
        </div>
      </div>
    </footer>
  );
}
