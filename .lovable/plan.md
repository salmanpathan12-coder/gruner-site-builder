

# Static HTML Export Fix Plan

## Executive Summary
This plan fixes inconsistencies in the static HTML export to ensure it fully matches the React design and functions correctly. Changes are structural/technical only - no visual design, layout, or content changes.

---

## Phase 1: Template Standardization

### 1.1 Canonical Templates (from index.html)

Use these exact structures across ALL 14 HTML pages:

**Page Loader (canonical):**
```html
<div class="page-loader" id="pageLoader">
  <div class="page-loader__content">
    <img src="assets/images/gruner-logo.png" alt="Gruner" class="page-loader__logo">
    <div class="page-loader__bar">
      <div class="page-loader__progress"></div>
    </div>
    <p class="page-loader__text">Loading...</p>
  </div>
</div>
```

**Header structure** - already consistent with BEM naming
**Footer structure** - needs standardization (see details below)

### 1.2 Files Requiring Template Updates

| File | Loader Fix | Header Fix | Footer Fix |
|------|------------|------------|------------|
| `about.html` | Missing `<p>` text | OK | Restructure |
| `technology.html` | Missing `<p>` text | OK | Restructure |
| `media.html` | OK | OK | Restructure |
| `solutions.html` | OK | OK | Restructure |
| `careers.html` | OK | OK | Restructure |
| `contact.html` | OK | OK | Restructure |
| `blog.html` | OK | OK | Restructure |
| `solutions/*.html` (6 files) | OK | OK | Restructure |

---

## Phase 2: CSS Consistency Fixes

### 2.1 Footer CSS Mismatch

**Problem:** `footer.css` uses flat selectors (`.footer-grid`) but HTML uses BEM (`.footer__grid`)

**Solution:** Update `footer.css` to use BEM selectors matching the HTML:

```css
/* Change FROM flat selectors */
.footer-grid { ... }
.footer-brand { ... }
.footer-logo { ... }

/* TO BEM selectors */
.footer__grid { ... }
.footer__brand { ... }
.footer__logo-img { ... }
```

### 2.2 Complete BEM Compatibility Layer

The `bem-compat.css` file already covers most BEM classes. Add missing definitions:

```css
/* Missing footer BEM classes */
.footer__divider { ... }
.footer__main { ... }
.footer__grid { ... }
.footer__column { ... }
.footer__heading { ... }
.footer__list { ... }
.footer__description { ... }
.footer__bottom { ... }
.footer__bottom-inner { ... }
.footer__copyright { ... }
.footer__social { ... }
.footer__social-link { ... }
.footer__legal { ... }
```

### 2.3 CSS Variables Verification

`variables.css` already includes `--section-padding-y` and `--section-padding-y-sm`. No changes needed.

---

## Phase 3: JavaScript Consolidation

### 3.1 Create `js/core.js`

Consolidate shared functionality from existing files into a single entry point:

```javascript
/**
 * GRUNER CORE.JS - Unified entry point
 * Handles: loader, mobile menu, dropdowns, scroll animations
 */

(function() {
  'use strict';
  
  // Import utilities from utils.js (already loaded)
  
  // 1. Page Loader (from page-loader.js)
  function initLoader() { ... }
  
  // 2. Mobile Menu (from header.js)
  function initMobileMenu() { ... }
  
  // 3. Dropdown Navigation (from header.js)
  function initDropdowns() { ... }
  
  // 4. Scroll Animations (from animations.js)
  function initScrollAnimations() { ... }
  
  // Initialize all on DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    initLoader();
    initMobileMenu();
    initDropdowns();
    initScrollAnimations();
  });
})();
```

### 3.2 Keep Existing JS Files

Maintain backward compatibility - existing JS files continue working. `core.js` provides a unified alternative.

---

## Phase 4: Asset Path Verification

### 4.1 Path Rules

| Location | Image/Video Path |
|----------|-----------------|
| Root pages (`index.html`, `about.html`, etc.) | `assets/images/...` |
| Solution subpages (`solutions/*.html`) | `../assets/images/...` |

### 4.2 Verification Checklist

All paths verified correct in existing files:
- Root pages: `src="assets/images/..."` 
- Subpages: `src="../assets/images/..."` 

---

## Phase 5: Animation Conversion

### 5.1 Current State (Already Implemented)

