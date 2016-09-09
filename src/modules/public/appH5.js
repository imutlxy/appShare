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


var $OH = {
    /**
     * @desc : 输出head链接
     * @access : public
     * @param :
     * @return : string
     */
    getHead : function () {
        document.getElementById('head').innerHTML = '<a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.gongfu.onehit"><img src="src/img/head.png" alt="一招-新武道新技术 App下载"></a>';
    },

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



