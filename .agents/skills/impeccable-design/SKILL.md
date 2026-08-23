---
name: impeccable-design
description: Standard guidelines for achieving pixel-perfect UI execution, visual polish, layout rhythm, and flawless component craft.
---

# Impeccable Design & Craft Guidelines

This skill focuses on visual precision, pixel perfection, spacing geometry, and flawless surface rendering.

## 1. Pixel Perfection & Spacing Rhythm
- **Strict Grid System**: Standardize component padding and gaps on 4px/8px incremental scales (`4px`, `8px`, `12px`, `16px`, `24px`, `32px`).
- **Alignment Integrity**: Text, icons, and interactive elements must be vertically centered with optical balance (`align-items: center`).
- **Optical Adjustments**: Icons paired with text should have precise width/height dimensions (typically `16px`, `18px`, or `20px`) and line up with baseline.

## 2. Border & Surface Engineering
- **Crisp 1px Borders**: Never use thick unrefined borders. Use `1px solid rgba(255, 255, 255, 0.08)` for dark mode and `1px solid rgba(0, 0, 0, 0.08)` for light mode.
- **Subtle Layering Highlights**: Add top edge inner highlights using `box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.08)` to simulate true physical depth.
- **Glassmorphism & Depth**: Multi-layered backdrop blurs (`backdrop-filter: blur(12px)`) with semi-transparent surfaces.

## 3. High-Contrast Typography & Hierarchy
- **Tracking & Line Height**:
  - Headings: `letter-spacing: -0.025em; line-height: 1.2; font-weight: 600;`
  - Body Text: `letter-spacing: -0.011em; line-height: 1.5; font-weight: 400;`
  - Labels & Monospace: `font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.02em;`
- **Subtle Color Dimming**: Differentiate hierarchy through opacity/color levels (`var(--text-main)`, `var(--text-muted)`, `var(--text-dim)`) rather than heavy font weight jumps.

## 4. Execution Checklist
- [ ] Are all elements aligned on a strict grid?
- [ ] Is there proper contrast without harsh plain black/white defaults?
- [ ] Are edge highlights (`inset 0 1px 0`) present for realistic surface separation?
- [ ] Is font smoothing enabled (`-webkit-font-smoothing: antialiased`)?
