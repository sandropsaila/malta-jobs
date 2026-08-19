# Malta Jobs — Search Protocol v3
# Run this protocol every time the user says "Update searches" or "Refresh"
# ─────────────────────────────────────────────────────────────────────────────

## SCOPE (updated 17 Jul 2026)
The board covers Malta-based C-Suite, Head-of-Function, General Manager, Director,
and Financial Controller level roles. Financial Controller was added as an explicit
floor on 17 Jul 2026 — before this date it was deliberately excluded as below the
seniority bar (see Steps 0 commit history for prior exclusions of Konnekt's and
Ceek Talent's Financial Controller listings). This does not extend to Controller-
adjacent titles below Financial Controller itself (Assistant Financial Controller,
Credit Controller, Financial Accountant, etc.) — those remain excluded.

## TOOLS AVAILABLE FOR ALL SEARCH STEPS (added 19 Aug 2026)
In addition to web_search / web_fetch, the Nimble connector is available and MUST be
used alongside standard search for every "update searches" round — it is not a
replacement for web_search/web_fetch, it's a complementary layer that catches roles
plain search misses.

- **nimble_search** — use as an alternative/parallel query engine to web_search for
  Steps 1, 2, 2.5, 3, 4, 5, and 6. Nimble's results sometimes surface roles (especially
  on JS-heavy career pages and boutique-agency sites) that standard web_search snippets
  don't index cleanly. Run it as a second pass on any Step that comes back thin.
- **nimble_crawl** / **nimble_map** — use for Step 1 (recruiter portals) and Step 2
  (direct company career pages) instead of a single web_fetch when the page is a
  listing that paginates or lazy-loads (e.g. jobsinmalta.com, Boston Link's filtered
  careers page, AX Careers). A crawl catches roles sitting on page 2+ that a single
  fetch of the landing page misses.
- **nimble_extract** / **nimble_extract_templates_run** — use for Step 7 final source
  verification when a page's structure makes it hard to confirm via plain fetch text
  (e.g. confirming a specific closing date or "Job Has Expired" banner buried in page
  chrome). Extract gives a cleaner structured read than raw fetch on these.
- **nimble_agents_create / nimble_agents_run** — for a recurring or multi-page sourcing
  sweep (e.g. the full Step 6 topcompanies.xlsx pass, or Step 0.5 MSE sweep), an agent
  can be set up to check a batch of company career pages in one run rather than fetching
  each individually. Use when reviewing 10+ pages in a single Step.

