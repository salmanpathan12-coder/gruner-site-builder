
# Full Website Comparison Report: React vs Static HTML

## Executive Summary

The **React/Lovable source is the LATEST and AUTHORITATIVE version**. The static HTML version in `static-html/` is **outdated** and requires significant updates to achieve parity with the current React implementation.

---

## Section 1: Overall Structure Comparison

### Pages Present in Both Versions

| Page | React Path | HTML Path | Status |
|------|-----------|-----------|--------|
| Home | `src/pages/Index.tsx` | `static-html/index.html` | Outdated |
| About | `src/pages/About.tsx` | `static-html/about.html` | Significantly Outdated |
| Technology | `src/pages/Technology.tsx` | `static-html/technology.html` | Outdated (CTA styling) |
| Solutions | `src/pages/Solutions.tsx` | `static-html/solutions.html` | Minor differences |
| Media | `src/pages/Media.tsx` | `static-html/media.html` | Outdated (different images) |
| Careers | `src/pages/Careers.tsx` | `static-html/careers.html` | Minor differences |
| Contact | `src/pages/Contact.tsx` | `static-html/contact.html` | Significantly Outdated |
| Blog | `src/pages/Blog.tsx` | Missing | Not converted |

### Solution Subpages (All 6 present in both)
- Project Development
- Engineering & Construction
- R&D
- CNG Retail
- Bio-Gas
- O&M

---

## Section 2: Critical Differences by Page

### 2.1 About Page - MAJOR UPDATES REQUIRED

**Leadership Section (`LeadershipSection.tsx` vs `about.html#leadership`)**

| Feature | React Version | HTML Version | Delta |
|---------|---------------|--------------|-------|
| Layout | Embla Carousel slider | Static grid | Major rewrite |
| Team Members | 6 leaders + 1 founder | 2 leaders + 1 founder | Missing 4 people |
| Navigation | Left/Right arrow buttons with `w-11 h-11` circular UI | None | Add carousel JS |
| LinkedIn Icons | Visible by default below names (`w-7 h-7 rounded-full bg-[#0077b5]`) | Hidden/hover only | UI update |
| Carousel Features | Infinite loop, touch/drag support | N/A | Add Embla or custom JS |

**Missing Team Members in HTML:**
1. Mr. Asit Chaterjee - Group President
2. Mr. Rajesh Gupta - EVP Engineering  
3. Ajmal Singh Kathat - EVP Projects
4. Mr. Sanjay Nandre - EVP Design

---

### 2.2 Contact Page - MAJOR LAYOUT CHANGES

**Layout Structure Comparison:**

```text
REACT VERSION (Current):
+------------------------------------------+
|  Contact Hero (white background)          |
+------------------------------------------+
|  Contact Form Section (creamy bg #FAF7F2) |
|  +-------------------+------------------+ |
|  |  Contact Form     |  Contact Info    | |
|  |  (lg:col-span-3)  |  Sidebar Cards   | |
|  +-------------------+------------------+ |
|  +--------------------------------------+ |
|  |  Quick Response Promise (full width) | |
|  +--------------------------------------+ |
|  +--------------------------------------+ |
|  |  Connect With Us (full width)        | |
|  |  [FB] [IG] [LinkedIn] [X] [YT]       | |
|  +--------------------------------------+ |
+------------------------------------------+
|  Map Section (with branding overlay)     |
+------------------------------------------+

HTML VERSION (Outdated):
+------------------------------------------+
|  Contact Hero                             |
+------------------------------------------+
|  +-------------------+------------------+ |
|  |  Contact Form     |  Contact Info    | |
|  |                   |  Cards           | |
|  +-------------------+------------------+ |
+------------------------------------------+
|  Map Section (generic iframe)            |
+------------------------------------------+
```

