const webMap = [
    {
        pattern: /^http:\/\/fb\/$/g,
        destination: "https://facebook.com"
    },
    {
        pattern: /^http:\/\/b\/$/g,
        destination: "https://teamblind.com"
    },
    {
        pattern: /^http:\/\/mk\/$/g,
        destination: "https://manganelo.com"
    },
    {
        pattern: /^http:\/\/mg\/$/g,
        destination: "http://nhattruyen.com"
    },
    {
        pattern: /^http:\/\/mf\/$/g,
        destination: "https://w11.mangafreak.net"
    },
    {
        pattern: /^http:\/\/anime\/$/g,
        destination: "https://kissanimefree.cc/trending-animes"
    },
    {
        pattern: /^http:\/\/git\/$/g,
        destination: "https://github.com"
    },
    {
        pattern: /^http:\/\/cf\/$/g,
        destination: "https://codeforces.com"
    },
    {
        pattern: /^http:\/\/w\/$/g,
        destination: "https://docs.google.com"
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
        pattern: /^http:\/\/vi\/$/g,
        destination: "https://translate.google.com/?tl=vi&op=translate"
    },
    {
        pattern: /^http:\/\/en\/$/g,
        destination: "https://translate.google.com/?tl=en&op=translate"
    },
    {
        pattern: /^http:\/\/de\/$/g,
        destination: "https://translate.google.com/?tl=de&op=translate"
    },
    {
        pattern: /^http:\/\/t\/(..)\/(..)$/g,
        destination: "https://translate.google.com/?sl=$1&tl=$2&op=translate"
    },
    {
        pattern: /^http:\/\/oald\/$/g,
        destination: "https://www.oxfordlearnersdictionaries.com"
    },
    {
        pattern: /^http:\/\/ldoce\/$/g,
        destination: "https://www.ldoceonline.com"
    },
    {
        pattern: /^http:\/\/m\/$/g,
        destination: "https://gmail.com"
    },
    {
        pattern: /^http:\/\/cs\/$/g,
        destination: "https://sourcegraph.com/search?&patternType=regexp&case=yes"
    },
    {
        pattern: /^http:\/\/carbon\/$/g,
        destination: "https://carbon.now.sh/?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&ds=false&dsyoff=0px&dsblur=0px&wc=false&wa=true&pv=2px&ph=2px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false"
    }
];

chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        let url = details.url;

        for (const {pattern, destination} of webMap) {
            if (url.match(pattern)) {
                return {redirectUrl: url.replace(pattern, destination)};
            }
        }

        return {}
    },
    {urls: ["<all_urls>"]},
    ["blocking"]
)