
# Complete Standalone HTML Version - Full Implementation Plan

## Overview

Converting the complete Gruner Renewable Energy React application into a self-contained static HTML website. This includes 13 pages, 14+ CSS files, 9+ JavaScript files, and all media assets.

---

## Final Folder Structure

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
│   ├── variables.css             (already created)
│   ├── base.css                  (already created)
│   ├── components.css            (already created)
│   ├── layout.css                (already created)
│   ├── animations.css            (already created)
│   ├── header.css                (already created)
│   ├── footer.css                (already created)
│   └── pages/
│       ├── home.css              (already created)
│       ├── about.css             (new)
│       ├── technology.css        (new)
│       ├── solutions.css         (new)
│       ├── media.css             (new)
│       ├── careers.css           (new)
│       └── contact.css           (new)
├── js/
│   ├── utils.js                  (already created)
│   ├── animations.js             (already created)
│   ├── header.js                 (already created)
│   ├── counter.js                (already created)
│   ├── page-loader.js            (already created)
│   ├── accordion.js              (already created)
│   ├── form.js                   (already created)
│   └── map-interaction.js        (already created)
└── assets/
    ├── images/                   (copy from src/assets)
    └── logos/                    (copy from src/assets/logos)
```

---

## Implementation Phases

### Phase 1: Foundation (COMPLETED)
The following CSS and JS files have been created:
- CSS: variables.css, base.css, layout.css, components.css, animations.css, header.css, footer.css, pages/home.css
- JS: utils.js, animations.js, header.js, counter.js, page-loader.js, accordion.js, form.js, map-interaction.js

### Phase 2: Copy Assets
Copy all local assets to `static-html/assets/`:
- Logo: gruner-logo.png
- Videos: hero-video.mp4, about-hero-video.mp4, cstr-process-video.mp4
- Images: cstr-cutaway-illustration.jpg, solutions-hero.jpg, careers-hero.jpg, contact-hero.jpg, cng-retail-hero.jpg, media-hero.jpg, india-map.svg
- Team images: team-1.jpg, team-2.jpg, team-3.jpg
- Logos folder: All partner/media logos (io.png, bpcl.png, igl.png, adani.png, gail.png, reliance.png, tet.png, tbl.png, bs.png, bw.png, ew.png, ene.png)

### Phase 3: Build HTML Pages

---

## Page-by-Page Specifications

### 1. Homepage (index.html)

**Sections to implement:**
1. **Page Loader** - Branded loading screen with logo and progress bar
2. **Header** - Fixed navigation with scroll effects and dropdown menus
3. **Hero Section** - Video background with parallax, animated metrics (1500Cr+, 60M, 88K+)
4. **Trusted By** - Partner logos row with hover effects
5. **Context Section** - Split layout with gradient orbs, animated counters (500M+, 85%, 2070)
6. **About Gruner** - Two-column layout with highlight cards and stats bar
7. **Solutions Section** - 4-card grid with expandable features (dark background)
8. **Process Section** - 4-step horizontal timeline with animated progress line
9. **Media Mentions** - Logo strip with green glow hover
10. **Projects Map** - India map with interactive markers (dark background)
11. **Team Section** - Founder hero block + 2-column stacked leaders
12. **Awards Section** - 6-column recognition grid
13. **Contact Form** - Split layout with form and contact info (dark background)
14. **Footer** - Multi-column links with social icons

**Key animations:**
- Hero parallax effect using CSS custom properties
- Scroll-triggered fade-up animations
- Animated counters on scroll into view
- Floating particles via CSS keyframes
- Map marker pulse animations
- Progress line animation on timeline

---

### 2. About Page (about.html)

**Sections:**
1. **About Hero** - White background, video on right, stats underneath
2. **Vision/Mission** - Two-column cards with warm gradient background
3. **Impact Stats** - Counter grid with gradient icons
4. **Core Values** - Multi-column values grid
5. **Why Choose** - Feature highlights
6. **Leadership** - Dark section with Founder hero block + 6-column team grid

**CSS:** Create `pages/about.css` with:
- Vision/Mission card styles with light pista green backgrounds
- Leadership section dark gradient background
- Leader card hover effects with bio reveal

---

### 3. Technology Page (technology.html)

**Sections:**
1. **Technology Hero** - White background, breadcrumb, tech tags, BiogasSystemVisual
2. **CSTR Introduction** - Two-column with cutaway image and specifications grid
3. **Process Steps** - Animated vertical timeline with expandable steps
4. **Advantages** - 3-column benefits grid
5. **Sustainability** - Two-column with metrics grid

**CSS:** Create `pages/technology.css` with:
- Biogas system visual with animated elements
- Process timeline styles
- Specification card styles

**JS:** Extend accordion.js for expandable process steps

---

### 4. Solutions Page (solutions.html)

**Sections:**
1. **Solutions Hero** - Split layout with floating cards
2. **What We Offer** - Alternating two-column solution cards with images
3. **Benefits** - 3-column benefit cards
4. **CTA** - Centered call-to-action section

**CSS:** Create `pages/solutions.css` with:
- Hero floating card styles
- Alternating layout styles
- Solution card hover effects

---

### 5. Solution Subpages (6 pages)

Each subpage follows the same template structure:
- **Hero** - Badge + title + description + CTAs + floating card
- **Features Grid** - Checkbox-style feature list
- **Benefits** - 4-column icon cards
- **CTA** - Centered partnership call

Pages:
- project-development.html
- engineering-construction.html
- rd.html
- cng-retail.html
- bio-gas.html
- om.html

---

### 6. Media Page (media.html)

**Sections:**
1. **Media Hero** - Split layout with 6-image collage grid
2. **Press Highlights** - 3-column animated counter stats (dark background)
3. **Featured Coverage** - Large featured article card
4. **All Coverage** - 3-column article cards grid
5. **Press Contact CTA** - Centered section

**CSS:** Create `pages/media.css` with:
- Collage grid layout (2-col, 2-row main image + smaller grid)
- Article card hover effects
- Featured article large card styles

---

### 7. Careers Page (careers.html)

**Sections:**
1. **Careers Hero** - Split layout with floating cards
2. **Culture/Benefits** - Two-column with 4 benefit cards
3. **Job Openings** - Category navigation + job cards grid with expandable details
4. **General Application CTA** - White background centered card

**CSS:** Create `pages/careers.css` with:
- Benefit card styles
- Job card with expandable accordion
- Category pill navigation

**JS:** Use accordion.js for job card expansion

---

### 8. Contact Page (contact.html)

**Sections:**
1. **Contact Hero** - White background with breadcrumb and hero image
2. **Contact Form** - Creamy background (#FAF7F2), 5-column grid (3 form + 2 info)
3. **Contact Info Cards** - Sidebar with address, phone, email, hours
4. **Google Map** - Embedded iframe with red pin marker

**CSS:** Create `pages/contact.css` with:
- Form field styles
- Contact info card styles
- Radio button group styles

**JS:** Use form.js for validation

---

## Animation Conversion Details

### Framer Motion to CSS/JS Mapping

| Framer Motion Pattern | CSS/JS Implementation |
|----------------------|----------------------|
| `initial={{ opacity: 0, y: 30 }}` | `.scroll-fade-up { opacity: 0; transform: translateY(30px); }` |
| `animate={{ opacity: 1, y: 0 }}` | `.scroll-fade-up.in-view { opacity: 1; transform: translateY(0); }` |
| `useInView` hook | `IntersectionObserver` adds `.in-view` class |
| `whileHover={{ scale: 1.02 }}` | CSS `:hover { transform: scale(1.02); }` |
| `useScroll` + `useTransform` | JS scroll listener + CSS custom properties |
| Staggered children | CSS `animation-delay` with `:nth-child()` |
| `AnimatePresence` | CSS classes `.entering`/`.exiting` with animations |

### Parallax Implementation
```javascript
// In animations.js
window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll-y', window.scrollY);
});
```
```css
.hero-content {
  transform: translateY(calc(var(--scroll-y) * 0.3));
  opacity: calc(1 - var(--scroll-y) / 500);
}
```

### Floating Particles (CSS only)
```css
@keyframes floatParticle {
  0%, 100% { transform: translateY(0) translateX(0); opacity: 0.1; }
  50% { transform: translateY(-100px) translateX(25px); opacity: 0.3; }
}
.particle { animation: floatParticle 20s ease-in-out infinite; }
```

---

## Technical Specifications

### HTML Document Template
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title - Gruner Renewable Energy</title>
  <meta name="description" content="...">
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
  
  <!-- CSS -->
  <link rel="stylesheet" href="css/variables.css">
  <link rel="stylesheet" href="css/base.css">
  <link rel="stylesheet" href="css/layout.css">
  <link rel="stylesheet" href="css/components.css">
  <link rel="stylesheet" href="css/animations.css">
  <link rel="stylesheet" href="css/header.css">
  <link rel="stylesheet" href="css/footer.css">
  <link rel="stylesheet" href="css/pages/[page].css">
</head>
<body>
  <!-- Page Loader -->
  <div class="page-loader">...</div>
  
  <!-- Header -->
  <header class="header">...</header>
  
  <!-- Main Content -->
  <main>...</main>
  
  <!-- Footer -->
  <footer class="footer">...</footer>
  
  <!-- JavaScript -->
  <script src="js/utils.js"></script>
  <script src="js/page-loader.js"></script>
  <script src="js/header.js"></script>
  <script src="js/animations.js"></script>
  <script src="js/counter.js"></script>
  <!-- Page-specific JS -->
</body>
</html>
```

