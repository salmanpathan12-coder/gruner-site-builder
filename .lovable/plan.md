

# Updated Home Page Sync Plan (Including Header & Footer)

## Scope Confirmation

This plan now includes:
- All Home page content sections (as previously planned)
- Header structure sync with React
- Footer structure sync with React
- File changes limited to Home page only (index.html) + shared CSS/JS

---

## Part A: Header Sync

### Current State Analysis

**React Header Navigation (lines 26-60):**
```
Home → About (dropdown) → Technology → Solutions (dropdown) → Media (dropdown) → Blog → Contact
```

**HTML Header Navigation (lines 48-86):**
```
Home → About (dropdown) → Technology → Solutions (dropdown) → Media → Blog → Careers → Contact
```

### Required Changes

#### A.1 Remove Careers from Header

**File**: `static-html/index.html`

**Desktop Nav (line 85)**: DELETE
```html
<a href="careers.html" class="header__link">Careers</a>
```

**Mobile Nav (line 105)**: DELETE
```html
<a href="careers.html" class="header__mobile-link">Careers</a>
```

#### A.2 Add Media Dropdown

**File**: `static-html/index.html`

**Replace line 83** (current):
```html
<a href="media.html" class="header__link">Media</a>
```

**With dropdown structure**:
```html
<div class="header__dropdown">
  <a href="media.html" class="header__link">
    Media
    <svg class="header__dropdown-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  </a>
  <div class="header__dropdown-menu">
    <a href="media.html" class="header__dropdown-link">Media</a>
    <a href="media.html#gallery" class="header__dropdown-link">Gallery</a>
    <a href="media.html#coverage" class="header__dropdown-link">News</a>
  </div>
</div>
```

### Header JS Verification

**File**: `static-html/js/header.js`

Current implementation already supports:
- Dropdown hover/click behavior
- Mobile menu toggle
- Scroll effect

No JS changes needed for header sync.

---

## Part B: Footer Sync

### Current State Analysis

**React Footer (Footer.tsx):**
- Company: About Us, Leadership, Careers, News & Media
- Solutions: EPC Services, O&M Services, Technology, Projects
- Resources: Investor Relations, Sustainability → /technology, Certifications → /#awards, Contact
- Year: Dynamic

**HTML Footer (lines 824-852):**
- Company: About Us, Leadership, Careers, News & Media ✓
- Solutions: EPC Services, O&M Services, Technology, Projects ✓
- Resources: Investor Relations, Sustainability → #, Certifications → #awards, Contact
- Year: 2024 (hardcoded)

### Required Changes

#### B.1 Fix Resources Links

**File**: `static-html/index.html` (lines 847-848)

**Change**:
```html
<li><a href="#">Sustainability</a></li>
<li><a href="#awards">Certifications</a></li>
```

**To**:
```html
<li><a href="technology.html">Sustainability</a></li>
<li><a href="index.html#awards">Certifications</a></li>
```

#### B.2 Dynamic Year

**File**: `static-html/index.html` (line 858)

**Change**:
```html
<p class="footer__copyright">© 2024 Gruner Renewable Energy Pvt. Ltd. All rights reserved.</p>
```

**To**:
```html
<p class="footer__copyright">© <span id="footerYear">2024</span> Gruner Renewable Energy Pvt. Ltd. All rights reserved.</p>
```

**Add to JS section (after line 905)**:
```javascript
// Dynamic footer year
document.getElementById('footerYear').textContent = new Date().getFullYear();
```

---

## Part C: Home Page Content Sections (Original Plan)

### Phase 1: Counter & Stats Fixes

**Context Section (after Trusted By)**
- Fix counter JS attribute format
- Update suffix styling (M+, %)
- Correct icon SVGs (TrendingUp, Fuel, Leaf)

**Files**: `index.html` lines 224-246, `css/pages/home.css`

### Phase 2: About Gruner Section

