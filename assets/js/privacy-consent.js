// Basic privacy consent functionality
function setAnalyticsConsent(consent) {
  try {
    localStorage.setItem('analytics-consent', consent);
    var banner = document.getElementById('privacy-consent-banner');
    if (banner) {
      banner.style.display = 'none';
    }
    // Reload the page to apply the consent choice to analytics script
    location.reload();
  } catch (e) {
    console.error('Error setting analytics consent:', e);
  }
}

// Check consent on page load
document.addEventListener('DOMContentLoaded', function() {
  var consent = localStorage.getItem('analytics-consent');
  var banner = document.getElementById('privacy-consent-banner');
  if (consent === 'true' || consent === 'false') {
    if (banner) {
      banner.style.display = 'none';
    }
  } else {
    if (banner) {
      banner.style.display = 'block';
    }
  }
}); 