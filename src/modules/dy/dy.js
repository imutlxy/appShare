/**
 * Created by PhpStorm.
 * @User : Ayers
 * @Date : 2016/9/7 14:57
 * @Asc : 分享
 */
(function (){
    if(urlId.dynamicId){
        $.ajax({
            type : "get",
            dataType: "jsonp",
            url : 'http://api.getonehit.com:9999/YzServer/webapp/DynamicDetail',
            data : 'dynamicId=' + urlId.dynamicId,
            success : function(res) {
                if(res.result.code == 1 && typeof res === 'object'){
                    var d = res.result.data.dynamic;
                    var user= '<div class="share-user"><a href="javascript:;">' +
                        '<img src="' + d.userImage + '" alt="user-img">' + d.userName + '</a>' +
                        '<span class="share-address">' + '<i class="address-icon"></i>' + d.publishlocation + '</span>' +
                        '<span class="share-date">' + d.publicDatetime + '</span></div>'+
                        '<p>' + d.content + '</p>';
					$('#user').html(user);
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
                else {
                    throw ('状态或类型错误！');
                }
            },
            error: function(){
                throw ('ajax错误！');
            }
        });
    }
})();