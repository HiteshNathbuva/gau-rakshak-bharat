# GauRakshak Bharat — Product Requirements Document

## Project Type
Static, multi-page website (HTML + CSS + vanilla JS). No backend, no build step.

## Original Problem Statement (this iteration)
Build a premium About page for GauRakshak Bharat and a reusable global footer.
Do NOT modify the homepage (`index.html`, `home.css`), navbar, folder structure,
CSS architecture, variables/animations/responsive stylesheets, or asset paths.
Reuse existing navbar exactly. All About-page styles must live only in
`css/about.css`. Deliver a Hindi-flavoured, dark green + saffron, dharma-driven
premium NGO experience across desktop, tablet, and mobile.

## Architecture / File Structure
```
/app
├── index.html                 # Homepage (UNTOUCHED)
├── css/
│   ├── variables.css          # Design tokens (UNTOUCHED)
│   ├── style.css              # Base + navbar (UNTOUCHED)
│   ├── animations.css         # Keyframes + [data-animate] utilities (UNTOUCHED)
│   ├── responsive.css         # Global breakpoints (UNTOUCHED)
│   ├── home.css               # Homepage styles (UNTOUCHED)
│   ├── about.css              # NEW — About-page styles (.abt-* prefix)
│   └── footer.css             # NEW — Reusable global footer (.site-footer)
├── js/                        # animations.js, script.js, ui.js (UNTOUCHED)
└── pages/
    └── about.html             # REBUILT — full About experience + footer
```

## User Personas
1. Citizens & Devotees — Discover mission, values, ways to participate.
2. Volunteers — Understand programs and pathway to join.
3. Partner Gaushalas / NGOs — Assess credibility, leadership, impact.
4. Media / Donors — Read Timeline, Impact statistics, leadership.

## What's Been Implemented (2026-01)

### About page (`/pages/about.html`)
- Hero banner (breadcrumb, gradient headline, mission, Sanskrit quote, dual CTAs, custom SVG cow illustration with floaters: "Since 2019", "1000+ Volunteers")
- "Our Story" split section with ॐ mandala visual + inline meta stats (28 states, 140+ gaushalas, 24/7 helpline)
- Mission + Vision — two premium coloured hero cards (green + saffron) with pillar chips
- Core Values — 6 tinted icon cards (Compassion, Integrity, Service, Dharma, Unity, Sustainability)
- "Why Cow Protection Matters" — infographic with center ॐ medallion + 6 radiating nodes
- Timeline — alternating cards (2019 → 2026 roadmap) with animated dots and gradient spine
- What We Do — 6 program cards (Education, Awareness, Community, Volunteer, Emergency, Research)
- Leadership — 4 NGO-style leader cards with custom SVG portraits
- Impact Statistics — dark green section with 4 animated counters (uses existing `data-counter` script)
- Call To Action — 3 gradient cards (Volunteer, Donate placeholder, Community)
- "गो सेवा, राष्ट्र सेवा" slogan band — full-width dark hero with animated ॐ, gradient title, ornaments, badge

### Global reusable footer (`/css/footer.css`)
- Brand column (SVG logo mark, mission, "Serving Bharat since 2019" tag)
- Quick Links + Resources columns
- Contact column (Email, 24/7 Helpline, Head Office — all placeholders)
- Full-width newsletter box (placeholder, no backend)
- Bottom strip: copyright, 6 social icons (Facebook, Twitter, Instagram, YouTube, LinkedIn, WhatsApp), slogan pill "गो सेवा • राष्ट्र सेवा"
- Fully responsive: 4-col → 2-col → 1-col

### Design & UX
- Reuses `variables.css` tokens end-to-end (colours, spacing, radii, shadows, transitions)
- Reuses `[data-animate]` fade-up/left/right/scale + `data-stagger` and counter script
- Accessibility: semantic landmarks, `aria-label`, `aria-hidden` on decorative SVGs, focus-visible outlines, `prefers-reduced-motion` guards
- SEO: page-specific `<title>`, `meta description`, canonical, OG + Twitter cards
- `data-testid` on primary interactive elements (about-hero-volunteer, about-hero-story, cta-volunteer, cta-donate, cta-community, newsletter-submit)

## What's NOT Touched (by design)
- `/app/index.html`, `/app/css/home.css`, `/app/css/style.css` (navbar)
- `/app/css/variables.css`, `/app/css/animations.css`, `/app/css/responsive.css`
- All `/app/js/*.js`
- All other pages under `/pages/`

## Backlog / P1
- Adopt the same reusable footer on remaining pages (community, contact, events, gallery, knowledge, report, volunteer) — drop-in: link `footer.css` + copy `.site-footer` markup
- Real backend for newsletter subscription
- Real donation flow (Razorpay / Stripe)
- Replace SVG leader portraits with real photos + individual bio pages
- Multilingual (Hindi + English) toggle
- Adopt-a-Cow flow with per-cow profile pages

## Deployment Notes
Pure static site. Any static host (Nginx, Vercel, Netlify, GitHub Pages) can
serve `/app` as-is. In preview environment, a Python `http.server` on port 3000
is used to serve static files.
