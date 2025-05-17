document.addEventListener('DOMContentLoaded', function() {
  // Get all tab links and content sections
  const tabLinks = document.querySelectorAll('.tab-link');
  const tabContents = document.querySelectorAll('.tab-content');
  
  // Function to activate a tab
  function activateTab(tabId) {
    // Hide all tab contents
    tabContents.forEach(content => {
      content.classList.remove('active');
    });
    
    // Deactivate all tab links
    tabLinks.forEach(link => {
      link.classList.remove('active');
    });
    
    // Activate the selected tab content and link
    document.getElementById(tabId).classList.add('active');
    document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');
    
    // Save the active tab to localStorage
    localStorage.setItem('activeTab', tabId);
  }
  
  // Add click event listeners to tab links
  tabLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const tabId = this.getAttribute('data-tab');
      activateTab(tabId);
      
      // Scroll to the top of the tab content
      window.scrollTo({
        top: document.getElementById(tabId).offsetTop - 70,
        behavior: 'smooth'
      });
    });
  });
  
  // Check if there's a saved active tab in localStorage
  const savedTab = localStorage.getItem('activeTab');
  
  // Check if there's a hash in the URL
  const hash = window.location.hash.substring(1);
  
  // Activate the appropriate tab
  if (hash && document.getElementById(hash)) {
    activateTab(hash);
  } else if (savedTab && document.getElementById(savedTab)) {
    activateTab(savedTab);
  } else {
    // Default to the first tab
    const firstTabId = tabLinks[0].getAttribute('data-tab');
    activateTab(firstTabId);
  }
  
  // Handle hash changes
  window.addEventListener('hashchange', function() {
    const newHash = window.location.hash.substring(1);
    if (newHash && document.getElementById(newHash)) {
      activateTab(newHash);
    }
  });
});
