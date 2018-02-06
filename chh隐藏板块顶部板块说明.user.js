// ==UserScript==
// @name         chh隐藏板块顶部板块说明
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       huash
// @match        *://www.chiphell.com/forum-*-1.html*
// @match        *://www.chiphell.com/*page=1*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    GM_addStyle('div.ptn.xg2{display:none !important;}');
})();