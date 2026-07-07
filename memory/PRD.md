# GauRakshak Bharat — Project Requirements Document (PRD)

## Original Problem Statement
Existing production-ready static website "GauRakshak Bharat". Navbar, footer, design system,
CSS variables, animations, responsive framework, theme toggle, mobile navigation and back-to-top
button are FINAL and must not be modified. Only the homepage content between the existing
navbar and footer needed to be built (13 sections).

## Architecture
- Static HTML / CSS / JS (no build step, no framework)
- Structure:
  - `/app/index.html` — homepage (single-page entry)
  - `/app/pages/*.html` — sub-pages (untouched)
  - `/app/css/variables.css` — design tokens (protected)
  - `/app/css/style.css` — core styles + navbar + footer (protected)
  - `/app/css/animations.css` — keyframes + utility classes (protected)
  - `/app/css/responsive.css` — breakpoints (protected)
  - `/app/css/home.css` — NEW, homepage-only styles
  - `/app/js/{animations,script,ui}.js` — protected
  - `/app/assets/` — logos, icons (no photos)

## User Personas
- **Citizens of Bharat** exploring how they can help protect cows and support gaushalas
- **Prospective volunteers** looking to join district-level programs
- **Farmers / academic researchers** looking for scripture, science and heritage content
- **Concerned citizens** reporting cows in distress via the helpline

## Core Requirements (Static)
- Do NOT modify: navbar, footer, folder structure, CSS variables, existing color palette,
  typography, animations, responsive system, JS utilities, theme toggle, existing assets.
- Only modify homepage content between navbar and footer.
- Reuse existing CSS variables and design system.
- Fully responsive: desktop / laptop / tablet / mobile — no horizontal overflow.
- Lightweight CSS-only animations (fade-up, hover-lift, counter, ripple, etc.).
- Accessibility preserved (semantic HTML, ARIA labels, focus states, reduced-motion support).
- Premium government-quality aesthetic (Apple × modern NGO × elegant × clean).

## What's Been Implemented (Jan 2026)

### Session 1 — Homepage Sections (all 13 delivered)
1. **Hero** — Powerful headline, description, primary "Become a Volunteer" + secondary "Report a Concern" CTAs, inline SVG cow-on-pasture illustration with sun, hills, lotus flowers, tilak & bell details. Floating trust badges + inline stat strip (28 states, 1000+ volunteers, 24/7 helpline).
2. **Trust Strip** — 4 government-style cards: Community Driven, Verified Information, Volunteer Network, Cow Protection.
3. **About GauRakshak Bharat** — Split layout with SVG mandala + Om visual, 4 pillar cards (Who / Why / Mission / Purpose), "Learn More" CTA.
4. **Why Gau Mata Matters** — 6-card grid: Culture, Agriculture, Environment, Rural Economy, Health, National Identity with unique color tints and hover glows.
5. **Impact Statistics** — Dark premium band with 4 animated counters (1000+, 250+, 50+, 10000+) using existing `data-counter` utility.
6. **Featured Initiatives** — 6 modern cards: Emergency Rescue, Gaushala Support, Community Awareness, Education & Research, Volunteer Programs, Natural Farming Revival.
7. **Knowledge Hub Preview** — 3 featured cards: Bhagavad Gita, A2 Milk Research, Indigenous Breeds + "Explore Knowledge Hub" CTA.
8. **Community Services** — 4 modern icon cards: Volunteer, Donation, Events, Report & Support with corner tint animation.
9. **Upcoming Events** — 3 event cards with date badge, time, location, register button, seat count + "View All Events".
10. **Gallery Preview** — Responsive asymmetric grid (tall + wide tiles) with SVG placeholders and hover overlays + "View Gallery" CTA.
11. **Volunteer CTA** — Large premium dark box with radar-style visual + primary/secondary buttons.
12. **FAQ** — Native `<details>/<summary>` accordion with rotating +/x toggle, 6 real questions + "Contact Our Team" fallback.
13. **Final CTA** — Powerful ending band with dual buttons (Volunteer + Report) and Sanskrit blessing.

### Additional
- All interactive elements have unique `data-testid` attributes (13 total).
- Uses existing `[data-animate]`, `data-counter`, `[data-stagger]`, `.ripple-container`, glassmorphism, and hover utilities.
- New file `/app/css/home.css` added and linked ONLY from `index.html`.
- Full dark/light theme support inherited from existing tokens.
- Verified: no horizontal overflow at 1440 / 1200 / 1024 / 390 viewports.
- All 13 homepage sections work correctly, FAQ accordion opens/closes, counter animates.

## Prioritized Backlog

### P1 (Suggested next)
- Replace SVG hero/gallery placeholders with real photography once assets are provided.
- Wire event "Register" buttons to a real events backend.
- Add a lightweight donation modal on service card "Donation" click.

### P2 (Nice to have)
- Add lazy-loading + `<picture>` responsive images when photos are added.
- Add scroll-progress indicator for long-form pages.
- Add a testimonial / voices-from-the-ground section between initiatives and knowledge hub.

## Files Changed This Session
- **Modified:** `/app/index.html` (linked home.css; replaced 3 placeholder sections in `<main>` with 13 real sections).
- **Created:** `/app/css/home.css` (all homepage-only styles).
- **Untouched:** navbar, footer, all other CSS files, all JS files, all `/app/pages/*.html`, all assets.
