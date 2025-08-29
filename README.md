# Chrome Extension Hodor

A fun Chrome extension that replaces all text on web pages with "Hodor" while preserving the original layout, styling, and formatting.

## Features

- Click the extension icon to toggle "Hodor mode"
- All text on the webpage is replaced with "Hodor"
- Preserves original spacing, font sizes, and design
- Toggle functionality - click again to restore original text
- Works on all websites

## Installation

1. Download or clone this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the folder containing the extension files
5. The Hodor extension icon should appear in your Chrome toolbar

## Usage

1. Navigate to any website
2. Click the Hodor extension icon in your Chrome toolbar
3. All text on the page will be replaced with "Hodor"
4. Click the extension icon again to restore the original text

## Files

- `manifest.json` - Extension configuration
- `background.js` - Background service worker
- `content.js` - Content script that runs on web pages
- `hodor.png` - Extension icon
- `jquery-3.5.1.min.js` - jQuery library (included for compatibility)

## How it works

The extension uses content scripts to:
1. Listen for clicks on the extension icon
2. Backup the original text content
3. Replace all words with "Hodor" while preserving spacing and punctuation
4. Allow toggling between Hodor mode and normal mode

## Requirements

- Google Chrome browser
- Manifest V3 compatible
