/**
 * GRUNER RENEWABLE - MEDIA MENTIONS INFINITE SLIDER
 * Continuous scrolling animation for media logos
 */

(function() {
  'use strict';

  function init() {
    const container = document.querySelector('.media-mentions__logos');
    if (!container) return;

    // Get all logo items
    const logos = container.querySelectorAll('.media-mentions__logo');
    if (logos.length === 0) return;

    // Remove scroll-fade-up classes for infinite scroll
    logos.forEach(logo => {
      logo.classList.remove('scroll-fade-up');
      logo.style.removeProperty('--delay');
    });

    // Create wrapper for animation
    const wrapper = document.createElement('div');
    wrapper.className = 'media-mentions__track';

    // Move logos into wrapper
    logos.forEach(logo => {
      wrapper.appendChild(logo.cloneNode(true));
    });

    // Duplicate logos for seamless loop
    logos.forEach(logo => {
      wrapper.appendChild(logo.cloneNode(true));
    });

    // Clear container and add wrapper
    container.innerHTML = '';
    container.appendChild(wrapper);

    // Add gradient fades
    const fadeLeft = document.createElement('div');
    fadeLeft.className = 'media-mentions__fade media-mentions__fade--left';
    container.appendChild(fadeLeft);

    const fadeRight = document.createElement('div');
    fadeRight.className = 'media-mentions__fade media-mentions__fade--right';
    container.appendChild(fadeRight);

    // Start animation after a brief delay
    setTimeout(() => {
      wrapper.classList.add('media-mentions__track--animated');
    }, 100);
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.GrunerMediaSlider = { init };
})();
