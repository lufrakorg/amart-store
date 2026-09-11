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
    "hero.mood_tag": "Il Nostro Mood",
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
    "values.essence_tag": "Essenza Amart",
    "values.point1_title": "Eleganza Senza Sforzo",
    "values.point1_desc":
      "Crediamo in una bellezza raffinata e mai ostentata, dove la semplicità è la forma più alta di sofisticatezza.",
    "values.point2_title": "Qualità Trasparente",
    "values.point2_desc":
      "Ci impegniamo nella ricerca di tessuti e dettagli curati, mantenendo il valore d'acquisto alla portata di tutte.",
    "values.point3_title": "Ispirazione Marina",
    "values.point3_desc":
      "Il mare è la nostra radice creativa: da esso attingiamo freschezza, senso di libertà, colori e uno stile senza tempo.",

    // Store Exterior Card (Home)
    "store.exterior_tag": "Negozio Salerno",
    "store.exterior_directions": "Indicazioni",

    // ── Spedizioni & Servizi (Home & Shop) ──
    "services.eyebrow": "Spedizioni & Ritiro",
    "services.title": "Consegne Rapide & Ritiro in Sede",
    "services.shipping_title": "Spedizione Rapida 24/48h",
    "services.shipping_desc":
      "Spedizioni in tutta Italia dal lunedì al venerdì. Tempi medi di consegna 24/48 ore (festivi esclusi).",
    "services.shipping_sub": "In tutta Italia (Lun–Ven, festivi esclusi)",
    "services.pickup_title": "Ritiro in Locale su Appuntamento",
    "services.pickup_desc":
      "Preferisci ritirare di persona? Il ritiro in sede è sempre disponibile su appuntamento nel nostro negozio a Salerno.",
    "services.pickup_sub": "Nel negozio di Salerno in Via dei Mercanti 131",
    "services.wa_title": "Assistenza & Ordini WhatsApp",
    "services.wa_desc":
      "Scrivici su WhatsApp per disponibilità taglie, foto aggiuntive, ordini immediati o concordare il ritiro.",
    "services.wa_sub": "+39 347 266 2754 per consigli e disponibilità",

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
    "stats.shipping": "Consegna Rapida Italia",
    "stats.rating": "Soddisfazione Clienti",

    // ── Final CTA (Home) ──
    "cta.location_badge": "Salerno Centro Storico · Via dei Mercanti 131",
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
    "lookbook.look1_title": "Eleganza Naturale",
    "lookbook.look2_title": "Sogno Mediterraneo",
    "lookbook.look3_title": "Bohème Paisley",
    "lookbook.look4_title": "Spirito Nomade",
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
    "footer.legal": "Informazioni & Legale",
    "footer.privacy": "Privacy Policy",
    "footer.cookie": "Cookie Policy",
    "footer.terms": "Termini e Condizioni",
    "footer.shipping_returns": "Spedizioni e Resi",
    "footer.cookie_pref": "Preferenze Cookie",
    "footer.contacts": "Contatti",
    "footer.phone_label": "Telefono & WhatsApp",
    "footer.rights":
      "© 2026 GA.SA.SRLS · Amart Store Salerno. Tutti i diritti riservati.",

    // ── Cookie Banner ──
    "cookie.banner_title": "Informativa sui Cookie",
    "cookie.banner_desc":
      "Questo sito non utilizza cookie di profilazione, né proprietari né di terze parti. Utilizziamo esclusivamente strumenti e cookie tecnici necessari per il corretto funzionamento e per memorizzare le tue preferenze.",
    "cookie.accept_all": "Accetta Tutti",
    "cookie.accept_necessary": "Solo Necessari",
    "cookie.learn_more": "Scopri di più",
    "cookie.preferences_updated": "Preferenze cookie salvate",

    // ── 404 Page ──
    "404.badge": "Errore 404 · Amart Store",
    "404.title": "Pagina Non Trovata",
    "404.desc":
      "Sembra che la pagina che stai cercando non sia disponibile, sia stata spostata o il link non sia corretto.",
    "404.back_home": "Torna alla Home",
    "404.explore_collection": "Esplora la Collezione",
    "404.quick_links": "Oppure naviga tra i reparti più richiesti:",
    "404.ask_wa_title": "Cercavi un capo visto in vetrina o sui social?",
    "404.ask_wa_desc":
      "Scrivici direttamente su WhatsApp: il nostro staff in boutique a Salerno verificherà la disponibilità in tempo reale.",
    "404.contact_wa": "Chiedi su WhatsApp",
    "404.wa_query":
      "Salve, stavo cercando un capo sul vostro sito ma la pagina non risulta disponibile. Potete aiutarmi?",

    // ── WhatsApp Order Template ──
    "wa.order_template":
      "Salve, Desidero richiedere informazioni su disponibilità e taglie per: {product} {price}, e se è disponibile per la spedizione o per il ritiro in negozio. Grazie!",

    // ══════════════════════════════════════════════════════════
    // ── PAGINE POLICY E LEGALI (IT) ──
    // ══════════════════════════════════════════════════════════

    // ── Privacy Policy Page ──
    "privacy.breadcrumb": "Privacy Policy",
    "privacy.title": "Informativa sulla Privacy",
    "privacy.desc":
      "Ai sensi degli artt. 13 e 14 del Regolamento (UE) 2016/679 (GDPR), descriviamo con totale trasparenza come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali.",
    "privacy.section1_title": "Titolare del Trattamento",
    "privacy.section1_desc":
      "Il Titolare del trattamento dei dati personali raccolti attraverso questo sito web e i relativi canali di contatto è:",
    "privacy.section1_company": "Ragione Sociale",
    "privacy.section1_piva": "Partita IVA",
    "privacy.section1_rea": "REA",
    "privacy.section1_legal_address": "Sede Legale",
    "privacy.section1_store_address": "Punto Vendita (Negozio)",
    "privacy.section1_wa_support": "Assistenza Clienti & WhatsApp",
    "privacy.section2_title": "Tipologie di Dati Trattati",
    "privacy.section2_desc":
      "Nel corso della consultazione del sito e dell'interazione con i nostri servizi, possono essere trattate le seguenti categorie di dati:",
    "privacy.section2_itemA_title": "A. Dati di navigazione e infrastruttura web",
    "privacy.section2_itemA_html":
      'Il sito è ospitato sull\'infrastruttura di <strong>Netlify</strong> (Netlify, Inc.), che gestisce l\'hosting delle pagine web ed i relativi servizi tecnici amministrativi (Decap CMS / Netlify Identity per la gestione riservata dei contenuti). Netlify raccoglie automaticamente dati tecnici anonimizzati o aggregati di navigazione (come indirizzi IP e log di sistema) al solo fine di garantire la sicurezza, l\'integrità e le prestazioni del servizio. Per maggiori informazioni consulta la <a href="https://www.netlify.com/privacy/" target="_blank" rel="noopener noreferrer" class="font-semibold underline text-navy hover:text-gold">Privacy Policy di Netlify</a>.',
    "privacy.section2_itemB_title":
      "B. Dati forniti volontariamente dall'utente (Assistenza e Canale WhatsApp)",
    "privacy.section2_itemB_html":
      "L'invio spontaneo di messaggi tramite i recapiti telefonici o il canale WhatsApp (per richieste di disponibilità taglie, foto aggiuntive, dettagli spedizione o ordini) comporta l'acquisizione dei dati di contatto necessari a rispondere (numero di telefono, nome ed eventuale indirizzo di spedizione). Il servizio di messaggistica WhatsApp è gestito da <em>Meta Platforms Ireland Limited</em> (per gli utenti residenti nello Spazio Economico Europeo).",
    "privacy.section2_itemC_title": "C. Cookie e tecnologie di archiviazione locale",
    "privacy.section2_itemC_html":
      'Questo sito <strong>non utilizza alcun cookie di profilazione, né proprietario né di terze parti</strong>. Non sono presenti pixel di tracciamento o strumenti di profilazione commerciale (come Meta Pixel, Google Ads, TikTok Pixel). Vengono impiegati unicamente strumenti di memorizzazione locale e cookie tecnici strettamente necessari al funzionamento del sito e alla memorizzazione delle preferenze (es. selezione lingua e stato del banner informativo). Per i dettagli completi, consulta la nostra <a href="/cookie" class="text-navy font-semibold underline hover:text-gold">Cookie Policy</a>.',
    "privacy.section3_title": "Finalità del Trattamento e Basi Giuridiche",
    "privacy.section3_desc":
      "I dati personali raccolti vengono trattati per le seguenti finalità:",
    "privacy.section3_item1_html":
      "<strong>Gestione ordini e assistenza clienti:</strong> per fornire informazioni su capi e taglie e completare gli acquisti, la spedizione o il ritiro in negozio (<em>Base giuridica: esecuzione di misure contrattuali o precontrattuali</em>).",
    "privacy.section3_item2_html":
      "<strong>Adempimenti amministrativi e fiscali:</strong> per la gestione contabile della vendita ai sensi di legge (<em>Base giuridica: obbligo legale</em>).",
    "privacy.section4_title": "Modalità di Trattamento e Tempi di Conservazione",
    "privacy.section4_desc":
      "Il trattamento dei dati è eseguito con strumenti digitali, adottando misure di sicurezza idonee a prevenire la perdita dei dati, usi illeciti o accessi non autorizzati.",
    "privacy.section4_card1_title": "Dati relativi a ordini e fatturazione",
    "privacy.section4_card1_desc":
      "Conservati per il periodo prescritto dalla legge italiana (10 anni ai sensi dell'art. 2220 c.c. e normative fiscali).",
    "privacy.section4_card2_title": "Dati per richieste e contatti informativi",
    "privacy.section4_card2_desc":
      "Conservati per il tempo strettamente indispensabile a fornire riscontro completo alla cliente, salvo instaurazione di rapporto contrattuale.",
    "privacy.section5_title": "Comunicazione a Terzi e Diffusione",
    "privacy.section5_desc":
      "I dati personali non saranno mai diffusi al pubblico né ceduti a terzi per finalità promozionali non richieste. Possono essere comunicati esclusivamente a:",
    "privacy.section5_item1": "Corrieri espresso e spedizionieri incaricati del recapito dei pacchi acquistati;",
    "privacy.section5_item2": "Consulenti contabili o legali per l'adempimento degli obblighi di legge;",
    "privacy.section5_item3": "Fornitori di hosting e infrastruttura web (es. Netlify, Google Fonts);",
    "privacy.section5_item4": "Autorità pubbliche competenti, nei casi previsti dalla legge.",
    "privacy.section6_title":
      "Trasferimento Dati Extra-UE e Canale WhatsApp (Meta Platforms)",
    "privacy.section6_p1_html":
      "Per consentire l'invio rapido di messaggi, richieste di disponibilità e ordini a distanza, il sito include collegamenti diretti all'applicazione <strong>WhatsApp</strong>, fornita per gli utenti europei da <em>Meta Platforms Ireland Limited</em> (4 Grand Canal Square, Grand Canal Harbour, Dublino 2, Irlanda) e collegata all'infrastruttura globale di <em>Meta Platforms, Inc.</em> negli Stati Uniti.",
    "privacy.section6_scc_title":
      "Basi giuridiche e Clausole Contrattuali Standard (SCC):",
    "privacy.section6_scc_desc":
      "A seguito dell'invalidamento del precedente accordo 'EU-U.S. Privacy Shield' da parte della Corte di Giustizia dell'Unione Europea (sentenza Schrems II, C-311/18), i trasferimenti internazionali di dati effettuati da Meta Platforms verso server situati negli Stati Uniti o in Paesi terzi si fondano primariamente sulle Clausole Contrattuali Standard (Standard Contractual Clauses - SCC) adottate dalla Commissione Europea ex art. 46, par. 2, lett. c del GDPR, nonché sulle decisioni di adeguatezza dell'EU-U.S. Data Privacy Framework (DPF).",
    "privacy.section6_sec_title": "Sicurezza e Crittografia:",
    "privacy.section6_sec_desc":
      "Le chat e le comunicazioni effettuate tramite WhatsApp beneficiano della crittografia end-to-end (E2EE), la quale garantisce che solo il mittente e il destinatario possano accedere ai contenuti dei messaggi scambiati.",
    "privacy.section6_link_html":
      'Per ulteriori informazioni sul trattamento dei dati operato da WhatsApp e Meta, invitiamo a consultare l\'<a href="https://www.whatsapp.com/legal/privacy-policy-eea" target="_blank" rel="noopener noreferrer" class="font-semibold underline text-navy hover:text-gold">Informativa sulla Privacy di WhatsApp per lo Spazio Economico Europeo</a>.',
    "privacy.section7_title": "Diritti dell'Interessato",
    "privacy.section7_desc":
      "In qualsiasi momento puoi esercitare i diritti previsti dal GDPR (accesso, rettifica, cancellazione o opposizione al trattamento dei tuoi dati).",
    "privacy.section7_how_html":
      '<strong>Come esercitare i tuoi diritti:</strong> Puoi contattarci telefonicamente o su WhatsApp al <a href="tel:+393472662754" class="font-semibold underline text-navy">+39 347 266 2754</a>.',
    "privacy.section7_authority_html":
      'Hai inoltre il diritto di proporre reclamo al <em>Garante per la Protezione dei Dati Personali</em> (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" class="font-semibold underline text-navy">www.garanteprivacy.it</a>).',

    // ── Cookie Policy Page ──
    "cookie_page.breadcrumb": "Cookie Policy",
    "cookie_page.title": "Cookie Policy",
    "cookie_page.desc":
      "Informativa estesa sull'uso dei cookie e delle tecnologie di memorizzazione locale, redatta in conformità al Regolamento UE 2016/679 (GDPR) e alle Linee Guida del Garante per la Protezione dei Dati Personali.",
    "cookie_page.consent_tag": "Gestione Consenso",
    "cookie_page.consent_title": "Le tue preferenze sui Cookie",
    "cookie_page.consent_desc":
      "In qualsiasi momento puoi modificare o revocare la tua scelta relativa all'utilizzo dei cookie non strettamente necessari.",
    "cookie_page.consent_btn": "Modifica Preferenze",
    "cookie_page.section1_title": "Cosa sono i Cookie?",
    "cookie_page.section1_p1":
      "I cookie sono piccoli file di testo che i siti web visitati inviano al terminale dell'utente (computer, tablet o smartphone), dove vengono memorizzati per poi essere ritrasmessi agli stessi siti alla successiva visita.",
    "cookie_page.section1_p2":
      "I cookie permettono al sito web di ricordare le tue azioni e preferenze (ad esempio la lingua di navigazione o il consenso prestato), evitando che tu debba reinserirle quando torni a visitare il sito o navighi da una pagina all'altra.",
    "cookie_page.section2_title": "Tipologie di Cookie Utilizzati",
    "cookie_page.badge_necessary": "Necessari",
    "cookie_page.itemA_title": "A. Cookie Tecnici e di Funzionalità",
    "cookie_page.itemA_desc":
      "Questi cookie e strumenti di archiviazione locale sono indispensabili per il corretto funzionamento del sito e per consentire la navigazione ordinaria e sicura. Sono utilizzati per memorizzare la lingua selezionata (italiano o inglese) e la scelta in merito all'informativa cookie. L'infrastruttura di hosting (Netlify) ed i relativi moduli amministrativi di gestione dei contenuti (Decap CMS / Netlify Identity) non installano cookie di tracciamento o profilazione sui visitatori del sito. Per l'installazione dei cookie tecnici non è richiesto il preventivo consenso dell'utente.",
    "cookie_page.badge_absent": "Assenti",
    "cookie_page.itemB_title":
      "B. Cookie di Profilazione (Né Proprietari né di Terze Parti)",
    "cookie_page.itemB_desc":
      "Amart Store Salerno non utilizza alcun cookie di profilazione, né di prima parte (proprietario) né di terze parti. Sul nostro sito non sono installati pixel di tracciamento pubblicitario (quali Meta Pixel, Google Ads, TikTok Pixel, Criteo o analoghi strumenti di marketing comportamentale) né algoritmi volti a profilare le abitudini, gli interessi o le preferenze di consumo dell'utente.",
    "cookie_page.badge_third_party": "Terze Parti & Link Esterni",
    "cookie_page.itemC_title":
      "C. Servizi Esterni e Canale WhatsApp (Meta Platforms)",
    "cookie_page.itemC_p1_html":
      "Per offrire un'esperienza visiva curata, il sito carica i Google Fonts (Playfair Display e Nunito) nel rispetto degli standard di privacy. I pulsanti di collegamento a <strong>WhatsApp</strong> (servizio fornito da <em>Meta Platforms Ireland Limited</em> / <em>Meta Platforms, Inc.</em>) e a <strong>Instagram</strong> sono semplici link ipertestuali diretti (URL) e non incorporano script di terze parti che rilasciano cookie prima del click spontaneo dell'utente.",
    "cookie_page.itemC_p2_html":
      "Quando l'utente sceglie di cliccare sul link WhatsApp per avviare una conversazione o effettuare un ordine, l'eventuale trasferimento transfrontaliero di dati verso server ubicati al di fuori dello Spazio Economico Europeo (USA) da parte di Meta Platforms non si basa sul quadro 'Privacy Shield' (dichiarato invalido dalla Corte di Giustizia UE nella sentenza <em>Schrems II</em>, C-311/18), bensì sulle <strong>Clausole Contrattuali Standard (Standard Contractual Clauses - SCC)</strong> adottate dalla Commissione Europea ai sensi dell'art. 46 del GDPR e sulla decisione di adeguatezza dell'<strong>EU-U.S. Data Privacy Framework (DPF)</strong>.",
    "cookie_page.section3_title":
      "Tabella Dettagliata dei Cookie e Storage Locale",
    "cookie_page.th_name": "Nome Parametro",
    "cookie_page.th_provider": "Fornitore",
    "cookie_page.th_type": "Tipologia",
    "cookie_page.th_purpose": "Finalità",
    "cookie_page.th_duration": "Durata",
    "cookie_page.first_party": "Prima parte",
    "cookie_page.tech_storage": "Tecnico (Storage Locale)",
    "cookie_page.row1_purpose":
      "Memorizza la scelta linguistica dell'utente (Italiano o Inglese) per le visite successive",
    "cookie_page.row2_purpose":
      "Salva lo stato del consenso ai cookie per non riproporre il banner ad ogni pagina",
    "cookie_page.row3_purpose":
      "Registra la data e ora in cui l'utente ha manifestato la propria preferenza",
    "cookie_page.persistent_12m": "Persistente (12 mesi)",
    "cookie_page.section4_title":
      "Come Disabilitare o Cancellare i Cookie dal Browser",
    "cookie_page.section4_desc":
      "Puoi bloccare o cancellare i cookie direttamente attraverso le impostazioni del tuo browser web. Di seguito riportiamo i link alle guide ufficiali dei browser più diffusi:",
    "cookie_page.section4_note_html":
      "<em>Nota:</em> La disabilitazione completa dei cookie tecnici o dello storage locale potrebbe compromettere alcune funzionalità essenziali, come il salvataggio della lingua preferita.",
    "cookie_page.qa_title": "Dubbi o domande sulla presente Cookie Policy?",
    "cookie_page.qa_desc_html":
      'Per qualunque chiarimento sulle modalità di trattamento dei dati o sull\'impiego dei cookie, puoi contattare il Titolare del trattamento GA.SA.SRLS (Amart Store Salerno) via WhatsApp o telefono al numero <a href="tel:+393472662754" class="font-semibold underline text-navy">+39 347 266 2754</a>.',
    "cookie_page.qa_privacy_link": "Leggi anche la Privacy Policy",
    "cookie_page.qa_terms_link": "Termini e Condizioni di Vendita",

    // ── Termini e Condizioni Page ──
    "terms.breadcrumb": "Termini & Condizioni",
    "terms.title": "Termini e Condizioni di Vendita",
    "terms.desc":
      "Condizioni Generali di Contratto per gli acquisti e gli ordini a distanza effettuati con Amart Store Salerno, redatte in piena conformità al Codice del Consumo (D.Lgs. 206/2005) e al D.Lgs. 70/2003 sul Commercio Elettronico.",
    "terms.section1_title": "Identificazione del Venditore",
    "terms.section1_desc":
      "I beni commercializzati attraverso il sito web e i canali collegati sono venduti direttamente dalla società:",
    "terms.section1_ragione_sociale": "Denominazione",
    "terms.section1_piva_cf": "Partita IVA e Codice Fiscale",
    "terms.section1_rea": "Iscrizione Registro Imprese",
    "terms.section1_sede_legale": "Sede Legale",
    "terms.section1_negozio": "Punto Vendita Fisico (Negozio)",
    "terms.section1_pec": "PEC",
    "terms.section1_support": "Assistenza Clienti & WhatsApp",
    "terms.section2_title": "Prodotti, Immagini e Disponibilità",
    "terms.section2_p1":
      "Il presente sito offre una vetrina del catalogo di moda donna di Amart Store Salerno (pantaloni, maglieria, top, abiti, giacche e accessori).",
    "terms.section2_item1_html":
      "<strong>Fedeltà delle immagini & AI:</strong> Le fotografie e le descrizioni dei capi riproducono con la massima accuratezza il colore, il taglio e i dettagli dei tessuti. Alcune immagini presenti sul sito potrebbero essere generate o rielaborate con l'ausilio dell'intelligenza artificiale per mostrare al meglio la resa del prodotto, rimanendo comunque sempre corrispondenti agli articoli fisici presenti in negozio. Lievi variazioni cromatiche possono dipendere dalla calibrazione dello schermo del dispositivo utilizzato dal cliente.",
    "terms.section2_item2_html":
      "<strong>Disponibilità & Capi Unici:</strong> Poiché i capi sono commercializzati anche all'interno del negozio fisico di Via dei Mercanti 131 a Salerno, la disponibilità effettiva di taglie e colori viene sempre confermata tempestivamente dal nostro staff al momento dell'ordine.",
    "terms.section3_title":
      "Procedura di Ordinazione (WhatsApp & Negozio)",
    "terms.section3_p1":
      "Per offrire un'esperienza di shopping personalizzata e attenta, gli acquisti a distanza si svolgono tramite assistenza diretta su WhatsApp:",
    "terms.section3_step1_html":
      '<strong>Selezione del Capo:</strong> Il cliente seleziona il capo dal catalogo o dalla home e clicca sul tasto <em>"Ordina su WhatsApp"</em> o contatta il numero <a href="https://wa.me/393472662754" target="_blank" class="font-semibold underline text-navy">+39 347 266 2754</a>;',
    "terms.section3_step2_html":
      "<strong>Consulenza e Conferma:</strong> Il nostro staff verifica la disponibilità in tempo reale, fornisce indicazioni su vestibilità, misure in centimetri e foto aggiuntive su richiesta;",
    "terms.section3_step3_html":
      "<strong>Conferma dell'Ordine e Pagamento:</strong> Il cliente comunica l'indirizzo di spedizione (o richiede il ritiro in sede) ed esegue il pagamento con il metodo concordato;",
    "terms.section3_step4_html":
      "<strong>Conclusione del Contratto:</strong> Il contratto a distanza si intende formalmente concluso con la conferma del pagamento e l'invio della ricevuta/conferma d'ordine da parte di GA.SA.SRLS.",
    "terms.section4_title": "Prezzi e Metodi di Pagamento",
    "terms.section4_p1_html":
      "Tutti i prezzi indicati sul sito sono espressi in Euro (€) e sono <strong>comprensivi di IVA (22%)</strong> secondo l'aliquota di legge vigente.",
    "terms.section4_p2":
      "Le modalità di pagamento accettate per gli acquisti a distanza o con ritiro in sede includono:",
    "terms.section4_method1_title": "Bonifico Bancario",
    "terms.section4_method1_desc":
      "Disponibile su coordinate IBAN intestate a GA.SA.SRLS, con evasione dell'ordine all'accredito contabile.",
    "terms.section4_method2_title": "Pagamento Elettronico / Carte",
    "terms.section4_method2_desc":
      "Sistemi di pagamento sicuri e certificati comunicati dal nostro staff durante l'ordinazione WhatsApp.",
    "terms.section4_method3_title": "Pagamento al Ritiro in Negozio",
    "terms.section4_method3_desc":
      "Contanti (nei limiti di legge) o carte elettroniche/POS direttamente in Via dei Mercanti 131, Salerno.",
    "terms.section5_title": "Spedizione e Consegna (24/48h)",
    "terms.section5_item1_html":
      "<strong>Tempi di consegna:</strong> Le spedizioni in tutta Italia avvengono tramite corriere espresso. I tempi medi di consegna sono stimati in <strong>24/48 ore lavorative</strong> dalla spedizione (dal lunedì al venerdì, esclusi festivi). Per isole minori o località disagiate possono essere necessarie 48/72 ore.",
    "terms.section5_item2_html":
      "<strong>Spese di Spedizione:</strong> Il costo della spedizione viene chiaramente quantificato e confermato al cliente prima del pagamento.",
    "terms.section5_item3_html":
      "<strong>Passaggio del Rischio:</strong> Il rischio di perdita o danneggiamento del pacco si trasferisce al cliente nel momento in cui entra fisicamente in possesso della merce. In caso di consegna con imballaggio visibilmente danneggiato, ti consigliamo di accettare il pacco con riserva scritta sul documento del corriere e di contattarci subito su WhatsApp.",
    "terms.section5_item4_html":
      "<strong>Ritiro in Negozio:</strong> Il ritiro in sede presso il negozio in Via dei Mercanti 131 a Salerno è <strong>sempre gratuito</strong> ed è possibile durante gli orari di apertura o su appuntamento concordato.",
    "terms.section6_title":
      "Diritto di Recesso (Artt. 52 e ss. D.Lgs. 206/2005)",
    "terms.section6_p1_html":
      "Se acquisti in qualità di Consumatore (persona fisica che agisce per scopi estranei all'attività imprenditoriale o professionale), hai il diritto di recedere dal contratto di acquisto, senza alcuna penalità e senza dover specificare il motivo, <strong>entro 14 (quattordici) giorni di calendario</strong> a partire dal giorno in cui hai ricevuto fisicamente il capo.",
    "terms.section6_box_title":
      "Condizioni essenziali per l'accettazione del reso:",
    "terms.section6_box_item1":
      "Il capo deve essere integro, pulito, non lavato, privo di odori (profumi, fumo, ecc.) e non deve essere stato indossato al di fuori della normale prova di misura;",
    "terms.section6_box_item2":
      "Il cartellino originale e tutte le etichette devono essere ancora saldamente attaccati al capo;",
    "terms.section6_box_item3":
      "Il prodotto deve essere restituito nella confezione originale o in imballaggio idoneo a garantirne la protezione durante il trasporto.",
    "terms.section6_how_html":
      '<strong>Modalità di esercizio:</strong> È sufficiente inviare un messaggio WhatsApp al <a href="tel:+393472662754" class="font-semibold underline text-navy">+39 347 266 2754</a> con l\'indicazione del capo che desideri rendere o cambiare e della data d\'acquisto.',
    "terms.section6_refund_html":
      "<strong>Rimborso o Cambio Taglia:</strong> Ricevuto il capo e verificata la sua perfetta integrità, provvederemo al rimborso dell'importo speso entro 14 giorni con lo stesso metodo di pagamento utilizzato, o all'emissione di un buono d'acquisto / spedizione del cambio taglia concordato. I costi diretti di spedizione per la restituzione del capo sono a carico del cliente, salvo accordi differenti o reso effettuato direttamente in negozio a Salerno.",
    "terms.section6_guide_link_html":
      'Per la guida operativa dettagliata passo-passo, visita la nostra pagina dedicata <a href="/spedizioni-resi" class="text-navy font-semibold underline hover:text-gold">Spedizioni e Resi</a>.',
    "terms.section7_title": "Garanzia Legale e Foro Competente",
    "terms.section7_item1_html":
      "<strong>Garanzia Legale di Conformità:</strong> Tutti i prodotti venduti godono della garanzia legale di conformità ai sensi del Codice del Consumo (24 mesi per difetti di conformità esistenti al momento della consegna).",
    "terms.section7_item2_html":
      "<strong>Legge Applicabile e Foro Competente:</strong> I presenti Termini e Condizioni sono regolati e interpretati secondo la legge italiana. Per qualsiasi controversia o lite derivante dall'interpretazione, esecuzione o risoluzione del contratto d'acquisto — sia per acquisti effettuati fisicamente in negozio che per ordini conclusi a distanza/online — le parti concordano che il <strong>Foro esclusivamente competente è il Foro di Salerno</strong>, luogo in cui ha sede legale ed operativa la società venditrice (GA.SA.SRLS / Amart Store Salerno) ed in cui sorge e si perfeziona la vendita, prescindendo dal luogo di residenza o domicilio dell'acquirente.",

    // ── Spedizioni e Resi Page ──
    "shipping_page.breadcrumb": "Spedizioni & Resi",
    "shipping_page.title": "Spedizioni, Consegne & Resi",
    "shipping_page.desc":
      "La praticità prima di tutto anche dopo l'acquisto: spedizioni espresse 24/48h in tutta Italia, ritiro gratuito nel nostro negozio in Via dei Mercanti a Salerno e assistenza continua per cambi taglia e resi.",
    "shipping_page.card1_title": "Spedizione 24/48h",
    "shipping_page.card1_desc":
      "Consegne rapide in tutta Italia con corriere espresso e codice di tracciamento inviato su WhatsApp.",
    "shipping_page.card2_title": "Ritiro Gratuito in Sede",
    "shipping_page.card2_desc":
      "Ritira i tuoi capi direttamente nel nostro negozio in Via dei Mercanti 131 a Salerno senza costi.",
    "shipping_page.card3_title": "Reso Facile 14 Giorni",
    "shipping_page.card3_desc":
      "Puoi richiedere cambio taglia o rimborso entro 14 giorni dalla ricezione con supporto diretto su WhatsApp.",
    "shipping_page.section1_title": "Modalità e Tempi di Spedizione",
    "shipping_page.section1_p1":
      "Gli ordini vengono preparati con la massima cura nel nostro punto vendita di Salerno e affidati ai migliori corrieri espresso nazionali (dal lunedì al venerdì).",
    "shipping_page.delivery_time_title": "Tempi di Consegna",
    "shipping_page.delivery_time_peninsula":
      "Italia peninsulare: 24/48 ore lavorative dall'avvenuta spedizione.",
    "shipping_page.delivery_time_islands":
      "Isole e località disagiate: 48/72 ore lavorative.",
    "shipping_page.tracking_title": "Tracciamento Pacco",
    "shipping_page.tracking_desc_html":
      "Appena il tuo ordine viene affidato al corriere, ti invieremo direttamente su <strong>WhatsApp</strong> il link o il numero di lettera di vettura per seguire la consegna in tempo reale.",
    "shipping_page.packaging_html":
      "<strong>Imballaggio protetto:</strong> Tutti i capi vengono piegati, protetti in involucro antipolvere e confezionati accuratamente per garantire che arrivino a casa tua in condizioni impeccabili.",
    "shipping_page.pickup_tag": "Zero Spese di Spedizione",
    "shipping_page.pickup_title": "Ritiro in Negozio a Salerno",
    "shipping_page.pickup_desc_html":
      "Se vivi a Salerno o ti trovi in città, puoi scegliere di ritirare gratuitamente il tuo capo presso il nostro negozio in <strong>Via dei Mercanti 131</strong>.",
    "shipping_page.pickup_address":
      "📍 Indirizzo: Via dei Mercanti 131, 84121 Salerno (SA)",
    "shipping_page.pickup_hours":
      "🕒 Orari: Lun–Ven: 10:00–20:30 | Sabato: 10:00–00:00 | Domenica: 10:00–22:00",
    "shipping_page.pickup_btn": "Concorda Ritiro WhatsApp",
    "shipping_page.returns_tag": "Guida Pratica",
    "shipping_page.returns_title": "Come effettuare un Reso o Cambio Taglia",
    "shipping_page.returns_intro":
      "Ai sensi dell'art. 52 del Codice del Consumo, hai 14 giorni di tempo dalla consegna per richiedere il reso. Ecco i 4 passaggi:",
    "shipping_page.step1_title": "Contattaci su WhatsApp",
    "shipping_page.step1_desc_html":
      'Scrivici al <a href="tel:+393472662754" class="font-semibold underline text-navy">+39 347 266 2754</a> indicando il capo acquistato e se preferisci un <strong>cambio taglia/colore</strong> oppure il <strong>rimborso</strong> dell\'importo.',
    "shipping_page.step2_title": "Verifica dell'Integrità",
    "shipping_page.step2_desc":
      "Assicurati che il capo sia nelle stesse condizioni in cui lo hai ricevuto: non indossato fuori dalla normale prova, non lavato, con il cartellino e tutte le etichette originali integre.",
    "shipping_page.step3_title": "Spedizione o Consegna",
    "shipping_page.step3_desc_html":
      "Imballa il capo accuratamente e spediscilo al nostro indirizzo: <em>GA.SA.SRLS, Via dei Mercanti 131, 84121 Salerno (SA)</em>, oppure portalo direttamente in negozio senza spese di spedizione.",
    "shipping_page.step4_title": "Rimborso o Nuovo Capo",
    "shipping_page.step4_desc":
      "Non appena il capo rientra in sede e viene verificato, provvederemo tempestivamente al rimborso tramite il metodo concordato o alla spedizione del nuovo capo scelto.",
    "shipping_page.faq_title": "Domande Frequenti su Spedizioni e Resi",
    "shipping_page.faq1_q":
      "I costi di spedizione per la restituzione sono a mio carico?",
    "shipping_page.faq1_a":
      "Sì, in caso di recesso o ripensamento i costi diretti per la spedizione di rientro del capo sono a carico del cliente. Tuttavia, puoi sempre riconsegnare il capo gratuitamente di persona presso il negozio di Salerno, oppure in caso di difetto di conformità accertato le spese di ritiro saranno interamente a nostro carico.",
    "shipping_page.faq2_q":
      "Posso effettuare un cambio taglia con un altro modello?",
    "shipping_page.faq2_a":
      "Certamente. Puoi concordare direttamente su WhatsApp con la nostra assistente alla vendita la sostituzione con una taglia diversa o con un modello differente del catalogo, versando o ricevendo eventuale conguaglio di prezzo.",
    "shipping_page.faq3_q": "Cosa devo fare se il pacco arriva danneggiato?",
    "shipping_page.faq3_a_html":
      'Se al momento della consegna noti segni visibili di danneggiamento o manomissione dell\'imballo, ti invitiamo ad accettare il pacco apponendo la clausola <em>"Accetto con riserva di controllo"</em> sulla ricevuta del corriere e ad avvisarci subito su WhatsApp con una foto. Provvederemo noi a tutelarti immediatamente.',
    "shipping_page.help_title":
      "Hai altre domande su un ordine o una spedizione?",
    "shipping_page.help_desc":
      "Il nostro team è sempre a tua disposizione in orario di apertura.",
    "shipping_page.help_btn": "Scrivici su WhatsApp",
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
    "hero.mood_tag": "Our Mood",
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
    "values.essence_tag": "Amart Essence",
    "values.point1_title": "Effortless Elegance",
    "values.point1_desc":
      "We believe in refined, unpretentious beauty, where simplicity represents the highest form of sophistication.",
    "values.point2_title": "Transparent Quality",
    "values.point2_desc":
      "Dedicated research into comfortable fabrics and neat tailoring, keeping great value within everyone’s reach.",
    "values.point3_title": "Coastal Inspiration",
    "values.point3_desc":
      "The sea is our creative root: we draw freshness, freedom, luminous colors, and timeless grace from its horizon.",

    // Store Exterior Card (Home)
    "store.exterior_tag": "Salerno Boutique",
    "store.exterior_directions": "Directions",

    // ── Spedizioni & Servizi (Home & Shop) ──
    "services.eyebrow": "Shipping & Pickup",
    "services.title": "Express Shipping & In-Store Pickup",
    "services.shipping_title": "Fast 24/48h Nationwide Delivery",
    "services.shipping_desc":
      "Delivery across all Italy from Monday to Friday. Average delivery time 24/48h (excluding public holidays).",
    "services.shipping_sub": "Across all Italy (Mon–Fri, holidays excluded)",
    "services.pickup_title": "Store Pickup by Appointment",
    "services.pickup_desc":
      "Prefer picking up in person? Free in-store collection is available by appointment at our Salerno store.",
    "services.pickup_sub": "At our Salerno store in Via dei Mercanti 131",
    "services.wa_title": "WhatsApp Concierge & Orders",
    "services.wa_desc":
      "Message us on WhatsApp for size advice, extra photos, instant ordering, or scheduling your in-store pickup.",
    "services.wa_sub": "+39 347 266 2754 for advice & availability",

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
    "cta.location_badge": "Salerno Historic Center · Via dei Mercanti 131",
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
    "lookbook.look1_title": "Natural Elegance",
    "lookbook.look2_title": "Mediterranean Dream",
    "lookbook.look3_title": "Paisley Bohème",
    "lookbook.look4_title": "Nomad Spirit",
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
    "acquista.store_hours_sat": "Saturday: 10:00 – 00:00",
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
    "footer.legal": "Legal & Policies",
    "footer.privacy": "Privacy Policy",
    "footer.cookie": "Cookie Policy",
    "footer.terms": "Terms & Conditions",
    "footer.shipping_returns": "Shipping & Returns",
    "footer.cookie_pref": "Cookie Preferences",
    "footer.contacts": "Contacts",
    "footer.phone_label": "Phone & WhatsApp",
    "footer.rights":
      "© 2026 GA.SA.SRLS · Amart Store Salerno. All rights reserved.",

    // ── Cookie Banner ──
    "cookie.banner_title": "Cookie Notice",
    "cookie.banner_desc":
      "This website does not use profiling cookies, neither first-party nor third-party. We only use essential technical tools and cookies necessary for site functionality and preferences.",
    "cookie.accept_all": "Accept All",
    "cookie.accept_necessary": "Necessary Only",
    "cookie.learn_more": "Learn more",
    "cookie.preferences_updated": "Cookie preferences saved",

    // ── 404 Page ──
    "404.badge": "404 Error · Amart Store",
    "404.title": "Page Not Found",
    "404.desc":
      "It seems the page you are looking for is not available, has been moved, or the link is incorrect.",
    "404.back_home": "Return to Home",
    "404.explore_collection": "Explore Collection",
    "404.quick_links": "Or browse our most popular categories:",
    "404.ask_wa_title": "Looking for a piece seen in our window or on social media?",
    "404.ask_wa_desc":
      "Message us directly on WhatsApp: our boutique staff in Salerno will check real-time availability for you.",
    "404.contact_wa": "Ask on WhatsApp",
    "404.wa_query":
      "Hello, I was looking for an item on your website but the page is unavailable. Could you help me?",

    // ── WhatsApp Order Template ──
    "wa.order_template":
      "Hello, I would like to inquire about availability and sizes for: {product} {price}, and if it is available for shipping or store pickup. Thank you!",

    // ══════════════════════════════════════════════════════════
    // ── POLICY & LEGAL PAGES (EN) ──
    // ══════════════════════════════════════════════════════════

    // ── Privacy Policy Page ──
    "privacy.breadcrumb": "Privacy Policy",
    "privacy.title": "Privacy Policy",
    "privacy.desc":
      "In accordance with Articles 13 and 14 of Regulation (EU) 2016/679 (GDPR), we describe with total transparency how we collect, use, and protect your personal data.",
    "privacy.section1_title": "Data Controller",
    "privacy.section1_desc":
      "The Data Controller of personal data collected through this website and related communication channels is:",
    "privacy.section1_company": "Company Name",
    "privacy.section1_piva": "VAT Number",
    "privacy.section1_rea": "REA Register",
    "privacy.section1_legal_address": "Registered Office",
    "privacy.section1_store_address": "Boutique Store",
    "privacy.section1_wa_support": "Customer Support & WhatsApp",
    "privacy.section2_title": "Categories of Data Processed",
    "privacy.section2_desc":
      "While browsing this website and interacting with our services, the following categories of data may be processed:",
    "privacy.section2_itemA_title": "A. Browsing Data & Web Infrastructure",
    "privacy.section2_itemA_html":
      'This website is hosted on the infrastructure of <strong>Netlify</strong> (Netlify, Inc.), which manages web hosting and associated administrative technical services (Decap CMS / Netlify Identity for secure content management). Netlify automatically collects anonymized or aggregated technical browsing data (such as IP addresses and system logs) solely to ensure service security, integrity, and optimal performance. For more information, please consult the <a href="https://www.netlify.com/privacy/" target="_blank" rel="noopener noreferrer" class="font-semibold underline text-navy hover:text-gold">Netlify Privacy Policy</a>.',
    "privacy.section2_itemB_title":
      "B. Data Voluntarily Provided by the User (Customer Care & WhatsApp)",
    "privacy.section2_itemB_html":
      "Voluntarily sending messages via phone or WhatsApp (for size inquiries, additional photos, shipping information, or orders) involves the acquisition of contact details needed to reply (phone number, name, and shipping address if provided). WhatsApp messaging is operated by <em>Meta Platforms Ireland Limited</em> for users residing in the European Economic Area.",
    "privacy.section2_itemC_title": "C. Cookies and Local Storage Technologies",
    "privacy.section2_itemC_html":
      'This website <strong>does not use any profiling cookies, neither first-party nor third-party</strong>. There are no advertising tracking pixels or behavioral profiling tools (such as Meta Pixel, Google Ads, TikTok Pixel). We only use local storage mechanisms and technical cookies strictly necessary for site operations and preference storage (such as language choice and banner dismissal). For full details, see our <a href="/cookie" class="text-navy font-semibold underline hover:text-gold">Cookie Policy</a>.',
    "privacy.section3_title": "Purposes and Legal Bases of Processing",
    "privacy.section3_desc":
      "Personal data collected is processed for the following purposes:",
    "privacy.section3_item1_html":
      "<strong>Order management and customer service:</strong> to provide garment and sizing advice and complete purchases, shipping, or in-store collection (<em>Legal basis: performance of a contract or pre-contractual measures</em>).",
    "privacy.section3_item2_html":
      "<strong>Administrative and statutory compliance:</strong> for accounting and legal bookkeeping of sales (<em>Legal basis: legal statutory obligation</em>).",
    "privacy.section4_title": "Processing Methods & Retention Periods",
    "privacy.section4_desc":
      "Data processing is carried out using secure digital tools, with appropriate security measures in place to prevent data loss, unauthorized access, or misuse.",
    "privacy.section4_card1_title": "Order and Invoicing Records",
    "privacy.section4_card1_desc":
      "Retained for the period required by Italian statutory law (10 years pursuant to Art. 2220 of the Italian Civil Code and tax regulations).",
    "privacy.section4_card2_title": "Inquiries and Customer Support Messages",
    "privacy.section4_card2_desc":
      "Retained for the time strictly necessary to provide a comprehensive response to the client, unless a contractual relationship is established.",
    "privacy.section5_title": "Third-Party Disclosures and Transfers",
    "privacy.section5_desc":
      "Personal data will never be published or sold to third parties for unsolicited marketing. It may only be shared with:",
    "privacy.section5_item1": "Express couriers and shipping partners entrusted with parcel deliveries;",
    "privacy.section5_item2": "Accounting or legal advisors for regulatory and tax compliance;",
    "privacy.section5_item3": "Web hosting and cloud infrastructure providers (e.g., Netlify, Google Fonts);",
    "privacy.section5_item4": "Competent public authorities when required by law.",
    "privacy.section6_title":
      "International Data Transfers & WhatsApp Channel (Meta Platforms)",
    "privacy.section6_p1_html":
      "To allow fast messaging, real-time availability checks, and direct ordering, this website features direct links to <strong>WhatsApp</strong>, provided for European users by <em>Meta Platforms Ireland Limited</em> (4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Ireland) and connected to the global infrastructure of <em>Meta Platforms, Inc.</em> in the United States.",
    "privacy.section6_scc_title":
      "Legal Bases & Standard Contractual Clauses (SCC):",
    "privacy.section6_scc_desc":
      "Following the invalidation of the previous 'EU-U.S. Privacy Shield' by the European Court of Justice (Schrems II ruling, C-311/18), international data transfers by Meta Platforms to servers in the USA or third countries rely on the Standard Contractual Clauses (SCC) adopted by the European Commission pursuant to Art. 46(2)(c) GDPR, as well as adequacy decisions under the EU-U.S. Data Privacy Framework (DPF).",
    "privacy.section6_sec_title": "Security & Encryption:",
    "privacy.section6_sec_desc":
      "Chats and communications conducted via WhatsApp are protected by end-to-end encryption (E2EE), ensuring that only the sender and recipient can access the contents of exchanged messages.",
    "privacy.section6_link_html":
      'For more information on data processing by WhatsApp and Meta, please consult the <a href="https://www.whatsapp.com/legal/privacy-policy-eea" target="_blank" rel="noopener noreferrer" class="font-semibold underline text-navy hover:text-gold">WhatsApp Privacy Policy for the European Economic Area</a>.',
    "privacy.section7_title": "Data Subject Rights (GDPR)",
    "privacy.section7_desc":
      "Under the GDPR, you have the right to access, rectify, delete, or object to the processing of your personal data at any time.",
    "privacy.section7_how_html":
      '<strong>How to exercise your rights:</strong> You can contact us directly by phone or WhatsApp at <a href="tel:+393472662754" class="font-semibold underline text-navy">+39 347 266 2754</a>.',
    "privacy.section7_authority_html":
      'You also have the right to lodge a complaint with the relevant Data Protection Authority (<em>Garante per la Protezione dei Dati Personali</em> — <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" class="font-semibold underline text-navy">www.garanteprivacy.it</a>).',

    // ── Cookie Policy Page ──
    "cookie_page.breadcrumb": "Cookie Policy",
    "cookie_page.title": "Cookie Policy",
    "cookie_page.desc":
      "Comprehensive disclosure on the use of cookies and local storage technologies, drafted in accordance with EU Regulation 2016/679 (GDPR) and Italian Data Protection Authority guidelines.",
    "cookie_page.consent_tag": "Consent Management",
    "cookie_page.consent_title": "Your Cookie Preferences",
    "cookie_page.consent_desc":
      "At any time, you can modify or withdraw your preferences regarding non-essential cookies and storage tools.",
    "cookie_page.consent_btn": "Change Preferences",
    "cookie_page.section1_title": "What are Cookies?",
    "cookie_page.section1_p1":
      "Cookies are small text files that visited websites send to the user's terminal (computer, tablet, or smartphone), where they are stored before being re-transmitted to the same sites on subsequent visits.",
    "cookie_page.section1_p2":
      "Cookies allow the website to remember your actions and preferences (such as selected language or cookie consent), saving you from having to re-enter them when you return or navigate between pages.",
    "cookie_page.section2_title": "Types of Cookies Used",
    "cookie_page.badge_necessary": "Essential",
    "cookie_page.itemA_title": "A. Technical and Functional Cookies",
    "cookie_page.itemA_desc":
      "These cookies and local storage keys are strictly necessary for the proper functioning of the site and to enable regular, secure navigation. They store user language preference (Italian or English) and banner consent status. Web hosting (Netlify) and administrative modules (Decap CMS / Netlify Identity) do not install tracking or profiling cookies on site visitors. Technical cookies do not require prior consent.",
    "cookie_page.badge_absent": "None",
    "cookie_page.itemB_title":
      "B. Profiling Cookies (Neither First nor Third-Party)",
    "cookie_page.itemB_desc":
      "Amart Store Salerno does not use any profiling cookies, neither first-party nor third-party. Our website contains no behavioral advertising trackers (such as Meta Pixel, Google Ads, TikTok Pixel, Criteo) or algorithms designed to profile consumer habits or interests.",
    "cookie_page.badge_third_party": "Third Parties & Direct Links",
    "cookie_page.itemC_title":
      "C. External Services and WhatsApp (Meta Platforms)",
    "cookie_page.itemC_p1_html":
      "To provide an elegant visual experience, Google Fonts (Playfair Display and Nunito) are loaded in accordance with strict privacy standards. Outbound links to <strong>WhatsApp</strong> (operated by <em>Meta Platforms Ireland Limited</em> / <em>Meta Platforms, Inc.</em>) and <strong>Instagram</strong> are standard direct hyperlinks (URLs) and do not embed third-party tracking scripts before the user explicitly clicks.",
    "cookie_page.itemC_p2_html":
      "When you choose to click the WhatsApp link to start a chat or place an order, any international data transfer to servers outside the EEA (USA) by Meta Platforms relies on <strong>Standard Contractual Clauses (SCC)</strong> under Art. 46 GDPR and the adequacy framework of the <strong>EU-U.S. Data Privacy Framework (DPF)</strong>.",
    "cookie_page.section3_title":
      "Detailed Cookies & Local Storage Table",
    "cookie_page.th_name": "Key / Name",
    "cookie_page.th_provider": "Provider",
    "cookie_page.th_type": "Type",
    "cookie_page.th_purpose": "Purpose",
    "cookie_page.th_duration": "Duration",
    "cookie_page.first_party": "First party",
    "cookie_page.tech_storage": "Technical (Local Storage)",
    "cookie_page.row1_purpose":
      "Remembers the user's selected language (Italian or English) across visits",
    "cookie_page.row2_purpose":
      "Saves cookie notice consent status to avoid displaying the banner on every page load",
    "cookie_page.row3_purpose":
      "Records the date and time when the user expressed their cookie preference",
    "cookie_page.persistent_12m": "Persistent (12 months)",
    "cookie_page.section4_title":
      "How to Disable or Clear Cookies in Your Browser",
    "cookie_page.section4_desc":
      "You can block or delete cookies directly through your browser settings. Below are links to official guides for popular browsers:",
    "cookie_page.section4_note_html":
      "<em>Note:</em> Disabling technical cookies or local storage entirely may affect essential site features, such as preserving your selected language.",
    "cookie_page.qa_title": "Questions about this Cookie Policy?",
    "cookie_page.qa_desc_html":
      'For any questions regarding our data practices or cookie usage, feel free to contact GA.SA.SRLS (Amart Store Salerno) via WhatsApp or phone at <a href="tel:+393472662754" class="font-semibold underline text-navy">+39 347 266 2754</a>.',
    "cookie_page.qa_privacy_link": "Read our Privacy Policy",
    "cookie_page.qa_terms_link": "Terms and Conditions of Sale",

    // ── Termini e Condizioni Page ──
    "terms.breadcrumb": "Terms & Conditions",
    "terms.title": "Terms and Conditions of Sale",
    "terms.desc":
      "General Terms of Agreement for distance shopping and orders placed with Amart Store Salerno, formulated in full compliance with the Italian Consumer Code (Leg. Decree 206/2005) and E-Commerce Directive (Leg. Decree 70/2003).",
    "terms.section1_title": "Seller Identification",
    "terms.section1_desc":
      "Garments and goods showcased on this website and linked communication channels are sold directly by:",
    "terms.section1_ragione_sociale": "Corporate Name",
    "terms.section1_piva_cf": "VAT Number & Tax Code",
    "terms.section1_rea": "Business Register (REA)",
    "terms.section1_sede_legale": "Registered Office",
    "terms.section1_negozio": "Physical Boutique (Store)",
    "terms.section1_pec": "Certified Email (PEC)",
    "terms.section1_support": "Customer Support & WhatsApp",
    "terms.section2_title": "Products, Images & Availability",
    "terms.section2_p1":
      "This website provides a showcase of Amart Store Salerno women’s fashion catalog (trousers, knitwear, tops, dresses, jackets, and accessories).",
    "terms.section2_item1_html":
      "<strong>Image Accuracy & AI Technology:</strong> Garment photography and descriptions aim to accurately convey fabric color, cut, and details. Certain editorial imagery on this site may be generated or enhanced with Artificial Intelligence to showcase look presentation while always corresponding to the actual physical garments available in store. Minor color differences may arise due to individual device display calibration.",
    "terms.section2_item2_html":
      "<strong>Availability & Unique Pieces:</strong> As collections are also sold in our Salerno boutique at Via dei Mercanti 131, real-time availability of sizes and colors is always promptly verified by our staff at the moment of your order.",
    "terms.section3_title":
      "Ordering Process (WhatsApp & In-Store)",
    "terms.section3_p1":
      "To provide a personalized, attentive shopping experience, distance orders are placed through direct WhatsApp assistance:",
    "terms.section3_step1_html":
      '<strong>Garment Selection:</strong> The customer browses the catalog and clicks <em>"Order on WhatsApp"</em> or messages <a href="https://wa.me/393472662754" target="_blank" class="font-semibold underline text-navy">+39 347 266 2754</a>;',
    "terms.section3_step2_html":
      "<strong>Consultation & Confirmation:</strong> Our boutique staff checks live stock, provides fit advice, exact centimeter measurements, and additional photos upon request;",
    "terms.section3_step3_html":
      "<strong>Order Confirmation & Payment:</strong> The customer provides their shipping address (or requests in-store collection) and completes payment via the agreed method;",
    "terms.section3_step4_html":
      "<strong>Contract Conclusion:</strong> The distance purchase agreement is concluded upon payment confirmation and issuance of order acknowledgment by GA.SA.SRLS.",
    "terms.section4_title": "Prices and Payment Methods",
    "terms.section4_p1_html":
      "All prices shown on the website are in Euro (€) and <strong>include 22% statutory Italian VAT</strong>.",
    "terms.section4_p2":
      "Accepted payment methods for distance orders and in-store collections include:",
    "terms.section4_method1_title": "Bank Wire Transfer",
    "terms.section4_method1_desc":
      "Available to GA.SA.SRLS IBAN accounts, with orders dispatched upon bookkeeping credit.",
    "terms.section4_method2_title": "Electronic Payment / Cards",
    "terms.section4_method2_desc":
      "Secure, certified payment gateways communicated directly by our staff during WhatsApp consultation.",
    "terms.section4_method3_title": "Payment Upon In-Store Pickup",
    "terms.section4_method3_desc":
      "Cash (within legal limits) or credit/debit card (POS) directly at Via dei Mercanti 131, Salerno.",
    "terms.section5_title": "Shipping & Delivery (24/48h)",
    "terms.section5_item1_html":
      "<strong>Delivery Times:</strong> Deliveries across Italy are handled by express couriers. Average delivery times are <strong>24/48 business hours</strong> from dispatch (Monday through Friday, excluding public holidays). For islands or remote areas, 48/72 hours may be required.",
    "terms.section5_item2_html":
      "<strong>Shipping Costs:</strong> Shipping fees are clearly communicated and confirmed with the customer before payment.",
    "terms.section5_item3_html":
      "<strong>Transfer of Risk:</strong> The risk of parcel loss or damage passes to the customer upon physical receipt. If a parcel arrives visibly damaged, we recommend accepting with written reservation on the courier slip and notifying us immediately on WhatsApp.",
    "terms.section5_item4_html":
      "<strong>In-Store Pickup:</strong> Boutique collection at Via dei Mercanti 131 in Salerno is <strong>always free of charge</strong> during regular opening hours or by appointment.",
    "terms.section6_title":
      "Right of Withdrawal (14 Days - Italian Consumer Code)",
    "terms.section6_p1_html":
      "If you purchase as a Consumer (natural person acting for non-commercial/non-business purposes), you are entitled to withdraw from the contract without penalty and without stating a reason <strong>within 14 (fourteen) calendar days</strong> from the day you receive the goods.",
    "terms.section6_box_title":
      "Essential conditions for return acceptance:",
    "terms.section6_box_item1":
      "The item must be intact, clean, unwashed, free of odors (perfumes, smoke, etc.), and not worn beyond normal try-on;",
    "terms.section6_box_item2":
      "The original brand tag and all labels must remain securely attached;",
    "terms.section6_box_item3":
      "The garment must be returned in its original packaging or suitable protective wrapping.",
    "terms.section6_how_html":
      '<strong>How to exercise withdrawal:</strong> Simply message us on WhatsApp at <a href="tel:+393472662754" class="font-semibold underline text-navy">+39 347 266 2754</a> stating the item you wish to return or exchange along with your purchase date.',
    "terms.section6_refund_html":
      "<strong>Refund or Size Exchange:</strong> Upon receiving and inspecting the returned garment, we will issue a full refund within 14 days using the original payment method, or provide a store credit / dispatch the agreed exchange item. Direct return shipping fees are borne by the customer, unless otherwise agreed or returned directly to our boutique in Salerno.",
    "terms.section6_guide_link_html":
      'For our comprehensive step-by-step return guide, visit <a href="/spedizioni-resi" class="text-navy font-semibold underline hover:text-gold">Shipping & Returns</a>.',
    "terms.section7_title": "Legal Warranty & Competent Jurisdiction",
    "terms.section7_item1_html":
      "<strong>Legal Conformity Warranty:</strong> All garments are covered by the 24-month statutory warranty for conformity defects existing at delivery under the Consumer Code.",
    "terms.section7_item2_html":
      "<strong>Applicable Law & Exclusive Jurisdiction:</strong> These Terms and Conditions are governed by Italian law. For any dispute arising from the interpretation, performance, or termination of the purchase contract — whether for in-store purchases or online/WhatsApp orders — the parties agree that the <strong>exclusive competent court is the Court of Salerno (Italy)</strong>, where the seller company (GA.SA.SRLS / Amart Store Salerno) is headquartered and where the sale takes place.",

    // ── Spedizioni e Resi Page ──
    "shipping_page.breadcrumb": "Shipping & Returns",
    "shipping_page.title": "Shipping, Delivery & Returns",
    "shipping_page.desc":
      "Practicality above all even after your purchase: 24/48h express delivery across Italy, free boutique pickup in Via dei Mercanti in Salerno, and continuous assistance for exchanges and returns.",
    "shipping_page.card1_title": "24/48h Fast Shipping",
    "shipping_page.card1_desc":
      "Quick delivery across Italy with express courier and parcel tracking code sent directly via WhatsApp.",
    "shipping_page.card2_title": "Free Boutique Pickup",
    "shipping_page.card2_desc":
      "Collect your garments directly at our store in Via dei Mercanti 131, Salerno with zero shipping fees.",
    "shipping_page.card3_title": "Easy 14-Day Returns",
    "shipping_page.card3_desc":
      "Request a size exchange or refund within 14 days of delivery with direct WhatsApp concierge assistance.",
    "shipping_page.section1_title": "Shipping Methods & Timeframes",
    "shipping_page.section1_p1":
      "Orders are carefully packed at our boutique in Salerno and dispatched via reliable national express couriers (Monday to Friday).",
    "shipping_page.delivery_time_title": "Delivery Times",
    "shipping_page.delivery_time_peninsula":
      "Mainland Italy: 24/48 business hours from parcel dispatch.",
    "shipping_page.delivery_time_islands":
      "Islands & remote locations: 48/72 business hours.",
    "shipping_page.tracking_title": "Parcel Tracking",
    "shipping_page.tracking_desc_html":
      "As soon as your package is handed over to the courier, we will send the tracking link and airway bill number directly on <strong>WhatsApp</strong> so you can follow delivery in real time.",
    "shipping_page.packaging_html":
      "<strong>Protected Packaging:</strong> Every garment is neatly folded, shielded with a dust-cover wrap, and securely boxed to ensure it reaches you in pristine condition.",
    "shipping_page.pickup_tag": "Zero Delivery Fees",
    "shipping_page.pickup_title": "Salerno Boutique Collection",
    "shipping_page.pickup_desc_html":
      "If you reside in Salerno or are visiting the city, you can pick up your order for free at our boutique in <strong>Via dei Mercanti 131</strong>.",
    "shipping_page.pickup_address":
      "📍 Address: Via dei Mercanti 131, 84121 Salerno (SA), Italy",
    "shipping_page.pickup_hours":
      "🕒 Hours: Mon–Fri: 10:00–20:30 | Saturday: 10:00–00:00 | Sunday: 10:00–22:00",
    "shipping_page.pickup_btn": "Schedule Pickup via WhatsApp",
    "shipping_page.returns_tag": "Practical Guide",
    "shipping_page.returns_title": "How to Request a Return or Size Exchange",
    "shipping_page.returns_intro":
      "Under Article 52 of the Italian Consumer Code, you have 14 days from delivery to request a return. Here are the 4 simple steps:",
    "shipping_page.step1_title": "Contact Us on WhatsApp",
    "shipping_page.step1_desc_html":
      'Message us at <a href="tel:+393472662754" class="font-semibold underline text-navy">+39 347 266 2754</a> stating the item you purchased and whether you prefer a <strong>size/color exchange</strong> or a <strong>full refund</strong>.',
    "shipping_page.step2_title": "Check Garment Condition",
    "shipping_page.step2_desc":
      "Make sure the piece is in the exact condition received: unworn outside regular try-on, unwashed, with all original tags and labels securely attached.",
    "shipping_page.step3_title": "Shipment or In-Store Drop-Off",
    "shipping_page.step3_desc_html":
      "Pack the item securely and ship it to our address: <em>GA.SA.SRLS, Via dei Mercanti 131, 84121 Salerno (SA), Italy</em>, or drop it off in person at our boutique with zero shipping costs.",
    "shipping_page.step4_title": "Refund or New Garment Dispatch",
    "shipping_page.step4_desc":
      "As soon as the returned item arrives and passes inspection, we will promptly process your refund or ship the agreed replacement item.",
    "shipping_page.faq_title":
      "Frequently Asked Questions on Shipping & Returns",
    "shipping_page.faq1_q": "Are return shipping costs paid by the customer?",
    "shipping_page.faq1_a":
      "Yes, in case of withdrawal or change of mind, return shipping costs are paid by the customer. However, you can always drop off the garment free of charge at our Salerno boutique, and in the event of an authenticated manufacturing defect, return shipping is entirely covered by us.",
    "shipping_page.faq2_q":
      "Can I exchange for a different size or another model?",
    "shipping_page.faq2_a":
      "Absolutely. You can coordinate directly via WhatsApp with our styling team to select a different size or another item from our catalog, adjusting any price difference.",
    "shipping_page.faq3_q": "What should I do if the parcel arrives damaged?",
    "shipping_page.faq3_a_html":
      'If you notice visible damage or tampering with the parcel at delivery, please accept it with a written reservation stating <em>"Accepted subject to inspection"</em> on the courier receipt and send us a photo immediately on WhatsApp. We will take care of everything right away.',
    "shipping_page.help_title":
      "Have more questions about an order or delivery?",
    "shipping_page.help_desc":
      "Our team is always at your disposal during boutique opening hours.",
    "shipping_page.help_btn": "Message on WhatsApp",
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
  "Chiara B.": {
    city: "Salerno, Italy",
    body: '"I always drop by the boutique on Via dei Mercanti when in town! The staff is super sweet and gives honest styling advice. The set I picked up last week is gorgeous and so comfy."',
  },
  "Giulia R.": {
    city: "Rome, Italy",
    body: '"I was a little hesitant to order via WhatsApp at first, but they sent live photos and exact measurements right away. The parcel arrived next day and fits like a dream!"',
  },
  "Martina L.": {
    city: "Naples, Italy",
    body: '"I have literally lived in these wide-leg trousers! Fluid fabric that doesn\'t wrinkle in my bag, perfect from office mornings to seaside aperitivo evenings."',
  },
  "Francesca T.": {
    city: "Milan, Italy",
    body: '"Found them on Instagram and messaged for a dress before a weekend in Amalfi. Super lovely customer service and the package arrived smelling divine! Got so many compliments."',
  },
  "Elena S.": {
    city: "Salerno, Italy",
    body: '"Pieces you can pair easily with sneakers or dressed up with heels. Genuine practicality without sacrificing style, my favorite boutique in Salerno."',
  },
  "Anna S.": {
    city: "Avellino, Italy",
    body: '"Everything and more! In this boutique I found dresses, swimwear, slides, and even sarongs... everything needed for a sparkling summer!!"',
  },
  "Luana G.": {
    city: "Bologna, Italy",
    body: '"Wonderful store! Fashionable, versatile, and very affordable clothing. The sales assistant is so kind... highly recommended!!"',
  },
  "Manuela V.": {
    city: "Salerno, Italy",
    body: '"A true gem in the heart of Via dei Mercanti. Trendy pieces, fine fabrics, and a rare, elegant welcome. Highly recommended!"',
  },
};
