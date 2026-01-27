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
    listItems = document.querySelectorAll('[data-project-item]');

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
    const data = {
      state: marker.dataset.state,
      plants: marker.dataset.plants,
      status: marker.dataset.status
    };

    // Update tooltip content
    tooltip.querySelector('[data-tooltip-state]').textContent = data.state;
    tooltip.querySelector('[data-tooltip-plants]').textContent = `${data.plants} Plants`;
    tooltip.querySelector('[data-tooltip-status]').textContent = data.status;

    // Position tooltip
    const markerRect = marker.getBoundingClientRect();
    const containerRect = marker.closest('[data-map]').getBoundingClientRect();
    
    tooltip.style.left = `${markerRect.left - containerRect.left + markerRect.width / 2}px`;
    tooltip.style.top = `${markerRect.top - containerRect.top - 10}px`;
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
