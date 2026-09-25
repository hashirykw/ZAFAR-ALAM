/* =====================================================================
   ISLAMIYAT 2058 — SYLLABUS + PAST PAPER ENGINE · Sir Zafar Alam
   Drives papers.html, subjects.html and the home page.

   Paper structure and content areas are taken from the official
   Cambridge O Level Islamiyat 2058 syllabus (2026–2027). Component
   and variant codes (11, 12, 21, 22) are from Cambridge's June 2025
   grade threshold table.

   ---------------------------------------------------------------------
   HOW THE FILE LINKS WORK
   ---------------------------------------------------------------------
   Every URL is built as:   SITE.pdfBase + filename

       2058_s23_qp_12.pdf    May/June 2023, Paper 1 variant 2, question paper
       2058_s23_ms_12.pdf    ...the matching mark scheme
       2058_s23_gt.pdf       grade thresholds for that session
       2058_s23_er.pdf       examiner report for that session

   Sessions:  s = May/June    w = Oct/Nov

   Upload the PDF folder, set SITE.pdfBase in config.js, and every link
   in the portal goes live at once. Until then the portal shows a
   "request access" panel instead of a dead link.
   ===================================================================== */

window.SYLLABUS = (function () {

  const YEAR_FROM = 2015;
  const YEAR_TO   = 2025;

  const SESSIONS = [
    { code: "s", label: "May / June", short: "M/J" },
    { code: "w", label: "Oct / Nov",  short: "O/N" }
  ];

  const VARIANTS = [1, 2];

  /* The paper tabs used across the site */
  const PAPERS = [
    { n: 1, key: "p1", name: "Paper 1", title: "The Qur'an and the Prophet", ar: "القرآن والسيرة", accent: "brass",
      summary: "Major themes of the Qur'an, the history and importance of the Qur'an, the life and importance of the Prophet Muhammad, and the first Islamic community." },
    { n: 2, key: "p2", name: "Paper 2", title: "Hadith, the Caliphs and the Pillars", ar: "الحديث والخلافة والأركان", accent: "jade",
      summary: "Major teachings in Hadiths, the history and importance of Hadiths, the Rightly Guided Caliphs, and the Articles of Faith and Pillars of Islam." }
  ];

  const SUBJECTS = [
    {
      key: "islamiyat",
      name: "Islamiyat",
      abbr: "ISL",
      accent: "brass",
      summary: "Cambridge O Level Islamiyat — two papers of 1½ hours, 50 marks each. Each paper sets five questions: answer Question 1, Question 2 and two others.",
      qualifications: [
        {
          code: "2058", level: "O Level", title: "Cambridge O Level Islamiyat",
          components: [
            { n: 1, name: "Paper 1", time: "1h 30m", marks: 50, weight: "50%" },
            { n: 2, name: "Paper 2", time: "1h 30m", marks: 50, weight: "50%" }
          ]
        }
      ],
      topics: [
        /* ---------------- Paper 1 ---------------- */
        { unit: "1", q: "Q1 · 8 marks", title: "Major themes of the Qur'an", papers: { "2058": [1] },
          items: ["God in himself", "God's relationship with the created world", "God's messengers", "Three passages set — answer any two"] },
        { unit: "2", q: "Q2 · 14 marks", title: "History and importance of the Qur'an", papers: { "2058": [1] },
          items: ["Revelation, 610–632 CE", "Compilation under the Rightly Guided Caliphs", "Major themes across the passages", "Use in legal thinking — with Hadiths, ijma' and qiyas", "Significance as the basis of Islamic thought and action"] },
        { unit: "3", q: "Optional · 14 marks", title: "Life and importance of the Prophet Muhammad", papers: { "2058": [1] },
          items: ["Birth to the call to prophethood", "Activities in Makka and the opposition faced", "Leadership and activities in Madina", "His actions and character as examples", "Significance as the Seal of the Prophets"] },
        { unit: "4", q: "Optional · 14 marks", title: "The first Islamic community", papers: { "2058": [1] },
          items: ["The Prophet's wives", "His descendants", "Leading Companions — the Ten Blessed Companions, Scribes, Emigrants and Helpers", "The Rightly Guided Caliphs in the Prophet's lifetime"] },
        /* ---------------- Paper 2 ---------------- */
        { unit: "5", q: "Q1 · 8 marks", title: "Major teachings in Hadiths", papers: { "2058": [2] },
          items: ["Individual conduct", "Life in the community", "Four passages set — answer any two"] },
        { unit: "6", q: "Q2 · 14 marks", title: "History and importance of Hadiths", papers: { "2058": [2] },
          items: ["Compilation and the earliest collections", "Musnad and musannaf collections", "The main compilers and their methods", "Isnad and matn", "The six Sunni and four Shi'a collections", "Use in legal thinking — with the Qur'an, ijma' and qiyas"] },
        { unit: "7", q: "Optional · 14 marks", title: "The Rightly Guided Caliphs", papers: { "2058": [2] },
          items: ["Main events of the four Caliphs' rule", "Policies to maintain and expand the state", "Leadership and main achievements", "Difficulties faced", "Significance as examples of leadership, then and now"] },
        { unit: "8", q: "Optional · 14 marks", title: "Articles of Faith and Pillars of Islam", papers: { "2058": [2] },
          items: ["The six Articles of Faith", "Jihad", "Shahada", "Salat", "Zakat", "Sawm", "Hajj"] }
      ]
    }
  ];

  const YEARS = [];
  for (let y = YEAR_TO; y >= YEAR_FROM; y--) YEARS.push(y);

  function findSubject() { return SUBJECTS[0]; }
  function findQual(code) {
    const q = SUBJECTS[0].qualifications.filter(function (x) { return x.code === code; })[0];
    return q ? { subject: SUBJECTS[0], qual: q } : null;
  }
  function unitsFor(s, q, paper) {
    return s.topics.filter(function (t) { return t.papers && t.papers[q.code] && (!paper || t.papers[q.code].indexOf(paper) > -1); });
  }
  function papersFor(t, q) {
    const ns = (t.papers && t.papers[q.code]) || [];
    return q.components.filter(function (c) { return ns.indexOf(c.n) > -1; });
  }

  function yy(year) { return String(year).slice(2); }
  function token(component, variant) { return String(component) + String(variant); }
  function fileName(code, session, year, kind, component, variant) {
    const base = code + "_" + session + yy(year) + "_" + kind;
    if (kind === "gt" || kind === "er") return base + ".pdf";
    return base + "_" + token(component, variant) + ".pdf";
  }

  function build(f) {
    const found = findQual(f.code || "2058");
    if (!found) return [];
    const qual = found.qual, rows = [];
    const years    = f.year    ? [f.year]    : YEARS;
    const sessions = f.session ? SESSIONS.filter(function (s) { return s.code === f.session; }) : SESSIONS;
    const comps    = f.component ? qual.components.filter(function (c) { return c.n === f.component; }) : qual.components;
    const variants = f.variant ? [f.variant] : VARIANTS;
    years.forEach(function (year) {
      sessions.forEach(function (session) {
        comps.forEach(function (comp) {
          variants.forEach(function (v) {
            rows.push({
              subject: found.subject.name, subjectKey: found.subject.key, accent: found.subject.accent,
              code: qual.code, level: qual.level, year: year,
              session: session.code, sessionLabel: session.label, sessionShort: session.short,
              component: comp.n, compName: PAPERS[comp.n - 1].title, stage: "", variant: v,
              ref: qual.code + "/" + token(comp.n, v),
              id: qual.code + "_" + session.code + yy(year) + "_" + token(comp.n, v),
              qp: fileName(qual.code, session.code, year, "qp", comp.n, v),
              ms: fileName(qual.code, session.code, year, "ms", comp.n, v),
              gt: fileName(qual.code, session.code, year, "gt"),
              er: fileName(qual.code, session.code, year, "er")
            });
          });
        });
      });
    });
    return rows;
  }

  return { yearFrom: YEAR_FROM, yearTo: YEAR_TO, years: YEARS, sessions: SESSIONS, variants: VARIANTS, papers: PAPERS,
    subjects: SUBJECTS, findSubject: findSubject, findQual: findQual, unitsFor: unitsFor, papersFor: papersFor, fileName: fileName, build: build };
})();