**Key Differences:**
- HTML missing: Full-width stacked "Quick Response Promise" and "Connect With Us" cards
- HTML missing: Social media icons (Facebook, Instagram, LinkedIn, X, YouTube)
- HTML: Contact info cards are in sidebar; React: Business Hours + form then stacked cards
- Map: React has branded overlay with Gruner logo; HTML has plain iframe

---

### 2.3 Technology Page - CTA STYLING UPDATE

**Section Labels (CTA Badges):**

| Element | React (Current) | HTML (Outdated) |
|---------|-----------------|-----------------|
| Font Size | `text-base` | `text-sm` (or smaller) |
| Padding | `px-6 py-3` | `px-5 py-2.5` |
| Labels | "Our Technology", "The Process", "Benefits", "Sustainability" | Same labels |

**Additional differences:**
- React has GRE watermark overlay on CSTR image and video (copy protection)
- React uses height-matching between content and media columns

---

### 2.4 Home Page - Map Section

**Projects Map (`ProjectsMapSection.tsx` vs `index.html#projects`):**

| Feature | React | HTML |
|---------|-------|------|
| Map Styling | `filter: brightness(1.8) contrast(1.1) invert(1)` for dark bg visibility | Basic filter |
| Gruner Brand Label | Present below map with logo | Missing |
| Interactive Markers | SVG markers with hover tooltips | Static or basic markers |

---

### 2.5 Home Page - Trusted By Section

| Feature | React | HTML |
|---------|-------|------|
| Animation | Infinite auto-scroll with Framer Motion | Static or basic CSS animation |
| Reliance Logo | Featured with scale increase and glow effect | Same as others |
| Gradient Fades | Left/right fade edges | May be missing |

---

### 2.6 Media Page - Content Differences

| Feature | React | HTML |
|---------|-------|------|
| Article Images | S3 bucket URLs (grunerrenewable.s3...) | Local assets or different URLs |
| Article Count | 8 articles with real links | Potentially fewer |
| Press Highlights | 3 stats (60M, 220 Cr, 8+ Publications) | May differ |

---

### 2.7 Blog Page - MISSING IN HTML

The `src/pages/Blog.tsx` page has **no HTML equivalent**. This is a complete gap.

---

## Section 3: Header/Footer/Navigation

### Header (`Header.tsx` vs header in HTML files)

| Feature | React | HTML |
|---------|-------|------|
| Scroll Effect | Framer Motion opacity transform | CSS class toggle |
| Mobile Menu | AnimatePresence animations | Basic toggle |
| Dropdown | Hover with AnimatePresence | CSS hover |
| Active Link | Dynamic based on `location.pathname` | Manual per-page |

**Navigation Structure Match:** Both versions have identical menu items and dropdown structure.

### Footer (`Footer.tsx` vs footer in HTML files)

| Feature | React | HTML |
|---------|-------|------|
| Year | Dynamic `new Date().getFullYear()` | Hardcoded "2024" |
| Social Links | LinkedIn, Twitter with hover effects | Similar |
| Logo | Inverted with `brightness-0 invert` | Similar filter |

---

## Section 4: Global Components Comparison

### Page Loader
- Both implement branded loading screen with logo and progress bar
- Implementation differs: React uses component, HTML uses standalone JS

### Animations
- React: Framer Motion (`motion.div`, `useInView`, `AnimatePresence`)
- HTML: CSS keyframes + IntersectionObserver in `animations.js`

### Form Validation
- React: `react-hook-form` + `zod` schemas
- HTML: Vanilla JS in `form.js`

---

## Section 5: Assets Comparison

### Images
| Location | React | HTML |
|----------|-------|------|
| Logo | `src/assets/gruner-logo.png` | `static-html/assets/images/gruner-logo.png` |
| Hero Video | `src/assets/hero-video.mp4` | `static-html/assets/images/hero-video.mp4` |
| CSTR Images | `src/assets/cstr-*.jpg` | `static-html/assets/images/cstr-*.jpg` |

**Status:** Assets appear synchronized from previous conversion.

