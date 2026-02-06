
# Static HTML Home Page - Complete Recreation Plan

## Overview
This plan creates a complete static HTML version of the React home page with identical structure, content, effects, and animations. All Framer Motion animations will be converted to CSS animations and vanilla JavaScript using IntersectionObserver.

---

## File Structure

| File | Purpose |
|------|---------|
| `static-html/index.html` | Complete HTML structure |
| `static-html/css/pages/home.css` | All home page styles |
| `static-html/css/animations.css` | Animation keyframes and classes |
| `static-html/js/core.js` | Main initialization and page loader |
| `static-html/js/animations.js` | IntersectionObserver scroll animations |
| `static-html/js/counter.js` | Animated number counters |
| `static-html/js/header.js` | Header scroll behavior |
| `static-html/js/process-timeline.js` | Process section animations |
| `static-html/js/media-slider.js` | Infinite logo scrolling |
| `static-html/js/map-interaction.js` | Map marker interactions |
| `static-html/js/solutions-cards.js` | Solutions card hover effects |
| `static-html/js/form.js` | Contact form validation |

---

## HTML Structure (Section Order)

```text
1. Page Loader (overlay)
2. Header (fixed navigation)
3. Hero Section (video background + metrics)
4. Trusted By Section (infinite scroll logos)
5. Context Section (India's Waste Problem - split layout)
6. About Gruner Section (mission + highlights)
7. Solutions Section (dark background - 4 cards)
8. Process Section (How It Works - 4 steps timeline)
9. Media Mentions Section (infinite scroll - opposite direction)
10. Projects Map Section (dark background - map + project list)
11. Team Section (founder + leaders grid)
12. Awards Section (6 recognition cards)
13. Contact Section (form + info)
14. Footer
```

---

## Animation Conversions

### Framer Motion to CSS/JS Mapping

| React Animation | Static HTML Solution |
|-----------------|---------------------|
| `initial={{ opacity: 0, y: 30 }}` | `.scroll-fade-up` class + IntersectionObserver |
| `initial={{ opacity: 0, x: -30 }}` | `.scroll-fade-left` class |
| `initial={{ opacity: 0, x: 30 }}` | `.scroll-fade-right` class |
| `useInView` hook | IntersectionObserver API |
| `animate={{ x: ["0%", "-50%"] }}` | CSS `@keyframes infinite-scroll` |
| `whileHover={{ scale: 1.02 }}` | CSS `:hover { transform: scale(1.02) }` |
| `AnimatedCounter` component | Vanilla JS counter with IntersectionObserver |
| `FloatingParticles` | CSS `@keyframes particle-float` |
| `useScroll`, `useTransform` | JS `scroll` event listener |

---

## Section-by-Section Implementation

### 1. Page Loader
```html
<div class="page-loader" id="pageLoader">
  <div class="page-loader__content">
    <img src="assets/images/gruner-logo.png" alt="Gruner" class="page-loader__logo">
    <div class="page-loader__bar">
      <div class="page-loader__progress"></div>
    </div>
    <p class="page-loader__tagline">Energies for Tomorrow</p>
  </div>
</div>
```

**CSS Animation:**
```css
.page-loader__progress {
  animation: loader-fill 1.5s ease-in-out forwards;
}

@keyframes loader-fill {
  from { width: 0%; }
  to { width: 100%; }
}
```

### 2. Header
- Fixed position with scroll-based opacity change
- White background with blur on scroll
- Dropdown menus for About, Solutions, Media
- Mobile hamburger menu

### 3. Hero Section
```html
<section class="hero">
  <video class="hero__video" autoplay loop muted playsinline>
    <source src="assets/images/hero-video.mp4" type="video/mp4">
  </video>
  <div class="hero__overlay"></div>
  <div class="hero__particles"></div>
  <div class="hero__content container-wide">
    <h1>India's Leading Bio-CNG Infrastructure Company</h1>
    <p>Gruner Renewable Energy designs, builds, and operates Bio-CNG plants...</p>
    <div class="hero__metrics">
      <div class="hero__metric">
        <div class="hero__metric-icon"><!-- TrendingUp SVG --></div>
        <div class="hero__metric-value">
          <span class="counter" data-target="1500">0</span>
          <span class="hero__metric-suffix">Cr+</span>
        </div>
        <span class="hero__metric-label">Secured Projects</span>
      </div>
      <!-- 2 more metrics -->
    </div>
    <div class="hero__cta">
      <a href="#projects" class="btn btn--primary">Explore Our Projects</a>
      <a href="#contact" class="btn btn--outline-white">Partner With Us</a>
    </div>
  </div>
  <div class="hero__scroll-indicator">
    <span>Scroll</span>
    <div class="hero__scroll-arrow"></div>
  </div>
</section>
```

