/**
 * GRUNER RENEWABLE - ACCORDION
 * Expandable sections for jobs, process steps, etc.
 */

(function() {
  'use strict';

  function init() {
    const accordions = document.querySelectorAll('[data-accordion]');
    
    accordions.forEach(accordion => {
      const trigger = accordion.querySelector('[data-accordion-trigger]');
      const content = accordion.querySelector('[data-accordion-content]');
      const chevron = accordion.querySelector('.accordion-chevron');
      
      if (!trigger || !content) return;

      trigger.addEventListener('click', () => {
        const isOpen = content.classList.contains('open');
        
        // Close all others in the same group
        const group = accordion.dataset.accordionGroup;
        if (group) {
          const groupAccordions = document.querySelectorAll(`[data-accordion-group="${group}"]`);
          groupAccordions.forEach(acc => {
            if (acc !== accordion) {
              const accContent = acc.querySelector('[data-accordion-content]');
              const accChevron = acc.querySelector('.accordion-chevron');
              if (accContent) accContent.classList.remove('open');
              if (accChevron) accChevron.classList.remove('open');
            }
          });
        }
        
        // Toggle current
        content.classList.toggle('open');
        if (chevron) chevron.classList.toggle('open');
      });
    });
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.GrunerAccordion = { init };
})();
