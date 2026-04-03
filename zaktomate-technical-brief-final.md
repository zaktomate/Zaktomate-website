# ZAKTOMATE — COMPLETE WEBSITE DESIGN & TECHNICAL BRIEF
### Version 2.0 — Final | Complete LLM & Developer Handoff Document
### Includes: Full Copy, Visual Instructions, Technical Specs, Asset Briefs, Backend Requirements

---

> **HOW TO USE THIS DOCUMENT**
> This is a self-contained, complete instruction set for building the Zaktomate website from scratch.
> It includes every word of copy, every layout instruction, every design token, every animation spec,
> and every backend requirement. No external reference needed. Hand this entire document to a developer,
> a Webflow designer, or paste it directly into an LLM and instruct it to build the website.
> Sections are numbered and cross-referenced. Follow the order as written.

---

## TABLE OF CONTENTS

1. Brand Identity & Logo
2. Design System (Colors, Typography, Spacing, Shadows)
3. Icon System
4. Animation & Motion Rules
5. Global Components
6. Page-by-Page Layout & Copy — HOME
7. Page-by-Page Layout & Copy — ABOUT
8. Page-by-Page Layout & Copy — SERVICES (Core Offer Page)
9. Page-by-Page Layout & Copy — GET YOUR FREE AI AUDIT (Contact/Booking)
10. Image & Visual Asset Brief
11. Backend, Forms & Integrations
12. SEO & AI-Search Requirements
13. Performance & Technical Stack
14. Complete Master Content Checklist

---
---

## 1. BRAND IDENTITY & LOGO

### 1.1 Logo Description
Zaktomate has two logo assets:

**Full horizontal logo (for nav bar and footer):**
The Zaktomate Z-swirl mark on the left, followed by the lowercase wordmark "zaktomate™" in white rounded sans-serif. The Z-swirl is a fluid, hand-drawn style letter Z in gradient teal-green (#2ECC8F). The mark has two small circular dots — one at the top-left and one at the bottom-right of the Z stroke — suggesting endpoints of an automated flow.

**Icon-only logo (for favicon, WhatsApp button, social profiles):**
The same Z-swirl mark inside a rounded square container with a dark green gradient background (dark green #0D4A2A to mid green #1A8A4A). A soft green glow radiates from the icon on dark backgrounds.

### 1.2 Logo Usage Rules
- On dark backgrounds: Use full horizontal logo with white wordmark + teal Z-mark. No background needed.
- On light backgrounds: Use a dark wordmark version if created, or maintain the white wordmark with a dark pill background behind it.
- Minimum clear space: Equal to the height of the "z" character on all sides.
- Never stretch, rotate, recolor, or place on mid-tone grey backgrounds.
- Nav logo: height 32px. Footer logo: height 28px.

### 1.3 Favicon
Use the icon-only Z-mark on dark green square background. Export as 32×32 and 180×180 (Apple touch icon).

---
---

## 2. DESIGN SYSTEM

### 2.1 Aesthetic Direction: "Precision Warmth"
Dark, confident, premium — like a serious AI technology firm. But warm and human — like a trusted local advisor who actually understands your business. Not cold. Not corporate. Not "startup purple gradient."

Inspired by three sources:
- **Jasper.ai**: Dark premium surfaces, editorial typography, layered depth with grain texture
- **Morningside.ai**: Brutal purposefulness, generous whitespace, numbered methodology as architecture
- **Wes McDowell**: Story-driven, bold highlighted callouts, human warmth, emotional journey

Anti-patterns to explicitly AVOID (per Y Combinator design review):
- NO purple gradients of any kind
- NO scroll-jacking or scroll-hijacking animations
- NO hover effects that move menu items vertically or horizontally
- NO information hidden until hover (especially on mobile)
- NO fake Google-colored charts (red/yellow/green/blue)
- NO meteor or SVG path animations following cursor
- NO multiple different button shapes on the same page
- NO distracting looping animations on non-interactive elements
- NO bento box grid as the primary layout pattern
- One consistent button shape throughout: pill (border-radius: 100px)

### 2.2 Color System

```css
:root {
  /* Backgrounds */
  --bg-dark:    #0A0A0A;   /* Primary page background — near-black with warmth */
  --bg-mid:     #111111;   /* Secondary dark — used for nav overlay, footer */
  --bg-card:    #161616;   /* Card surfaces on dark backgrounds */
  --bg-card2:   #1C1C1C;   /* Deeper card — table rows, nested elements */
  --bg-light:   #F4F1EB;   /* Warm off-white — alternating light sections */

  /* Accent */
  --accent:       #2ECC8F;           /* Primary teal-green — buttons, checkmarks, icons */
  --accent-dim:   rgba(46,204,143,0.12); /* Teal at 12% — icon backgrounds, badges */
  --accent-glow:  rgba(46,204,143,0.25); /* Teal at 25% — button hover glow */
  --accent-hover: #27B87E;           /* Darker teal for hover states */

  /* Text */
  --text-primary:   #FFFFFF;   /* Primary text on dark */
  --text-secondary: #9A9A9A;   /* Body copy on dark — NOT pure grey */
  --text-dark:      #141414;   /* Text on light sections */
  --text-muted:     #5A5A5A;   /* Captions, footnotes, de-emphasized */

  /* Borders */
  --border:       #222222;   /* Card/section borders on dark */
  --border-light: #E5E0D8;   /* Borders on light sections */

  /* Semantic */
  --warning:    #F59E0B;   /* Amber — stakes section eyebrow only */
  --error-red:  #EF4444;   /* Red — symptom ✗ icons only */
  --wa-green:   #25D366;   /* WhatsApp official green — float button only */
}
```

**Section background rhythm (alternating prevents monotony):**
- Section 1 Hero: dark
- Section 2 Wins bar: mid-dark
- Section 3 Problem: light (#F4F1EB)
- Section 4 Guide: dark
- Section 5 Audit: dark (with radial teal glow)
- Section 6 Process: light
- Section 7 Automations: dark
- Section 8 Benefits: light
- Section 9 Customer value: dark (teal-accent callout)
- Section 10 Full Offer: dark
- Section 11 Guarantee: light
- Section 12 Comparison: dark
- Section 13 Case Studies: light
- Section 14 Stakes: dark
- Section 15 Aspiration: dark (with atmospheric background)
- Section 16 Final CTA: full teal background
- Section 17 FAQ: dark

### 2.3 Typography

**Display / Headline Font: `Instrument Serif`**
Source: Google Fonts (free). Used for: H1, H2, pull quotes, testimonial quotes, mission statement.
Characteristics: Editorial serif with warmth and authority. Large headlines feel substantial and trustworthy.

```css
font-family: 'Instrument Serif', serif;
font-weight: 400; /* Regular — this font is elegant at normal weight */
font-style: italic; /* Use italic variant for emphasis within headlines */
```

**UI / Body Font: `Syne`**
Source: Google Fonts (free). Used for: all body copy, buttons, nav links, eyebrow labels, card text, form fields.
Characteristics: Geometric sans-serif with personality. Modern without being cold. Available weights: 400, 500, 600, 700, 800.

```css
font-family: 'Syne', sans-serif;
```

**Monospace / Data Font: `JetBrains Mono`**
Source: Google Fonts (free). Used for: large stat numbers (50%, 2x, 18.4 hrs), dashboard metric values only.
Never use for body copy.

```css
font-family: 'JetBrains Mono', monospace;
font-weight: 500; /* or 700 for large display stats */
```

**Google Fonts import (place in `<head>`):**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Syne:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
```

**Type Scale:**
```css
/* Display / Hero */
--type-hero:   clamp(48px, 7vw, 88px);   /* H1 homepage hero — Instrument Serif */
--type-h1:     clamp(40px, 5vw, 64px);   /* Page sub-heroes */
--type-h2:     clamp(28px, 3.5vw, 48px); /* Section headlines */
--type-h3:     clamp(19px, 2vw, 24px);   /* Card titles */

/* Body */
--type-body-lg:  18px;   /* Lead paragraphs */
--type-body:     16px;   /* Standard body */
--type-body-sm:  14px;   /* Supporting copy */
--type-caption:  13px;   /* Captions, sub-labels */

/* Special */
--type-stat:     clamp(40px, 5vw, 68px); /* Stat numbers — JetBrains Mono */
--type-eyebrow:  11px;                    /* Uppercase tracking labels */
--type-button:   15px;                    /* Button text — Syne 600 */
--type-nav:      14px;                    /* Nav links — Syne 500 */
```

**Eyebrow style (apply universally):**
```css
.eyebrow {
  font-family: 'Syne', sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.20em;
  text-transform: uppercase;
  color: var(--accent);
  display: block;
  margin-bottom: 14px;
}
/* On light sections, eyebrow color stays --accent (teal is readable on #F4F1EB) */
/* On warning sections (stakes), eyebrow uses --warning (#F59E0B) */
```

### 2.4 Spacing System (8px base grid)
```css
--space-xs:   8px
--space-sm:   16px
--space-md:   24px
--space-lg:   48px
--space-xl:   80px
--space-2xl:  120px
--space-3xl:  160px

/* Section padding (top + bottom) */
--section-pad:    100px 0;
--section-pad-lg: 130px 0;

/* Container */
--container-max: 1200px;
--container-pad: 0 32px;   /* 24px on mobile */
```

### 2.5 Border Radius
```css
--r-sm:   6px;
--r-md:   12px;
--r-lg:   20px;
--r-pill: 100px;   /* ALL buttons use this */
```

### 2.6 Shadows & Glow
```css
--shadow-card:  0 1px 3px rgba(0,0,0,.4), 0 8px 32px rgba(0,0,0,.5);
--shadow-glow:  0 0 28px rgba(46, 204, 143, 0.30);   /* On CTA buttons */
--shadow-image: 0 24px 64px rgba(0,0,0,.5);           /* On photos */
```

### 2.7 Grain Texture Overlay
Apply to ALL dark sections (hero, guide, automations, offer, stakes, aspiration, FAQ).
This adds depth and prevents the flat digital feel. Uses SVG feTurbulence noise at very low opacity.

```css
/* Add this pseudo-element to every dark section wrapper */
.section-dark::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E");
  opacity: 0.035;
  pointer-events: none;
  z-index: 0;
}
/* Ensure all content inside dark sections has position:relative; z-index:1 */
```

---
---

## 3. ICON SYSTEM

**No emojis anywhere on the site. Zero exceptions.**

Use **Phosphor Icons** (https://phosphoricons.com/) — free, open source, available as SVG, React components, and web font. All icons render in the accent color `#2ECC8F` or `#9A9A9A` (secondary) depending on context.

**Import (via CDN):**
```html
<script src="https://unpkg.com/@phosphor-icons/web"></script>
```
Then use: `<i class="ph ph-lightning"></i>` etc.

**Or download SVGs individually and inline them.**

**Icon mapping — use these consistently throughout:**

| Concept | Phosphor Icon Name | Usage location |
|---|---|---|
| AI / Automation | `ph-robot` | Hero badge, section intros |
| Lightning / Speed | `ph-lightning` | Wins bar item 1, benefit highlights |
| Chart / Revenue | `ph-trend-up` | Wins bar item 2, benefit 2 |
| Heart / Love | `ph-heart` | Wins bar item 3 |
| Magnifying glass | `ph-magnifying-glass` | Step 1 — Identify |
| Gear / Build | `ph-gear` | Step 2 — Develop |
| Rocket | `ph-rocket-launch` | Step 3 — Adopt, final CTA |
| Chat / Messaging | `ph-chat-dots` | Automation card 1 |
| Shopping bag | `ph-shopping-bag` | Automation card 2 — E-commerce |
| Graduation cap | `ph-graduation-cap` | Automation card 3 — Edtech |
| Presentation chart | `ph-presentation-chart` | Automation card 4 — Reporting |
| Funnel | `ph-funnel` | Automation card 5 — Sales/Leads |
| Folders | `ph-folders` | Automation card 6 — Internal ops |
| Check circle | `ph-check-circle` | Audit includes list, core list |
| X circle | `ph-x-circle` | Symptom/problem list |
| Clock | `ph-clock` | Aspiration dashboard times |
| Users | `ph-users` | Guide section authority chip |
| Map pin | `ph-map-pin` | Location chip, footer |
| Phone | `ph-phone` | Contact info |
| WhatsApp | Use SVG from brand assets | Float button only |
| Seal / Guarantee | `ph-seal-check` | Guarantee section |
| Arrow right | `ph-arrow-right` | All CTA buttons (trailing icon) |
| House | `ph-house` | Not used — no nav icons |
| Facebook | `ph-facebook-logo` | Footer social |
| LinkedIn | `ph-linkedin-logo` | Footer social |
| Star | `ph-star-fill` | Testimonial star ratings |

**Icon sizing:**
- Section intro icons (process cards, automation cards): 28px, inside a 48×48 container
- Inline icons (button arrow, authority chips, list checkmarks): 16px
- Social icons (footer): 18px
- WhatsApp float button icon: 28px

**Icon containers on dark backgrounds:**
```css
.icon-container {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: var(--accent-dim);
  border: 1px solid rgba(46, 204, 143, 0.20);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  font-size: 24px;
}
```

---
---

## 4. ANIMATION & MOTION RULES

### 4.1 Core Philosophy
Animation serves reading — it guides the eye and rewards scrolling. It never distracts, loops needlessly, or blocks content. Every animation is triggered by Intersection Observer on scroll, not on page load (except the hero sequence).

### 4.2 Entrance Animations (Scroll-triggered)
Apply via Intersection Observer API. Element is invisible until 10% enters viewport.

```css
/* Default — all text blocks, cards */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1),
              transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
}
.reveal.visible { opacity: 1; transform: translateY(0); }

/* Scale variant — cards, dashboard mockups */
.reveal-scale {
  opacity: 0;
  transform: scale(0.96);
  transition: opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1),
              transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}
.reveal-scale.visible { opacity: 1; transform: scale(1); }

/* Stagger delays for grids */
.delay-1 { transition-delay: 0.10s; }
.delay-2 { transition-delay: 0.20s; }
.delay-3 { transition-delay: 0.30s; }
.delay-4 { transition-delay: 0.40s; }
.delay-5 { transition-delay: 0.50s; }
```

### 4.3 Hero Load Sequence (page load, not scroll)
```
0ms:    Eyebrow tag fades in
100ms:  H1 fades up (24px → 0)
250ms:  Subheadline fades up
350ms:  Social proof bar fades in
450ms:  CTA buttons fade up
200ms:  Hero photo fades in from right with very subtle upward float
```

### 4.4 Hero Photo Float (continuous, very subtle)
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-8px); }
}
.hero-photo { animation: float 7s ease-in-out infinite; }
/* NOTE: This is a very gentle float — 8px total travel over 7 seconds.
   It should be barely perceptible, not bouncy. */