**Rule: don't skip standard web_search/web_fetch in favour of Nimble** — the two should
run together, not one instead of the other, since either can surface a role the other
misses. Where results conflict (Nimble shows a role live, web_search/web_fetch suggests
it's gone, or vice versa), re-check with web_fetch on the specific role URL before
deciding — Step 0's "Reed Malta"-style listing-unreliable rules still take precedence
over any single tool's positive result.

## STEP 0 — LIVENESS RE-CHECK OF EXISTING LISTINGS (added 28 May 2026) — RUN FIRST
**This is the FIRST pass of EVERY "update search". Do it BEFORE searching for new roles.**
The board must never show a role that has been filled, expired, or removed. Stale roles
erode trust faster than a missing role, so re-validate what's already there first.

### Procedure — for every role currently in the JOBS array:
1. **Re-verify the role still exists at its source** (same standard as Step 7 Criterion 0):
   - For roles with a SPECIFIC URL (job ID/slug): web_fetch or web_search the URL/title.
     - If the page is 404 / 410 / "position filled" / "no longer available" / "applications
       closed" / redirects to a generic listing → the role is DEAD.
   - For roles with `linkType: "category"` (recruiter listing pages): run a site: search or
     fetch the listing and confirm the SPECIFIC role title still appears on it.
     - If the title no longer appears on the listing → treat as DEAD (it was filled/pulled).
   - For news-sourced roles (e.g. a CEO search announced in an article): search for a more
     recent article. If a permanent appointment has since been announced → the role is FILLED.
   - For `mailto:` apply roles: re-confirm the original posting (e.g. LinkedIn company jobs
     page) still lists the role. If gone → DEAD.

2. **Check the closing date** if one is known (some pages show it, e.g. AMSM, Farsons,
   government postings). If the closing date has passed → DEAD.

   **2a. CATEGORY-LINKED ROLES — explicit title search required (added 29 May 2026)**
   Category links (`linkType: "category"`) rot the fastest. The link still resolves, but
   the underlying role is silently gone. Real example: Reed Malta GM (j3002) was added
   28 May, and by 29 May the specific URL redirected to a "Job Has Expired" page even
   though the category listing was still up.
   For EVERY category-linked role, do BOTH:
   - Run a `site:` search or fetch the recruiter's listing page and **scan for the exact
     role title** (e.g. "Head of Financial Control" on reedglobal.com.mt). If the title
     is NOT visible on the live listing → role is DEAD, remove it.
   - If the role has a known specific redirect URL (e.g. reedglobal.mt/jobs/general-manager-...),
     also fetch that URL. If it returns "Job Has Expired" / "no longer available" / 404
     / redirects to a generic listing → DEAD even if the title still appears on the
     listing (the listing may lag behind by hours).
   Category-link rot is the single biggest source of stale entries; do not skip 2a.

   **2b. SOURCES WITH UNRELIABLE LISTING PAGES — DO NOT TRUST THE LISTING (added 29 May 2026)**
   Some recruiters publish a listing page that shows role summaries whose click-through
   detail pages have already expired. The listing is essentially a stale cache. Even when
   the title is visible on the listing, the actual role is dead.
   - **Reed Malta (reedglobal.com.mt → reedglobal.mt)** is confirmed in this category.
     Worked example (29 May 2026): "Head of Financial Control" appeared on the live
     reedglobal.com.mt listing at 11:00, was added to the board at 11:00, and by 12:23
     its click-through URL on reedglobal.mt returned "Job Has Expired." Same pattern
     killed Reed GM (j3002, 28→29 May) and very likely affected j3003 and j801.
   - For sources flagged as "listing-unreliable": only add a role if you can find the
     SPECIFIC reedglobal.mt (or equivalent per-role) URL AND that URL returns a real
     job page (not "Job Has Expired", not a redirect to the listing). The listing
     showing the role is NOT sufficient evidence.
   - Currently flagged listing-unreliable sources: Reed Malta.
   - If you cannot find a per-role URL for a Reed Malta listing, DO NOT ADD the role —
     it is more likely than not already dead.

3. **Action on each role:**
   - LIVE and unchanged → keep.
   - LIVE but details changed (title, location, link) → update the fields.
   - DEAD (filled / expired / removed / 404) → REMOVE it from the JOBS array.
   - UNCERTAIN (can't reach source, ambiguous) → keep but do NOT mark isNew; note in the
     commit message that it could not be re-verified this cycle. If it stays unverifiable
     across TWO consecutive update cycles → remove it.

4. **Refresh the `isNew` flag** on survivors: isNew:true only if posted within last 14 days
   of today's date; otherwise isNew:false.

5. **Report** in the response: how many roles were re-checked, how many removed (with reasons),
   how many updated, before listing any newly-added roles.

### RULE: Never skip Step 0. A board of 40 verified-live roles beats 55 with stale entries.
The order of every update is: STEP 0 (prune dead) → STEPS 1–6 (find new) → STEP 7 (verify new).

### RULE: Never skip Steps 1–6 sourcing layers, especially Step 3 (added 11 Jul 2026).
Under time pressure it's tempting to run only 2-3 of the sourcing layers (e.g. just
GRS + Konnekt + MSE sweep) and call the update done. This produces false negatives:
a role can be live and Malta-based but simply never appear in the recruiter-portal or
MSE layers because the company posted it directly to LinkedIn. Confirmed failure case:
Altenar's Global Sales Director (San Ġiljan, on-site) was missed on 11 Jul 2026 because
Step 3 was skipped entirely that round. Every "update searches" run must touch ALL of
Steps 1–6 at least once, even briefly, before considering the round complete. Step 2.5
(boutique agencies) is part of this same requirement — it exists because Step 3's
general title searches don't reliably surface low-volume boutique-agency postings.
Confirmed failure case: three roles (Firinne Solutions COO, Famalco Head of Finance,
Frazer Jones Head of HR Business Partnering) were only caught on 15 Jul 2026 because
the person forwarded a personal LinkedIn job alert — none of them had surfaced through
Steps 1–3 in the preceding rounds.

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
- Kaizen Gaming:  https://www.linkedin.com/company/kaizengaming/jobs/ (Malta HQ,
  San Ġiljan — regularly hires Country Managers for international markets from
  its Malta base; no scrapeable own-site jobs page found, LinkedIn is primary)
- FalconX:        https://job-boards.greenhouse.io/falconx (has a dedicated
  Malta-based Risk/Compliance/Treasury hiring stream on Greenhouse — direct,
  fetchable, reliable source)

## STEP 2.5 — Boutique / specialist executive search agencies (added 15 Jul 2026)
**Run every round, not just when a job alert prompts it.** These are boutique or
specialist agencies whose Malta client roles are typically LinkedIn-native —
no scrapeable jobs portal of their own, so they never surface via Step 1's
direct-fetch recruiter portals, and they're too low-volume to reliably appear
in Step 3's general title-based LinkedIn searches. They were only caught this
round because the person forwarded a personal LinkedIn job alert; the fix is
to search for them by name directly rather than rely on that channel.

For each agency below, run: site:linkedin.com/jobs "{agency name}" Malta

- Firinne Solutions (Malta-based executive search, decision-maker placements)
- Frazer Jones (global HR executive search, part of The SR Group — CHRO/HR
  Director/Head of HR placements)
- Carter Murray (marketing & sales search, sister brand to Frazer Jones under
  The SR Group)
- Keller West (technology executive search, sister brand under The SR Group)
- Taylor Root (legal, risk & compliance search, sister brand under The SR Group)
- Ceek Talent — has its own live, scrapeable jobs board (not just LinkedIn):
  https://jobs.ceektalent.com/jobs.aspx — 100+ live Malta roles, filterable by
  "Management & Executive Positions" category. Prefer this over LinkedIn
  searches for this agency specifically. Financial Controller and Group
  Financial Controller titles here ARE now in scope (as of 17 Jul 2026) — check
  Malta location and that the role reads as live, same as any other listing.
  Assistant Financial Controller and Credit Controller remain out of scope.
- Eaton SAKS International (retail/consumer executive search, seen placing
  Malta-relevant VP/Director roles)
- APS Resources International (holding-company CEO/Group Executive search)
- BettingJobs (specialist iGaming recruitment agency, seen placing Head of
  Payments and similar senior roles across Malta iGaming)

When an agency's own site has a specific job page (as Ceek Talent did for
Head of Tax Advisory), prefer that as sourceUrl. When only a LinkedIn listing
exists and no independent job page can be found, use the agency's LinkedIn
company jobs page (linkedin.com/company/{slug}/jobs/) as the category-link
fallback per the Step 3 procedure below — same standard applies: confirm Malta
location, seniority tier, and that the role reads as live before adding.

