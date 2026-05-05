# High Profile Jobs — Malta Vacancies

A mobile-first, PIN-protected React job board tracking senior executive vacancies in Malta.
Auto-deploys to Vercel on every GitHub push.

## Live App

**PIN:** `1234` (change it — see below)

## Features

- PIN-protected access — 4-digit PIN, SHA-256 hashed, session-persisted
- Dark mobile-first UI — Plus Jakarta Sans, amber/violet/emerald palette
- Stats bar — live vacancy counts per sub-category, tap to filter
- Market snapshot — auto-generated summary of the board
- Search + filter drawer — full-text search, category, source, sort
- Expandable job cards — skills, description, salary badge, NEW badge, Apply link
- OG meta tags — WhatsApp and LinkedIn sharing preview ready
- Auto-deploy — push to GitHub → live in ~60 seconds

## Sub-categories

| ID | Label | Colour |
|---|---|---|
| c-suite | Chief / C-Suite | Amber #F59E0B |
| head | Head of Function | Violet #8B5CF6 |
| general-manager | General Manager | Emerald #10B981 |

## Adding New Jobs

Open `src/data/jobs.js` and add a new object at the **top** of the JOBS array:

```js
{
  id: "j009",
  title: "Chief Commercial Officer",
  company: "Acme Malta Ltd",
  category: "c-suite",          // "c-suite" | "head" | "general-manager"
  source: "LinkedIn",
  sourceUrl: "https://linkedin.com/jobs/...",
  location: "Malta",
  salary: "€70,000 – €90,000", // or null
  posted: "2026-05-05",
  isNew: true,
  applyUrl: "https://...",
  description: "Role description.",
  skills: ["Commercial Strategy", "P&L"],
},
```

Also update LAST_UPDATED in `src/components/NavBar.jsx`. Push to GitHub → auto-deploys.

## Changing the PIN

1. Open browser console and run:
   crypto.subtle.digest('SHA-256', new TextEncoder().encode('YOUR_PIN'))
     .then(b => console.log([...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('')))
2. Paste the hash into HASHED_PIN in `src/utils/auth.js`

## Local Development

npm install && npm run dev

## Deploy to Vercel

1. Push repo to GitHub
2. vercel.com → New Project → import repo → Deploy
3. Every future git push auto-deploys
