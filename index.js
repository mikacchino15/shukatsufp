/*global $*/

$(function(){

    $(".navigation").hover(function(){
        $(this).children("ol").slideDown(100);
        $(this).children("ol").css("display","block");
    },function(){
        $(this).children("ol").css("display","none"); 
    });

});