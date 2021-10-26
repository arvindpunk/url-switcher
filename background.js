chrome.runtime.onInstalled.addListener(function () {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([
            {
                conditions: [
                    new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: {
                            urlMatches: 'calendar.google.com',
                            schemes: ['https', 'http']
                        },
                    }),
                    new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: {
                            urlMatches: 'drive.google.com',
                            schemes: ['https', 'http']
                        },
                    }),
                    new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: {
                            urlMatches: 'meet.google.com',
                            schemes: ['https', 'http']
                        },
                    }),
                    new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: {
                            urlMatches: 'mail.google.com',
                            schemes: ['https', 'http']
                        },
                    })
                ],
                actions: [new chrome.declarativeContent.ShowPageAction()]
            }
        ]);
    });
});

chrome.pageAction.onClicked.addListener(function (tab) {
    let url = new URL(tab.url)
    let updatedUrl = url.href;
    if (url.host === "mail.google.com") {
        updatedUrl = updatedUrl.replace(/(?!mail\.google\.com\/mail\/u\/)(\d+)(?=\/)/, "$1" + 1);
    }
    else if (url.host === "calendar.google.com") {
        updatedUrl = updatedUrl.replace(/(?!calendar\.google\.com\/calendar\/u\/)(\d+)(?=\/)/, "$1" + 1);
    }
    else if (url.host === "drive.google.com") {
        updatedUrl = updatedUrl.replace(/(?!drive\.google\.com\/drive\/u\/)(\d+)(?=\/)/, "$1" + 1);
    }
    else if (url.host === "meet.google.com") {
        const authuser = url.searchParams.get('authuser') || "0"
        const updatedAuthuser = (parseInt(authuser) + 1).toString()
        url.searchParams.set('authuser', updatedAuthuser)
        updatedUrl = url.href
    }

    chrome.tabs.update(tab.id, { url: updatedUrl });
});