/**
 * GRUNER RENEWABLE - ANIMATED COUNTERS
 * Count up animation for statistics
 */

(function() {
  'use strict';

  // Configuration
  const config = {
    duration: 2000,
    threshold: 0.5,
    easing: 'easeOutExpo'
  };

  // Easing functions
  const easings = {
    easeOutExpo: (t) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t),
    easeOutQuart: (t) => 1 - Math.pow(1 - t, 4),
    linear: (t) => t
  };

  // Parse counter value (handles formats like "1500", "1,500", "₹1500", "$60M", "88K+", etc.)
  function parseCounterValue(str) {
    // Extract numeric part
    const numMatch = str.match(/[\d,]+/);
    if (!numMatch) return { value: 0, prefix: '', suffix: '' };

    const numStr = numMatch[0].replace(/,/g, '');
    const value = parseInt(numStr, 10);
    
    // Get prefix (anything before the number)
    const prefixMatch = str.match(/^[^\d,]*/);
    const prefix = prefixMatch ? prefixMatch[0] : '';
    
    // Get suffix (anything after the number)
    const suffixMatch = str.match(/[\d,]+(.*)$/);
    const suffix = suffixMatch ? suffixMatch[1] : '';

    return { value, prefix, suffix };
  }

  // Format number with commas
  function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  // Animate a single counter
  function animateCounter(element, targetValue, prefix, suffix, duration, easing) {
    const startTime = performance.now();
    const easingFn = easings[easing] || easings.easeOutExpo;

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easingFn(progress);
      const currentValue = Math.round(easedProgress * targetValue);
      
      element.textContent = prefix + formatNumber(currentValue) + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  // Initialize counters
  function initCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const originalText = element.dataset.counter || element.textContent;
          const { value, prefix, suffix } = parseCounterValue(originalText);
          
          if (value > 0) {
            element.classList.add('counting');
            animateCounter(
              element,
              value,
              prefix,
              suffix,
              config.duration,
              config.easing
            );
          }
          
          observer.unobserve(element);
        }
      });
    }, {
      threshold: config.threshold
    });

    counters.forEach(counter => {
      // Store original value
      if (!counter.dataset.counter) {
        counter.dataset.counter = counter.textContent;
      }
      // Set initial value
      const { prefix, suffix } = parseCounterValue(counter.dataset.counter);
      counter.textContent = prefix + '0' + suffix;
      
      observer.observe(counter);
    });
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCounters);
  } else {
    initCounters();
  }

  // Export for external use
  window.GrunerCounters = {
    init: initCounters,
    animateCounter,
    parseCounterValue
  };
})();
