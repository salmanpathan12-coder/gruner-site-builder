

# Static HTML Technology Page - Complete Recreation Plan

## Overview
This plan recreates the React Technology page as static HTML with identical structure, content, effects, and animations. All Framer Motion animations will be converted to CSS animations and vanilla JavaScript.

---

## Current Issues (from Screenshot)

The existing static HTML technology page:
1. **Missing animated biogas system visual** - React has a complex animated visualization with reactor vessel, particles, conveyor, compressor, energy flow lines
2. **Hero layout different** - React has left content + right visual (dark panel with system), HTML has simplified layout
3. **Process accordion not working** - Click interactions not functioning
4. **Scroll animations not triggering** - Elements not fading in on scroll

---

## React Component Analysis

### TechnologyHero.tsx Key Elements:
- **BiogasSystemVisual** - Complex animated visualization with:
  - Central reactor vessel with bubbles animation
  - Feedstock conveyor with moving blocks
  - Gas storage tank with level animation
  - Compressor with rotating element
  - Grid node with pulsing glow
  - Processing unit with rotating dashed circle
  - Energy flow paths (SVG animated paths)
  - Floating particles (12 particles)
  - Status overlay bar
- **Left content**: Breadcrumb, badge, title, description, metrics, tags, indicators
- **AnimatedMetric** - Counter animation for 85%, 60 Days, 10% DS

### Technology.tsx Sections:
1. **CSTR Intro** - Image + content with specs grid
2. **Process** - Animated vertical timeline with accordion steps
3. **Benefits** - 3 advantage cards
4. **Sustainability** - Content + 4 metric cards

---

## File Structure

| File | Purpose |
|------|---------|
| `static-html/technology.html` | Complete HTML structure |
| `static-html/css/pages/technology.css` | All technology page styles |
| `static-html/js/technology-visual.js` | Biogas system animations |

---

## HTML Structure Changes

### 1. Technology Hero - Complete Rewrite

