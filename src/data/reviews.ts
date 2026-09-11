export interface Review {
  initials: string;
  name: string;
  city: string;
  stars: number;
  body: string;
}

export const reviews: Review[] = [
  {
    initials: "CB",
    name: "Chiara B.",
    city: "Salerno",
    stars: 5,
    body: '"Passo sempre in negozio in Via dei Mercanti quando sono in centro! Le ragazze sono dolcissime e ti consigliano con sincera premura. Il completo preso la settimana scorsa è comodissimo e fa un figurone."',
  },
  {
    initials: "GR",
    name: "Giulia R.",
    city: "Roma",
    stars: 5,
    body: '"Ero un po\' titubante a ordinare su WhatsApp, ma mi hanno mandato subito foto dal vivo e misure in centimetri. Pacco arrivato il giorno dopo, vestibilità perfetta!"',
  },
  {
    initials: "ML",
    name: "Martina L.",
    city: "Napoli",
    stars: 5,
    body: "\"I pantaloni palazzo li ho praticamente consumati! Tessuto fluido che non si stropiccia in borsa, perfetti per l'ufficio la mattina e per l'aperitivo la sera.\"",
  },
  {
    initials: "FT",
    name: "Francesca T.",
    city: "Milano",
    stars: 5,
    body: '"Scoperte su Instagram: ho scritto per un abito prima di un weekend in costiera. Servizio super carino e pacco profumato all\'apertura! Ricevuto un sacco di complimenti."',
  },
  {
    initials: "ES",
    name: "Elena S.",
    city: "Salerno",
    stars: 5,
    body: '"Capi che puoi abbinare sia con le sneakers che con i tacchi. Praticità vera senza rinunciare allo stile, ormai è la mia tappa fissa a Salerno."',
  },
  {
    initials: "AS",
    name: "Anna S.",
    city: "Avellino",
    stars: 4,
    body: '"Di tutto e di più. In questo negozio ho trovato abiti, costumi, ciabatte e finanche parei…tutto l’occorrente per passare una frizzante estate!!"',
  },
  {
    initials: "LG",
    name: "Luana G.",
    city: "Bologna",
    stars: 4,
    body: '"Negozio ottimo, abbigliamento alla moda, versatile e molto conveniente, la commessa è molto gentile…consigliato!!"',
  },
  {
    initials: "MV",
    name: "Manuela V.",
    city: "Salerno",
    stars: 5,
    body: '"Una vera perla nel cuore di Via dei Mercanti. Capi di tendenza, tessuti curati e un\'accoglienza rara ed elegante. Consigliatissimo!"',
  },
];
