# Clove & Crown Dental — Demo Homepage Brief (v2)

## Purpose

This is a demo site for a fictional solo dental practice called **Clove & Crown Dental**. It exists to show real dentists what their practice could look like with a modern website and embedded AI communication tools. The demo will be shared directly in cold outreach emails as a proof proxy.

**The demo must prove three things:**

1. The website looks significantly better than what 90% of solo dentists currently have
2. The AI chatbot works — visitors can talk to it and book an appointment
3. The AI voice agent works — visitors can see a phone number and call it

---

## Design References

| Site | What to Borrow |
|------|----------------|
| **beehivedental.ca** | Visual warmth, premium branding, cohesive theme. Primary design target. |
| **zen.dentist** | Layout rhythm, whitespace, trust signals, technology section. |
| **arbordentalnyc.com** | Boutique feel, refined typography. Shows how to make a solo practice feel high-end. |
| **studiodental.com** | Minimalism benchmark. Your demo should have MORE content than this, not less. |
| **dentalstudiosf.com** | Functional benchmark. Phone number, text widget, book online. Least pretty, most functional. |

**Design target in one sentence:** Beehive's visual warmth + Zen's layout structure + DentalStudioSF's functional channels — but with a live AI chatbot and voice number that none of them have.

---

## Build Scope

- **One page only.** Homepage. No subpages.
- **Fully responsive.** Must look excellent on mobile — dentists will open the outreach email on their phone first.
- **Light theme.** Clean, warm, professional. Not clinical. Not corporate.
- **Deployed to a shareable staging URL** (Vercel).

---

## Design Direction

### Vibe
Premium solo dental practice. Warm, modern, trustworthy. Boutique wellness feel — not clinical, not corporate. The name "Clove & Crown" evokes herbal warmth and craftsmanship; the design must match.

### Colour Palette — Sage & Terracotta

| Role | Colour | Hex | Usage |
|------|--------|-----|-------|
| Primary | Sage green | #7C9082 | Headings, navbar accents, secondary buttons, icon backgrounds |
| Background | Warm ivory | #FAF7F2 | Page background, hero overlay base |
| Accent | Muted terracotta | #C4836A | Primary CTA buttons, highlights, active states |
| Text | Soft charcoal | #2D2D2D | Body text, headings |
| Secondary | Dusty rose | #D4B5A0 | Hover states, subtle borders, card backgrounds, secondary elements |
| Cards background | Warm sand | #F3EEE8 | Card rows, alternate section backgrounds |

