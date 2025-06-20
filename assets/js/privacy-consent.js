console.log('=== PRIVACY CONSENT SCRIPT LOADED ===');

// Basic privacy consent functionality
function setAnalyticsConsent(consent) {
  try {
    localStorage.setItem('analytics-consent', consent);
    var banner = document.getElementById('privacy-consent-banner');
    if (banner) {
      banner.style.display = 'none';
    }
    console.log('Analytics consent set to:', consent);
  } catch (e) {
    console.error('Error setting analytics consent:', e);
  }
}

function showPrivacyBanner() {
  try {
    var banner = document.getElementById('privacy-consent-banner');
    if (banner) {
      banner.style.display = 'block';
      console.log('Banner shown manually');
    } else {
      console.log('Banner element not found');
    }
  } catch (e) {
    console.error('Error showing banner:', e);
  }
}

function updateDebugInfo() {
  try {
    console.log('updateDebugInfo function called');
    
    var bannerStatus = document.getElementById('banner-status');
    var localStorageStatus = document.getElementById('localstorage-status');
    
    if (bannerStatus) {
      var banner = document.getElementById('privacy-consent-banner');
      var status = banner ? 'Banner found' : 'Banner not found';
      bannerStatus.textContent = status;
      console.log('Updated banner status to:', status);
    }
    
    if (localStorageStatus) {
      var consent = localStorage.getItem('analytics-consent');
      var consentText = 'Consent: ' + (consent || 'null');
      localStorageStatus.textContent = consentText;
      console.log('Updated localStorage status to:', consentText);
    }
  } catch (e) {
    console.error('Error updating debug info:', e);
  }
}

// Simple test function
window.testDebug = function() {
  console.log('testDebug called');
  updateDebugInfo();
};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded - updating debug info');
  updateDebugInfo();
});

console.log('Script loaded successfully'); 