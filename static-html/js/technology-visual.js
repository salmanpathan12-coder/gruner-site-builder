/**
 * GRUNER RENEWABLE - TECHNOLOGY PAGE VISUAL ANIMATIONS
 * Initializes biogas system particles, accordion, and entrance animations
 */

(function() {
  'use strict';

  /**
   * Initialize the biogas system visual particles
   */
  function initBiogasVisual() {
    const particlesContainer = document.getElementById('biogasParticles');
    if (!particlesContainer) return;

    // Only add particles if container is empty
    if (particlesContainer.children.length > 0) return;

    // Generate 12 floating particles
    for (let i = 0; i < 12; i++) {
      const particle = document.createElement('div');
      particle.className = 'biogas-visual__particle';
      
      // Random position
      particle.style.left = `${8 + Math.random() * 84}%`;
      particle.style.top = `${8 + Math.random() * 84}%`;
      
      // Random float direction
      const floatX = Math.random() * 60 - 30;
      const floatY = Math.random() * 60 - 30;
      particle.style.setProperty('--float-x', `${floatX}px`);
      particle.style.setProperty('--float-y', `${floatY}px`);
      
      // Random duration and delay
      const duration = 4 + Math.random() * 2;
      particle.style.setProperty('--duration', `${duration}s`);
      particle.style.setProperty('--delay', `${i * 0.3}s`);
      
      particlesContainer.appendChild(particle);
    }
  }

  /**
   * Initialize the process steps accordion
   */
  function initProcessAccordion() {
    const stepsContainer = document.getElementById('processSteps');
    if (!stepsContainer) return;

    const steps = stepsContainer.querySelectorAll('.tech-process__step');
    
    steps.forEach(step => {
      const header = step.querySelector('.tech-process__step-header');
      if (!header) return;

      header.addEventListener('click', () => {
        // Close all other steps
        steps.forEach(s => {
          if (s !== step) {
            s.classList.remove('active');
          }
        });
        
        // Toggle current step
        step.classList.toggle('active');
      });
    });
  }

  /**
   * Initialize hero metrics counters
   */
  function initHeroCounters() {
    const heroCounters = document.querySelectorAll('.tech-hero__metric-value .counter');
    
    if (!heroCounters.length) return;

    // Animate counters immediately on page load
    heroCounters.forEach(counter => {
      const target = parseInt(counter.dataset.counter, 10);
      if (isNaN(target)) return;

      animateCounter(counter, target);
    });
  }

  /**
   * Animate a counter element
   */
  function animateCounter(element, target) {
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

  /**
   * Initialize all technology page functionality
   */
  function init() {
    initBiogasVisual();
    initProcessAccordion();
    initHeroCounters();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Export for external use
  window.GrunerTechnology = {
    init,
    initBiogasVisual,
    initProcessAccordion,
    initHeroCounters
  };
})();