This list is a starting point, not exhaustive — add any boutique agency here
once it's been confirmed to place genuine Malta C-Suite/Head/GM/Director roles,
so it becomes part of the standard rotation rather than a one-off lookup.

## KNOWN NON-MALTA COMPANIES — do not re-investigate each round (added 16 Jul 2026)
These companies repeatedly surface in Malta-targeted LinkedIn searches (because
their job postings loosely geo-match to Malta-based viewers, or because they
have a Malta office alongside others) but have been confirmed on multiple
occasions NOT to be genuinely Malta-based roles. Skip listings from these
sources unless a specific role explicitly and unambiguously states an on-site
Malta location with no other office listed as an alternative:

- **B2Spin Limited** — Gibraltar-registered and headquartered; hires remotely/
  hybrid across Malta, Bulgaria, Georgia, Isle of Man, Poland, Romania, Serbia
  offices simultaneously for most roles. Confirmed non-Malta on three separate
  occasions (Head of Brand & Commercial Performance, Head of Retention,
  Head of Workforce & Player Operations Technology, Head of CRM Strategy —
  all actually Gibraltar-based despite Malta appearing in alert feeds).
- **Explora Journeys (MSC Group)** — General Manager and similar "GM"/officer
  titles at this cruise line are shipboard/onboard positions (e.g. "GM,
  EXPLORA I"), not shore-based Malta office roles, even though Explora's
  corporate/HR function may be based in Valletta. Treat any Explora Journeys
  "GM" listing as a maritime crew role unless explicitly stated otherwise.

If a new listing from either company appears, don't add it without re-confirming
location fine print in the actual job description — general Malta involvement
by a company doesn't mean a specific advertised opening is Malta-based.

## STEP 3 — Google-indexed LinkedIn searches (no login needed) — MANDATORY EVERY ROUND
**Do not skip this step. Skipping Step 3 was the direct cause of a missed Global Sales
Director role at Altenar (11 Jul 2026) — the recruiter-portal layer (GRS/Konnekt/Boston
Link) and MSE sweep do NOT surface company-direct LinkedIn-only postings. Both layers
are required every cycle, not just when time permits.**

Run these web searches to surface LinkedIn-posted roles. Titles list expanded beyond
CEO/COO/CFO/GM to catch Director- and Head-level functional titles that recruiter
portals often miss because the company posted directly to LinkedIn instead of via an
agency:

- site:linkedin.com/jobs "Malta" "Chief Executive Officer"
- site:linkedin.com/jobs "Malta" "Chief Operating Officer"
- site:linkedin.com/jobs "Malta" "Chief Financial Officer"
- site:linkedin.com/jobs "Malta" "Chief Commercial Officer" OR "Chief Marketing Officer" OR "Chief Product Officer" OR "Chief Technology Officer"
- site:linkedin.com/jobs "Malta" "General Manager"
- site:linkedin.com/jobs "Malta" "Head of" director senior
- site:linkedin.com/jobs "Malta" "Managing Director"
- site:linkedin.com/jobs "Malta" "Global Sales Director" OR "Sales Director" OR "Commercial Director"
- site:linkedin.com/jobs "Malta" "Regional Director" OR "Country Manager"
- site:linkedin.com/jobs "Malta" "VP" OR "Vice President"
- site:linkedin.com/jobs Malta fintech payments CEO vacancy 2026
- site:linkedin.com/jobs Malta iGaming "Head of" OR "Chief" OR "Director" vacancy 2026
- site:linkedin.com/jobs Malta FMCG "General Manager" OR "Head of" vacancy 2026

### Handling LinkedIn results (linkedin.com/jobs/view/... is BANNED, this is the workaround):
A `linkedin.com/jobs/view/...` URL is never usable as source or apply link (expires
within days — permanently banned per Step 7). When a search or a person-supplied
screenshot/alert (e.g. a LinkedIn Job Alert email) surfaces a real role at a company
whose own careers/ATS page does NOT independently list that role at verification time:
- ✅ ACCEPTABLE FALLBACK: use `linkedin.com/company/{company-slug}/jobs/` (the company's
  LinkedIn jobs tab) as both sourceUrl and applyUrl, tagged `linkType: "category"`.
  This is a live, non-expiring link to the company's current openings, even though it
  doesn't guarantee the specific title is still there when clicked — same tradeoff as
  any other category-linked role on the board (Reed exception aside).
- The person's own dated evidence (e.g. a same-day LinkedIn Job Alert screenshot showing
  title + company + location + an active Apply button) satisfies Criterion 0 on its own.
  Do not discard a real, dated sighting just because an independent second source
  couldn't be found — cross-verification is preferred but not always available for
  LinkedIn-exclusive postings, and requiring it would systematically bias the board
  against companies that recruit primarily via LinkedIn rather than agencies.
- Still apply Criterion 1-4 as normal: confirm Malta location, seniority tier, and that
  the role reads as live (not "closed", not evidently stale).

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


## STEP 6 — Top Malta Companies (topcompanies.xlsx — 250 companies)
Deep-search the careers pages of Malta's top 250 companies directly.
For each company, check their /careers page AND run a Google site: query.

