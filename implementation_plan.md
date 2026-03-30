# Clove & Crown Dental — Implementation Plan

## Project Overview

**What:** Single-page demo homepage for a fictional dental practice (Clove & Crown Dental)
**Stack:** Next.js, deployed on Vercel
**Palette:** Sage & Terracotta (#7C9082, #FAF7F2, #C4836A, #2D2D2D, #D4B5A0, #F3EEE8)
**Fonts:** Playfair Display (headings) + DM Sans (body)
**Key libraries:** Lenis (smooth scroll), GSAP + ScrollTrigger + SplitType (animations), Swiper.js (hero carousel)

---

## How to Use This File

1. **Drag this file into every new Cursor chat.** No exceptions.
2. **Work one phase per chat session.** If context fills up mid-phase, commit, open new chat, drag this file in, continue.
3. **After completing tasks within a phase, tell Cursor:** *"Update the checklist in implementation_plan.md. Mark completed items. Do not remove anything."*
4. **Commit to GitHub at the end of every session.**
5. Each phase notes whether the demo brief is also needed. If yes, drag `Clove-Crown-Dental-Demo-Brief-v2.md` into the chat alongside this file.

---

## Phase 1 — Project Scaffolding

**Goal:** Initialise the project, install all dependencies, set up global config, and establish the foundation everything else builds on.
**Brief needed:** No
**Estimated scope:** Setup only, no visible UI

### Checklist

- [x] Initialise Next.js project (`npx create-next-app@latest clove-crown-dental`)
- [x] Install dependencies:
  - [x] `lenis` (smooth scroll)
  - [x] `gsap` (animations)
  - [x] `@gsap/react` (React integration)
  - [x] `split-type` (text splitting for hero animation)
  - [x] `swiper` (hero carousel)
- [x] Create folder structure:
  ```
  src/
    components/
      Navbar/
      Hero/
      TrustBar/
      Services/
      WhyChooseUs/
      AboutDentist/
      PracticeGallery/
      Communication/
      Testimonials/
      ContactCTA/
      Footer/
      ui/           ← reusable elements (Button, SectionHeading, etc.)
    lib/
      config.ts     ← site-wide constants (phone number, address, etc.)
      animations.ts ← shared GSAP utilities
    styles/
      globals.css
    app/
      page.tsx
      layout.tsx
  ```
- [x] Create `lib/config.ts` with all site constants:
  ```ts
  export const SITE_CONFIG = {
    name: "Clove & Crown Dental",
    phone: "(512) 555-0173",        // PLACEHOLDER — swap before launch
    phoneTel: "tel:+15125550173",   // PLACEHOLDER — swap before launch
    address: "123 Clove Lane, Suite 100, Austin, TX 78701",
    hours: {
      weekday: "Mon–Fri 8am–6pm",
      weekend: "Sat 9am–2pm",
    },
    social: {
      instagram: "#",
      facebook: "#",
      twitter: "#",
    },
  };
  ```
- [x] Set up CSS variables in `globals.css`:
  ```css
  :root {
    --color-sage: #7C9082;
    --color-ivory: #FAF7F2;
    --color-terracotta: #C4836A;
    --color-charcoal: #2D2D2D;
    --color-dusty-rose: #D4B5A0;
    --color-sand: #F3EEE8;
    --font-heading: 'Playfair Display', serif;
    --font-body: 'DM Sans', sans-serif;
  }
  ```
- [x] Import Google Fonts (Playfair Display 500/600/700, DM Sans 400/500/700) in layout
- [x] Set global body styles: `background: var(--color-ivory)`, `color: var(--color-charcoal)`, `font-family: var(--font-body)`
- [x] Initialise Lenis smooth scroll in layout (wrap app, start on mount, destroy on unmount)
- [x] Verify Lenis is working — page should scroll smoothly
- [x] Create reusable `<Button>` component with two variants: `primary` (terracotta bg, white text) and `secondary` (sage outline)
- [x] Create reusable `<SectionHeading>` component (Playfair Display, consistent sizing across sections)
- [x] Create `dev` branch, commit all scaffolding, push to GitHub
- [x] Add chatbot placeholder comment in layout: `<!-- CHATBOT EMBED SCRIPT HERE -->`

### Phase 1 — Done Criteria
The project runs locally with `npm run dev`. Page is blank except for the warm ivory background. Smooth scroll is active. All dependencies installed. Folder structure exists. Config constants set.

---

## Phase 2 — Navbar

**Goal:** Build the sticky navbar with backdrop blur on scroll.
**Brief needed:** Yes — for nav links, phone number placement, CTA spec

### Checklist

- [x] Build `<Navbar>` component with:
  - [x] Logo text: "Clove & Crown" in Playfair Display
  - [x] Nav links: Services | About | Reviews | Contact (smooth scroll to section anchors)
  - [x] Phone number from `SITE_CONFIG` (clickable `tel:` link)
  - [x] "Book Now" button (primary/terracotta variant)
- [x] Sticky positioning: fixed to top of viewport, full width
- [x] Backdrop blur effect: transparent on page load, transitions to semi-transparent ivory + `backdrop-filter: blur(12px)` after scrolling past 100px
- [x] Mobile responsive:
  - [x] Hamburger menu icon on mobile
  - [x] Mobile menu panel (slide-in or dropdown) with all nav links + phone number + Book Now
  - [x] Menu closes on link click
- [x] z-index high enough to sit above hero carousel
- [x] Commit and push

### Phase 2 — Done Criteria
Navbar is sticky, transparent on load, blurs on scroll. All links present. Phone number clickable. Mobile menu works. Nav doesn't overlap or get hidden behind any content.

---

## Phase 3 — Hero Section

**Goal:** Build the full-bleed hero carousel with content overlay, split text animation, and parallax.
**Brief needed:** Yes — for headline copy, CTA text, carousel specs

### Checklist

- [x] Build `<Hero>` component with Swiper.js carousel:
  - [x] Full-viewport-width container, 85-90vh height on desktop, 70vh on mobile
  - [x] 3-4 placeholder images (use solid colour blocks or placeholder URLs initially — real stock photos added in Phase 11)
  - [x] Crossfade effect (Swiper `effect: 'fade'`), not slide
  - [x] Auto-advance every 5-6 seconds
  - [x] Pagination dots: white, small, bottom-centre, with active state
  - [x] Dots clickable to jump to specific slide
- [x] Warm dark scrim overlay: gradient from bottom (#2D2D2D at 40-50% opacity) using CSS `::after` pseudo-element or overlay div
- [x] Content overlay (positioned absolute on top of carousel):
  - [x] Eyebrow badge: "Now Accepting New Patients" — small, floating badge style with sage background
  - [x] Headline: "Dental Care That Feels Different" — Playfair Display, 3.5-4rem desktop, 2rem mobile, white text
  - [x] Subheadline: 1-2 sentences, DM Sans, white/off-white
  - [x] Primary CTA: "Book Your Visit" (terracotta button)
  - [x] Secondary CTA: "Call Us Now" (sage outline button) — shows phone from `SITE_CONFIG`
- [x] Split text animation on headline: GSAP + SplitType, characters or words animate in on page load (fade up with slight stagger)
- [x] Subtle parallax on carousel images: 10-15% vertical movement on scroll (CSS `transform: translateY()` driven by scroll position or GSAP ScrollTrigger)
- [x] Ensure text remains readable across all carousel images (scrim must work)
- [x] Mobile: stack CTAs vertically, reduce headline size, ensure dots don't overlap content
- [x] Commit and push

### Phase 3 — Done Criteria
Carousel auto-plays with crossfade. Dots work. Headline animates in on load. Parallax shifts images subtly on scroll. Text is readable on all slides. Responsive on mobile.

---

## Phase 4 — Trust Bar / Stats Row

**Goal:** Build the stats row with counter animation and staggered entrance.
**Brief needed:** No — all specs are in this file

### Checklist

- [x] Build `<TrustBar>` component:
  - [x] 4 stats in a horizontal row (centred):
    - **500+** Happy Patients
    - **4.9★** Google Rating
    - **15+** Years Experience
    - **Same-Week** Appointments Available
  - [x] Background: warm sand (#F3EEE8)
  - [x] Generous vertical padding (48-64px)
- [x] Counter animation: numbers count up from 0 when section scrolls into view
  - [x] Use Intersection Observer to trigger
  - [x] "500+" counts from 0 to 500 over ~1.5 seconds
  - [x] "4.9" counts from 0.0 to 4.9
  - [x] "15+" counts from 0 to 15
  - [x] "Same-Week" doesn't count — just fades in
  - [x] Each counter starts with a stagger delay (0ms, 150ms, 300ms, 450ms)
  - [x] Animation triggers only once (not on every scroll past)
- [x] Mobile: 2×2 grid or single column, depending on which looks cleaner
- [x] Commit and push

### Phase 4 — Done Criteria
Stats row visible with correct background. Numbers count up when scrolled into view. Stagger feels rhythmic. Only fires once. Clean on mobile.

---

## Phase 5 — Services + Why Patients Choose Us

**Goal:** Build both card-grid sections. They share similar layout patterns so building together is efficient.
**Brief needed:** Yes — for service names, descriptions, feature block copy

### Checklist

**Services Section:**
- [x] Build `<Services>` component:
  - [x] Section heading: "What We Offer"
  - [x] 6 cards in responsive grid: 3×2 desktop, 2×3 tablet, 1-column mobile
  - [x] Each card contains:
    - [x] Icon or small illustration (use a simple icon library like Lucide or heroicons, or SVG placeholders)
    - [x] Service name (bold)
    - [x] 1-line description
    - [x] "Learn More →" text link (non-functional, `href="#"`)
  - [x] Card content:
    - General Dentistry — "Comprehensive check-ups, cleanings, and preventive care"
    - Cosmetic Dentistry — "Veneers, bonding, and complete smile makeovers"
    - Teeth Whitening — "Professional whitening for a brighter, confident smile"
    - Dental Implants — "Permanent, natural-looking tooth replacement"
    - Emergency Care — "Same-day appointments for urgent dental needs"
    - Invisalign — "Clear aligners for a straighter smile without braces"
  - [x] Hover lift effect: `translateY(-4px)` + increased `box-shadow` on hover, smooth transition
  - [x] Card background: white or near-white, subtle border (1px solid #E8E4DD or similar)
  - [x] Section background: warm ivory (#FAF7F2)

**Why Patients Choose Us Section:**
- [x] Build `<WhyChooseUs>` component:
  - [x] Section heading: "Why Patients Choose Us"
  - [x] 4 feature blocks in a row (2×2 on mobile):
    - **Modern Technology** — "Advanced equipment for precise, comfortable treatment"
    - **Comfort-First Approach** — "Every visit designed around your comfort"
    - **Flexible Scheduling** — "Early morning, evening, and weekend slots available"
    - **Transparent Communication** — "No surprises — clear treatment plans and pricing"
  - [x] Each block: icon + title + 2-sentence description
  - [x] Background: warm sand (#F3EEE8) to differentiate from services section above
  - [x] Hover lift on blocks (same effect as service cards)

- [x] Commit and push

### Phase 5 — Done Criteria
Both sections render with correct content. Cards have hover lift. Grid is responsive. Visual separation between the two sections is clear.

---

## Phase 6 — About the Dentist + See Our Practice

**Goal:** Build the two-column about section and the image gallery row.
**Brief needed:** Yes — for bio copy, credential pills, gallery spec

### Checklist

**About the Dentist:**
- [x] Build `<AboutDentist>` component:
  - [x] Section heading: "Meet Your Dentist"
  - [x] Two-column layout on desktop: image left, text right. Stacked on mobile.
  - [x] Doctor name: "Dr. Sarah Chen" — Playfair Display
  - [x] Bio: 2-3 sentences (write warm, patient-first copy — e.g., "Dr. Chen believes every patient deserves to feel heard, understood, and comfortable. With over 15 years of experience and a passion for modern dental technology, she's built Clove & Crown around one idea: dental care should feel different.")
  - [x] Credential pills below bio — small rounded badges:
    - "University of Texas Dental School"
    - "American Dental Association Member"
    - "15+ Years in Practice"
  - [x] Image: stock photo placeholder (professional, approachable woman, warm tones). Use a placeholder URL or solid colour block initially.
  - [x] Image has subtle rounded corners (12px)
  - [ ] OPTIONAL: clip-path reveal animation on the photo (implement only if straightforward, skip if it risks breaking layout)

**See Our Practice:**
- [x] Build `<PracticeGallery>` component:
  - [x] Section heading: "See Our Practice"
  - [x] 3 images in a row: dental office interior, waiting area, treatment room
  - [x] Placeholder images initially (solid colour blocks or placeholder URLs)
  - [x] Rounded corners (8-12px)
  - [x] Optional: light hover zoom effect (`transform: scale(1.03)` on hover with `overflow: hidden` on container)
  - [x] Background: warm ivory (#FAF7F2)
  - [x] Mobile: stack images vertically or 1-column

- [x] Commit and push

### Phase 6 — Done Criteria
About section has two-column layout with bio, name, and credential pills. Gallery shows 3 images in a row. Both sections responsive. Placeholder images are clearly marked for replacement.

---

## Phase 7 — Communication + Testimonials

**Goal:** Build the contact channels section and the testimonials grid.
**Brief needed:** Yes — for testimonial copy, communication copy, avatar specs

### Checklist

**Communication Section:**
- [x] Build `<Communication>` component:
  - [x] Section heading: "We're Here When You Need Us"
  - [x] 3 columns, each with an icon and text:
    - **Chat:** icon + "Have a question? Chat with us right now." + "Try it now →" button/link
    - **Call:** icon + "Prefer to talk? Our phone assistant is available 24/7." + phone number from `SITE_CONFIG` (clickable)
    - **Book Online:** icon + "Schedule your appointment in seconds." + "Book Now" button (terracotta)
  - [x] Chat column slightly emphasised: subtle background highlight or larger icon
  - [x] "Try it now →" link: for now, make it a button that logs to console (`console.log('Chat widget trigger')`) — will be wired to real widget before launch
  - [x] No tool names anywhere. No "AI", "Voiceflow", "Retell" in visible text.
  - [x] Background: warm sand (#F3EEE8)
  - [x] Mobile: stack columns vertically

**Testimonials Section:**
- [x] Build `<Testimonials>` component:
  - [x] Section heading: "What Our Patients Say"
  - [x] 4 cards in responsive grid (2×2 desktop, 1-column mobile):
    - "Best dental experience I've ever had. The office is beautiful and the staff made me feel completely at ease." — Sarah T. ★★★★★
    - "I was able to book my appointment through the chat in seconds. So convenient!" — James R. ★★★★★
    - "Beautiful office, friendly staff, and my teeth have never looked better." — Maria L. ★★★★★
    - "Dr. Chen explained everything before starting. First dentist I've actually trusted." — David K. ★★★★★
  - [x] Each card: quote text + star rating (★★★★★) + circular avatar (placeholder image, 40-48px) + name
  - [x] Hover lift on cards (same effect as service cards)
  - [x] Background: warm ivory (#FAF7F2)

- [x] Commit and push

### Phase 7 — Done Criteria
Communication section has 3 columns with correct copy. Chat "Try it now" button logs to console. Phone number pulls from config. Testimonials show 4 cards with avatars, quotes, and star ratings. Hover lift works. Both sections responsive.

---

## Phase 8 — Contact/CTA + Footer

**Goal:** Build the final CTA section and footer. Complete the page structure.
**Brief needed:** No — all specs are in this file

### Checklist

**Contact/CTA Section:**
- [x] Build `<ContactCTA>` component:
  - [x] Section heading: "Ready to Book Your Visit?"
  - [x] Two-column layout on desktop:
    - **Left column:**
      - CTA copy (1-2 sentences encouraging booking)
      - "Book Now" button (large, terracotta)
      - Practice hours: "Mon–Fri 8am–6pm | Sat 9am–2pm" (from `SITE_CONFIG`)
      - Phone number (from `SITE_CONFIG`, clickable)
    - **Right column:**
      - Static Google Maps placeholder (use a grey box with "Map" text or a static map image URL)
      - Address: from `SITE_CONFIG`
  - [x] Background: will receive gradient animation in Phase 9
  - [x] Mobile: stacked (CTA on top, map below)

**Footer:**
- [x] Build `<Footer>` component:
  - [x] Practice name: "Clove & Crown Dental" in Playfair Display
  - [x] Tagline: one short line (e.g., "Dental care that feels different.")
  - [x] Quick links: Services | About | Reviews | Contact | Privacy Policy (all anchor links except Privacy which is `#`)
  - [x] Social media icons: Instagram, Facebook, Twitter (placeholder `#` links, use icon library)
  - [x] Phone number from `SITE_CONFIG` (clickable)
  - [x] Copyright: "© 2026 Clove & Crown Dental. All rights reserved."
  - [x] Background: charcoal (#2D2D2D) or dark sage, light text
  - [x] Sufficient padding, clean layout

**Chat widget placeholder:**
- [x] Add a floating placeholder button in bottom-right corner:
  - [x] Circular, 56-60px, terracotta or sage background
  - [x] Chat icon (speech bubble)
  - [x] Fixed position, `bottom: 24px; right: 24px;`
  - [x] On click: logs to console (`console.log('Chat widget placeholder clicked')`)
  - [x] This will be replaced with the real Voiceflow/Convocore embed before launch

- [x] Commit and push

### Phase 8 — Done Criteria
All 11 sections are on the page. The full page scrolls top to bottom. Footer is at the bottom. Chat placeholder floats in bottom-right. Every phone number instance pulls from `SITE_CONFIG`. The page is structurally complete — no section is missing.

---

## Phase 9 — Global Animations & Effects

**Goal:** Add all scroll-triggered animations, magnetic hover, and gradient animation across the entire page in one pass.
**Brief needed:** No — all effect specs are in this file

### Checklist

**Scroll-triggered animations (GSAP ScrollTrigger or AOS):**
- [ ] Choose library: GSAP ScrollTrigger (recommended — already installed) or AOS
- [ ] Apply fade-up entrance animation to every section's content:
  - [ ] Section headings: fade up
  - [ ] Service cards: staggered fade up (100-150ms delay between cards)
  - [ ] Why Choose Us blocks: staggered fade up
  - [ ] About section: image fades from left, text fades from right
  - [ ] Gallery images: staggered fade up
  - [ ] Communication columns: staggered fade up
  - [ ] Testimonial cards: staggered fade up
  - [ ] Contact section: fade up
- [ ] All animations trigger once (no replay on scroll back)
- [ ] Start position: elements begin ~30-40px below final position with `opacity: 0`
- [ ] Duration: 0.6-0.8 seconds per element
- [ ] Easing: `ease-out` or GSAP `power2.out`

**Magnetic hover on CTAs:**
- [ ] Create a reusable magnetic hover utility/hook
- [ ] Apply to all "Book Now" and "Book Your Visit" buttons across the page
- [ ] Effect: button translates 3-5px toward cursor position on hover, returns on mouse leave
- [ ] Smooth transition (not jarring)

**Gradient background animation:**
- [ ] Apply to Contact/CTA section (Phase 8)
- [ ] Slow CSS animation: background shifts between sage-tinted ivory and ivory (very subtle)
- [ ] Animation duration: 8-10 seconds, infinite loop
- [ ] Must not distract from content

**Verify smooth scroll:**
- [ ] Confirm Lenis is still working correctly after all sections are on the page
- [ ] Nav anchor links smooth-scroll to correct sections
- [ ] No scroll jank or stuttering with animations active

- [ ] Commit and push

### Phase 9 — Done Criteria
Every section animates in on scroll. Animations fire only once. Magnetic hover works on all CTA buttons. Gradient animation is visible but subtle on the CTA section. Smooth scroll works throughout. No performance issues.

---

## Phase 10 — Responsive Pass + Stock Images + Performance + Deployment

**Goal:** Final polish. Replace placeholders with real stock images. Full responsive audit. Performance check. Deploy.
**Brief needed:** Yes — for imagery guidelines

### Checklist

**Stock images:**
- [ ] Source warm-toned stock photos (Unsplash, Pexels, or similar):
  - [ ] 3-4 hero carousel images (dental interiors, welcoming environments)
  - [ ] 1 doctor portrait (professional woman, approachable)
  - [ ] 3 practice gallery images (office interior, waiting area, treatment room)
  - [ ] 4 small circular avatars for testimonials
- [ ] Optimise all images (WebP format, appropriate dimensions, compressed)
- [ ] Replace all placeholder images with real stock photos
- [ ] Verify hero scrim keeps text readable on all real images

**Responsive audit (test at 375px, 768px, 1024px, 1440px):**
- [ ] Navbar: hamburger menu works, no overflow
- [ ] Hero: headline readable, CTAs accessible, dots visible
- [ ] Trust bar: numbers don't wrap awkwardly
- [ ] Services: grid adapts correctly at each breakpoint
- [ ] Why Choose Us: grid adapts
- [ ] About: two-column → stacked transition is clean
- [ ] Gallery: images stack cleanly on mobile
- [ ] Communication: columns stack on mobile
- [ ] Testimonials: grid adapts
- [ ] Contact: two-column → stacked on mobile
- [ ] Footer: no overflow, links accessible
- [ ] Chat placeholder button doesn't overlap content on mobile
- [ ] All tap targets are minimum 44×44px on mobile

**Performance:**
- [ ] Run Lighthouse audit (target: Performance 90+, Accessibility 90+)
- [ ] Lazy-load all images below the fold
- [ ] Ensure hero images are eagerly loaded (no lazy-load on first carousel image)
- [ ] Font loading: `display: swap` to prevent FOIT
- [ ] No layout shift from animations (elements should be in final position before scroll trigger, just transparent)
- [ ] Total page weight under 3MB (ideally under 2MB)

**Pre-deployment checks:**
- [ ] All phone numbers show `(512) 555-0173` (search codebase for any hardcoded numbers)
- [ ] No tool names visible (search for "Voiceflow", "Retell", "Make", "n8n", "Convocore")
- [ ] `<!-- CHATBOT EMBED SCRIPT HERE -->` comment is present in layout
- [ ] Console has no errors
- [ ] All anchor links scroll to correct sections

**Deployment:**
- [ ] Merge `dev` into `main` via pull request
- [ ] Deploy to Vercel
- [ ] Verify live URL loads and works
- [ ] Test on actual mobile device (not just browser devtools)
- [ ] Record URL: `clove-crown-dental.vercel.app` (or whatever Vercel assigns)

- [ ] Commit and push

### Phase 10 — Done Criteria
All placeholder images replaced with real stock photos. Site looks polished at all breakpoints. Lighthouse scores above 90. Deployed to Vercel. Live URL works on mobile. Zero console errors. Ready for pre-launch swap (real phone number + real chatbot widget).

---

## Post-Build — Pre-Launch Swap (NOT a Cursor phase)

This happens manually after the site is fully built and deployed:

- [ ] Replace `(512) 555-0173` with real Retell voice agent number in `lib/config.ts`
- [ ] Replace `<!-- CHATBOT EMBED SCRIPT HERE -->` with real Voiceflow/Convocore embed snippet
- [ ] Replace floating chat placeholder button with the real widget
- [ ] Style chat widget to match palette (sage or terracotta)
- [ ] Wire "Try it now →" button in Communication section to trigger real chat widget
- [ ] Test voice agent call from mobile
- [ ] Test chatbot booking flow end-to-end
- [ ] Redeploy to Vercel
- [ ] Final check on live URL

---

## Phase Summary

| Phase | What | Sessions | Brief Needed |
|-------|------|----------|-------------|
| 1 | Project scaffolding, deps, config, Lenis | 1 | No |
| 2 | Navbar (sticky + blur) | 1 | Yes |
| 3 | Hero (carousel + split text + parallax) | 1-2 | Yes |
| 4 | Trust bar (counters + stagger) | 1 | No |
| 5 | Services + Why Choose Us (card grids) | 1 | Yes |
| 6 | About + Practice Gallery | 1 | Yes |
| 7 | Communication + Testimonials | 1 | Yes |
| 8 | Contact/CTA + Footer + chat placeholder | 1 | No |
| 9 | Global animations + magnetic hover + gradient | 1 | No |
| 10 | Responsive + images + performance + deploy | 1-2 | Yes |
| Post | Swap placeholders for real integrations | Manual | — |

**Estimated total: 10-13 Cursor sessions**
