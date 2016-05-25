$( document ).ready(function() {
$(".question").hide();
$(".choice").hide();
$("#over1").hide();
$("#q3").hide();

$("#ready").click(function(){
$("#realdealBody").css("backgroundImage","url(http://cdn-img.instyle.com/sites/default/files/styles/480xflex/public/1441312835/090315-hamilton-1.jpg?itok=xSJ9k-Sy)");
$("#ready").hide();
$("#q1").show();
$("#c1").show();
$("#c2").show();
$("#over1").hide();
$("#q3").hide();
 });
$("#c1").click(function(){
$("#realdealBody").css("backgroundImage","url(https://www.google.com.hk/search?q=game+over+screen&safe=strict&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiKtriph_TMAhUCKJQKHSMHDX8Q_AUIBygB&biw=1440&bih=778#imgrc=YlgQBGwVkgWNTM%3A)");
$("#").hide();
$("#q1").hide();
$(".gameover").show();
 });
$("#c3").click(function(){
$("#realdealBody").css("backgroundImage","url(https://i.vimeocdn.com/video/507439574_1280x720.jpg)");
$(".gameover").hide();
$("#q1").hide();
$("#q3").show();
$("#q2").hide();


$("#c2").click(function(){
$("#realdealBody").css("backgroundImage","url(https://i.vimeocdn.com/video/507439574_1280x720.jpg)");
$(".gameover").hide();
$("#q1").hide();
$("#q2").show();
$("#q3").hide();


 });
//Your jquery goes here


});

