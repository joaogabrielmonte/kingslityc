---
name: taste
description: Core principles of frontend design taste, restraint, micro-details, component feel, and avoiding generic UI patterns.
---

# UI Taste & Design Engineering Principles

"Taste" in software engineering is the ability to make countless micro-decisions that result in a product feeling refined, responsive, and delightful rather than generic or mechanical.

## 1. Avoid Generic Framework Defaults
- **Curated Color Palettes**: Avoid basic red `#ff0000` or generic blue `#0000ff`. Use HSL or modern Tailwind/Zinc scales with rich dark modes (`#09090b`, `#121216`).
- **Custom Motion Curves**: Replace generic linear transitions with physical spring easing:
  `cubic-bezier(0.16, 1, 0.3, 1)` or `cubic-bezier(0, 0, 0.2, 1)`.
- **Custom Component Aesthetics**: Avoid unstyled default browser scrollbars, focus rings, or select menus.

## 2. Interactive Tactility & Micro-Interactions
- **Instant Press State Feedback**: Every button or interactive card should shrink slightly when pressed (`transform: scale(0.97)`).
- **Hover Responsiveness**: Hover states must be fast (<150ms) and subtle (slight elevation lift, border color highlight).
- **Smooth Layout Transitions**: Use sliding indicators for segmented controls and smooth auto-height morphing for accordions.

## 3. High-Quality Details ("The Polish Phase")
- **No Harsh Blacks/Whites**: Use deep dark neutrals `#09090b` instead of `#000000`, and off-white `#f4f4f5` instead of `#ffffff`.
- **Subtle Radial Glows**: Accent areas with low-opacity radial gradient glows (`background: radial-gradient(...)`).
- **Thoughtful Empty & Loading States**: Skeleton loaders with smooth shimmer, friendly empty state illustrations or subtle icons.

## 4. Design Taste Checklist
- [ ] Does the UI feel alive and responsive under the user's cursor?
- [ ] Are animations snappy (under 300ms) with high-quality spring physics?
- [ ] Are color transitions smooth and harmonious?
- [ ] Are generic browser defaults completely replaced with custom design tokens?
