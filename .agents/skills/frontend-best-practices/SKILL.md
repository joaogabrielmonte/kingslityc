---
name: frontend-best-practices
description: Core standards and guidelines for building modern, high-performance, accessible React and TypeScript web applications.
---

# Frontend Engineering & Best Practices

This skill outlines the standards for high-performance React/TypeScript applications with accessibility, clean component architecture, and responsive UI craft.

## 1. Component Architecture & State Management
- **Single Responsibility**: Each component should serve a single clear purpose. Split large components into focused sub-components.
- **Local vs Global State**: Keep transient state (e.g. form fields, accordion toggles) inside local component state (`useState`). Reserve global state/context for app-wide data (auth, theme, active user).
- **TypeScript Strict Typing**: Always type component props, event handlers (`React.MouseEvent`, `React.FormEvent`), and API response DTOs. Avoid `any`.

## 2. Performance Optimization
- **Asset & Image Optimization**: Use modern SVG icons (e.g., Lucide React), compressed WebP imagery, and explicit dimensions to avoid Cumulative Layout Shift (CLS).
- **Lazy Loading & Route Splitting**: Use `React.lazy` and dynamic imports for heavy modal components or non-critical routes.
- **Smooth Animations**: Perform animations using GPU-accelerated CSS properties (`transform`, `opacity`) with custom bezier curves (`cubic-bezier(0.16, 1, 0.3, 1)`). Avoid animating `width`, `height`, or `margin` directly during continuous transitions.

## 3. Accessibility (WCAG 2.1 Compliance) & SEO
- **Semantic HTML5**: Use `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, and `<button>` instead of plain `<div>` clickable wrappers.
- **Keyboard Navigation**: Ensure all interactive controls (buttons, modals, tabs) are reachable via `Tab` key and operable with `Enter`/`Space`.
- **Contrast & Legibility**: Maintain WCAG AA contrast ratio (minimum 4.5:1 for body text) between text and background surfaces.
- **Descriptive Alt & Labels**: Include `aria-label` or `alt` text for screen readers on icon buttons and visual elements.

## 4. Responsive Design & Mobile-First
- **Fluid Layouts**: Use CSS Grid and Flexbox with `minmax()` and `clamp()` for responsive typography and container widths.
- **Touch Targets**: Ensure touch targets on mobile devices are at least `44x44px` for comfortable finger tapping.
