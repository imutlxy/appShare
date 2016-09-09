/**
 * Created by PhpStorm.
 * @User : Ayers
 * @Date : 2016/9/7 15:01
 * @Desc : 公共js
 */

/**
 * @desc : 将字符串转换为对象
 *
 */
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 20 * (clientWidth / 360) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

window.onload = function () {
    var s = document.querySelectorAll('#head a img')[0].height;
    document.body.style.paddingTop = s +'px';
};

var $OH = {
    /**
     * @desc : 获取url上参数值
     * @access : public
     * @param : string
     * @return : object / null
     */
    getQueryStr : function (n) {
        var re = new RegExp("(^|&)"+ n +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(re);
        if(r!=null){return unescape(r[2]);}else{return null;}
    }
};