Framer Motion behaviors are already converted to vanilla JS:
- `animations.js` - IntersectionObserver for scroll animations
- `data-anim` attributes using `.scroll-fade-up`, `.scroll-fade-left`, etc.
- `.in-view` class added on intersection
- CSS transitions handle the actual animations

### 5.2 Animation Classes (Already Working)

```css
/* In animations.css */
.scroll-fade-up { opacity: 0; transform: translateY(20px); }
.scroll-fade-up.in-view { opacity: 1; transform: translateY(0); }
```

No additional conversion needed - this is already complete.

---

## Phase 6: Quality Gates

### 6.1 Template Consistency Check

Run after implementation:
```bash
# Verify identical header structure
grep -A 30 'class="header"' static-html/*.html | diff ...

# Verify identical footer structure  
grep -A 50 'class="footer"' static-html/*.html | diff ...

# Verify identical loader structure
grep -A 10 'class="page-loader"' static-html/*.html | diff ...
```

### 6.2 Class-CSS Match Verification

```bash
# Extract all classes from HTML
grep -oP 'class="[^"]*"' static-html/*.html | sort -u > html-classes.txt

# Extract all selectors from CSS
grep -oP '\.[a-z][a-z0-9_-]*' static-html/css/*.css | sort -u > css-selectors.txt

# Compare and identify mismatches
comm -23 html-classes.txt css-selectors.txt
```

### 6.3 Asset Path Check

```bash
# Find all image/video sources and verify files exist
grep -ohP 'src="[^"]*\.(png|jpg|jpeg|svg|mp4)"' static-html/**/*.html | 
  while read path; do
    test -f "static-html/$path" || echo "Missing: $path"
  done
```

### 6.4 Console Error Check

Open each page in browser dev tools and verify zero JavaScript errors.

---

## Files to Modify

| File | Action | Changes |
|------|--------|---------|
| `css/footer.css` | MODIFY | Convert flat selectors to BEM |
| `css/bem-compat.css` | MODIFY | Add missing footer BEM definitions |
| `js/core.js` | CREATE | Consolidated JS entry point |
| `about.html` | MODIFY | Standardize loader + footer |
| `technology.html` | MODIFY | Standardize loader + footer |
| `media.html` | MODIFY | Standardize footer |
| `solutions.html` | MODIFY | Standardize footer |
| `careers.html` | MODIFY | Standardize footer |
| `contact.html` | MODIFY | Standardize footer |
| `blog.html` | MODIFY | Standardize footer |
| `solutions/project-development.html` | MODIFY | Standardize footer |
| `solutions/engineering-construction.html` | MODIFY | Standardize footer |
| `solutions/rd.html` | MODIFY | Standardize footer |
| `solutions/cng-retail.html` | MODIFY | Standardize footer |
| `solutions/bio-gas.html` | MODIFY | Standardize footer |
| `solutions/om.html` | MODIFY | Standardize footer |

---

## Output Structure

Final structure matches requirements:

```text
static-html/
├── assets/
│   ├── images/
│   └── logos/
├── css/
│   ├── variables.css
│   ├── base.css
│   ├── layout.css
│   ├── components.css
│   ├── animations.css
│   ├── header.css
│   ├── footer.css
│   ├── bem-compat.css
│   └── pages/
│       ├── home.css
│       ├── about.css
│       ├── technology.css
│       ├── solutions.css
│       ├── media.css
│       ├── blog.css
│       ├── careers.css
│       └── contact.css
├── js/
│   ├── core.js (NEW)
│   ├── utils.js
│   ├── header.js
│   ├── animations.js
│   ├── page-loader.js
│   ├── counter.js
│   └── [page-specific scripts]
├── index.html
├── about.html
├── technology.html
├── solutions.html
├── media.html
├── blog.html
├── careers.html
├── contact.html
└── solutions/
    ├── project-development.html
    ├── engineering-construction.html
    ├── rd.html
    ├── cng-retail.html
    ├── bio-gas.html
    └── om.html
```

---

## Technical Notes

1. **BEM naming is already adopted** in HTML - the main issue is CSS selectors in `footer.css` using flat naming
2. **Animations are already vanilla JS** - no Framer Motion conversion needed
3. **CSS variables are complete** - `variables.css` has all required tokens
4. **Asset paths are correct** - just need verification pass
5. **The bem-compat.css file (2466 lines)** already provides comprehensive BEM definitions