- Fix header alignment (center)
- Match spacing (mb-12 = 3rem)
- Correct gradient bar width
- Stats bar gradient direction

**Files**: `index.html`, `css/pages/home.css`

### Phase 3: Solutions Section (Our Expertise)

- Add hover/click interactivity JS
- Corner accent SVG animation
- Card lift effect CSS
- Gradient colors sync

**Files**: `index.html`, `css/pages/home.css`, NEW `js/solutions-cards.js`

### Phase 4: Process Section (How It Works)

- Animated line fill on scroll
- Moving progress dot animation
- Node glow pulse

**Files**: `index.html`, `css/pages/home.css`, NEW `js/process-timeline.js`

### Phase 5: Media Mentions (As Featured In)

- Infinite scroll animation
- Duplicate logos for seamless loop
- Gradient fade edges

**Files**: `index.html`, `css/pages/home.css`, NEW `js/media-slider.js`

### Phase 6: Projects Map (Upcoming Bio-CNG Plants)

- Interactive SVG markers
- Hover sync with state list
- Brand label below map
- Left/right slide animations
- Map CSS filter for dark bg

**Files**: `index.html`, `css/pages/home.css`, `js/map-interaction.js`

### Phase 7: Leadership Section

- Alignment sync
- Card gradient match (foreground to foreground/95)
- LinkedIn button styling

**Files**: `css/pages/home.css`

### Phase 8: Awards Section (Recognition & Certifications)

- Center alignment
- Icon container gradient

**Files**: `css/pages/home.css`

### Phase 9: Contact Section (Get in Touch)

- Center alignment on header
- Max-width constraint

**Files**: `css/pages/home.css`

---

## Complete File Change Summary

| Action | File | Changes |
|--------|------|---------|
| MODIFY | `static-html/index.html` | Header (remove Careers, add Media dropdown), Footer (fix links, dynamic year), all content sections |
| MODIFY | `static-html/css/pages/home.css` | All styling fixes for 9 sections |
| MODIFY | `static-html/css/header.css` | Minor dropdown styling if needed |
| MODIFY | `static-html/js/map-interaction.js` | Enhanced marker interactivity |
| CREATE | `static-html/js/solutions-cards.js` | Card hover/expand logic |
| CREATE | `static-html/js/process-timeline.js` | Timeline animations |
| CREATE | `static-html/js/media-slider.js` | Infinite scroll |

**Total: 4 modified files + 3 new JS files**

---

## Execution Order

1. Header structure changes (remove Careers, add Media dropdown)
2. Footer fixes (links, dynamic year)
3. CSS fixes for all sections
4. HTML structure updates for sections
5. New JS files creation
6. Test all interactions

---

## Parity Confirmation

After implementing this complete plan:

| Component | React | HTML | Parity |
|-----------|-------|------|--------|
| Header Navigation | Home, About, Technology, Solutions, Media (dropdown), Blog, Contact | Same | 100% |
| Header (No Careers) | Careers in footer only | Same | 100% |
| Media Dropdown | Gallery, News sub-items | Same | 100% |
| Footer Links | All 3 columns matching | Same | 100% |
| Footer Year | Dynamic | Same | 100% |
| All 9 Home Sections | Complete parity | Same | 100% |

**Result: HTML Home page will be 100% identical to React including header and footer.**

---

## Why Header/Footer Was Skipped Earlier

Your previous instruction stated:
> "DO NOT touch header/footer logic"

I interpreted this as a hard boundary. Now that you've clarified you want structural parity (navigation links, dropdowns, Careers position), I've included these in the updated plan.

---

## Scope Confirmation

This plan modifies ONLY:
- `static-html/index.html` (Home page)
- `static-html/css/pages/home.css`
- `static-html/css/header.css` (if needed for dropdown)
- `static-html/js/*.js` files

NO changes to other HTML pages. Header/footer changes are in index.html only - other pages would need separate updates if global sync is desired.

