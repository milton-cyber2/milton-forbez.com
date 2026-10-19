# Martin Sei — Elite Coaching Website

## 1. Project Description
Luxury dark-theme personal training and coaching website positioning Martin Sei as one of Dubai's leading Hybrid, Strength, Functional Training, and HYROX coaches. The site converts visitors into consultations, memberships, personal training clients, and online group class bookings.

Design tone: Apple / Nike / WHOOP / Equinox — cinematic photography, minimal luxury interface, athletic typography, restrained accent color (electric blue) on deep charcoal.

## 2. Page Structure
- `/` — Home (cinematic hero, stats, services, HYROX, transformations, testimonials, CTA)
- `/about` — About Martin
- `/services/personal-training`
- `/services/hyrox`
- `/services/strength-functional`
- `/services/nutrition`
- `/services/online-coaching`
- `/services/corporate-wellness`
- `/classes` — Online Group Classes (weekly timetable + booking)
- `/memberships` — Plans
- `/pricing`
- `/transformations`
- `/testimonials`
- `/gallery`
- `/blog`
- `/resources`
- `/events`
- `/faq`
- `/contact`
- `/book` — Free consultation booking
- `/dashboard` — Member portal
- `/privacy`, `/terms`, `/thank-you`, `*` — 404

## 3. Core Features
- [ ] Luxury dark design system (StyleSystem tokens, Oswald + Inter typography)
- [ ] Global sticky navbar (transparent → solid on scroll) + luxury footer
- [ ] Floating WhatsApp button (site-wide)
- [ ] Cinematic homepage using Martin's real photos
- [ ] Multi-page service architecture
- [ ] Online group class weekly timetable
- [ ] Consultation booking form
- [ ] Contact form with Google Map embed
- [ ] AI fitness assistant (built-in Agent)
- [ ] Client transformations & testimonials galleries
- [ ] Memberships + pricing pages
- [ ] Blog + resources pages
- [ ] SEO metadata + schema markup
- [ ] Cookie consent

## 4. Data Model Design
Deferred until Supabase is connected. When authentication, booking persistence, and membership portal go live:
- `profiles` (member accounts)
- `bookings` (class + consultation reservations)
- `memberships` (subscription tier)
- `transformations`, `testimonials` (CMS content)

## 5. Backend / Third-party Integration Plan
- **Forms** — Built-in Readdy Forms for contact + booking submissions (Phase 1 ready)
- **AI Assistant** — Readdy built-in Agent for FAQs, program recommendations, booking guidance
- **Supabase** — Only when member portal / auth / persistent bookings are needed
- **Stripe / Payments** — Once memberships & pricing go live
- **Calendar / Zoom / Meet / Teams** — Once live class booking backend is required
- **Google Analytics + Cookie consent** — Add before launch

## 6. Development Phase Plan

### Phase 1 (current): Foundation + Cinematic Homepage
- Goal: Ship the luxury design system, global nav/footer/WhatsApp button, and a jaw-dropping homepage that showcases every service.
- Deliverable: Fully styled `/` route using Martin's real photos, plus routing scaffold ready for follow-up pages.

### Phase 2 (in progress): Core Content Pages
- [x] About Martin (pending build)
- [x] All 6 service detail pages (`/services/*`) — Personal Training, HYROX, Strength & Functional, Nutrition, Online Coaching, Corporate Wellness
- [x] Contact page with Google Map + form
- [x] Book free consultation page with form
- [x] HYROX deep-dive

### Phase 3: Booking & Classes
- Online group classes timetable, consultation booking, thank-you page (forms live; full calendar to come).

### Phase 4 (in progress): Community + Content
- [x] Blog listing page + SEO-optimized article pages (`/blog`, `/blog/:slug`)
- [x] Premium editorial blog rebuild: 4 categories (Training, Nutrition, Mindset, Recovery), 12 full articles, varied editorial layouts, Most Read, Quick Reads carousel, "A Note From Your Coach", reading-progress article pages with pull quotes + coach tips
- Transformations gallery, testimonials, resources, events, FAQ.

### Phase 5 (in progress): Membership + Commerce
- [x] Memberships page (`/memberships`) — minimal luxury single offer (300 AED / session) + book CTA
- Pricing, dashboard shell. Supabase auth + Stripe integration when the user is ready.

### Phase 6: AI Assistant + Analytics + Launch polish
- Built-in Agent, Google Analytics, cookie consent, SEO refinements, 404 + legal pages.