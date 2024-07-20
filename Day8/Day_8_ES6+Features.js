// Tasks/Activites:

// Activity 1: Template Literals 

//! Task 1:
let fullName = "Saurav Jha"
let age  = 22;

console.log(`My name is ${fullName} and my age is ${age}`)

//! Task 2:

const multiLineString = `
Hello, My Name is Saurav Jha 
I am 22 years old
I am a student of IIIT Bhubaneswar
I am a Web Developer
I am a Frontend Developer
I am a Backend Developer
I am a Full Stack Developer
I am a Web Designer
I am a UI/UX Designer
`

console.log("MultilineString: ",multiLineString)

// Activity 2: Destructuring 

//! Task 3:

let array = [1,2,34,56,123];

const [first,second] = array;
console.log(
    `First Element: ${first} \n Second Element: ${second}`
)

//! Task 4:

let book = {
    title:"Insyncable Boat",
    author:"Saurav Jha",
    year:2020
    
}

const {title,author} = book;
console.log(
    `Title: ${title} \n Author: ${author}`
)

// Activity 3: Spread and Rest Operators

//! Task 5:

let batsmen = ["Rohit",
    "Virat",
    "Rahul",
    "Dhoni",
    "Kohli",
]

let bowlers = [
    "Bumrah",
    "Shami",
    "Bhuvneshwar",
    
]

let team = [...batsmen,...bowlers]

console.log(
    `Team: ${team}`
)

// ! Task 6:
console.log("Use of Rest Operator in a Function to accept an arbitary number of arguments")

function threeSum(...num){
    let sum = num.reduce((acc,val)=>acc + val,0);
    return sum;
}

console.log(threeSum(
    1,2,3,4,5,6,7,8,9,10
))

// Activity 4: Default Parameters

//! Task 7:

console.log("Example of Default Parameters")
function defaultParams(num1,defaultVal=1){
    return `Multiplication of ${num1} and ${defaultVal} is ${num1 * defaultVal}`
}

console.log(defaultParams(2,45));
console.log(defaultParams(2));

// Activity 5: Enhanced Object Literals

//! Task 8: 

const chocolate = "Dark Chocolate";
const price = 100;
const color = "Black";
const brand = "AMUL";

var tagline = function(){
    console.log(`Amul ka chocolate worlds! best Chocolate.. sirf ${this.price} mein`)
}

const chocolateDetails = {chocolate,price,color,brand,tagline}
console.log(chocolateDetails);
console.log(chocolateDetails.color);
console.log(chocolateDetails.tagline());

// For Reference
// Old syntax 
// var driver1 = { 
//     name: "John", 
//     speed: 50, 
//     car:"Ferrari", 
//     speedUp: function(speedup){ 
//          this.speed = this.speed + speedup; 
//          console.log("new speed = "+ this.speed) 
//     } 
// } 
  
// // New syntax without function keyword 
// const driver2 = { 
//     name: "Jane", 
//     speed: 60, 
//     car:"McLaren", 
//     speedUp(speedup){ 
//          this.speed = this.speed + speedup; 
//          console.log("new speed = "+ this.speed) 
//     } 
// } 

//! Task 9:

console.log("Use of Computed Properties: ")
/* 
Learnings from Computed Properties-->
Computed properties in JavaScript are a feature of object literals that allow you to use an expression inside square brackets [] to dynamically set or access the properties of an object. This can be particularly useful when you need to compute the property names dynamically.
*/
const settings = {};

function updateSetting(settingName,value){
    settings[settingName] = value;
}

updateSetting('theme','dark');
updateSetting('fontSize','16px');

console.log("Settings: ",settings)

