//  Tasks/Acitvites:

// Activity 1: Selecting and Manipulating Elements

//! Task 1:

let idSelector = document.getElementById("tech-stack")
// idSelector.textContent = "Frontend Developer"
idSelector.innerHTML = `<strong>${"Full Stack Developer."}</strong>`

//! Task 2:

let profile  = document.getElementsByClassName("profile");
console.log(profile)
profile[0].style.backgroundColor  = "orange"

let salary = document.querySelector(".salary");
console.log(salary)
// salary.style.backgroundColor = "lightgreen"

// Activity 2: Creating and Appending Elements

//! Task 3:

let about  = document.querySelector(".about-me");
let aboutUs = document.createElement("div");
aboutUs.classList.add("about-us")


let aboutMe = document.createElement("span");
aboutMe.innerHTML = `<strong>About Me: </strong>`
aboutUs.textContent = "Working as Full Stack Developer having experience to build web application from scratch to finalized!";

about.appendChild(aboutMe)
about.appendChild(aboutUs)

//! Task 4:

let uiElem = document.querySelector('ul');
let li1 = document.createElement('li');
let li2 = document.createElement('li');
let li3 = document.createElement('li');

li1.textContent = "Cricket Analysis.";
li2.textContent = "Watching Movies and Series.";
li3.textContent = "Psychology.";

uiElem.appendChild(li1);
uiElem.appendChild(li2);
uiElem.appendChild(li3);

// Activity 3: Removing Elements

//! Task 5:

// let uIElem = document.querySelector('ul');
// uIElem.remove()

//! Task 6:
uiElem.lastChild.remove()


// Activity 4: Modifying Attributes and Classes

//! Task 7:

let imgElem = document.querySelector("img");
imgElem.src = "https://c.ndtvimg.com/2024-05/vvh7tl9g_rohit-sharma-pc-afp_625x300_03_May_24.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605"
imgElem.alt = "Rohit Sharma"

//! Task 8: 

profile[0].style.backgroundColor = ""

// Activity 5: Event Handling

//! Task 9:

let btn = document.querySelector("button");

btn.addEventListener('click',()=>{
    let abt = document.querySelector(".about-us")
    console.log(abt)
    abt.textContent = "Full Stack Dev with quick adaptibility."
})


//! Task 10:
let abt = document.querySelector(".about-us")
abt.style.border = "1px solid black"

abt.addEventListener('mouseover',(e)=>{
    console.log(e)
    abt.style.border = "4px solid blue"
})

abt.addEventListener('mouseout', () => {
    abt.style.border = "1px solid black";
});