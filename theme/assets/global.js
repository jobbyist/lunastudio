/**
 * Global JavaScript for Luna Lux Hair Shopify Theme
 * This file handles basic theme functionality outside of React
 */

// Wait for DOM to be ready
if (document.readyState !== 'loading') {
  init();
} else {
  document.addEventListener('DOMContentLoaded', init);
}

function init() {
  // Initialize theme
  console.log('Luna Lux Hair theme loaded');

  // Handle skip to content link
  const skipLink = document.querySelector('.skip-to-content-link');
  if (skipLink) {
    skipLink.addEventListener('click', (e) => {
      e.preventDefault();
      const mainContent = document.getElementById('MainContent');
      if (mainContent) {
        mainContent.focus();
        mainContent.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Set up focus management for accessibility
  setupFocusManagement();
}

function setupFocusManagement() {
  // Trap focus in modals/dialogs when open
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const openModals = document.querySelectorAll('[aria-modal="true"]');
      openModals.forEach(modal => {
        const closeButton = modal.querySelector('[aria-label*="close"], .close-button');
        if (closeButton) {
          closeButton.click();
        }
      });
    }
  });
}

// Export for use by React app if needed
if (typeof window !== 'undefined') {
  window.themeGlobal = {
    init,
    setupFocusManagement
  };
}
