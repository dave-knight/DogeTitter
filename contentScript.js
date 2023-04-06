function replaceTwitterLogo(logoDataUrl) {
  const logoElement = document.querySelector('img[alt="Twitter"]');
  if (logoElement) {
    logoElement.src = logoDataUrl;
  }
}

chrome.runtime.onMessage.addListener(function (request) {
  if (request.action === 'updateLogo') {
    replaceTwitterLogo(request.logoDataUrl);
  }
});

chrome.storage.local.get('logoDataUrl', function (data) {
  if (data.logoDataUrl) {
    replaceTwitterLogo(data.logoDataUrl);
  }
});