export interface Review {
  initials: string;
  name: string;
  city: string;
  stars: number;
  body: string;
}

export const reviews: Review[] = [
  {
    initials: "SM",
    name: "Sophia M.",
    city: "Salerno",
    stars: 5,
    body: '"Tagli impeccabili e tessuti di rara qualità. La disponibilità durante la scelta in negozio è stata eccellente."',
  },
  {
    initials: "GR",
    name: "Giulia R.",
    city: "Roma",
    stars: 5,
    body: '"Servizio ordini su WhatsApp veloce, discreto e puntuale. Il capo è arrivato perfettamente confezionato in 24h."',
  },
  {
    initials: "ML",
    name: "Martina L.",
    city: "Torino",
    stars: 4,
    body: '"Un punto di riferimento per chi cerca capi minimali ed eleganti che non passano mai di moda."',
  },
  {
    initials: "FT",
    name: "Francesca T.",
    city: "Bologna",
    stars: 5,
    body: '"Cura nei dettagli unica. Il blazer acquistato è diventato subito il capo chiave del mio guardaroba."',
  },
];
