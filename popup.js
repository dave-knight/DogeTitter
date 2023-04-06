document.getElementById('logoInput').addEventListener('change', function (event) {
  const reader = new FileReader();
  reader.onload = function (e) {
    chrome.storage.local.set({ logoDataUrl: e.target.result }, function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateLogo', logoDataUrl: e.target.result });
      });
    });
  };
  reader.readAsDataURL(event.target.files[0]);
});