```

### 4.5 Stat Count-Up Animation
Large numbers (50%, 2x, 18.4hrs) count up from 0 when they scroll into view.
Use CountUp.js (3KB, free): https://github.com/inorganik/countUp.js

### 4.6 Button Micro-interactions
```css
.btn-primary {
  transition: all 0.2s cubic-bezier(0.22, 1, 0.36, 1);
}
.btn-primary:hover {
  background: var(--accent-hover);
  transform: translateY(-2px);
  box-shadow: var(--shadow-glow);
}
.btn-primary:active { transform: translateY(0px); }
/* Arrow icon inside button shifts right 4px on hover */
.btn-primary .icon-arrow { transition: transform 0.2s ease; }
.btn-primary:hover .icon-arrow { transform: translateX(4px); }
```

### 4.7 Card Hover States
```css
.card-hover {
  transition: border-color 0.2s ease, transform 0.2s ease;
}
.card-hover:hover {
  border-color: var(--accent);
  transform: translateY(-4px);
}
```

### 4.8 Navigation Scroll Behavior
```css
nav {
  position: fixed; top: 0; left: 0; right: 0;
  padding: 18px 0;
  background: transparent;
  border-bottom: 1px solid transparent;
  transition: background 0.35s ease, border-color 0.35s ease;
  z-index: 900;
}
nav.scrolled {
  background: rgba(10, 10, 10, 0.92);
  backdrop-filter: blur(16px);
  border-bottom-color: var(--border);
}
/* Triggered when scrollY > 60px */
```

### 4.9 Scroll Progress Bar
A 2px teal line at the very top of the viewport tracks reading progress.
```css
#scroll-progress {
  position: fixed; top: 0; left: 0;
  height: 2px;
  background: var(--accent);
  z-index: 1000;
  transition: width 0.1s linear;
}
/* Width updated via JS: (scrollY / (scrollHeight - windowHeight)) * 100 + '%' */
```

### 4.10 FAQ Accordion
```css
/* DO NOT use display:none — use max-height for smooth animation */
.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.35s ease, padding 0.35s ease;
}
.faq-item.open .faq-answer { max-height: 400px; padding-bottom: 20px; }
/* Plus icon rotates to minus when open */
.faq-icon { transition: transform 0.25s ease; }
.faq-item.open .faq-icon { transform: rotate(45deg); }
```

### 4.11 WhatsApp Float Button
```css
/* Appears 3 seconds after page load */
.wa-float {
  opacity: 0;
  transform: scale(0.5);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.wa-float.show { opacity: 1; transform: scale(1); }

/* Pulse ring animation — one ring expands and fades every 3 seconds */
@keyframes wa-pulse {
  0%   { box-shadow: 0 4px 20px rgba(37,211,102,0.4), 0 0 0 0 rgba(37,211,102,0.3); }
  70%  { box-shadow: 0 4px 20px rgba(37,211,102,0.4), 0 0 0 16px rgba(37,211,102,0); }
  100% { box-shadow: 0 4px 20px rgba(37,211,102,0.4), 0 0 0 0 rgba(37,211,102,0); }
}
.wa-float a { animation: wa-pulse 3s ease-out infinite; }
```

---
---

## 5. GLOBAL COMPONENTS

### 5.1 Navigation Bar
**Layout:** Full-width, fixed top. Content max-width 1200px, centered.

**Left:** Zaktomate logo (SVG inline) + wordmark "zaktomate" in Syne 700 18px white.
**Center:** Nav links — Home | Services | About (Syne 500 14px, color: --text-secondary, hover: white, underline slide transition). NO hover vertical/horizontal movement.
**Right:** "Get Your Free AI Audit" pill button in --accent teal.

```
[Zaktomate Logo] [z] zaktomate    Home   Services   About    [Get Your Free AI Audit →]
```

On mobile: Hamburger icon (3 horizontal lines, --text-secondary). Tap opens a full overlay from the right, with the same links stacked vertically. Close button top-right. All links close the overlay when tapped.

### 5.2 Primary CTA Button
```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 15px 30px;
  background: var(--accent);
  color: white;
  font-family: 'Syne', sans-serif;
  font-weight: 600;
  font-size: 15px;
  border-radius: var(--r-pill);
  border: none;
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;
  /* Always contains a trailing ph-arrow-right icon */
}
```
**CRITICAL:** One button shape throughout the entire site. Always --accent background. Always pill shape. The only exception is the Final CTA section (teal background) where the button is white with dark text.

### 5.3 Ghost / Secondary Button
```css
.btn-ghost {
  padding: 14px 29px;
  background: transparent;
  color: white;
  border: 1px solid rgba(255,255,255,0.20);
  border-radius: var(--r-pill);
  font-family: 'Syne', sans-serif;
  font-weight: 500;
  font-size: 15px;
}
.btn-ghost:hover {
  border-color: var(--accent);
  color: var(--accent);
}
/* Used only in hero section alongside primary CTA */
```

### 5.4 WhatsApp Float Button
Position: fixed, bottom-right, 28px from each edge.
WhatsApp SVG icon (download from Meta's WhatsApp brand assets or use: https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg).
Background: --wa-green (#25D366).
Size: 56×56px, border-radius: 50%.
Pre-filled message on click: Opens `https://wa.me/8801793336545?text=Hi%20Zaktomate%2C%20I%27m%20interested%20in%20the%20free%20AI%20audit`

### 5.5 Footer
```
[Logo + wordmark]
[Tagline: "AI automation agency based in Dhaka. We build custom AI systems for online businesses, edtech platforms, agencies, and e-commerce brands."]
[Social icons: Facebook (ph-facebook-logo), LinkedIn (ph-linkedin-logo), WhatsApp icon]

[Services column]     [Company column]     [Contact column]
AI Transformation     About Us             Book Free Audit
Free AI Audit         Case Studies         WhatsApp: +8801793336545
Automation Examples   Blog                 Dhaka, Bangladesh
                                           Available 24/7

[Bottom bar]
© 2025 Zaktomate™. All rights reserved.     Privacy Policy · Terms of Service
```

---
---

## 6. PAGE 1: HOME — COMPLETE LAYOUT & COPY

---

