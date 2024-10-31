const customParam = encodeURI('customparam=1');

chrome.browserAction.onClicked.addListener((tab) => {
  const url = tab?.url ?? '';
  const hashIndex = url.indexOf('#');
  const queryIndex = url.indexOf('?');
  
  const hashStart = hashIndex === -1 ? url.length : hashIndex;
  const querySymbol = queryIndex === -1 ? '?' : '&';
  
  const newUrl = `${url.substring(0, hashStart)}${querySymbol}${customParam}${url.substring(hashStart)}`;

  chrome.tabs.update(tab.id, { url: newUrl });
});
