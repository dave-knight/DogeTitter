function findTwitterLogos() {
  const twitterLogoSVGPath = 'M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z';
  const svgElements = document.querySelectorAll('svg');
  const twitterLogos = [];

  function comparePathData(pathData1, pathData2, epsilon) {
    const points1 = pathData1.split(' ');
    const points2 = pathData2.split(' ');

    if (points1.length !== points2.length) {
      return false;
    }

    for (let i = 0; i < points1.length; i++) {
      if (Math.abs(parseFloat(points1[i]) - parseFloat(points2[i])) > epsilon) {
        return false;
      }
    }

    return true;
  }

  for (const svg of svgElements) {
    const path = svg.querySelector('path');
    if (path) {
      const pathData = path.getAttribute('d');
      if (pathData && comparePathData(pathData, twitterLogoSVGPath, 0.01)) {
        twitterLogos.push(svg);
      }
    }
  }

  return twitterLogos;
}

async function replaceTwitterLogo(logoDataUrl, logoElement) {
  const img = document.createElement('img');
  img.src = logoDataUrl;

  await new Promise((resolve) => requestAnimationFrame(resolve));

  const dogeContainer = document.createElement('div');
  dogeContainer.style.backgroundColor = 'transparent';
  dogeContainer.style.width = img.style.width;
  dogeContainer.style.height = img.style.height;

  dogeContainer.appendChild(img);

  // Add this line back to replace the Twitter logo with the Doge image
  logoElement.parentNode.replaceChild(dogeContainer, logoElement);
}

function replaceTwitterLogos(logoDataUrl) {
  const logoElements = findTwitterLogos();
  for (const logoElement of logoElements) {
    replaceTwitterLogo(logoDataUrl, logoElement);
  }
}

async function fetchImageDataUrl() {
  const response = await fetch('https://raw.githubusercontent.com/dave-knight/DogeTitter/6638edc921a355baaa014947c883b29377e7a9ec/images/dogeCrop.png');
  const blob = await response.blob();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

async function init() {
  // Clear the stored logoDataUrl. TODO: Remove this line when the extension is published.
  chrome.storage.local.remove('logoDataUrl');
  chrome.storage.local.get('logoDataUrl', async function (data) {
    if (data.logoDataUrl) {
      replaceTwitterLogos(data.logoDataUrl);
    } else {
      const logoDataUrl = await fetchImageDataUrl();
      replaceTwitterLogos(logoDataUrl);
      chrome.storage.local.set({ logoDataUrl });
    }
  });
}

function onDOMContentLoaded() {
  init();

  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList') {
        init();
      }
    }
  });

  observer.observe(document.body, { attributes: false, childList: true, subtree: true });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', onDOMContentLoaded);
} else {
  onDOMContentLoaded();
}

function sendKeepAlive() {
  navigator.serviceWorker.controller.postMessage({ type: 'keepAlive' });
  setTimeout(sendKeepAlive, 10000);
}

if (navigator.serviceWorker && navigator.serviceWorker.controller) {
  sendKeepAlive();
}