**Rules:**
- Never use pure white (#FFFFFF) or pure black (#000000)
- CTAs are always terracotta (#C4836A) with white text
- Secondary/outline buttons use sage (#7C9082) border and text
- The chatbot widget must be styled to match this palette (sage or terracotta accent, not default blue)

### Typography
- **Headings:** Playfair Display (serif) — adds editorial warmth, pairs with the boutique name
- **Body:** DM Sans (sans-serif) — clean, highly readable, generous line-height
- **Two typefaces only.** No exceptions.
- Heading sizes should be generous. Hero headline: 3.5-4rem desktop, 2rem mobile.

### Imagery
- Use high-quality stock photos of modern dental interiors, smiling patients, clean equipment
- Avoid: generic handshake photos, overly clinical images, AI-generated faces for staff
- Hero carousel images should show welcoming dental environments, not close-ups of teeth
- All images should feel warm-toned to match the palette — avoid cool/blue-lit stock photos

---

## Effects & Interactions

### Must-Have Effects
| Effect | Where | Library/Method |
|--------|-------|---------------|
| Smooth scroll | Entire page | Lenis |
| Scroll-triggered fade/slide-in | All sections — elements animate in on viewport entry | AOS or GSAP ScrollTrigger |
| Subtle parallax | Hero carousel images — 10-15% movement max | CSS or GSAP |
| Hover lift | Service cards, testimonial cards, "Why Choose Us" cards | CSS transform + box-shadow |
| Gradient background animation | CTA section background — slow sage-to-ivory shift | CSS animation |
| Split text animation | Hero headline — characters/words animate in on page load | GSAP + SplitType |
| Staggered load | Trust bar stats — items appear one after another | GSAP or CSS animation-delay |
| Magnetic hover | All "Book Now" CTA buttons — subtle pull toward cursor | Custom JS or library |
| Counter animation | Trust bar stats — numbers count up on scroll into view | GSAP or Intersection Observer + JS |

### Do NOT Include
- Custom cursor
- Horizontal scroll sections
- WebGL / shaders
- Image reveal on hover
- Typewriter effect
- Noise/grain texture overlay
- Preloader/loading screen

---

## Page Sections (Top to Bottom)

### 1. Navbar
- Practice name: "Clove & Crown" in Playfair Display (text logo, no image logo needed)
- Nav links: Services | About | Reviews | Contact
- Phone number: **(512) 555-0173** (fictional placeholder — swap for real Retell number before launch)
- "Book Now" CTA button (terracotta)
- **Backdrop blur (glassmorphism)** on scroll — navbar becomes semi-transparent with blur when user scrolls past the hero
- Sticky to top of viewport

### 2. Hero Section — Full-Bleed Carousel
- **Full-bleed hero carousel** covering the full viewport width
- **3-4 images** of welcoming dental environments (office interior, treatment room, waiting area, modern equipment)
- **Crossfade transition** between images (not slide), 5-6 second interval, auto-advances
- **Pagination dots** at the bottom of the hero — white, small, clickable, with active state indicator
- **Warm dark scrim overlay** — #2D2D2D at 40-50% opacity gradient from bottom, ensures text readability regardless of which image is showing
- **Content overlay on top of the carousel:**
  - Eyebrow: "Now Accepting New Patients" (floating badge style)
  - Headline: "Dental Care That Feels Different" (split text animation on load)
  - Subheadline: 1-2 sentences about the experience of visiting Clove & Crown
  - Primary CTA: "Book Your Visit" (terracotta button)
  - Secondary CTA: "Call Us Now" with phone number (sage outline button)
- Hero should be approximately 85-90vh on desktop, 70vh on mobile

### 3. Trust Bar / Stats Row
- Horizontal row with 4 stats, each with counter animation on scroll:
  - **500+** Happy Patients
  - **4.9★** Google Rating
  - **15+** Years Experience
  - **Same-Week** Appointments Available
- Stats stagger in one after another (animation-delay)
- Background: warm sand (#F3EEE8) to visually separate from hero
- Centred, clean, no icons needed — the numbers are the visual anchor

### 4. Services Section
- Title: "What We Offer"
- 6 service cards in a responsive grid (3×2 on desktop, 2×3 on tablet, 1×6 on mobile):
  - General Dentistry
  - Cosmetic Dentistry
  - Teeth Whitening
  - Dental Implants
  - Emergency Care
  - Invisalign
- Each card: icon or small illustration + service name + 1-line description + "Learn More →" text link (non-functional, signals depth)
- **Hover lift** on each card (translateY + shadow increase)
- Card background: white or very light, with subtle border
- Staggered fade-in on scroll

### 5. Why Patients Choose Us (NEW)
- Title: "Why Patients Choose Us"
- 4 feature blocks in a row (2×2 on mobile):
  - **Modern Technology** — "Advanced equipment for precise, comfortable treatment"
  - **Comfort-First Approach** — "Every visit designed around your comfort"
  - **Flexible Scheduling** — "Early morning, evening, and weekend slots available"
  - **Transparent Communication** — "No surprises — clear treatment plans and pricing"
- Each block: icon + title + 2-sentence description
- Subtle background differentiation from services section
- Staggered fade-in on scroll

### 6. About the Dentist
- Title: "Meet Your Dentist"
- Doctor name: **Dr. Sarah Chen** (fictional)
- Short bio: 2-3 sentences about background and philosophy emphasising patient-first, technology-forward, community-focused
- High-quality stock portrait (professional, approachable, warm-toned)
- **Credential pills** below bio: "University of Texas Dental School" | "American Dental Association Member" | "15+ Years in Practice"
- Layout: two-column on desktop (image left, text right), stacked on mobile
- **Clip-path reveal** on the doctor's photo as it scrolls into view (circular or diagonal wipe) — OPTIONAL, implement only if time permits

### 7. See Our Practice (NEW)
- Title: "See Our Practice"
- **3-image row** showing: dental office interior, waiting area, treatment room
- High-quality stock photos, warm-toned
- Images should have subtle rounded corners (8-12px)
- Optional: light hover zoom effect on each image
- Background: warm ivory (#FAF7F2) — same as page base
- Staggered fade-in on scroll

### 8. Communication / AI Section
- Title: "We're Here When You Need Us"
- Three columns, each with an icon/illustration:
  - **Chat:** "Have a question? Chat with us right now." — includes a "Try it now →" link/button that triggers the chatbot widget to open
  - **Call:** "Prefer to talk? Our phone assistant is available 24/7." — shows the phone number, clickable
  - **Book Online:** "Schedule your appointment in seconds." — booking CTA button (terracotta)
- The chat column should be slightly visually emphasised (larger icon, or subtle background highlight)
- **NOTE:** No tool names. No mention of AI, Voiceflow, Retell, or any platform. Language focuses on convenience and availability, not technology.
- Staggered fade-in on scroll

### 9. Testimonials Section
- Title: "What Our Patients Say"
- **4 testimonial cards** in a responsive grid (2×2 on desktop, 1×4 on mobile):
  - "Best dental experience I've ever had. The office is beautiful and the staff made me feel completely at ease." — Sarah T. ★★★★★
  - "I was able to book my appointment through the chat in seconds. So convenient!" — James R. ★★★★★
  - "Beautiful office, friendly staff, and my teeth have never looked better." — Maria L. ★★★★★
  - "Dr. Chen explained everything before starting. First dentist I've actually trusted." — David K. ★★★★★
- Each card includes a **small circular avatar** (stock photo) next to the name
- **Hover lift** on cards
- NOTE: The second and fourth testimonials deliberately highlight the chat booking and trust experience. Intentional — reinforces the AI system and care quality for the prospect viewing the demo.
- Staggered fade-in on scroll

### 10. Contact / CTA Section
- Title: "Ready to Book Your Visit?"
- **Two-column layout** on desktop:
  - **Left column:** CTA text + "Book Now" button (large, terracotta) + practice hours (Mon-Fri 8am-6pm, Sat 9am-2pm)
  - **Right column:** Static Google Maps image/placeholder showing the fictional practice location
- Address: 123 Clove Lane, Suite 100, Austin, TX 78701 (fictional — updated to match practice name)
- Phone: **(512) 555-0173** (fictional placeholder — swap for real Retell number before launch)
- **Gradient background animation** on this section — slow, subtle sage-to-ivory shift
- Stacked on mobile (CTA on top, map below)

### 11. Footer
- Practice name "Clove & Crown Dental" + tagline
- Quick links: Services | About | Reviews | Contact | Privacy Policy
- Social media icons (placeholder, non-functional)
- Phone number (clickable, placeholder — same config constant as all other instances)
- Copyright: © 2026 Clove & Crown Dental. All rights reserved.

---

## Functional Requirements

### Chatbot (Voiceflow/Convocore)
- **Placeholder:** Reserve the bottom-right corner for the floating chat widget. During build, include a styled placeholder button (matching site palette) that opens an empty chat-like panel or displays "Chat coming soon."
- **BEFORE LAUNCH:** Replace the placeholder with the real Voiceflow/Convocore embed script. The embed snippet will be a single `<script>` tag — leave a clearly commented `<!-- CHATBOT EMBED SCRIPT HERE -->` block in the HTML where it should go.
- Chat widget must be styled to match the site palette: sage (#7C9082) or terracotta (#C4836A) accent — not default blue
- Widget must be visible and accessible on mobile
- The "Try it now →" link in the Communication section must trigger the widget to open (wire this up during the real embed integration)

### Voice Agent (Retell)
- Placeholder phone number **(512) 555-0173** displayed in: navbar, hero section, communication section, contact section, and footer
- Number is clickable (tel: link) on mobile
- **BEFORE LAUNCH:** Replace all instances of (512) 555-0173 with the real Retell voice agent number. Search the codebase for `5125550173` to find every instance.
- Store the phone number in a single config variable/constant so swapping requires changing only one value

### Confirmation Email (SEPARATE BUILD — NOT PART OF WEBSITE)
- After a booking is made via chat or voice, a confirmation email is sent to the patient's provided email
- This is a Make/n8n workflow built separately after the homepage is complete
- Keep it simple — plain text or minimal HTML template

---

## What This Demo Must NOT Include

- No pricing information
- No real patient data or photos
- No HIPAA compliance claims
- No login/portal functionality
- No blog or content pages
- No real doctor identity — this is a fictional practice
- No tool names (Voiceflow, Retell, Make, etc.) anywhere visible on the page
- No preloader/loading screen
- No custom cursor

---

## Deployment

- Deploy to Vercel
- URL format: clove-crown-dental.vercel.app (or similar)
- Must be shareable and load fast (target under 2 seconds)

---

## Pre-Launch Swap Checklist

Before sharing the demo URL in outreach:

- [ ] Replace placeholder phone number `(512) 555-0173` with real Retell voice agent number (stored in single config constant — one change updates all 5 locations)
- [ ] Replace `<!-- CHATBOT EMBED SCRIPT HERE -->` with real Voiceflow/Convocore embed snippet
- [ ] Style the chat widget to match palette (sage or terracotta accent)
- [ ] Wire the "Try it now →" link in Communication section to trigger the chat widget
- [ ] Test voice agent call from mobile (tap-to-call)
- [ ] Test chatbot booking flow end-to-end
- [ ] Verify site loads under 2 seconds on mobile

---

## Success Criteria

A solo dentist clicking this link from a cold email should think:

1. "This looks better than my current website"
2. "I've never seen a dental site that looks like this"
3. "Wait — this chatbot actually works?"
4. "They have a phone agent too? I need to talk to whoever built this."

That reaction is the entire point of the demo.