**CSS Animations:**
- Floating particles with random positions
- Scroll indicator bouncing arrow
- Video scale on scroll (parallax)
- Metric counters on page load

### 4. Trusted By Section
```html
<section class="trusted-by">
  <div class="trusted-by__header">
    <span>Trusted by Industry Leaders</span>
  </div>
  <div class="trusted-by__scroll">
    <div class="trusted-by__track">
      <!-- 12 logos (6 duplicated for seamless loop) -->
      <img src="assets/logos/gail.png" alt="GAIL">
      <img src="assets/logos/io.png" alt="Indian Oil">
      <!-- ... -->
    </div>
  </div>
</section>
```

**CSS Animation:**
```css
.trusted-by__track {
  animation: scroll-left 25s linear infinite;
}

@keyframes scroll-left {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
```

### 5. Context Section (Split Layout)
```html
<section class="context">
  <div class="context__left bg-gradient-dark-teal">
    <div class="container-wide">
      <div class="divider-accent"></div>
      <h2>
        <span class="context__subtitle">India's Waste Problem</span>
        <span>Is Also an</span>
        <span class="gradient-text">Energy Opportunity</span>
      </h2>
    </div>
    <!-- Animated gradient orbs -->
  </div>
  <div class="context__right bg-off-white">
    <div class="container-wide">
      <p>India generates over 500 million tonnes...</p>
      <p>The nation depends on costly fossil fuel imports...</p>
      <p>Bio-CNG presents a strategic opportunity...</p>
      <div class="context__stats">
        <div class="context__stat">
          <div class="context__stat-icon"><!-- TrendingUp --></div>
          <span class="counter" data-target="500">0</span>M+
          <span>Tonnes agri-waste yearly</span>
        </div>
        <!-- 2 more stats -->
      </div>
    </div>
  </div>
</section>
```

### 6. About Gruner Section
- Centered header with gradient divider
- 2-column grid: Story card + 4 highlight cards
- Bottom stats bar with gradient background

### 7. Solutions Section (Dark)
```html
<section class="solutions bg-foreground">
  <div class="container-wide">
    <div class="section-header section-header--center">
      <div class="divider-accent"></div>
      <span class="solutions__subtitle">Our Expertise</span>
      <h2>Why Partners Choose <span class="gradient-text">Gruner Renewable</span></h2>
      <p>Complete capabilities across the bioenergy value chain...</p>
    </div>
    <div class="solutions__grid">
      <!-- 4 solution cards -->
      <div class="solutions__card">
        <div class="solutions__card-header">
          <div class="solutions__card-icon"><!-- Factory SVG --></div>
          <div class="solutions__card-stat">
            <span class="solutions__card-stat-value">50+</span>
            <span class="solutions__card-stat-label">Plants Planned</span>
          </div>
        </div>
        <h3>EPC Services</h3>
        <p>End-to-end turnkey Bio-CNG plant development...</p>
        <div class="solutions__card-features">
          <span class="solutions__feature-tag">Feasibility studies</span>
          <!-- more tags -->
        </div>
      </div>
    </div>
  </div>
</section>
```

### 8. Process Section (Timeline)
```html
<section class="process">
  <div class="container-wide">
    <div class="section-header section-header--center">
      <div class="divider-accent"></div>
      <h2>How It Works</h2>
      <p>From agricultural waste to clean energy — a proven transformation process</p>
    </div>
    
    <!-- Desktop: Horizontal timeline -->
    <div class="process__desktop">
      <div class="process__line">
        <div class="process__line-bg"></div>
        <div class="process__line-fill"></div>
        <div class="process__line-dot"></div>
      </div>
      <div class="process__steps">
        <!-- 4 steps with circular icons -->
      </div>
    </div>
    
    <!-- Mobile: Vertical timeline -->
    <div class="process__mobile">
      <!-- Vertical layout -->
    </div>
  </div>
</section>
```

**CSS Animations:**
```css
.process__line-fill {
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 1.5s ease-out;
}

.process__line-fill--animated {
  transform: scaleX(1);
}

.process__line-dot {
  animation: process-dot-move 4s linear infinite;
}

@keyframes process-dot-move {
  from { left: 0%; }
  to { left: 100%; }
}
```

