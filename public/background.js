
chrome.browserAction.onClicked.addListener(function(){
        chrome.storage.local.set({ "forImage": false }, function() {
            console.log("here here");
        });
});
chrome.storage.local.get(["screenShot"],function (obj){
    console.log(obj);
});