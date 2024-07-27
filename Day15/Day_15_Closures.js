// Tasks/Activites

// Activity 1: Understanding Closures

// Task 1:

function outer(){
    let name = "Saurav Jha";
    console.log("Outer Function.")
    function inner(){
        return  `Inner Function:- My Name is ${name}.`
    }
    return inner();
}

console.log(outer());

// Task 2:

function counter(){
    let count=0;

    return {
        increment: function(){
            count++;
            return count;
        },
        getCount: function(){
            return count;
        }
    };

}

 const myCounter = counter();
 console.log("Incremented to:", myCounter.increment());
console.log("Incremented to:", myCounter.increment());
console.log("Current Count:", myCounter.getCount());  
console.log("Incremented to:", myCounter.increment()); 

// Activity 2: Practical Closures

// Task 3:

function uniqueIdGenerator(){
   
    let lastId = 1;
    
    return function (){
        lastId++;
        return `#${lastId}`
    }

   
}

const generateUniqueId = uniqueIdGenerator();

console.log("Unique Id: ");
console.log(generateUniqueId());
console.log(generateUniqueId());
console.log(generateUniqueId());

// Task 4:

function greetUser(name){
    return function(){
        return `Welcome ${name} you are onboarded..`
    }
}

const person = greetUser("Saurav");
console.log(person());


// Activity 3: Closure in Loops

// Task 5:

let functionArray = [];
for (let i = 0; i < 5; i++) {
    functionArray.push((function(index){
        return function(){
            console.log(`Index: ${index}`);
            }
    })(i))
}

for(let j=0;j<functionArray.length;j++){
    functionArray[j]();
}

// Activity 4: Module Pattern

// Task 6:

function collectionItems(){
    let items = [];

    function addItem(item){
        items.push(item);
    }
    function removeItems(item){
       items =  items.filter((it)=>it!=item)
    }
    function listItems(){
        return items;
    }

    return {
        addItem,
        removeItems,
        listItems
    }
}

const items = collectionItems();
items.addItem("Item:1");
items.addItem("Item:2");
items.addItem("Item:3");
items.addItem("Item:4");
items.addItem("Item:5");
console.log(items.listItems())
items.removeItems("Item:3")
console.log(items.listItems())

// Activity 5: Memoization

// Task 7:

function memoize(func){
    const cache = {};

    return function(...args){
        const key = JSON.stringify(args);
        console.log("key: ",key);
        if(cache[key]){
            console.log("Cache: ",cache[key])
            return cache[key];
        }
        const result = func(...args);
        console.log("Result: ",result)
        cache[key] = result;
        return result;
    }
}

function add(a,b){
    return a+b;
}

const memoizedAdd = memoize(add);

console.log(memoizedAdd(1,2));
console.log(memoizedAdd(1,2));
console.log(memoizedAdd(7,2));

// Task 8:

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
        }
        return n * factorial(n-1);
 }

 const memoizedFactorial = memoize(factorial);
 console.log(memoizedFactorial(5));
 console.log(memoizedFactorial(5));
 console.log(memoizedFactorial(4));