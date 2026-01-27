/**
 * GRUNER RENEWABLE - PAGE LOADER
 * Branded loading screen with animation
 */

(function() {
  'use strict';

  const MINIMUM_LOAD_TIME = 1800; // 1.8 seconds minimum

  function init() {
    const loader = document.querySelector('.page-loader');
    if (!loader) return;

    const startTime = performance.now();

    // Wait for all content to load
    window.addEventListener('load', () => {
      const elapsed = performance.now() - startTime;
      const remainingTime = Math.max(0, MINIMUM_LOAD_TIME - elapsed);

      setTimeout(() => {
        hideLoader(loader);
      }, remainingTime);
    });

    // Fallback: hide loader after maximum wait time
    setTimeout(() => {
      hideLoader(loader);
    }, 5000);
  }

  function hideLoader(loader) {
    if (loader.classList.contains('fade-out')) return;
    
    loader.classList.add('fade-out');
    
    // Remove from DOM after animation
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500);
  }

  // Run immediately
  init();

  // Export for external use
  window.GrunerLoader = {
    hide: () => {
      const loader = document.querySelector('.page-loader');
      if (loader) hideLoader(loader);
    }
  };
})();