### Priority Tier 1 — MSE-listed & large corporates (check careers page directly)
- Bank of Valletta p.l.c.: https://bov.com/careers
- Malta International Airport p.l.c.: https://maltairport.com/careers
- HSBC Bank Malta p.l.c.: https://hsbc.com.mt/careers
- GO p.l.c.: https://go.com.mt/careers
- International Hotel Investments p.l.c.: https://corinthia.com/careers
- Simonds Farsons Cisk p.l.c.: https://farsons.com/careers [already in Step 1/2]
- RS2 Software p.l.c.: https://rs2.com/careers
- APS Bank p.l.c.: https://apsbank.com.mt/careers
- Lombard Bank Malta p.l.c.: https://lombardmalta.com/careers
- BMIT Technologies p.l.c.: https://bmit.com.mt/careers
- PG p.l.c. (PAMA & PAVI): https://pggroup.com.mt/careers
- MaltaPost p.l.c.: https://maltapost.com/careers
- Mapfre Middlesea p.l.c.: https://middlesea.com/careers
- FIMBank p.l.c.: https://fimbank.com/careers
- MeDirect Bank (Malta) p.l.c.: https://medirect.com.mt/careers
- AX Real Estate p.l.c.: https://axgroup.mt/careers [already in Step 1/2]
- Malta Properties Company p.l.c.: https://maltaproperties.com.mt/careers
- M&Z p.l.c.: https://mz.com.mt/careers
- Main Street Complex p.l.c.: https://mainstreetcomplex.com/careers
- MedservRegis p.l.c.: https://medservregis.com/careers
- Harvest Technology p.l.c.: https://harvest.tech/careers
- LifeStar Holding p.l.c.: https://lifestarholding.com/careers
- LifeStar Insurance p.l.c.: https://lifestarinsurance.com/careers
- Tigné Mall p.l.c. (The Point): https://thepointmalta.com/careers
- MIDI p.l.c.: https://midimalta.com/careers
- Grand Harbour Marina p.l.c.: https://cnmarinas.com/careers
- Santumas Shareholdings p.l.c.: https://santumas.com/careers
- Loqus Holdings p.l.c.: https://loqusgroup.com/careers
- Malita Investments p.l.c.: https://malitainvestments.com/careers
- Plaza Centres p.l.c.: https://plazamalta.com/careers
- The Convenience Shop p.l.c.: https://theconvenienceshop.com/careers
- VBL p.l.c.: https://vbl.com.mt/careers
- Lidl Malta: https://lidl.com.mt/careers
- Welbee’s Supermarket: https://welbees.mt/careers
- Greens Supermarket: https://greens.com.mt/careers
- Arkadia Marketing Ltd: https://arkadia.com.mt/careers
- Alf. Mizzi & Sons (Marketing): https://alfmizziandsons.com/careers
- Hudson Group: https://hudson.com.mt/careers
- Malta Dairy Products: https://benna.com.mt/careers
- Foster Clark Products: https://fosterclark.com/careers
- Nectar: https://nectar.com.mt/careers
- Francis Busuttil & Sons: https://fbsmarketing.com/careers
- Quintano Foods Ltd: https://farsons.com/careers [already in Step 1/2]
- SPAR Malta: https://spar.com.mt/careers
- Smart Supermarket: https://smart.com.mt/careers
- Valhmor Borg Imp/Exp Ltd: https://valhmor.com/careers
- Magro Brothers: https://magro.com.mt/careers
- Consolidated Biscuit Co.: https://cbcmalta.com/careers
- Bay Street Shopping Complex: https://baystreet.com.mt/careers
- Embassy Shopping Complex: https://embassycomplex.com.mt/careers

### Priority Tier 2 — iGaming, Fintech & Tech companies
- The Shoreline Mall: https://theshorelinemall.com/careers
- Mercury Towers: https://mercury.com.mt/careers
- Centerparc: https://centerparc.com.mt/careers
- Daniels Shopping Complex: https://daniels.com.mt/careers
- Duke Shopping Mall: https://thedukegozo.com/careers
- Gallarija Shopping Centre: https://gallarija.com/careers
- Salvo Grima Group: https://salvogrima.com/careers
- M. Demajo Group: https://demajo.com/careers
- V.J. Salomone Group: https://vjsalomone.com/careers
- Gasan Group: https://gasan.com/careers [already in Step 1/2]
- Mizzi Organisation: https://mizzi.com.mt/careers
- Hili Ventures: https://hiliventures.com/careers [already in Step 1/2]
- Fruitland Company: https://fruitland.company/careers
- Bigbon Group: https://bigbon.com.mt/careers
- DIZZ Group: https://dizz.com.mt/careers
- Retail International Group: https://retailinternational.com.mt/careers
- Forestals Group: https://forestals.com/careers
- Crosscraft: https://crosscraft.com.mt/careers
- AtoZ Electronics: https://atoz.com.mt/careers
- Scan (PC Options Ltd): https://scanmalta.com/careers
- J.B. Stores Ltd: https://jbstores.com/careers
- Toly Products: https://toly.com/careers
- Golden Harvest Manufacturing: https://goldenharvest.com.mt/careers
- Maypole Group: https://maypole.com.mt/careers
- Miracle Foods: https://miraclefoods.net/careers
- Quality Foods (Marketing) Ltd: https://qualityfoods.com.mt/careers
- Alfred Gera & Sons Ltd: https://alfredgera.com/careers
- Charles Darmanin & Co Ltd: https://darmanin.com.mt/careers
- Ignazio Anastasi Ltd: https://ianastasi.com/careers
- V&F Portelli & Sons: https://vfportelli.com/careers
- BT Commercial Ltd: https://btmalta.com/careers
- Miller Distributors Ltd: https://millermalta.com/careers
- P.J. Sutters: https://pjsutters.com/careers
- MacBake: https://macbake.com/careers
- Chain Supermarket: https://chainsupermarket.com/careers
- Eurospin Malta: https://eurospin.it/careers
- OLA Energy: https://olaenergy.com/careers
- Enemed Co Ltd: https://enemed.com.mt/careers
- J. Calleja Import & Export: https://jcalleja.com/careers
- Joseph Borg Ltd: https://josephborg.com/careers
- Joseph Hili & Sons: https://josephhili.com/careers [already in Step 1/2]
- Intercol Trading: https://intercol.com.mt/careers
- MINT Health Ltd: https://mint.com.mt/careers
- Guido Vella Cash & Carry: https://guidovella.com.mt/careers
- Neriku Catering: https://neriku.com/careers
- The Food Factory: https://thefoodfactory.com.mt/careers
- James Caterers: https://jamescaterers.com/careers
- Rimus Riley Ltd: https://rimus.com.mt/careers
- Federated Mills p.l.c.: https://federatedmills.com.mt/careers
- G. S. C. Trading Ltd: https://gsctrading.com.mt/careers
- D.B. Imports: https://dbimports.com.mt/careers
- Paul Tonna Son Of Santu: https://paultonna.com/careers
- Alcom Enterprises: https://alcom.com.mt/careers
- The Hardware Store: https://hardware.com.mt/careers
- Tomorrow's Home Ltd: https://tomorrowshome.com.mt/careers
- Swaey Bros Ltd: https://swaeybros.com/careers
- Banju Boutique: https://banju.com.mt/careers
- LTC LED Lighting: https://ltc.com.mt/careers
- OK Home: https://okhome.com.mt/careers
- JYSK Malta: https://jysk.com.mt/careers
- Artex Interiors: https://artex.com.mt/careers
- Sterling Jewellers: https://sterlingjewellers.com.mt/careers
- Classic Group: https://classicgroup.com.mt/careers
- 202 Jewellery: https://202jewellery.com/careers
- Vascas Enterprises: https://vascas.com.mt/careers
- Gagliardi: https://gagliardi.eu/careers
- Trilogy Ltd: https://trilogy.com.mt/careers
- Charles Grech & Co Ltd: https://charlesgrech.com/careers
- P. Cutajar & Co Ltd: https://pcutajar.com.mt/careers
- Attard & Co: https://attardco.com/careers

