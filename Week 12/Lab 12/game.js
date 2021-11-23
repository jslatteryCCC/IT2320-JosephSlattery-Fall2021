
$(function(){

    var $box = $("#box");
    var $container = $("#container");
$("#box").css({position: "absolute"});
function stop() {$("#box").stop()}

const boundary  = {
    top: 0,
    bottom: $container.innerHeight() - $box.innerHeight(),
    left: 0,
    right: $container.innerWidth() - $box.innerWidth()
}

$("#up").on("click", function(){
    stop();
    $box.animate({
        top : boundary.top
    }, 2000);
});

$("#down").on("click", function(){
    stop();
    $box.animate({
        top : boundary.bottom
    }, 2000);
});

$("#left").on("click", function(){
    stop();
    $box.animate({
        left : boundary.left
    }, 2000);
});

$("#right").on("click", function(){
    stop();
    $box.animate({
        left : boundary.right
    }, 2000);
});

$("#fadeout").on("click", function(){
    stop();
    $box.animate({
        opacity : 0
    }, 2000);
});

$("#fadein").on("click", function(){
    stop();
    $box.animate({
        opacity : 1
    }, 2000);
});
$("#reset").on("click", function(){
    stop();
    $box.animate({
        opacity: 1, 
        top: boundary.top, 
        left: boundary.left})
});

});