### 9. Media Mentions Section
- Same structure as Trusted By but with media logos
- Animation in opposite direction (right to left becomes left to right)

### 10. Projects Map Section (Dark)
```html
<section class="projects-map bg-foreground">
  <div class="container-wide">
    <div class="section-header section-header--center">
      <div class="divider-accent"></div>
      <h2>Upcoming Bio-CNG Plants Across India</h2>
      <p>Strategic expansion targeting high-feedstock regions...</p>
    </div>
    <div class="projects-map__grid">
      <div class="projects-map__list">
        <!-- 10 project state cards -->
        <!-- Summary stats card -->
      </div>
      <div class="projects-map__visual">
        <div class="projects-map__glow"></div>
        <img src="assets/images/india-map.svg" alt="India Map">
        <svg class="projects-map__markers">
          <!-- State markers with pulse animations -->
        </svg>
        <div class="projects-map__tooltip" id="mapTooltip"></div>
        <div class="projects-map__legend">
          <img src="assets/images/gruner-logo.png" alt="Gruner">
          <span>Gruner Renewable Energy</span>
        </div>
      </div>
    </div>
  </div>
</section>
```

**JS Interaction:**
```javascript
// Map marker hover effects
markers.forEach((marker, index) => {
  marker.addEventListener('mouseenter', () => {
    showTooltip(projects[index]);
    marker.classList.add('projects-map__marker--active');
  });
});
```

### 11. Team Section (Leadership)
```html
<section class="team bg-off-white">
  <div class="container-wide">
    <div class="section-header section-header--center">
      <div class="divider-accent"></div>
      <h2>Our Leadership</h2>
      <p>Experienced team driving India's bioenergy transformation...</p>
    </div>
    <div class="team__grid">
      <!-- Founder card (spans 2 cols) -->
      <div class="team__founder">
        <div class="team__founder-content">
          <div class="team__founder-image">
            <img src="..." alt="Mr. Utkarsh Gupta">
          </div>
          <div class="team__founder-info">
            <span class="team__founder-badge">Founder & Visionary</span>
            <h3>Mr. Utkarsh Gupta</h3>
            <p class="team__founder-role">Founder and CEO</p>
            <p class="team__founder-bio">Visionary leader driving...</p>
            <div class="team__founder-social">
              <a href="#" class="team__social-btn"><!-- LinkedIn --></a>
              <a href="#" class="team__social-btn"><!-- Mail --></a>
            </div>
          </div>
        </div>
      </div>
      <!-- Leaders column (stacked) -->
      <div class="team__leaders">
        <div class="team__leader">...</div>
        <div class="team__leader">...</div>
      </div>
    </div>
  </div>
</section>
```

### 12. Awards Section
- 6 recognition cards in responsive grid (2 cols mobile, 3 cols tablet, 6 cols desktop)
- Gradient icon backgrounds
- Hover effects with scale and shadow

### 13. Contact Section (Dark)
```html
<section class="contact bg-foreground">
  <div class="container-wide">
    <div class="section-header section-header--center">
      <div class="divider-accent"></div>
      <h2>Get in Touch</h2>
      <p>Interested in partnering with us...</p>
    </div>
    <div class="contact__grid">
      <div class="contact__form">
        <form id="contactForm">
          <div class="contact__field">
            <label for="name">Full Name *</label>
            <input type="text" id="name" name="name" required>
            <span class="contact__error"></span>
          </div>
          <!-- Email, Phone, Message fields -->
          <button type="submit" class="btn btn--primary btn--full">
            <span class="contact__btn-icon"><!-- Send --></span>
            Send Message
          </button>
        </form>
        <div class="contact__success" id="contactSuccess">
          <!-- Success message -->
        </div>
      </div>
      <div class="contact__info">
        <div class="contact__info-card">
          <h3>Contact Information</h3>
          <div class="contact__info-item">
            <div class="contact__info-icon"><!-- Mail --></div>
            <div>
              <span>Email</span>
              <span>info@grunerrenewable.com</span>
            </div>
          </div>
          <!-- Phone, Office -->
        </div>
        <div class="contact__partnerships">
          <h3>Partnership Inquiries</h3>
          <p>For business partnerships...</p>
          <a href="mailto:partnerships@grunerrenewable.com">
            partnerships@grunerrenewable.com
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
```

