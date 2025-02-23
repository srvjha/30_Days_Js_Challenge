// Task/Activites:

// Activity 1: Basic Event Handling

// Task: 1

let para = document.querySelector(".para");
console.log(para)
let btn = document.querySelector(".btn");
console.log(btn)
btn.style.cursor = "pointer";

let paragraph = `
    An Indian warship which was undergoing maintenance at the naval dockyard in Mumbai caught fire today. The navy said a junior sailor is missing and rescue teams are looking for him. All other personnel have been accounted for, the navy said.
    The fire broke out on board the multirole frigate INS Brahmaputra on Sunday evening while she was undergoing refit at the Mumbai naval dockyard, the navy said, adding the ship is lying on its side.
    `   

btn.addEventListener('click',()=>{
    let prevPara = para.textContent;
    para.textContent = paragraph;
    paragraph = prevPara
})

// Task 2:

let imageOne = document.querySelector(".image1");
let toggle = document.querySelector(".toggle");


toggle.addEventListener('click',()=>{
    if(imageOne.style.visibility === "visible"){
        imageOne.style.visibility = "hidden";
        visibility = false
    }
    else {

    imageOne.style.visibility = "visible"
    visibility = true;
    }
   
    
})

// Activity 2: Mouse Events

// Task 3:

let paraG = document.querySelector(".paragraph")

paraG.addEventListener("mouseover",()=>{
    paraG.style.backgroundColor = "yellow"
})

// Task 4:

paraG.addEventListener("mouseout",()=>{
    paraG.style.backgroundColor = "transparent"
})

// Activity 3: KeyBoard Events

// Task 5:

let input = document.querySelector("#input");

input.addEventListener("keydown",(event)=>{
    console.log(`KeyDown is pressed: ${event.key}`)
})

// Task 6:

input.addEventListener("keyup",(event)=>{
    console.log(`KeyUp is pressed: ${event.key}`)
})

// Activity 4: Form Events

// Task 7:


let form = document.querySelector("#form")

form.addEventListener("submit",(e)=>{
     e.preventDefault()
    // new form data

    let formData = new FormData(form);
    let formObj = {};
    formData.forEach((value, key) => formObj[key] = value);

    console.log("Form_Data: ",formObj)
})

// Task 8:

let selectedPlayer = document.querySelector(".selected-player")
let cricket = document.querySelector(".cricket");

cricket.addEventListener("change",(event)=>{
    console.log("Change Event: ",event);
    selectedPlayer.textContent = `Your Favourite Player is: ${event.target.value}`
    selectedPlayer.style.fontStyle = "italic"
})

// Activity 5: Event Delegation

// Task 9:

let itemList  = document.querySelector("#itemList");

itemList.addEventListener("click",(e)=>{
    if(e.target && e.target.nodeName === "LI"){
        console.log("Clicked Item Text: ", e.target.textContent)
    }
})

// Task 10:

let addMatch = document.querySelector(".add-match")
let match = document.querySelector("#match");
let count  = 3
addMatch.addEventListener("click", ()=>{
    console.log("Clicked Match")
    let newMatch  = document.createElement("li")
    newMatch.textContent = `Match ${count}`;
    match.appendChild(newMatch)
    count++;
})