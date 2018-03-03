// ==UserScript==
// @name         clearXianYuMasking
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  清理咸鱼商品页推广二维码
// @author       huash
// @match        https://2.taobao.com/item.htm*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    var count = 20;
    var hides = function (doms) {
        for (var i = 0; i < doms.length; i++) {
            doms[i].style.display = 'none';
        }
    };
    var work = function () {
        count--;
        var doms = document.querySelectorAll('#idle-detail .album .mau-guide');
        hides(doms);
        hides(document.querySelectorAll('.download-layer'));
        if (count > 0) {
            setTimeout(work, 600);
        }
    };
    work();
})();