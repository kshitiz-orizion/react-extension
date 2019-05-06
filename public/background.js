

chrome.browserAction.onClicked.addListener(function(){
    chrome.tabs.captureVisibleTab(null, {}, function (image) {
        chrome.storage.local.set({ "screenShot": image }, function() {
            chrome.tabs.create({"url":chrome.extension.getURL('./index.html'),"active":true});
        });
    });
});
chrome.storage.local.get(["screenShot"],function (obj){
    console.log(obj);
});

