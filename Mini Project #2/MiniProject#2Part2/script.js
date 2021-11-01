//Global area
var gameActive = true;
var squaresAlreadyPlayed = new Array(9).fill(false);
var turnCounter = 0;
var turnSelector = 0; 
var squares = document.getElementsByClassName("col");
var winningPos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

window.onload=function() {

    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function(){
            userTurn(this, this.id);
        });
    }
    var reset = document.getElementById("reset");
    reset.addEventListener("click", resetGameBoard);
}


    function userTurn(square, squareID) {
        var id = squareID;
        while (turnCounter % 2 == 0 && gameActive){
            if (!squaresAlreadyPlayed[id]) {
            squares[id].innerHTML = "<h1>X</h1>";
            squaresAlreadyPlayed[id] = 'X';
            turnCounter++;
            determineWinner('X');
            if(turnCounter <= 8){
                computerTurn();
            }
            }
            else userTurn();
        }
    }

    function computerTurn(){ 

        let thisTurnSquare = 4; 

        while (turnCounter % 2 !== 0 && gameActive) {
            if (!squaresAlreadyPlayed[thisTurnSquare]){
            squares[thisTurnSquare].innerHTML = "<h1>O</h1>"
            squaresAlreadyPlayed[thisTurnSquare] = 'O';
            turnCounter++;
            determineWinner('O');
            userTurn();
            }
            computerLogic();
        }
        
        function computerLogic(){
            var xCounter = 0;
            var oCounter = 0;
                for(let i = 0; i < winningPos.length; i++){
                x = winningPos[i][0];
                y = winningPos[i][1];
                z = winningPos[i][2];
                if(squaresAlreadyPlayed[x] === 'O') oCounter++;
                if(squaresAlreadyPlayed[y] === 'O') oCounter++;
                if(squaresAlreadyPlayed[z] === 'O') oCounter++;
                if(oCounter == 2){
                    if(!squaresAlreadyPlayed[z]){
                        thisTurnSquare = z;
                        break;
                    } 
                    if(!squaresAlreadyPlayed[y]){
                        thisTurnSquare = y;
                        break;
                    }
                    if(!squaresAlreadyPlayed[x]){
                        thisTurnSquare = x;
                        break;
                    }      
                }
                if(squaresAlreadyPlayed[x] === 'X') xCounter++;
                if(squaresAlreadyPlayed[y] === 'X') xCounter++;
                if(squaresAlreadyPlayed[z] === 'X') xCounter++;
                if(xCounter == 2){
                    if(!squaresAlreadyPlayed[z]){
                        thisTurnSquare = z;
                        break;} 
                    if(!squaresAlreadyPlayed[y]){
                        thisTurnSquare = y;
                        break;
                    }
                    if(!squaresAlreadyPlayed[x]){
                        thisTurnSquare = x;
                        break;
                    }      
                }
                else {
                    xCounter = 0;
                    oCounter = 0;
                } 
            }
            if(xCounter < 2 && oCounter < 2){
                squareRandomizer();
            }
            function squareRandomizer(){
                thisTurnSquare = Math.floor(Math.random() * 9);
            }
        }
    }

    
    
    function determineWinner(elem){
        var gameStatus = document.getElementById("status");
        var gameMessage = document.getElementById("message");
        var x,y,z;
        if(turnCounter == 9 && gameActive == true){
            gameStatus.innerHTML = "Draw! Click reset to start over!"
        }
        for(let i = 0; i < winningPos.length; i++){
            x = winningPos[i][0];
            y = winningPos[i][1];
            z = winningPos[i][2];
            if(squaresAlreadyPlayed[x] == elem
            && squaresAlreadyPlayed[y] == elem 
            && squaresAlreadyPlayed[z] == elem){
                gameMessage.innerHTML = "Game Over";
                elem == 'X' ? gameStatus.innerHTML = "User is the winner!"
                            : gameStatus.innerHTML = "Computer is the winner!";
                gameActive = false;
                break;
            }
         
        }
    }
    function resetGameBoard(){
        squaresAlreadyPlayed.fill(false);
        gameActive = true;
        turnSelector = 0;
        turnCounter = 0;
        document.getElementById("status").innerHTML = 'This is a new game!!!';
        document.getElementById("message").innerHTML = 'Click on any cell to begin!';
        for(let i = 0; i < squares.length; i++){
            squares[i].innerHTML = '';
        }
    }
