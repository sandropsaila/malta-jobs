# Malta Jobs — Search Protocol v2
# Run this protocol every time the user says "Update searches" or "Refresh"
# ─────────────────────────────────────────────────────────────────────────────

## STEP 1 — Recruiter portals (direct fetch)
Fetch these pages and scan for C-Suite / Head of / GM / Director roles:

- GRS:        https://jobs.grsrecruitment.com/vacancies.aspx
- Konnekt:    https://www.konnekt.com/search/job-focus:general-management
- Broadwing:  https://broadwing.jobs/careers/job-location/malta/
- Reed Malta: https://www.reedglobal.com.mt/jobs
- Outreach:   https://outreachrecruitment.net/vacancies/
- AIMS:       https://www.aims-malta.com/jobs
- COREcruitment: https://www.corecruitment.com/vacancies

## STEP 2 — Direct company career pages
Fetch these and scan for senior openings:

- Hili Ventures:  https://hiliventures.com/careers/
- Farsons:        https://www.farsons.com/careers/vacancies
- AMSM:           https://amsm.com.mt/careers/
- Gasan Group:    https://careers.smartrecruiters.com/GasanGroup1
- ONE.io:         https://one.io/about-us/

## STEP 3 — Google-indexed LinkedIn searches (no login needed)
Run these web searches to surface LinkedIn-posted roles:

- site:linkedin.com/jobs "Malta" "Chief Executive Officer"
- site:linkedin.com/jobs "Malta" "Chief Operating Officer"
- site:linkedin.com/jobs "Malta" "Chief Financial Officer"
- site:linkedin.com/jobs "Malta" "General Manager"
- site:linkedin.com/jobs "Malta" "Head of" director senior
- site:linkedin.com/jobs "Malta" "Managing Director"
- site:linkedin.com/jobs Malta fintech payments CEO vacancy 2026
- site:linkedin.com/jobs Malta iGaming "Head of" OR "Chief" vacancy 2026
- site:linkedin.com/jobs Malta FMCG "General Manager" OR "Head of" vacancy 2026

## STEP 4 — Indeed Malta
- site:mt.indeed.com CEO OR COO OR CFO OR "General Manager" Malta
- site:indeed.com "Malta" "Chief" OR "General Manager" OR "Head of" senior 2026

## STEP 5 — Malta news sources (vacancy & appointment announcements)
- site:timesofmalta.com "CEO" OR "General Manager" vacancy appointed Malta 2026
- site:maltatoday.com.mt "Chief Executive" OR "General Manager" vacancy Malta 2026
- site:thebusinesspicture.com CEO OR "General Manager" vacancy 2026
- site:independent.com.mt "Chief Executive" OR "General Manager" appointed Malta 2026

## DEDUPLICATION RULES
- Never add a role already in JOBS array (check by title + company)
- If a role appears across multiple sources, use the most direct apply link
- Mark isNew: true if posted within last 14 days
- Mark isNew: false if older

## QUALITY GATES — only add if ALL of these are true:
1. Role is real and currently open (not filled, not expired)
2. Location is Malta or explicitly requires relocation to Malta
3. Seniority is C-Suite / Head of Function / General Manager / Director minimum
4. Apply URL resolves to a real page (career page, recruiter listing, or LinkedIn post)
