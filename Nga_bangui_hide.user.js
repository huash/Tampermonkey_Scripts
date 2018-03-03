// ==UserScript==
// @name         Nga_bangui_hide
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  隐藏nga版规
// @author       huash
// @match        *://bbs.ngacn.cc/thread.php?fid=498*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    GM_addStyle('.toppedtopic{display:none !important;}');
    var h3 = document.querySelector('#toptopics>.contentBlock>h3');
    var toppedtopic = document.getElementById('toppedtopic');
    toppedtopic.className = toppedtopic.className + ' toppedtopic';
})();