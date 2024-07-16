// Tasks/Activites:

// Activity 1: For Loop

// Task 1:

console.log(`Number from 1 to 10`);
for(let i=1;i<=10;i++){
    console.log(`${i}`);
}

// Task 2:

console.log("Multiplication of 5 is: ")
for(let i=1;i<=12;i++){
   console.log(`${5} ${"X"} ${i} = ${5*i}`)
}

// Activity 2: While Loop

// Task 3:

let sum = 0;
let n=10;
while(n>0){
    sum+=n;
    n--;
}
console.log(`The sum of numbers from 1 to 10 is ${sum}`)

// Task 4:

let num = 10
while(num>0){
    console.log(num);
    num--;
}

// Activity 3: Do...While Loop

// Task 5:

let num1 = 1;
console.log("Number from 1 to 5 : ")
do{
    console.log(num1);    
    num1++
   
}while(num1<=5);

// Task 6:

let factNum = 5;
let storeFactNum = 1;

console.log("The factorial of 5 is: ");

do{
    storeFactNum *= factNum;
    factNum--;
}while(factNum>0)

console.log(storeFactNum)

// Activity 4: Nested Loops

// Task 7:

console.log("Pattern Print: ")
let pattern = "";
let patternLength = 5; 

for(let i=1;i<=patternLength;i++){
    for(let j=1;j<=i;j++){
        pattern+="*"
    }
    pattern+="\n"
   
}
console.log(pattern);

// Activity 5: Loop Control Statements

// Task 8:

console.log("The numbers between 1-10 using continue statement.")
for(let i=1;i<=10;i++){
    if(i===5)continue;
    console.log(i);
}

// Task 9:
console.log("The numbers between 1-10 using break statement.")
for(let i=1;i<=10;i++){
    if(i===7) break;
    console.log(i);
}

