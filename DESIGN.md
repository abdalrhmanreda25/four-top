---
name: Continental Prestige
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#44474d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#75777e'
  outline-variant: '#c4c6ce'
  surface-tint: '#4d5f7d'
  primary: '#000615'
  on-primary: '#ffffff'
  primary-container: '#0b1f3a'
  on-primary-container: '#7587a7'
  inverse-primary: '#b5c7ea'
  secondary: '#0046d2'
  on-secondary: '#ffffff'
  secondary-container: '#1c5dfe'
  on-secondary-container: '#eeefff'
  tertiary: '#0d0400'
  on-tertiary: '#ffffff'
  tertiary-container: '#321800'
  on-tertiary-container: '#a87e59'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#b5c7ea'
  on-primary-fixed: '#071c36'
  on-primary-fixed-variant: '#364764'
  secondary-fixed: '#dce1ff'
  secondary-fixed-dim: '#b6c4ff'
  on-secondary-fixed: '#001550'
  on-secondary-fixed-variant: '#003ab2'
  tertiary-fixed: '#ffdcc1'
  tertiary-fixed-dim: '#eebd94'
  on-tertiary-fixed: '#2e1500'
  on-tertiary-fixed-variant: '#613f20'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Cairo
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Cairo
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Cairo
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Cairo
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: IBM Plex Sans Arabic
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: IBM Plex Sans Arabic
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: IBM Plex Sans Arabic
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
  button:
    fontFamily: Cairo
    fontSize: 16px
    fontWeight: '600'
    lineHeight: '1'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 2rem
  margin-desktop: 4rem
  margin-mobile: 1.5rem
  unit-xs: 0.5rem
  unit-sm: 1rem
  unit-md: 2rem
  unit-lg: 4rem
  unit-xl: 8rem
---

## Brand & Style

The brand identity is built on the pillars of "European Quality" and "VIP Service." This design system targets high-net-worth individuals, corporate event planners, and government entities who require temporary structures without compromising on the luxury of permanent architecture.

The style is **Corporate Luxury with Glassmorphism**. It blends the stability of high-end engineering with the ethereal lightness of premium events. The UI should evoke a sense of precision, exclusivity, and "quiet luxury"—avoiding clutter while utilizing sophisticated visual effects like backdrop blurs and gold-leaf accents to denote premium status.

## Colors

The palette is anchored by **Deep Navy (#0B1F3A)**, representing institutional trust and nocturnal elegance. **Royal Blue (#1E5EFF)** acts as the functional primary for interactions, providing a modern, high-tech energy. 

**Gold (#D4AF37)** is used sparingly as an accent for high-value calls to action, borders, and status indicators. The background utilizes a crisp **Light Gray (#F8FAFC)** to maintain a clean, airy "European" feel, while dark overlays are strictly reserved for hero sections and high-impact media containers to ensure text legibility and cinematic depth.

## Typography

The typography system is optimized for **RTL (Arabic) as the primary direction**, ensuring a professional and modern aesthetic. 

- **Cairo** is used for headlines and buttons. Its geometric nature provides the "precision" required for an engineering-focused brand.
- **IBM Plex Sans Arabic** is used for body text and labels. It offers exceptional legibility at smaller sizes and a technical, systematic feel that aligns with corporate standards.
- High-contrast hierarchy is achieved through significant size differences between display titles and body copy, utilizing generous leading (line-height) to prevent visual fatigue.

## Layout & Spacing

The layout follows a **Fixed-Width Centered Grid** for desktop to maintain a prestigious, editorial feel, switching to a fluid model for mobile.

- **Desktop:** 12-column grid with 32px gutters and wide 64px side margins.
- **Tablet:** 8-column grid with 24px gutters.
- **Mobile:** 4-column grid with 16px gutters.

The spacing rhythm is "loose" and sophisticated. Section vertical padding should default to `unit-xl` (128px) to allow imagery to breathe. Elements should never feel cramped; white space is treated as a luxury asset.

## Elevation & Depth

This design system uses a combination of **Glassmorphism** and **Ambient Depth** to create a multi-layered experience.

1.  **Service Layers:** Service cards utilize a "Frosted Glass" effect—`backdrop-filter: blur(12px)` with a high-transparency white fill (`rgba(255,255,255,0.7)`).
2.  **Gold Gradients:** Elevated elements are wrapped in a 1px "Gold Wire" border using a linear gradient to simulate metallic light reflection.
3.  **Shadows:** Use extremely soft, large-radius shadows (`blur: 40px, opacity: 0.08`) tinted with the Primary Navy color to avoid a "dirty" gray look. 
4.  **Parallax:** Background image layers move at 0.8x scroll speed to create a sense of vast physical space.

## Shapes

The shape language is **Soft and Structural**. Elements use a 4px (0.25rem) base radius. This maintains a sharp, professional "architectural" edge while being refined enough for a modern digital interface. 

- **Buttons & Chips:** Use `rounded-sm` (4px). 
- **Cards & Modals:** Use `rounded-lg` (8px).
- Avoid fully rounded "pill" shapes, as they appear too casual for a high-end corporate brand.

## Components

### Buttons
- **Primary:** Deep Navy background with a "Magnetic" hover effect. On hover, a subtle gold outer glow (`0 0 15px rgba(212, 175, 55, 0.4)`) appears.
- **Secondary:** Transparent with a 1px gold gradient border. Text is Deep Navy.
- **Magnetic Interaction:** Buttons should subtly track the cursor position when the mouse is within a 20px proximity.

### Service Cards
- Glassmorphic surface with a 3D tilt effect on hover (`rotateX` and `rotateY` based on cursor position).
- Gold animated border: A 1px gradient stroke that "shimmers" or moves around the perimeter when the card is in focus.

### Input Fields
- Underlined style (minimalist) rather than boxed. The underline transitions from Light Gray to Royal Blue on focus, with a small gold dot indicating active input.

### Premium Imagery
- All tent imagery must use a subtle floating animation (slow Y-axis translation) and hover-triggered zoom-ins.
- Use "Floating Particles" (slow-moving dust or light motes) in the background of hero sections to add a sense of atmosphere.

### List Items
- Custom bullet points using a gold "diamond" or "chevron" icon to maintain the VIP aesthetic.