// background.js - Manifest V3 compatible
chrome.action.onClicked.addListener(async function(tab) {
    try {
        // First try to send message to existing content script
        chrome.tabs.sendMessage(tab.id, {action: "hodor"}, function(response) {
            if (chrome.runtime.lastError) {
                // If content script is not loaded, inject it first
                chrome.scripting.executeScript({
                    target: {tabId: tab.id},
                    files: ['jquery-3.5.1.min.js', 'content.js']
                }, function() {
                    // After injection, send the message again
                    setTimeout(() => {
                        chrome.tabs.sendMessage(tab.id, {action: "hodor"}, function(response) {
                            if (chrome.runtime.lastError) {
                                console.log('Error after injection:', chrome.runtime.lastError.message);
                            } else {
                                console.log('Hodor conversion completed:', response);
                            }
                        });
                    }, 100);
                });
            } else {
                console.log('Hodor conversion completed:', response);
            }
        });
    } catch (error) {
        console.error('Error in background script:', error);
    }
});