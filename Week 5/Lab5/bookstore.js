
/********************************************/
class Book {
    constructor(title, author, price, origin) {
        this.title = title;
        this.author = author;
        this.price = price;
        this.origin = origin;
        this.discountedPrice = 0;
}
}
const book1 = new Book ("Ancillary Justice", "Ann Leckie", 50.00, "US");
const book2 = new Book ("Leviathan Wakes", "James Corey", 60.00, "CAN");
const book3 = new Book ("The City of Brass", "S.A. Chakraborty", 24.95, "UK");
const book4 = new Book ("A Memory Called Empire", "Arkady Martine", 34.95, "US");
const book5 = new Book ("The Just City", "Jo Walton", 19.99, "TURK");
const book6 = new Book ("A Darker Shade of Magic", "V.E.Schwab", 29.99, "UK");
const book7 = new Book ("City of Stairs", "Robert Jackson Bennett", 9.99, "FR");
const book8 = new Book ("Rosewater", "Tade Thompson", 34.95, "CAN");
const book9 = new Book ("Black Sun", "Rebecca Roanhorse", 22.95, "UK");
const book10 = new Book ("Piranese", "Susanna Clarke", 15.99, "US");
const book11 = new Book ("Circe", "Madeline Miller", 19.99, "CAN");
const book12 = new Book ("Mexican Gothic", "Silvia Morneno-Garcia", 21.00, "FR");
const book13 = new Book ("The Paper Menagerie", "Ken Liu", 18.99, "CAN");
const book14 = new Book ("Spinning Silver", "Naomi Novik", 12.99, "US");
const book15 = new Book ("Exhalation", "Ted Chiang", 12.00, "UK");
const book16 = new Book ("A Stranger in Olondria", "Sofia Samatar", 21.95, "US");
const book17 = new Book ("Her Body and Other Parties", "Carmen Marie Machado", 15.99, "FR");
const book18 = new Book ("The Buried Giant", "Kazuo Ishiguro", 14.99, "CAN");
const book19 = new Book ("Radiance", "Catherynne M. Valente", 12.95, "US");
const book20 = new Book ("The Changeling", "Victor Lavalle", 19.99, "UK");

const bookArray = new Array(book1, book2, book3, book4, book5, book6, book7, book8, book9, book10,
    book11, book12, book13, book14, book15, book16, book17, book18, book19, book20);
/********************************************/
function getDiscountedPrices(){ 

    bookArray.forEach(element => {element.discountedPrice = element.price - (element.price * getDiscountPercent(element))});
    bookArray.forEach(element => {console.log(
        element.title + " by " + 
        element.author +"\n" + " Original Price: $" + 
        element.price.toFixed(2) + " - " + "Sale Price: $" +
        element.discountedPrice.toFixed(2), )})
}

function getDiscountPercent(book)
{
    return book.origin == "UK" ? .05 
          :book.origin == "US" ? .1
          :book.origin == "CAN" ? .12
          :.15;
}
getDiscountedPrices()
/*
Goal: In this lab you will create a "Books" collection with information about the name of the book, the author, price and country of origin. Then when the "Get Discounted Prices" button is clicked, your code should look through the collections, and apply a discount to the books based on their country of origin. 
Startup code is here:  https://github.com/ManjulaChandirasekaran/Spring2020IT2320/tree/master/Lab5  
1. First create the books object array with data for 20 books(Don't use meaningless data like "abc" etc). Make sure there are books from Canada, USA, UK and maybe a few other countries. (define this in global scope)
Make sure that you have the following information for the books in the books object:
name, author, price & origin
Origin will be the name of the country from which the book was published. So examples are "US", "Canada", "UK" etc.

Sample book object:
name: "Harry Potter and the Prisoner of Azkaban"
author: "J. K. Rowling"
price: 200.65
origin: "UK"
Inside getDiscountedPrice() function
Using the forEach method, iterate through this object array and
get the price of each book
determine the discount amount by calling getDiscount(). Send country as parameter. Function should return discount percent. 
Find the sales price after discount and add it as a property called "salesprice" to the book object (see bmi example)
write the name, author, price and salesprice of each book in the console.log
submit your code as Lab 5 folder in github and share your commit id.

Inside getDiscount() function
This function will get country as parameter. Function should return discount percent based on the following logic.
If the country of origin is US, discount % will be 10%
If the country of origin is UK, discount % will be 5%
If the country of origin is Canada, discount % will be 12%
If the country of origin is other than the above 3 countries, the discount % will be 15%
*/