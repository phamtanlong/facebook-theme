
function clickOptions(e) {
    chrome.tabs.create({
        url: "options.html"
    });
    window.close();
}

function clickVisitUs(e) {
    chrome.tabs.create({
        url: "https://www.facebook.com/jundat.longpham"
    });
    window.close();
}

document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('btnOptions').onclick = clickOptions;
    document.getElementById('btnVisitUs').onclick = clickVisitUs;

});