// Tasks/Activites:

// Activity 1: Basic Regular Expressions

console.log("Basic Regular Expressions.");

// Task 1:

const regex = /JavaScript/g
const str = "JavaScript is awesome programming Language and Javascript is also best for development.";
console.log(str.match(regex));

// Task 2:
const regex1 = /\d+/g;
const text = "The total amount is 12345 dollars and 67 cents.";

console.log(text.match(regex1));

// Activity 2: Characters Classes ad Quantifiers

// Task 3:
const regex2 = /\b[A-Z][a-z]*\b/g;
const text1 = "My Name is Saurav";
console.log(text1.match(regex2));

// Task 4:
const regex3 = /\d+/g;
const text2 = "My age is 25 and my friend is 30 years old.";
console.log(text2.match(regex3));

// Activity 3: Grouping and Capturing
// Task 5:
const regex4 = /\((\d{3})\)\s(\d{3})-(\d{4})/;
const text3 = "My phone number is (123) 456-7890.";
console.log(text3.match(regex4));

// Task 6:
const regex5 = /(\w+)@([\w.-]+)/;
const text4 = "Please send an email to jhasaurav0209001@gmail.com";
console.log(text4.match(regex5));

// Activity 4: Assertions and Boundaries

// Task 7:
const regex6 = /^\w+/;
const text5 = "Hello, how are you?";
console.log(text5.match(regex6));

// Task 8:

const regex7 = /\w+$/;
const text6 = "Hello, how are you";
console.log(text6.match(regex7));

// Activity 5: Practical Applications

// Task 9:

const regex8 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
const password = "P@ssw0rd";
const isValid = regex8.test(password);
console.log(isValid);

// Task 10:

const regex9 = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w-.,@?^=%&:\/~+#]*)?$/;
const url = "https://www.example.com";
const isValidURL = regex9.test(url);
console.log(isValidURL); 