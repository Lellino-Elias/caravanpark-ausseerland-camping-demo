import type { CampsiteConfig } from "../types";

/**
 * Caravanpark Ausseerland — honest config, 100 % aus raw/digest abgeleitet.
 * Familiengeführter Bergcampingplatz in Bad Aussee (Tanner 31), 365 Tage geöffnet.
 * KEIN See am Platz (Seen liegen in der Umgebung) → kein `see`-Feld.
 */
const IMG = "/campsites/caravanpark-ausseerland";

const caravanparkAusseerland: CampsiteConfig = {
  name: "Caravanpark Ausseerland",
  shortName: "Caravanpark",
  slug: "caravanpark-ausseerland",
  ort: "Bad Aussee",
  region: "Salzkammergut",
  brandKind: "Camping in den Bergen",
  regionLong: "Salzkammergut · Steiermark · Österreich",

  heroVariant: "center",

  claim: "Wach auf mit Bergblick — mitten im Salzkammergut",
  claimEmphasis: "mit Bergblick",
  emailDetail: "euer Bergblick auf Loser und Trisselwand",
  intro:
    "Zehn Stellplätze, moderne Snackbox und gemütliche Glamping-Hütten — 365 Tage im Jahr, mit Blick auf Loser und Trisselwand. Dein Basislager für Wandern, Biken und Bergwinter im Ausseerland.",

  logo: { src: `${IMG}/logo-b8d2473952.png`, alt: "Logo Caravanpark Ausseerland" },

  statement: {
    text: "Zehn Stellplätze, vier Hausberge im Blick — und das ganze Jahr für dich geöffnet.",
    emphasis: "vier Hausberge",
  },

  pillars: [
    {
      title: "Stellplätze mit Bergblick",
      text: "Zehn großzügige Plätze, asphaltiert und eben — die Komfort-Plätze 6 bis 10 schauen direkt auf Loser, Trisselwand und Zinken.",
      image: { src: `${IMG}/gallery-b74e67d476.webp`, alt: "Wohnmobile auf den Stellplätzen des Caravanpark Ausseerland" },
    },
    {
      title: "Glamping im Naturloft",
      text: "Keine Lust auf Zelt? Unsere Naturloft-Hütten bringen dich mit Boxspringbett, Heizung und kleiner Veranda mitten in die Natur.",
      image: { src: `${IMG}/gallery-cf05cd5236.webp`, alt: "Glamping-Hütte Naturloft am Caravanpark Ausseerland" },
    },
    {
      title: "Berge & Seen vor der Tür",
      text: "Wandern, klettern, baden: das Tote Gebirge, die Dachsteinrunde und die kristallklaren Ausseerland-Seen beginnen rund um den Platz.",
      image: { src: `${IMG}/gallery-68fc7fe9e7.webp`, alt: "Blick von den Bergen über den See im Ausseerland" },
    },
  ],

  usps: [
    "365 Tage geöffnet",
    "Bergblick-Stellplätze",
    "Glamping-Hütten",
    "Kaffee am Platz",
    "Brötchenservice",
    "E-Bike-Verleih",
  ],

  trust: {
    heading: "Zehn Plätze, eine Gastgeberfamilie",
    headingEmphasis: "eine Gastgeberfamilie",
    intro:
      "Stefanie, Reinhard und Franz führen den Caravanpark persönlich — mit Snackbox, Brötchenservice und Insidertipps für Touren rund um Bad Aussee. Camping modern, lässig und herzlich.",
  },

  awards: [],

  saison: { von: "Jänner", bis: "Dezember" },

  hero: {
    aerial: { src: `${IMG}/gallery-da0cf3bdd9.webp`, alt: "Wohnmobile am Caravanpark Ausseerland mit Blick auf die Berge" },
  },

  breather: {
    image: { src: `${IMG}/gallery-06a0a64660.webp`, alt: "Luftaufnahme des Caravanpark Ausseerland im Wald" },
    line: "Mitten im Wald, am Fuß der Berge.",
  },

  camping: {
    heading: "Camping in den Bergen",
    intro:
      "Vom asphaltierten Basic-Platz bis zum Bergblick-Stellplatz: Wasser, Strom und WC sind überall dabei — Sanitär, Snackbox und Frühstückstreff inklusive.",
    features: [
      {
        title: "Stellplätze mit Bergblick",
        text: "Die Komfort-Plätze ab 60 m² (Nr. 6–10) blicken auf Loser, Trisselwand, Tressenstein und Zinken — Wasser, Strom und WC inklusive.",
        image: { src: `${IMG}/gallery-45df650188.webp`, alt: "Wohnmobile auf den sommerlichen Stellplätzen mit Bergblick am Caravanpark Ausseerland" },
      },
      {
        title: "Sanitär & warme Duschen",
        text: "WC-Anlagen und Duschen findest du im schwarzen Container am Platz sowie im Schutzhaus — eine warme Dusche kostet nur € 1.",
        image: { src: `${IMG}/gallery-3d182b06ea.webp`, alt: "WC und Dusche im Container am Campingplatz" },
      },
      {
        title: "Kaffee am Platz — die Snackbox",
        text: "Selbstbedienungs-Snackbox direkt am Platz: frisch gebrühter Kaffee, kühle Getränke sowie herzhafte und süße Snacks für zwischendurch.",
        image: { src: `${IMG}/gallery-5577ae8be3.webp`, alt: "Snackbox mit Selbstbedienung am Caravanpark Ausseerland" },
      },
      {
        title: "Frühstückstreff im Schutzhaus",
        text: "Regionales Frühstücksbuffet mit Willkommensgetränk im Schutzhaus nebenan — € 28 pro Person, mit Vorreservierung bis 18 Uhr am Vortag.",
        image: { src: `${IMG}/gallery-5faf0ff91b.webp`, alt: "Frühstücksraum im Schutzhaus am hohen Camper" },
      },
      {
        title: "Grillkotta für jedes Wetter",
        text: "Auch wenn es regnet: In der Grillhütte feierst du auf Anfrage einen gemütlichen Grillabend — windgeschützt und mitten im Grünen.",
        image: { src: `${IMG}/gallery-7ad80d740d.webp`, alt: "Grillkotta im Wald am Caravanpark Ausseerland" },
      },
      {
        title: "365 Tage im Jahr geöffnet",
        text: "Ob Bergsommer oder verschneiter Wintertag — der Caravanpark hat das ganze Jahr offen, mit Schneeschuh- und Langlauf-Tipps von Reinhard.",
        image: { src: `${IMG}/gallery-f1f5002a41.webp`, alt: "Skitourengeher auf verschneitem Bergplateau im Ausseerland mit blauem Himmel" },
      },
    ],
  },

  mobilheime: {
    heading: "Lieber ein Dach über dem Kopf?",
    intro:
      "Kein Zeltplatz, dafür echte Alternativen: gemütliche Naturloft-Glamping-Hütten und großzügige Mountainloft-Appartements im Schutzhaus.",
    items: [
      {
        name: "Dein Naturloft",
        kind: "Glamping-Hütte",
        text: "Boxspringbett (140 cm), Schlafcouch und Sitzecke mit kleinem Küchenblock samt Nespresso — plus eigene kleine Veranda. Frühstück inklusive.",
        image: { src: `${IMG}/accommodation-7a611d5bf9.webp`, alt: "Innenraum der Naturloft-Glamping-Hütte mit Küchenblock und Sitzecke" },
        priceFrom: 50,
        features: ["Bett mit Heizung", "Küchenblock & Nespresso", "Eigene Veranda", "ab € 50 p. P. inkl. Frühstück"],
      },
      {
        name: "Dein Mountainloft M",
        kind: "Appartement für 2–4",
        text: "Freundliche Ferienwohnung mit offenem Wohn-Essbereich, Couch und Kamin — modern und rustikal kombiniert, mit viel Liebe zum Detail.",
        image: { src: `${IMG}/gallery-768805f5f2.webp`, alt: "Wohnküche im Mountainloft-Appartement in Bad Aussee" },
        priceFrom: 80,
        features: ["Wohn-Essbereich mit Kamin", "2 bis 4 Personen"],
      },
      {
        name: "Dein Mountainloft L",
        kind: "Appartement für 4–6",
        text: "Das große Family-&-Friends-Appartement mit Balkon und bodentiefen Fenstern — viel Platz zum Wohlfühlen für die ganze Runde.",
        image: { src: `${IMG}/gallery-6c22c143fc.webp`, alt: "Schlafzimmer im Mountainloft L Appartement" },
        priceFrom: 150,
        features: ["Balkon", "Bodentiefe Fenster", "4 bis 6 Personen"],
      },
    ],
  },

  aktivitaeten: {
    heading: "Womit das Ausseerland lockt",
    intro:
      "Direkt rund um den Platz beginnt das Tote Gebirge — und im Tal warten kristallklare Seen mit Trinkwasserqualität.",
    items: [
      {
        title: "Wandern & Gipfeltouren",
        text: "Ein dichtes Wegenetz im Toten Gebirge und Dachsteinmassiv führt in gemütlichen Tagesetappen von Hütte zu Hütte — mitten in Österreich.",
        image: { src: `${IMG}/gallery-9e3a937c50.webp`, alt: "Schroffe Berggipfel im Salzkammergut" },
      },
      {
        title: "Klettern & Klettersteige",
        text: "Unzählige Klettersteige und Sportkletterrouten im Salzkammergut schenken dir Aus- und Tiefblicke, die du nicht so schnell vergisst.",
        image: { src: `${IMG}/gallery-e9cbc320f1.webp`, alt: "Kletterer an einer Felswand mit Bergpanorama" },
      },
      {
        title: "Baden in klaren Seen",
        text: "Die kristallklaren Seen im Ausseerland haben Trinkwasserqualität und laden im Sommer zum Sprung ins kühle Nass ein.",
        image: { src: `${IMG}/gallery-783bbe0a83.webp`, alt: "Baden im klaren Bergsee im Ausseerland" },
      },
      {
        title: "Bergwinter & Loipen",
        text: "Schneeschuhwandern mit Verleih vor Ort, über 100 Loipenkilometer und Skitouren auf Naturschnee — der Bergwinter kann kommen.",
        image: { src: `${IMG}/gallery-c690ab8767.webp`, alt: "Verschneite Winterlandschaft mit Loipe im Ausseerland" },
      },
    ],
  },

  anreise: {
    heading: "So kommst du nach Tanner",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die Salzkammergut-Bundesstraße B 145 bis Bad Aussee, dann Richtung Tanner 31 — die Stellplätze liegen ganz in der Nähe der B 145.",
      },
      {
        title: "Mit der Bahn",
        text: "Bahnhof Bad Aussee an der Salzkammergutbahn; von dort sind es nur wenige Minuten bis zum Platz.",
      },
      {
        title: "Ankommen & Self-Check-in",
        text: "Freien Platz wählen, an der Kasse im Container Platznummer und Rechnung ziehen, Meldeschein ausfüllen — und schon geht's los.",
      },
    ],
  },

  galerie: {
    heading: "Eindrücke aus dem Ausseerland",
    headingEmphasis: "Ausseerland",
    intro: "Snackbox, Glamping-Hütten und die Berge ringsum — ein paar Eindrücke vom Platz und seiner Umgebung.",
    tag: "Sommer & Winter",
    moreCount: 24,
    images: [
      { src: `${IMG}/gallery-193f486508.webp`, alt: "Gartentreff mit Bistro-Stühlen am Schutzhaus" },
      { src: `${IMG}/gallery-bf882bd1e0.webp`, alt: "Nebelmeer über den Bergen des Ausseerlands" },
      { src: `${IMG}/gallery-a3dd7784d9.webp`, alt: "Spiegelung der verschneiten Berge im Bergsee" },
      { src: `${IMG}/gallery-f3c62c64f6.webp`, alt: "Naturloft-Hütte mit Gartenidylle am Schutzhaus" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz mit Bergblick",
    headingEmphasis: "Bergblick",
    intro:
      "Wähle Kategorie und Zeitraum — die Gastgeberfamilie meldet sich persönlich mit deiner Verfügbarkeit. Plätze für 2026 sind nur auf Anfrage buchbar.",
    pricesArePlaceholder: false,
    priceNote:
      "ab-Preise pro Nacht für 2 Personen inkl. Wasser, Strom & WC — zzgl. € 3 Nächtigungsabgabe pro Person · Naturloft € 50 pro Person inkl. Frühstück",
    highlight: {
      title: "365 Tage geöffnet",
      text: "Sommercamping oder Bergwinter — der Platz hat das ganze Jahr für dich offen.",
    },
    categories: [
      { id: "basic", label: "Basic-Stellplatz · 30 m²", perNight: 35 },
      { id: "komfort", label: "Komfort-Stellplatz · ab 60 m²", perNight: 40 },
      { id: "naturloft", label: "Naturloft · Glamping", perNight: 100 },
    ],
  },

  kontakt: {
    tel: "+43 664 4530833",
    telHref: "tel:+436644530833",
    mail: "schutzhaus@caravanpark-ausseerland.at",
    facebook: "https://www.facebook.com/caravanparkausseerland",
    adresse: "Tanner 31 · 8990 Bad Aussee · Steiermark",
    coords: { lat: 47.6207907, lng: 13.7512694 },
  },

  languages: ["DE"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Stellplätze", href: "#camping" },
        { label: "Sanitär & Snackbox", href: "#camping" },
      ],
    },
    { label: "Hütten & Apartments", href: "#mobilheime" },
    { label: "Aktiv", href: "#aktivitaeten" },
    {
      label: "Preise & Anreise",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
      ],
    },
  ],
};

export default caravanparkAusseerland;
