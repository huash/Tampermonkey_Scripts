// ==UserScript==
// @name         autohome span ->text
// @namespace    http://xcabc.com/
// @version      0.1
// @description  汽车之家参数处理伪类里面文字
// @author       huash
// @match        http://car.autohome.com.cn/config/series/*.html
// @grant        none
// ==/UserScript==

setTimeout(function() {
    'use strict';
    console.log('span->txt');
var span=$('#config_data table td span');
    var txt;
    for(var i=0;i<span.length;i++){
        var item=span[i];
        txt=window.hs_fuckyou(item,':before').content;
        if(txt&&txt!==''){
            item.className='';
            item.innerHTML=txt.substring(1,txt.length-1);
        }
    }
},5000);