const webMap = [
    {
        pattern: /^http:\/\/fb\/$/g,
        destination: "https://facebook.com"
    },
    {
        pattern: /^http:\/\/git\/$/g,
        destination: "https://github.com"
    },
    {
        pattern: /^http:\/\/doc\/$/g,
        destination: "https://docs.google.com"
    },
    {
        pattern: /^http:\/\/sheet\/$/g,
        destination: "https://sheets.google.com"
    },
    {
        pattern: /^http:\/\/slide\/$/g,
        destination: "https://slides.google.com"
    },
    {
        pattern: /^http:\/\/cloud\/$/g,
        destination: "https://console.cloud.google.com"
    },
    {
        pattern: /^http:\/\/news\/$/g,
        destination: "https://news.google.com"
    },
    {
        pattern: /^http:\/\/c\/$/g,
        destination: "https://calendar.google.com"
    },
    {
        pattern: /^http:\/\/y\/$/g,
        destination: "https://youtube.com"
    },
    {
        pattern: /^http:\/\/t\/$/g,
        destination: "https://translate.google.com/?sl=de&tl=en&op=translate"
    },
    {
        pattern: /^http:\/\/t\/(..)\/(..)$/g,
        destination: "https://translate.google.com/?sl=$1&tl=$2&op=translate"
    },
    {
        pattern: /^http:\/\/m\/$/g,
        destination: "https://gmail.com"
    }
];

chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        let url = details.url;

        for (const { pattern, destination } of webMap) {
            if (url.match(pattern)) {
                return { redirectUrl: url.replace(pattern, destination) };
            }
        }

        return {}
    },
    { urls: ["<all_urls>"] },
    ["blocking"]
)