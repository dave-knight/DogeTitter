chrome.action.onClicked.addListener(function (tab) {
  const targetUrl = 'https://opensea.io/collection/blockydoge';
  chrome.tabs.create({ url: targetUrl });
});

// Listen for messages from the content script
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'keepAlive') {
    // Keep the service worker alive by resetting a timer
    clearTimeout(self.keepAliveTimer);
    self.keepAliveTimer = setTimeout(() => {
      // Close the service worker after a certain period of inactivity
      self.registration.unregister();
    }, 30000); // Adjust the timeout duration as needed (currently set to 30 seconds)
  }
});
