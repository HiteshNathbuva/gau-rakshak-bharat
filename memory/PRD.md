# GauRakshak Bharat — PRD

## Original Problem Statement
Build a premium **Knowledge Hub** page for the GauRakshak Bharat NGO website.
Homepage, About, Navbar, Footer, and all shared CSS/JS are already complete and must **not** be modified. Deliverables: `pages/knowledge.html` + `css/knowledge.css` only.

## Tech Stack
- Static HTML / CSS / vanilla JS
- Existing design tokens in `css/variables.css`
- Existing utilities in `css/style.css`, `animations.css`, `responsive.css`
- Existing behaviours in `js/animations.js` (scroll animate, stagger), `js/script.js` (counter), `js/ui.js` (theme toggle, smooth anchors)

## User Personas
- Citizens curious about cow protection & Vedic wisdom
- Farmers seeking natural-farming, panchagavya & scheme info
- Scholars & researchers looking for scriptural / peer-reviewed references
- Volunteers wanting learning-material to share

## What's Been Implemented (Jan 2026)
Knowledge Hub page — 8 sections, fully responsive, dark-mode ready:
1. **Hero** — breadcrumb, gradient headline, search bar (data-testid: knowledge-search-input / -submit), 6 popular-topic chips, animated SVG book illustration + floating badges.
2. **Featured Knowledge** — 6 premium cards (Cow Protection, Indigenous Breeds, Scriptures, Organic Farming, Panchagavya, Sustainable Agriculture) with unique color tints & Read-More links.
3. **Knowledge Categories** — 9 cards (Gau Shastra, Ayurveda, Agriculture, Environment, Culture, History, Research, Government Schemes, Veterinary Care).
4. **Latest Articles** — 6 article cards, each with SVG cover art, category pill, reading-time, meaningful NGO summary and Continue-Reading link.
5. **Learning Resources** — 5 resource cards (PDF Guides, Videos, Research Papers, Government Documents, Infographics) with counts.
6. **FAQ** — 6 educational Q&A using native `<details>/<summary>` accordion (zero JS added).
7. **Educational Statistics** — 4 animated counters (Articles / Resources / Research Topics / Awareness Programs) using existing `data-counter` behaviour.
8. **CTA** — dark saffron-green gradient band with Learn More / Join Community / Become Volunteer buttons + mini-stats strip.

Reused unchanged: Navbar (with Knowledge Hub set as active), site footer, page-loader, back-to-top button, all three JS files, all shared CSS.

## Design Notes
- All new classes namespaced with `.kh-` prefix — zero collision risk with `.abt-` (About) or other pages.
- Colours drawn strictly from `variables.css` tokens (primary green, saffron, accent teal, neutrals).
- Inline SVG icons matching the existing navbar / about stroke style (stroke-width 2, round caps).
- Font: Manrope (same as About page) for continuity.
- All 8 sections responsive across 1920 / 1200 / 1023 / 767 px breakpoints.
- Accessibility: proper landmarks, ARIA labels, `prefers-reduced-motion` respected, keyboard-focusable chips/accordion.

## Prioritised Backlog
- **P1** — Wire the search bar to real content search (currently visual only).
- **P1** — Populate real article routes (currently `#` placeholders → `#kh-articles`).
- **P2** — Newsletter / bookmark integration for logged-in users.
- **P2** — Filter chips that actually filter the articles grid client-side.
- **P3** — Publish full-article detail pages (`pages/articles/*.html`).

## Next Action Items
1. Wire Knowledge Hub search + category filtering (client-side JSON index is enough for MVP).
2. Author 5–10 full article detail pages using the same design language.
3. Add a shareable / downloadable badge to Learning Resources for click-tracking.
