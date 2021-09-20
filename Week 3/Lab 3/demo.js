//Javascript is case sensitive

/*Javascript statement end in a semicolon
Javascript comments can span single or multiple lines*/

function Multiply(x,y) {
    let product = x * y;
    alert(x + " * " + y + " = " +product);

}

function PencilDivide(pencils, kids) {
    let howMany = pencils/kids;
    alert("Each kid gets " + howMany + " pencils.");
}

function MeanCalculator(x,y,z,a,b) {
    let mean = (x + y + z + a + b)/5;
    alert("The mean average of the given numbers is " + mean);
}

function EvenNumberSum(){
    let sum = 0;
    for(i = 2; i <=200; i++){
        if(i % 2 == 0){
            sum += i;
        }
    }
    alert("The sum of all numbers between (including) 2 and 200 is: " +sum);
}

function Fibulator(){

    let fib = new Array(20);
    
    fib[0] = 1;
    fib[1] = 1;
    
    for (i = 2; i < fib.length; i++){
        fib[i] = (fib[i-1] + fib[i-2]);
    }
    let message = ""
    fib.forEach(f => message += "Fibonacci number " + (fib.indexOf(f)+1) + ": " + f + "\r\n")
    alert(message);
}

console.log("console log - hello world");//log in developer tools
var globalX = 100;//global scope

function hello() //function definition
{
    alert("alert - hello world!");//popup window    
}

function add()//function definition
{
    var x = 3;
    var y = 5;
    var sum = x + y;
    alert("Sum is " + sum);
}

function substract()
{
    var a = 1000;
    var b = 100;
    var diff = a - b;
    alert("Difference is " + diff);
}

//Homework Lab- Complete Multiplication and Division functionality

function increment()
{ 
    var y = 10;//local scope - resets y everytime function is called
    globalX = globalX+10;//can add any number to itself
    //y = y+10;
    y+=10;//same as y = y+10;
    alert("x= "+globalX + " y= "+y); 

}

/* JS statements
Conditional statements:
If statement
Switch statement

Loops:
For loop
While loop
Do while loop

Break
*/

function compare()
{
    var charlie = 162;
    var john = 135;
    
    //conditional if statement
    
    if (charlie > john)
    {
        alert("Charlie is taller");
    }
    else if( charlie == john)//"=" is assignment; "==" is comparison
    {
        alert("Charlie and John are of the same height");
    }
    else
    {
        alert("John is taller");
    }

}

function IsTropical(fruit)//fruit is a variable and is an input parameter
{
    
    var isTropical = false; //boolean variable: True or False

    switch(fruit)
    {
        case "banana":
            isTropical = true;
            break;

        case "papaya":
            isTropical = true;
            break;

        case "tomato":
            isTropical = false;
            break;

        case "mango":
            isTropical = true;
            break;

        case "watermelon":
            isTropical = true;
            break;

        default:
            isTropical = false;            
    }

    alert("Is "+ fruit+ " tropical? "+ isTropical );

}

function Repeat( message )
{
    var counter = 0;
    console.log("While loop:");
    while (counter < 5)
    {
        alert( message + " number " + (counter + 1) );
        counter++; //You have to remember to increment the counter otherwise the loop will go on endlessly
    }
}
/*    counter = 0;
    console.log("Do - While loop:");
    do 
    {
        console.log( message );
        counter++; //You have to remember to increment the counter otherwise the loop will go on endlessly
    } while (counter < 5);

    console.log("For loop:");
    /************************************************* 
    for(var counter=0; counter < 5; counter++)
    {
        console.log(message);
    }
    
*/


    