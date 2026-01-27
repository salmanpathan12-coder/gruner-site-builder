
# Fix Standalone HTML Version - Complete CSS Alignment

## Problem Summary

After thorough analysis of the standalone HTML version at `http://13.233.180.71/gre-web-new/`, I have identified the root cause of the styling issues: **Multiple BEM-style CSS classes in the HTML have no corresponding CSS definitions**.

The `bem-compat.css` file was created to bridge the gap between BEM-style HTML classes and flat CSS, but it is incomplete. Many critical section styles are missing entirely.

---

## Missing CSS Classes (Critical)

The following BEM-style classes used in `index.html` have **NO CSS definitions**:

| Section | Missing Classes | Impact |
|---------|-----------------|--------|
| **Solutions** | `.solutions__card`, `.solutions__card-header`, `.solutions__card-icon`, `.solutions__card-stat`, `.solutions__card-stat-value`, `.solutions__card-stat-label`, `.solutions__card-title`, `.solutions__card-description`, `.solutions__card-features`, `.solutions__card-feature` | Cards appear unstyled |
| **Process** | `.process`, `.process__timeline`, `.process__line`, `.process__line-fill`, `.process__steps`, `.process__step`, `.process__step-node`, `.process__step-number`, `.process__step-title`, `.process__step-description` | Timeline unstyled |
| **Media Mentions** | `.media-mentions`, `.media-mentions__label`, `.media-mentions__logos`, `.media-mentions__logo` | Logo section broken |
| **Projects Map** | `.projects-map`, `.projects-map__grid`, `.projects-map__list`, `.projects-map__states`, `.projects-map__state`, `.projects-map__state-count`, `.projects-map__state-name`, `.projects-map__state-status`, `.projects-map__state--active`, `.projects-map__state-status--active`, `.projects-map__summary`, `.projects-map__summary-stat`, `.projects-map__summary-value`, `.projects-map__summary-label`, `.projects-map__visual`, `.projects-map__glow`, `.projects-map__image`, `.projects-map__legend`, `.projects-map__legend-item`, `.projects-map__legend-dot`, `.projects-map__legend-divider` | Map section broken |
| **Team** | `.team`, `.team__grid`, `.team__founder`, `.team__founder-image`, `.team__founder-info`, `.team__founder-badge`, `.team__founder-name`, `.team__founder-role`, `.team__founder-bio`, `.team__founder-social`, `.team__social-btn`, `.team__leaders`, `.team__leader`, `.team__leader-image`, `.team__leader-info`, `.team__leader-name`, `.team__leader-role`, `.team__leader-bio` | Team section broken |
| **Awards** | `.awards`, `.awards__grid`, `.awards__item`, `.awards__icon`, `.awards__label`, `.awards__description` | Awards unstyled |
| **Contact** | `.contact`, `.contact__grid`, `.contact__form-wrapper`, `.contact__form`, `.contact__form-group`, `.contact__form-group--full`, `.contact__label`, `.contact__input`, `.contact__textarea`, `.contact__submit`, `.contact__info`, `.contact__info-card`, `.contact__info-title`, `.contact__info-items`, `.contact__info-item`, `.contact__info-icon`, `.contact__info-label`, `.contact__info-value`, `.contact__info-text`, `.contact__partnership-link` | Form completely broken |

---

## Solution

Add comprehensive CSS for all missing BEM-style classes to `bem-compat.css`.

---

## Implementation Details

### 1. Solutions Section Styles (~120 lines)

Add styles for the dark-themed solution cards with:
- Card layout with header, icon, stats, title, description, features
- Hover effects with gradient border glow
- Feature tags styling
- Responsive grid behavior

### 2. Process Section Styles (~100 lines)

Add styles for the horizontal timeline with:
- Timeline connector line with gradient fill
- Step nodes with icons and numbers
- Step titles and descriptions
- Responsive vertical layout on mobile

### 3. Media Mentions Section Styles (~40 lines)

Add styles for:
- Section label with icon
- Logo grid layout
- Logo hover effects with brightness filter

### 4. Projects Map Section Styles (~150 lines)

Add styles for:
- Two-column grid (list + map)
- State list items with count, name, status badges
- Active state highlighting
- Summary statistics bar
- Map container with glow effect
- Legend styling

### 5. Team Section Styles (~120 lines)

Add styles for:
- Founder card (large, featured)
- Leader cards (smaller grid)
- Image containers with object-fit
- Role badges and social buttons
- Bio text styling

### 6. Awards Section Styles (~60 lines)

Add styles for:
- Six-column grid (responsive)
- Icon boxes with gradient background
- Label and description text
- Hover lift effect

### 7. Contact Section Styles (~120 lines)

Add styles for:
- Dark background theme
- Two-column grid (form + info)
- Form inputs, labels, textarea
- Info cards with icon items
- Partnership link styling
- Form validation states

---

## Files to Modify

| File | Changes |
|------|---------|
| `static-html/css/bem-compat.css` | Add ~700 lines of CSS for missing sections |

---

## Technical Notes

All new CSS will:
- Use existing CSS variables from `variables.css`
- Follow the established design patterns
- Include responsive breakpoints (768px, 1024px)
- Include hover/focus states
- Support scroll animations with `.scroll-fade-up` and `.in-view` classes

---

## Additional Fixes Identified

### 1. Section Header Light Variant
The `.section-header--light` class for dark backgrounds may need color adjustments.

### 2. Button Outline Light Variant
The `.btn-outline-light` class used in hero section needs definition.

### 3. CSS Variable Dependencies
Some styles may reference undefined alpha variables like `--primary-alpha-10`. These will be added to `variables.css`.

---

## Implementation Order

1. Add missing CSS variables to `variables.css` (alpha colors)
2. Add Solutions section CSS to `bem-compat.css`
3. Add Process section CSS
4. Add Media Mentions section CSS
5. Add Projects Map section CSS
6. Add Team section CSS
7. Add Awards section CSS
8. Add Contact section CSS
9. Add utility/variant classes

---

## Expected Outcome

After implementing these fixes, all 13 HTML pages will render correctly with:
- Properly styled hero, header, footer
- Working solutions cards with hover effects
- Visible process timeline
- Media logos section
- Interactive projects map
- Team member cards
- Awards grid
- Functional contact form
- All scroll animations working
