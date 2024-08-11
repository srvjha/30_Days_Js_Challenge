let profile = document.querySelector(".profile-details");
console.log(localStorage)
let username = document.createElement("div");
username.textContent = localStorage.getItem("username");
username.classList.add("profile-username");


let email = document.createElement("div");
email.textContent = localStorage.getItem("email");
email.classList.add("profile-email");


let profilePhoto = document.createAttribute("img");
profilePhoto.src = "./images/profile.png";


profile.appendChild(profilePhoto);
profile.appendChild(username);
profile.appendChild(email);



