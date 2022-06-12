resultado = ""
async function load() {
    if (document.cookie != "") {


        const cookie = getCookies()
        resultado = JSON.parse(await getJson(cookie))
        console.log(resultado)
        
        document.getElementById("bit-log-buttons").classList.remove("log-buttons")
        document.getElementById("bit-log-buttons").classList.add("displayed")
        if (resultado.image != "undefined"){
        document.getElementById("userProfile").src = resultado.image
        document.getElementById("bit-profileImg").src = resultado.image
        }
        if (resultado.premium =="false"){     
            document.getElementById("premium-bttn").classList.remove("displayed");
            document.getElementById("premium-bttn").classList.add("premium-bttn");
        }
        setMail(resultado.mail)
        setImg(resultado.image, resultado)
        setUsername(resultado.username)
        setCards(resultado.Card)
        setInput(resultado.premium)

        // GET NEW IMG
        const inputFile = document.getElementById("input-file");

        inputFile.onchange = function (evt) {
            var tgt = evt.target || window.event.srcElement, files = tgt.files;
            if (FileReader && files && files.length) {
                var fr = new FileReader();
                fr.onload = function () {
                    document.getElementById('userProfile').src = fr.result
                  

                    changeImage(resultado, fr.result)

                };
                fr.readAsDataURL(files[0]);
            }
        };


    } else {
        location.href="http://127.0.0.1:5500/Frontend/Vistas/Login/Html/loginForm.html"
    }

}
function createCard(){
    var sxmlhttp;
    sxmlhttp = new XMLHttpRequest();

    sxmlhttp.onreadystatechange = function () {
        if (sxmlhttp.readyState == 4 && sxmlhttp.status == 200) {
            alert(sxmlhttp.responseText)
        }
        if ( sxmlhttp.readyState == 4  || sxmlhttp.status == 400){
            alert(sxmlhttp.responseText)
        }
       
    }

    sxmlhttp.open("POST", "http://127.0.0.1:8080/BitLevel/CreateCard", true);
    sxmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    sxmlhttp.send("idVault=" + resultado.idVault + "&cardHolder=" + document.getElementById("card-holder").value + "&cardDigits=" + document.getElementById("card-digits").value + "&cardCvc=" + document.getElementById("card-cvc").value + "&cardExp=" + document.getElementById("card-expYear").value+"-"+ document.getElementById("card-expMonth").value+"-00" );

}
function setCards(cards) {
    if (cards.length == 0) {
        return
    }
    for (x = 0; x < cards.length; x++) {
        digits = cards[x].digits
        document.getElementById("card-container").innerHTML += ` <br><br><div class="card-container">
<div class="image">
    <div>
        <img src="../../../Assets/Images/card-chip-img.png" alt="chip-icon" />
        <img src="../../../Assets/Images/card-contactless-img.png" alt="concactless-icon" />
    </div>
    <div>
        <img src="../../../Assets/Images/Logotypev2.png" alt="bitlevel-logo" />
        <img src="../../../Assets/Images/card-visa-img.png" alt="visa-logo" id="visa-logo"/>
    </div>
</div>

<div class="user-info">
    <h2>****${digits.substring(digits.length - 4, digits.length)}</h2>
    <h2>${cards[x].cardHolder}</h2>
    </div></div>
<img  id="trash" src="../../../Assets/Images/trash.png" alt="trash-icon" />

`
    }
}
function eliminar() {

    document.cookie = "sessionStorage=;max-age=0;path=/";

    window.location.reload();

}
function getJson(cookie) {

    const promise = new Promise((resolve, reject) => {

        sxmlhttp = new XMLHttpRequest()
        sxmlhttp.onload = function () {
            if (sxmlhttp.status == 200) {

                resolve(sxmlhttp.responseText)
            }
            else {
                reject()
            }

        }

        sxmlhttp.open("POST", "http://127.0.0.1:8080/BitLevel/loadView", true)
        sxmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
        sxmlhttp.send("token=" + cookie)
    })
    return promise
}

function getCookies() {
    done = 0;
    loadDatta = ""
    for (var x = 0; x < document.cookie.length; x++) {


        if (done == 0 && document.cookie[x] == "=") {
            done = 1

        }
        else if (done == 1) {
            loadDatta += document.cookie[x]

        }

    }
    return loadDatta
}
function setWelcome(username) {

}
function setInput(premium) {
    if (premium == "true") {

        document.getElementById("tpye-input").innerHTML = `<input type="file" accept=".png, .jpg, .jpeg, .gif" id="input-file" />`
    } else {
        document.getElementById("tpye-input").innerHTML = `<input type="file" accept=".png, .jpg, .jpeg" id="input-file" />`
    }
}
function setImg(url, res) {

   
    if (res.premium == "true") {
        document.getElementById("div-status").innerHTML +=
            `<img id="user-level"src="https://cdn.discordapp.com/attachments/956503026493947944/982291774749937675/unknown.png" alt="config-icon" />`
        return
    }
    else if (res.admin == "false") {
        document.getElementById("div-status").innerHTML +=
            ` <img id="user-level"src="../../../Assets/Icons/config-icon.svg" alt="config-icon" />`
        return
    }

    document.getElementById("div-status").classList.add("displayed")


}
function changeImage(result, img) {

    var sxmlhttp
    sxmlhttp = new XMLHttpRequest()

    sxmlhttp.onreadystatechange = function () {
        if (sxmlhttp.readyState == 4 && sxmlhttp.status == 200) {
            alert(sxmlhttp.responseText)
        }
    }

    img = encodeURIComponent(img)
    console.log(img)
    sxmlhttp.open("POST", "http://127.0.0.1:8080/BitLevel/ResetImage", true)
    sxmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    sxmlhttp.send("idVault=" + result.idVault + "&image=" + img)



}
function ChangePassword() {

    var sxmlhttp;
    sxmlhttp = new XMLHttpRequest();

    sxmlhttp.onreadystatechange = function () {
        if (sxmlhttp.readyState == 4 && sxmlhttp.status == 200) {
            alert(sxmlhttp.responseText)
        }
    }

    sxmlhttp.open("POST", "http://127.0.0.1:8080/BitLevel/ResetPassword", true);
    sxmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    sxmlhttp.send("mail=" + document.getElementById("mail-password").value + "&&password=" + document.getElementById("old-password").value + "&&newPassword=" + document.getElementById("new-password").value);



}
function ChangeEmail() {

    var sxmlhttp;
    sxmlhttp = new XMLHttpRequest();

    sxmlhttp.onreadystatechange = function () {
        if (sxmlhttp.readyState == 4 && sxmlhttp.status == 200) {
            alert(sxmlhttp.responseText)
        }
    }

    sxmlhttp.open("POST", "http://127.0.0.1:8080/BitLevel/Reset2Fa", true);
    sxmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    sxmlhttp.send("mail=" + document.getElementById("mail-old").value + "&&password=" + document.getElementById("current-password").value + "&&newMail=" + document.getElementById("mail-change").value);



}

function setUsername(username) {
    welcome = document.getElementById("bit-log-username").innerHTML = `<p>Welcome ${username}</p><br>`


}
function setMail(mail) {
    document.getElementById("mailUser").innerHTML = mail
}


window.onload = function () {

    load()
}