// ==UserScript==
// @name         Amazon Luna UK Safari Full Bypass
// @match        https://amazon.com*
// @match        https://amazon.co.uk*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // 1. Force the 'Standalone' property (Bypasses "Add to Dock")
    Object.defineProperty(navigator, 'standalone', {
        get: () => true,
        configurable: true
    });

    // 2. Attempt to spoof the User Agent property in the browser window
    const iPhoneUA = "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1";
    Object.defineProperty(navigator, 'userAgent', {
        get: () => iPhoneUA,
        configurable: true
    });
    Object.defineProperty(navigator, 'platform', {
        get: () => "iPhone",
        configurable: true
    });

})();
