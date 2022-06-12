async function load() {
    if (document.cookie != "") {


        const cookie = getCookies()
        resultado = JSON.parse(await getJson(cookie))

        document.getElementById("bit-log-buttons").classList.remove("log-buttons")
        document.getElementById("bit-log-buttons").classList.add("displayed")
        setImg(resultado.image, resultado)
        setUsername(resultado.username)
        if (resultado.premium =="false"){
            document.getElementById("premium-bttn").classList.remove("displayed");
            document.getElementById("premium-bttn").classList.add("premium-bttn");
        }




    }
    else {

        document.getElementById("div-status").classList.add("displayed")
        document.getElementById("bit-logout").classList.add("displayed")
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

function setImg(url, res) {

    if (url != "undefined") {
        var profileImg = document.getElementById("bit-profileImg")
        profileImg.src = url
    }
    if (res.premium == "true") {
        document.getElementById("div-status").innerHTML +=
            `<img id="user-level"src="https://cdn.discordapp.com/attachments/956503026493947944/982291774749937675/unknown.png" alt="config-icon" />`
        return
    }
    else if (res.admin == "true") {
        document.getElementById("div-status").innerHTML +=
            ` <img id="user-level"src="../../../Assets/Icons/config-icon.svg" alt="config-icon" />`
        return
    }

    document.getElementById("div-status").classList.add("displayed")


}
function setUsername(username) {
    welcome = document.getElementById("bit-log-username").innerHTML = `<p>Welcome ${username}</p><br>`

}


window.onload = function () {
   load()
}

