/*********************************************************************/
//Global Area
var clickCounter = true; //toggle state for changing square colors
window.onload = function(){
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    var btn3 = document.getElementById("btn3");
    var btn4 = document.getElementById("btn4");
    var btn5 = document.getElementById("btn5");

    btn1.addEventListener("click", createLink);
    btn2.addEventListener("click", removeLink);
    btn3.addEventListener("click", changeColor);
    btn4.addEventListener("click", changeSquares);
    btn5.addEventListener("click", changeShape);
}



/***************** Function definition area *************/
//write a function to change the size of the box (css)
function createLink() {
    var a = document.createElement('a');
    a.setAttribute('href', 'http://www.tri-c.edu');
    a.innerHTML = "Created Link";
    document.getElementById('parentLink').appendChild(a);
}

function removeLink(){
    var p = document.getElementById('parentLink');
    var a = p.lastElementChild;
    p.removeChild(a);
}

function changeColor(){
    var input = document.getElementById('inputColor').value;
    var box = document.getElementById('box');
    box.style.backgroundColor = input;
}

function changeSquares(){
    var oddSquares = document.getElementsByClassName('square1');
    var evenSquares = document.getElementsByClassName('square2');

    if (clickCounter) {
        for (i = 0; i < oddSquares.length; i++){
            oddSquares[i].style.backgroundColor = '#000000';
            evenSquares[i].style.backgroundColor = '#ffffff';
            oddSquares[i].style.color = '#ffffff';
            evenSquares[i].style.color = '#000000';
            clickCounter = false;
    }
}
    else {
        for (i = 0; i < oddSquares.length; i++){
            oddSquares[i].style.backgroundColor = '#ffffff';
            evenSquares[i].style.backgroundColor = '#000000';
            oddSquares[i].style.color = '#000000';
            evenSquares[i].style.color = '#ffffff';
            clickCounter = true;
    }
}
}

function changeShape(){
    var input = document.getElementById('inputRadius').value;
    var oddSquares = document.getElementsByClassName('square1');

    for (i = 0; i < oddSquares.length; i++){
        oddSquares[i].style.borderRadius = input;
    }

}



    