### SECTION 1: HERO
**Background:** Dark (#0A0A0A) with grain texture overlay.
**Layout:** Two-column grid, 55%/45% split on desktop. Single column on mobile (text first, photo below).
**Top padding:** 90px (to clear fixed nav). Bottom padding: 80px.

---

**LEFT COLUMN — Copy stack (top to bottom):**

```
[HERO TAG — pill badge, --accent-dim background, --accent border]
[Icon: ph-robot, 14px, --accent] + "Bangladeshi Online Business Owners"
Font: Syne 700, 12px, letter-spacing 0.12em, uppercase, --accent

[H1 — Instrument Serif, clamp(48px, 7vw, 88px), white]
"Serve More,
Earn More,
and Get Back
to the Work
You Love"
Note: "Earn More" is in italic Instrument Serif to add emphasis

[SUBHEADLINE — Syne 400, 18px, --text-secondary, line-height 1.65]
"You built a business to make an impact — not to spend
your days buried in management, admin, and operations.
AI gives you and your team the time back to deliver
better results to every client and customer."

[SOCIAL PROOF ROW — inline flex, gap 12px]
[5x ph-star-fill icons, 14px, --accent, letter-spacing 2px]
"Trusted by growing businesses across Bangladesh"
[Font: Syne 400, 13px, --text-secondary]

[CTA BUTTON ROW — flex, gap 14px]
[Primary]: "Get Your Free AI Audit" [ph-arrow-right]
[Ghost]:   "See how it works" [ph-arrow-down] — anchor link to process section

[CLIENT TRUST ROW — below buttons, margin-top 24px]
[Label: "Trusted by:" — 12px, --text-muted]
"Insafiayah Gadget" · "Valor Fragrance" · "+ growing"
[Font: Syne 600, 13px, rgba(255,255,255,0.4)]
```

---

**RIGHT COLUMN — Hero Visual (CRITICAL: Real photograph, not dashboard):**

See Section 10.1 for full asset brief. In summary:

A high-quality photo of a Bangladeshi business owner — male or female, professional-casual, early 30s to mid 40s — sitting at a clean, modern desk in a well-lit office space in Dhaka. They are looking at their phone or laptop with a calm, satisfied expression. This is the AFTER STATE: relaxed, in control, not stressed. Think: "My business is running itself and I just checked to confirm." Warm natural light. Real environment. Genuinely authentic — not stock. The person is clearly South Asian / Bangladeshi in appearance and context.

**Photo treatment:**
- Slightly rounded corners: border-radius 20px
- Subtle drop shadow: --shadow-image
- Continuous float animation: translateY(0 → -8px → 0) over 7 seconds, ease-in-out (VERY gentle, barely perceptible)
- On mobile: full width, max-height 400px, object-fit: cover

**Below or overlaid on photo (small floating card):**
A small glassmorphism-style card floating in the bottom-left corner of the photo.
Content: [ph-check-circle icon, --accent] + "18.4 hrs saved this week" in JetBrains Mono 13px --accent
Background: rgba(10,10,10,0.85), backdrop-filter: blur(12px), border: 1px solid --border, border-radius 12px, padding 12px 16px.
This is the only "UI element" in the hero — everything else is photography.

---

### SECTION 2: THREE INSTANT WINS
**Background:** #111111 (--bg-mid).
**Border:** 1px solid --border top and bottom.
**Layout:** Three equal columns, single row on desktop. Stacked on mobile.
**Padding:** 0 (content provides spacing internally — 36px per item).

```
[Column 1] — border-right: 1px solid --border
[Icon container, 42×42, --accent-dim bg, ph-lightning icon, --accent, 20px]
"Deliver more to customers — in less time"
[Font: Syne 700, 15px, white]
"AI handles the repetitive work so your team focuses on quality."
[Font: Syne 400, 13px, --text-secondary]

[Column 2] — border-right: 1px solid --border
[Icon container, ph-trend-up]
"Grow revenue without growing headcount"
"Better systems mean more capacity from the same team."

[Column 3]
[Icon container, ph-heart]
"Get back to the work you actually love"
"Teach, create, sell — not manage, admin, and firefight."
```

---

### SECTION 3: PROBLEM / AGITATION
**Background:** #F4F1EB (--bg-light).
**Layout:** Two-column grid, equal columns, 64px gap. Desktop only; stacked on mobile.
**Padding:** 100px 0.

**LEFT COLUMN:**
```
[EYEBROW — teal] "The Real Problem"

[H2 — Instrument Serif, dark, clamp(28px, 3.5vw, 48px)]
"You have a capable team. So why does the business still feel this hard?"

[Body — Syne 400, 16px, #555555, line-height 1.75]
Paragraph 1:
"You hired a team so the business could grow without everything depending on you. But somewhere between hiring and growing, the business got more complex without getting more efficient."

Paragraph 2:
"Your staff is stretched. Delivery is inconsistent. Every new customer onboarding — whether it's a new student, a new client, or a new order — feels like you're reinventing the process from scratch."

Paragraph 3:
"The problem is not your team." [bold, #141414] "It is the absence of intelligent systems built around how your business actually works."
```

**RIGHT COLUMN — Symptom Card:**
Dark card (#0A0A0A bg, --border border, --r-lg, --shadow-card), grain texture overlay.

```
[Card header — Syne 700, 13px, --text-secondary, letter-spacing 0.10em, uppercase]
"Sound familiar?"

[6 symptom items, each with:]
[ph-x-circle icon, 16px, #EF4444] + [Symptom text, Syne 400, 14px, --text-secondary]

Symptom 1: "One team member who's the only person who knows how a process works"
Symptom 2: "Monthly reporting that eats an entire day and could easily be automated"
Symptom 3: "New customer or client onboarding that feels like chaos every time"
Symptom 4: "Hours lost to copy-pasting, chasing approvals, and manual data entry"
Symptom 5: "Hundreds of messages piling up that need the same repetitive answers"
Symptom 6: "No clear view of what's actually working in the business"

[Insight box — --accent-dim bg, 3px left border --accent, --r-md, padding 16px 20px]
[Font: Syne 400, 13px, --accent, italic]
"This is not a people problem. It is a systems problem — and it is one we know exactly how to solve."
```

---

### SECTION 4: GUIDE / MENTOR
**Background:** #0A0A0A with grain texture.
**Layout:** Two-column, 420px left / 1fr right, 80px gap.
**Padding:** 100px 0.

**LEFT COLUMN — Founder photo area:**
See Section 10.2 for asset brief.
A warm, candid portrait of the Zaktomate founding team (or lead founder). Bangladeshi context, clean modern workspace, confident and approachable. Photo in a rounded-corner container (--r-lg) with --shadow-image.

Below photo: three authority chips in a row (flex-wrap):
```
[Chip 1: ph-map-pin icon] "Based in Dhaka"
[Chip 2: ph-check-circle icon] "Done-for-you"
[Chip 3: ph-seal-check icon] "7-week guarantee"
[Chip style: bg --bg-card, border --border, --r-pill, Syne 600 12px, --text-secondary, icon --accent]
```

**RIGHT COLUMN:**
```
[EYEBROW] "Why Zaktomate"

[H2 — Instrument Serif, white]
"There is a better way — and we have built it for businesses exactly like yours."

[Body — Syne 400, 18px, --text-secondary]
Paragraph 1:
"We are Zaktomate, a Bangladesh-based AI automation agency. We work with edtech founders, agency owners, F-commerce sellers, e-commerce brands, and online service businesses who have a team in place and are ready to make that team significantly more productive."

Paragraph 2:
"We do not sell you a list of tools and wish you luck. We come into your business, learn exactly how it operates, build custom AI systems that fit your specific workflows, and train your team to use them every day."

Paragraph 3:
"If you are a teacher or content creator who got pulled into running operations —" [bold white] "we get you back to the work you love." [/bold] "If you are an agency or e-commerce owner who wants to scale without chaos —" [bold white] "we build the infrastructure that makes it possible."

[Primary CTA button — margin-top 32px]
"Get Your Free AI Audit" [ph-arrow-right]
```

---

### SECTION 5: FREE 7-DAY AI AUDIT — LEAD MAGNET HIGHLIGHT
**Background:** #0A0A0A — this section has a special radial glow treatment.
**Glow:** `radial-gradient(ellipse at 50% 50%, rgba(46,204,143,0.07) 0%, transparent 65%)` — absolutely positioned behind content, not affecting layout.
**Layout:** Centered content, max-width 760px, margin auto.
**Padding:** 130px 0.

```
[EYEBROW — centered] "Your Entry Point — Free"

[H2 — Instrument Serif, centered, white]
"Not sure where AI fits in your business? Start here — completely free."

[Body — centered, Syne 400, 16px, --text-secondary, max-width 600px, margin auto, margin-bottom 40px]
"No obligation. No sales pitch. Just real answers delivered in a written report you keep forever."

[AUDIT CARD — bg --bg-card, border --border, --r-lg, --shadow-card, padding 48px, border-left 4px solid --accent]

  [AUDIT BADGE — inside card, top]
  [ph-seal-check icon, 16px, white] + "FREE 7-DAY AI AUDIT"
  [Style: bg --accent, --r-pill, Syne 700, 11px, letter-spacing 0.15em, uppercase, white, padding 6px 16px, inline-flex]

  [H3 — Syne 700, 22px, white, margin-top 24px, margin-bottom 16px]
  "What you receive — at zero cost:"

  [List — 5 items, each:]
  [ph-check-circle icon, 18px, --accent] + [Text, Syne 400, 15px, --text-secondary]

  Item 1: "A full 7-day deep-dive into your business operations and workflows"
  Item 2: "Identification of every AI and automation opportunity with real impact"
  Item 3: "A prioritized written report — specific, actionable, yours to keep forever"
  Item 4: "A clear roadmap for what transformation looks like for your specific business"
  Item 5: "Zero obligation to proceed with any paid program"

  [Separator: 1px solid --border, margin 24px 0]

  [Italic note — Syne 400, 14px, --text-secondary, centered, italic]
  "This is the first step of our full 7-week transformation program — given to you at no cost. It is a real diagnostic with a real deliverable, not a sales call dressed up as advice."

  [Primary CTA — centered, margin-top 24px]
  "Get Your Free AI Audit" [ph-arrow-right]

  [Sub-note below button — Syne 400, 13px, --text-muted, centered]
  [ph-phone icon, 13px] + "We reach out by WhatsApp within 24 hours."
```

---

### SECTION 6: 3-STEP PROCESS
**Background:** #F4F1EB (--bg-light).
**Layout:** Three-column grid, 28px gap. Stacked on mobile.
**Padding:** 100px 0.

**Section header (centered, max-width 600px):**
```
[EYEBROW — dark, centered] "How It Works"

[H2 — Instrument Serif, dark, centered]
"Three steps. Seven weeks. A completely different business."
```

**Connecting line (desktop only):**
A dashed teal line connecting the three cards horizontally at icon-center height.
`border-top: 2px dashed rgba(46,204,143,0.3)` — absolutely positioned.

**Three process cards (white bg on light section, --border-light border, --r-lg, --shadow-card):**

Each card has:
- A large background number (01, 02, 03) in Instrument Serif at 120px, rgba(0,0,0,0.04), top-right corner
- An icon container (--accent-dim bg, --r-md, 52×52) with the relevant icon
- Step label: "Step 1" / "Step 2" / "Step 3" — Syne 700, 11px, --accent, uppercase, letter-spacing 0.18em
- H3 title: Syne 700, 21px, --text-dark
- Body: Syne 400, 14px, #555, line-height 1.7

```
[Card 1 — Step 1]
[bg number: 01]
[Icon container: ph-magnifying-glass]
Step 1
"Identify"
"We spend 7 days mapping your operations, workflows, and bottlenecks. We find exactly where AI and automation will save your team the most time and your business the most money. You receive a full written report."
[Badge below: --accent-dim bg, --accent border, --r-pill, Syne 700, 10px]
[ph-star icon, --accent] + "Free for every business"

[Card 2 — Step 2]
[bg number: 02]
[Icon container: ph-gear]
Step 2
"Develop"
"Our team builds custom AI systems designed specifically for your business. Not templates. Not generic tools. Software built around how your team actually works, integrated into your existing platforms from day one."

[Card 3 — Step 3]
[bg number: 03]
[Icon container: ph-rocket-launch]
Step 3
"Adopt"
"We train your team, support implementation, iterate on demand, and measure results for the full 7 weeks. When we step back, it is not a new tool anymore — it is just how your business runs."
```

---

### SECTION 7: AUTOMATIONS SHOWCASE
**Background:** #0A0A0A with grain texture.
**Layout:** 3×2 grid of cards. Stacked 1-column on mobile.
**Padding:** 100px 0.

**Section header:**
```
[EYEBROW — centered] "What We Actually Build"

[H2 — Instrument Serif, white, centered, max-width 600px, margin auto]
"Real automations. Real results. Built for your business."
```

**Six automation cards (bg --bg-card, border --border, --r-lg, card-hover transition):**

Each card has:
- Icon (relevant Phosphor icon, 28px, --accent) — in a 48×48 icon container
- Category label: Syne 700, 10px, --accent, uppercase, letter-spacing 0.18em
- H4 title: Syne 700, 17px, white
- Description body: Syne 400, 13px, --text-secondary, line-height 1.65
- Result badge: --accent-dim bg, --r-pill, Syne 600, 12px, --accent

```
[Card 1]
Icon: ph-chat-dots
Category: "Messaging & Customer Service"
Title: "AI-Powered Page & Inbox Automation"
Body: "Automatically respond to Facebook page messages, product inquiries, and order questions 24/7 — without a single admin. Handles FAQs, qualifies buyers, confirms orders, and escalates complex issues to your team."
Badge: [ph-trend-up, 12px] + "50% reduction in admin costs"

[Card 2]
Icon: ph-shopping-bag
Category: "E-Commerce & F-Commerce"
Title: "Order Processing & Follow-up System"
Body: "From order confirmation to delivery update to review request — fully automated. Customers get fast, professional communication at every stage. Your team only touches the exceptions."
Badge: [ph-trend-up] + "2x faster order handling"

[Card 3]
Icon: ph-graduation-cap
Category: "Edtech & Online Courses"
Title: "Student Onboarding & Progress Tracking"
Body: "New students get instant welcome messages, course access, and a structured first week — automatically. Track progress, send reminders, and re-engage inactive students without manual effort."
Badge: [ph-trend-up] + "3x faster onboarding"

[Card 4]
Icon: ph-presentation-chart
Category: "Agency & Service Business"
Title: "Client Reporting & Delivery Automation"
Body: "Weekly reports generated and sent automatically. Project status updates pushed to clients without anyone lifting a finger. Your agency looks bigger and more professional than it is."
Badge: [ph-trend-up] + "8+ hours saved per week"

[Card 5]
Icon: ph-funnel
Category: "Sales & Lead Management"
Title: "Lead Capture & Nurture Sequences"
Body: "Every lead that comes in — from your website, page, or ads — gets an instant response, a qualification sequence, and a structured follow-up cadence. No lead falls through the cracks again."
Badge: [ph-trend-up] + "40% more leads converted"

[Card 6]
Icon: ph-folders
Category: "Internal Operations"
Title: "Team Workflows & Data Management"
Body: "Eliminate data entry, copy-pasting between apps, and manual handoffs. Tasks route automatically to the right person, deadlines get tracked, and nothing falls through the cracks."
Badge: [ph-trend-up] + "60% less admin work"
```

---

### SECTION 8: BENEFIT-FIRST FEATURES
**Background:** #F4F1EB (--bg-light).
**Layout:** Three alternating two-column benefit blocks (text + visual). First block: text left / visual right. Second: visual left / text right. Third: text left / visual right. Each block has 80px top/bottom padding. Stacked on mobile (visual above text).

**Benefit Block 1 — Deliver More**
```
[EYEBROW — dark] "Deliver More. Better."

[H2 — Instrument Serif, dark]
"Your team delivers consistently — without you overseeing every step."

[Body — Syne 400, 16px, #555, line-height 1.75]
"When your internal systems run on AI, your response time to clients and customers improves dramatically. Inquiries get answered within minutes. Orders get processed faster. Follow-ups never slip."
[Line break]
"The experience your customers have with your business gets measurably better. And better customer experience means more referrals, more retention, and more revenue."
[Line break — bold, dark]
"You are not just improving your operations — you are improving what you deliver to the people who pay you."

[VISUAL: Before/After metric panel — dark card on light section, see Section 10.5]
```

**Benefit Block 2 — Earn More**
```
[EYEBROW — dark] "Earn More."

[H2 — Instrument Serif, dark]
"Scale your revenue without scaling your payroll."

[Body]
"When AI handles the repetitive, high-volume work, your existing team's capacity multiplies. You can take on more clients, serve more students, and generate more revenue — with the same headcount."
[Line break]
"Better systems mean better margins, not just better productivity. Every hour your team stops spending on admin is an hour they can spend on the work that actually grows your business."

[VISUAL: Simple upward revenue chart visual — see Section 10.5]
```

**Benefit Block 3 — Do the Work You Love**
```
[EYEBROW — dark] "Do the Work You Love."

[H2 — Instrument Serif, dark]
"Get back to teaching, creating, and leading — not managing."

[Body]
"If you started an edtech company because you love teaching, you should be teaching — not managing spreadsheets. If you run a content or marketing agency because you love creating, you should be creating — not chasing approvals and formatting reports."
[Line break]
"Zaktomate gives you and your leadership team the time back to do what you are best at. That is not a side benefit — it is the whole point."

[VISUAL: Warm aspirational photo — Bangladeshi business owner in their element, see Section 10.6]
```

---

### SECTION 9: CUSTOMER VALUE CALLOUT
**Background:** A dark card (#111111 bg, --border border, --r-lg) centered within the section. Section bg: #0A0A0A.
**Layout:** Centered content, max 760px. Contains a large decorative opening quotation mark at low opacity.
**Padding:** 100px 0.

```
[EYEBROW — centered] "The Angle Most People Miss"

[H2 — Instrument Serif, white, centered]
"Better systems don't just help you work better. They help you serve your customers better."

[Body — Syne 400, 18px, --text-secondary, centered, line-height 1.75]
"When your internal systems run on AI, every customer interaction becomes faster and more professional. Response times drop from hours to minutes. Your customers get a consistent, high-quality experience every single time."
[Line break]
"This is not just about saving time. It is about delivering a better product. The businesses that serve their customers best win — and AI is how you get there."

[3-stat row — border-top --border, padding-top 40px, margin-top 40px, grid 3 columns]

Stat 1:
[JetBrains Mono, --accent, clamp(40px, 5vw, 60px)] "< 2min"
[Syne 400, 13px, --text-muted] "Average AI response time to customers"

Stat 2:
[JetBrains Mono, --accent, same size] "100%"
[Syne 400, 13px, --text-muted] "Consistent customer onboarding experience"

Stat 3:
[JetBrains Mono, --accent, same size] "2x–3x"
[Syne 400, 13px, --text-muted] "Capacity increase with the same team"
```

---

### SECTION 10: FULL OFFER — CORE + ALL 6 BONUSES
**Background:** #0A0A0A with grain texture.
**Layout:** Core deliverables block first, then bonus section with 3×2 grid.
**Padding:** 130px 0.

**Section header:**
```
[EYEBROW — centered] "Everything You Get"

[H2 — Instrument Serif, centered, white]
"The 7-Week AI-First Business Transformation"
```

**Core Program Block (--bg-card bg, --border border, --r-lg, padding 40px):**
```
[H3 — Syne 700, white] "Core Program Deliverables"
[Subtitle — Syne 400, 14px, --text-secondary] "Everything done for you. End to end."

[2-column list — 6 items, ph-check-circle icon --accent + Syne 400, 14px, --text-secondary]
- "Free 7-day AI audit and full written report to kick off"
- "Complete operational workflow mapping and analysis"
- "Custom-built AI systems tailored to your exact business"
- "Full integration with your existing tools and platforms"
- "End-to-end project management — we handle everything"
- "7 weeks of dedicated delivery and support"
```

**Bonus label (horizontal rule with text):**
```
[A centered label with lines extending left and right]
"Plus — 6 bonuses included at no extra cost"
[Style: Syne 700, 11px, uppercase, letter-spacing 0.18em, --text-muted]
```

**6 Bonus Cards (3×2 grid, --bg-card bg, --border border, --r-lg, padding 24px, card-hover transition):**

Each card:
- Bonus number: "BONUS 01" etc. — Syne 700, 10px, --accent, uppercase, letter-spacing 0.18em
- Title: Syne 700, 15px, white
- Body: Syne 400, 13px, --text-secondary, line-height 1.6
- "Included" tag: --accent-dim bg, --r-pill, Syne 700, 10px, --accent, padding 3px 10px

```
[Bonus 01] "Free Hosting, Servers & Maintenance"
"We cover all hosting, server, and maintenance costs for every system we build for the full 7-week program. Zero infrastructure headaches on your end."
Tag: [ph-check-circle] "Included"

[Bonus 02] "Full Staff Training & Step-by-Step Tutorials"
"Every team member gets trained on every system we build — video tutorials, live walkthroughs, and written documentation they can reference forever."
Tag: "Included"

[Bonus 03] "We Pay All Software Subscriptions"
"Every paid tool needed to run your AI systems during the program is covered by us. You will not sign up for, manage, or pay for any third-party subscriptions."
Tag: "Included"

[Bonus 04] "Unlimited Iterations Until You're Satisfied"
"If something is not working the way you need it to, we fix it. No extra fees, no change requests. We iterate until the system is exactly right."
Tag: "Included"

[Bonus 05] "We Track & Report Your Results"
"We monitor performance, measure impact, and report results to you clearly throughout the program. You see the wins without doing the work of finding them."
Tag: "Included"

[Bonus 06] "Lifetime Free AI Consulting"
"After the 7 weeks end, you retain lifetime access to the Zaktomate team for AI strategy and consulting. We remain your AI partners at no ongoing cost."
Tag: [ph-infinity icon] "Lifetime"
```

**Closing line (Instrument Serif italic, 22px, centered, --text-secondary, border-top --border, padding-top 40px):**
"Everything above is included. *Nothing is held back. Nothing is extra.*" [*italic variant*]

---

### SECTION 11: GUARANTEE
**Background:** #F4F1EB (--bg-light).
**Layout:** Two-column grid, 300px left / 1fr right, 80px gap. Stacked on mobile.
**Padding:** 100px 0.

**LEFT COLUMN — Guarantee Seal:**
A circular design element — 280×280px circle — rendered as SVG or custom CSS.
Design: Outer ring 2px solid --accent. Inner dashed ring (stroke-dasharray) at 8px from outer edge. Center content:
- Top: "ZAKTOMATE PROMISE" — Syne 700, 9px, --accent, uppercase, letter-spacing 0.20em
- Main number: "7" — Instrument Serif, 64px, --accent (on light bg)
- "Weeks" — Instrument Serif, 24px, --accent
- Middle: "Satisfaction Guarantee" — Syne 700, 9px, --accent, uppercase
- Bottom tagline: "Not satisfied? We work another 7 weeks free." — Syne 400, 10px, --text-muted, centered

**RIGHT COLUMN:**
```
[EYEBROW — dark] "Our Guarantee"

[H2 — Instrument Serif, dark]
"Not satisfied in 7 weeks? We work another 7 weeks. Completely free."

[Body — Syne 400, 16px, #555, margin-bottom 24px]
"If your business is not transformed to your satisfaction within 7 weeks, we will work with you for another 7 weeks at zero additional cost."

[Body paragraph 2]
"No renegotiations. No conditions. No fine print. We stand behind this because we are selective about who we work with. When we take on a client, we are fully committed to delivering a result."

[Pull quote block — bg #0A0A0A, border-left 3px solid --accent, --r-md, padding 20px 24px, margin-top 28px]
[Syne 400, 15px, --text-secondary, italic]
"No renegotiations. No conditions. No fine print. We stay until the job is done — at our cost, not yours."

[Primary CTA — margin-top 32px]
"Get Your Free AI Audit" [ph-arrow-right]
```

---

### SECTION 12: COMPARISON TABLE
**Background:** #0A0A0A.
**Layout:** Full-width table, max-width 960px, centered.
**Padding:** 100px 0.

```
[EYEBROW — centered] "Zaktomate vs. Everyone Else"

[H2 — centered] "Why businesses choose us over every other option."
```

**Table structure:**
```
| Feature                              | Zaktomate [teal header] | Typical Tech Agency | DIY Tools |
|--------------------------------------|------------------------|---------------------|-----------|
| Custom-built for your exact business | ✓ [--accent]           | ✗ [--text-muted]    | ✗         |
| Fully done-for-you                   | ✓                      | Partial [--warning] | ✗         |
| Hosting & servers included           | ✓                      | ✗                   | ✗         |
| All software subscriptions paid      | ✓                      | ✗                   | ✗         |
| Full staff training included         | ✓                      | ✗                   | ✗         |
| Unlimited iterations until satisfied | ✓                      | ✗                   | ✗         |
| Results tracked and reported for you | ✓                      | ✗                   | ✗         |
| Lifetime AI consulting               | ✓                      | ✗                   | ✗         |
| 7-week satisfaction guarantee        | ✓                      | ✗                   | ✗         |
| Based in Bangladesh, local expertise | ✓                      | ✗                   | ✗         |
| [CTA row spanning all cols]          | "Get Your Free AI Audit →" button centered, colspan=4 |
```

Table styling:
- `border-radius: --r-lg`, `overflow: hidden`, `border: 1px solid --border`
- Header row: bg --bg-card2, Syne 700, 13px, --text-secondary. "Zaktomate" header: --accent color.
- Alternating rows: transparent / rgba(255,255,255,0.015)
- Row hover: rgba(255,255,255,0.025)
- Checkmarks (✓): ph-check icon or bold text, --accent, font-size 18px
- X marks (✗): ph-x icon or text, --text-muted, font-size 16px
- "Partial": Syne 400, 13px, --warning (amber)
- On mobile: make table horizontally scrollable with gradient fade on right edge

---

### SECTION 13: CASE STUDIES + TESTIMONIALS
**Background:** #F4F1EB (--bg-light).
**Layout:** 2 case study cards, then 2 testimonial cards in rows.
**Padding:** 100px 0.

```
[EYEBROW — dark, centered] "Real Results"

[H2 — Instrument Serif, dark, centered]
"Real businesses. Real results. Right here in Bangladesh."
```

**Case Study Card 1 — Insafiayah Gadget:**
Background: white, --border-light border, --r-lg, --shadow-card, padding 36px.
```
[Label] "INSAFIAYAH GADGET" — Syne 700, 12px, uppercase, --text-muted
[Tag] "F-Commerce · Dhaka" — --r-pill, bg #f0f0f0, Syne 400, 11px, #666

[Stat row — border-bottom --border-light, margin-bottom 20px, padding-bottom 20px]
"50%" [JetBrains Mono, clamp(36px, 4vw, 52px), --accent]
"Reduction in admin hiring costs" [Syne 400, 12px, --text-muted, margin-top 4px]

[Case story — Syne 400, 14px, #555, line-height 1.7]
"Insafiayah Gadget was paying multiple admins to manually handle hundreds of daily Facebook page messages. Zaktomate built a custom AI messaging system that handles all customer interactions automatically — qualifying orders, answering inquiries, and managing follow-ups without human intervention. Admin costs dropped by 50%. Response times improved dramatically. Profit margins increased."
```

**Case Study Card 2 — Valor Fragrance:**
Same card style.
```
[Label] "VALOR FRAGRANCE"
[Tag] "E-Commerce · Dhaka"

[Stat] "2x" [same style]
"Savings in time and cost"

[Case story]
"Valor Fragrance was spending significant team time every day manually responding to customer messages across their social pages. Zaktomate automated their full messaging workflow — handling all routine inquiries, product questions, and order follow-ups automatically. The team now focuses on brand growth rather than managing their inbox. Time and cost of customer communication cut in half."
```

**Testimonial Card 1:**
Background: #0A0A0A, --border, --r-lg, padding 32px, overflow hidden.
Large decorative opening quotation mark: position absolute, top -10px, left 16px, Instrument Serif, 160px, rgba(46,204,143,0.06), pointer-events none.
```
[ph-star-fill x5 — --accent, 14px, letter-spacing 3px]

[Quote — Instrument Serif italic, 17px, white, line-height 1.65, position relative z-index 1]
"The systems Zaktomate built changed how our entire team operates. Delivery is consistent, onboarding is smooth, and I actually have time to focus on business strategy instead of putting out fires every day."

[Author row — flex, align-items center, gap 12px]
[Avatar circle — 38px, bg --accent-dim, --accent text, Syne 700, 14px, first initial]
[Name — Syne 700, 14px, white] "[Client Name]"
[Title — Syne 400, 12px, --text-secondary] "Founder — [Edtech Company] ✦ Placeholder"
```

**Testimonial Card 2:** Same style.
```
Quote: "We had tried tools on our own but nothing stuck. Zaktomate built something that fits exactly how we work. My team uses it every single day without any pushing from me."
Author: [Client Name], Director — [Agency Name] ✦ Placeholder
```

Note: Replace placeholder text with real testimonials before launch.

---

### SECTION 14: STAKES
**Background:** #0A0A0A with grain texture.
**Layout:** Centered, max-width 760px.
**Padding:** 100px 0.

```
[EYEBROW — color: --warning (#F59E0B)] "What Happens If Nothing Changes"

[H2 — Instrument Serif, white, centered]
"Every month in the same cycle is a month your competitors pull further ahead."

[Body — Syne 400, 18px, --text-secondary, centered, line-height 1.75, margin-bottom 20px]
"Online businesses and agencies across Bangladesh are already automating what your team does by hand. They are responding to customers faster, processing orders more smoothly, and delivering more consistently — with the same or smaller teams."

[Body — Syne 400, 16px, --text-secondary, centered]
"The gap between businesses that have built proper AI systems and those that have not is widening every single month. It does not close on its own. And the longer operational debt piles up, the more expensive it becomes to fix."
```

---

### SECTION 15: SUCCESS / ASPIRATION
**Background:** #0A0A0A. Atmospheric radial gradient: `radial-gradient(ellipse at 50% 80%, rgba(46,204,143,0.06) 0%, transparent 65%)` absolutely positioned.
**Layout:** Two-column grid, equal columns. Stacked on mobile.
**Padding:** 100px 0.

**LEFT COLUMN — Copy:**
```
[EYEBROW] "Your Business, 7 Weeks From Now"

[H2 — Instrument Serif, white]
"Imagine this instead."

[Body — Syne 400, 18px, --text-secondary, margin-bottom 20px]
"You open your laptop Monday morning and the weekly report is already in your inbox — generated automatically. Your team is serving customers, not answering the same question for the hundredth time."

[Body paragraph 2]
"New customers get onboarded through a clean, consistent process every single time. Follow-ups go out without anyone remembering to send them. Orders are processed, tracked, and updated without manual effort."

[Body paragraph 3 — bold white]
"You take a day away from the business and it keeps running." [/bold] "Your senior team does senior work. You do the work you love."

[Primary CTA — margin-top 32px]
"Get Your Free AI Audit" [ph-arrow-right]
```

**RIGHT COLUMN — "Monday Morning" Dashboard Card:**
Dark card (--bg-card, --border, --r-lg, padding 32px, --shadow-card).
```
[Card header: flex, space-between]
"7:30 AM — Monday" [Syne 700, 13px, white]
"Your Business on Autopilot" [Syne 400, 12px, --text-secondary]

[4 status items — each: flex row, gap 12px, bg --bg-card2, --r-md, padding 12px 16px, border 1px solid rgba(46,204,143,0.2)]

Item 1:
[ph-check-circle, 16px, --accent] 
"Weekly performance report — generated & sent"
[ph-clock, 12px, --text-muted] "06:00"

Item 2:
[ph-check-circle, --accent]
"14 new customer inquiries — auto-responded"
"07:12"

Item 3:
[ph-check-circle, --accent]
"3 new orders — processed & confirmed"
"07:21"

Item 4:
[ph-check-circle, --accent]
"Follow-up sequences — 6 leads contacted"
"07:30"

[Bottom stats row — border-top --border, padding-top 20px, margin-top 20px, flex space-between]
Left: "0" [JetBrains Mono, 28px, --accent] + "Manual tasks required" [Syne 400, 12px, --text-secondary]
Right: "18.4 hrs" [JetBrains Mono, 18px, white] + "Saved this week alone" [Syne 400, 12px, --text-secondary]
```

---

### SECTION 16: FINAL CTA BLOCK
**Background:** Full --accent (#2ECC8F) — the ONLY full-teal section on the site.
Texture overlay: `repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 20px)` for subtle pattern.
**Layout:** Centered content, max-width 680px.
**Padding:** 100px 0.

```
[H2 — Instrument Serif, white, centered, clamp(34px, 4vw, 52px)]
"Ready to find out exactly where AI can transform your operations?"

[Body — Syne 400, 17px, rgba(255,255,255,0.80), centered, margin-bottom 36px]
"The audit is free. The report is yours to keep. The decision to go further is entirely yours."

[CTA BUTTON — INVERTED: white bg, --text-dark color, --r-pill]
"Get Your Free AI Audit" [ph-arrow-right, dark]
[Hover: bg #e8e8e8, box-shadow: 0 0 28px rgba(255,255,255,0.20), translateY(-2px)]

[Sub-note — Syne 400, 13px, rgba(255,255,255,0.60), centered, margin-top 14px]
"We reach out by WhatsApp within 24 hours. No pressure. No sales script."
```

---

### SECTION 17: FAQ
**Background:** #0A0A0A.
**Layout:** Accordion, max-width 760px, centered.
**Padding:** 100px 0.

```
[EYEBROW — centered] "Questions Answered"
[H2 — Instrument Serif, centered] "Got questions? We have answers."
```

**5 FAQ items — accordion, border-bottom --border per item:**

```
Q1: "What exactly is in the free 7-day audit?"
A1: "Over 7 days, we map your operations, interview your team, and identify every place AI and automation can meaningfully improve efficiency, output, or customer experience. You receive a comprehensive written report at the end — specific opportunities, prioritized by impact, with a clear explanation of what each one is worth. This is a real deliverable, not a sales brochure. It is yours to keep regardless of what you decide next."

Q2: "Is this only for edtech and agencies, or can my F-commerce or e-commerce business benefit?"
A2: "Absolutely — e-commerce, F-commerce, and online retail businesses are some of our best-fit clients. If your business handles customer messages, processes orders, manages follow-ups, or deals with repetitive daily operations, we can build AI systems that save you significant time and money. The type of business matters less than whether you have recurring processes that could be automated."

Q3: "We already use some AI tools. Is this still for us?"
A3: "Yes, and this is very common. Most businesses we work with have tried tools like ChatGPT, Zapier, or Meta automation on their own. The problem is almost never the technology — it is integration, fit, and adoption. We build systems that match exactly how your business operates, which is fundamentally different from plugging in a generic tool."

Q4: "What if we are not happy with the results?"
A4: "Simple and unconditional. If your business is not transformed to your satisfaction within 7 weeks, we work with you for another 7 weeks at zero additional cost. No renegotiations, no fine print, no conditions. We are not satisfied until you are."

Q5: "How much does the full program cost?"
A5: "Investment is scoped after the audit, based on the size of your team and the complexity of what we need to build. The audit is always free and requires no commitment. Book a conversation and we will give you a clear picture of what a typical engagement looks like for a business your size."
```

---
---

## 7. PAGE 2: ABOUT — COMPLETE LAYOUT & COPY

---

### ABOUT HERO
**Background:** #0A0A0A with grain texture.
**Padding:** 160px 0 80px (extra top for nav).
**Layout:** Centered, max-width 800px.

```
[EYEBROW — centered] "About Zaktomate"

[H1 — Instrument Serif, display size, centered]
"Built in Bangladesh, for Bangladeshi businesses."

[Body — Syne 400, 18px, --text-secondary, centered, max-width 600px, margin auto]
"We have watched brilliant business owners get buried under the operational weight of the businesses they built. That is the problem we exist to solve."
```

---

### ABOUT: ORIGIN STORY
**Background:** #F4F1EB (--bg-light).
**Layout:** Two-column equal grid. Stacked on mobile.
**Padding:** 100px 0.

**Left column:**
```
[EYEBROW — dark] "Our Story"

[H2 — Instrument Serif, dark]
"We know exactly what it feels like to watch a great business get slowed down by bad systems."

[Body — Syne 400, 16px, #555, line-height 1.75]
Paragraph 1:
"We have worked closely with business owners across Bangladesh who built something genuinely impressive — a real team, real customers, real traction. And then watched their growth stall not because of a lack of ambition, but because the operations underneath the business could not keep up."

Paragraph 2:
"Good people stuck doing work a machine should handle. Founders pulled out of the work they love and into management, admin, and firefighting. Businesses that could serve twice as many customers if only the systems were built to handle the volume."

Paragraph 3 — bold:
"That is not a talent problem. It is a systems problem — and it is one we know exactly how to solve."
```

**Right column:**
```
[EYEBROW — dark] "Why We Started"

[H2 — Instrument Serif, dark]
"Zaktomate was founded with one conviction."

[Body]
Paragraph 1:
"The gap between the business you have built and the business you know it can be is almost always an operations gap. And in 2025, AI is the fastest and most cost-effective way to close it."

Paragraph 2:
"We started with a simple question: why are the AI-powered systems used by the world's fastest-growing companies not available to Bangladeshi businesses? The tools exist. The expertise exists."

Paragraph 3 — last sentence bold dark:
"What was missing was a team that would do the work end to end, customize it for how local businesses actually operate, and stay until the transformation was real." [bold] "That is what we built."
```

---

### ABOUT: FOUNDERS SECTION
**Background:** #F4F1EB (continuation of above section or separate).
**Layout:** Three-column grid of founder cards.
**Card size:** Allow generous height for photos — aspect-ratio 3/4 for photo area minimum.

**Section header:**
```
[H2 — Instrument Serif, dark, centered, margin-bottom 48px]
"The team behind Zaktomate."
```

**Three Founder Cards (white bg, --border-light border, --r-lg, overflow hidden):**

Each card structure:
- Photo area: width 100%, aspect-ratio 3/4 minimum, bg linear gradient (dark green tones), overflow hidden. **PLACEHOLDER: "Founder Photo — [Name]" text centered.** Real photos should be warm, natural, professional-casual portraits. Bangladeshi context. Direct eye contact. Confident.
- Below photo overlay: name + role in Syne, white, on dark gradient overlay at bottom of photo
- Body: padding 24px 24px 28px

```
[Card 1]
Photo area: Aspect ratio 3/4, placeholder "[Founder 1 Photo]"
Name: "[Founder 1 Name]" — Syne 700, 18px, white (overlay on photo)
Role tag: "Co-Founder & CEO" — Syne 700, 11px, --accent, uppercase, letter-spacing 0.12em

[Body bio]
PLACEHOLDER — Adapt from https://www.zaktomate.com/about
Focus on: AI automation expertise, entrepreneurial background in Bangladesh, their personal motivation for starting Zaktomate, and what they bring to client engagements.
[Syne 400, 13px, --text-dark (#141414 because on white card), line-height 1.7]

[Card 2]
Role tag: "Co-Founder & CTO"
Bio: Adapt from about page — focus on technical background, AI systems expertise, what they build and how.

[Card 3]
Role tag: "Co-Founder & COO"
Bio: Adapt from about page — focus on operations and delivery, ensuring every client gets results.
```

**NOTE FOR DEVELOPER:** The Zaktomate website (zaktomate.com/about) is JavaScript-rendered and cannot be fetched programmatically. The founder names, photos, and bios must be manually copied from that page by a human and inserted into these three cards. Do not invent or hallucinate founder information.

---

### ABOUT: AUTHORITY MARKERS
**Background:** #0A0A0A with grain texture.
**Layout:** 3×2 grid of icon + fact chips. Max-width 900px centered.
**Padding:** 80px 0.

```
[Six authority cells — each: --bg-card bg, --border, --r-md, padding 24px, flex column, gap 10px]

Cell 1: [ph-map-pin, 24px, --accent] + "Based in Dhaka, Bangladesh" [Syne 700, 15px, white] + "Understanding your market and your customers" [Syne 400, 13px, --text-secondary]

Cell 2: [ph-gear, 24px, --accent] + "Done-For-You Delivery" [Syne 700, 15px, white] + "We do the work. You see the results." [Syne 400, 13px, --text-secondary]

Cell 3: [ph-seal-check, 24px, --accent] + "7-Week Satisfaction Guarantee" [Syne 700, 15px, white] + "Not transformed? We work another 7 weeks free." [Syne 400, 13px, --text-secondary]

Cell 4: [ph-rocket-launch, 24px, --accent] + "Specialists in AI Automation" [Syne 700, 15px, white] + "Custom workflows, not off-the-shelf tools." [Syne 400, 13px, --text-secondary]

Cell 5: [ph-users, 24px, --accent] + "End-to-End: Audit to Adoption" [Syne 700, 15px, white] + "We do not hand off and disappear." [Syne 400, 13px, --text-secondary]

Cell 6: [ph-infinity, 24px, --accent] + "Lifetime AI Consulting" [Syne 700, 15px, white] + "We remain your AI partners after the program." [Syne 400, 13px, --text-secondary]
```

---

### ABOUT: MISSION STATEMENT
**Background:** #111111 (--bg-mid), --border border top/bottom, inside a dark card with overflow hidden.
**Layout:** Centered, max-width 800px, generous padding.

Large decorative opening quote mark: position absolute, top -20px, left 24px, Instrument Serif, 280px, rgba(46,204,143,0.04), pointer-events none.

```
[Blockquote — Instrument Serif italic, clamp(22px, 3vw, 34px), white, centered, max-width 800px, line-height 1.45, margin auto, position relative z-index 1]
"Every business owner who builds something worth running deserves operations that are worthy of it."

[Body below — Syne 400, 15px, --text-secondary, centered, max-width 640px, margin 24px auto 0, line-height 1.7]
"Zaktomate exists to close the gap between the business you have built and the business you know it can be. We do that by bringing the right AI systems to your specific operation, and by staying with you until those systems are running the way they should."
[Line break]
"Your team is your biggest asset. We make sure your systems are worthy of them."

[Primary CTA — centered, margin-top 36px]
"Get Your Free AI Audit" [ph-arrow-right]
```

---
---

## 8. PAGE 3: SERVICES / CORE OFFER — COMPLETE LAYOUT & COPY

---

### OFFER PAGE HERO
**Background:** #0A0A0A with grain texture.
**Padding:** 160px 0 80px.

```
[EYEBROW — centered] "The 7-Week AI-First Business Transformation"

[H1 — Instrument Serif, display, centered, max-width 900px, margin auto]
"Your Operations, Rebuilt for Scale — in 7 Weeks or We Work for Free"

[Body — Syne 400, 18px, --text-secondary, centered, max-width 560px, margin 20px auto 36px]
"A done-for-you AI transformation for Bangladeshi online businesses, edtech platforms, agencies, and e-commerce brands."

[Primary CTA — centered]
"Start with the Free Audit" [ph-arrow-right]
```

---

### OFFER: PROBLEM
**Background:** #F4F1EB.
**Layout:** Two-column, equal, 32px gap.

```
[EYEBROW — dark] "The Problem We Solve"
[H2 — Instrument Serif, dark, max-width 680px]
"Your team is capable. Your systems are not."

[Left paragraph]
"Your staff spends hours every week doing things AI could handle in seconds. Customer messages pile up. Order updates need to be manually sent. Reports take your best people away from strategic work. Data gets entered more than once. Internal handoffs get dropped."

[Right paragraph]
"You are paying for talent and losing it to admin. And the cost is not just productivity — when your team is stretched thin on operational busywork, your customers feel it. Response times slow down. The customer experience suffers. You lose clients you should have kept."
```

---

### OFFER: HOW IT WORKS (3-Step — same visual system as homepage)
Repeat of homepage Section 6. Include "Step 1 — Free" badge on Card 1.

---

### OFFER: AUTOMATION EXAMPLES (EXPANDED)
Same 6 cards as homepage Section 7, but each card has an expanded "Best for:" label:

```
Card 1 badge: "Best for: F-Commerce, E-Commerce, Edtech"
Card 2 badge: "Best for: E-Commerce, F-Commerce, All Businesses"
Card 3 badge: "Best for: Edtech, Coaching, Service Agencies"
Card 4 badge: "Best for: E-Commerce, F-Commerce"
Card 5 badge: "Best for: Agencies, Edtech, All Businesses"
Card 6 badge: "Best for: All Businesses with Teams"
```

---

### OFFER: FULL FEATURE SPEC LIST
**Background:** #0A0A0A with grain texture.
**Layout:** 2-column grid of spec items.

```
[EYEBROW — centered] "Everything Included"
[H2 — centered] "Full feature list — no surprises, no hidden costs."

[16 spec items — 2-column grid, each: bg --bg-card, --border, --r-md, padding 14px 16px, flex row, gap 10px]
[ph-check-circle, 16px, --accent] + [Syne 400, 13px, --text-secondary]

1.  "7-day operational audit and full written report"
2.  "Custom AI workflow design for your specific business"
3.  "Custom automation build — not templates"
4.  "Third-party tool integrations (Facebook, WhatsApp, Google, etc.)"
5.  "Hosting and servers — included for program duration"
6.  "All software subscriptions — paid by us for program duration"
7.  "Full staff training — every role, every system"
8.  "Video tutorial library your team can reference forever"
9.  "Written process documentation"
10. "Unlimited iterations and improvements on demand"
11. "Weekly progress check-ins"
12. "Performance tracking — we monitor everything"
13. "Results reporting — clear updates throughout"
14. "Results analysis and next-step recommendations"
15. "Lifetime AI consulting access after program"
16. "7-week satisfaction guarantee with free extension"
```

---

### OFFER: GUARANTEE (Repeat — same as homepage Section 11)
Include the seal visual and full copy again. Important conversion element — show it twice.

---

### OFFER: CASE STUDIES (Same as homepage Section 13)

---

### OFFER: FINAL CTA
```
[Centered, margin-top 48px]
"Start with the Free Audit — no commitment required"
[Body: "The 7-day audit is a complete, standalone deliverable. It gives you a clear picture of your AI opportunities with no obligation to proceed. Most clients choose to move forward. But the decision is entirely yours."]

[Primary CTA] "Get Your Free AI Audit" [ph-arrow-right]

[Sub note]
"Not satisfied in 7 weeks? We work another 7 weeks free."
```

---

### OFFER: FAQ (3 questions specific to the program)

```
Q1: "What does the full 7-week program cost?"
A1: "Investment is scoped after the audit, based on the size of your team and the complexity of what we need to build. The audit is always free. Book a conversation and we will walk you through what a typical engagement looks like."

Q2: "What if our team doesn't end up using what you build?"
A2: "This is exactly what Bonus 02 (full staff training), Bonus 04 (unlimited iterations), and our adoption-first approach are designed to prevent. We train every relevant team member, iterate on the system until it fits how they actually work, and monitor adoption throughout the program. If the team is not using it, we have not finished the job."

Q3: "Can we start with just the audit and decide later?"
A3: "Yes — and that is exactly how we recommend approaching it. The free 7-day audit is a complete deliverable with no strings attached. It gives you a full written report of your AI opportunities. Most clients choose to proceed to the full program after seeing the report, but there is absolutely no obligation to do so."
```

---
---

## 9. PAGE 4: GET YOUR FREE AI AUDIT — COMPLETE LAYOUT & COPY

---

### AUDIT BOOKING HERO
**Background:** Top half #0A0A0A with grain. Bottom half (where form sits) #111111.
**Padding:** 140px 0 60px.

```
[EYEBROW — centered] "Your Entry Point — Free"

[H1 — Instrument Serif, display, centered, max-width 700px, margin auto]
"Let's spend 7 days in your business."

[Body — Syne 400, 18px, --text-secondary, centered, max-width 560px, margin 20px auto 0]
"Book your free AI audit. We will map your operations, identify every opportunity, and hand you a comprehensive written report. No charge. No obligation."
```

---

### AUDIT BOOKING: FORM + INFO
**Layout:** Two-column grid, equal. Stacked on mobile (form first, info below).
**Padding:** 0 0 80px.

**LEFT COLUMN — Booking Form Card:**
Background: #F4F1EB (warm off-white card). Padding 40px. --r-lg.

```
[Card header]
[H3 — Instrument Serif, 26px, --text-dark] "Book Your Free AI Audit"
[Subtitle — Syne 400, 14px, #777] "We will reach out by WhatsApp within 24 hours."

[FORM FIELDS — each with label above, field below]

Field 1 — required:
Label: "Your Full Name" [Syne 700, 13px, --text-dark]
Input: text, placeholder "e.g. Rahim Uddin"

Field 2 — required:
Label: "Company Name" [Syne 700, 13px, --text-dark]
Input: text, placeholder "e.g. My Online Shop"

Field 3 — required:
Label: "WhatsApp Number" [Syne 700, 13px, --text-dark]
Input: tel — rendered as a prefix + input row:
[Prefix box: "📱 +880" — bg #f0f0f0, border --border-light, border-radius 12px 0 0 12px, Syne 600, 14px, #555, padding 13px 14px]
[Input: border-radius 0 12px 12px 0, border-left none]
Placeholder: "XXXX-XXXXXX"
NOTE: No emoji in prefix — use ph-phone icon instead of the phone emoji

Field 4 — optional:
Label: "Email Address" [Syne 700, 13px, --text-dark] + "(optional)" [Syne 400, 12px, #888]
Input: email, placeholder "you@yourbusiness.com"
Sub-note below: [Syne 400, 11px, #aaa] "We primarily reach out by WhatsApp — email is rarely used."

Field 5 — optional:
Label: "Briefly describe your business and your biggest challenge" [Syne 700, 13px, --text-dark] + "(optional)"
Textarea: min-height 100px, resize vertical, line-height 1.6
Placeholder: "e.g. We run an edtech platform with 200 students. Our biggest issue is manual onboarding and customer messages taking too much of our team's time..."
Max chars: 400. Show live character counter below textarea.

[SUBMIT BUTTON — full width, --accent bg, --r-pill, Syne 700, 15px, white, padding 16px, flex center]
[ph-rocket-launch icon, 18px] + "Get My Free AI Audit"
[Hover: --accent-hover, translateY(-1px), --shadow-glow]

[Form note — Syne 400, 12px, #888, centered, margin-top 12px]
"No spam. No pressure. Just a real conversation about your business."

[What happens next — section below form, margin-top 32px]
[H4 — Syne 700, 14px, --text-dark] "What happens next:"
[3 steps — each: flex row, gap 14px]

Step 1: [Circle: 28px, --accent bg, white, Syne 700, 12px, centered] "1" + [Syne 400, 13px, #666] "We receive your details and review your business context within the hour."
Step 2: [Circle] "2" + "We WhatsApp you within 24 hours to schedule a brief intake conversation."
Step 3: [Circle] "3" + "We begin the 7-day audit and deliver your comprehensive written report at the end."
```

**Form validation rules:**
- Name: required, minLength 2
- Company: required, minLength 2
- WhatsApp: required, must be numeric, 9–11 digits (local BD format after +880 prefix)
- Email: optional, validates format only if filled
- Submit button: disabled until Name + Company + WhatsApp are valid
- On valid submit: replace form with success card:
  - [ph-check-circle, 48px, --accent]
  - [H3] "We have received your request."
  - [Body] "Expect a WhatsApp message from us within 24 hours to schedule your free AI audit."

---

**RIGHT COLUMN — Audit Info:**

```
[EYEBROW] "What the Audit Covers"

[H3 — Instrument Serif, 32px, white] "A real diagnostic. A real report. Yours to keep."

[Body — Syne 400, 16px, --text-secondary, margin-bottom 40px]
"This is not a sales call dressed up as advice. It is a genuine 7-day operational audit that gives you real answers about where AI fits in your business — and what each opportunity is worth."

[4 audit detail items — each: --bg-card bg, --border border, --r-md, padding 18px, flex row, gap 14px]

Item 1:
[ph-magnifying-glass, 20px, --accent]
Title: "Workflow Mapping" [Syne 700, 14px, white]
Body: "We map every major workflow in your business — from customer communication to internal operations to reporting." [Syne 400, 13px, --text-secondary]

Item 2:
[ph-lightning, 20px, --accent]
Title: "Opportunity Identification"
Body: "We identify every place where AI and automation can save time, reduce errors, and improve your customer experience."

Item 3:
[ph-presentation-chart, 20px, --accent]
Title: "Prioritized Written Report"
Body: "You receive a clear, prioritized written report — specific opportunities, what each is worth, and a recommended path forward."

Item 4:
[ph-rocket-launch, 20px, --accent]
Title: "Your Transformation Roadmap"
Body: "A clear picture of what transformation looks like for your specific business — whether you work with us afterward or not."

[Contact info card — --bg-card, --border, --r-lg, padding 24px, margin-top 32px]
[Label — Syne 700, 13px, --text-muted, uppercase, letter-spacing 0.10em, margin-bottom 16px] "Direct Contact"

[Contact row 1 — flex, gap 12px, text-decoration none]
[Icon box: 36×36, bg #25D366 (WhatsApp green), --r-md, ph-phone icon, white, 18px]
[Text: Syne 600, 15px, white] "WhatsApp: +8801793336545"
[Sub: Syne 400, 12px, --text-secondary] "Tap to open WhatsApp"
[Entire row is a link: href="https://wa.me/8801793336545"]

[Contact row 2]
[Icon box: 36×36, bg --bg-card2, --border, ph-map-pin, --text-secondary]
"Dhaka, Bangladesh"

[Contact row 3]
[Icon box: ph-clock, --text-secondary]
"Available 24/7"
```

---
---

## 10. IMAGE & VISUAL ASSET BRIEF

### 10.1 — Hero Section Photo (CRITICAL)
**Location:** Homepage Hero, right column.
**Type:** High-quality photograph. Not a UI mockup. Not a stock photo. Real.
**Subject:** A Bangladeshi business owner — male or female, professional-casual, early 30s to mid 40s. Clearly South Asian appearance, Bangladeshi cultural context.
**Scene:** Seated at a clean, modern desk in a well-lit office in Dhaka. Looking at a phone or laptop with a calm, satisfied expression. This is the AFTER STATE — relaxed, in control, not stressed. Think: "My business is running itself and I am checking to confirm."
**Lighting:** Warm natural light from a window. Soft, not harsh studio.
**What it is NOT:** Stock-photo handshake. Person with furrowed brow. Corporate suit and tie. Stiff pose. Stock photo background.
**Overlay element:** A small floating card (glassmorphism) in the bottom-left of the photo:
- Content: [ph-check-circle icon, --accent] + "18.4 hrs saved this week" in JetBrains Mono 13px --accent
- Style: rgba(10,10,10,0.85) bg, backdrop-filter blur(12px), 1px --border, --r-md, padding 12px 16px
**Treatment:** border-radius 20px, --shadow-image, continuous 8px float animation over 7s (very subtle).
**AI Image generation prompt if photography is unavailable:**
"Professional portrait photo of a Bangladeshi business owner, male or female, early 30s, sitting at a clean modern office desk in Dhaka Bangladesh, warm natural window light, professional casual clothing, slight calm smile looking at laptop or phone, satisfied and relaxed expression representing success and peace of mind, warm shallow depth of field, no harsh shadows, photorealistic, editorial quality, warm tones"

---

### 10.2 — Guide / Mentor Section Photo (About teaser on homepage + About page)
**Location:** Homepage Guide section, left column. Also About page hero area.
**Type:** Team photo or lead founder portrait.
**Subject:** One to three Zaktomate team members in a natural setting — a co-working space or modern office in Dhaka. Confident, approachable. Slight smiles. Direct eye contact. Not stiff.
**Style:** Natural light, warm tones. Real environment. Feels like a real team, not a stock photo.

---

### 10.3 — Three Founder Portraits (About page)
**Location:** About page founders section — three individual cards.
**Requirements:** Each founder gets their own portrait photo. Minimum displayed photo area: aspect-ratio 3/4 (portrait orientation) at full card width. Photo should show head and upper body. Expression: warm, confident, professional-casual. Same visual style as 10.2.
**IMPORTANT:** Photo area in cards must be generous — minimum 300px height on desktop. Do not crop to a tiny thumbnail.

---

### 10.4 — Benefit Block Visuals (3 images)
These are visual aids inside the alternating benefit rows in Section 8.

**Visual 1 — "Deliver More" (dark card on light section):**
A styled metric panel showing before/after data. Design it as a dark card (--bg-card, --r-lg, padding 32px) with:
- A simple bar chart: 4 bars, first set muted/low (--accent at 25% opacity), second set full teal (--accent). Labels: Response Speed, Onboard Speed, Team Capacity, Customer Satisfaction.
- Three metric rows below: "< 2 min — Average AI response time", "100% — Consistent onboarding", "2x–3x — Capacity increase"
- All labels in Syne, values in JetBrains Mono --accent.
This is a designed component, not a chart library output.

**Visual 2 — "Earn More" (dark card on light section):**
A simple revenue trend graphic. Show a minimal upward-trending area chart. Two zones marked: "Before: Manual Processes" (muted/grey, lower) and "After: Zaktomate" (teal, higher). Clean, minimal. No distracting colors. No Google-style multicolor charts.

**Visual 3 — "Do the Work You Love" (photograph):**
An aspirational photo of a Bangladeshi edtech founder (or business owner) doing the work they love — teaching, recording content, or consulting in an energized, focused state. Warm lighting. NOT behind a laptop looking stressed. They look exactly where they want to be. Bangladeshi context.
**AI Generation prompt:** "Photo of a Bangladeshi educator or content creator, mid 30s, standing at a whiteboard or in front of a camera in a modern studio or classroom, energized and engaged, teaching or presenting, warm lighting, professional casual clothing, clearly enjoying their work, photorealistic, editorial quality"

---

### 10.5 — Aspiration / Monday Morning Dashboard
This is a **designed component** (dark card), not a photo. See Section 6 SECTION 15 for full layout spec.

---

### 10.6 — Guarantee Seal
**Type:** Custom SVG illustration — must be purpose-designed, not a stock badge template.
**Design:** Circular stamp/seal. Outer ring 2px solid --accent. Inner dashed ring (stroke-dasharray: 8 4) at 8px from outer. Center content as specified in Section 6 SECTION 11.
**Two color versions:** Dark-on-light (for guarantee section on light bg) + light-on-dark (for offer page repeat).

---

### 10.7 — Noise/Grain Texture SVG
```html
<!-- Save as /assets/noise.svg -->
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
  <filter id="noise">
    <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
    <feColorMatrix type="saturate" values="0"/>
  </filter>
  <rect width="200" height="200" filter="url(#noise)" opacity="1"/>
</svg>
```
Apply as: `background-image: url('/assets/noise.svg'); background-repeat: repeat; opacity: 0.035;` on all dark section `::after` pseudo-elements.

---
---

## 11. BACKEND, FORMS & INTEGRATIONS

### 11.1 Audit Booking Form — Technical Spec
**Fields and validation:**
| Field | Type | Required | Validation |
|---|---|---|---|
| Full Name | text | Yes | minLength: 2 |
| Company Name | text | Yes | minLength: 2 |
| WhatsApp | tel | Yes | 9–11 digits (BD local format after +880 prefix) |
| Email | email | No | Valid email format only if filled |
| Challenge description | textarea | No | maxLength: 400 |

**Submit behavior:**
1. Client-side validation in real time (green border on valid, red/amber on invalid)
2. Submit button disabled until Name + Company + WhatsApp valid
3. On submit: POST to chosen backend (see below)
4. Replace form with success state card (see Section 9)
5. Fire GA4 event: `form_submit` with label `audit_booking`

**Backend options (choose one):**
- **Option A — Recommended: Make.com / n8n webhook**
  POST form data to a Make.com or n8n webhook URL. The automation then: (a) sends a WhatsApp message to +8801793336545 notifying the team of a new lead, (b) optionally sends a WhatsApp acknowledgement to the lead's number, (c) appends a row to a Google Sheet as CRM. This is the most appropriate stack for an AI automation company.
- **Option B — Netlify Forms** (if site is on Netlify): add `netlify` attribute to form. Submissions go to dashboard + email notification. Simple, zero backend.
- **Option C — Formspree.io**: form action to Formspree endpoint. Submissions forwarded to email. No backend needed.

### 11.2 WhatsApp Integration
**Float button (all pages):**
- Position: fixed, bottom-right, 28px from each edge
- Icon: WhatsApp SVG logo (white fill on #25D366 background circle)
- Size: 56×56px, border-radius 50%
- Link: `https://wa.me/8801793336545?text=Hi%20Zaktomate%2C%20I%27m%20interested%20in%20the%20free%20AI%20audit`
- Behavior: Appears 3 seconds after page load (CSS transition from scale(0.5)/opacity(0) to scale(1)/opacity(1))
- Animation: slow pulse ring (see Section 4.11)

**All primary CTA buttons** ("Get Your Free AI Audit") should either:
a) Link to the /audit booking page, OR
b) Link directly to `https://wa.me/8801793336545?text=Hi%20Zaktomate%2C%20I%27d%20like%20to%20book%20the%20free%20AI%20audit` depending on preference.

### 11.3 Contact Information (used throughout)
```
WhatsApp & Phone: +8801793336545
Location: Dhaka, Bangladesh
Availability: 24/7
Primary channel: WhatsApp
Secondary channel: Email [add email when available]
```

### 11.4 Analytics Setup
Install via Google Tag Manager (one GTM container, manage all tags from dashboard).

**Required tags:**
- Google Analytics 4 — GA4 measurement ID
- Facebook Pixel — for retargeting on Meta

**GA4 Events to track:**
| Event name | Trigger |
|---|---|
| `form_submit` | Audit booking form submission |
| `cta_click` | Any "Get Your Free AI Audit" button click (label: section name) |
| `whatsapp_click` | Float button or any WhatsApp link click |
| `scroll_depth` | At 25%, 50%, 75%, 100% of page height |
| `time_on_page_60` | User has been on page > 60 seconds |
| `faq_open` | Any FAQ item opened |

**Heatmapping:** Install Hotjar (free tier) for heatmaps and session recordings. Essential for post-launch optimization.

### 11.5 Lead CRM
Minimum viable: Google Sheet as CRM via Make.com webhook. Columns: Timestamp, Name, Company, WhatsApp, Email, Message, Source Page.

---
---

## 12. SEO & AI-SEARCH REQUIREMENTS

### 12.1 Standard SEO — Per Page

| Page | Title tag (max 60 chars) | Meta description (max 155 chars) |
|---|---|---|
| Home | Free AI Business Audit for Bangladeshi Online Businesses | Zaktomate builds custom AI automation systems for Bangladeshi edtech, agencies, and e-commerce businesses. Free 7-day AI audit. Based in Dhaka. |
| About | About Zaktomate — AI Automation Agency, Dhaka Bangladesh | Meet the Zaktomate team. We build custom AI systems for Bangladeshi businesses. Based in Dhaka, delivering real transformation in 7 weeks. |
| Services | 7-Week AI Business Transformation — Zaktomate Bangladesh | Full done-for-you AI transformation for Bangladeshi businesses. Custom systems, full training, all subscriptions paid. 7-week guarantee. |
| Audit | Book Your Free 7-Day AI Business Audit — Zaktomate | Get a free 7-day AI audit for your business. We map your operations, find every automation opportunity, and deliver a written report. Dhaka, Bangladesh. |

**H1:** One per page only. Contains primary keyword naturally.
**Image alt text:** All images need descriptive alt text. No empty alts.
**Canonical tags:** On all pages.
**Sitemap:** `/sitemap.xml` — include all 4 pages.
**robots.txt:** Standard configuration, no pages blocked.

### 12.2 Structured Data (JSON-LD — add to `<head>` of all pages)
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Zaktomate",
  "description": "AI automation agency in Bangladesh providing 7-week business transformation for edtech founders, agency owners, and online business owners.",
  "areaServed": "Bangladesh",
  "url": "https://www.zaktomate.com",
  "telephone": "+8801793336545",
  "openingHours": "Mo-Su 00:00-24:00",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Dhaka",
    "addressCountry": "BD"
  },
  "offers": {
    "@type": "Offer",
    "name": "Free 7-Day AI Business Audit",
    "price": "0",
    "priceCurrency": "BDT"
  },
  "sameAs": ["[Facebook URL]", "[LinkedIn URL]"]
}
```

Add `FAQPage` schema from FAQ questions on each page where FAQ exists.

### 12.3 AI Search Optimization (ChatGPT, Gemini, Perplexity)
- All body copy is already at 7th-grade reading level. Maintain this.
- Comparison table uses proper HTML `<table>` with `<th>` and `<td>` — AI models parse tables efficiently.
- Create (but do not add to main nav) a hidden-but-indexed page: `/ai-automation-agency-bangladesh` — written in 3rd person, structured as a factual brief about who the best AI automation agency for Bangladeshi businesses is, naming Zaktomate with specific reasons. This is what AI search engines cite.
- Include "Dhaka" and "Bangladesh" naturally in at least one paragraph per page to geo-anchor.

---
---

## 13. PERFORMANCE & TECHNICAL STACK

### 13.1 Recommended Stack (in priority order)

**Option A — Webflow (Recommended for this design):**
Webflow handles the animation complexity natively (Webflow Interactions), CMS for case studies/blog, excellent responsive control, built-in form handling, CDN included. Best for non-developer teams. Webflow Lottie handles any complex animations.

**Option B — Next.js 14 + Tailwind CSS:**
For developer teams. Framer Motion for animations. React Hook Form + Zod for validation. Deploy on Vercel (free CDN). Full control.

**Option C — WordPress + Breakdance Builder:**
Use Breakdance (not Elementor — faster, more modern). Host on Kinsta or WP Engine. Cloudflare CDN required for performance. Minimize plugins.

### 13.2 Performance Targets
- LCP (Largest Contentful Paint): < 2.5s
- CLS (Cumulative Layout Shift): < 0.1
- INP: < 200ms
- PageSpeed Scores: > 90 mobile, > 95 desktop

### 13.3 Image Optimization
- All photos: WebP format, compressed < 200KB
- Use `srcset` and `sizes` for responsive images
- Hero photo: lazy=false (above fold), all others lazy=true
- No image wider than 1440px needed

### 13.4 Font Loading
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Syne:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
/* All fonts use font-display: swap to prevent invisible text during load */
```

### 13.5 Mobile Requirements
- Minimum tap target: 44×44px (all buttons and interactive elements)
- Font size: minimum 16px on mobile inputs (prevents iOS auto-zoom)
- Hero: single column, photo stacks below text
- All CTA buttons: full-width on mobile
- Navigation: hamburger overlay on mobile
- Comparison table: horizontally scrollable with gradient right-edge fade
- WhatsApp button: always visible, bottom-right, thumb-zone

### 13.6 Accessibility
- All interactive elements: `aria-label`, `role`, `tabindex` as appropriate
- FAQ accordion: `aria-expanded`, `aria-controls` on question buttons
- Form fields: `<label for="id">` properly connected
- Images: descriptive `alt` text
- Color contrast: all text meets WCAG AA minimum (4.5:1 for body, 3:1 for large text)
- Keyboard navigation: all interactive elements reachable via Tab

---
---

## 14. COMPLETE MASTER CONTENT CHECKLIST

### Pages to Build (Priority Order)
1. HOME — primary conversion page
2. GET YOUR FREE AI AUDIT — booking/contact page
3. SERVICES / CORE OFFER — long-form sales page
4. ABOUT — trust builder
5. [Future] Case Study: Insafiayah Gadget — individual page
6. [Future] Case Study: Valor Fragrance — individual page
7. [Future] AI SEO page: /ai-automation-agency-bangladesh

---

### Asset Checklist

| Asset | Type | Section Used | Status |
|---|---|---|---|
| Zaktomate horizontal logo SVG | Logo | Nav, Footer | Provided (recreate from Logo_2.png) |
| Zaktomate icon-only logo | Logo | Favicon, mobile | Provided (recreate from LogoZ.jpeg) |
| noise.svg grain texture | SVG | All dark sections | Generate from spec in Section 10.7 |
| Guarantee seal | SVG illustration | Section 11, Offer page | Design from spec in Section 10.6 |
| Hero photo — after-state business owner | Photograph | Homepage hero | Commission or AI-generate (see 10.1) |
| Mentor / team photo | Photograph | Homepage guide, About | Commission or AI-generate (see 10.2) |
| Founder 1 portrait | Photograph | About founders | Real photo from founders |
| Founder 2 portrait | Photograph | About founders | Real photo from founders |
| Founder 3 portrait | Photograph | About founders | Real photo from founders |
| Benefit visual 1 — metric panel | Designed component | Benefit block 1 | Build in-browser (see 10.4) |
| Benefit visual 2 — revenue chart | Designed component | Benefit block 2 | Build in-browser (see 10.4) |
| Benefit visual 3 — founder doing work | Photograph | Benefit block 3 | Commission or AI-generate (see 10.4) |
| WhatsApp SVG icon | SVG | Float button | Download from WA brand assets |
| Phosphor Icons web font | Icon library | All pages | CDN import (see Section 3) |

---

### Copy Placeholders That Must Be Filled Before Launch

| Placeholder | Location | What to fill |
|---|---|---|
| [Founder 1 Name] | About page, card 1 | Real founder name |
| [Founder 1 Bio] | About page, card 1 | Bio from zaktomate.com/about |
| [Founder 2 Name + Bio] | About page, card 2 | Same |
| [Founder 3 Name + Bio] | About page, card 3 | COO, same source |
| [Client Name] — testimonial 1 | Homepage, Services page | Real client name |
| [Edtech Company Name] — testimonial 1 | Same | Real company name |
| [Client Name] — testimonial 2 | Same | Real client name |
| [Agency Name] — testimonial 2 | Same | Real company name |
| Facebook URL | Footer social | Zaktomate Facebook page URL |
| LinkedIn URL | Footer social | Zaktomate LinkedIn page URL |

---

### Section-by-Section Build Checklist (Homepage only — replicate logic for other pages)

| Section | Copy Done | Layout Spec Done | Assets Done | Animations Done |
|---|---|---|---|---|
| Nav | ✓ in §5.1 | ✓ in §5.1 | Logo needed | Scroll behavior §4.8 |
| Hero | ✓ in §6 S1 | ✓ in §6 S1 | Photo needed (§10.1) | Load sequence §4.3 |
| Wins bar | ✓ in §6 S2 | ✓ in §6 S2 | Icons (Phosphor) | Stagger reveal |
| Problem | ✓ in §6 S3 | ✓ in §6 S3 | None | Slide-in card |
| Guide | ✓ in §6 S4 | ✓ in §6 S4 | Team photo (§10.2) | Fade-up |
| Audit highlight | ✓ in §6 S5 | ✓ in §6 S5 | None (CSS glow) | Scale-in |
| Process | ✓ in §6 S6 | ✓ in §6 S6 | Icons | Stagger cards |
| Automations | ✓ in §6 S7 | ✓ in §6 S7 | Icons | Card grid stagger |
| Benefits | ✓ in §6 S8 | ✓ in §6 S8 | 3 visuals (§10.4) | Alternating reveal |
| Customer value | ✓ in §6 S9 | ✓ in §6 S9 | None | Count-up stats |
| Full offer | ✓ in §6 S10 | ✓ in §6 S10 | None | Card grid |
| Guarantee | ✓ in §6 S11 | ✓ in §6 S11 | Seal SVG (§10.6) | Scale-in seal |
| Comparison | ✓ in §6 S12 | ✓ in §6 S12 | None | Row stagger |
| Case studies | ✓ in §6 S13 | ✓ in §6 S13 | None (count-up) | Stagger cards |
| Stakes | ✓ in §6 S14 | ✓ in §6 S14 | None | Fade-up |
| Aspiration | ✓ in §6 S15 | ✓ in §6 S15 | Dashboard component | Reveal |
| Final CTA | ✓ in §6 S16 | ✓ in §6 S16 | None (teal bg) | Button glow |
| FAQ | ✓ in §6 S17 | ✓ in §6 S17 | None | Accordion JS |
| Footer | ✓ in §5.5 | ✓ in §5.5 | Logo, social icons | None |
| WA float | ✓ in §5.4 | ✓ in §5.4 | WA SVG icon | Pulse §4.11 |
| Scroll progress | — | ✓ in §4.9 | None | JS §4.9 |

---

*End of Brief — Zaktomate Website Design & Technical Specification v2.0*
*Document is complete and self-contained. No external documents required.*
*Hand this document directly to a developer, Webflow designer, or LLM for implementation.*
