/**
 * GRUNER RENEWABLE - UTILITY FUNCTIONS
 * Common helper functions used across the site
 */

// Debounce function
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function
function throttle(func, limit) {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Get scroll position
function getScrollPosition() {
  return {
    x: window.pageXOffset || document.documentElement.scrollLeft,
    y: window.pageYOffset || document.documentElement.scrollTop
  };
}

// Check if element is in viewport
function isInViewport(element, offset = 0) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) - offset &&
    rect.bottom >= offset &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth) - offset &&
    rect.right >= offset
  );
}

// Smooth scroll to element
function smoothScrollTo(target, offset = 0) {
  const element = typeof target === 'string' ? document.querySelector(target) : target;
  if (!element) return;
  
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;
  
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

// Format number with commas
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Parse numeric value from string (e.g., "1500+" -> 1500)
function parseNumericValue(str) {
  return parseInt(str.replace(/[^0-9]/g, ''), 10);
}

// Get element data attributes
function getDataAttributes(element) {
  const data = {};
  for (const attr of element.attributes) {
    if (attr.name.startsWith('data-')) {
      const key = attr.name.replace('data-', '').replace(/-([a-z])/g, (g) => g[1].toUpperCase());
      data[key] = attr.value;
    }
  }
  return data;
}

// Create element with attributes
function createElement(tag, attributes = {}, children = []) {
  const element = document.createElement(tag);
  
  for (const [key, value] of Object.entries(attributes)) {
    if (key === 'className') {
      element.className = value;
    } else if (key === 'innerHTML') {
      element.innerHTML = value;
    } else if (key === 'textContent') {
      element.textContent = value;
    } else if (key.startsWith('on') && typeof value === 'function') {
      element.addEventListener(key.substring(2).toLowerCase(), value);
    } else {
      element.setAttribute(key, value);
    }
  }
  
  for (const child of children) {
    if (typeof child === 'string') {
      element.appendChild(document.createTextNode(child));
    } else if (child instanceof Node) {
      element.appendChild(child);
    }
  }
  
  return element;
}

// Add/remove class utilities
function addClass(element, className) {
  if (element && className) {
    element.classList.add(...className.split(' '));
  }
}

function removeClass(element, className) {
  if (element && className) {
    element.classList.remove(...className.split(' '));
  }
}

function toggleClass(element, className) {
  if (element && className) {
    element.classList.toggle(className);
  }
}

function hasClass(element, className) {
  return element && element.classList.contains(className);
}

// Local storage helpers
function setStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.warn('localStorage not available');
  }
}

function getStorage(key, defaultValue = null) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (e) {
    return defaultValue;
  }
}

// Get current year
function getCurrentYear() {
  return new Date().getFullYear();
}

// Export for use in other modules
window.GrunerUtils = {
  debounce,
  throttle,
  getScrollPosition,
  isInViewport,
  smoothScrollTo,
  formatNumber,
  parseNumericValue,
  getDataAttributes,
  createElement,
  addClass,
  removeClass,
  toggleClass,
  hasClass,
  setStorage,
  getStorage,
  getCurrentYear
};
