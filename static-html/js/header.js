/**
 * GRUNER RENEWABLE - HEADER FUNCTIONALITY
 * Scroll effects, mobile menu, dropdowns
 */

(function() {
  'use strict';

  // DOM Elements
  let header;
  let mobileMenuBtn;
  let mobileMenu;
  let navItems;

  // State
  let isScrolled = false;
  let isMobileMenuOpen = false;

  // Initialize header
  function init() {
    header = document.querySelector('.header');
    // Support both flat and BEM class names, plus IDs
    mobileMenuBtn = document.querySelector('.mobile-menu-btn') || 
                    document.querySelector('.header__mobile-toggle') || 
                    document.getElementById('mobileMenuToggle');
    mobileMenu = document.querySelector('.mobile-menu') || 
                 document.querySelector('.header__mobile-menu') || 
                 document.getElementById('mobileMenu');
    navItems = document.querySelectorAll('.nav-item, .header__dropdown');

    if (!header) return;

    initScrollEffect();
    initMobileMenu();
    initDropdowns();
    initSmoothScroll();
  }

  // Scroll effect for header
  function initScrollEffect() {
    function handleScroll() {
      const scrollY = window.pageYOffset;
      const shouldBeScrolled = scrollY > 50;

      if (shouldBeScrolled !== isScrolled) {
        isScrolled = shouldBeScrolled;
        
        if (isScrolled) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    }

    window.addEventListener('scroll', GrunerUtils.throttle(handleScroll, 16), { passive: true });
    handleScroll(); // Check initial state
  }

  // Mobile menu toggle
  function initMobileMenu() {
    if (!mobileMenuBtn || !mobileMenu) return;

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

  // Dropdown functionality for desktop
  function initDropdowns() {
    navItems.forEach(item => {
      const dropdown = item.querySelector('.nav-dropdown');
      if (!dropdown) return;

      // Desktop: hover behavior (CSS handles most of this)
      item.addEventListener('mouseenter', () => {
        closeAllDropdowns();
        item.classList.add('open');
      });

      item.addEventListener('mouseleave', () => {
        item.classList.remove('open');
      });

      // Touch devices: click to toggle
      const navLink = item.querySelector('.nav-link');
      if (navLink) {
        navLink.addEventListener('click', (e) => {
          if (window.innerWidth >= 1024 && dropdown) {
            // Only prevent default if it's a dropdown parent
            if (item.classList.contains('open')) {
              // If already open, follow the link
              return;
            }
            e.preventDefault();
            closeAllDropdowns();
            item.classList.add('open');
          }
        });
      }
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav-item')) {
        closeAllDropdowns();
      }
    });
  }

  // Close all dropdowns
  function closeAllDropdowns() {
    navItems.forEach(item => {
      item.classList.remove('open');
    });
  }

  // Smooth scroll for anchor links
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          
          const headerHeight = header ? header.offsetHeight : 80;
          GrunerUtils.smoothScrollTo(target, headerHeight);
          
          // Update URL without jumping
          history.pushState(null, null, href);
        }
      });
    });
  }

  // Handle hash navigation on page load
  function handleHashNavigation() {
    if (window.location.hash) {
      setTimeout(() => {
        const target = document.querySelector(window.location.hash);
        if (target) {
          const headerHeight = header ? header.offsetHeight : 80;
          GrunerUtils.smoothScrollTo(target, headerHeight);
        }
      }, 100);
    }
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
  window.GrunerHeader = {
    init,
    closeAllDropdowns
  };
})();
