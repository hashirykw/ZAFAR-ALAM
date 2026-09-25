# Sir Zafar Alam — deploy

Static site. No build step, no backend. Upload the folder as it is.

## Layout — everything flat, next to index.html
```
index.html  subjects.html  papers.html  classes.html  about.html
config.js   papers.js      og.jpg       vercel.json   robots.txt
zafar.jpg   ← ADD: his portrait (~1200×1500). A "Z" monogram shows until then.
```
No sub-folders. Upload every file to the repo root.

## Host on Vercel
GitHub repo → vercel.com → Add New → Project → import → Framework **Other**,
no build command, output directory `./` → Deploy.

## Fill in `config.js` (blank = hidden, nothing fake ever shows)
- `whatsapp` + `phoneShow` — turns on every WhatsApp button; registration opens
  WhatsApp directly (until then it copies the message instead)
- `timings` — only the current batch timetable
- `intakeDate` — live countdown · `introVideo` — hero video button · `youtube`
- `pdfBase` — folder of papers named like `2058_s23_qp_12.pdf`, `2058_w24_ms_21.pdf`
- `results`, `reviews` — real ones only
- `online: true` — if he runs live online classes

The figures on the site (since 2002 · 20,000+ students · 5 distinctions · Ph.D in
Hadith) are quoted from his public Instagram bio — confirm with him before launch.
