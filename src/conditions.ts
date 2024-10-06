/**
 * Page State Matcher conditions, enables the extension on the following hosts only
 */
const conditions = [
  new chrome.declarativeContent.PageStateMatcher({
    pageUrl: {
      urlMatches: "calendar.google.com",
      schemes: ["https", "http"],
    },
  }),
  new chrome.declarativeContent.PageStateMatcher({
    pageUrl: {
      urlMatches: "drive.google.com",
      schemes: ["https", "http"],
    },
  }),
  new chrome.declarativeContent.PageStateMatcher({
    pageUrl: {
      urlMatches: "meet.google.com",
      schemes: ["https", "http"],
    },
  }),
  new chrome.declarativeContent.PageStateMatcher({
    pageUrl: {
      urlMatches: "mail.google.com",
      schemes: ["https", "http"],
    },
  }),
];