### Priority Tier 3 — Retail, FMCG, Services & Other
- Bortex Group: https://bortexgroup.com/careers
- Tigné Point Marketing: https://tignepoint.com/careers
- United Department Stores: https://united.com.mt/careers
- Marks & Spencer Malta: https://marksandspencer.com.mt/careers
- Zaman Services: https://zamanservices.com/careers
- C&H Bartoli Ltd: https://chbartoli.com/careers
- W. J. Parnis England: https://parnisengland.com/careers
- Gollcher Co Ltd: https://gollcher.com/careers
- S. Rausi p.l.c.: https://rausi.com.mt/careers
- Fexserv Financial: https://fexserv.com/careers
- Eurobridge Logistics: https://eurobridge.com.mt/careers
- Fahrenheit Freight: https://fahrenheit.com.mt/careers
- Chetcuti Cauchi Advocates: https://ccmalta.com/careers
- JV Pharma: https://jvpharma.eu/careers
- Medik Malta: https://medikmalta.com/careers
- M&W Marketing: https://mwmarketing.com.mt/careers
- Siegfried Malta: https://siegfried.ch/careers
- Actavis International: https://teva.com/careers
- Cherubino Ltd: https://cherubino.com.mt/careers
- Propharma Ltd: https://propharma.com.mt/careers
- Lykos Pharma: https://lykos.com.mt/careers
- Synapse: https://synapse.com.mt/careers
- Evolve Ltd: https://evolve.mt/careers
- Pharma.MT: https://pharmamt.com/careers
- Technoline Ltd: https://technoline-mt.com/careers
- Mika Ltd: https://mika.com.mt/careers
- Festa Ltd: https://festa.com.mt/careers
- Interjeans Ltd: https://interjeans.com.mt/careers
- Anteprima Brands: https://anteprima.com.mt/careers
- La Nouvelle (Malta): https://lanouvelle.com.mt/careers
- Darmanin Footwear: https://darmanin.com.mt/careers
- Zammit La Rosa Footwear: https://zammitlarosa.com/careers
- Model Shop: https://modelshop.com.mt/careers
- Victoria City Centre: https://victoriacitycentre.com/careers
- Bonnett's Bakery: https://bonnetts.com.mt/careers
- Juuls: https://juuls.com.mt/careers
- Beer Head: https://beerhead.com.mt/careers
- Farsons Direct: https://farsonsdirect.com/careers [already in Step 1/2]
- Vini e Capricci: https://viniecapricci.com/careers
- Master Cellar: https://mastercellar.com.mt/careers
- Hansons: https://hansons.com.mt/careers
- Petworld: https://petworld.com.mt/careers
- Borg Cardona & Co: https://borgcardona.com.mt/careers
- Wembley Store: https://wembleystore.com/careers
- C. Camilleri & Sons: https://tal-camilleri.com/careers
- Busy Bee: https://busybee.com.mt/careers
- Elia Caterers: https://eliacaterers.com/careers
- Sphinx Pastizzeria: https://sphinx.com.mt/careers
- McMifsud: https://mcmifsud.com/careers
- Weldon: https://weldon.com.mt/careers
- Soap & Glory Malta: https://soapandglory.com.mt/careers
- Lucy World: https://lucyworld.com.mt/careers
- Niazo: https://niazzo.com/careers
- Souvenirs That Don't Suck: https://souvenirsthatdontsuck.mt/careers
- Heartspace: https://heartspace.mt/careers
- Serenata Flowers: https://serenataflowers.com.mt/careers
- Gift Hampers Malta: https://gifthampers.com.mt/careers
- ZeroBubble: https://zerobubble.mt/careers
- M.A. & A. Services: https://maaservices.com.mt/careers
- A.G.S. Company: https://ags.com.mt/careers
- 2I Ltd: https://2i.com.mt/careers
- Aeco Telecom: https://aeco.com.mt/careers
- Tamoil: https://tamoil.com.mt/careers
- Falzon Group: https://falzongroup.com/careers
- Blye: https://blye.com.mt/careers
- Kayaworld: https://kayaworld.mt/careers
- MI Select: https://miselect.mt/careers
- Take Off: https://takeoff.com.mt/careers
- Talocan Ltd: https://talocan.mt/careers
- Vnoska: https://vnoska.mt/careers
- Ardevur Commodities: https://ardevur.com/careers
- Creative Refurbishing: https://cr-malta.com/careers
- FarMandara: https://farmandara.com/careers
- SkylineCity: https://skylinecity.mt/careers
- essDOCS: https://essdocs.com/careers
- Orim Holding: https://orim.com.mt/careers
- Erdal Trading: https://erdal.com.mt/careers
- G.P. Borg Ltd: https://gpborg.com.mt/careers
- Thomas Smith Shipping: https://tcsmith.com/careers
- Malta Public Transport: https://publictransport.com.mt/careers
- Melita Limited: https://melita.com/careers
- Enemalta p.l.c.: https://enemalta.com.mt/careers
- PAMA Shopping Village: https://pama.com.mt/careers
- PAVI Supermarket: https://pavi.com.mt/careers
- Class Optical: https://classoptical.com/careers
- Methode Electronics: https://methode.com/careers
- Playmobil Malta: https://playmobil.com.mt/careers
- AirX Charter: https://airx.aero/careers
- KM Malta Airlines: https://kmmaltairlines.com/careers
- Medavia: https://medavia.com/careers
- Atlas Insurance: https://atlas.com.mt/careers
- Elmo Insurance: https://elmoinsurance.com/careers
- GasanMamo Insurance: https://gasanmamo.com/careers [already in Step 1/2]
- MMH Malta Ltd: https://mmh.com.mt/careers
- Sparkasse Bank Malta: https://sparkasse-bank-malta.com/careers
- FCM Bank Ltd: https://fcmbank.com.mt/careers
- Multitude Bank p.l.c.: https://multitudebank.com/careers
- Merkanti Bank Ltd: https://merkantibank.com/careers
- IIG Bank (Malta) Ltd: https://iigbank-malta.com/careers
- BNF Bank p.l.c.: https://bnf.bank/careers
- Trafigura Holdings Ltd: https://trafigura.com/careers
- Aptiv Malta Holdings: https://aptiv.com/careers
- Binance: https://binance.com/careers
- Lufthansa Technik Malta: https://lufthansa-technik.com/careers
- VistaJet Limited: https://vistajet.com/careers
- STMicroelectronics (Malta): https://st.com/careers
- Wizz Air Malta: https://wizzair.com/careers
- Tamoil Africa Holdings: https://tamoil.com/careers
- Baxter Healthcare Holding: https://baxter.com/careers
- Kindred Group: https://kindredgroup.com/careers [already in Step 1/2]
- Betsson Group: https://betssongroup.com/careers [already in Step 1/2]
- Evolution Malta: https://evolution.com/careers
- Tipico Group: https://tipico-group.com/careers
- LeoVegas Gaming p.l.c.: https://leovegasgroup.com/careers [already in Step 1/2]
- King.com Ltd: https://king.com/careers
- Kaizen Gaming: https://kaizengaming.com/careers
- Casumo: https://casumo.com/careers
- BML Group Ltd: https://betsson.com/careers
- Rootz Ltd: https://rootz.com/careers
- TSG Interactive: https://pokerstars.com/careers
- Videoslots: https://videoslots.com/careers
- Playtech: https://playtech.com/careers
- NetEnt: https://netent.com/careers
- Hotjar: https://hotjar.com/careers
- Chiliz: https://chiliz.com/careers [already in Step 1/2]
- Foundever: https://foundever.com/careers
- Premier Capital p.l.c.: https://premiercapital.com.mt/careers [already in Step 1/2]
- Attard Bros Group: https://attardbros.com/careers
- Vassallo Group: https://vassallogroupmalta.com/careers
- Bonnici Bros Ltd: https://bonnicibros.com/careers

