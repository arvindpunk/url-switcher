/**
 * Returns the updated url, based upon url.host
 * @param {URL} url 
 * @returns {string} updatedUrl
 */
const getURL = (url) => {
    let updatedUrl;
    switch (url.host) {
        case 'mail.google.com':
            updatedUrl = url.href.replace(/(?!mail\.google\.com\/mail\/u\/)(\d+)(?=\/)/, (_, p1) => {
                return addOneToString(p1)
            });
            break;
        case 'calendar.google.com':
            updatedUrl = url.href.replace(/(?!calendar\.google\.com\/calendar\/u\/)(\d+)(?=\/)/, (_, p1) => {
                return addOneToString(p1)
            });
            break;
        case 'drive.google.com':
            updatedUrl = url.href.replace(/(?!drive\.google\.com\/drive\/u\/)(\d+)(?=\/)/, (_, p1) => {
                return addOneToString(p1)
            });
            break;
        case 'meet.google.com':
            const authuser = url.searchParams.get('authuser') || "0";
            url.searchParams.set('authuser', addOneToString(authuser));
            updatedUrl = url.href;
            break;
        default:
            updatedUrl = url.href;
            break
    }
    return updatedUrl;
}