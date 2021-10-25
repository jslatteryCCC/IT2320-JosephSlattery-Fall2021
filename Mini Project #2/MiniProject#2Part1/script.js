//Global area
var squaresAlreadyPlayed = new Array(9).fill(false);
var squares = document.getElementsByClassName("col");
var turnCounter = 0;
let turnSelector = 0; 



window.onload=function() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function(){
            userTurn(this);
        });
    }
    var reset = document.getElementById("reset");
    reset.addEventListener("click", function() {
        location.reload();
    });
}


    function userTurn(square) {
        while (turnSelector == 0){
            if (!squaresAlreadyPlayed[square.id]) {
            square.innerHTML = "<h3>X</h3>";
            squaresAlreadyPlayed[square.id] = true;
            turnSelector = 1;
            turnCounter++;
            }
            if(turnCounter < 5){
            computerTurn();
            }
        }
    }

    function computerTurn() {

        let thisTurnSquare = 0; 

        while (turnSelector = 1) {
            if (!squaresAlreadyPlayed[thisTurnSquare]){
            squares[thisTurnSquare].innerHTML = "<h3>O</h3>"
            squaresAlreadyPlayed[thisTurnSquare] = true;
            turnSelector = 0;
            userTurn();
            }
            squareRandomizer();
        }
        
        function squareRandomizer(){
                thisTurnSquare = Math.floor(Math.random() * 9);
        }
    
    }




