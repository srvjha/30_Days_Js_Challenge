// Task/Activites:

// Activity 1: Object Creation and Access

//! Task 1:

console.log("Object Creation Representing Book and its Properties");
// Method 1:
let book = new Object();

book.title = "Deep to High!";
book.author = "Saurav Jha";
book.year = 2029;

console.log("Book: ",book)

// Method 2:

let bookData = {
    title: "Deep to High!",
    author: "Saurav Jha",
    year: 2029 

}

console.log("Book: ",bookData)

//! Task 2:
console.log("Accessing and log the title and author properties");
console.log(`Title of the Book: ${book.title}`);
console.log(`Author of the Book: ${book.author}`);

// Activity 2: Object Methods

//! Task 3:

console.log("Object Methods Representing Book and its Methods");
book.details = function(){
    
    return `Title of Book: ${this.title} , 
            Author of Book: ${this.author},
            Year of Book: ${this.year}`
            
}

console.log("Book Details: ",book.details())

//! Task 4:
console.log("Adding a Method to the book Object that updated the book year");
book.updateYear = function(year){
    return this.year = year
}

console.log("Original Data of Book: ",book);
book.year = 2034;
console.log("Updated Data of Book: ",book);

// Activity 3: Nested Objects

//! Task 5:

console.log("Created Nested Object-> Library")
let library = {
    name:"Saurav's Library",
    books:[
        {title:"Deep to High!", author:"Saurav Jha", year:2029},
        {title:"The Art of War-I", author:"Sun Tzu", year:2021},
        {title:"The Art of War-II", author:"Sun Tzu", year:2030},        
    ],
}

console.log(library)

//! Task 6: 
console.log("Library Details: ");
console.log(`Library Name: ${library.name}`);
console.log(`Titles of All Books in Library: ${library.books.map((book)=> book.title).join(", ")}`)


// Activity 4: The "this" keyword

//! Task 7:
console.log("Exploring the 'this' keyword-->");
console.log("Details: ",book.details())

// Activity 5: Object Iteration

//! Task 8:

console.log("Use of for...in loop to iterate over Properties of Book")
for(const property in book){
    console.log(`${property}: ${
        typeof book[property] === "object" ? JSON.stringify(book[property]) : book[property]
        
        }`)
}

//! Task 9:

console.log("Use of Object Keys and Object Values: ");
console.log("Keys: ",Object.keys(book));
console.log("Values: ",Object.values(book));
let values = Object.values(book).map(value => typeof value === 'function' ? value.call(book) : value);
console.log("Values: ", values);