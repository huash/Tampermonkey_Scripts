// ==UserScript==
// @name         chh UI辅助工具
// @namespace    http://tampermonkey.net/
// @version      0.11
// @description  try to take over the world!
// @author       huash
// @match        *://www.chiphell.com/forum-*
// @match        *://www.chiphell.com/thread-*
// @grant        GM_addStyle
// ==/UserScript==

(function () {
    'use strict';
    //GM_addStyle('div.ptn.xg2{display:none !important;}');
    //关闭百度分享
    GM_addStyle('.bdshare-slide-button-box{display:none !important;}#toptb{display:none;}');
    //document.getElementById('thread_types').style.height = '';
})();