### 14. Footer
- 4-column grid (brand 2 cols + 3 link columns)
- Bottom bar with copyright, social icons, legal links

---

## JavaScript Modules

### core.js - Initialization
```javascript
document.addEventListener('DOMContentLoaded', () => {
  // Initialize page loader
  initPageLoader();
  
  // Initialize all modules
  initHeader();
  initScrollAnimations();
  initCounters();
  initProcessTimeline();
  initMapInteraction();
  initContactForm();
  initSolutionsCards();
});
```

### animations.js - Scroll Animations
```javascript
const observerOptions = {
  root: null,
  rootMargin: '-50px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      // Add stagger delay based on data-delay attribute
      const delay = entry.target.dataset.delay || 0;
      entry.target.style.transitionDelay = `${delay}s`;
    }
  });
}, observerOptions);

document.querySelectorAll('.scroll-fade-up, .scroll-fade-left, .scroll-fade-right')
  .forEach(el => observer.observe(el));
```

### counter.js - Animated Counters
```javascript
function animateCounter(element) {
  const target = parseInt(element.dataset.target);
  const duration = 2000;
  const steps = 60;
  const increment = target / steps;
  let current = 0;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, duration / steps);
}
```

---

## CSS Animation Classes

```css
/* Scroll reveal base states */
.scroll-fade-up {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.scroll-fade-left {
  opacity: 0;
  transform: translateX(-30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.scroll-fade-right {
  opacity: 0;
  transform: translateX(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

/* Revealed state */
.scroll-fade-up.is-visible,
.scroll-fade-left.is-visible,
.scroll-fade-right.is-visible {
  opacity: 1;
  transform: translateX(0) translateY(0);
}

/* Infinite scroll for logos */
@keyframes infinite-scroll-left {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@keyframes infinite-scroll-right {
  from { transform: translateX(-50%); }
  to { transform: translateX(0); }
}

/* Floating particles */
@keyframes particle-float {
  0%, 100% {
    transform: translateY(0) translateX(0);
    opacity: 0.1;
  }
  50% {
    transform: translateY(-100px) translateX(25px);
    opacity: 0.3;
  }
}

/* Scroll indicator bounce */
@keyframes scroll-bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
}

/* Map marker pulse */
@keyframes marker-pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.5); opacity: 0; }
}

/* Gradient orb animation */
@keyframes orb-pulse {
  0%, 100% { transform: scale(1); opacity: 0.2; }
  50% { transform: scale(1.2); opacity: 0.3; }
}
```

---

## Key Implementation Notes

1. **All animations use CSS transforms** for GPU acceleration
2. **IntersectionObserver** replaces Framer Motion's `useInView` 
3. **Stagger delays** applied via `data-delay` attributes
4. **Parallax effects** use `scroll` event with `requestAnimationFrame`
5. **Form validation** uses native HTML5 + custom JavaScript
6. **Responsive breakpoints**: 768px (md), 1024px (lg)
7. **BEM naming** consistent throughout
8. **CSS custom properties** from existing variables.css

---

## Quality Assurance Checklist

- [ ] Page loader with logo + progress bar
- [ ] Header scroll opacity transition
- [ ] Header mobile menu toggle
- [ ] Hero video background with gradient overlay
- [ ] Hero floating particles animation
- [ ] Hero metric counters animate on load
- [ ] Hero scroll indicator bouncing
- [ ] Trusted By infinite scroll (left direction)
- [ ] Context section split layout
- [ ] Context animated gradient orbs
- [ ] Context stat counters on scroll
- [ ] About Gruner highlight cards hover effects
- [ ] About Gruner bottom stats bar
- [ ] Solutions section dark background
- [ ] Solutions cards hover border + shadow
- [ ] Solutions feature tags visible by default
- [ ] Process timeline gradient line fill
- [ ] Process moving dot animation
- [ ] Process step reveal on scroll
- [ ] Media Mentions infinite scroll (right direction)
- [ ] Projects Map marker interactions
- [ ] Projects Map tooltip on hover
- [ ] Projects Map marker pulse animation
- [ ] Team founder card horizontal layout
- [ ] Team leaders stacked with grayscale effect
- [ ] Awards cards hover scale
- [ ] Contact form validation
- [ ] Contact form success state
- [ ] Footer 4-column grid layout
- [ ] All sections fade-up on scroll
- [ ] All hover transitions smooth
