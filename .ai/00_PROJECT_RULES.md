# GAURAKSHAK BHARAT

# PROJECT RULES

Version 1.0

---

# Purpose

This document defines the mandatory engineering, coding, architecture, UI, UX, accessibility, performance, and development rules that every AI agent and developer must follow while working on GauRakshak Bharat.

These rules have higher priority than implementation preferences.

If any implementation conflicts with this document, follow this document.

---

# Rule 1

Read Documentation First

Before writing any code, always read:

1. 01_PRODUCT_REQUIREMENTS_DOCUMENT.md

2. 02_DESIGN_SYSTEM.md

Never start coding without understanding these documents.

---

# Rule 2

Follow the PRD Exactly

Never invent new sections.

Never remove existing sections.

Never change page hierarchy.

Never skip required functionality.

If something is unclear,

ask instead of guessing.

---

# Rule 3

Follow the Design System

Never invent

colors

typography

spacing

radius

buttons

cards

animations

icons

Always use values defined inside

02_DESIGN_SYSTEM.md

---

# Rule 4

Technology Stack

Frontend

HTML5

CSS3

Vanilla JavaScript (ES6 Modules)

No Frameworks

No Bootstrap

No jQuery

No Tailwind

Version 1 should remain lightweight.

---

# Rule 5

Semantic HTML

Always use

header

nav

main

section

article

aside

footer

button

figure

picture

Never overuse div.

---

# Rule 6

CSS Standards

Use CSS Variables.

Organize CSS into reusable modules.

Never duplicate styles.

Prefer Grid for layouts.

Prefer Flexbox for components.

Avoid inline styles.

---

# Rule 7

JavaScript Standards

Keep JavaScript modular.

One responsibility per file.

Avoid global variables.

Use modern ES6 syntax.

Avoid unnecessary libraries.

---

# Rule 8

Responsive First

Develop Mobile First.

Test every component on

Mobile

Tablet

Desktop

Large Desktop

No horizontal scrolling.

---

# Rule 9

Accessibility

Follow WCAG AA.

Keyboard navigation required.

Visible focus states required.

Images require alt text.

Forms require labels.

Touch targets minimum 48×48 px.

Respect prefers-reduced-motion.

---

# Rule 10

Performance

Target Lighthouse Score

95+

Optimize images.

Lazy load media.

Use SVG where possible.

Minimize JavaScript.

Avoid layout shifts.

Use GPU-friendly animations.

---

# Rule 11

Animations

Animations should improve UX.

Never distract users.

Use CSS first.

JavaScript only when necessary.

Keep animations smooth.

---

# Rule 12

Component Architecture

Every reusable UI element must become a reusable component.

Examples

Navigation

Buttons

Cards

Inputs

Footer

Hero

Statistics

Timeline

Gallery

Testimonials

Never duplicate component code.

---

# Rule 13

Folder Structure

Maintain a clean structure.

Example

src/

assets/

css/

js/

images/

icons/

components/

pages/

Never place unrelated files together.

---

# Rule 14

Code Quality

Readable

Modular

Maintainable

Scalable

Documented

Avoid magic numbers.

Avoid duplicated logic.

---

# Rule 15

Naming Convention

HTML

Semantic

CSS

BEM-inspired naming

JavaScript

camelCase

Files

kebab-case

Components

PascalCase (if reused later)

---

# Rule 16

Dark Mode

Every component should support future Dark Mode.

Never hardcode light-only colors.

Use CSS variables.

---

# Rule 17

Images

Use WebP whenever possible.

Use SVG for illustrations and icons.

Optimize images before use.

Never stretch images.

Always use responsive images.

---

# Rule 18

Icons

Only Lucide Icons.

Never mix icon libraries.

Never use emoji as UI icons.

---

# Rule 19

Git Workflow

Keep commits small.

One logical feature per commit.

Meaningful commit messages.

Avoid committing unfinished work.

---

# Rule 20

Homepage Development Strategy

Build one section at a time.

Order

Navigation

↓

Hero

↓

Mission

↓

Importance

↓

Features

↓

Statistics

↓

Volunteer Journey

↓

Knowledge Hub

↓

Community

↓

CTA

↓

Footer

After each section,

verify responsiveness before continuing.

---

# Rule 21

Testing

Test

Desktop

Laptop

Tablet

Mobile

Dark Mode

Keyboard

Accessibility

Performance

Cross-browser compatibility

---

# Rule 22

Future Ready

Code should be prepared for

Backend Integration

CMS

Authentication

API

AI Assistant

Dashboard

Internationalization

without requiring major rewrites.

---

# Rule 23

Decision Policy

If documentation exists,

documentation wins.

If documentation is missing,

choose the simplest scalable solution.

Never guess visual styles.

---

# Rule 24

Communication

If a requirement is ambiguous,

ask for clarification.

Never silently change requirements.

---

# Rule 25

Definition of Done

A task is complete only if:

✓ Matches the PRD

✓ Matches the Design System

✓ Responsive

✓ Accessible

✓ Reusable

✓ Optimized

✓ Clean Code

✓ No Console Errors

✓ Lighthouse Target Met

---

# Final Instruction

Every implementation must prioritize:

Quality

Consistency

Accessibility

Performance

Maintainability

Scalability

Developer Experience

User Experience

over speed.

---

END OF DOCUMENT