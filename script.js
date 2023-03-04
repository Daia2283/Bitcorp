window.onload = function(){
    let button = document.getElementById("btn");
    button.addEventListener("click", btn);
}

function myFunction() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    if (name != "" && email != "") {
       window.location.href= "bitcorp.html"; 
       alert('Login Success');
    } else {
        alert('Login failed check username or password');
    }
}