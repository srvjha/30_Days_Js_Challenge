
let page = document.querySelector(".social-page");
document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    
   localStorage.setItem("username",username);
   localStorage.setItem("password",password);
   localStorage.setItem("fullname",fullname);
   localStorage.setItem("email",email);
   
   window.location.href = './page.html';
   console.log("Data: ",localStorage)
});


document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    
  if( localStorage.getItem("username") === username &&
      localStorage.getItem("password") === password)
      {
        window.location.href = './page.html';
      }
else{
    alert("Invalid username or password");
}
   

   console.log("Data: ",localStorage)
});



document.querySelector(".click-here-register").addEventListener('click',()=>{
    console.log("hello")
    document.getElementById('login-app').style.display = 'none';
    document.getElementById('register-app').style.display = "block"
})

document.querySelector(".click-here-login").addEventListener('click',()=>{
    console.log("hello")
    document.getElementById('login-app').style.display = 'block';
    document.getElementById('register-app').style.display = "none"
})
