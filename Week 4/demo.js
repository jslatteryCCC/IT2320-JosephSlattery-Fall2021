//Javascript is case sensitive

/*Javascript statement end in a semicolon
Javascript comments can span single or multiple lines*/

console.log("Lab 04 startup code");//log in developer tools

function CalculateCommission(){

    class Salesperson {
        constructor(name, decSales, janSales, febSales) {
            this.name = name;
            this.decSales = decSales;
            this.janSales = janSales;
            this.febSales = febSales;
            this.totalSales = (this.decSales + this.janSales + this.febSales);
            this.commission = commissionReturn(this);
        }
    }
    
    const Brad = new Salesperson("Brad", 1500, 10000, 8000);
    const Nila = new Salesperson("Nila", 15000, 25000, 7500);
    const Joseph = new Salesperson("Joseph", 30000, 20000, 45000);
    const Kesh = new Salesperson("Kesh", 12000, 14000, 10000);
    const Lydia = new Salesperson("Lydia", 45000, 30000, 38000);
    const Devon = new Salesperson("Devon", 25000, 16000, 22000);
    const Miller = new Salesperson("Miller", 8000, 30000, 15000);

    const SalesArray = new Array(Brad, Nila, Joseph, Kesh, Lydia, Devon, Miller);
    
    var topCommission = 0;
    var topSalesPerson = "";
    

    function commissionReturn(salesperson){
        return salesperson.totalSales > 30000 ? salesperson.totalSales * .08
             : salesperson.totalSales > 15000 ? salesperson.totalSales * .05
             : salesperson.totalSales > 10000 ? salesperson. totalSales * .03
             : salesperson.totalSales > 5000 ?  salesperson.totalSales * .02
             : .01;
    }

    function arraySort (array){
        array.sort((a, b) => a.totalSales > b.totalSales ? 1 : -1)  
    }

    arraySort(SalesArray)
    topCommission += SalesArray[6].commission;
    topSalesPerson += SalesArray[6].name;
    
    function logger(){
        console.log("Salesperson   Commission   Average Commission");
        console.log("---------------------------------------------");
        SalesArray.forEach(element => console.log(element.name.padEnd(15) + "$" + element.commission.toString().padEnd(15) + "$" +
        + Math.round(element.commission / 3)))
    }
    logger();

    console.log("---------------------------------------------",
                "Top Salesperson and commission: " + topSalesPerson + " $" + topCommission.toString().padEnd(40),
                "---------------------------------------------")
    alert("Top Salesperson is " + topSalesPerson + " and top commission amount is $" + topCommission);
}
     

    //Your code goes here
    /*
    Here's the pseudocode in case you are wondering how to get started:

    1. Save salesperson names in an array

    2. Save December sales amount in an array

    3. Save January sales amount in an array

    4. Save February sales amount in an array

    5. In a "For" loop, for each person

        Calculate Total sales = December sale + January sale + February sale
        
        Calculate commission: 
        if total sales is greater than 30000 then commission = total sales * 0.08 
        If total sales is greater than 15000).....etc
        Continue the if condition for the remaining as specified in the requirement for commission %
        
        Calculate average commission:
        Avg commission = Total commission / 3
        Display sales person name, commission and average commission
        Store the commission to a "topCommission" variable.
        Each time compare topCommission to commission of current salesperson 
        to determine if this is the top commission

    6. Outside the "For" loop, display topCommission and topSalesperson name.
*/

    