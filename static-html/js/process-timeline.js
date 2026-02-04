/**
 * GRUNER RENEWABLE - PROCESS TIMELINE ANIMATIONS
 * Animated line fill, moving progress dot, and node glow effects
 */

(function() {
  'use strict';

  let isAnimated = false;

  function init() {
    const timeline = document.querySelector('.process__timeline');
    if (!timeline) return;

    // Add moving dot element
    const line = timeline.querySelector('.process__line');
    if (line && !line.querySelector('.process__line-dot')) {
      const dot = document.createElement('div');
      dot.className = 'process__line-dot';
      line.appendChild(dot);
    }

    // Create observer for scroll-triggered animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !isAnimated) {
          isAnimated = true;
          animateTimeline(timeline);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.3
    });

    observer.observe(timeline);
  }

  function animateTimeline(timeline) {
    const lineFill = timeline.querySelector('.process__line-fill');
    const dot = timeline.querySelector('.process__line-dot');
    const nodes = timeline.querySelectorAll('.process__step-node');

    // Animate line fill
    if (lineFill) {
      lineFill.classList.add('process__line-fill--animated');
    }

    // Start dot animation after line starts filling
    if (dot) {
      setTimeout(() => {
        dot.classList.add('process__line-dot--animated');
      }, 500);
    }

    // Animate nodes with stagger
    nodes.forEach((node, index) => {
      setTimeout(() => {
        node.classList.add('process__step-node--active');
      }, 300 + index * 150);
    });
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.GrunerProcess = { init, animateTimeline };
})();