### External Assets (kept as URLs)
Based on your requirement to download and include locally, I'll reference these from local paths. However, since I cannot actually download files, the HTML will reference the original S3/Pexels URLs but can be downloaded manually:

**S3 Images (Media page, Leadership):**
- Team/leadership images from grunerrenewable.s3.ap-south-1.amazonaws.com
- Media article images from grunerrenewable.s3.ap-south-1.amazonaws.com

**Pexels Images (Solutions page):**
- pexels-photo-433308.jpeg
- pexels-photo-256381.jpeg
- pexels-photo-159306.jpeg
- pexels-photo-3184465.jpeg

---

## Deliverables Summary

| Category | Count | Status |
|----------|-------|--------|
| HTML Pages | 13 | To be created |
| CSS Files (Core) | 7 | Created |
| CSS Files (Pages) | 7 | 1 created, 6 to create |
| JS Files | 8 | Created |
| Local Assets | 30+ | To be copied |

---

## Implementation Order

1. Copy all assets to `static-html/assets/`
2. Create page-specific CSS files (about.css, technology.css, solutions.css, media.css, careers.css, contact.css)
3. Build index.html (homepage) with all sections
4. Build about.html
5. Build technology.html
6. Build solutions.html
7. Build 6 solution subpages
8. Build media.html
9. Build careers.html
10. Build contact.html
11. Test all interactions and animations
12. Verify responsive behavior

---

## Notes

- All interactive elements use vanilla JavaScript
- All animations use CSS keyframes + IntersectionObserver
- Forms use client-side validation matching the React Zod schemas
- Google Maps iframe is preserved as-is with coordinates
- External image URLs are kept for now (can be downloaded later)
- SVG icons are implemented using inline SVG elements
