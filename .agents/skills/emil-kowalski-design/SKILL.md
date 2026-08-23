---
name: emil-kowalski-design
description: Guidelines and principles for implementing impeccable frontend design, micro-interactions, animations, and high-taste UI engineering inspired by Emil Kowalski.
---

# Emil Kowalski Design & Craft Principles

This skill defines the standards for high-taste, impeccable UI engineering, micro-interactions, spring animations, and refined visual craft inspired by Emil Kowalski.

## Core Philosophy
1. **Craft over MVP**: Every component must feel intentional, tactile, and responsive.
2. **Fluid Physics & Motion**: Use natural spring physics and custom bezier curves (`cubic-bezier(0.16, 1, 0.3, 1)`) instead of linear or mechanical timing.
3. **Subtle Tactile Feedback**: Press states (`scale(0.97)`), hover glows, and crisp 1px borders with inner highlights.
4. **Delightful Micro-Interactions**: Animated tab highlights, stacked Sonner-style toasts, fluid height morphing, and backdrop blur modals.

---

## 1. Design System Tokens & Aesthetics

### Color Palette & Depth (Dark Mode First)
- **Background Base**: `#09090b` (Zinc 950) or deep neutral black `#050505`.
- **Card Surface**: `rgba(255, 255, 255, 0.03)` with `backdrop-filter: blur(12px)`.
- **Borders**: `1px solid rgba(255, 255, 255, 0.08)` (Dark) / `1px solid rgba(0, 0, 0, 0.08)` (Light).
- **Inner Edge Highlight**: `box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.08)`.
- **Elevation Shadows**: `0 12px 32px -4px rgba(0, 0, 0, 0.5), 0 4px 12px -2px rgba(0, 0, 0, 0.3)`.

### Typography Standards
- **Font Stack**: Inter, Geist, or system sans-serif with `-webkit-font-smoothing: antialiased`.
- **Headings**: `letter-spacing: -0.025em; font-weight: 600; line-height: 1.2;`.
- **Body**: `letter-spacing: -0.011em; line-height: 1.5; color: rgba(255, 255, 255, 0.7);`.
- **Captions / Monospace**: `font-family: 'JetBrains Mono', monospace; font-size: 12px; letter-spacing: -0.01em;`.

---

## 2. Micro-Interactions & Spring Motion Rules

### Button & Interactive Press Physics
```css
.btn-emil {
  transition: transform 0.15s cubic-bezier(0.16, 1, 0.3, 1), 
              background-color 0.2s ease, 
              box-shadow 0.2s ease,
              border-color 0.2s ease;
  will-change: transform;
}

.btn-emil:hover {
  transform: translateY(-1px);
}

.btn-emil:active {
  transform: scale(0.97) translateY(0);
}
```

### Sliding Pill Tab Indicator
When switching tabs, the background active pill slides smoothly behind the active item:
```css
.tab-indicator {
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), width 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}
```

---

## 3. Sonner-Style Toast Stack Architecture

Toasts should feature:
- **Stacking Effect**: Older toasts slide down, scale down (e.g. `scale(0.92)`), and reduce opacity.
- **Hover Expansion**: On hover, the stack expands vertically with a smooth spring transition.
- **Swipe / Click Dismiss**: Smooth fade + slide out (`translateX(100%) opacity: 0`).

---

## 4. Implementation Checklist
- [ ] Are buttons using tactile press physics (`scale(0.97)`)?
- [ ] Is there proper border highlight contrast (`inset 0 1px 0 rgba(...)`)?
- [ ] Are transitions using `cubic-bezier(0.16, 1, 0.3, 1)` or spring physics?
- [ ] Is typography set with negative tracking (`-0.02em`)?
- [ ] Are toasts stacked with multi-layer depth?
