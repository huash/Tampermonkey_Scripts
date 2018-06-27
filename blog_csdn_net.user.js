// ==UserScript==
// @name         csdn clear ui
// @namespace    https://blog.csdn.net/
// @version      0.1
// @description  隐藏博客文章底部登录提示
// @author       huash
// @match        http*://blog.csdn.net/*/article/details/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    var box = document.querySelector('.pulllog-box');
    if (box != null) {
        box.style.display='none';
    }
})();