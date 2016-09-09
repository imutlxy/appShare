/**
 * Created by PhpStorm.
 * @User : Ayers
 * @Date : 2016/9/8 14:28
 * @Asc :
 */
$(function (){
    var lessonId = $OH.getQueryStr('lessonId');

    function back(d) {
        if(d && !$.isEmptyObject(d)){
            var backs = '<img class="back-img" src="'+d.picture+'"><div class="back-bg"></div><h3><img src="src/img/portrait@2x.png">'+d.nikeName+'</h3><p>'+d.memo+'</p>';
            $('#back').html(backs);
        }else {
            $('#back').remove();//无教练信息
        }
    }

    function banner_fn(d) {
        var banner = '<img src="'+d.picture+'" alt="banner-img">';
        banner += '<div class="bg"></div>';
        banner += '<h1>'+d.lessonName+'</h1>';
        banner += '<div class="banner-info"><ul>';
        banner += '<li><img src="'+d.sectsicon+'">'+d.sectsName+'</li>';
        banner += '<li><img src="src/img/difficulty@2x.png">'+d.difficuteName+'</li>';
        banner += '<li><img src="src/img/time@2x.png">'+d.duration+'</li>';
        banner += '</ul></div>';
        $('title').html(d.lessonName + '- 一招');
        return banner;
    }

    function actionList_fn(d) {
        var actionList = d.actionList,
            len = actionList.length,
            List_arr = [{
                id : actionList[0].stageID,
                p : '<p>'+actionList[0].stageName+'</p>',
                html : ''
            }];
        function isA(s) {
            for(var u = 0;u<List_arr.length;u++){
                var nu = null;
                if(s.trainingtype == 1){
                    nu = s.trainingtimes + '次';
                }else if(s.trainingtype == 2){
                    if(s.trainingDuration < 60){
                        if(s.trainingDuration < 10){
                            nu = '0:0'+s.trainingDuration;
                        }else {
                            nu = '0:'+s.trainingDuration;
                        }
                    }else{
                        var x_num = s.trainingDuration - 0;
                        var x_num1 = parseInt(x_num/60);
                        var x_num2 = x_num - (x_num1 * 60);
                        if( x_num2 < 10){
                            x_num2 = '0' + x_num2;
                        }
                        nu = x_num1 + ':' + x_num2;
                    }
                }
                if(List_arr[u].id == s.stageID){
                    List_arr[u].html += '<li><a></a><div><b>'+s.name+'</b><span>'+nu+'</span></div></li>';
                    return;
                }else if(u == List_arr.length - 1  && List_arr[u].id !== s.stageID){
                    List_arr .push({
                        id : s.stageID,
                        p : '<p>'+s.stageName+'</p>',
                        html : '<li><a></a><div><b>'+s.name+'</b><span>'+nu+'</span></div></li>'
                    });
                    return;
                }
            }
        }
        for(var i = 0;i<len;i++){
            isA(actionList[i]);
        }
        var ht = '';
        for(var i = 0;i<List_arr.length;i++){
            ht += '<div class="list">'+List_arr[i].p+'<ul>'+List_arr[i].html+'</ul></div>';
        }
        return ht;
    }

    if(lessonId){
        $.ajax({
            type : "get",
            dataType: "jsonp",
            url : 'http://api.getonehit.com:9999/YzServer/webapp/lessonTrain',
            data : 'lessonId=' + lessonId,
            error: function(){
                throw ('ajax错误！');
            },
            success : function(res) {
                if(res.result.code == 1 && typeof res === 'object'){
                    var d = res.result.data.lession;
                    back(res.result.data.trainer);//教练信息
                    var video = '<video class="video-js vjs-default-skin" controls  preload="auto" poster="'+d.videoPicture+'"><source src="'+d.videoUrl+'" type="video/mp4" />';
                    video += '<track kind="captions" src="demo.captions.vtt" srclang="en" label="English" />';
                    video += '<track kind="subtitles" src="demo.captions.vtt" srclang="en" label="English" /></video>';
                    $('#banner').html(banner_fn(d));
                    $('#note').html('<div class="note special">' +
                        '<h2>招式解说</h2><p>'+d.memo+'</p>' +
                        '</div><div class="note">' +
                        '<h2>地点 / 器械</h2><p>'+d.trainPlace+'/'+d.weaponName+'</p></div>');
                    $('#video').html(video);
                    $('#list').html(actionList_fn(d));
                }
                else {
                    throw ('状态或类型错误！');
                }
            }
        });
    }
});