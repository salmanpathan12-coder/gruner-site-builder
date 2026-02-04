/**
 * GRUNER RENEWABLE - SOLUTIONS CARDS INTERACTIVITY
 * Hover effects, card expansion, and corner accent animations
 */

(function() {
  'use strict';

  let activeIndex = null;
  const expandedIndices = new Set([0, 1, 2, 3]); // All expanded by default

  function init() {
    const cards = document.querySelectorAll('.solutions__card');
    if (!cards.length) return;

    cards.forEach((card, index) => {
      // Add corner accent SVG
      const cornerSvg = document.createElement('div');
      cornerSvg.className = 'solutions__card-corner';
      cornerSvg.innerHTML = `
        <svg viewBox="0 0 48 48">
          <defs>
            <linearGradient id="corner-gradient-${index}" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="hsl(168, 65%, 35%)" />
              <stop offset="100%" stop-color="hsl(85, 55%, 50%)" />
            </linearGradient>
          </defs>
          <path d="M48 0 L48 48 L0 48" fill="none" stroke="url(#corner-gradient-${index})" stroke-width="2" class="corner-path"/>
        </svg>
      `;
      card.appendChild(cornerSvg);

      // Mouse enter
      card.addEventListener('mouseenter', () => {
        activeIndex = index;
        card.classList.add('solutions__card--active');
        updateCornerAnimation(card, true);
      });

      // Mouse leave
      card.addEventListener('mouseleave', () => {
        activeIndex = null;
        card.classList.remove('solutions__card--active');
        updateCornerAnimation(card, false);
      });

      // Click to toggle features
      card.addEventListener('click', () => {
        const features = card.querySelector('.solutions__card-features');
        if (!features) return;

        if (expandedIndices.has(index)) {
          expandedIndices.delete(index);
          features.classList.remove('solutions__card-features--expanded');
        } else {
          expandedIndices.add(index);
          features.classList.add('solutions__card-features--expanded');
        }
      });

      // Initialize features state
      const features = card.querySelector('.solutions__card-features');
      if (features && expandedIndices.has(index)) {
        features.classList.add('solutions__card-features--expanded');
      }
    });
  }

  function updateCornerAnimation(card, isActive) {
    const path = card.querySelector('.corner-path');
    if (!path) return;

    if (isActive) {
      path.style.strokeDasharray = path.getTotalLength();
      path.style.strokeDashoffset = '0';
    } else {
      path.style.strokeDashoffset = path.getTotalLength();
    }
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.GrunerSolutions = { init };
})();
