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
- Jobhound.mt:   https://jobhound.mt/jobs?category=management

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

## MANDATORY LINK VERIFICATION (added 23 May 2026)
Before adding ANY role to jobs.js, both URLs must be verified:

1. **applyUrl** — must resolve to a page that specifically shows this role
   - ✅ Direct job listing page (e.g. konnekt.com/jobs/category/title/12345)
   - ✅ Recruiter's apply page for this specific role
   - ✅ Company careers page when it's the only/primary apply route
   - ❌ Generic homepage (konnekt.com)
   - ❌ Category page with no specific role (konnekt.com/jobs)
   - ❌ LinkedIn company page (linkedin.com/company/konnekt)
   - ❌ Third-party aggregator that doesn't host the application

2. **sourceUrl** — must resolve to a page that confirms this specific role exists
   - ✅ The actual job listing page
   - ✅ A news article mentioning this specific vacancy
   - ✅ A search result snippet showing the role title + company
   - ❌ Generic search results page
   - ❌ Homepage of the recruiter

3. **Verification step** — for every new role:
   - Run web_search for "[title] [company] Malta apply [year]"
   - Confirm the URL exists and shows the role
   - If no direct URL found → do NOT add the role
   - If only a generic category page found → use it as applyUrl only if it's the recruiter's best apply route, and note this in description

4. **When in doubt → exclude**
   A missing role is better than a broken link. The user can always add manually.

## LINKEDIN URL POLICY (added 28 May 2026)
LinkedIn job view URLs (linkedin.com/jobs/view/...) MUST NEVER be used as sourceUrl or applyUrl.
They expire within days/weeks and become "Unable to load the page" errors.

INSTEAD use:
- Company's own careers page (preferred)
- Recruiter's own website listing
- linkedin.com/company/COMPANY-NAME/jobs/ (stable, shows all current company jobs)
- Greenhouse / Workday / Ashby ATS URL if the job redirects there

RULE: If the only URL available is a linkedin.com/jobs/view/ link → use linkedin.com/company/NAME/jobs/ as a fallback, and note in description that role was sourced from LinkedIn.
