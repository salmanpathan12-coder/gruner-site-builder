/**
 * GRUNER RENEWABLE - SCROLL ANIMATIONS
 * IntersectionObserver-based scroll animations
 */

(function() {
  'use strict';

  // Configuration
  const config = {
    threshold: 0.1,
    rootMargin: '-50px 0px',
    once: true
  };

  // Animation classes
  const animationClasses = [
    'scroll-fade-up',
    'scroll-fade-left',
    'scroll-fade-right',
    'scroll-scale-in'
  ];

  // Initialize scroll animations
  function initScrollAnimations() {
    const elements = document.querySelectorAll(
      animationClasses.map(c => '.' + c).join(', ')
    );

    if (!elements.length) return;

    // Create observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          
          if (config.once) {
            observer.unobserve(entry.target);
          }
        } else if (!config.once) {
          entry.target.classList.remove('in-view');
        }
      });
    }, {
      threshold: config.threshold,
      rootMargin: config.rootMargin
    });

    // Observe all elements
    elements.forEach(element => {
      observer.observe(element);
    });
  }

  // Initialize parallax effect
  function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    if (!parallaxElements.length) return;

    function updateParallax() {
      const scrollY = window.pageYOffset;

      parallaxElements.forEach(element => {
        const speed = parseFloat(element.dataset.parallax) || 0.5;
        const direction = element.dataset.parallaxDirection === 'down' ? 1 : -1;
        const offset = scrollY * speed * direction;
        
        element.style.transform = `translateY(${offset}px)`;
      });
    }

    window.addEventListener('scroll', GrunerUtils.throttle(updateParallax, 16), { passive: true });
    updateParallax();
  }

  // Initialize progress line animations
  function initProgressLines() {
    const progressLines = document.querySelectorAll('.progress-line');
    
    if (!progressLines.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.5
    });

    progressLines.forEach(line => {
      observer.observe(line);
    });
  }

  // Initialize stagger animations
  function initStaggerAnimations() {
    const staggerContainers = document.querySelectorAll('.stagger-children');
    
    if (!staggerContainers.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '-50px 0px'
    });

    staggerContainers.forEach(container => {
      observer.observe(container);
    });
  }

  // Set scroll position CSS variable for parallax effects
  function initScrollVariable() {
    function updateScrollVariable() {
      document.documentElement.style.setProperty('--scroll-y', window.scrollY);
    }

    window.addEventListener('scroll', GrunerUtils.throttle(updateScrollVariable, 16), { passive: true });
    updateScrollVariable();
  }

  // Initialize all animations
  function init() {
    initScrollAnimations();
    initParallax();
    initProgressLines();
    initStaggerAnimations();
    initScrollVariable();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Export for external use
  window.GrunerAnimations = {
    init,
    initScrollAnimations,
    initParallax,
    initProgressLines,
    initStaggerAnimations
  };
})();
