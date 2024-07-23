
// Tasks/Activites:

// Activity 1: Understanding Promises

// Task 1:

let promise1  = new Promise((resolve,reject)=>{
    resolve("Successfully Logged In!")
});

setTimeout(()=>{
    promise1
    .then((message)=> console.log(message))
    .catch((error)=> console.log(error))

},2000);

// Another Approach
// let myPromise= new Promise((resolve,reject)=>{
//     setTimeout(() =>{
//         resolve("Promise resolved after 2 seconds !");

//     },2000);
// });

// myPromise
// .then((message)=>{
//     console.log(message);
// })


// Task 2:

let promise2  = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Login Fail!")
    },2000)
    
});
    promise2
    .then((message)=> console.log(message))
    .catch((error)=> console.log(error))

// Activity 2: Chaining Promises

// Task 3:

function greetMessage(name){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`Hello ${name}!`)
        },1000)
    })
}

function courseJoin(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("You have joined the DSA course !")
            },1000)
            })
}

function feedback(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Feedback: You have to work on your fundamentals !")
            },1000)
            })
}

greetMessage("Saurav Jha")
.then((message)=>{
    console.log(message)
    return courseJoin();
})
.then((message)=>{
    console.log(message)
    return feedback();
})
.then((message)=>{
    console.log(message)
    
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log("Finally executed !")
})

// Activity 3: Using Async/Await

// Task 4:

const promise3 =()=>{ return new Promise((res,rej)=>{
     setTimeout(()=>{
        res("Promise Resloved.")
    },2000)
   
})}
async function welcomeMessage(){
    try {
        let message = await promise3();
        console.log(message)
    } catch (error) {
        console.log(error)
    }   
}

welcomeMessage()

// Task 5:

const rejPromise  = ()=>{
    return new Promise((resolve,reject)=>{
        reject("You are not authorized")
    })
}

async function checkAuthorization(){
    try {
        let result = await rejPromise();
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

checkAuthorization()

// Activity 4: Fetching Data from an API

// Task 6:

fetch("https://api.github.com/users/srvjha")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log("Data Using Promises: ",data)
})
.catch((error)=>{
    console.log(error)
})

// Task 7:

async function getData(){
    try {
        const response = await fetch("https://api.github.com/users/srvjha");
        const data = await response.json();
        console.log("Data Using Asyn/Await: ",data)
    } catch (error) {
        console.log(error)
    }
}

getData()

// Activity 5: Concurrent Promises

// Task 8:

let p1 = new Promise((res,rej)=> res("Promise Resolved1"));
let p2 = new Promise((res,rej)=> res("Promise Not Resolved2"));
let p3 = new Promise((res,rej)=> res("Promise Resolved3"));

Promise.all(
    [p1,p2,p3]
)
.then((data)=>{
    console.log("Promise All: ",data)
    })
.catch((error)=>{
    console.log("Error: ",error,"Promise All: ",data)
});

// If all resolved then OUTPUT-> Promise All:  [ 'Promise Resolved1', 'Promise Resolved2', 'Promise Resolved3' ]
// If one rejected then OUTPUT-> Promise All:  [ 'Promise Resolved1', 'Promise Not Resolved2', 'Promise Resolved3' ]

// Task 8:

const case1 = ()=>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("Case 1 Resolved in 2000 seconds");
            },2000)
            })
}

const case2 = ()=>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("Case 2 Resolved in 4000 seconds");
            },4000)
            })
}

const case3 = ()=>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("Case 3 Resolved in 1000 seconds");
            },1000)
            })
}

Promise
.race(
    [case1(),case2(),case3()]
)
.then((data)=>{
    console.log("Promise Race: ",data)
    })
.catch((error)=>{
    console.log("Error: ",error,"Promise Race: ",data)
})

// Output:- Promise Race:  Case 3 Resolved in 1000 seconds




