/*********************************************************************/
//Global Area
window.onload = function(){
    var btnOrig = document.getElementsByClassName("btnOrig");
    for(i = 0; i < btnOrig.length; i++){
        btnOrig[i].addEventListener("click", function() {
            changeButtonText(this);
        });  
    }

    var square3 = document.getElementsByClassName("square3");
    for(i = 0; i < square3.length; i ++){
        square3[i].addEventListener("click", function() {
            changeSquare(this);
        });
    }
    
}

/***************** Function definition area *************/
function changeButtonText(btnObj){
    btnObj.innerHTML = "Active";
}

function changeSquare(sqObj){
    sqObj.style.background = 'green';
}

