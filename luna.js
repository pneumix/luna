// ==UserScript==
// @name         Amazon Luna UK Safari Force Bypass
// @match        https://luna.amazon.com/*
// @match        https://luna.amazon.co.uk/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    // This property is what the site checks to see if it's "installed" to the dock on iOS/macOS
    Object.defineProperty(navigator, 'standalone', {
        get: () => true,
        configurable: true
    });
})();
