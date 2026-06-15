export interface Product {
  slug: string;
  number: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  longDescription: string;
  features: string[];
  materials: string[];
  formats: string[];
  applications: string[];
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
}

export const products: Product[] = [
  {
    slug: "stampe-grande-formato",
    number: "01",
    name: "Stampe digitali e banner grande formato",
    shortName: "Stampe grande formato",
    tagline: "Dalla bobina al punto vendita, su qualsiasi superficie.",
    description:
      "Stampa digitale grande formato su supporti rigidi e flessibili, per banner, vetrofanie, pannelli e allestimenti su misura.",
    longDescription:
      "La stampa grande formato è la base di ogni progetto di comunicazione per il punto vendita. Lavoriamo su PVC, tessuto, carta e supporti rigidi fino a 3,2 metri di larghezza in bobina e 2,5 x 3,1 metri in piano, garantendo colori uniformi su grandi quantità e su rollout multi-negozio. Ogni banner viene prodotto su misura: dimensioni, finiture, occhielli, asole e sistemi di fissaggio sono definiti insieme al cliente in base al punto di applicazione.",
    features: [
      "Stampa da bobina fino a 3,2 m di larghezza",
      "Stampa UV piana fino a 2,5 x 3,1 m",
      "Colori uniformi su grandi tirature",
      "Finiture: occhielli, asole, ribattino, telo teso",
      "Gestione rollout multi-punto vendita",
    ],
    materials: ["PVC banner", "Tessuto poliestere", "Carta fotografica", "Forex / PVC rigido", "Vinile adesivo"],
    formats: ["Banner verticali e orizzontali", "Pannelli rigidi su misura", "Striscioni vetrina", "Grafiche per espositori"],
    applications: ["Vetrine stagionali", "Comunicazione promozionale", "Allestimenti temporanei", "Decorazione reparto"],
    seoTitle: "Stampe Grande Formato per GDO e Retail | Banner su Misura - Europromo",
    seoDescription:
      "Stampa digitale grande formato su PVC, tessuto e supporti rigidi per supermercati e catene retail. Banner, pannelli e vetrofanie su misura, prodotti in scala. Richiedi un preventivo.",
    keywords: ["stampa grande formato", "banner personalizzati GDO", "stampa digitale retail", "pannelli pubblicitari supermercato"],
  },
  {
    slug: "insegne-lettere-3d",
    number: "02",
    name: "Insegne e lettere 3D fresate",
    shortName: "Insegne e lettere 3D",
    tagline: "Il marchio che si vede da lontano, in ogni materiale.",
    description:
      "Insegne luminose e non, lettere scatolate e elementi tridimensionali fresati per facciate, interni ed esterni dei punti vendita.",
    longDescription:
      "Le insegne e le lettere 3D sono il primo punto di contatto tra il marchio e il cliente. Realizziamo elementi fresati e sagomati in PVC, alluminio composito, PMMA e metallo, con finiture lucide, opache o retroilluminate. Ogni insegna viene progettata per resistere a esterni, garantendo precisione dimensionale e predisposizione al montaggio rapido in negozio, anche su reti con decine di punti vendita.",
    features: [
      "Fresatura CNC di precisione",
      "Lettere scatolate retroilluminate a LED",
      "Finiture lucide, opache, effetto metallo",
      "Resistenza a esterni e UV",
      "Kit di montaggio predisposti per installazione rapida",
    ],
    materials: ["PVC espanso", "Alluminio composito (Dibond)", "PMMA / plexiglass", "Acciaio e alluminio", "Vinili e pellicole"],
    formats: ["Lettere scatolate", "Insegne a bandiera", "Totem di facciata", "Logo tridimensionali da interno"],
    applications: ["Facciate negozio", "Ingressi reparto", "Brand wall", "Segnaletica direzionale esterna"],
    seoTitle: "Insegne e Lettere 3D Fresate per Negozi e GDO | Europromo",
    seoDescription:
      "Insegne luminose, lettere scatolate e elementi 3D fresati su misura per facciate, interni ed esterni del punto vendita. Produzione e rollout multi-negozio.",
    keywords: ["insegne negozi", "lettere 3D fresate", "insegne luminose retail", "segnaletica esterna GDO"],
  },
  {
    slug: "adesivi-vetrina",
    number: "03",
    name: "Adesivi e pellicole per vetrina",
    shortName: "Adesivi per vetrina",
    tagline: "La vetrina parla, anche quando il negozio è chiuso.",
    description:
      "Pellicole adesive coprenti, trasparenti, satinate e microforate per vetrofanie, decorazioni e comunicazione stagionale.",
    longDescription:
      "Le vetrofanie trasformano la vetrina in uno strumento di comunicazione attivo 24 ore su 24. Tagliamo e applichiamo pellicole coprenti, trasparenti, satinate e microforate (one-way vision), perfette per promozioni stagionali, oscuramenti parziali, brand wall su vetro e comunicazione di prodotto. Il taglio digitale sagomato permette qualsiasi forma, anche complessa, mantenendo precisione su grandi superfici.",
    features: [
      "Taglio digitale sagomato di precisione",
      "Pellicole microforate one-way vision",
      "Applicazione professionale senza bolle",
      "Adesivi removibili senza residuo",
      "Produzione per rollout stagionali multi-negozio",
    ],
    materials: ["Vinile coprente", "Pellicola microforata", "Vinile trasparente", "Vinile satinato e smerigliato", "Laminazione protettiva"],
    formats: ["Vetrofanie a tutta altezza", "Loghi e scritte sagomate", "Decorazioni stagionali", "Oscuranti parziali"],
    applications: ["Vetrine ingresso", "Porte e separatori in vetro", "Comunicazione promozionale stagionale", "Privacy uffici e magazzini"],
    seoTitle: "Adesivi e Vetrofanie per Negozi e Supermercati | Europromo",
    seoDescription:
      "Adesivi per vetrina su misura: pellicole coprenti, trasparenti e microforate per vetrofanie promozionali e decorazioni stagionali. Taglio digitale sagomato.",
    keywords: ["vetrofanie negozi", "adesivi vetrina personalizzati", "pellicole microforate", "decorazione vetrine supermercato"],
  },
  {
    slug: "comunicazione-corsie",
    number: "04",
    name: "Comunicazione per corsie e reparti",
    shortName: "Comunicazione per corsie",
    tagline: "Guida il percorso d'acquisto, corsia per corsia.",
    description:
      "Testate di gondola, bandiere, segnaletica sospesa e richiami promozionali per orientare il cliente lungo il punto vendita.",
    longDescription:
      "La comunicazione di corsia è ciò che guida il cliente da un reparto all'altro e attiva l'acquisto d'impulso. Progettiamo e produciamo testate di gondola, bandiere sospese, segnaletica di reparto e richiami promozionali coordinati con la campagna in corso. Ogni elemento è pensato per essere leggibile a distanza, resistente alla movimentazione quotidiana e facilmente sostituibile per le rotazioni promozionali.",
    features: [
      "Testate di gondola personalizzate",
      "Bandiere e segnaletica sospesa",
      "Sistemi di aggancio universali",
      "Grafiche intercambiabili per rotazione promo",
      "Coordinamento visivo con campagne in corso",
    ],
    materials: ["Forex / PVC rigido", "Cartone alveolare", "Tessuto stampato", "PET riciclato"],
    formats: ["Testate gondola", "Bandiere corsia", "Segnaletica sospesa", "Stopper da scaffale"],
    applications: ["Orientamento percorso d'acquisto", "Lancio nuovi prodotti", "Promozioni stagionali", "Comunicazione di reparto"],
    seoTitle: "Comunicazione per Corsie e Reparti GDO | Testate Gondola - Europromo",
    seoDescription:
      "Testate di gondola, bandiere e segnaletica per corsie e reparti della GDO. Comunicazione promozionale coordinata, prodotta per rollout multi-negozio.",
    keywords: ["testate gondola personalizzate", "comunicazione corsie supermercato", "segnaletica reparto GDO", "bandiere promozionali negozio"],
  },
  {
    slug: "profili-scaffali",
    number: "05",
    name: "Profili e bracci per scaffali",
    shortName: "Profili per scaffali",
    tagline: "Compatibili con ogni configurazione di scaffalatura.",
    description:
      "Profili portaetichette, bracci e supporti compatibili con le principali configurazioni di scaffali e gondole, in lunghezze e attacchi su specifica.",
    longDescription:
      "I profili per scaffali sono l'infrastruttura invisibile che organizza l'informazione di prezzo e prodotto su ogni ripiano. Forniamo profili portaetichette, bracci a sbalzo, ganci e supporti compatibili con le principali marche e configurazioni di scaffalatura presenti nella GDO italiana. Disponibili in lunghezze standard (da 600 a 1330 mm) e su misura, con attacchi a incastro, a clip o magnetici, in plastica PVC/PS o alluminio.",
    features: [
      "Compatibilità con le principali scaffalature GDO",
      "Lunghezze standard 600 / 727 / 1000 / 1330 mm e su misura",
      "Attacchi a incastro, clip o magnetici",
      "Profili in PVC, PS e alluminio anodizzato",
      "Bracci a sbalzo per ripiani e cestoni",
    ],
    materials: ["PVC rigido", "Polistirene (PS)", "Alluminio anodizzato", "Plexiglass per inserti"],
    formats: ["Profili portaetichette frontali", "Bracci a sbalzo", "Profili divisori scaffale", "Supporti per ripiani inclinati"],
    applications: ["Gondole e scaffali centrali", "Banchi frigo e cestoni", "Reparti freschi e gastronomia", "Aree promozionali"],
    seoTitle: "Profili e Bracci per Scaffali Supermercato | Portaetichette GDO - Europromo",
    seoDescription:
      "Profili portaetichette, bracci e supporti per scaffalature GDO, compatibili con i principali sistemi di gondola. Lunghezze standard e su misura.",
    keywords: ["profili portaetichette scaffali", "bracci scaffali supermercato", "profili gondole GDO", "supporti scaffalature retail"],
  },
  {
    slug: "portaprezzi-scaffali",
    number: "06",
    name: "Portaprezzi per scaffali",
    shortName: "Portaprezzi",
    tagline: "Il prezzo, sempre al posto giusto.",
    description:
      "Portaetichette e portaprezzi per gondole, ripiani e cestelli, in versione adesiva, magnetica e a incastro.",
    longDescription:
      "Il portaprezzi è uno degli elementi più replicati in un punto vendita: deve essere economico, resistente e perfettamente compatibile con il profilo dello scaffale. Produciamo portaetichette in PVC e PS trasparente, in formati standard (39, 53, 66, 100 mm di altezza) e su misura, con fissaggio adesivo, a clip o magnetico, adatti a gondole, banchi frigo, cestoni e scaffalature a rete.",
    features: [
      "Formati standard 39 / 53 / 66 / 100 mm",
      "Fissaggio adesivo, a clip, magnetico o a incastro",
      "PVC e PS trasparenti o colorati",
      "Compatibili con profili e bracci Europromo",
      "Forniture in grandi quantità per rollout",
    ],
    materials: ["PVC trasparente", "Polistirene (PS)", "Magneti flessibili", "Adesivo permanente o removibile"],
    formats: ["Portaetichette frontali", "Portaprezzi per cestoni", "Etichette magnetiche", "Inserti per profili divisori"],
    applications: ["Gondole centrali", "Banchi frigo e congelatori", "Scaffalature a rete e filo", "Aree promozionali e testate"],
    seoTitle: "Portaprezzi per Scaffali Supermercato | Portaetichette GDO - Europromo",
    seoDescription:
      "Portaprezzi e portaetichette per scaffali, gondole e cestoni della GDO. Versioni adesive, magnetiche e a incastro, in formati standard e su misura.",
    keywords: ["portaprezzi scaffali", "portaetichette supermercato", "portaprezzi magnetici GDO", "etichette prezzo scaffale"],
  },
  {
    slug: "profili-slim-plexi",
    number: "07",
    name: "Profili slim e divisori in plexiglass",
    shortName: "Profili slim plexi",
    tagline: "Ordine al ripiano, prodotto sempre in prima fila.",
    description:
      "Sistemi sottili di separazione e avanzamento prodotto in plexiglass trasparente, con misure modulari per ogni tipo di ripiano.",
    longDescription:
      "I profili slim e i divisori in plexiglass mantengono i prodotti ordinati, separati per referenza e sempre rivolti verso il cliente. Realizziamo sistemi modulari in plexiglass trasparente con meccanismo di avanzamento a molla (pusher) o divisori fissi, dimensionati sulla profondità del ripiano. Ideali per cosmetica, farmacia, alimentari confezionati e ogni reparto dove l'ordine visivo incide sulla vendita.",
    features: [
      "Plexiglass trasparente alta trasparenza",
      "Misure modulari adattabili alla profondità del ripiano",
      "Sistemi pusher con meccanismo a molla",
      "Divisori fissi regolabili",
      "Installazione rapida senza utensili",
    ],
    materials: ["Plexiglass (PMMA) trasparente", "PVC trasparente", "Meccanismi a molla in acciaio"],
    formats: ["Divisori fissi", "Sistemi pusher ad avanzamento", "Profili separatori modulari", "Frontalini trasparenti"],
    applications: ["Cosmetica e profumeria", "Farmacia e parafarmacia", "Alimentari confezionati", "Cancelleria e editoria"],
    seoTitle: "Divisori e Profili Slim in Plexiglass per Scaffali | Europromo",
    seoDescription:
      "Profili slim e divisori in plexiglass trasparente per scaffali GDO, farmacia e cosmetica. Sistemi pusher e divisori modulari su misura.",
    keywords: ["divisori plexiglass scaffali", "profili slim retail", "pusher scaffale", "divisori prodotto supermercato"],
  },
  {
    slug: "light-box",
    number: "08",
    name: "Light box e cassonetti luminosi",
    shortName: "Light box",
    tagline: "Comunicazione che si illumina, grafica che si cambia.",
    description:
      "Cassonetti luminosi a parete, sospesi o autoportanti per grafiche retroilluminate intercambiabili.",
    longDescription:
      "I light box trasformano un messaggio statico in un elemento che si nota anche a distanza e in ambienti con poca luce naturale. Produciamo cassonetti luminosi a LED a parete, sospesi o autoportanti, con sistema di apertura frontale per la sostituzione rapida della grafica. Strutture in alluminio con profili sottili, illuminazione uniforme e bassi consumi, adatte sia a singoli punti vendita che a rollout di rete.",
    features: [
      "Illuminazione LED a basso consumo",
      "Telai in alluminio con apertura frontale rapida",
      "Grafiche intercambiabili su tessuto retroilluminato o PVC",
      "Versioni a parete, sospese e autoportanti",
      "Spessori sottili (silicone edge graphics)",
    ],
    materials: ["Profili in alluminio", "Tessuto retroilluminato (backlit)", "PVC translucido", "Moduli LED"],
    formats: ["Light box a parete", "Totem luminosi autoportanti", "Cassonetti sospesi", "Cornici a profilo sottile (SEG)"],
    applications: ["Vetrine e ingressi", "Banchi gastronomia e freschi", "Aree promozionali", "Insegne interne di reparto"],
    seoTitle: "Light Box e Cassonetti Luminosi per Negozi e GDO | Europromo",
    seoDescription:
      "Light box LED a parete, sospesi e autoportanti per comunicazione retroilluminata nei punti vendita. Grafiche intercambiabili, produzione su misura.",
    keywords: ["light box pubblicitari", "cassonetti luminosi negozio", "insegne retroilluminate LED", "light box retail"],
  },
  {
    slug: "delimitatori-pvc",
    number: "09",
    name: "Delimitatori reparto in PVC",
    shortName: "Delimitatori PVC",
    tagline: "Reparti chiari, percorsi leggibili.",
    description:
      "Separatori e delimitatori in PVC per organizzare categorie, lineari e aree promozionali in modo leggibile.",
    longDescription:
      "I delimitatori di reparto aiutano il cliente a orientarsi tra categorie merceologiche e segnalano in modo chiaro l'inizio e la fine di un'area promozionale. Realizziamo delimitatori in PVC rigido sagomato, personalizzabili con grafica stampata, da installare su pavimento, scaffalatura o testata. Disponibili in diverse altezze e configurazioni, anche con supporto per cartellonistica aggiuntiva.",
    features: [
      "PVC rigido sagomato e stampato",
      "Personalizzazione grafica per categoria",
      "Installazione su pavimento, scaffale o testata",
      "Resistenti alla movimentazione carrelli",
      "Configurazioni modulari per layout complessi",
    ],
    materials: ["PVC rigido", "Forex", "Adesivi e finiture protettive"],
    formats: ["Delimitatori a parete", "Separatori da pavimento", "Cornici categoria", "Pannelli divisori reparto"],
    applications: ["Reparti freschi e gastronomia", "Aree promozionali stagionali", "Organizzazione lineari", "Zone bio e specialità"],
    seoTitle: "Delimitatori e Separatori di Reparto in PVC per GDO | Europromo",
    seoDescription:
      "Delimitatori in PVC per organizzare reparti, categorie e aree promozionali nei punti vendita GDO. Grafica personalizzata su misura.",
    keywords: ["delimitatori reparto PVC", "separatori categoria supermercato", "segnaletica reparto GDO", "organizzazione lineari negozio"],
  },
  {
    slug: "piantane-stand-up",
    number: "10",
    name: "Piantane stand-up",
    shortName: "Piantane stand-up",
    tagline: "Messaggi in piedi, ovunque servano.",
    description:
      "Supporti autoportanti per messaggi informativi e promozionali, con basi stabili e grafiche sostituibili.",
    longDescription:
      "Le piantane stand-up sono la soluzione più flessibile per comunicazione temporanea o permanente all'interno e all'esterno del punto vendita: avvisi, promozioni, segnaletica di sicurezza, indicazioni di percorso. Disponibili in diversi formati (A4, A3, A2, A1) con base in metallo o plastica zavorrabile, telaio in alluminio e grafica intercambiabile inserita in tasca o cornice click.",
    features: [
      "Basi in metallo o plastica zavorrabile",
      "Telai in alluminio leggero",
      "Grafica intercambiabile (tasca o cornice click)",
      "Formati A4, A3, A2, A1 e su misura",
      "Versioni da interno ed esterno",
    ],
    materials: ["Alluminio", "PVC e Forex per grafiche", "Basi in metallo o plastica"],
    formats: ["Piantane a cavalletto", "Piantane con cornice click", "Espositori a leggio", "Segnaletica di sicurezza autoportante"],
    applications: ["Ingressi e aree casse", "Comunicazione promozionale temporanea", "Segnaletica di sicurezza", "Indicazioni di percorso"],
    seoTitle: "Piantane Stand-Up Pubblicitarie per Negozi e GDO | Europromo",
    seoDescription:
      "Piantane stand-up autoportanti per comunicazione promozionale e informativa nei punti vendita. Grafiche intercambiabili, formati A4-A1 e su misura.",
    keywords: ["piantane pubblicitarie negozio", "espositori stand-up", "segnaletica autoportante retail", "piantane promozionali GDO"],
  },
  {
    slug: "roll-up",
    number: "11",
    name: "Roll-up",
    shortName: "Roll-up",
    tagline: "Comunicazione pronta in un minuto, ovunque sia richiesta.",
    description:
      "Espositori avvolgibili trasportabili, con struttura, telo stampato e borsa in un unico kit.",
    longDescription:
      "Il roll-up è lo strumento di comunicazione più versatile per fiere, eventi, lanci di prodotto e comunicazione temporanea in negozio. Forniamo kit completi con struttura in alluminio a meccanismo avvolgibile, telo stampato in alta definizione su materiale antiriflesso e borsa da trasporto rigida. Disponibili in larghezze standard (85, 100, 120, 150 cm) e doppia faccia per visibilità a 360°.",
    features: [
      "Struttura in alluminio a meccanismo avvolgibile",
      "Telo antiriflesso stampa HD",
      "Borsa da trasporto rigida inclusa",
      "Larghezze 85 / 100 / 120 / 150 cm",
      "Versioni doppia faccia disponibili",
    ],
    materials: ["Alluminio", "PVC o tessuto antiriflesso", "Borsa rigida protettiva"],
    formats: ["Roll-up standard", "Roll-up doppia faccia", "Roll-up premium con base illuminata"],
    applications: ["Fiere ed eventi", "Lanci prodotto in negozio", "Comunicazione temporanea reparto", "Aree promozionali stagionali"],
    seoTitle: "Roll-Up Pubblicitari Personalizzati per Negozi e Fiere | Europromo",
    seoDescription:
      "Roll-up personalizzati con struttura, telo stampato HD e borsa da trasporto. Formati standard e doppia faccia per negozi, fiere ed eventi.",
    keywords: ["roll up personalizzati", "espositori roll up GDO", "stampa roll up negozio", "roll up pubblicitari fiere"],
  },
  {
    slug: "totem",
    number: "12",
    name: "Totem promozionali",
    shortName: "Totem",
    tagline: "Presenza scenica per il messaggio che conta di più.",
    description:
      "Totem da pavimento in cartone, PVC, composito o metallo, per produzioni singole e rollout multi-punto vendita.",
    longDescription:
      "I totem da pavimento concentrano l'attenzione su un messaggio o un prodotto in modo scenico, occupando poco spazio a terra. Realizziamo totem in cartone alveolare per produzioni rapide ed economiche su grandi quantità, e in PVC, composito o metallo per soluzioni durevoli e riutilizzabili. Ogni totem viene progettato in base all'altezza, alla base e al sistema di assemblaggio richiesti dal punto vendita.",
    features: [
      "Cartone alveolare per rollout economici su larga scala",
      "PVC e composito per soluzioni durevoli",
      "Strutture in metallo per uso permanente",
      "Basi stabili e a norma di sicurezza",
      "Kit di montaggio rapido senza utensili",
    ],
    materials: ["Cartone alveolare", "PVC espanso", "Materiali compositi", "Metallo (acciaio/alluminio)"],
    formats: ["Totem singoli", "Totem doppia faccia", "Totem con vano espositivo", "Totem digitali (predisposizione schermo)"],
    applications: ["Lanci di prodotto", "Promozioni stagionali", "Aree casse e ingressi", "Rollout nazionali multi-negozio"],
    seoTitle: "Totem Promozionali per Negozi e GDO | Cartone, PVC e Metallo - Europromo",
    seoDescription:
      "Totem promozionali da pavimento in cartone, PVC, composito o metallo per punti vendita GDO. Produzione singola o rollout multi-negozio.",
    keywords: ["totem promozionali negozio", "totem cartone GDO", "espositori da terra retail", "totem pubblicitari supermercato"],
  },
  {
    slug: "separatori-cassa",
    number: "13",
    name: "Separatori cassa",
    shortName: "Separatori cassa",
    tagline: "L'ultimo spazio comunicativo prima dell'uscita.",
    description:
      "Separatori personalizzati per il nastro cassa, con stampa diretta, inserti intercambiabili e formati su richiesta.",
    longDescription:
      "Il nastro cassa è uno spazio comunicativo ad altissima visibilità, visto da ogni cliente in coda. Produciamo separatori personalizzati con stampa diretta o inserti grafici intercambiabili, compatibili con i principali sistemi di cassa della GDO. Materiali resistenti a urti e pulizia frequente, con possibilità di rotazione rapida dei messaggi per campagne stagionali o programmi fedeltà.",
    features: [
      "Compatibili con i principali sistemi cassa GDO",
      "Stampa diretta o inserti intercambiabili",
      "Materiali resistenti a urti e igienizzazione",
      "Rotazione rapida per campagne stagionali",
      "Personalizzazione per programmi fedeltà e promo",
    ],
    materials: ["PVC rigido", "Plexiglass", "Inserti in carta plastificata"],
    formats: ["Separatori standard", "Separatori con tasca porta-grafica", "Separatori brandizzati permanenti"],
    applications: ["Nastri cassa", "Comunicazione programmi fedeltà", "Promozioni last-minute", "Brand awareness in coda"],
    seoTitle: "Separatori Cassa Personalizzati per Supermercati | Europromo",
    seoDescription:
      "Separatori per nastro cassa personalizzati, con stampa diretta o inserti intercambiabili, compatibili con i sistemi cassa della GDO.",
    keywords: ["separatori cassa supermercato", "divisori nastro cassa personalizzati", "comunicazione cassa GDO"],
  },
  {
    slug: "cestini-spesa",
    number: "14",
    name: "Cestini spesa",
    shortName: "Cestini spesa",
    tagline: "Il marchio in mano al cliente, per tutta la spesa.",
    description:
      "Cestini per il punto vendita in diverse capacità e configurazioni, personalizzabili con marchio e colore.",
    longDescription:
      "I cestini spesa sono un punto di contatto continuo tra il cliente e il marchio durante tutta la permanenza in negozio. Forniamo cestini in plastica e metallo in diverse capacità (impilabili e con o senza ruote), personalizzabili nel colore e con applicazione del logo tramite stampa o targhette. Disponibili in fornitura standard o su commessa dedicata per reti di negozi.",
    features: [
      "Diverse capacità: piccoli, medi, con ruote",
      "Impilabili per ottimizzare lo spazio",
      "Personalizzazione colore e branding",
      "Materiali plastici resistenti e metallo",
      "Forniture per singolo punto vendita o rete",
    ],
    materials: ["Polipropilene (PP)", "Metallo verniciato", "Ruote in gomma/nylon", "Targhette e adesivi brandizzati"],
    formats: ["Cestini a mano standard", "Cestini con ruote", "Cestini impilabili capienti"],
    applications: ["Aree ingresso negozio", "Reparti self-service", "Promozioni con cestino dedicato", "Rebranding rete vendita"],
    seoTitle: "Cestini Spesa Personalizzati per Supermercati | Europromo",
    seoDescription:
      "Cestini spesa per punti vendita in diverse capacità, personalizzabili con marchio e colore. Forniture per singolo negozio o intera rete GDO.",
    keywords: ["cestini spesa personalizzati", "cestini supermercato brandizzati", "carrelli e cestini GDO"],
  },
];

export const sectors = [
  { name: "Supermercati e Ipermercati", slug: "supermercati" },
  { name: "Catene di negozi e franchising", slug: "catene-negozi" },
  { name: "Farmacie e parafarmacie", slug: "farmacie" },
  { name: "Cosmetica e profumeria", slug: "cosmetica" },
  { name: "Elettronica e grandi superfici", slug: "elettronica" },
  { name: "Fai-da-te e bricolage", slug: "bricolage" },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
