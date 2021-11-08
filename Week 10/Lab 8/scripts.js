class Book {
    constructor(title, author, totalPages, publisher, ISBN){
    this.title = title; 
    this.author = author;
    this.totalPages = totalPages;
    this.publisher = publisher;
    this.ISBN = ISBN;
    }
}

const book1 = new Book("Diary of a Bad Year", "J.M. Coetzee", "304", "Penguin Books","978067001875-8")
const book1JSON = JSON.stringify(book1);
console.log(book1JSON);

var employeeJSON = '{"firstName":"Rocco","lastName":"Sangiacomo-Jones","ID":"05101981","address":"3448 Granton Ave. Cleveland, OH 44111","title" : "Assistant to the Regional Manager"}';

var employee = JSON.parse(employeeJSON);
console.log(employee);