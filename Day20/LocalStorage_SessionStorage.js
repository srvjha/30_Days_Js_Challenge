// Tasks/Activites:

// Activity 1: Understanding LocalStorage

// Task 1:
console.log("Understanding LocalStorage.");
console.log("Task 1: ")

localStorage.setItem("Skills",["Javascript","Typescript","Reactjs","Nextjs"]);
const mySkills = localStorage.getItem("Skills");
console.log(mySkills); 

// Task 2:
console.log("Task 2: ")

let profile = {
    name: "John Doe",
    age: 30,
    occupation: "Software Engineer",
    skills: ["Javascript","Typescript","Reactjs","Nextjs"]
    
};

localStorage.setItem("Profile: ",JSON.stringify(profile));
const myProfile = localStorage.getItem("Profile: ");
console.log(JSON.parse(myProfile));

// Activity 2: Using LocalStorage
console.log("Using LocalStorage.")

// Task 3:



document.addEventListener("DOMContentLoaded",()=>{
    let userForm = document.querySelector("#userForm");
    let displayDetails = document.querySelector("#userInfo");
    
    const savedName = localStorage.getItem("name");
    const savedEmail = localStorage.getItem("email");

    if(savedName && savedEmail) {

        displayDetails.innerHTML = `Welcome, ${savedName}! <br> <br> Your email is ${savedEmail}.`
    }


    userForm.addEventListener('submit',(event)=>{
        event.preventDefault();
        console.log("userform: ",userForm)
        const name = userForm.elements['name'].value;
        const email = userForm.elements['email'].value;

        console.log("name: ",name);
        console.log("email: ",email);

        localStorage.setItem('name',name);
        localStorage.setItem('email',email);

        displayDetails.innerHTML = `Welcome, ${savedName}! <br> <br> Your email is ${savedEmail}.`
    })
})

// Task 4: 

document.addEventListener("DOMContentLoaded",()=>{
    console.log("Before removal: ",localStorage);
    localStorage.removeItem("name");
    localStorage.removeItem("email")
    console.log("After removal: ",localStorage);
})

console.log("Understanding SessionStorage.")

// Task 5:
sessionStorage.setItem("Project","Video Transcriptify");
console.log("SessionStorage: ",sessionStorage);
const getProject = sessionStorage.getItem("Project");
console.log("Project: ",getProject);

// Task 6:

let bio = {
    name: "Rohan Dua",
    age: 33,
    occupation: "Quality Software Engineer",
    hobbies: ["reading", "hiking", "coding"],    
};

sessionStorage.setItem("Bio",JSON.stringify(bio));
const getBio = sessionStorage.getItem("Bio");
const parsedBio = JSON.parse(getBio);
console.log("Parsed Bio: ",parsedBio);

// Activity 4: Using SessionStorage
console.log("Using SessioStorage");
// Task 7:
document.addEventListener("DOMContentLoaded",()=>{
    let userForm = document.querySelector("#userForm");
    let displayDetails = document.querySelector("#userInfo");
    
    const savedName = localStorage.getItem("name");
    const savedEmail = localStorage.getItem("email");

    if(savedName && savedEmail) {

        displayDetails.innerHTML = `Welcome, ${savedName}! <br> <br> Your email is ${savedEmail}.`
    }


    userForm.addEventListener('submit',(event)=>{
        event.preventDefault();
        console.log("userform: ",userForm)
        const name = userForm.elements['name'].value;
        const email = userForm.elements['email'].value;

        console.log("name: ",name);
        console.log("email: ",email);

        sessionStorage.setItem('name',name);
        sessionStorage.setItem('email',email);

        displayDetails.innerHTML = `Welcome, ${savedName}! <br> <br> Your email is ${savedEmail}.`
    })
})

// Task 8: 

document.addEventListener("DOMContentLoaded",()=>{
    console.log("Before removal: ",localStorage);
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("email")
    console.log("After removal: ",localStorage);
})

// Activity 5: Comparing LocalStorage and SessionStorage

console.log("Comparing LocalStorage and SessionStorage");

// Task 9:

function saveToBothStorages(key,value){
    localStorage.setItem(key,value);
    sessionStorage.setItem(key,value);

    console.log(`Saved to localStorage: ${key} = ${localStorage.getItem(key)}`);
  console.log(`Saved to sessionStorage: ${key} = ${sessionStorage.getItem(key)}`);
}

document.addEventListener("DOMContentLoaded",()=>{
    saveToBothStorages('key1','value1');
})

// Task 10:

function clearBothStorages() {
    console.log('Before clearing:');
    console.log('localStorage:', localStorage);
    console.log('sessionStorage:', sessionStorage);
  
   
    localStorage.clear();
    sessionStorage.clear();
  
    console.log('After clearing:');
    console.log('localStorage:', localStorage);
    console.log('sessionStorage:', sessionStorage);
  }
  
  // Example usage:
  document.addEventListener('DOMContentLoaded', () => {
    clearBothStorages();
  });
  



