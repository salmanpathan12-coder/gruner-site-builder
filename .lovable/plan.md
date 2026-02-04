

# Plan: Add Blog Page to Static HTML Version

## Overview

Create a complete `blog.html` page matching the React `Blog.tsx` component, along with required CSS and navigation updates across all 13 HTML pages.

---

## Phase 1: Create Blog HTML Page

### File: `static-html/blog.html`

**Structure (matching React exactly):**

```
blog.html
├── Page Loader (standard)
├── Header (with Blog link active)
├── Main Content
│   ├── Hero Section
│   │   ├── Breadcrumb (Home / Blog)
│   │   ├── Title: "Blog"
│   │   └── Description text
│   ├── Blog Posts Grid
│   │   ├── Card 1: "The Future of Bio-CNG..."
│   │   ├── Card 2: "Understanding CSTR Technology..."
│   │   └── Card 3: "Agricultural Waste to Clean Energy..."
│   └── Coming Soon Notice
└── Footer
```

### Blog Post Cards - Data to Include:

| # | Title | Category | Author | Date | Read Time | Image URL |
|---|-------|----------|--------|------|-----------|-----------|
| 1 | The Future of Bio-CNG in India's Energy Transition | Industry Insights | Gruner Team | Jan 15, 2025 | 5 min read | S3: 1efe4048fa1.jpeg |
| 2 | Understanding CSTR Technology for Biogas Production | Technology | Technical Team | Jan 10, 2025 | 8 min read | S3: 873015d8f04.jpeg |
| 3 | Agricultural Waste to Clean Energy: The Complete Process | Process | Operations Team | Jan 5, 2025 | 6 min read | S3: 026c6cb8455.jpeg |

### Card UI Components:
- Category badge (top-left overlay on image)
- Image with hover scale effect
- Date icon + text (Calendar icon)
- Read time icon + text (Clock icon)
- Title (line-clamp-2)
- Excerpt (line-clamp-3)
- Author with icon (User icon)
- "Read More" link with arrow

---

## Phase 2: Create Blog CSS

### File: `static-html/css/pages/blog.css`

**CSS Classes to Create:**

```css
/* Hero Section */
.blog-hero
.blog-hero__breadcrumb
.blog-hero__title
.blog-hero__description

/* Blog Grid */
.blog-grid
.blog-card
.blog-card__image
.blog-card__category
.blog-card__content
.blog-card__meta
.blog-card__title
.blog-card__excerpt
.blog-card__footer
.blog-card__author
.blog-card__read-more

/* Coming Soon Notice */
.blog-coming-soon
.blog-coming-soon__title
.blog-coming-soon__text
```

**Styling Approach:**
- Follow existing CSS patterns from `media.css` (article cards)
- Use CSS variables from `variables.css`
- Maintain responsive grid: 1 col mobile, 2 col tablet, 3 col desktop
- Match Tailwind utility translations:
  - `rounded-xl` = `border-radius: 0.75rem`
  - `shadow-md` = `var(--shadow-md)`
  - `line-clamp-2/3` = `-webkit-line-clamp: 2/3`
  - `bg-muted/30` = `var(--muted-alpha-30)` or equivalent

---

## Phase 3: Update Navigation (13 Files)

### Files to Update:

**Main Pages (7 files):**
1. `static-html/index.html`
2. `static-html/about.html`
3. `static-html/technology.html`
4. `static-html/solutions.html`
5. `static-html/media.html`
6. `static-html/careers.html`
7. `static-html/contact.html`

**Solution Subpages (6 files):**
8. `static-html/solutions/project-development.html`
9. `static-html/solutions/engineering-construction.html`
10. `static-html/solutions/rd.html`
11. `static-html/solutions/cng-retail.html`
12. `static-html/solutions/bio-gas.html`
13. `static-html/solutions/om.html`

### Navigation Changes Per File:

**Desktop Nav - Add Blog link after Media:**
```html
<!-- Before -->
<a href="media.html" class="header__link">Media</a>
<a href="careers.html" class="header__link">Careers</a>

<!-- After -->
<a href="media.html" class="header__link">Media</a>
<a href="blog.html" class="header__link">Blog</a>
<a href="careers.html" class="header__link">Careers</a>
```

**Mobile Nav - Same addition:**
```html
<!-- Add after Media link -->
<a href="blog.html" class="header__mobile-link">Blog</a>
```

**Note for subpages:** Use `../blog.html` relative path.

---

## Phase 4: Minor Updates

### Footer Year (Optional but Recommended)

Update hardcoded "2024" to dynamic year using existing `utils.js`:

```javascript
// In footer section of each page, or via JS:
document.querySelector('.footer__copyright-year').textContent = 
  GrunerUtils.getCurrentYear();
```

---

## File Summary

| Action | File | Type |
|--------|------|------|
| CREATE | `static-html/blog.html` | HTML |
| CREATE | `static-html/css/pages/blog.css` | CSS |
| UPDATE | 7 main HTML pages | Navigation |
| UPDATE | 6 solution subpages | Navigation |

**Total: 2 new files + 13 file updates**

---

## Dependencies

| Dependency | Source | Status |
|------------|--------|--------|
| CSS Variables | `variables.css` | Already exists |
| Base Styles | `base.css` | Already exists |
| BEM Compat | `bem-compat.css` | May need additions |
| Animations | `animations.css` | Already exists |
| Utils JS | `utils.js` | Already exists |

---

## Risk Assessment

| Risk | Level | Mitigation |
|------|-------|------------|
| CSS naming conflicts | Low | Use `.blog-` prefix consistently |
| Navigation breaks | Low | Test all 13 pages after update |
| Path issues in subpages | Low | Use relative paths (`../blog.html`) |
| Missing icons | Low | Use inline SVG (Calendar, Clock, User, Arrow) |
| Image loading | None | Same S3 URLs as React |

---

## Parity Confirmation

After implementing this plan:

| Feature | React | HTML | Parity |
|---------|-------|------|--------|
| All 14 pages | ✅ | ✅ | 100% |
| Navigation | ✅ | ✅ | 100% |
| Leadership Carousel | ✅ | ✅ | 100% |
| Contact Layout | ✅ | ✅ | 100% |
| Technology CTAs | ✅ | ✅ | 100% |
| Blog Page | ✅ | ✅ | 100% |
| Footer Year | Dynamic | Dynamic | 100% |

**Result: Full parity between React and HTML versions.**

---

## Execution Order

1. Create `css/pages/blog.css` (styles first)
2. Create `blog.html` (page structure)
3. Update 7 main page navigations
4. Update 6 subpage navigations
5. Verify all links work
6. Optional: Update footer year to dynamic

