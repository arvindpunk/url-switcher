chrome.runtime.onInstalled.addListener(function() {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([
            {
                conditions: [
                    new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: { 
                            urlMatches: 'calendar.google.com',
                            schemes: ['https', 'http'] 
                        },
                    }) , 
                    new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: { 
                            urlMatches: 'drive.google.com',
                            schemes: ['https', 'http'] 
                        },
                    }) , 
                    new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: { 
                            urlMatches: 'mail.google.com',
                            schemes: ['https', 'http'] 
                        },
                    })
                ],
                actions: [ new chrome.declarativeContent.ShowPageAction() ]
            }
        ]);
    });
});

chrome.pageAction.onClicked.addListener(function(tab) {
    let url = tab.url
    if (urlMatches = "mail.google.com"){
        url = url.replace(/(?!mail\.google\.com\/mail\/u\/)(\d+)(?=\/)/, "$1" + 1);
    }
    else if (urlMatches = "calendar.google.com"){
        url = url.replace(/(?!calendar\.google\.com\/calendar\/u\/)(\d+)(?=\/)/, "$1" + 1);
    }
    else if (urlMatches = "drive.google.com"){
        url = url.replace(/(?!drive\.google\.com\/drive\/u\/)(\d+)(?=\/)/, "$1" + 1);
    }
    
    chrome.tabs.update(tab.id, { url: url});
});