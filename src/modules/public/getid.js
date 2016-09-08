/**
 * Created by PhpStorm.
 * @User : Ayers
 * @Date : 2016/9/7 15:01
 * @Asc : 调整rem & 提取地址数据
 */
var urlId = null;
(function () {
    //调整rem
    var docEl = document.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            var num = 10 * (clientWidth / 720);
            var strnum = String(num);
            var pos = strnum.indexOf('.');
            if(pos!=-1){
                if(strnum.length>pos+5){
                    num = strnum.substring(0,pos+5);
                }
            }
            if(clientWidth > 720){
                num = 20;
            }
            docEl.style.fontSize = num + 'px';
        };
    recalc();
    window.addEventListener(resizeEvt, recalc, false);
    document.addEventListener('DOMContentLoaded', recalc, false);

    //获取动态id
    function urlData() {
        var url = location.href;
        var num = url.indexOf("?");
        if(num !== '-1'){
            url = url.substr(num+1);
            var arr = url.split("&");
            var newArr = {};
            for(var i =0,len=arr.length;i<len;i++){
                var thisNum = arr[i].indexOf("=");
                var key = arr[i].substr( 0, thisNum);
                var val = arr[i].substr(thisNum+1);
                newArr[key] = val;
            }
            urlId = newArr;
        }
    }
    urlData();
})();