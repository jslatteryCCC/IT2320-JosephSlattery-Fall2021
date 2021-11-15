
$(function(){    

    //hide divs
    $("#btn1").click(function(){
        $(".wrapperDiv").hide();
    });

    //show divs
    $("#btn2").click(function(){
        $(".wrapperDiv").show();
    });

    $("#btn3").click(function(){
        $(".wrapperDiv").text(function(i){
            if(i == 0) return "One";
            if(i == 1) return "Two";
            if(i == 2) return "Three";
            if(i == 3) return "Four";
        });
        $("#1,#3").css({backgroundColor:"black", color:"white"})
        $("#2,#4").css({backgroundColor:"white", color:"black"});
    });

    $(".wrapperDiv").mouseover(function () {
        $(".wrapperDiv").removeAttr("style"); 
        $(".wrapperDiv").text(function(i){
            if(i == 0) return "1";
            if(i == 1) return "2";
            if(i == 2) return "3";
            if(i == 3) return "4";
        });
        $(this).css("background-color", "yellow");
        
    });
    $(".wrapperDiv").mouseout(function () {
        $(".wrapperDiv").removeAttr("style");
    })
});