// Day 1

// Task & Activites:

// Activity 1: Variable Declaration

// -Task 1

var number = 100;
console.log(`Number: ${number}`)

// -Task 2

let str = "Saurav";
console.log(`String: ${str}`)

// Activity 2: Constant Declaration

// -Task 3

const flag = false
console.log(`Boolean: ${flag}`)

// Activity 3: Data Types

// -Task 4
let numVal = 1;
let strVal = "jha";
let checkBool = false;
let obj = {
    name: "Saurav",
    age: 20
}
let array = [1,3,5,7];




// Activity 4: Reassinging Variables

// -Task 5

let initialValue = 25;
console.log("Initial Value: ",initialValue)
 initialValue = 50;
console.log("Reassigned Value: ",initialValue)

// Activity 5: Understanding const

// -Task 6

const iniVal = 20;
console.log("Initial Value: ",iniVal)
iniVal = 30;
console.log("Reassigned Value: ",iniVal)

// Feature Request:
// 1.Variable Type Console Log:

let numbVar = 23;
let stringVar = "Chai aur Code";
let booleanVar = true;
let nullVar = null;
let undefinedVar;
let objectVar = {
    name: "Chai",
    currentCourse:"30 Days of Js Challenge"
    }
let functionVar = function(){
    return "Mein function hu..."
}
let arrayVar = ["var","let","const"];
let symbolVar = Symbol("symbol");
let bigintVar = BigInt(9000232435986359836452345708457)


function declareVariablesAndGetValAndTypeOf(variable){
    console.log(`Variable : ${typeof(variable)==='symbol'?String(variable):variable}, TypeOf: ${typeof(variable)}`);
}

declareVariablesAndGetValAndTypeOf(numbVar);
declareVariablesAndGetValAndTypeOf(stringVar);
declareVariablesAndGetValAndTypeOf(booleanVar);
declareVariablesAndGetValAndTypeOf(nullVar);
declareVariablesAndGetValAndTypeOf(undefinedVar);
declareVariablesAndGetValAndTypeOf(objectVar);
declareVariablesAndGetValAndTypeOf(functionVar);
declareVariablesAndGetValAndTypeOf(arrayVar);
declareVariablesAndGetValAndTypeOf(symbolVar);
declareVariablesAndGetValAndTypeOf(bigintVar);

// 2. Reassigment Demo:

function reassigmentDiff(){
    // try catch for let to check if yeh reassign ho rha hai ki nhi
    let cricketer = "Virat Kohli";
    const sport = "Cricket";
    try {
         cricketer = "Rohit Sharma";
         console.log("Cricketer: ",cricketer)
    } catch (error) {
        console.log("Error occured in let: ",error);
    }

    // try catch for const to check if yeh reassign ho rha hai ki nhi
    try {
        sport = "Football";
        console.log("Sport: ",sport)
        } catch (error) {
            console.error("Error occured in const: ",error);
        }
   
}

console.log(reassigmentDiff())

// Day 1 Challenge Done.