### External Images (S3)
- Leadership photos use S3 URLs in both versions
- Media page images use S3 URLs in React but may use local files in HTML

---

## Section 6: CSS Architecture Notes

HTML version uses modular CSS with BEM compatibility layer:
- `variables.css` - Design tokens
- `base.css` - Reset/typography
- `bem-compat.css` - ~700 lines bridging BEM to flat CSS
- Page-specific CSS files

The BEM compatibility approach is working but adds maintenance overhead.

---

## Section 7: Technical Observations

### Missing in HTML
1. Blog page completely absent
2. Embla carousel library not included
3. Updated leadership data (4 team members)
4. Contact page restructured layout
5. Social media icons in contact section
6. Map branding overlay
7. Technology CTA updated styling

### Unchanged/Synced
1. Solution subpages structure
2. Careers page
3. General navigation structure
4. Most text content (company description, vision, mission)
5. Basic page layouts

---

## Section 8: Update Strategy Plan

### Option A: Targeted Sync (Recommended)

Estimated effort: Medium
Risk level: Low

```text
Priority 1 - Critical (UI Regressions)
+---------------------------------------+
| 1. About Page Leadership Section      |
|    - Add 4 missing team members       |
|    - Convert to carousel layout       |
|    - Add navigation arrows            |
|    - Update LinkedIn icon visibility  |
+---------------------------------------+
| 2. Contact Page Layout                |
|    - Restructure to vertical flow     |
|    - Add Quick Response Promise card  |
|    - Add Connect With Us card         |
|    - Add social media icons           |
|    - Update map with branding overlay |
+---------------------------------------+

Priority 2 - Visual Refinements
+---------------------------------------+
| 3. Technology CTA Styling             |
|    - Increase text-sm to text-base    |
|    - Update padding px-5 to px-6      |
+---------------------------------------+
| 4. Home Page Map                      |
|    - Add Gruner brand label           |
|    - Verify filter for dark bg        |
+---------------------------------------+
| 5. Media Page                         |
|    - Verify all article links/images  |
+---------------------------------------+

Priority 3 - New Content
+---------------------------------------+
| 6. Create Blog Page (blog.html)       |
|    - Full page conversion             |
+---------------------------------------+
```

### Option B: Full Rebuild

Estimated effort: High
Risk level: Medium (regression potential)

Re-convert all 13+ pages from scratch using current React source as reference. This ensures 100% parity but requires more time.

---

## Section 9: Dependency Impact Analysis

### Leadership Carousel
- Requires: Embla Carousel JS or custom slider implementation
- CSS: New styles for carousel navigation, slide containers
- Files affected: `about.html`, `css/pages/about.css`, new JS file

### Contact Layout
- Requires: Grid restructuring only (no new JS)
- CSS: New card styles, stacking layout
- Files affected: `contact.html`, `css/pages/contact.css`

### Blog Page
- Requires: Full new page creation
- CSS: New `css/pages/blog.css`
- Files affected: New `blog.html`, CSS, update navigation in all 13 pages

---

## Section 10: Risk Assessment

| Risk | Impact | Mitigation |
|------|--------|------------|
| Carousel JS complexity | Medium | Use established library (Swiper/Glide) |
| Breaking existing styles | Low | Test incrementally, backup before changes |
| Navigation updates for Blog | Low | Global header is templated |
| Missing assets | Low | All assets appear synced already |
| Footer year hardcode | Trivial | Change "2024" to dynamic JS |

---

## Recommendation

**Proceed with Option A: Targeted Sync**

Focus on the 6 priority items above. The HTML structure is solid and the BEM compatibility layer works. A surgical update of specific sections is more efficient than a full rebuild.

Estimated update scope:
- 2 major page restructures (About Leadership, Contact)
- 2 minor style updates (Technology, Home Map)
- 1 new page creation (Blog)
- Navigation updates across all pages for Blog link
