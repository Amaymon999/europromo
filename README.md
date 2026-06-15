# Europromo — Sito Web

Sito multi-pagina per Europromo (comunicazione visiva e allestimenti per GDO
e retail). Stack: **React + Vite + TypeScript + Tailwind CSS + GSAP**.

## Deploy su Vercel

Il file `vercel.json` è già incluso e configura il routing per la SPA
(necessario perché React Router gestisce le pagine lato client: senza
questa configurazione, ricaricando una pagina come `/prodotti/totem`
otterresti un 404).

Passi:
1. Importa il repository GitHub su vercel.com → "Add New Project"
2. Vercel rileva automaticamente Vite; verifica che siano impostati:
   - **Build command**: `npm run build`
   - **Output directory**: `dist`
3. Deploy — ottieni un URL pubblico (es. `europromo-sito.vercel.app`),
   aggiornato automaticamente a ogni push su `main`.

## Avvio del progetto

```bash
npm install
npm run dev
```

Build di produzione:

```bash
npm run build
npm run preview
```

Il progetto è pensato per il deploy gratuito su **Vercel** o **Netlify**
(import diretto della cartella o del repo Git, build command `npm run build`,
output directory `dist`).

## Struttura

- `src/pages/` — una pagina per ogni route (Home, Catalogo, Schede prodotto,
  Settori GDO, Chi siamo, Progetti, Blog, Articoli, Contatti, 404)
- `src/data/products.ts` — contenuti e SEO per i 14 prodotti
- `src/data/blog.ts` — articoli del blog/risorse
- `src/components/` — Header, Footer, Loader, Logo, componenti UI condivisi
- `src/components/placeholders/PlaceholderScene.tsx` — sistema di immagini
  segnaposto generative (vedi sotto)
- `src/hooks/useScrollAnimations.ts` — hook GSAP per reveal e parallax
- `src/styles/index.css` — token di design, sistema forme del logo, shimmer
  del footer

## Da fare prima della pubblicazione

### 1. Immagini reali

Tutte le immagini del sito sono attualmente **placeholder SVG generativi**
(`PlaceholderScene`), generati con la palette del brand e le forme del
logo (le due ellissi + il quadrato blu). Vanno sostituite con foto reali
o mockup dei prodotti. Per sostituirle:

- In ogni pagina, cerca `<PlaceholderScene variant="..." className="..." />`
- Sostituiscilo con `<img src="/images/nome-file.jpg" className="..." />`
  (stesse classi di aspect ratio, così il layout non si sposta)

Varianti attualmente in uso: `hero-aisle`, `print-roll`, `packaging-line`,
`signage-3d`, `shelf-strips`, `lightbox`, `totem`, `rollup`,
`checkout-divider`, `window-decal`, `aisle-comms`, `basket`, `warehouse`,
`team`.

Anche l'immagine Open Graph (`index.html`, meta `og:image`) punta
temporaneamente a `/favicon.svg`: va sostituita con un'immagine 1200x630px
reale prima del lancio (es. `/og-image.jpg`).

### 2. Font

Il brand kit indica **TT Interfaces Pro**, un font a licenza commerciale non
disponibile su Google Fonts. È stato sostituito con **Geist** (Google Fonts),
che ha proporzioni e peso simili (geometrico, neutro, ottimo per
display/body). Se il cliente possiede la licenza di TT Interfaces Pro:

1. Aggiungi i file font (woff2) in `public/fonts/`
2. Aggiungi le regole `@font-face` in `src/styles/index.css`
3. Aggiorna `fontFamily` in `tailwind.config.js`

### 3. Nomi di catene/clienti reali

Per questioni di diritti, il sito non menziona nomi di catene specifiche
(es. grandi catene GDO con cui si lavora). Se si ottiene l'autorizzazione,
questi nomi possono essere aggiunti come loghi/case study in
`src/pages/ProjectsPage.tsx` e nella sezione "Per chi lavoriamo" della home.

### 4. Form contatti

Il form in `src/pages/ContactPage.tsx` mostra uno stato di "invio riuscito"
ma non invia ancora dati a un backend reale. Da collegare a un servizio
(es. Formspree, Resend, un endpoint serverless) prima del lancio.

### 5. SEO / Prerendering

`vite-plugin-sitemap` è configurato in `vite.config.ts` e genera
`sitemap.xml` automaticamente in fase di build con tutte le route (incluse
le 14 pagine prodotto e gli articoli del blog). Per il prerendering completo
delle pagine (contenuto visibile ai crawler senza eseguire JS), si consiglia
di valutare `vite-plugin-prerender` o il deploy su piattaforme con SSR/ISR
(es. Vercel con un adapter React Router).

### 6. Loader

Il loader animato compare una sola volta per sessione (usa
`sessionStorage`). Per testarlo di nuovo, svuota il session storage del
browser o apri una nuova sessione di navigazione in incognito.
