// background.js - Manifest V3 compatible
chrome.action.onClicked.addListener(function(tab) {
    // Send message to content script to trigger Hodor conversion
    chrome.tabs.sendMessage(tab.id, {action: "hodor"}, function(response) {
        if (chrome.runtime.lastError) {
            console.log('Error sending message:', chrome.runtime.lastError.message);
        } else {
            console.log('Hodor conversion triggered:', response);
        }
    });
});