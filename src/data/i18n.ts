export type Lang = "it" | "en";

export interface Translations {
  [key: string]: string;
}

export const translations: Record<Lang, Translations> = {
  it: {
    // ── Header & Navigation ──
    "nav.home": "Home",
    "nav.collection": "Collezione",
    "nav.shop": "Negozio & Ordini",
    "nav.mobile_order": "Ordina",
    "nav.slogan": "La praticità prima di tutto",

    // ── Marquee ──
    "marquee.text":
      "Amart Store Salerno — La praticità prima di tutto — Spedizioni in 24/48h in tutta Italia — Via dei Mercanti 131 — Ordini diretti via WhatsApp — Ritiro in sede su appuntamento —",

    // ── Hero Section (Home) ──
    "hero.badge": "Amart Store Salerno · Collezione 2026",
    "hero.title_html":
      'Stile, Luce &<br><em class="italic font-light text-gold-light">Praticità Quotidiana</em>',
    "hero.cta_collection": "Esplora Collezione",
    "hero.cta_contact": "Vieni a Trovarci",
    "hero.desc":
      "La praticità prima di tutto.<br>Capi versatili che uniscono le ultime tendenze alla libertà e alla freschezza del mare.",
    "hero.scroll": "Scroll",

    // ── Mission, Obiettivi & Valori (Home) ──
    "manifesto.eyebrow": "La Nostra Identità",
    "manifesto.title":
      "La praticità prima di tutto: esaltare la bellezza autentica.",
    "manifesto.desc":
      "La nostra mission è esaltare la bellezza autentica di ogni donna attraverso un abbigliamento che la faccia sentire una vera protagonista: sempre al centro dell'attenzione, ma con innata semplicità ed eleganza. Ci ispiriamo alla libertà e alla luce del mare per creare collezioni capaci di unire lo stile più attuale al comfort del look casual di tutti i giorni.",

    "mission.title": "La Nostra Mission",
    "mission.desc":
      "Esaltare la bellezza autentica di ogni donna attraverso un abbigliamento che la faccia sentire sempre al centro dell'attenzione, con innata semplicità, eleganza e la praticità al primo posto.",

    // Obiettivi
    "objectives.title": "I Nostri Obiettivi",
    "objectives.point1_title": "Valorizzare la Femminilità",
    "objectives.point1_desc":
      "Creare capi che facciano sentire ogni donna affascinante, sicura di sé e protagonista in ogni occasione.",
    "objectives.point2_title": "Rendere il Bello Accessibile",
    "objectives.point2_desc":
      "Offrire una qualità accurata a un prezzo equo, dimostrando che la vera eleganza non deve necessariamente richiedere grandi cifre.",
    "objectives.point3_title": "Unire Tendenza e Praticità",
    "objectives.point3_desc":
      "Proporre un abbigliamento sempre alla moda ma versatile, perfettamente adatto al ritmo dinamico della vita quotidiana.",

    // Valori
    "values.title": "I Nostri Valori Fondamentali",
    "values.point1_title": "Eleganza Senza Sforzo",
    "values.point1_desc":
      "Crediamo in una bellezza raffinata e mai ostentata, dove la semplicità è la forma più alta di sofisticatezza.",
    "values.point2_title": "Qualità Trasparente",
    "values.point2_desc":
      "Ci impegniamo nella ricerca di tessuti e dettagli curati, mantenendo il valore d'acquisto alla portata di tutte.",
    "values.point3_title": "Ispirazione Marina",
    "values.point3_desc":
      "Il mare è la nostra radice creativa: da esso attingiamo freschezza, senso di libertà, colori e uno stile senza tempo.",

    // ── Spedizioni & Servizi (Home & Shop) ──
    "services.eyebrow": "Spedizioni & Ritiro",
    "services.title": "Consegne Rapide & Ritiro in Sede",
    "services.shipping_title": "Spedizione Rapida 24/48h",
    "services.shipping_desc":
      "Spedizioni in tutta Italia dal lunedì al venerdì. Tempi medi di consegna 24/48 ore (festivi esclusi).",
    "services.pickup_title": "Ritiro in Locale su Appuntamento",
    "services.pickup_desc":
      "Preferisci ritirare di persona? Il ritiro in sede è sempre disponibile su appuntamento nel nostro negozio a Salerno.",
    "services.wa_title": "Assistenza & Ordini WhatsApp",
    "services.wa_desc":
      "Scrivici su WhatsApp per disponibilità taglie, foto aggiuntive, ordini immediati o concordare il ritiro.",

    // ── Featured Carousel (Home) ──
    "featured.eyebrow": "Selezione in Evidenza",
    "featured.title": "Capi della Stagione",
    "featured.desc":
      "Dalla vita quotidiana alle occasioni speciali: capi pratici, versatili e ricchi di stile.",
    "featured.all_btn": "Vedi Tutto il Catalogo",

    // ── Reviews & Stats (Home) ──
    "reviews.eyebrow": "Esperienze & Recensioni",
    "reviews.title": "La Voce delle Nostre Clienti",
    "reviews.desc":
      "Parole di chi vive la moda Amart Store Salerno tra stile, comfort e praticità.",
    "stats.curated": "Moda Donna & Praticità",
    "stats.shipping": "Consegna 24/48h Italia",
    "stats.rating": "Soddisfazione Clienti",

    // ── Final CTA (Home) ──
    "cta.title": "Vieni a trovarci in Via dei Mercanti a Salerno.",
    "cta.desc":
      "Scopri le collezioni in negozio in Via dei Mercanti 131 o ordina comodamente via WhatsApp con spedizione 24/48h.",
    "cta.collection_btn": "Esplora la Collezione",
    "cta.location_btn": "Dove Siamo & Contatti",

    // ── Collection Page ──
    "collezione.header_eyebrow": "Catalogo Amart Store Salerno",
    "collezione.header_title": "Collezione Donna",
    "collezione.header_desc":
      "Pantaloni, maglie, top, abiti, giacche e accessori. Trova il capo ideale e ordinalo con un messaggio WhatsApp.",
    "collezione.filter_all": "Tutti",
    "collezione.filter_pants": "Pantaloni",
    "collezione.filter_knitwear": "Maglie",
    "collezione.filter_tops": "Top & Camicie",
    "collezione.filter_dresses": "Abiti",
    "collezione.filter_jackets": "Giacche",
    "collezione.filter_accessories": "Accessori",
    "collezione.empty_state": "Nessun capo disponibile in questa categoria.",
    "collezione.reset_filter": "Mostra tutti i capi",
    "collezione.showing_all": "Tutti i capi ({count})",
    "collezione.showing_category": "{category} ({count} capi)",

    // ── Lookbook Section (Collection) ──
    "lookbook.eyebrow": "Look & Ispirazioni",
    "lookbook.title": "Lookbook Amart Store Salerno",
    "lookbook.scroll_hint": "Scorri",
    "lookbook.look1_title": "Praticità Elegante",
    "lookbook.look2_title": "Freschezza Quotidiana",
    "lookbook.look3_title": "Brezza Marina & Colore",
    "lookbook.look4_title": "Stile Senza Tempo",
    "lookbook.editorial_quote":
      "“La vera eleganza si riconosce dalla naturalezza e dalla comodità con cui la indossi.”",
    "lookbook.editorial_body":
      "Ogni combinazione nasce per farti sentire sicura, chic e libera di muoverti in ogni momento della tua giornata.",
    "lookbook.editorial_cta": "Richiedi il tuo look via WhatsApp →",
    "lookbook.instagram_btn": "Seguici su Instagram @amartstore_salerno",

    // ── Shop & Orders Page (Acquista) ──
    "acquista.header_eyebrow": "Contatti, Ordini & Sede",
    "acquista.header_title": "Modalità di Acquisto & Visita",
    "acquista.header_desc":
      "Siamo in Via dei Mercanti 131 a Salerno. Ordina comodamente online su WhatsApp o vieni a trovarci.",
    "acquista.contacts_eyebrow": "Canali Diretti",
    "acquista.contacts_title": "Mettiti in Contatto con Noi",
    "acquista.phone_tag": "Telefono",
    "acquista.phone_title": "Chiamata Diretta",
    "acquista.phone_desc":
      "+39 347 266 2754 — supporto telefonico negli orari di apertura del negozio.",
    "acquista.phone_btn": "Chiama Ora",
    "acquista.wa_tag": "WhatsApp",
    "acquista.wa_title": "WhatsApp Direct",
    "acquista.wa_desc":
      "Consigli di stile, verifica taglie e colori, ordini immediati e prenotazione ritiro in sede.",
    "acquista.wa_btn": "Scrivici su WhatsApp",
    "acquista.ig_tag": "Instagram",
    "acquista.ig_title": "Instagram Ufficiale",
    "acquista.ig_desc":
      "@amartstore_salerno — novità giornaliere, video dei capi indossati e consigli di outfit.",
    "acquista.ig_btn": "Apri Instagram",

    // ── Quick Info ──
    "acquista.quick_eyebrow": "Info Rapide",
    "acquista.quick_title": "Orari & Servizi",
    "acquista.quick_hours": "Orari di Apertura",
    "acquista.quick_map": "Indicazioni Mappa",
    "acquista.quick_write": "Chatta su WhatsApp",

    // ── Store Location & Schedule ──
    "acquista.store_eyebrow": "Negozio di Salerno",
    "acquista.store_title": "Punto Vendita Amart Store Salerno",
    "acquista.store_address_label": "Indirizzo Negozio",
    "acquista.store_address_val": "Via dei Mercanti 131, 84121 Salerno (SA)",
    "acquista.store_hours_label": "Orari di Apertura",
    "acquista.store_hours_week": "Lun – Ven: 10:00 – 20:30",
    "acquista.store_hours_sat": "Sabato: 10:00 – 00:00",
    "acquista.store_hours_sun": "Domenica: 10:00 – 22:00",
    "acquista.store_contact_label": "Recapiti Diretti",
    "acquista.store_phone_label": "Telefono & WhatsApp",
    "acquista.store_wa_label": "WhatsApp",

    // ── Spedizioni Detail Box ──
    "shipping.box_title": "Informazioni su Spedizioni & Ritiro",
    "shipping.box_item1_label": "Tempi Medi Spedizione",
    "shipping.box_item1_val":
      "24/48 ore lavorative con corriere espresso in tutta Italia",
    "shipping.box_item2_label": "Giorni Operativi",
    "shipping.box_item2_val":
      "Lunedì – Venerdì (spedizioni non operative nei giorni festivi)",
    "shipping.box_item3_label": "Ritiro in Negozio",
    "shipping.box_item3_val":
      "Disponibile gratuitamente su appuntamento in Via dei Mercanti 131, Salerno",

    // ── Company Legal Data ──
    "company.legal_title": "Dati Societari & Trasparenza",
    "company.ragione_sociale": "GA.SA.SRLS",
    "company.piva": "P.IVA: 01670400656",
    "company.sede_legale": "Sede legale: Calata San Vito 1A-1B, 84126 Salerno",
    "company.rea": "Numero REA: SA-502580",
    "company.pec": "PEC: ga.sasrls@pec.it",

    // ── Boutique Experience Banner ──
    "acquista.exp_eyebrow": "Il Negozio a Salerno",
    "acquista.exp_title": "Nel cuore di Via dei Mercanti.",
    "acquista.exp_desc":
      "Amart Store Salerno ti aspetta in Via dei Mercanti 131: uno spazio accogliente dove provare i capi con tutta la calma e la disponibilità che meriti.",

    // ── Modal Orari ──
    "modal.hours_eyebrow": "Amart Store Salerno",
    "modal.hours_title": "Orari di Apertura Settimanali",
    "modal.hours_open_now": "Negozio attualmente aperto",
    "modal.hours_closed_now": "Negozio attualmente chiuso",
    "modal.hours_today": "— oggi",
    "modal.hours_closed_day": "Chiuso",
    "modal.hours_cta": "Scrivici su WhatsApp per Informazioni",
    "modal.day_monday": "Lunedì",
    "modal.day_tuesday": "Martedì",
    "modal.day_wednesday": "Mercoledì",
    "modal.day_thursday": "Giovedì",
    "modal.day_friday": "Venerdì",
    "modal.day_saturday": "Sabato",
    "modal.day_sunday": "Domenica",

    // ── Product Card Actions & Badges ──
    "card.order": "Ordina su WhatsApp",
    "badge.new": "Novità",
    "badge.classic": "Continuativo",
    "badge.musthave": "Must Have",
    "category.pantaloni": "Pantaloni",
    "category.maglie": "Maglie",
    "category.top": "Top & Camicie",
    "category.abiti": "Abiti",
    "category.giacche": "Giacche",
    "category.accessori": "Accessori",
    "product.onesize": "Misura Unica",

    // ── Footer ──
    "footer.desc":
      "Amart Store Salerno — Moda donna curata, pratica e versatile nel centro storico di Salerno.",
    "footer.sitemap": "Mappa Sito",
    "footer.collection": "Collezione",
    "footer.contacts": "Contatti",
    "footer.phone_label": "Telefono & WhatsApp",
    "footer.rights":
      "© 2026 GA.SA.SRLS · Amart Store Salerno. Tutti i diritti riservati.",

    // ── WhatsApp Order Template ──
    "wa.order_template":
      "Salve, Desidero richiedere informazioni su disponibilità e taglie per: {product} {price}, e se è disponibile per la spedizione o per il ritiro in negozio. Grazie!",
  },
  en: {
    // ── Header & Navigation ──
    "nav.home": "Home",
    "nav.collection": "Collection",
    "nav.shop": "Store & Orders",
    "nav.mobile_order": "Order",
    "nav.slogan": "Practicality above all",

    // ── Marquee ──
    "marquee.text":
      "Amart Store Salerno — Practicality above all — Fast 24/48h Delivery throughout Italy — Via dei Mercanti 131 — Direct WhatsApp Orders — In-store pickup by appointment —",

    // ── Hero Section (Home) ──
    "hero.badge": "Amart Store Salerno · 2026 Collection",
    "hero.title_html":
      'Style, Light &<br><em class="italic font-light text-gold-light">Everyday Practicality</em>',
    "hero.cta_collection": "Explore Collection",
    "hero.cta_contact": "Visit Store",
    "hero.desc":
      "Practicality above all.<br>Versatile women’s garments blending current trends with the fresh, breezy spirit of the sea.",
    "hero.scroll": "Scroll",

    // ── Mission, Obiettivi & Valori (Home) ──
    "manifesto.eyebrow": "Our Identity",
    "manifesto.title":
      "Practicality above all: celebrating authentic feminine beauty.",
    "manifesto.desc":
      "Our mission is to enhance the authentic beauty of every woman through garments that make her feel confident and empowered: always in the spotlight, yet with effortless poise, simplicity, and practicality at heart. Inspired by coastal freedom and natural light, we craft collections that combine contemporary trends with everyday casual ease.",

    "mission.title": "Our Mission",
    "mission.desc":
      "To enhance the authentic beauty of every woman through fashion that makes her feel effortlessly radiant and confident, keeping practical ease first.",

    // Obiettivi
    "objectives.title": "Our Objectives",
    "objectives.point1_title": "Celebrating Femininity",
    "objectives.point1_desc":
      "Creating pieces that make every woman feel confident, charming, and the protagonist of every occasion.",
    "objectives.point2_title": "Accessible Beauty",
    "objectives.point2_desc":
      "Offering meticulously curated quality at fair prices, proving that true elegance never requires excessive spending.",
    "objectives.point3_title": "Blending Trend & Practicality",
    "objectives.point3_desc":
      "Proposing on-trend yet versatile apparel perfectly tailored for the dynamic pace of modern everyday life.",

    // Valori
    "values.title": "Our Core Values",
    "values.point1_title": "Effortless Elegance",
    "values.point1_desc":
      "We believe in refined, unpretentious beauty, where simplicity represents the highest form of sophistication.",
    "values.point2_title": "Transparent Quality",
    "values.point2_desc":
      "Dedicated research into comfortable fabrics and neat tailoring, keeping great value within everyone’s reach.",
    "values.point3_title": "Coastal Inspiration",
    "values.point3_desc":
      "The sea is our creative root: we draw freshness, freedom, luminous colors, and timeless grace from its horizon.",

    // ── Spedizioni & Servizi (Home & Shop) ──
    "services.eyebrow": "Shipping & Pickup",
    "services.title": "Express Shipping & In-Store Pickup",
    "services.shipping_title": "Fast 24/48h Nationwide Delivery",
    "services.shipping_desc":
      "Delivery across all Italy from Monday to Friday. Average delivery time 24/48h (excluding public holidays).",
    "services.pickup_title": "Store Pickup by Appointment",
    "services.pickup_desc":
      "Prefer picking up in person? Free in-store collection is available by appointment at our Salerno store.",
    "services.wa_title": "WhatsApp Concierge & Orders",
    "services.wa_desc":
      "Message us on WhatsApp for size advice, extra photos, instant ordering, or scheduling your in-store pickup.",

    // ── Featured Carousel (Home) ──
    "featured.eyebrow": "Featured Selection",
    "featured.title": "Seasonal Highlights",
    "featured.desc":
      "From dynamic everyday wear to memorable moments: chic, practical, and versatile.",
    "featured.all_btn": "View Full Catalog",

    // ── Reviews & Stats (Home) ──
    "reviews.eyebrow": "Client Experiences",
    "reviews.title": "Words from Our Clients",
    "reviews.desc":
      "Impressions from women who embrace Amart Store Salerno style, comfort, and versatility.",
    "stats.curated": "Women’s Fashion & Practicality",
    "stats.shipping": "24/48h Express Shipping",
    "stats.rating": "Customer Rating",

    // ── Final CTA (Home) ──
    "cta.title": "Visit us on Via dei Mercanti in Salerno.",
    "cta.desc":
      "Discover our collections in store at Via dei Mercanti 131 or order directly via WhatsApp with 24/48h shipping.",
    "cta.collection_btn": "Explore Collection",
    "cta.location_btn": "Location & Contacts",

    // ── Collection Page ──
    "collezione.header_eyebrow": "Amart Store Salerno Catalog",
    "collezione.header_title": "Women’s Collection",
    "collezione.header_desc":
      "Trousers, knitwear, tops, dresses, jackets, and accessories. Inquire and order effortlessly via WhatsApp.",
    "collezione.filter_all": "All",
    "collezione.filter_pants": "Trousers",
    "collezione.filter_knitwear": "Knitwear",
    "collezione.filter_tops": "Tops & Shirts",
    "collezione.filter_dresses": "Dresses",
    "collezione.filter_jackets": "Jackets",
    "collezione.filter_accessories": "Accessories",
    "collezione.empty_state": "No garments available in this category.",
    "collezione.reset_filter": "Show all items",
    "collezione.showing_all": "All items ({count})",
    "collezione.showing_category": "{category} ({count} items)",

    // ── Lookbook Section (Collection) ──
    "lookbook.eyebrow": "Editorial Inspirations",
    "lookbook.title": "Amart Store Salerno Lookbook",
    "lookbook.scroll_hint": "Swipe",
    "lookbook.look1_title": "Effortless Chic",
    "lookbook.look2_title": "Fresh Everyday Poise",
    "lookbook.look3_title": "Coastal Breeze & Hue",
    "lookbook.look4_title": "Timeless Practical Style",
    "lookbook.editorial_quote":
      "“True elegance is felt in the ease and confidence with which you wear it.”",
    "lookbook.editorial_body":
      "Every piece is chosen to keep you feeling confident, stylish, and free to move throughout your day.",
    "lookbook.editorial_cta": "Inquire about your look via WhatsApp →",
    "lookbook.instagram_btn": "Follow on Instagram @amartstore_salerno",

    // ── Shop & Orders Page (Acquista) ──
    "acquista.header_eyebrow": "Customer Care & Store",
    "acquista.header_title": "Ordering Guide & Store Visit",
    "acquista.header_desc":
      "Located at Via dei Mercanti 131 in Salerno. Order smoothly via WhatsApp or visit us in person.",
    "acquista.contacts_eyebrow": "Direct Channels",
    "acquista.contacts_title": "Connect with Us",
    "acquista.phone_tag": "Phone",
    "acquista.phone_title": "Direct Call",
    "acquista.phone_desc":
      "+39 347 266 2754 — direct telephone assistance during store opening hours.",
    "acquista.phone_btn": "Call Now",
    "acquista.wa_tag": "WhatsApp",
    "acquista.wa_title": "WhatsApp Direct",
    "acquista.wa_desc":
      "Personal styling advice, availability inquiries, instant ordering, and pickup bookings.",
    "acquista.wa_btn": "Message on WhatsApp",
    "acquista.ig_tag": "Instagram",
    "acquista.ig_title": "Official Instagram",
    "acquista.ig_desc":
      "@amartstore_salerno — daily arrivals, try-on videos, and outfit combinations.",
    "acquista.ig_btn": "Open Instagram",

    // ── Quick Info ──
    "acquista.quick_eyebrow": "Quick Information",
    "acquista.quick_title": "Hours & Services",
    "acquista.quick_hours": "Opening Hours",
    "acquista.quick_map": "Map Directions",
    "acquista.quick_write": "Chat on WhatsApp",

    // ── Store Location & Schedule ──
    "acquista.store_eyebrow": "Salerno Store",
    "acquista.store_title": "Amart Store Salerno",
    "acquista.store_address_label": "Store Address",
    "acquista.store_address_val":
      "Via dei Mercanti 131, 84121 Salerno (SA), Italy",
    "acquista.store_hours_label": "Opening Hours",
    "acquista.store_hours_week": "Mon – Fri: 10:00 – 20:30",
    "acquista.store_hours_sat": "Saturday: 10:00 – 00:00 (Midnight)",
    "acquista.store_hours_sun": "Sunday: 10:00 – 22:00",
    "acquista.store_contact_label": "Direct Contacts",
    "acquista.store_phone_label": "Phone & WhatsApp",
    "acquista.store_wa_label": "WhatsApp",

    // ── Spedizioni Detail Box ──
    "shipping.box_title": "Shipping & Pickup Information",
    "shipping.box_item1_label": "Average Shipping Time",
    "shipping.box_item1_val":
      "24/48 business hours with express courier all across Italy",
    "shipping.box_item2_label": "Operating Days",
    "shipping.box_item2_val":
      "Monday – Friday (deliveries not processed on public holidays)",
    "shipping.box_item3_label": "In-Store Pickup",
    "shipping.box_item3_val":
      "Free by appointment at our boutique in Via dei Mercanti 131, Salerno",

    // ── Company Legal Data ──
    "company.legal_title": "Corporate & Legal Details",
    "company.ragione_sociale": "GA.SA.SRLS",
    "company.piva": "VAT Number: 01670400656",
    "company.sede_legale":
      "Registered Office: Calata San Vito 1A-1B, 84126 Salerno",
    "company.rea": "REA Register: SA-502580",
    "company.pec": "Certified Email (PEC): ga.sasrls@pec.it",

    // ── Boutique Experience Banner ──
    "acquista.exp_eyebrow": "Our Salerno Store",
    "acquista.exp_title": "In the historic Via dei Mercanti.",
    "acquista.exp_desc":
      "Amart Store Salerno welcomes you in Via dei Mercanti 131, Salerno: a warm, inviting space where you can try on pieces with friendly, attentive guidance.",

    // ── Modal Orari ──
    "modal.hours_eyebrow": "Amart Store Salerno",
    "modal.hours_title": "Weekly Opening Hours",
    "modal.hours_open_now": "Store currently open",
    "modal.hours_closed_now": "Store currently closed",
    "modal.hours_today": "— today",
    "modal.hours_closed_day": "Closed",
    "modal.hours_cta": "Inquire on WhatsApp",
    "modal.day_monday": "Monday",
    "modal.day_tuesday": "Tuesday",
    "modal.day_wednesday": "Wednesday",
    "modal.day_thursday": "Thursday",
    "modal.day_friday": "Friday",
    "modal.day_saturday": "Saturday",
    "modal.day_sunday": "Sunday",

    // ── Product Card Actions & Badges ──
    "card.order": "Order on WhatsApp",
    "badge.new": "New Arrival",
    "badge.classic": "Iconic Classic",
    "badge.musthave": "Must Have",
    "category.pantaloni": "Trousers",
    "category.maglie": "Knitwear",
    "category.top": "Tops & Shirts",
    "category.abiti": "Dresses",
    "category.giacche": "Jackets",
    "category.accessori": "Accessories",
    "product.onesize": "One Size",

    // ── Footer ──
    "footer.desc":
      "Amart Store Salerno — Curated, practical and versatile women’s fashion in the historic heart of Salerno.",
    "footer.sitemap": "Site Navigation",
    "footer.collection": "Collection",
    "footer.contacts": "Contacts",
    "footer.phone_label": "Phone & WhatsApp",
    "footer.rights":
      "© 2026 GA.SA.SRLS · Amart Store Salerno. All rights reserved.",

    // ── WhatsApp Order Template ──
    "wa.order_template":
      "Hello, I would like to inquire about availability and sizes for: {product} {price}, and if it is available for shipping or store pickup. Thank you!",
  },
};

