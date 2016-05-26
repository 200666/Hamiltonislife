$( document ).ready(function() {
$(".question").hide();
$(".choice").hide();
$(".gameover").hide();
$("#q3").hide();
$("#over2").hide();

$("#ready").click(function(){
$("#realdealBody").css("backgroundImage","url(http://images.huffingtonpost.com/2016-01-05-1452004586-8964259-12036769_1223251501035058_7389760182587362890_n.jpg)");
$("#ready").hide();
$("#q1").show();
$("#c1").show();
$("#c2").show();
$("#over1").hide();
$("#q3").hide();
$("#q2").hide();
 });
$("#c1").click(function(){
$("#realdealBody").css("backgroundImage","url(https://www.google.com.hk/search?q=game+over+screen&safe=strict&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiKtriph_TMAhUCKJQKHSMHDX8Q_AUIBygB&biw=1440&bih=778#imgrc=YlgQBGwVkgWNTM%3A)");
$(".question").hide();
$("#over1").show();
$("#over2, #over3").hide();
 });
$("#c3").click(function(){
$("#realdealBody").css("backgroundImage","url(https://i.vimeocdn.com/video/507439574_1280x720.jpg)");
$(".gameover").hide();
$("#q1").hide();
$("#q3").show();
$("#q2").hide();

 });


$("#c2").click(function(){
$("#realdealBody").css("backgroundImage","url(http://41.media.tumblr.com/d57aee057c9e04f4919b29f6ca521faa/tumblr_nz63j5jjad1u92d52o4_1280.png)");
$(".gameover").hide();
$("#q1").hide();
$("#q2").show();
$("#q3").hide();

 });
$("#c4 , #c5").click(function(){
$("#realdealBody").css("backgroundImage","url(http://cdn-gd.playbill.com/images/cache/remote/http_cdn-images.playbill.com/ee_assets/cam/abbigail/month/prodhamilton0040rr.jpg)");
$(".gameover").hide();
$("#q1").hide();
$("#q2").hide();
$("#q3").hide();
$("#q4").show();

 });

$("#c6").click(function(){
$("#realdealBody").css("backgroundImage","url(http://3a376o1lveli4brgjcn2y118.wpengine.netdna-cdn.com/wp-content/uploads/2015/08/couple.jpg)");
$(".gameover").hide();
$("#q1").hide();
$("#q2").hide();
$("#q3").hide();
$("#q4").hide();
$("#q5").show();

 });

$("#c7").click(function(){
$("#realdealBody").css("backgroundImage","url(http://www.trbimg.com/img-55cb8fcc/turbine/la-et-cm-hamilton-broadway-box-office-20150812)");
$("#q1 , #q2 , #q3 , #q4 , #q5 , #q6 ").hide();
$(".gameover").hide();
$("#q7").show();
 });

$("#c8").click(function(){
$("#realdealBody").css("backgroundImage","url(https://www.google.com.hk/search?q=game+over+screen&safe=strict&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiKtriph_TMAhUCKJQKHSMHDX8Q_AUIBygB&biw=1440&bih=778#imgrc=YlgQBGwVkgWNTM%3A)");
$(".question").hide();
$("#over2").show();
$("#over1").hide();
 });


$("#c9").click(function(){
$("#realdealBody").css("backgroundImage","url(https://www.google.com.hk/search?q=game+over+screen&safe=strict&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiKtriph_TMAhUCKJQKHSMHDX8Q_AUIBygB&biw=1440&bih=778#imgrc=YlgQBGwVkgWNTM%3A)");
$(".question").hide();
$("#over3").show();
$("#over1").hide();
$("#over2").hide();
 });
$("#c10").click(function(){
$("#realdealBody").css("backgroundImage","url()");
$("#q1 , #q2 , #q3 , #q4 , #q5 , #q6, #q7 ").hide();
$(".gameover").hide();
$("#q8").show();
 });
//Your jquery goes here


});

