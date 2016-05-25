$( document ).ready(function() {
$(".question").hide();
$(".choice").hide();
$("#over1").hide();

$("#ready").click(function(){
$("#realdealBody").css("backgroundImage","url(http://cdn-img.instyle.com/sites/default/files/styles/480xflex/public/1441312835/090315-hamilton-1.jpg?itok=xSJ9k-Sy)");
$("#ready").hide();
$("#q1").show();
$("#c1").show();
$("#c2").show();
$("#over1").hide();
 });
$("#c1").click(function(){
$("#realdealBody").css("backgroundImage","url(https://i.vimeocdn.com/video/507439574_1280x720.jpg)");
$("#").hide();
$("#q1").hide();
$(".gameover").show();
 });
$("#c2").click(function(){
$("#realdealBody").css("backgroundImage","url(https://i.vimeocdn.com/video/507439574_1280x720.jpg)");
$(".gameover").hide();
$("#q1").hide();
$("#q2").show();

 });
//Your jquery goes here


});