```html
<section class="tech-hero">
  <div class="container-wide tech-hero__container">
    <!-- LEFT: Content -->
    <div class="tech-hero__content scroll-fade-up">
      <nav class="tech-hero__breadcrumb">
        <a href="index.html">Home</a>
        <svg>...</svg>
        <span>Technology</span>
      </nav>
      
      <div class="tech-hero__badge">
        <div class="tech-hero__badge-icon animate-spin-slow">
          <svg><!-- Cpu icon --></svg>
        </div>
        <span>Advanced Engineering</span>
      </div>
      
      <h1 class="tech-hero__title">
        <span class="gradient-text">CSTR Technology</span>
      </h1>
      <div class="tech-hero__title-line"></div>
      
      <p class="tech-hero__description">
        Continuous-Flow Stirred Tank Reactor — the backbone of efficient biogas production...
      </p>
      
      <div class="tech-hero__metrics">
        <div class="tech-hero__metric">
          <span class="tech-hero__metric-value counter" data-target="85">0</span>
          <span class="tech-hero__metric-suffix">%</span>
          <span class="tech-hero__metric-label">Efficiency</span>
        </div>
        <div class="tech-hero__metric">
          <span class="tech-hero__metric-value counter" data-target="60">0</span>
          <span class="tech-hero__metric-suffix"> Days</span>
          <span class="tech-hero__metric-label">Retention</span>
        </div>
        <div class="tech-hero__metric">
          <span class="tech-hero__metric-value counter" data-target="10">0</span>
          <span class="tech-hero__metric-suffix">% DS</span>
          <span class="tech-hero__metric-label">Max Solid</span>
        </div>
      </div>
      
      <div class="tech-hero__tags">
        <span class="tech-hero__tag">Mesophilic</span>
        <span class="tech-hero__tag">Thermophilic</span>
        <span class="tech-hero__tag">Bio-CNG</span>
        <span class="tech-hero__tag">Smart Grid</span>
      </div>
      
      <div class="tech-hero__indicators">
        <div class="tech-hero__indicator">
          <svg><!-- Flame icon --></svg>
          <span>Biogas Output</span>
        </div>
        <div class="tech-hero__indicator">
          <svg><!-- Gauge icon --></svg>
          <span>Process Control</span>
        </div>
      </div>
    </div>
    
    <!-- RIGHT: Biogas System Visual -->
    <div class="tech-hero__system scroll-fade-up">
      <div class="tech-hero__system-panel">
        <!-- Corner accents -->
        <div class="tech-hero__corner tech-hero__corner--tl"></div>
        <div class="tech-hero__corner tech-hero__corner--tr"></div>
        <div class="tech-hero__corner tech-hero__corner--bl"></div>
        <div class="tech-hero__corner tech-hero__corner--br"></div>
        
        <!-- Biogas Visual Container -->
        <div class="biogas-visual">
          <!-- Central Reactor -->
          <div class="biogas-visual__reactor">
            <div class="biogas-visual__reactor-body">
              <div class="biogas-visual__reactor-level"></div>
              <div class="biogas-visual__bubbles">
                <span class="biogas-visual__bubble"></span>
                <span class="biogas-visual__bubble"></span>
                <span class="biogas-visual__bubble"></span>
                <span class="biogas-visual__bubble"></span>
                <span class="biogas-visual__bubble"></span>
                <span class="biogas-visual__bubble"></span>
              </div>
            </div>
            <div class="biogas-visual__reactor-cap"></div>
          </div>
          
          <!-- Feedstock Conveyor -->
          <div class="biogas-visual__conveyor">
            <div class="biogas-visual__conveyor-belt">
              <span class="biogas-visual__conveyor-block"></span>
              <span class="biogas-visual__conveyor-block"></span>
              <span class="biogas-visual__conveyor-block"></span>
              <span class="biogas-visual__conveyor-block"></span>
            </div>
            <span class="biogas-visual__label">Feedstock</span>
          </div>
          
          <!-- Energy Flow Lines -->
          <div class="biogas-visual__flow biogas-visual__flow--1"></div>
          <div class="biogas-visual__flow biogas-visual__flow--2"></div>
          
          <!-- Gas Storage Tank -->
          <div class="biogas-visual__tank">
            <div class="biogas-visual__tank-body">
              <div class="biogas-visual__tank-level"></div>
            </div>
            <div class="biogas-visual__tank-gauge"></div>
            <span class="biogas-visual__label">Bio-CNG</span>
          </div>
          
          <!-- Compressor -->
          <div class="biogas-visual__compressor">
            <div class="biogas-visual__compressor-outer">
              <div class="biogas-visual__compressor-inner">
                <div class="biogas-visual__compressor-dot"></div>
              </div>
            </div>
            <span class="biogas-visual__label">Compressor</span>
          </div>
          
          <!-- Grid Node -->
          <div class="biogas-visual__grid">
            <div class="biogas-visual__grid-box">
              <svg><!-- Zap icon --></svg>
            </div>
            <span class="biogas-visual__label">Grid</span>
          </div>
          
          <!-- Processing Unit -->
          <div class="biogas-visual__processing">
            <div class="biogas-visual__processing-outer">
              <div class="biogas-visual__processing-inner">
                <svg><!-- Wind icon --></svg>
              </div>
            </div>
            <span class="biogas-visual__label">Processing</span>
          </div>
          
          <!-- Energy Flow Paths SVG -->
          <svg class="biogas-visual__paths" viewBox="0 0 400 400">
            <defs>
              <linearGradient id="energyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="hsl(85, 55%, 45%)" stop-opacity="0.7"/>
                <stop offset="50%" stop-color="hsl(168, 65%, 32%)" stop-opacity="0.9"/>
                <stop offset="100%" stop-color="hsl(85, 55%, 45%)" stop-opacity="0.7"/>
              </linearGradient>
            </defs>
            <path class="biogas-visual__path" d="M200 150 Q 280 150 300 200"/>
            <path class="biogas-visual__path" d="M100 320 Q 150 280 200 250"/>
            <path class="biogas-visual__path" d="M320 300 Q 340 250 320 100"/>
          </svg>
          
          <!-- Floating Particles -->
          <div class="biogas-visual__particles">
            <!-- 12 particles generated by CSS/JS -->
          </div>
          
          <!-- Status Overlay -->
          <div class="biogas-visual__status">
            <div class="biogas-visual__status-left">
              <div class="biogas-visual__status-indicator">
                <span class="biogas-visual__status-dot"></span>
                <span>System Active</span>
              </div>
              <div class="biogas-visual__status-indicator">
                <span class="biogas-visual__status-dot"></span>
                <span>Digestion</span>
              </div>
            </div>
            <div class="biogas-visual__status-right">
              <svg><!-- Activity icon --></svg>
              <span class="biogas-visual__status-online">ONLINE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

### 2. Process Section - Fix Accordion

Update the process steps to use proper accordion data attributes:

```html
<div class="tech-process__steps" id="processSteps">
  <div class="tech-process__step active" data-step="1">
    <div class="tech-process__step-header" data-accordion-trigger>
      <span class="tech-process__step-number">01</span>
      <span class="tech-process__step-title">Feedstock Reception</span>
      <svg class="tech-process__step-chevron">...</svg>
    </div>
    <div class="tech-process__step-content" data-accordion-content>
      <p class="tech-process__step-text">...</p>
    </div>
  </div>
  <!-- More steps... -->
