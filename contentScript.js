function findTwitterLogo() {
  const headingElements = document.querySelectorAll('h1[role="heading"]');

  for (const heading of headingElements) {
    const link = heading.querySelector('a[aria-label="Twitter"]');

    if (link) {
      const svg = link.querySelector('svg');
      if (svg) {
        return svg;
      }
    }
  }

  return null;
}

function replaceTwitterLogo(logoDataUrl) {
  const logoElement = findTwitterLogo();
  if (logoElement) {
    const img = document.createElement('img');
    img.src = logoDataUrl;
    img.style.width = '24px';
    img.style.height = '24px';
    img.style.verticalAlign = 'bottom';
    logoElement.parentNode.replaceChild(img, logoElement);
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
