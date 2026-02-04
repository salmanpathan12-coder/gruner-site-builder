/**
 * GRUNER RENEWABLE - LEADERSHIP CAROUSEL
 * Custom carousel for leadership section
 */

(function() {
  'use strict';

  const SLIDE_CLASS = 'leadership-carousel__slide';
  const ACTIVE_CLASS = 'active';

  class LeadershipCarousel {
    constructor(element) {
      this.container = element;
      this.track = element.querySelector('.leadership-carousel__track');
      this.slides = element.querySelectorAll('.' + SLIDE_CLASS);
      this.prevBtn = element.querySelector('.leadership-carousel__prev');
      this.nextBtn = element.querySelector('.leadership-carousel__next');
      
      this.currentIndex = 0;
      this.slidesPerView = this.getSlidesPerView();
      this.totalSlides = this.slides.length;
      
      this.init();
    }

    getSlidesPerView() {
      if (window.innerWidth >= 1280) return 4;
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 640) return 2;
      return 1;
    }

    init() {
      // Set up event listeners
      if (this.prevBtn) {
        this.prevBtn.addEventListener('click', () => this.prev());
      }
      if (this.nextBtn) {
        this.nextBtn.addEventListener('click', () => this.next());
      }

      // Touch/swipe support
      let touchStartX = 0;
      let touchEndX = 0;

      this.track.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });

      this.track.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        this.handleSwipe(touchStartX, touchEndX);
      }, { passive: true });

      // Resize handler
      window.addEventListener('resize', () => {
        this.slidesPerView = this.getSlidesPerView();
        this.updateSlidePosition();
      });

      // Initial position
      this.updateSlidePosition();
    }

    handleSwipe(startX, endX) {
      const threshold = 50;
      const diff = startX - endX;

      if (Math.abs(diff) > threshold) {
        if (diff > 0) {
          this.next();
        } else {
          this.prev();
        }
      }
    }

    prev() {
      this.currentIndex--;
      if (this.currentIndex < 0) {
        this.currentIndex = this.totalSlides - this.slidesPerView;
      }
      this.updateSlidePosition();
    }

    next() {
      this.currentIndex++;
      if (this.currentIndex > this.totalSlides - this.slidesPerView) {
        this.currentIndex = 0;
      }
      this.updateSlidePosition();
    }

    updateSlidePosition() {
      const slideWidth = 100 / this.slidesPerView;
      const offset = this.currentIndex * slideWidth;
      this.track.style.transform = `translateX(-${offset}%)`;
    }
  }

  // Initialize on DOM ready
  function init() {
    const carousels = document.querySelectorAll('.leadership-carousel');
    carousels.forEach(carousel => {
      new LeadershipCarousel(carousel);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Export for external use
  window.LeadershipCarousel = LeadershipCarousel;
})();
