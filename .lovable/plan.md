
# Static HTML Visual Parity Fix Plan - Complete Overhaul

## Executive Summary
The static HTML version has significant visual differences from the React version. This plan addresses all identified issues based on screenshot comparison and code analysis.

---

## Issues Identified (from Screenshots)

### 1. Leadership Section - MAJOR LAYOUT ISSUE
**Problem (Screenshot 1):**
- HTML: Shows founder card + 2 leader cards in a 3-column row (founder on left, 2 leaders side-by-side on right)
- The founder image is tall/stretched, text on right side of image is getting cut off
- Leaders are shown as horizontal cards with image on left, text on right

**React Version (TeamSection.tsx):**
- Founder card spans 2 columns (`md:col-span-2`) with horizontal layout (image + info side by side)
- Leaders are stacked vertically in the right column (`space-y-6`)
- Founder card is dark background with horizontal flex layout
- Leader cards are smaller with compact horizontal layout

**Fix Required:**
- Completely restructure the HTML team section
- Use `grid-template-columns: 2fr 1fr` at desktop
- Founder card: horizontal flex with image (w-40/w-48) + info
- Leaders: stacked vertically with compact card design

### 2. Solutions Section - Appears OK
The "Our Expertise" subtitle and 4-card grid look correct in Screenshot 2.

### 3. Process Section - OK
Screenshot 3 shows the "How It Works" section looks correct with 4 steps and timeline.

### 4. Projects Map Section - Mostly OK  
Screenshot 4 shows the map section looks correct.

### 5. Awards Section - Needs Grid Fix
**Problem (Screenshot 5):**
- Shows 4 cards in first row, 2 cards in second row (6 total)
- Cards are arranged in a 4-column grid on desktop

**React Version:**
- Should be a 4-column grid with even spacing

**Fix Required:**
- Verify grid is `repeat(4, 1fr)` on desktop
- Cards should fill evenly

### 6. Contact Section - OK
Screenshot 6 shows contact form looks correct.

### 7. Footer - MAJOR STRUCTURE ISSUE
**Problem (Screenshot 7):**
- HTML footer shows: Logo + description (large left column), then Company, Solutions, Resources columns
- Bottom bar shows copyright, social icons (LinkedIn, Twitter), and legal links

**React Footer Structure:**
- 5-column grid: Brand (2 cols), Company, Solutions, Resources
- Bottom bar: Copyright left, social center, legal right

**Current HTML Footer Issues:**
- The HTML footer structure is correct but CSS may not be applying properly
- Need to verify the footer grid layout is working

---

## Detailed Fixes

### Fix 1: Leadership Section Restructure

**Current HTML Structure (Wrong):**
```html
<div class="team__grid">
  <div class="team__founder"><!-- vertical layout --></div>
  <div class="team__leaders">
    <div class="team__leader"><!-- horizontal card --></div>
    <div class="team__leader"><!-- horizontal card --></div>
  </div>
</div>
```

**Required HTML Structure (Match React):**
```html
<div class="team__grid">
  <div class="team__founder">
    <div class="team__founder-content"><!-- horizontal flex: image + info --></div>
  </div>
  <div class="team__leaders">
    <div class="team__leader"><!-- compact horizontal card --></div>
    <div class="team__leader"><!-- compact horizontal card --></div>
  </div>
</div>
```

**CSS Changes:**
```css
.team__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .team__grid {
    grid-template-columns: 2fr 1fr;
  }
}

.team__founder {
  background: linear-gradient(to bottom right, var(--foreground), rgba(28, 28, 28, 0.95));
  border-radius: var(--radius-xl);
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: var(--shadow-xl);
}

.team__founder-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
}

@media (min-width: 768px) {
  .team__founder-content {
    flex-direction: row;
    padding: 2rem;
  }
}

.team__founder-image {
  width: 10rem;
  height: 10rem;
  flex-shrink: 0;
  border-radius: var(--radius-xl);
  overflow: hidden;
  border: 2px solid rgba(127, 191, 46, 0.3);
}

@media (min-width: 768px) {
  .team__founder-image {
    width: 12rem;
    height: 12rem;
  }
}

.team__leaders {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.team__leader {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: var(--radius-xl);
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: var(--shadow-md);
}

.team__leader-image {
  width: 5rem;
  height: 5rem;
  flex-shrink: 0;
  border-radius: var(--radius-lg);
  overflow: hidden;
}
```

### Fix 2: Footer Grid Layout

Ensure footer uses proper 5-column grid on large screens:
```css
.footer__main {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .footer__main {
    grid-template-columns: 2fr 1fr 1fr 1fr;
  }
}

@media (min-width: 1024px) {
  .footer__main {
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 4rem;
  }
}
```

### Fix 3: Section Container Width

All sections should use `container-wide` class consistently for proper max-width and padding.

---

## Files to Modify

| File | Changes |
|------|---------|
| `static-html/index.html` | Restructure team section HTML |
| `static-html/css/pages/home.css` | Update team section CSS for proper layout |
| `static-html/css/footer.css` | Verify/fix footer grid layout |

---

## HTML Changes for Team Section

Replace lines 668-710 in index.html with:

