/* =====================================================================
   SIR ZAFAR ALAM — SITE CONFIG
   Built by Nexlyr Solutions.

   The ONLY file you edit for contact details, links, campus info,
   intake dates, results, reviews and lectures. Every page reads it.

   RULE: anything marked "TO CONFIRM" is deliberately blank. Blank
   fields and empty lists are HIDDEN automatically — the site never
   shows a dead link, an invented number or a placeholder review.
   ===================================================================== */

window.SITE = {

  /* ---- identity (his public Instagram bio + Jaffar Public School) -- */
  fullName:  "Zafar Alam",
  shortName: "Zafar Alam",
  honorific: "Sir",
  slogan:    "",
  tagline:   "Cambridge O Level Islamiyat 2058.",
  credential:"Ph.D in Hadith · Director, The ZATians' Academy",
  teaches:   "Cambridge O Level Islamiyat 2058",
  city:      "Karachi",
  country:   "Pakistan",

  /* ---- figures exactly as stated on his public Instagram bio ------- */
  since:     "2002",           // "Teaching Islamiyat since 2002"
  students:  "20,000+",        // "Taught 20000+ students"
  distinctions: "5",           // "5 Distinctions"

  /* ---- contact ----------------------------------------------------
     whatsapp: digits only, country code first, e.g. "923001234567".
     Empty → WhatsApp buttons hide and registration copies the message. */
  whatsapp:  "",                 // TO CONFIRM
  phoneShow: "",                 // TO CONFIRM
  email:     "",
  mapUrl:    "",

  /* ---- socials (his public accounts) ------------------------------- */
  facebook:  "https://www.facebook.com/sirzafaralam/",
  instagram: "https://www.instagram.com/zafaralamofficial/",
  academyFacebook: "https://www.facebook.com/thezatiansacademy/",
  linkedin:  "",
  youtube:   "",

  /* ---- The ZATians' Academy campuses (public map listings) --------- */
  campuses: [
    { name: "Jauhar Campus",      area: "B-77, Johar Hill Road, Karachi" },
    { name: "North Campus",       area: "SC-4, Block L, North Nazimabad, Karachi" },
    { name: "Bahadurabad Campus", area: "Bahadurabad, Karachi" },
    { name: "Gulshan Campus",     area: "Gulshan, Karachi" }
  ],
  online: false,                 // set true if he runs live online classes

  affiliations: ["The ZATians' Academy", "Jaffar Public School"],

  /* ---- class timings — only the current timetable ------------------ */
  timings: [
    // { level: "Regular", time: "Tue & Thu · 4:00 – 5:15 pm" }
  ],

  intakeDate:  "",
  intakeLabel: "Next batch begins",
  intakeOpen:  true,
  sessionYear: "2027",

  introVideo: "",
  results: [],
  reviews: [],
  lectures: [],

  photo: "zafar.jpg",
  pdfBase: "",

  agency:    "Nexlyr Solutions",
  agencyUrl: "https://nexlyr.solutions"
};
