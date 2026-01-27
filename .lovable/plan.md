

# Fix Standalone HTML Version - Complete CSS/HTML Alignment

## Problem Identified

There is a **critical CSS class naming mismatch** between the HTML files and CSS files. The HTML uses BEM-style naming (`hero__video`, `header__nav`) while the CSS uses flat naming (`hero-video`, `nav`).

---

## Affected Files

### HTML Files with BEM Classes (need updating)
All 13 HTML pages use BEM-style classes that don't match the CSS:

| HTML Class | CSS Class (Expected) |
|------------|---------------------|
| `header__bg` | `header-backdrop` |
| `header__container` | `header-content` |
| `header__logo` | `header-logo` |
| `header__nav` | `nav` |
| `header__link` | `nav-link` |
| `header__dropdown` | `nav-item` |
| `header__dropdown-menu` | `nav-dropdown` |
| `header__dropdown-link` | `nav-dropdown-link` |
| `header__cta` | `nav-cta` |
| `header__mobile-toggle` | `mobile-menu-btn` |
| `header__mobile-menu` | `mobile-menu` |
| `header__mobile-link` | `mobile-menu-link` |
| `hero__video` | `hero-video` |
| `hero__overlay` | `hero-overlay` |
| `hero__content` | `hero-content` |
| `hero__title` | `hero-title` |
| `hero__metrics` | `hero-metrics` |
| `trusted-by` | `trusted-section` |
| `trusted-by__logos` | `trusted-logos` |
| `trusted-by__logo` | `trusted-logo` |
| `context__grid` | `context-grid` |
| `context__left` | `context-left` |
| `context__right` | `context-right` |
| (and 50+ more mismatches) |

### JavaScript Files
The JS files also reference wrong selectors:

| JS File | Looking For | Should Be |
|---------|-------------|-----------|
| `header.js` | `.mobile-menu-btn` | `#mobileMenuToggle` or `.header__mobile-toggle` |
| `header.js` | `.mobile-menu` | `#mobileMenu` or `.header__mobile-menu` |

---

## Solution Options

### Option A: Update All HTML Classes (Recommended)
Update all 13 HTML files to use the CSS naming convention (flat names without BEM `__` syntax).

**Pros:** CSS files are already correct and comprehensive
**Cons:** Requires updating all HTML files

### Option B: Add BEM-Style CSS
Add new CSS rules that match the BEM classes used in HTML.

**Pros:** HTML stays unchanged
**Cons:** Creates duplicate CSS rules, harder to maintain

---

## Recommended Implementation: Option A

### Phase 1: Update Header Structure (All 13 Files)

Change header classes in all HTML files:

**Before:**
```html
<header class="header" id="header">
  <div class="header__bg"></div>
  <div class="header__container container-wide">
    <a href="index.html" class="header__logo">
    <nav class="header__nav">
      <a class="header__link">
      <div class="header__dropdown">
        <div class="header__dropdown-menu">
          <a class="header__dropdown-link">
```

**After:**
```html
<header class="header" id="header">
  <div class="header-backdrop"></div>
  <div class="header-content container-wide">
    <a href="index.html" class="header-logo-link">
      <img class="header-logo">
    <nav class="nav">
      <a class="nav-link">
      <div class="nav-item">
        <div class="nav-dropdown">
          <a class="nav-dropdown-link">
```

### Phase 2: Update Hero Section (index.html)

Change hero classes:

**Before:**
```html
<section class="hero" id="hero">
  <div class="hero__video-container">
    <video class="hero__video">
  <div class="hero__overlay"></div>
  <div class="hero__content container-wide">
    <h1 class="hero__title">
    <div class="hero__metrics">
```

**After:**
```html
<section class="hero" id="hero">
  <video class="hero-video">
  <div class="hero-overlay"></div>
  <div class="hero-content container-wide">
    <h1 class="hero-title">
    <div class="hero-metrics">
```

### Phase 3: Update Section Classes (All Pages)

| Section | From | To |
|---------|------|-----|
| Trusted By | `trusted-by`, `trusted-by__*` | `trusted-section`, `trusted-*` |
| Context | `context__*` | `context-*` |
| About | `about-gruner__*` | `about-gruner-*` |
| Solutions | `solutions__*` | Align with `pages/home.css` |
| Process | `process__*` | Align with CSS |
| Map | `map__*` | Align with CSS |
| Team | `team__*` | Align with CSS |
| Contact Form | `contact__*` | Align with CSS |
| Footer | `footer__*` | `footer-*` |

### Phase 4: Update JavaScript Selectors

**header.js** - Update selectors:
```javascript
// Change from:
mobileMenuBtn = document.querySelector('.mobile-menu-btn');
mobileMenu = document.querySelector('.mobile-menu');

// To:
mobileMenuBtn = document.getElementById('mobileMenuToggle');
mobileMenu = document.getElementById('mobileMenu');
```

### Phase 5: Fix Missing Page-Specific CSS

The `pages/home.css` ends with a comment "Additional section styles to be added..." indicating it's incomplete. The following sections need CSS added:

- Solutions Section (`.solutions-section`, `.solutions-grid`, `.solution-card`)
- Process Section (`.process-section`, `.process-timeline`, `.process-step`)
- Projects Map Section (`.map-section`, `.india-map`, `.map-marker`)
- Media Mentions Section (`.media-section`, `.media-logos`)
- Team Section (`.team-section`, `.team-grid`, `.team-card`)
- Awards Section (`.awards-section`, `.awards-grid`)
- CTA Section (`.cta-section`)

---

## Files to Update

| File | Changes Required |
|------|------------------|
| `static-html/index.html` | Update all section class names |
| `static-html/about.html` | Update header/footer + section classes |
| `static-html/technology.html` | Update header/footer + section classes |
| `static-html/solutions.html` | Update header/footer + section classes |
| `static-html/media.html` | Update header/footer + section classes |
| `static-html/careers.html` | Update header/footer + section classes |
| `static-html/contact.html` | Update header/footer + section classes |
| `static-html/solutions/*.html` (6 files) | Update header/footer classes |
| `static-html/js/header.js` | Update DOM selectors |
| `static-html/css/pages/home.css` | Add missing section styles |

---

## Testing After Fix

Once updated, the static HTML can be tested by:

1. **Local HTTP Server:**
   ```bash
   cd static-html
   npx serve .
   # or
   python -m http.server 8000
   ```

2. **Direct File Opening:** Open `static-html/index.html` in browser

3. **Deploy to Static Host:** Push to GitHub and deploy via Netlify/Vercel/GitHub Pages

---

## Summary

- **Root Cause:** BEM-style class names in HTML don't match flat class names in CSS
- **Solution:** Align all HTML files to use the existing CSS class naming
- **Scope:** 13 HTML files + 1 JS file + potentially extend home.css
- **Estimated Changes:** ~100+ class name updates across all files

