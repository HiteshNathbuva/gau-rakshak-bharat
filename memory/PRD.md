# GauRakshak Bharat — PRD

## Problem statement
Polish the existing Navbar only (no redesign, no layout change, no logo replacement, no new libraries).

## Scope of this session
Navbar-only polish:
- Height ~72–80px (was 136px + 88px strip)
- Larger, properly aligned logo (56px tall, 48px scrolled)
- Improved spacing between logo / nav / CTA
- Premium typography (Manrope, weight 500-700)
- Smoother hover underline (220ms cubic-bezier)
- CTA button — solid brand-green pill with soft shadow + premium hover
- Dropdown — fade + slight slide (200/240ms)
- Mobile — smooth slide-down menu with active state, animated hamburger → X
- Full light/dark theme compatibility (theme-aware CSS variables `--nav-*`)
- Backdrop blur + shadow appear only when navbar becomes sticky (is-scrolled)
- Visible focus rings (`--nav-focus-ring`)
- Reduced-motion respected

## Files modified
- `/app/index.html` — added Manrope Google Font, swapped hamburger SVG for 3 animatable bars
- `/app/css/style.css` — rewrote HOMEPAGE NAVIGATION block
- `/app/css/responsive.css` — rewrote NAVIGATION RESPONSIVE OVERRIDES block
- `/app/assets/icons/logo.png` — added lowercase copy of `Logo.png` (case-sensitive FS)

Untouched (per constraints): Hero, Footer, page layout, JS (no changes needed — hamburger animation uses the existing `aria-expanded` attribute).

## Verification (screenshots taken)
- Desktop 1440 light ✅
- Desktop 1440 dark ✅
- Dropdown open (More) ✅
- Sticky/scrolled with backdrop blur + shadow ✅
- Tablet 900 light + dark ✅
- Mobile 390 closed (hamburger) + open (menu slides down, hamburger → X) ✅

## Next Action Items
- Extend polished navbar patterns to sub-pages (`/app/pages/*.html`) — they currently use a simpler placeholder structure.
- Build out homepage Hero + main sections (currently placeholder).

## Future / Backlog
- Wire real routes / content for Knowledge Hub, Community, Events, Gallery, Report.
- Add subtle scroll-progress indicator under sticky navbar (optional).