/** English translations for product titles / details */
export const productTranslationsEn: Record<
  string,
  { name: string; sizes?: string }
> = {
  "pantalone-palazzo-fluido": { name: "Fluid Wide-Leg Trousers" },
  "pantalone-sigaretta-sartoriale": { name: "Tailored Cigarette Trousers" },
  "pantalone-lino-rilassato": { name: "Relaxed Linen Trousers" },
  "maglia-filato-leggero": { name: "Lightweight Knit Top" },
  "cardigan-morbido-estate": {
    name: "Casual Soft Cardigan",
    sizes: "One Size",
  },
  "maglia-costine-scollo-v": { name: "Ribbed V-Neck Sweater" },
  "blusa-seta-avorio": { name: "Ivory Silk Blouse" },
  "camicia-puro-lino": { name: "Pure Linen Shirt" },
  "top-cashmere-misto": { name: "Delicate Strap Top" },
  "abito-midi-seta": { name: "Fluid Midi Dress" },
  "abito-essenziale-nero": { name: "Essential Black Dress" },
  "abito-chiffon-soft": { name: "Soft Chiffon Dress" },
  "tubino-sartoriale": { name: "Casual Chic Sheath Dress" },
  "blazer-sartoriale-cammello": { name: "Camel Structured Blazer" },
  "cappotto-lana": { name: "Light Spring Long Jacket" },
  "blazer-minimal-nero": { name: "Versatile Black Blazer" },
  "borsa-strutturata-pelle": {
    name: "Practical Crossbody Leather Bag",
    sizes: "One Size",
  },
  "cintura-minimale-pelle": { name: "Classic Leather Belt" },
  "foulard-seta-stampata": {
    name: "Marine Printed Silk Scarf",
    sizes: "One Size",
  },
  "orecchini-essenziali-dorati": {
    name: "Golden Hoop Earrings",
    sizes: "One Size",
  },
};

/** English translations for reviews */
export const reviewTranslationsEn: Record<
  string,
  { body: string; city: string }
> = {
  "Sophia M.": {
    city: "Salerno, Italy",
    body: '"Amart Store in Via dei Mercanti is my go-to place for practical, beautiful clothes. The assistance is always warm and helpful!"',
  },
  "Giulia R.": {
    city: "Rome, Italy",
    body: '"WhatsApp ordering was super smooth and the package arrived within 24 hours. The fit is comfortable and looks amazing."',
  },
  "Martina L.": {
    city: "Naples, Italy",
    body: '"Practicality and elegance together! I love how these pieces work from morning meetings to evening drinks at the sea."',
  },
  "Francesca T.": {
    city: "Salerno, Italy",
    body: '"High quality at honest prices. The fabrics are fresh and you really feel the sea breeze in the style."',
  },
};
