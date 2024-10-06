import { stringIncrement } from "./string-utils";
import browser from "webextension-polyfill";

browser.action.onClicked.addListener((tab: browser.Tabs.Tab) => {
  console.log(tab);
  if (typeof tab.url === "undefined") return;
  if (typeof tab.id === "undefined") return;
  const currentUrl = tab.url;
  const updatedUrl = getTransformedURL(currentUrl);
  if (currentUrl === updatedUrl) return;
  browser.tabs.update(tab.id, { url: updatedUrl });
});

const getTransformedURL = (currentUrl: string): string => {
  const url = new URL(currentUrl);
  switch (url.host) {
    // path params
    case "calendar.google.com":
      return url.href.replace(
        /(?!calendar\.google\.com\/calendar\/u\/)(\d+)(?=\/)/,
        (_, p1) => {
          return stringIncrement(p1);
        }
      );

    case "drive.google.com":
      return url.href.replace(
        /(?!drive\.google\.com\/drive\/u\/)(\d+)(?=\/)/,
        (_, p1) => {
          return stringIncrement(p1);
        }
      );

    case "mail.google.com":
      return url.href.replace(
        /(?!mail\.google\.com\/mail\/u\/)(\d+)(?=\/)/,
        (_, p1) => {
          return stringIncrement(p1);
        }
      );

    // query params
    case "meet.google.com":
      const authuser = url.searchParams.get("authuser") || "0";
      url.searchParams.set("authuser", stringIncrement(authuser));
      return url.href;

    default:
      return url.href;
  }
};