```html
<section class="team" id="team">
  <div class="container-wide">
    <div class="section-header section-header--center scroll-fade-up">
      <div class="divider-accent"></div>
      <h2>Our Leadership</h2>
      <p>Experienced team driving India's bioenergy transformation with expertise in finance, technology, and operations.</p>
    </div>
    
    <div class="team__grid">
      <!-- Founder Card - Horizontal Layout -->
      <div class="team__founder scroll-fade-up">
        <div class="team__founder-content">
          <div class="team__founder-image">
            <img src="https://s3.us-west-1.amazonaws.com/appsinvo-staging-ys/Gruner/1b7dd6b268d.jpeg" alt="Mr. Utkarsh Gupta">
          </div>
          <div class="team__founder-info">
            <span class="team__founder-badge">Founder & Visionary</span>
            <h3 class="team__founder-name">Mr. Utkarsh Gupta</h3>
            <p class="team__founder-role">Founder and CEO</p>
            <p class="team__founder-bio">Visionary leader driving India's clean energy revolution through innovative Bio-CNG solutions and sustainable infrastructure development.</p>
            <div class="team__founder-social">
              <a href="#" class="team__social-btn" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" class="team__social-btn team__social-btn--mail" aria-label="Email">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Leaders - Stacked Vertically -->
      <div class="team__leaders">
        <div class="team__leader scroll-fade-up" style="--delay: 0.2s">
          <div class="team__leader-image">
            <img src="https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/60737fd0ffe.png" alt="Mr. Anil Dhussa">
          </div>
          <div class="team__leader-info">
            <h4 class="team__leader-name">Mr. Anil Dhussa</h4>
            <p class="team__leader-role">Chief Advisor</p>
            <a href="#" class="team__leader-linkedin">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              LinkedIn
            </a>
          </div>
        </div>
        
        <div class="team__leader scroll-fade-up" style="--delay: 0.3s">
          <div class="team__leader-image">
            <img src="https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/9c778952225.png" alt="Mr. Anil Kumar Tyagi">
          </div>
          <div class="team__leader-info">
            <h4 class="team__leader-name">Mr. Anil Kumar Tyagi</h4>
            <p class="team__leader-role">Chief Consultant</p>
            <a href="#" class="team__leader-linkedin">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

## CSS Changes for Team Section

Replace team section CSS (lines 1467-1636 in home.css):

```css
/* ===================== TEAM SECTION ===================== */

.team {
  padding: 4rem 0 6rem;
  background: var(--off-white);
}

.team__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .team__grid {
    grid-template-columns: 2fr 1fr;
  }
}

.team__founder {
  background: linear-gradient(to bottom right, var(--foreground), rgba(28, 28, 28, 0.95));
  border-radius: var(--radius-xl);
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: var(--shadow-xl);
  height: 100%;
}

.team__founder-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  height: 100%;
}

@media (min-width: 768px) {
  .team__founder-content {
    flex-direction: row;
    padding: 2rem;
  }
}

.team__founder-image {
  width: 10rem;
  height: 10rem;
  flex-shrink: 0;
  border-radius: var(--radius-xl);
  overflow: hidden;
  border: 2px solid rgba(127, 191, 46, 0.3);
  box-shadow: var(--shadow-lg);
}

@media (min-width: 768px) {
  .team__founder-image {
    width: 12rem;
    height: 12rem;
  }
}

.team__founder-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

.team__founder-info {
  text-align: center;
  flex: 1;
}

@media (min-width: 768px) {
  .team__founder-info {
    text-align: left;
  }
}

.team__founder-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: rgba(127, 191, 46, 0.2);
  color: var(--accent);
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: var(--radius);
  margin-bottom: 0.75rem;
}

.team__founder-name {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.25rem;
}

@media (min-width: 768px) {
  .team__founder-name {
    font-size: 1.5rem;
  }
}

.team__founder-role {
  font-size: 0.875rem;
  color: var(--accent);
  font-weight: 500;
  margin-bottom: 0.75rem;
}

.team__founder-bio {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.625;
  margin-bottom: 1rem;
  max-width: 32rem;
}

.team__founder-social {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
}

@media (min-width: 768px) {
  .team__founder-social {
    justify-content: flex-start;
  }
}

.team__social-btn {
  width: 2.25rem;
  height: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius);
  transition: all var(--transition-base);
}

.team__social-btn:hover {
  background: #0077b5;
}

.team__social-btn--mail:hover {
  background: rgba(255, 255, 255, 0.2);
}

.team__social-btn svg {
  width: 1rem;
  height: 1rem;
  color: white;
}

.team__leaders {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.team__leader {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: var(--radius-xl);
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-base);
}

.team__leader:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.team__leader-image {
  width: 5rem;
  height: 5rem;
  flex-shrink: 0;
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.team__leader-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  filter: grayscale(100%);
  transition: filter 0.5s;
}

.team__leader:hover .team__leader-image img {
  filter: grayscale(0%);
}

.team__leader-info {
  flex: 1;
  min-width: 0;
}

.team__leader-name {
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: 600;
  color: var(--foreground);
  margin-bottom: 0.125rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.team__leader-role {
  font-size: 0.875rem;
  color: var(--primary);
  font-weight: 500;
  margin-bottom: 0.25rem;
}

.team__leader-linkedin {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  color: #0077b5;
  font-weight: 500;
  transition: text-decoration var(--transition-base);
}

.team__leader-linkedin:hover {
  text-decoration: underline;
}

.team__leader-linkedin svg {
  width: 0.75rem;
  height: 0.75rem;
}
```

---

## Quality Gates

After implementation:
- [ ] Leadership section shows founder card (2 cols) with horizontal layout (image left, info right)
- [ ] Leaders are stacked vertically in right column
- [ ] Founder card has dark background matching React
- [ ] Leader cards have white background with grayscale-to-color hover effect
- [ ] Footer displays correctly with 4-column layout
- [ ] All section widths match React version (container-wide)
- [ ] All hover effects and transitions work

---

## Implementation Order

1. Update team section HTML structure
2. Replace team section CSS with new styles
3. Verify footer CSS is correctly applied
4. Test all hover effects and responsive breakpoints
