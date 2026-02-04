/**
 * GRUNER RENEWABLE - MAP INTERACTION
 * Interactive India map with project markers
 */

(function() {
  'use strict';

  let activeMarker = null;
  let markers = [];
  let listItems = [];

  function init() {
    const mapContainer = document.querySelector('[data-map]');
    if (!mapContainer) return;

    markers = mapContainer.querySelectorAll('[data-marker]');
    listItems = document.querySelectorAll('.projects-map__state');

    // Initialize marker interactions
    markers.forEach((marker, index) => {
      marker.addEventListener('mouseenter', () => setActiveMarker(index));
      marker.addEventListener('mouseleave', () => setActiveMarker(null));
      marker.addEventListener('click', () => setActiveMarker(index));
    });

    // Initialize list item interactions
    listItems.forEach((item, index) => {
      item.addEventListener('mouseenter', () => setActiveMarker(index));
      item.addEventListener('mouseleave', () => setActiveMarker(null));
    });
  }

  function setActiveMarker(index) {
    // Remove active from previous
    if (activeMarker !== null) {
      if (markers[activeMarker]) {
        markers[activeMarker].classList.remove('active');
      }
      if (listItems[activeMarker]) {
        listItems[activeMarker].classList.remove('active');
      }
    }

    activeMarker = index;

    // Add active to current
    if (index !== null) {
      if (markers[index]) {
        markers[index].classList.add('active');
      }
      if (listItems[index]) {
        listItems[index].classList.add('active');
      }

      // Update tooltip if exists
      updateTooltip(index);
    } else {
      hideTooltip();
    }
  }

  function updateTooltip(index) {
    const tooltip = document.querySelector('[data-map-tooltip]');
    if (!tooltip || !markers[index]) return;

    const marker = markers[index];
    const mapContainer = document.querySelector('[data-map]');
    const data = {
      state: marker.dataset.state,
      plants: marker.dataset.plants,
      status: marker.dataset.status
    };

    // Update tooltip content
    const stateEl = tooltip.querySelector('[data-tooltip-state]');
    const plantsEl = tooltip.querySelector('[data-tooltip-plants]');
    const statusEl = tooltip.querySelector('[data-tooltip-status]');
    
    if (stateEl) stateEl.textContent = data.state;
    if (plantsEl) plantsEl.textContent = `${data.plants} Plants`;
    if (statusEl) statusEl.textContent = ` • ${data.status}`;

    // Position tooltip based on marker coordinates
    const cx = parseFloat(marker.getAttribute('cx'));
    const cy = parseFloat(marker.getAttribute('cy'));
    
    tooltip.style.left = `${cx}%`;
    tooltip.style.top = `${cy - 8}%`;
    tooltip.classList.add('visible');
  }

  function hideTooltip() {
    const tooltip = document.querySelector('[data-map-tooltip]');
    if (tooltip) {
      tooltip.classList.remove('visible');
    }
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.GrunerMap = { init, setActiveMarker };
})();
