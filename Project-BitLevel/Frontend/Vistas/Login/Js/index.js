
// CHECK INPUTS 
const form = document.getElementById("form");
const user = document.getElementById("user");
const password = document.getElementById("password");

const inputs = document.querySelectorAll('#form input');

const regExp = {
    //mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    username: /^[a-zA-Z0-9\_\-\.\@]{3,30}$/, // LETRAS, NUMEROS, GUION Y GUION BAJO
    password: /^.{4,20}$/ // 4 A 16 CARACTERES
}



const checkFormRegister = (e) => {

    switch (e.target.name){
        
        //EMAIL OR USERNAME VALIDATION SECTION
        case("user"):
            let formControlA = e.target.parentElement;

            if(regExp.username.test(e.target.value)){
                formControlA.querySelector('p').innerText = "";


            } else if(e.target.value == ''){
                formControlA.querySelector('p').innerText = "Email or Username cannot be blank";

            } else if(regExp.username.test(e.target.value) == false){
                formControlA.querySelector('p').innerText = "Min length 3 characters";
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



function sendOTP() {
    document.getElementById("usr").classList.add("displayed");
    document.getElementById("pass").classList.add("displayed");
    document.getElementById("nextStep").classList.add("displayed");
    
    document.getElementById("code").classList.remove("displayed")
    document.getElementById("send").classList.remove("displayed")
    var sxmlhttp;
    sxmlhttp = new XMLHttpRequest();

    sxmlhttp.onreadystatechange = function () {
        if (sxmlhttp.readyState == 4 && sxmlhttp.status == 200) {
            alert(sxmlhttp.responseText)
        }
    }

    sxmlhttp.open("POST", "http://127.0.0.1:8080/BitLevel/SendOtp", true);
    sxmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    sxmlhttp.send("user=" + document.getElementById('user').value + "&&password=" + document.getElementById('password').value);
}

function login() {

    var sxmlhttp;
    sxmlhttp = new XMLHttpRequest();

    sxmlhttp.onreadystatechange = function () {
        if (sxmlhttp.readyState == 4 && sxmlhttp.status == 200) {
            if (sxmlhttp.responseText == "Username or password not matching"){
                alert("Username or password not matching")
            }
            else {
                alert ("Login success")
            }
            const token = JSON.parse(sxmlhttp.responseText)
            crear(token.token[0].token)
            location.href="http://127.0.0.1:5500/Frontend/Vistas/Marketplace/html/Marketplace.html"
            
        }
    }

    sxmlhttp.open("POST", "http://127.0.0.1:8080/BitLevel/Login", true);
    sxmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    sxmlhttp.send("user=" + document.getElementById('user').value + "&&password=" + document.getElementById('password').value + "&&OTP=" + document.getElementById('otp').value);
}

function loadResetView() {
    document.getElementById("bit-title").innerHTML = "PASSOWRD RESET"
    //document.getElementById("bit-view-1").classList.add("displayed")
    document.getElementById("bit-view-1").classList.add("displayed")
    document.getElementById("bit-view-2").classList.add("displayed")
    document.getElementById("phase1").classList.remove("displayed")
    document.getElementById("part1").classList.remove("displayed")
    document.getElementById("part1").classList.add("container-form-btn")
}

function loadFirstPhase() {
    var sxmlhttp;
    validator = 0
    sxmlhttp = new XMLHttpRequest();

    sxmlhttp.onreadystatechange = function () {
        if (sxmlhttp.readyState == 4 && sxmlhttp.status == 200) {
            alert(sxmlhttp.responseText)
            if (sxmlhttp.responseText == "USERNAME NOT FOUNDED") {

                window.location.reload();

            }
            else {
                document.getElementById("phase1").classList.add("displayed")
                document.getElementById("part1").classList.add("displayed")
                document.getElementById("part1").classList.remove("container-form-btn")
                document.getElementById("phase2").classList.remove("displayed")
                document.getElementById("part2").classList.remove("displayed")
                document.getElementById("part2").classList.add("container-form-btn")
            }
        }

    }


    sxmlhttp.open("POST", "http://127.0.0.1:8080/BitLevel/ResetPassword", true);
    sxmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    sxmlhttp.send("user2=" + document.getElementById('user2').value + "&&password=" + document.getElementById('password2').value + "&needOtp=1");

}

function loadSecondPhase() {
    document.getElementById("phase2").classList.add("displayed")
    document.getElementById("part2").classList.add("displayed")
    document.getElementById("part2").classList.remove("container-form-btn")

    document.getElementById("phase3").classList.remove("displayed")
    document.getElementById("part3").classList.remove("displayed")
    document.getElementById("part3").classList.add("container-form-btn")


}

function resetPassword() {
    var sxmlhttp;
    sxmlhttp = new XMLHttpRequest();

    sxmlhttp.onreadystatechange = function () {
        if (sxmlhttp.readyState == 4 && sxmlhttp.status == 200) {
            alert(sxmlhttp.responseText)
        }
    }

    sxmlhttp.open("POST", "http://127.0.0.1:8080/BitLevel/ResetPassword", true);
    sxmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    sxmlhttp.send("user2=" + document.getElementById('user2').value + "&&password2=" + document.getElementById('password2').value + "&&newPassword=" + document.getElementById('password3').value + "&&otp2=" + document.getElementById('otp2').value);

}

