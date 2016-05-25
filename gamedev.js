$( document ).ready(function() {
$(".question").hide();
$(".choice").hide();
$("#over1").hide();

$("#ready").click(function(){
$("#realdealBody").css("backgroundImage","url(https://i.vimeocdn.com/video/507439574_1280x720.jpg)");
$("#ready").hide();
$("#q1").show();
$("#c1").show();
$("#c2").show();
$("#over1").hide();
 });
$("#c1").click(function(){
$("#realdealBody").css("backgroundColor","black");
$("#").hide();
$("#q1").hide();
$("#over1").show();

 });
//Your jquery goes here


});

