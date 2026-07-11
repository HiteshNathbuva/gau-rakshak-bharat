# GauRakshak Bharat — PRD

## Problem Statement
Add a premium production-quality Volunteer page to the existing GauRakshak Bharat NGO website — matching the Homepage/About design language exactly. Reuse existing Navbar, Footer, animations, variables, and global CSS. Do NOT modify any existing pages or shared files. Output only `pages/volunteer.html` and `css/volunteer.css`.

## Architecture
- Static multi-page HTML/CSS/JS site (no backend/framework)
- Shared: variables.css, style.css, animations.css, responsive.css, footer.css, knowledge.css
- Per-page scoped styles (`abt-`, `kh-`, `vlt-` prefixes)
- Global Navbar + Footer duplicated per page (no build system)

## What's Been Implemented (Jan 2026)
### Volunteer page — `pages/volunteer.html` + `css/volunteer.css`
- **Hero**: Inspiring headline, lede, inline SVG (volunteer + cow scene), 3-stat inline bar, dual CTA, floating badges
- **Why Volunteer**: 4 premium icon cards (Protect Cows / Serve Society / Preserve Culture / Environmental Impact) with color-themed hover glow
- **Volunteer Opportunities**: 6 role cards (Field, Event, Digital, Content Creator, Awareness, Student Ambassador) with inline SVG icons and tags
- **Volunteer Journey**: 5-step horizontal timeline with connecting gradient line, colored dots, per-step icon (Register → Application Review → Training → Verification → Start Volunteering). Vertical layout on tablet/mobile
- **Benefits**: 5 cards (Certificate, Community, Skill Development, Social Impact, Recognition) with circular icons + gradient-border hover
- **FAQ**: 8 questions reusing existing `.kh-faq` accordion component (Knowledge Hub style)
- **Final CTA**: Premium dark saffron+green section with ornaments, gradient-animated headline, dual CTA, trust badges
- **Navbar + Footer**: Reused byte-for-byte from About page — no modifications
- Full responsive (desktop / tablet 1023px / mobile 767px). No horizontal scroll on 390px viewport
- Dark mode supported throughout via existing tokens
- Every interactive element has `data-testid`

## Backlog / Future
- P1: Wire "Become Volunteer" CTA to a real registration form / backend
- P2: Add volunteer testimonials carousel
- P2: Live volunteer count from CMS

## Enhancement idea
Add a lightweight signup micro-form directly in the Final CTA (name + email + district) — pre-selection of role increases conversion 2-3× compared to sending users to a generic contact page.
