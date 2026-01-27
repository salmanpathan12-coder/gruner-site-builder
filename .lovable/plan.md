
# Standalone HTML Version - Complete Implementation Plan

## Project Overview

Converting the entire Gruner Renewable Energy React application to a complete standalone HTML website with separate CSS, JavaScript, and asset folders. The conversion will maintain all visual design, animations, and interactivity.

---

## Folder Structure

```text
static-html/
├── index.html                    # Homepage
├── about.html                    # About page
├── technology.html               # Technology page
├── solutions.html                # Solutions main page
├── solutions/
│   ├── project-development.html
│   ├── engineering-construction.html
│   ├── rd.html
│   ├── cng-retail.html
│   ├── bio-gas.html
│   └── om.html
├── media.html                    # Media page
├── careers.html                  # Careers page
├── contact.html                  # Contact page
├── css/
│   ├── variables.css             # CSS custom properties (colors, fonts, spacing)
│   ├── base.css                  # Reset, typography, base styles
│   ├── components.css            # Buttons, cards, forms, badges
│   ├── layout.css                # Container, grid, section layouts
│   ├── animations.css            # All CSS animations (converted from Framer Motion)
│   ├── header.css                # Header and navigation styles
│   ├── footer.css                # Footer styles
│   └── pages/
│       ├── home.css              # Homepage-specific styles
│       ├── about.css             # About page styles
│       ├── technology.css        # Technology page styles
│       ├── solutions.css         # Solutions pages styles
│       ├── media.css             # Media page styles
│       ├── careers.css           # Careers page styles
│       └── contact.css           # Contact page styles
├── js/
│   ├── utils.js                  # Utility functions
│   ├── animations.js             # Scroll-triggered animations (IntersectionObserver)
│   ├── header.js                 # Header scroll effects, mobile menu, dropdowns
│   ├── counter.js                # Animated number counters
│   ├── carousel.js               # Any carousel/slider functionality
│   ├── accordion.js              # Expandable sections (jobs, process steps)
│   ├── form.js                   # Contact form validation
│   ├── map-interaction.js        # India map interactive markers
│   └── page-loader.js            # Branded loading screen
└── assets/
    ├── images/
    │   ├── gruner-logo.png
    │   ├── about-hero-video.mp4
    │   ├── hero-video.mp4
    │   ├── cstr-process-video.mp4
    │   ├── cstr-cutaway-illustration.jpg
    │   ├── solutions-hero.jpg
    │   ├── careers-hero.jpg
    │   ├── contact-hero.jpg
    │   ├── cng-retail-hero.jpg
    │   ├── media-hero.jpg
    │   ├── india-map.svg
    │   ├── team-1.jpg
    │   ├── team-2.jpg
    │   ├── team-3.jpg
    │   └── external/               # Downloaded external images
    │       ├── pexels-*.jpg        # Pexels images
    │       └── s3-*.jpg            # S3 images for media
    └── logos/
        ├── adani.png
        ├── bpcl.png
        ├── gail.png
        ├── igl.png
        ├── io.png
        ├── reliance.png
        └── ... (other logos)
```

---

## Technical Implementation Details

### 1. CSS Architecture

