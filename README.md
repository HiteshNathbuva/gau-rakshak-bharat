# GauRakshak Bharat

A modern, premium, responsive website foundation dedicated to cow protection, community building, volunteer networks, education, awareness, rescue support, gaushalas, and knowledge sharing.

> **Status:** Foundation build — structure and architecture only. Page content, imagery, and components will be added in future phases.

---

## Project Structure

```
GauRakshakBharat/
├── index.html              # Home page (entry point)
├── README.md               # Project documentation
│
├── assets/                 # Static media files
│   ├── images/             # Photos, banners, backgrounds
│   ├── videos/             # Video content
│   ├── icons/              # Favicons, SVG icons, UI icons
│   └── fonts/              # Custom web fonts
│
├── css/                    # Stylesheets
│   ├── variables.css       # Design tokens (colors, spacing, typography)
│   ├── style.css           # Core layout and component styles
│   ├── animations.css      # Keyframe animations and motion utilities
│   └── responsive.css      # Breakpoint-specific layout rules
│
├── js/                     # JavaScript modules
│   ├── animations.js       # Scroll animations, ripple, stagger effects
│   ├── script.js           # App bootstrap and core features
│   └── ui.js               # UI interactions (theme toggle, modals, forms)
│
├── pages/                  # Inner pages
│   ├── about.html
│   ├── knowledge.html
│   ├── community.html
│   ├── volunteer.html
│   ├── report.html
│   ├── gallery.html
│   ├── events.html
│   └── contact.html
│
└── components/             # Reusable HTML partials (future use)
```

---

## How Everything Connects

### HTML → CSS

Every HTML page loads stylesheets in this order:

1. **`variables.css`** — Defines CSS custom properties (design tokens). Must load first.
2. **`style.css`** — Uses those variables for layout, typography, buttons, cards, navbar, footer.
3. **`animations.css`** — Adds motion classes and keyframes on top of base styles.
4. **`responsive.css`** — Overrides and adjusts layout at different screen sizes. Loads last.

### HTML → JavaScript

Every HTML page loads scripts in this order (all with `defer`):

1. **`animations.js`** — Defines `window.GRBAnimations` for scroll-triggered motion.
2. **`script.js`** — Bootstraps the app, defines `window.GRBApp`, initializes loader, navigation, scroll, counters.
3. **`ui.js`** — Wires UI controls (theme toggle, mobile nav close, anchor scroll) using `GRBApp`.

### Page Flow

```
Browser loads HTML
    ↓
CSS paints layout (variables → style → animations → responsive)
    ↓
JS runs on DOMContentLoaded
    ↓
PageLoader hides spinner → Navigation activates → Scroll listeners attach
    ↓
GRBAnimations observes [data-animate] elements
    ↓
User interacts → ui.js handles theme toggle, mobile menu, etc.
```

---

## Folder Purpose

| Folder / File | Purpose |
|---|---|
| **`assets/images/`** | Store all raster images (JPG, PNG, WebP) — banners, photos, backgrounds. |
| **`assets/videos/`** | Store video files for awareness campaigns and gallery content. |
| **`assets/icons/`** | Favicons, app icons, and SVG/PNG UI icons. Place `favicon.ico` here. |
| **`assets/fonts/`** | Custom font files (WOFF2, WOFF) when added beyond system fonts. |
| **`css/`** | All styling — separated by concern for maintainability. |
| **`js/`** | All interactivity — modular files with clear responsibilities. |
| **`pages/`** | One HTML file per major section of the website. |
| **`components/`** | Reserved for reusable HTML snippets (navbar, footer, cards) when the project scales. |
| **`index.html`** | The home page and main entry point of the site. |

---

## File Reference

### CSS Files

| File | Used For |
|---|---|
| `variables.css` | Brand colors (primary, secondary, accent, neutral), dark theme tokens, spacing scale, border radius, shadows, transitions, container widths, typography scale, z-index layers. |
| `style.css` | CSS reset, body/typography, buttons, containers, cards, grid, utility classes, glassmorphism, section wrappers, navbar shell, footer shell, page loader, back-to-top button. |
| `animations.css` | Fade, scale, rotate, floating, pulse, glow, gradient, shimmer, ripple, hover lift, card hover, hero reveal, button hover animations. Respects `prefers-reduced-motion`. |
| `responsive.css` | Desktop (≥1440px), laptop (1024–1439px), tablet (768–1023px), mobile (480–767px), small mobile (≤479px). Prevents horizontal scrolling. |

### JavaScript Files

| File | Used For |
|---|---|
| `script.js` | App config, page loader, dark mode (placeholder), navigation (active links + mobile toggle), scroll behaviors, animation init, animated counters, back-to-top. Exposes `window.GRBApp`. |
| `animations.js` | IntersectionObserver scroll animations via `[data-animate]`, ripple click effects, stagger groups. Exposes `window.GRBAnimations`. |
| `ui.js` | Theme toggle button, mobile nav close on link click, smooth anchor scrolling, form/modal placeholders. Exposes `window.GRBUI`. |

### HTML Pages

| Page | Future Purpose |
|---|---|
| `index.html` | Home — mission overview, featured sections, calls to action. |
| `pages/about.html` | Organization story, mission, vision, team. |
| `pages/knowledge.html` | Educational articles, guides, awareness resources. |
| `pages/community.html` | Community forums, member stories, local chapters. |
| `pages/volunteer.html` | Volunteer registration and network information. |
| `pages/report.html` | Lawful incident reporting and rescue coordination. |
| `pages/gallery.html` | Photo and video gallery from events and gaushalas. |
| `pages/events.html` | Upcoming and past events calendar. |
| `pages/contact.html` | Contact form, location, social links. |

---

## Key CSS Variables (Quick Reference)

Change these in `variables.css` to retheme the entire site:

- **Primary:** `--color-primary-500` (brand green)
- **Secondary:** `--color-secondary-500` (warm saffron)
- **Accent:** `--color-accent-500` (teal highlight)
- **Dark mode:** Applied via `[data-theme="dark"]` on `<html>`
- **Spacing:** `--space-1` through `--space-32`
- **Container:** `--container-max` (default 1440px)

---

## Key JavaScript Hooks (Quick Reference)

| Attribute / ID | Behavior |
|---|---|
| `#page-loader` | Full-screen loading spinner — auto-hides on page load. |
| `#theme-toggle` | Toggles light/dark theme, persists to `localStorage`. |
| `#back-to-top` | Appears after scrolling 400px; smooth scroll to top. |
| `[data-animate="fade-up"]` | Scroll-triggered fade-up animation. |
| `[data-counter="100"]` | Animated number counter when element enters viewport. |
| `[data-form]` | Form placeholder — submit handler ready for future logic. |
| `[data-modal-open]` | Modal open trigger placeholder. |

---

## Getting Started

1. Open `index.html` in a browser (or use a local dev server).
2. Add your favicon to `assets/icons/favicon.ico`.
3. Build page content inside the placeholder `<section>` elements.
4. Add reusable HTML blocks to `components/` as the project grows.
5. Customize design tokens in `css/variables.css` to match final brand guidelines.

---

## Conventions

- **CSS classes** use BEM-inspired naming: `.block__element--modifier`
- **Utility classes** are prefixed with `u-`: `.u-flex-center`, `.u-text-center`
- **Animation classes** use `.animate-*` or `[data-animate]` attributes
- **JS globals** are namespaced: `GRBApp`, `GRBAnimations`, `GRBUI`
- **No build step required** — plain HTML, CSS, and JavaScript for maximum portability

---

## License

Foundation build for GauRakshak Bharat. All rights reserved.
