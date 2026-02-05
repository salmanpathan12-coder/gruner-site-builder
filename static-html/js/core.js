/**
 * GRUNER RENEWABLE - CORE.JS
 * Unified entry point for all shared functionality
 * Handles: page loader, mobile menu, dropdowns, scroll animations
 */

(function() {
  'use strict';

  // =====================================================
  // PAGE LOADER
  // =====================================================
  function initLoader() {
    const loader = document.querySelector('.page-loader');
    if (!loader) return;

    const MINIMUM_LOAD_TIME = 1800;
    const startTime = performance.now();

    function hideLoader() {
      if (loader.classList.contains('fade-out')) return;
      loader.classList.add('fade-out');
      setTimeout(() => {
        loader.style.display = 'none';
      }, 500);
    }

    window.addEventListener('load', () => {
      const elapsed = performance.now() - startTime;
      const remainingTime = Math.max(0, MINIMUM_LOAD_TIME - elapsed);
      setTimeout(hideLoader, remainingTime);
    });

    // Fallback: hide after max wait time
    setTimeout(hideLoader, 5000);
  }

  // =====================================================
  // MOBILE MENU
  // =====================================================
  function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.header__mobile-toggle') || 
                          document.getElementById('mobileMenuToggle');
    const mobileMenu = document.querySelector('.header__mobile-menu') || 
                       document.getElementById('mobileMenu');
    
    if (!mobileMenuBtn || !mobileMenu) return;

    let isMobileMenuOpen = false;

    mobileMenuBtn.addEventListener('click', () => {
      isMobileMenuOpen = !isMobileMenuOpen;
      
      if (isMobileMenuOpen) {
        mobileMenuBtn.classList.add('open');
        mobileMenu.classList.add('open');
        document.body.style.overflow = 'hidden';
      } else {
        mobileMenuBtn.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      }
    });

    // Close menu when clicking links
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        isMobileMenuOpen = false;
        mobileMenuBtn.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // =====================================================
  // HEADER SCROLL EFFECT
  // =====================================================
  function initHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;

    let isScrolled = false;
    const scrollThreshold = 50;

    function handleScroll() {
      const shouldBeScrolled = window.pageYOffset > scrollThreshold;
      
      if (shouldBeScrolled !== isScrolled) {
        isScrolled = shouldBeScrolled;
        header.classList.toggle('scrolled', isScrolled);
      }
    }

    // Use throttle if available, otherwise use passive listener
    if (typeof GrunerUtils !== 'undefined' && GrunerUtils.throttle) {
      window.addEventListener('scroll', GrunerUtils.throttle(handleScroll, 16), { passive: true });
    } else {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }
    
    handleScroll(); // Check initial state
  }

  // =====================================================
  // DROPDOWN NAVIGATION
  // =====================================================
  function initDropdowns() {
    const dropdowns = document.querySelectorAll('.header__dropdown');
    
    dropdowns.forEach(dropdown => {
      // Desktop: hover behavior is handled by CSS
      // Touch devices: click to toggle
      const link = dropdown.querySelector('.header__link');
      const menu = dropdown.querySelector('.header__dropdown-menu');
      
      if (link && menu) {
        link.addEventListener('click', (e) => {
          // On touch devices at desktop size, first click opens dropdown
          if (window.innerWidth >= 1024) {
            if (!dropdown.classList.contains('open')) {
              e.preventDefault();
              closeAllDropdowns();
              dropdown.classList.add('open');
            }
          }
        });
      }
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.header__dropdown')) {
        closeAllDropdowns();
      }
    });

    function closeAllDropdowns() {
      dropdowns.forEach(dropdown => {
        dropdown.classList.remove('open');
      });
    }
  }

  // =====================================================
  // SCROLL ANIMATIONS
  // =====================================================
  function initScrollAnimations() {
    const animationClasses = [
      'scroll-fade-up',
      'scroll-fade-left',
      'scroll-fade-right',
      'scroll-scale-in'
    ];

    const elements = document.querySelectorAll(
      animationClasses.map(c => '.' + c).join(', ')
    );

    if (!elements.length) return;

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

    elements.forEach(element => {
      observer.observe(element);
    });
  }

  // =====================================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // =====================================================
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          
          const header = document.querySelector('.header');
          const headerHeight = header ? header.offsetHeight : 80;
          
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          
          // Update URL without jumping
          history.pushState(null, null, href);
        }
      });
    });
  }

  // =====================================================
  // DYNAMIC FOOTER YEAR
  // =====================================================
  function initFooterYear() {
    const yearElements = document.querySelectorAll('#footerYear, .footer__copyright-year');
    const currentYear = new Date().getFullYear();
    
    yearElements.forEach(el => {
      if (el) el.textContent = currentYear;
    });
  }

  // =====================================================
  // HASH NAVIGATION
  // =====================================================
  function handleHashNavigation() {
    if (window.location.hash) {
      setTimeout(() => {
        const target = document.querySelector(window.location.hash);
        if (target) {
          const header = document.querySelector('.header');
          const headerHeight = header ? header.offsetHeight : 80;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }

  // =====================================================
  // INITIALIZE ALL
  // =====================================================
  function init() {
    initLoader();
    initMobileMenu();
    initHeaderScroll();
    initDropdowns();
    initScrollAnimations();
    initSmoothScroll();
    initFooterYear();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      init();
      handleHashNavigation();
    });
  } else {
    init();
    handleHashNavigation();
  }

  // Export for external use
  window.GrunerCore = {
    init,
    initLoader,
    initMobileMenu,
    initHeaderScroll,
    initDropdowns,
    initScrollAnimations,
    initSmoothScroll,
    initFooterYear
  };
})();
