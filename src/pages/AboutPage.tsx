import { useRef } from "react";
import { SEO } from "@/components/SEO";
import { SectionLabel, CTAButton, EllipseDecor, StatBlock } from "@/components/ui";
import { PlaceholderScene } from "@/components/placeholders/PlaceholderScene";
import { useScrollReveal } from "@/hooks/useScrollAnimations";

const values = [
  ["Precisione", "Ogni misura, materiale e finitura viene verificato prima della produzione, per evitare sorprese in negozio."],
  ["Scala", "Strutturati per gestire rollout su decine o centinaia di punti vendita con tempi costanti."],
  ["Continuità", "Un referente unico segue il progetto dal brief alla consegna, anche su commesse complesse."],
  ["Materiali", "Selezioniamo materiali e fornitori in base alla durata e all'ambiente di destinazione di ogni elemento."],
];

export default function AboutPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  useScrollReveal(rootRef);

  return (
    <div ref={rootRef}>
      <SEO
        title="Chi Siamo | Europromo - Comunicazione Visiva per il Punto Vendita"
        description="Europromo progetta e produce sistemi di comunicazione visiva per la GDO e il retail. Scopri il nostro metodo, la nostra scala produttiva e il nostro approccio ai rollout multi-negozio."
        canonical="https://www.europromo.it/chi-siamo"
      />

      <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
        <EllipseDecor className="right-[-10%] top-[5%] w-[40rem] text-ink" />
        <div className="container-grid relative">
          <SectionLabel index="CHI SIAMO">La nostra storia</SectionLabel>
          <h1 data-reveal className="max-w-[18ch] font-display text-[clamp(2.25rem,6vw,5rem)] font-bold leading-[0.95] tracking-tightest text-balance">
            Print. Pack. <span className="text-blue">Perform.</span>
          </h1>
          <p data-reveal className="mt-8 max-w-2xl text-base leading-relaxed text-graphite md:text-lg">
            Europromo nasce per dare alla grande distribuzione e al retail un
            unico punto di riferimento per la comunicazione visiva del punto
            vendita: dalla stampa di un singolo banner al rollout completo di
            una rete nazionale.
          </p>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-paper py-section">
        <div className="container-grid">
          <div className="grid gap-16 lg:grid-cols-12">
            <div data-reveal className="lg:col-span-6">
              <SectionLabel index="01">Il metodo</SectionLabel>
              <h2 className="max-w-[14ch] font-display text-[clamp(1.75rem,4vw,3.25rem)] font-bold leading-[0.95] tracking-tightest text-balance">
                Un brief, un flusso, un risultato uniforme ovunque.
              </h2>
              <p className="mt-6 max-w-lg leading-relaxed text-graphite">
                Ogni progetto parte da una raccolta misure precisa: dimensioni
                degli spazi, configurazioni delle scaffalature, vincoli di
                installazione. Da qui costruiamo la distinta dei materiali e
                pianifichiamo la produzione, mantenendo lo stesso standard
                qualitativo su ogni unità prodotta, sia che si tratti di un
                pezzo singolo o di una fornitura per centinaia di negozi.
              </p>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <PlaceholderScene variant="team" className="aspect-[4/5] w-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-mist/40 py-section-lg">
        <div className="container-grid">
          <SectionLabel index="02">Numeri</SectionLabel>
          <div data-reveal-group className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-4">
            <StatBlock value="14" label="Famiglie di prodotto" />
            <StatBlock value="01" label="Referente per ogni commessa" />
            <StatBlock value="100%" label="Controllo interno del flusso" />
            <StatBlock value="IT" label="Consegne su tutto il territorio" />
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-paper py-section-lg">
        <div className="container-grid">
          <SectionLabel index="03">Come lavoriamo</SectionLabel>
          <div data-reveal-group className="grid gap-x-10 gap-y-16 sm:grid-cols-2">
            {values.map(([title, desc]) => (
              <div key={title} data-reveal className="border-t border-ink/15 pt-7">
                <h3 className="font-display text-2xl font-bold tracking-tight">{title}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-graphite">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-paper py-section-lg">
        <div className="container-grid">
          <div className="grid gap-12 lg:grid-cols-12">
            <div data-reveal className="lg:col-span-7">
              <PlaceholderScene variant="warehouse" className="aspect-[16/9] w-full" grayscale />
            </div>
            <div data-reveal className="flex flex-col lg:col-span-4 lg:col-start-9 justify-center">
              <h2 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-[0.95] tracking-tightest text-balance">
                Vuoi visitare lo stabilimento o parlare con il nostro team?
              </h2>
              <CTAButton to="/contatti" variant="light" className="mt-8 self-start">
                Contattaci
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
