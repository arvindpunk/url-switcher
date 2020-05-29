chrome.runtime.onInstalled.addListener(function() {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([
            {
                conditions: [
                    new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: { hostEquals: 'mail.google.com', schemes: ['https', 'http'] },
                    })
                ],
                actions: [ new chrome.declarativeContent.ShowPageAction() ]
            }
        ]);
    });
});

chrome.pageAction.onClicked.addListener(function(tab) {
    let url = tab.url
    url = url.replace(/(?!mail\.google\.com\/mail\/u\/)(\d+)(?=\/)/, "$1" + 1);
    chrome.tabs.update(tab.id, { url: url});
});