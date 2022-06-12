
// CHECK INPUTS FUNCTION
const form = document.getElementById("form");
const username = document.getElementById("username");
const mail = document.getElementById("mail");
const password = document.getElementById("password");

const inputs = document.querySelectorAll('#form input');

const regExp = {
    mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    username: /^[a-zA-Z0-9\_\-]{3,16}$/, // LETRAS, NUMEROS, GUION Y GUION BAJO
    password: /^.{4,20}$/ // 4 A 16 CARACTERES
}



const checkFormRegister = (e) => {

    switch (e.target.name){
        
        //EMAIL VALIDATION SECTION
        case("mail"):
            let formControlA = e.target.parentElement;

            if(regExp.mail.test(e.target.value)){
                formControlA.querySelector('p').innerText = "";


            } else if(e.target.value == ''){
                formControlA.querySelector('p').innerText = "Email cannot be blank";

            } else if(regExp.mail.test(e.target.value) == false){
                formControlA.querySelector('p').innerText = "Invalid email format";
            }
        break;
            
        //USERNAME VALIDATION SECTION
        case("username"):
            let formControlB = e.target.parentElement;

            if(regExp.username.test(e.target.value)){
                formControlB.querySelector('p').innerText = "";


            } else if(e.target.value == ''){
                formControlB.querySelector('p').innerText = "Username cannot be blank";

            } else if(regExp.username.test(e.target.value) == false){
                formControlB.querySelector('p').innerText = "Min length 3 and max length 16 \n Only letters, numbers, '-' and '_' allowed";
            }
        break;
        
        //PASSWORD VALIDATION SECTION
        case("password"):
            let formControlC = e.target.parentElement;

            if(regExp.password.test(e.target.value)){
                formControlC.querySelector('p').innerText = "";


            } else if(e.target.value == ''){
                formControlC.querySelector('p').innerText = "Password cannot be blank";

            } else if(regExp.password.test(e.target.value) == false){
                formControlC.querySelector('p').innerText = "Min length 4 and max length 20";
            }
        break;
    }
    
}

inputs.forEach((input) => {
    input.addEventListener('keyup', checkFormRegister);
    input.addEventListener('blur', checkFormRegister);
})


// REGISTER FUNCTION
function Register(){
    var sxmlhttp;
    sxmlhttp=new XMLHttpRequest();

    sxmlhttp.onreadystatechange = function() {
        if (sxmlhttp.readyState==4 && sxmlhttp.status==200) {
            alert(sxmlhttp.responseText)
        }
    }

    var mail = document.getElementById('mail').value;
    var passs = document.getElementById('password').value;
    var user = document.getElementById('username').value;


    sxmlhttp.open("POST","http://127.0.0.1:8080/BitLevel/Register",true);
    sxmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    sxmlhttp.send("mail="+mail+"&&password="+passs+"&&username="+user);

    
} 
