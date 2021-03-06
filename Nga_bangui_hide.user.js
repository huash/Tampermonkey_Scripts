// ==UserScript==
// @name         Nga_bangui_hide
// @namespace    http://tampermonkey.net/
// @version      0.78
// @description  板块列表页默认隐藏nga版规 新窗弹出 左右键翻页
// @author       huash
// @match        *://bbs.ngacn.cc/thread.php*
// @match        *://bbs.nga.cn/thread.php*
// @match        *://bbs.nga.cn/read.php*
// @grant        GM_addStyle
// ==/UserScript==

(function () {
    'use strict';
    GM_addStyle('#mainmenu{position: absolute;width: 100%;top:0}#custombg>div{height:170px !important;}');

    var thread=function(){
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
    
        var lt_dom_label = document.createElement('label');
        var linkTargetEvent = function () {
            var topicList=document.querySelectorAll('#topicrows .topic,#pagebbtm .stdbtn .uitxt1');
            for(var i=0;i<topicList.length;i++){
                topicList[i]._useloadread=0;
            }
            var topicrows = document.getElementById('topicrows');
            topicrows.onclick = function (e) {
                var dom = e.target; if (!dom) { return; }
                if (dom.tagName == 'A' && dom.className.indexOf('topic') >= 0) {
                    dom.target = '_blank';
                }
            };
        };
        linkTargetEvent();
        ///bind keywords event
        //
        var SetPage = function (offset) {
            var url = window.location.href;
            var nowPage = url.match(/page=(\d+)/i);
            if(!nowPage){//第一页没page
                if(offset<0){return;}
                window.location.href=url+'&page=2';return;
            }
            nowPage = nowPage.length > 1 ? parseInt(nowPage[1]) : 1;
            nowPage += offset;
            if (nowPage <= 0) {
                nowPage = 1;
            }
            window.location.href = url.replace(/page=(\d+)/i, 'page=' + nowPage);
        };
        document.onkeyup = function (e) {
            e = e || event;
            var currKey = e.keyCode || e.which || e.charCode;
            if (currKey == 37) {
                SetPage(-1);
            } else if (currKey == 39) {
                SetPage(1);
            }
        };
    };
    var url=window.location.href;
    if(url.indexOf('/thread.php')>-1){
        thread();
    }

})();