</div>
```

---

## CSS Additions for Technology Page

### Biogas Visual Animations

```css
/* Reactor bubbles animation */
@keyframes bubble-rise {
  0% {
    transform: translateY(0) scale(0.6);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  100% {
    transform: translateY(-60px) scale(1.2);
    opacity: 0;
  }
}

.biogas-visual__bubble {
  animation: bubble-rise 2.5s ease-in-out infinite;
}
.biogas-visual__bubble:nth-child(1) { animation-delay: 0s; left: 15%; }
.biogas-visual__bubble:nth-child(2) { animation-delay: 0.4s; left: 28%; }
.biogas-visual__bubble:nth-child(3) { animation-delay: 0.8s; left: 41%; }
.biogas-visual__bubble:nth-child(4) { animation-delay: 1.2s; left: 54%; }
.biogas-visual__bubble:nth-child(5) { animation-delay: 1.6s; left: 67%; }
.biogas-visual__bubble:nth-child(6) { animation-delay: 2.0s; left: 80%; }

/* Reactor level animation */
@keyframes level-pulse {
  0%, 100% { height: 55%; }
  50% { height: 75%; }
}

.biogas-visual__reactor-level,
.biogas-visual__tank-level {
  animation: level-pulse 5s ease-in-out infinite;
}

/* Conveyor blocks animation */
@keyframes conveyor-move {
  from { transform: translateX(0); }
  to { transform: translateX(100px); opacity: 0; }
}

.biogas-visual__conveyor-block {
  animation: conveyor-move 2.2s linear infinite;
}
.biogas-visual__conveyor-block:nth-child(1) { animation-delay: 0s; }
.biogas-visual__conveyor-block:nth-child(2) { animation-delay: 0.5s; }
.biogas-visual__conveyor-block:nth-child(3) { animation-delay: 1.0s; }
.biogas-visual__conveyor-block:nth-child(4) { animation-delay: 1.5s; }

/* Compressor rotation */
@keyframes compressor-rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.biogas-visual__compressor-outer {
  animation: compressor-rotate 4s linear infinite;
}

/* Compressor dot pulse */
@keyframes dot-pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}

.biogas-visual__compressor-dot {
  animation: dot-pulse 1s ease-in-out infinite;
}

/* Processing unit reverse rotation */
.biogas-visual__processing-outer {
  animation: compressor-rotate 8s linear infinite reverse;
}

/* Tank gauge rotation */
@keyframes gauge-swing {
  0%, 100% { transform: rotate(-20deg); }
  50% { transform: rotate(20deg); }
}

.biogas-visual__tank-gauge {
  animation: gauge-swing 3s ease-in-out infinite;
}

/* Grid node glow */
@keyframes grid-glow {
  0%, 100% { box-shadow: 0 0 15px rgba(136, 196, 68, 0.4); }
  50% { box-shadow: 0 0 35px rgba(136, 196, 68, 0.8); }
}

.biogas-visual__grid-box {
  animation: grid-glow 2s ease-in-out infinite;
}

/* Energy flow line animation */
@keyframes flow-move {
  from { transform: translateX(-100%); }
  to { transform: translateX(100%); }
}

.biogas-visual__flow::after {
  animation: flow-move 3s linear infinite;
}

/* SVG path animation */
@keyframes path-draw {
  from { stroke-dashoffset: 100; }
  to { stroke-dashoffset: 0; }
}

.biogas-visual__path {
  stroke-dasharray: 12 6;
  animation: path-draw 2s ease-out forwards;
}

/* Floating particles */
@keyframes particle-float {
  0%, 100% {
    transform: translate(0, 0);
    opacity: 0.5;
  }
  50% {
    transform: translate(var(--float-x, 20px), var(--float-y, -20px));
    opacity: 1;
  }
}

/* Status dot pulse */
@keyframes status-pulse {
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.3); opacity: 1; }
}

.biogas-visual__status-dot {
  animation: status-pulse 2s ease-in-out infinite;
}

/* Online text pulse */
@keyframes online-blink {
  0%, 100% { opacity: 0.7; }
  50% { opacity: 1; }
}

.biogas-visual__status-online {
  animation: online-blink 2s ease-in-out infinite;
}

/* Slow spin for badge icon */
@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.animate-spin-slow {
  animation: spin-slow 4s linear infinite;
}

/* Title line animation */
@keyframes line-expand {
  from { width: 0; }
  to { width: 200px; }
}

