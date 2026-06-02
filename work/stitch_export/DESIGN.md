---
name: Vedryx Pulse
colors:
  surface: '#051424'
  surface-dim: '#051424'
  surface-bright: '#2c3a4c'
  surface-container-lowest: '#010f1f'
  surface-container-low: '#0d1c2d'
  surface-container: '#122131'
  surface-container-high: '#1c2b3c'
  surface-container-highest: '#273647'
  on-surface: '#d4e4fa'
  on-surface-variant: '#c8c4d7'
  inverse-surface: '#d4e4fa'
  inverse-on-surface: '#233143'
  outline: '#928ea1'
  outline-variant: '#474555'
  surface-tint: '#c5c0ff'
  primary: '#c5c0ff'
  on-primary: '#2600a1'
  primary-container: '#6d5ef7'
  on-primary-container: '#fffeff'
  inverse-primary: '#5543de'
  secondary: '#a2e7ff'
  on-secondary: '#003642'
  secondary-container: '#00d2fd'
  on-secondary-container: '#005669'
  tertiary: '#4edea3'
  on-tertiary: '#003824'
  tertiary-container: '#00875d'
  on-tertiary-container: '#ffffff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e4dfff'
  primary-fixed-dim: '#c5c0ff'
  on-primary-fixed: '#140067'
  on-primary-fixed-variant: '#3c23c6'
  secondary-fixed: '#b4ebff'
  secondary-fixed-dim: '#3cd7ff'
  on-secondary-fixed: '#001f27'
  on-secondary-fixed-variant: '#004e5f'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#051424'
  on-background: '#d4e4fa'
  surface-variant: '#273647'
typography:
  display-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 72px
    fontWeight: '800'
    lineHeight: 80px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  bento-gap: 16px
---

## Brand & Style

The design system is engineered for a high-velocity, high-trust partnership between founders and their launch infrastructure. The brand personality is **Visionary, Resilient, and Absolute.** It moves away from the "work-in-progress" aesthetic of traditional dev-tools and moves toward the "polished outcome" of a premium consultancy.

The visual style is **Futuristic Minimalism** with a heavy emphasis on **Glassmorphism**. It utilizes deep space backgrounds contrasted against vibrant, high-energy light sources. The UI should feel like a sophisticated flight deck: dark, focused, and powerful, where every interaction feels deliberate and high-stakes.

**Key Stylistic Pillars:**
- **Atmospheric Depth:** Use of background blurs and "orb" gradients to create a sense of vastness.
- **Bento Logic:** Information is compartmentalized into discrete, high-fidelity containers.
- **Luminescent Accents:** Using light as a functional signifier for progress and success.

## Colors

The palette is rooted in a deep "Abyssal Blue" to establish immediate trust and authority. 

- **Primary (Electric Purple):** Represents the spark of innovation and leadership. Used for primary actions and high-value brand moments.
- **Secondary (Cyber Blue):** Represents the technical precision of the launch. Used for data visualization, secondary accents, and interactive hover states.
- **Success (Emerald):** Denotes milestone completion and successful market entry.
- **Functional Gradients:** A signature "Launch Gradient" (Primary to Secondary) should be used for hero text and high-priority progress indicators.

**Transparency & Glass:** Surfaces should rarely be opaque. Use `rgba(15, 23, 42, 0.65)` for surface backgrounds with a `20px` backdrop-blur to maintain readability over background light orbs.

## Typography

This design system uses **Plus Jakarta Sans** exclusively to bridge the gap between technical modernism and approachable luxury. 

**Application Rules:**
- **Display Typography:** Use `display-xl` for hero headlines. Apply the Launch Gradient for maximum impact.
- **Letter Spacing:** Headlines utilize tighter tracking (-2% to -4%) to create a "locked-in," authoritative feel.
- **Labels:** Use `label-md` for navigation and small headers within bento cells. The uppercase treatment with increased tracking provides a "cockpit" aesthetic.
- **Color Contrast:** Headers must be pure `#FFFFFF`. Body text should use the Muted `#94A3B8` to create a clear visual hierarchy.

## Layout & Spacing

The layout is governed by a **Strict Bento Grid** model. This system prioritizes modularity and scanning efficiency.

**The Grid Model:**
- **Desktop:** 12-column grid with 24px gutters.
- **Bento Cells:** Components are housed in "cells" that span 3, 4, 6, or 12 columns.
- **Aspect Ratios:** Within the bento grid, try to maintain consistent aspect ratios (e.g., 1:1, 2:1) to keep the layout feeling architectural.

**Responsive Reflow:**
- On **Tablet**, the 12-column grid collapses to 6 columns. Bento cells that were 3-wide become 6-wide (stacked).
- On **Mobile**, all cells stack into a single column. Horizontal padding is reduced to 16px to maximize screen real estate for content.

## Elevation & Depth

In a dark-mode futuristic system, elevation is conveyed through **Luminance and Inner Glows** rather than traditional black shadows.

1.  **Level 0 (Background):** Deep `#050816` with occasional large, soft radial gradients in Primary/Secondary colors at 5% opacity.
2.  **Level 1 (Bento Cells):** Glassmorphic surfaces with a 1px solid border at 10% white opacity. This creates a "glass edge" effect.
3.  **Level 2 (Popovers/Modals):** High-opacity surfaces with a secondary "Border Glow." Apply a subtle `0 0 15px rgba(109, 94, 247, 0.3)` outer glow to the active container.
4.  **Shadows:** Use "Ambient Shadows"—diffused, large-radius shadows using the primary color at extremely low opacity (e.g., `0 20px 40px rgba(0, 0, 0, 0.4)`).

## Shapes

The shape language is **Refined and Modern.** We avoid overly aggressive rounded corners to keep the brand feeling "Professional" and "High-Trust," but we avoid sharp corners to ensure it feels "Futuristic" and "Approachable."

- **Bento Cells:** Use `rounded-xl` (1.5rem / 24px) to create soft but defined containers.
- **Buttons & Inputs:** Use `rounded-lg` (1rem / 16px) for a consistent, ergonomic feel.
- **Interactive Indicators:** Small chips or status dots should be fully circular (pill-shaped) to distinguish them from structural elements.

## Components

### Buttons
- **Primary:** Launch Gradient background, white text, 1px inner highlight on the top edge to simulate 3D glass.
- **Secondary:** Transparent background with a 1.5px border in Primary color. Subtle background fill on hover.
- **State Change:** On hover, primary buttons should emit a soft glow matching their background color.

### Bento Cards
- Every card must have a 1px border (`rgba(255,255,255,0.1)`).
- Content within cards should have a padding of `24px` or `32px`.
- Use a "Glass-Top" effect: a very subtle white-to-transparent linear gradient (2% opacity) from the top-left corner.

### Input Fields
- Dark, recessed backgrounds (`#0A0F1D`).
- Focus state: Border color changes to Secondary (Cyber Blue) with a soft outer glow.
- Labels sit above the field in `label-sm` style.

### Progress & Roadmaps
- Use "Glow-Lines" for roadmap connectors. These are 2px lines with a Primary-to-Secondary gradient and a 4px blur shadow.
- Milestone markers are circular with a pulsating glow animation when "Active."

### Navigation
- A floating "Glass" dock or a top-bar with `backdrop-filter: blur(12px)`.
- Active links are signified by a small underline glow rather than a change in text color.