### Google site: queries for top company domains (run these in STEP 3)
- site:bov.com "careers" OR "vacancy" OR "jobs" senior manager director chief
- site:maltairport.com "careers" OR "vacancy" OR "jobs" senior manager director chief
- site:hsbc.com.mt "careers" OR "vacancy" OR "jobs" senior manager director chief
- site:go.com.mt "careers" OR "vacancy" OR "jobs" senior manager director chief
- site:corinthia.com "careers" OR "vacancy" OR "jobs" senior manager director chief
- site:farsons.com "careers" OR "vacancy" OR "jobs" senior manager director chief
- site:rs2.com "careers" OR "vacancy" OR "jobs" senior manager director chief
- site:apsbank.com.mt "careers" OR "vacancy" OR "jobs" senior manager director chief
- site:lombardmalta.com "careers" OR "vacancy" OR "jobs" senior manager director chief
- site:bmit.com.mt "careers" OR "vacancy" OR "jobs" senior manager director chief
- site:pggroup.com.mt "careers" OR "vacancy" OR "jobs" senior manager director chief
- site:maltapost.com "careers" OR "vacancy" OR "jobs" senior manager director chief
- site:middlesea.com "careers" OR "vacancy" OR "jobs" senior manager director chief
- site:fimbank.com "careers" OR "vacancy" OR "jobs" senior manager director chief
- site:medirect.com.mt "careers" OR "vacancy" OR "jobs" senior manager director chief
- site:axgroup.mt "careers" OR "vacancy" OR "jobs" senior manager director chief
- site:maltaproperties.com.mt "careers" OR "vacancy" OR "jobs" senior manager director chief
- site:mz.com.mt "careers" OR "vacancy" OR "jobs" senior manager director chief
- site:mainstreetcomplex.com "careers" OR "vacancy" OR "jobs" senior manager director chief
- site:medservregis.com "careers" OR "vacancy" OR "jobs" senior manager director chief
- site:harvest.tech "careers" OR "vacancy" OR "jobs" senior manager director chief
- site:lifestarholding.com "careers" OR "vacancy" OR "jobs" senior manager director chief
- site:lifestarinsurance.com "careers" OR "vacancy" OR "jobs" senior manager director chief
- site:thepointmalta.com "careers" OR "vacancy" OR "jobs" senior manager director chief
- site:midimalta.com "careers" OR "vacancy" OR "jobs" senior manager director chief
- site:cnmarinas.com "careers" OR "vacancy" OR "jobs" senior manager director chief
- site:santumas.com "careers" OR "vacancy" OR "jobs" senior manager director chief
- site:loqusgroup.com "careers" OR "vacancy" OR "jobs" senior manager director chief
- site:malitainvestments.com "careers" OR "vacancy" OR "jobs" senior manager director chief
- site:plazamalta.com "careers" OR "vacancy" OR "jobs" senior manager director chief

