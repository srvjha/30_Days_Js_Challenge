// Tasks/Activites:

// Activity 1: Function Declaration

//! Task 1:


console.log("Function to check if a number is Even or Odd");

function checkEvenOdd(num){
   return num%2===0 ? `${num} is Even.` : `${num} is Odd.`
}

console.log(checkEvenOdd(4));
console.log(checkEvenOdd(5));

//! Task 2:

console.log("Function to Calculate Square of a number");

function calcSquare(num){
    return `Square of ${num} is: ${num * num}`
}

console.log(calcSquare(5))

// Activity 2: Function Expression

//! Task 3:

console.log("Function Expression to find the maximum of two number");

const maxNum = function(num1,num2){
    return `Maximum of ${num1} and ${num2} is ${Math.max(num1,num2)}`
}

console.log(maxNum(5,3));

//! Task 4:

console.log("Function Expression to Concatenate two strings");

const strTogether = function(str1,str2){
    return `Concatenation of ${str1} and ${str2} is ${str1} ${str2}`
}

console.log(strTogether("Hello","Saurav"));

// Activity 3: Arrow Functions 

//! Task 5:


const sum = (num1,num2) => { 
    if(typeof(num1) === "number" && typeof(num2) === "number"){
      return `Sum of ${num1} and ${num2} is ${num1 + num2}`
    }
    else{
        return "Please enter a valid number";
    }
    
}

console.log(sum(10,20));
console.log(sum(10,"23"));

//! Task 6:

const checkCharInString = (str,ch) => {
    str = str.split("")
    for(const char of str){
         if(char === ch){
            return `Character ${ch} is present in ${str}`
        }
        
    }
    
        return `Character ${ch} is not present in ${str}`
    
}

const checkCharInString1 = (str,ch) => {
    let findIndex = str.indexOf(ch)
   return  findIndex !== -1 ? `Character ${ch} is present in ${str}` : `Character ${ch} is not present in ${str}`
}

console.log(checkCharInString("saurav","u"))
console.log(checkCharInString1("saurav","u"))


// Activity 4: Function Parameters and Default Values

//! Task 7: 

function productWithDefaultParam(num1,num2 = 5){
    return `Product with Default Parameters of ${num1} and ${num2} is ${num1 * num2}`
}

console.log(productWithDefaultParam(8));

//! Task 8:

const greetMessage = (personName,age=24) => {
    return `Hello ${personName} your eligible to Vote at Age: ${age}`
}

console.log(greetMessage("Saurav Jha"))

// Activity 5: Higher-Order Functions

//! Task 9:

function callNoOfTImes(func,num){
    let result = " "
    while(num!==0){
        result += func() + " "
        num--
    }
    return result;
    
}
function greet(){
    return "HELLO"
}

console.log(callNoOfTImes(greet,5))

//! Task 10:

function highOrderFuncQues(func1,func2,value){
    let result = func2(func1(value))
    return `High Order Function Example Result is:  ${result}`
}

function product(num1,num2=10){
    return num1 * num2
}

function sumOfTwoNum(num1,num2=10){
    return num1 + num2
}

console.log(highOrderFuncQues(product,sumOfTwoNum,3))