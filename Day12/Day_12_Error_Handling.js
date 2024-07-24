// Task/Activites

// Activity 1: Basic Error Handling with Try-Catch

// Task 1:

function handleError(){
    try {
        throw new Error("Intentional Error.")
    } catch (error) {
        console.log("Error: ",error.message)
    }
}

handleError();

// Task 2:

let num1 = Number(process.argv[2]) || 20;
let num2 = Number(process.argv[3]) || 0;

console.log(`Enter First Number: ${typeof(num1)}`);
console.log(`Enter Second Number: ${num2}`);

function divide(num1,num2){
    try {
        if(num2 === 0){
            throw new Error("Cannot Divide by Zero");
            } 
        return `Division of ${num1} and ${num2} is ${num1/num2}`
       
    } catch (error) {
        return `Error: ${error.message}`
    }
}
console.log(`Result: ${divide(num1,num2)}`);

// Activity 2: Finally Block

// Task 3:

function flowOfTCF(){
    try {
        console.log("Inside try block.");
        let result = unknownFunction();
        console.log("Result: ",result);
        console.log("Last line of try-block.")
    } catch (error) {
        console.log("Inside catch bloack");
        console.error("Error: ",error.message);
    } finally {
        console.log("Inside finally block.")
    }

    console.log("Code Flow.")
}
flowOfTCF();

// Activity 3: Custom Error Objects

// Task 4:

class CustomError extends Error{
   constructor(message){
    super(message);
    this.name = "CustomError";
   }
}

function checkEven(num){
    try {
        if(!(num%2===0)){
            throw new CustomError("Number is Odd");
        }
        return num%2===0
    } catch (error) {
        return error.message
    }
    
}

console.log(checkEven(3));

// Task 5:

let user = process.argv[4] || "";

function validation(user){
    try {
        if(user===""){
            throw new CustomError("User is Empty");
        }
        return `${user} is Validated.`
    } catch (error) {
        return error.message
    }
}
console.log(validation(user));

// Activity 4: Error Handling in Promises

// Task 6:

let randomNumber  = Math.floor(Math.random() * 10+1);

let checkPromise = new Promise((resolve,reject)=>{
    if(randomNumber%2===0){
        resolve(`${randomNumber} is Even`);
    }
    else{
        reject(`${randomNumber} is Odd`);
    }
})

checkPromise
.then((success)=>console.log(success))
.catch((error)=>console.log(error));

// Task 7:

async function handleErrorUsingAsyncFunc(){
    try {
        console.log("Inside async: ",checkPromise)
        const response = await checkPromise;
        console.log(response);
    } catch (error) {
        console.log(error);        
    }
}
handleErrorUsingAsyncFunc();

// Activity 5: Graceful Error Handling in Fetch

// Task 8:

let baseURL = "https://www.invalid-url.com";
fetch(baseURL)
.then((response)=>{
    
    if(!response.ok){
        throw new CustomError(`Error: Invalid URL->${baseURL}`);
    }
    
        return response.text()   
    
})
.then((data)=>{
    console.log(data);
    })
.catch(error => {
        if (error instanceof CustomError) {
            console.log(error.message); // Log custom error message
        } else {
            console.log(`Fetch failed: ${error.message}`); // Log fetch error message
        }
    });

// Task 9:

async function handleFetchError(){
    try {
        const response = await fetch(baseURL);
        
        if(!response.ok){
            throw new CustomError(`Error: Invalid URL->${baseURL}`);
        }
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
            const data = await response.json();
            return data;
        } else {
            const data = await response.text();
            return data;
        }

    } catch(error) {
        if (error instanceof CustomError) {
            console.log(error.message); // Log custom error message
        } else {
            console.log(`Fetch failed: ${error.message}`); // Log fetch error message
        }
    }
}

handleFetchError().then(result => console.log(result));
