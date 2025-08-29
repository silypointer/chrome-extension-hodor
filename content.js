// Hodor Content Script - Manifest V3 compatible
(function() {
    'use strict';
    
    let isHodorMode = false;
    
    // Function to replace text content while preserving structure
    function replaceTextWithHodor(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            // Only replace if the text node contains actual text (not just whitespace)
            const text = node.textContent.trim();
            if (text.length > 0) {
                // Preserve original whitespace and structure
                const originalText = node.textContent;
                // Replace each word with "Hodor" while preserving spacing and punctuation
                const hodorText = originalText.replace(/\b\w+\b/g, 'Hodor');
                node.textContent = hodorText;
            }
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            // Skip script, style, and other non-content elements
            const skipTags = ['SCRIPT', 'STYLE', 'NOSCRIPT', 'META', 'LINK', 'TITLE', 'HEAD'];
            if (skipTags.includes(node.tagName)) {
                return;
            }
            
            // Recursively process child nodes
            for (let i = 0; i < node.childNodes.length; i++) {
                replaceTextWithHodor(node.childNodes[i]);
            }
        }
    }
    
    // Function to restore original text
    function restoreOriginalText(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            // Restore original text if we have it stored
            if (node._originalText !== undefined) {
                node.textContent = node._originalText;
                delete node._originalText;
            }
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            const skipTags = ['SCRIPT', 'STYLE', 'NOSCRIPT', 'META', 'LINK', 'TITLE', 'HEAD'];
            if (skipTags.includes(node.tagName)) {
                return;
            }
            
            for (let i = 0; i < node.childNodes.length; i++) {
                restoreOriginalText(node.childNodes[i]);
            }
        }
    }
    
    // Function to backup original text before replacing
    function backupOriginalText(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            const text = node.textContent.trim();
            if (text.length > 0) {
                node._originalText = node.textContent;
            }
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            const skipTags = ['SCRIPT', 'STYLE', 'NOSCRIPT', 'META', 'LINK', 'TITLE', 'HEAD'];
            if (skipTags.includes(node.tagName)) {
                return;
            }
            
            for (let i = 0; i < node.childNodes.length; i++) {
                backupOriginalText(node.childNodes[i]);
            }
        }
    }
    
    // Main function to toggle Hodor mode
    function toggleHodorMode() {
        if (!isHodorMode) {
            // Enter Hodor mode
            backupOriginalText(document.body);
            replaceTextWithHodor(document.body);
            isHodorMode = true;
            console.log('Hodor mode activated!');
        } else {
            // Exit Hodor mode
            restoreOriginalText(document.body);
            isHodorMode = false;
            console.log('Hodor mode deactivated!');
        }
    }
    
    // Listen for messages from the background script
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        if (request.action === "hodor") {
            toggleHodorMode();
            sendResponse({
                status: "success", 
                mode: isHodorMode ? "hodor" : "normal"
            });
        }
    });
    
    // Log that content script is loaded
    console.log('Hodor content script loaded successfully');
    
})();