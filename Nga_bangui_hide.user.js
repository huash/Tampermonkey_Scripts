// ==UserScript==
// @name         Nga_bangui_hide
// @namespace    http://tampermonkey.net/
// @version      0.43
// @description  隐藏nga版规
// @author       huash
// @match        *://bbs.ngacn.cc/thread.php*
// @grant        GM_addStyle
// ==/UserScript==

(function () {
    'use strict';
    GM_addStyle('.toppedtopic{display:none !important;}');
    GM_addStyle('.adsc,.adsh{display:none !important;}');
    var toppedtopic = document.getElementById('toppedtopic');
    toppedtopic.className = toppedtopic.className + ' toppedtopic';
    var ishide = true;

    var h3 = document.querySelector('#toptopics>.contentBlock>h3');
    var span = document.createElement('span');
    span.className = 'small_colored_text_btn white';
    span.style = 'float:right;cursor: pointer;';
    span.innerText = '+展开版规';
    span.onclick = function () {
        if (ishide) {
            toppedtopic.className = toppedtopic.className.replace(' toppedtopic', '');
            span.innerText = '-收起版规';
        } else {
            toppedtopic.className = toppedtopic.className + ' toppedtopic';
            span.innerText = '+展开版规';
        }
        ishide = !ishide;
    };
    h3.appendChild(span);

    var linkTargetEvent = function () {
        
    };
})();