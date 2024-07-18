// Task/Activites

// Activity 1: Array Creation and Access

//! Task 1: 

console.log("Array of Numbers from 1 to 5: ")
let arr = new Array(5);
let num=1;
let i=0;

while(num<6){
    
    arr[i] = num;
    i++;
    num++;
}
console.log(arr);

//! Task 2:

console.log("Accessing First and Last Element of array: ")
let sampleArray = [1,2,3,5,6];
console.log(`First Element of SampleArray: ${sampleArray} is: ${sampleArray[0]}`);
console.log(`Last Element of SampleArray: ${sampleArray} is: ${sampleArray[sampleArray.length-1]}`)

// Another Way:-
console.log(sampleArray.slice(0,1)[0]);
console.log(sampleArray.slice(sampleArray.length-1)[0]);



// Activity 2: Array methods(Basic)

//! Task 3:
 console.log("Using PUSH Method to add new number at end")
 sampleArray.push(7);
 console.log(`Updated Array for PUSH:- [${sampleArray}]`);
 

//! Task 4:
console.log("Using POP Method to remove last element")
sampleArray.pop();
console.log(`Updated Array for POP:- ${sampleArray}`)

//! Task 5:
console.log("Using SHIFT Method to remove first element");
sampleArray.shift();
console.log(`Updated Array for SHIFT:- ${sampleArray}`)

//! Task 6:
console.log("Using UNSHIFT Method to add new number at start");
sampleArray.unshift(200);
console.log(`Updated Array for UNSHIFT:- ${sampleArray}`)

// Activity 3: Array Methods (Intermediate)

//! Task 7:
console.log("Using MAP method to double each number: ");
let newSampleArray = sampleArray.map((num)=>num*2);
console.log(`Updated Array for MAP:- ${newSampleArray}`)

//! Task 8:
console.log("Using FILTER method to create new array with only even number");
let evenArray = sampleArray.filter((evenNum)=>evenNum%2===0);
console.log(`Updated Array for FILTER:- ${evenArray}`)

//! Task 9:
console.log("Using REDUCE method to calculate sum of all the numbers in array");
let sum = sampleArray.reduce((acc,val)=> acc + val,0)
console.log(`Updated Array for REDUCE:- ${sum}`)

// Activity 4: Array Iteration

//! Task 10:
console.log("Use of for Loop to Log Each Element: ");
for(let i=0;i<sampleArray.length;i++){
    console.log(sampleArray[i]);
}

//! Task 11:
console.log("Use of forEach Loop to Log Each Element: ");
sampleArray.forEach((num)=>console.log(num));

// Activity 5: Multi-dimensional Arrays

//! Task 12:

let row = 3;
let col = 4;
let matrix = [];

console.log("2D Array Matrix Using Nested Loops:- ")

for(let i=0;i<row;i++){
    matrix[i] = [col]
}

for(let i=0;i<row;i++){
    for(let j=0;j<col;j++){
        matrix[i][j]="4"
    }
    
}
console.log("Matrix: ",matrix);

// Modern Approach
console.log("2D Array Matrix Using Array.from:- ")

let newArr = Array.from({length:row},()=>Array(col).fill(1))
console.log("Matrix: ",newArr);


//! Task 13: 

console.log("Accessing a specific element from 2D Array:- ");
let twoDArray = [[1,3,5],[2,5,7],[3,7,9]]
console.log(`Element is: ${twoDArray[1][2]}`)

