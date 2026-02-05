
# Static HTML Home Page Visual Parity Fix Plan

## ✅ COMPLETED

All visual parity fixes have been implemented:
1. ✅ Solutions section already had "Our Expertise" subtitle
2. ✅ Leadership grid restructured to 2fr:1fr with stacked leaders
3. ✅ Media mentions moved AFTER Projects Map section
4. ✅ Solutions card features expanded by default
5. ✅ Added trusted-by BEM styles
6. ✅ Added team__leader-bio styles
7. ✅ Added section-header__subtitle styles

---

## Priority Issues to Fix

### 1. Solutions Section - Missing "Our Expertise" Subtitle
**Current HTML:** Title starts with "Why Partners Choose Gruner Renewable"
**React has:** "Our Expertise" subtitle ABOVE the main title

**Fix:** Add the subtitle span before the main heading
```html
<span class="solutions__subtitle">Our Expertise</span>
<h2>Why Partners Choose <span class="gradient-text">Gruner Renewable</span></h2>
```

**CSS needed:**
```css
.solutions__subtitle {
  display: block;
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
}
```

---

### 2. Leadership Section - Wrong Layout Structure
**Current HTML:** Shows founder + 2 leaders in same-width columns
**React:** Founder card spans 2 columns (larger), leaders stacked in 1 column

**Fix:** Update grid structure
```html
<div class="team__grid">
  <div class="team__founder"><!-- spans 2 cols --></div>
  <div class="team__leaders">
    <div class="team__leader">...</div>
    <div class="team__leader">...</div>
  </div>
</div>
```

**CSS fix:**
```css
@media (min-width: 768px) {
  .team__grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 1.5rem;
  }
}

.team__leaders {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
```

---

### 3. Media Mentions - Wrong Position & Missing Infinite Scroll
**Current HTML:** Below "How It Works" section
**React:** Below "Projects Map" section with infinite scrolling animation

**Fix Part A - Position:** Move the media-mentions section to AFTER the projects-map section

**Fix Part B - Infinite scroll CSS:**
```css
.media-mentions__track {
  display: flex;
  animation: media-scroll 20s linear infinite;
}

@keyframes media-scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
```

**HTML update:** Duplicate logos for seamless loop

---

### 4. Process Timeline Animation
**Missing:** Animated line fill and moving progress dot

**Fix:** Add animated elements and JS trigger
```html
<div class="process__line">
  <div class="process__line-fill"></div>
  <div class="process__line-dot"></div>
</div>
```

**CSS animation:**
```css
.process__line-fill--animated {
  transform: scaleX(1);
  transition: transform 1.5s ease-out;
}

.process__line-dot--animated {
  animation: process-dot-move 4s linear infinite;
}
```

---

### 5. Trusted By Logo Grid
**Issue:** Logo spacing and count visibility

**Fix:** Ensure proper responsive gap and visibility
```css
.trusted-by__logos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;
}

@media (min-width: 768px) {
  .trusted-by__logos {
    gap: 3.5rem;
  }
}
```

---

### 6. Map Marker Pulse Animation
**Missing:** Markers should have subtle pulse effect

**CSS fix:**
```css
.projects-map__marker--active {
  animation: marker-pulse 2s ease-in-out infinite;
}

@keyframes marker-pulse {
  0%, 100% { r: 1.5; opacity: 1; }
  50% { r: 2.5; opacity: 0.7; }
}
```

---

### 7. Solutions Card Features Expansion
**Current:** Features always visible
**React:** Features start expanded but can toggle

**Fix:** Initialize features as expanded (matching React default state)
```css
.solutions__card-features {
  max-height: 200px;
  opacity: 1;
}
```

---

## Files to Modify

| File | Changes |
|------|---------|
| `static-html/index.html` | Add "Our Expertise" subtitle, reorder media mentions section, fix leadership grid |
| `static-html/css/pages/home.css` | Add missing animations, fix grid layouts, add subtitle styles |
| `static-html/js/process-timeline.js` | Already exists - ensure IntersectionObserver triggers |
| `static-html/js/media-slider.js` | Already exists - verify infinite scroll works |

---

## Implementation Order

1. **Solutions section subtitle** - Quick HTML + CSS fix
2. **Leadership grid restructure** - HTML structure + CSS grid
3. **Media mentions reorder** - Move HTML section
4. **Process timeline animation** - Verify JS triggers
5. **Map marker pulse** - CSS animation
6. **Trusted By spacing** - CSS tweak
7. **Verify all animations working** - Test pass

---

## Quality Gates

After implementation:
- [ ] "Our Expertise" subtitle visible in Solutions section
- [ ] Leadership shows founder (2 cols) + stacked leaders (1 col)
- [ ] Media mentions appear AFTER Projects Map
- [ ] Media logos scroll infinitely
- [ ] Process timeline fills on scroll
- [ ] Map markers pulse on active state
- [ ] All hover effects match React smoothness

---

## Technical Notes

1. **No structural redesign** - Only fixing to match existing React layout
2. **CSS animations** - Use same timing functions as React (ease-out, linear)
3. **JavaScript** - Leverage existing IntersectionObserver pattern from animations.js
4. **BEM naming** - Maintain existing class naming convention
