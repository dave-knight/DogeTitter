chrome.browserAction.onClicked.addListener(function (tab) {
  const targetUrl = 'https://opensea.io/collection/blockydoge';
  chrome.tabs.create({ url: targetUrl });
});