.tech-hero__title-line {
  animation: line-expand 0.9s ease-out 0.5s forwards;
  width: 0;
}
```

---

## JavaScript Additions

### technology-visual.js

```javascript
/**
 * Technology Page Visual Animations
 * Initializes biogas system particles and entrance animations
 */

(function() {
  'use strict';

  function initBiogasVisual() {
    const visual = document.querySelector('.biogas-visual');
    if (!visual) return;

    // Generate floating particles
    const particlesContainer = visual.querySelector('.biogas-visual__particles');
    if (particlesContainer && particlesContainer.children.length === 0) {
      for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.className = 'biogas-visual__particle';
        particle.style.left = `${8 + Math.random() * 84}%`;
        particle.style.top = `${8 + Math.random() * 84}%`;
        particle.style.setProperty('--float-x', `${Math.random() * 60 - 30}px`);
        particle.style.setProperty('--float-y', `${Math.random() * 60 - 30}px`);
        particle.style.animationDuration = `${4 + Math.random() * 2}s`;
        particle.style.animationDelay = `${i * 0.3}s`;
        particlesContainer.appendChild(particle);
      }
    }
  }

  function initProcessAccordion() {
    const steps = document.querySelectorAll('.tech-process__step');
    
    steps.forEach(step => {
      const header = step.querySelector('.tech-process__step-header');
      if (!header) return;

      header.addEventListener('click', () => {
        // Close all other steps
        steps.forEach(s => {
          if (s !== step) s.classList.remove('active');
        });
        
        // Toggle current step
        step.classList.toggle('active');
      });
    });
  }

  function init() {
    initBiogasVisual();
    initProcessAccordion();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.GrunerTechnology = { init };
})();
```

---

## Files to Modify/Create

| File | Action | Changes |
|------|--------|---------|
| `static-html/technology.html` | Rewrite | Complete HTML matching React structure |
| `static-html/css/pages/technology.css` | Update | Add biogas visual styles, fix hero layout |
| `static-html/js/technology-visual.js` | Create | Particle generation, accordion logic |

---

## Implementation Order

1. **Update technology.html** - Complete HTML restructure matching React
2. **Update technology.css** - Add all biogas visual animations
3. **Create technology-visual.js** - Particle generation and accordion
4. **Update script imports** - Add technology-visual.js to page
5. **Test all animations** - Verify bubbles, rotations, glows, particles

---

## Quality Assurance Checklist

- [ ] Hero has white background with left content + right system visual
- [ ] Breadcrumb shows Home > Technology
- [ ] Badge has rotating Cpu icon with "Advanced Engineering" text
- [ ] Title shows "CSTR Technology" with gradient + animated underline
- [ ] Metrics show animated counters (85%, 60 Days, 10% DS)
- [ ] Tags show Mesophilic, Thermophilic, Bio-CNG, Smart Grid
- [ ] Indicators show Biogas Output + Process Control with icons
- [ ] Biogas visual has dark panel with corner accents
- [ ] Reactor shows bubbling animation + level pulse
- [ ] Conveyor shows moving blocks
- [ ] Compressor rotates with pulsing center dot
- [ ] Processing unit has reverse-rotating dashed circle
- [ ] Tank shows level animation + swinging gauge
- [ ] Grid node has pulsing glow effect
- [ ] Energy flow lines animate along paths
- [ ] Floating particles move randomly
- [ ] Status bar shows "ONLINE" with blinking effect
- [ ] CSTR Intro section scroll-reveals on view
- [ ] Process accordion steps expand/collapse on click
- [ ] Advantage cards hover with lift effect
- [ ] Sustainability bars animate on scroll
- [ ] All scroll-fade-up elements trigger correctly

---

## Key Animation Mappings

| React Framer Motion | Static CSS/JS |
|---------------------|---------------|
| `animate={{ scale: [1, 1.3, 1] }}` (status dot) | `@keyframes status-pulse` |
| `animate={{ rotate: 360 }}` (compressor) | `@keyframes compressor-rotate` |
| `animate={{ height: ["55%", "75%", "60%"] }}` | `@keyframes level-pulse` |
| `animate={{ y: [50, -30] }}` (bubbles) | `@keyframes bubble-rise` |
| `animate={{ x: [0, 100] }}` (conveyor) | `@keyframes conveyor-move` |
| `animate={{ rotate: [-20, 20, -20] }}` (gauge) | `@keyframes gauge-swing` |
| `animate={{ boxShadow: [...] }}` (grid) | `@keyframes grid-glow` |
| `animate={{ opacity: [0.7, 1, 0.7] }}` (online) | `@keyframes online-blink` |
| `AnimatedMetric` component | Vanilla JS counter with IntersectionObserver |
| `motion.div initial/animate` | CSS `.scroll-fade-up` + IntersectionObserver |