## STEP 7 — FINAL SOURCE VERIFICATION (added 28 May 2026) — MANDATORY
**This is the LAST gate before any role is added OR kept. No exceptions.**

Many forwarded/sourced links are WRONG: they point to a recruiter's generic landing
page, a UK/other-country division, or a category page that does not host the specific
Malta role claimed. A real example: Clear Edge (ceselection.com) — its CONSUMER division
(/vacancies-consumer/) lists UK roles in GBP (e.g. "National Account Executive – Wine,
£60k, UK Wide"), while only its iGaming division (/vacancies-igaming/) covers Malta.
A link to the generic /vacancies/ page is therefore NOT verification of a Malta role.

### CRITERION 0 — THE ROLE MUST ACTUALLY EXIST (most important; check FIRST)
A resolving link is NOT proof the role exists. The specific role TITLE must actually
appear on the live source page (careers page, recruiter listing, or news article).
- ❌ NEVER invent a "plausible" senior role for a company just because the company is
     big/important (e.g. "Company X is FMCG leader, so they probably need a GM").
- ❌ NEVER add a role whose description hedges: "typically filled via", "standing open
     application", "roles like this usually", "approach directly", "may arise". These
     phrases mean NO confirmed vacancy exists → do NOT add.
- ❌ A company careers page that lists ONLY junior roles (shelf stackers, drivers,
     cashiers, warehouse) is NOT evidence of a senior vacancy. Real examples caught:
     · AMSM /careers/ → only Shelf Stackers, Warehouse roles. NO General Manager existed.
     · Farsons /careers/vacancies → only Operations/Logistics/driver roles. NO
       "Farsonsdirect Manager" existed.
- ✅ The exact role title must be visible on the live page, OR named in a dated news
     article / company announcement, OR returned by a site: search showing that title.
- RULE: If you cannot point to the specific role title on a live source → DO NOT ADD IT,
  and if it is already on the board → REMOVE it. A "standing open application" page is
  not a vacancy.

### For EVERY role (new or already on the board), the applyUrl/sourceUrl MUST pass ALL 4:

1. **PAGE RESOLVES TO THE SPECIFIC ROLE**
   - The URL must open a page that shows THIS role's title + description.
   - ❌ Generic landing pages: /vacancies/, /careers/, /jobs, /join-us
   - ❌ Discipline/category pages with no specific job: konnekt.com/jobs/accounting-jobs
   - ❌ Salary-band filter pages: reedglobal.com.mt/jobs/60000-euros-100000-euros
   - ❌ SEARCH-RESULTS / QUERY pages — these are NOT specific roles even though they
       look targeted. Any URL containing a search query is generic:
         · ?s=director+operations         (e.g. linktalent.careers/?s=...)
         · ?search=...  ?keywords=...  ?q=...
         · /search-jobs/?...  /latest-careers/?s=...  /job-search
         · /general-manager-jobs.html and other "...-jobs.html" listing pages
   - ❌ Bare ATS / careers homepages: company.breezy.hr/, jobs.company.com/ (root only)
   - ✅ EXCEPTION — mailto: links are a VALID direct apply method (apply by email);
       these are acceptable as applyUrl and are NOT treated as generic.
   - ✅ A page with a job ID or slug: .../job/head-of-transformation-10943.aspx,
        konnekt.com/jobs/.../title/85541, ceselection.com/vacancies-igaming/head-retention-igaming/

2. **LOCATION IS GENUINELY MALTA**
   - The specific page must state Malta (or explicit relocation-to-Malta).
   - ❌ UK/other-country roles on a recruiter's site that also covers Malta.
   - ❌ Salary quoted in £/$ with a UK/EU-mainland location = NOT Malta.
   - Watch multi-country recruiters (Clear Edge, GRS, Broadwing list Cyprus/UK/Limassol
     roles side-by-side with Malta ones — read the location line, not the agency).

3. **SENIORITY MATCHES** — C-Suite / Head of / GM / Director / Financial Controller
   minimum, on that page. (Financial Controller added 17 Jul 2026 as an explicit floor —
   see note below; do not extend this same allowance to other Controller-tier titles
   like Assistant Financial Controller, Credit Controller, or Financial Controller's
   direct reports without a similar explicit decision.)

4. **ROLE IS LIVE** — not "removed", "expired", "applications closed", or filled.

### Verification procedure:
- Run web_search for the exact "[title] [company/recruiter] Malta [year]".
- Prefer to web_fetch the specific job page and READ the location + currency + title.
- If only a generic landing/category page can be found → the role FAILS. Either find the
  specific URL, or DO NOT add it. If it is already on the board with a generic URL and no
  specific page can be confirmed, REMOVE it or downgrade to a verified specific link.
- If a recruiter operates in multiple countries, you MUST confirm the Malta location on
  the role page itself — the agency being "in Malta" is not enough.

### RULE: A generic recruiter landing page is NEVER acceptable as proof a Malta role exists.
When in doubt → exclude. A missing role is better than a wrong/misattributed one.


## BUTTON LABELLING POLICY (added 29 May 2026)
The primary action button on every job card NEVER says "Apply Now".
- Default label: **"View Listing"** (the user verifies the role on the source before applying).
- Only exception: applyUrl starting with `mailto:` → label **"Apply by Email"**.
This is because no link on the board is a guaranteed-live direct application; every link
points to a recruiter/company page that the user must check. "Apply Now" implies a
verified live application and over-promises. Always use "View Listing".


## DOMAIN TAGGING (Finance / Legal) — added 29 May 2026
The board has two filter dimensions:
1. Seniority (job.category): "c-suite" | "head" | "general-manager" — always required, one value.
2. Domain (job.domain): optional array, ["finance"] and/or ["legal"], used by the Finance &
   Legal filters. A role keeps its seniority badge AND surfaces under its domain filter.
When adding a role, set domain when it fits:
- FINANCE: CFO, Head/Director of Finance, Financial Controller, Head of FP&A, Head of Tax,
  Audit Director / Head of Audit / Chief Audit Officer, Head of Risk, Treasury.
- LEGAL: General Counsel, Head of Legal, Head of Compliance / MLRO / Compliance Officer,
  Head of Regulatory / Regulatory Affairs, Company Secretary, Head of Governance.
- A role can be BOTH (e.g. "Head of Legal & Compliance" → ["legal"]; a regulated-finance
  compliance role could be ["legal","finance"] if it spans both — use judgement).
- Most roles have NO domain (marketing, ops, HR, GM, commercial, engineering) — leave it unset.

## DEDUPLICATION RULES
- Never add a role already in JOBS array (check by title + company)
- If a role appears across multiple sources, use the most direct apply link
- Mark isNew: true if posted within last 14 days
- Mark isNew: false if older

## QUALITY GATES — only add if ALL of these are true:
1. Role is real and currently open (not filled, not expired)
2. Location is Malta or explicitly requires relocation to Malta
3. Seniority is C-Suite / Head of Function / General Manager / Director / Financial
   Controller minimum
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

## "NEW" BADGE POLICY (added 6 Jul 2026)
NEW is now date-driven, not manual. In jobs.js:
- `LAST_UPDATE_DATE` = the date of the most recent update that added roles
- `isJobNew(job)` returns true only if job.posted >= LAST_UPDATE_DATE

WORKFLOW on EVERY "update searches" run (whether or not it adds roles):
1. Set `LAST_UPDATE_DATE` to today's date — always.
2. If roles are added this round, set each new job's `posted` to today's date too.
3. Result:
   - A round that ADDS roles → only those roles show NEW.
   - A round that adds NOTHING → LAST_UPDATE_DATE moves forward, so no job has
     posted >= today, and ALL NEW badges clear automatically.
This makes NEW strictly mean "added in the most recent update search."
Never hand-set isNew — the field has been removed.

## STEP 0 — CAREER-PAGE REACHABILITY (run first, every update)
Before the 5 search layers, consult CAREER_PAGE_REACHABILITY.md and sweep sources
by their tier:
1. ✅ Directly reachable → fetch specific job pages, verify live (not 410/closed).
2. 🟡 Indexed-only → company-name/site: queries, fetch whatever specific URL returns.
3. 🔴 JS-walled/bot-blocked (Jobhound, Careerjet, LinkedIn direct) → note as walled,
   rely on user screenshots.
If any 🟡/🔴 source is discovered to expose crawlable job URLs (as Hili Ventures did
via jobs.hiliventures.com), promote it to ✅ and fix its URL in DIRECT_CAREER_PAGES.
Report the reachability sweep result at the top of each update summary.

## STEP 0.5 — MSE-LISTED COMPANY SWEEP (run after Step 0, every update)
Consult MSE_COMPANIES.md (66 verified Malta-listed companies). Individually browse
each company's careers page, ROTATING ~15-20 per update (round-robin), prioritising
banks, IHI, GO, Farsons, AX, RS2, PG, Premier Capital, Harvest, BMIT, Mapfre, MIDI,
Tumas. For each: query
  "<Company>" Malta "Head of" OR "Chief" OR "Director" OR "General Manager" OR "CEO" OR "CFO" vacancy 2026
Fetch any specific role URL returned; verify live + seniority gate before adding.
Distinguish APPOINTMENTS (filled — exclude) from open VACANCIES (add if verified).
Report per-company sweep results at top of update summary.