**variables.css** - Design tokens from Tailwind config:
- Color palette (primary: teal #1f8f7a, accent: lime #7fbf2e)
- Font families (Playfair Display, Inter)
- Spacing scale
- Border radius values
- Shadow definitions
- Gradient definitions

**animations.css** - Converting Framer Motion to CSS:

| Framer Motion | CSS Animation |
|---------------|---------------|
| `initial={{ opacity: 0, y: 30 }}` → `animate={{ opacity: 1, y: 0 }}` | `@keyframes fadeInUp` + `.fade-in-up` class |
| `useInView` trigger | JavaScript IntersectionObserver adds `.in-view` class |
| `whileHover={{ scale: 1.02 }}` | CSS `:hover` transform |
| `useScroll` + `useTransform` | CSS `scroll-behavior` + JS scroll listener |
| Staggered animations | CSS `animation-delay` with nth-child selectors |

### 2. JavaScript Modules

**animations.js** - Scroll-triggered animations:
```javascript
// IntersectionObserver for scroll-based reveals
// Replaces Framer Motion's useInView hook
// Adds .in-view class to trigger CSS animations
```

**header.js** - Header interactivity:
- Scroll detection for background opacity change
- Mobile menu toggle with smooth transitions
- Dropdown menus on hover/click
- Active link highlighting

**counter.js** - Animated statistics:
```javascript
// Counts from 0 to target value on scroll into view
// Supports suffixes (Cr+, M, K+, %)
```

**map-interaction.js** - India map functionality:
- Hover state for project markers
- Tooltip positioning
- Synchronized list highlighting
- Pulse animations on active markers

**form.js** - Contact form:
- Client-side validation (matching Zod schema)
- Error message display
- Submit button state management
- Success toast notification

### 3. Animation Conversions

**Hero Section Parallax:**
```css
.hero-content {
  transform: translateY(calc(var(--scroll-y) * 0.3));
  opacity: calc(1 - var(--scroll-y) / 500);
}
```
```javascript
window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll-y', window.scrollY);
});
```

**Floating Particles:**
```css
@keyframes floatParticle {
  0%, 100% { transform: translateY(0) translateX(0); opacity: 0.1; }
  50% { transform: translateY(-100px) translateX(25px); opacity: 0.3; }
}
.particle { animation: floatParticle 20s ease-in-out infinite; }
```

**Process Section Timeline:**
```css
@keyframes progressLine {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}
.progress-line.in-view { animation: progressLine 1.5s ease-out forwards; }
```

**Gradient Text Effect:**
```css
.gradient-text {
  background: linear-gradient(135deg, #1f8f7a 0%, #7fbf2e 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
```

### 4. Component Conversions

**Page Loader:**
- Pure CSS animation for loading bar
- setTimeout for minimum display duration
- Fade-out animation on complete

**Header:**
- CSS transitions for scroll state
- Pure CSS dropdown menus with :hover
- JavaScript for mobile menu toggle
- Gradient CTA button with hover effects

**Trusted By Section:**
- CSS Grid for logo layout
- Hover effects with filter and transform
- Staggered fade-in animations

**Solutions Cards:**
- CSS Grid layout
- Hover state transitions
- Expandable feature sections (CSS max-height transition)
- Corner accent SVG animation

**Job Cards (Careers):**
- Accordion pattern with CSS transitions
- JavaScript for toggle functionality
- Animated chevron rotation

**India Map:**
- SVG markers with CSS animations
- JavaScript for hover synchronization
- CSS keyframes for pulse effects

### 5. External Assets to Download

**From Pexels (Solutions page):**
- pexels-photo-433308.jpeg (Bio-CNG plant)
- pexels-photo-256381.jpeg (Technology)
- pexels-photo-159306.jpeg (Construction)
- pexels-photo-3184465.jpeg (Financing)

**From S3 (Media page):**
- 10 media article images from grunerrenewable.s3.ap-south-1.amazonaws.com

---

## Page-by-Page Implementation

### Homepage (index.html)
- Page loader with branded animation
- Header with scroll effects
- Hero section with video background and parallax
- Animated metrics counters
- Trusted by logos section
- Context section (split layout with animated orbs)
- About Gruner section with highlight cards
- Solutions section with interactive cards
- Process section with animated timeline
- Media mentions strip
- Projects map with interactive markers
- Team section
- Awards section
- Contact form section
- Footer

### About Page (about.html)
- Video hero with gradient text
- Vision/Mission section
- Impact stats with counters
- Core values grid
- Why choose section
- Leadership team with image cards

### Technology Page (technology.html)
- Hero section
- CSTR introduction with image
- Process steps with interactive accordion
- Benefits grid
- Sustainability metrics

### Solutions Main + Subpages
- Split hero layout with floating cards
- Features grid
- Detailed solution cards
- Benefits section
- CTA section

### Media Page (media.html)
- Hero with image collage grid
- Press highlights with counters
- Featured article card
- Article grid with hover effects
- Press contact CTA

### Careers Page (careers.html)
- Hero with floating cards
- Culture/benefits section
- Job openings with expandable cards
- General application CTA

### Contact Page (contact.html)
- Hero with breadcrumb
- Contact form with validation
- Contact info sidebar
- Google Maps embed

---

## Implementation Steps

### Phase 1: Foundation
1. Create folder structure
2. Copy all local assets (images, videos, SVG)
3. Create variables.css with all design tokens
4. Create base.css with typography and reset
5. Create layout.css with container and grid systems

### Phase 2: Shared Components
6. Create header.css and header.js
7. Create footer.css
8. Create animations.css with all keyframe definitions
9. Create animations.js with IntersectionObserver logic
10. Create page-loader CSS and JS

### Phase 3: Homepage
11. Build index.html with all sections
12. Create home.css for page-specific styles
13. Implement counter.js for animated metrics
14. Implement map-interaction.js

### Phase 4: Inner Pages
15. Build about.html with all sections
16. Build technology.html with accordion
17. Build solutions.html and 6 subpages
18. Build media.html
19. Build careers.html with job accordion
20. Build contact.html with form validation

### Phase 5: Polish
21. Test all animations and interactions
22. Verify responsive behavior
23. Cross-browser testing
24. Optimize images if needed

---

## Technical Notes

### Font Loading
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### CSS Linking Order
```html
<link rel="stylesheet" href="css/variables.css">
<link rel="stylesheet" href="css/base.css">
<link rel="stylesheet" href="css/layout.css">
<link rel="stylesheet" href="css/components.css">
<link rel="stylesheet" href="css/animations.css">
<link rel="stylesheet" href="css/header.css">
<link rel="stylesheet" href="css/footer.css">
<link rel="stylesheet" href="css/pages/[page-name].css">
```

### JS Loading
```html
<!-- At end of body -->
<script src="js/utils.js"></script>
<script src="js/animations.js"></script>
<script src="js/header.js"></script>
<script src="js/[page-specific].js"></script>
```

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px
- Large: > 1280px

---

## Deliverables Summary

| Category | Count |
|----------|-------|
| HTML Pages | 13 |
| CSS Files | 14 |
| JS Files | 9 |
| Image Assets | 30+ |
| Video Assets | 3 |
| Logo Assets | 12 |

Total estimated files: ~80 files

This plan creates a fully functional, self-contained static website that mirrors the React application exactly, with all animations and interactivity preserved using vanilla CSS and JavaScript.
