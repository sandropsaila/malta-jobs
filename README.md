# High Profile Jobs — Malta Vacancies

A mobile-first, PIN-protected React job board tracking senior executive vacancies in Malta. Auto-deploys to Vercel on every GitHub push.

**Live:** https://malta-jobs.vercel.app
**PIN:** `1122`

## Sub-categories

| ID | Label | Colour |
|---|---|---|
| c-suite | Chief / C-Suite | Amber #F59E0B |
| head | Head of Function | Violet #8B5CF6 |
| general-manager | General Manager | Emerald #10B981 |

## Companies monitored (FMCG · Retail · Consumer)

**FMCG / Beverages:** Simonds Farsons Cisk · Nestlé Malta · General Soft Drinks (Coca-Cola Malta) · P. Cutajar & Co. · Charles Grech · Camilleri Wines · Liquigas

**FMCG Distribution / Marketing:** Alf Mizzi & Sons Marketing Group · Francis Busuttil & Sons · M&Z p.l.c. · Vivian Corporation · VJ Salomone Marketing · MAG Distribution · Anchor Brand Trading

**Retail / Supermarket / Mall:** PG plc (PAVI / PAMA / Zara Malta) · Tigné Mall (The Point) · Lidl Malta · Welbee's · Greens · Smart · Scotts

**Diversified / Consumer Groups:** Gasan Group · Hili Ventures · Zammit Group · Express Group · Tumas Group · Eden Leisure · GO plc · Melita

**Food Service / Hospitality Retail:** Premier Capital (McDonald's Malta) · Food Chain (Burger King / KFC / Boost) · HV Hospitality

## Job Sources

LinkedIn · GRS · Keepmeposted · Jobsinmalta · Konnekt · Direct company career pages

## Search Queries

```
General Manager / CEO / COO / CMO Malta 2026
Marketing Director / Sales Director Malta 2026
Head of Marketing / Sales / Operations Malta 2026
Country Manager / Managing Director Malta 2026
Commercial Director / CCO Malta FMCG
Retail Director / Brand Manager Malta consumer
```

## Adding new jobs

Send Claude a screenshot of any job alert (LinkedIn, Konnekt, etc.) and say "Add these jobs to the app" — Claude will extract and push to GitHub. Live on Vercel in ~60 seconds.

Or edit `src/data/jobs.js` manually:

```js
{
  id: "j010",
  title: "Chief Commercial Officer",
  company: "Acme Malta Ltd",
  category: "c-suite",          // c-suite | head | general-manager
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

## Changing the PIN

In browser console:
```js
crypto.subtle.digest('SHA-256', new TextEncoder().encode('YOUR_PIN'))
  .then(b => console.log([...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('')))
```
Paste hash into `HASHED_PIN` in `src/utils/auth.js`.

## Tech

React 18 + Vite · Lucide icons · Plus Jakarta Sans · Web Crypto API · Vercel · GitHub
