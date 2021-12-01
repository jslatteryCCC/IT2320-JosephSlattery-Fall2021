//I stole the transform from a codepen... 
//I don't want the extra credit points, 
//I just wanted to see how it was done and 
//I couldn't get it going on my own.
//https://codepen.io/seeker5084/pen/VMQGwX

let turn = 0;
let imageCompare = [];
let idCompare = [];
let matchesFound = 0;
let matchesArray = new Array(12)
matchesArray.fill(false)
console.log(matchesArray)

$(function(){

    $("#messages").html("Click the Start Button to Begin!")

    $("#container").children().on('click', function(){
        if(turn < 2 && matchesFound < 6 && !matchesArray[parseInt($(this).attr('id')) - 1]
        && (idCompare[0] !== $(this).attr('id'))){
            $(this).children("img").animate(
                { opacity: 1, deg: 360 }, 
                {   
                    duration: 600,
                    step: function(now) {
                        $(this).css({ transform: 'rotate(' + now + 'deg)' });
                    }
                }
                )
            idCompare[turn] = $(this).attr('id');
            imageCompare[turn] = $(this).children('img').attr('src');
            turn++;
        }
        if(turn === 2){
            evaluate();
    }
    })

    $("#newGame").on('click', () => {
        $("#messages").html("Let's begin!!! Remember the cards...")
        for(var i = 1; i <= 12; i++){
            $(`#${i}`).children('img').css('opacity', 1);
            $(`#${i}`).children('img').animate({opacity: 0}, 5000)
        }
        turn = 0;
        imageCompare = [];
        idCompare = [];
        matchesFound = 0;
        matchesArray.fill(false)
    })

});

let evaluate = () => {
    if (imageCompare[0] !== imageCompare[1]){
        $(`#${idCompare[0]}`).children("img").animate(
            { opacity: 0, deg: -360 },
            {
              duration: 1200,
              step: function(now) {
                $(this).css({ transform: 'rotate(' + now + 'deg)' });
              }
            }
          )
            
        $(`#${idCompare[1]}`).children("img").animate(
            { opacity: 0, deg: -360 },
            {
              duration: 450,
              step: function(now) {
                $(this).css({ transform: 'rotate(' + now + 'deg)' });
              }
            }
          )
        $("#messages").html("Oops!!! Please try again...");
        turn = 0;
        idCompare = [0, 0]
    }
    if (imageCompare[0] === imageCompare[1]) {
        matchesFound++;
        matchesArray[idCompare[0] - 1] = true;
        matchesArray[idCompare[1] - 1] = true;
        console.log(matchesFound)
        $("#messages").html("Hurray!!! Match found...");
        if (matchesFound === 6) {
            $("#messages").html("All matches found. Game over!!!");
        }
        turn = 0;
    } 
}
