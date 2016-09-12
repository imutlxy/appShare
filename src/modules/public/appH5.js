/**
 * Created by PhpStorm.
 * @User : Ayers
 * @Date : 2016/9/7 15:01
 * @Desc : 公共js
 */

(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if(clientWidth > 360){
              docEl.style.fontSize = '20px';
            }else {
              if (!clientWidth) return;
              docEl.style.fontSize = 20 * (clientWidth / 360) + 'px';
            }
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);

    window.onload = function () {
        var h = document.querySelectorAll('#head a img')[0].height;
        document.getElementById('body').style.paddingTop = h+'px';
    };

    var $OH = {
        /**
         * @desc : 获取url上参数值
         * @access : public
         * @param : string
         * @return : object / null
         */
        getQueryStr : function (n) {
            var a = new RegExp("(^|&)"+ n +"=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(a);
            if(r!=null){return unescape(r[2])}else {return null};
        },
        /**
         * @desc : 判断obj是否为空
         * @access : public
         * @param : obj / arr
         * @return : boolean
         */
        isEmptyObject:function(a){var b;for(b in a) {return true}return false;}
    };
    window.$OH = $OH;
})(document, window);
