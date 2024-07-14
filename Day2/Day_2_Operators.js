// Task/ Activites:

// Activity 1: Arithmetic Operations

// Task-1

function addTwoNumbers(num1,num2){
    console.log(`Addition of ${num1} and ${num2} is ${num1 + num2}`)
}

addTwoNumbers(5,2)

// Task-2

function subtractTwoNumbers(num1,num2){
    console.log(`Subtraction of ${num1} and ${num2} is ${num1-num2}`)
    
}

subtractTwoNumbers(5,2)

// Task-3

function multiplyTwoNumbers(num1,num2){
    console.log(`Multiply of ${num1} and ${num2} is ${num1 * num2}`)
    
}

multiplyTwoNumbers(5,2)

// Task-4

function divideTwoNumbers(num1,num2){
    console.log(`Divide of ${num1} and ${num2} is ${num1 / num2}`)
    
}

divideTwoNumbers(5,2)

// Task-5

function findRemainder(num1,num2){
    console.log(`Remainder of ${num1} and ${num2} is ${num1 % num2}`)
    
}

multiplyTwoNumbers(5,2)

// Activity 2: Assigment Operators

// Task-6

let n1 = 2;
 n1+=5;
 console.log("n1: ",n1)

 // Task-7

 let n2 = 5;
 n2-=2;
 console.log("n2: ",n2)

 // Activity 3: Comparison Operators

 // Task-8
 let score1 = 100;
 let score2 = 200;
 let score3 = "100";
 let score4 = 301;
 let score5 = 200

 console.log(score1>score2)
 console.log(score1<score2)
 console.log(score2>=score5)
 console.log(score1<=score5)
 console.log(score1==score3)
 console.log(score1===score3)


 // Logical Operators

 let arr = [1,2,4,5];
 for(let i=1;i<arr.length;i++){
    if(arr[i]<arr[i+1] && arr[i]>arr[i-1]){
        console.log(`Use of && operator ${arr[i]}`)
    }
    if(arr[i]<arr[i+1] || arr[i]>arr[i-1]){
        console.log(`Use of || operator ${arr[i]}`)
    }
    if(arr[i]!=arr[i+1]){
        console.log(`Use of ! operator ${arr[i]}`)
    }
 }

 // Activity 5:Ternary Operator
 let a = 5;
   a>0?console.log("Positive"):console.log("Negative")

// Feature Request:
//1. Arithmetic Operations Script:

function arithmetic(num1,num2,oper){
    let expression =   `${num1} ${oper} ${num2}`;
    let result = eval(expression);
    console.log(`${expression} = ${result}`)
}
arithmetic(5,6,"+");
arithmetic(5,6,"-");
arithmetic(5,6,"*");
arithmetic(5,6,"/");
arithmetic(5,6,"%");

// 2. Comparison and Logical Operators Script:

function CompLogiOper(num1,num2,oper){
    let expression = `${num1} ${oper} ${num2}`
    let result = eval(expression);
    console.log(`${expression} = ${result}`)
}
CompLogiOper(5,6,"<");
CompLogiOper(5,6,">");
CompLogiOper(5,6,"<=");
CompLogiOper(5,6,">=");
CompLogiOper(5,6,"==");
CompLogiOper(5,6,"!=");
CompLogiOper(5,6,"&&");
CompLogiOper(5,6,"||");


// Ternary Operator Script: 
function Ternary(num){
    num>0?console.log(`${num} is Positive`):console.log(`${num} is Negative`)
}
Ternary(5);

// Day 2 Challenge Completed.



