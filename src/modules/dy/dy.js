/**
 * Created by PhpStorm.
 * @User : Ayers
 * @Date : 2016/9/7 15:01
 * @Desc : 公共js
 */
$(function (){
    var dynamicId = $OH.getQueryStr('dynamicId');

    function share(d) {
        var user = '<div class="share-user"><a href="javascript:;">' +
            '<img src="' + d.userImage + '" alt="user-img">' + d.userName + '</a>' +
            '<span class="share-address">' + '<i class="address-icon"></i>' + d.publishlocation + '</span>' +
            '<span class="share-date">' + d.publicDatetime + '</span></div>'+
            '<p>' + d.content + '</p>';
        $('#share').html(user);
    }

    function info(d) {
        if(d.lesson){
            var info = '<p class="info-text">' +
                '<strong>' + d.lesson.lessonName + '</strong>' +
                '<span class="info-name">' +
                '<span>' + d.lesson.sectsName + '</span>' + d.lesson.difficuteName + '</span>' +
                '<span class="info-time">' + d.lesson.duration + '分钟</span>' +
                '<span class="info-tool">' + d.lesson.weaponName + '</span>' +
                '</p><img src="' + d.lesson.picture + '" alt="gongfu-img">';
            $('#info').html(info);
        }else{
            $('#info').remove();
        }
    }

    if(dynamicId){
        $.ajax({
            type : "get",
            dataType: "jsonp",
            url : 'http://api.getonehit.com:9999/YzServer/webapp/DynamicDetail',
            data : 'dynamicId=' + dynamicId,
            error: function(){
                throw ('ajax错误！');
            },
            success : function(res) {
                if(res.result.code == 1 && typeof res === 'object'){
                    var d = res.result.data.dynamic;
                    share(d);
                    info(d);
                }
                else {
                    throw ('状态或类型错误！');
                }
            }
        });
    }
});