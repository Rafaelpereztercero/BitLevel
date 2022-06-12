async function load() {
    if (document.cookie != "") {


        const cookie = getCookies()
        const resultado = JSON.parse(await getJson(cookie))
        console.log(resultado)
        document.getElementById("bit-log-buttons").classList.remove("log-buttons")
        document.getElementById("bit-log-buttons").classList.add("displayed")
        setImg(resultado.image, resultado)
        setUsername(resultado.username)
        setTransaction(resultado)
      
        if (resultado.premium =="false"){
           
            document.getElementById("premium-bttn").classList.remove("displayed");
            document.getElementById("premium-bttn").classList.add("premium-bttn");
        }
        amount = resultado.Fiat[0].amount
            if (amount == "") {
        
                document.getElementById("Fiat-balance").innerHTML = 0
        
            }
            else {
                document.getElementById("Fiat-balance").innerHTML = amount
            }
        await setCryptos(resultado.Crypto, resultado)

    }
    else {
       
        location.href="http://127.0.0.1:5500/Frontend/Vistas/Login/Html/loginForm.html"


    }
}
function renamePortfoilio() {
    text = prompt("Type a portfolio name")
    document.getElementById("P-title").innerHTML = text
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

function setTransaction(res) {


    if (!(res.Transaction)) {
        return
    }
    document.getElementById("transactions").innerHTML = ""

    for (x = 0; x < res.Transaction.length; x++) {
        coin = res.Transaction[x].transactionCoin
        coin = coin.toUpperCase()
        method = res.Transaction[x].transactionMethod
        date = res.Transaction[x].transactionDate
        if (res.Transaction[x].transactionDescription == "Buy") {


            document.getElementById("transactions").innerHTML += ` <!-- BUY Data row -->
            <div class="dataRow">
                  <img src="../../../Assets/Icons/Transaction/cart-buy.svg" alt="buy-icon" class="transactionIcon" />
                  <!-- Type + label + date container-->
                  <div class="typeInfo">
                      <!-- Tipo de operación (VALOR DINAMICO) -->
                      <h2 class="operationType">Buy</h2>
                      <!-- Etiqueta de divisa de transacción (VALOR DINAMICO) -->
                      <span>${coin}</span>
                      <!-- Fecha de transacción (VALOR DINAMICO) -->
                      <p>${date}</p>
                 </div> 

                  <!-- Origin transaction data -->
                  <div class="originInfo">
                      <!-- Etiqueta divisa (VALOR DINAMICO)-->
                      <h2>Me</h2>
                      <!-- concatenacion de texto (VALOR FIJO) -->
                      <p>${method}</p>
                      <!-- RESTA del valor de ORIGEN (VALOR DINAMICO) -->
                      <p>${res.Transaction[x].transactionBenefit} </p>
                  </div>

                  <!-- Destination transaction data -->
                  <div class="destInfo">
                      <!-- Etiqueta divisa (VALOR DINAMICO)-->
                      <h2>Me</h2>
                      <!-- concatenacion de texto (VALOR FIJO) -->
                      <p>wallet</p>
                      <!-- SUMA del valor de DESTINO (VALOR DINAMICO) -->
                      <p>+ ${res.Transaction[x].transactionAmount + " " + coin}</p>
                  </div>
              </div>
`

        }
        else if (res.Transaction[x].transactionDescription == "Sell") {
            document.getElementById("transactions").innerHTML += ` <div id="transactions">
            <div class="dataRow">
                <!-- Operation type icon -->
                <img src="../../../Assets/Icons/Transaction/cart-sell.svg" alt="sell-icon" class="transactionIcon" /> 
                <!-- Type + label + date container-->
                <div class="typeInfo">
                    <!-- Tipo de operación (VALOR DINAMICO) -->
                    <h2 class="operationType">Sell</h2>
                    <!-- Etiqueta de divisa de transacción (VALOR DINAMICO) -->
                    <span>${coin}</span>
                    <!-- Fecha de transacción (VALOR DINAMICO) -->
                    <p>${date}</p>
                </div> 

                <!-- Origin transaction data -->
               <div class="originInfo"> 
                    <!-- Etiqueta divisa (VALOR DINAMICO)-->
                    <h2>Me</h2>
                    <!-- concatenacion de texto (VALOR FIJO) -->
                    <p>${method}</p>
                    <!-- RESTA del valor de ORIGEN (VALOR DINAMICO) -->
                    <p>- ${res.Transaction[x].transactionAmount + " " + coin}</p>
                </div> 

                <!-- Destination transaction data -->
                <div class="destInfo">
                    <!-- Etiqueta divisa (VALOR DINAMICO)-->
                    <h2>Me</h2>
                    <!-- concatenacion de texto (VALOR FIJO) -->
                    <p>balance</p>
                    <!-- SUMA del valor de DESTINO (VALOR DINAMICO) -->
                    <p>+ ${res.Transaction[x].transactionBenefit}</p>
                </div>
            </div>`
        }
        else if (res.Transaction[x].transactionDescription == "Recived") {
            document.getElementById("transactions").innerHTML +=
                `  <div class="dataRow">
            <!-- Operation type icon -->
             <img src="../../../Assets/Icons/Transaction/users.svg" alt="send-icon" class="transactionIcon" /> 
            <!-- Type + label + date container-->
            <div class="typeInfo"> 
                <!-- Tipo de operación (VALOR DINAMICO) -->
                 <h2 class="operationType">Recived</h2> 
                <!-- Etiqueta de divisa de transacción (VALOR DINAMICO) -->
               <span>${coin}</span>
                <!-- Fecha de transacción (VALOR DINAMICO) -->
               <p>${date}</p> 
             </div> 

            <!-- Origin transaction data -->
             <div class="originInfo"> 
                <!-- Etiqueta divisa (VALOR DINAMICO)-->
                 <h2>${res.Transaction[x].transactionSource}</h2> 
                <!-- concatenacion de texto (VALOR FIJO) -->
                 <p>${method}</p> 
                <!-- RESTA del valor de ORIGEN (VALOR DINAMICO) -->
                <p>- ${res.Transaction[x].transactionAmount + " " + coin}</p> 
             </div> 

            <!-- Destination transaction data -->
             <div class="destInfo"> 
                <!-- Etiqueta divisa (VALOR DINAMICO)-->
                 <h2>Me</h2> 
                <!-- concatenacion de texto (VALOR FIJO) -->
                 <p>wallet</p> 
                <!-- SUMA del valor de DESTINO (VALOR DINAMICO) -->
                 <p>+ ${res.Transaction[x].transactionAmount + " " + coin}</p> 
             </div> 
         </div>  `
        }
        else if (res.Transaction[x].transactionDescription == "Send") {
            document.getElementById("transactions").innerHTML +=
                `  <div class="dataRow">
            <!-- Operation type icon -->
             <img src="../../../Assets/Icons/Transaction/send.svg" alt="send-icon" class="transactionIcon" /> 
            <!-- Type + label + date container-->
            <div class="typeInfo"> 
                <!-- Tipo de operación (VALOR DINAMICO) -->
                 <h2 class="operationType">Send</h2> 
                <!-- Etiqueta de divisa de transacción (VALOR DINAMICO) -->
               <span>${coin}</span>
                <!-- Fecha de transacción (VALOR DINAMICO) -->
               <p>${date}</p> 
             </div> 

            <!-- Origin transaction data -->
             <div class="originInfo"> 
                <!-- Etiqueta divisa (VALOR DINAMICO)-->
                 <h2>Me</h2> 
                <!-- concatenacion de texto (VALOR FIJO) -->
                 <p>${method}</p> 
                <!-- RESTA del valor de ORIGEN (VALOR DINAMICO) -->
                <p>- ${res.Transaction[x].transactionAmount + " " + coin}</p> 
             </div> 

            <!-- Destination transaction data -->
             <div class="destInfo"> 
                <!-- Etiqueta divisa (VALOR DINAMICO)-->
                 <h2>${res.Transaction[x].transactionDestination}</h2> 
                <!-- concatenacion de texto (VALOR FIJO) -->
                 <p>wallet</p> 
                <!-- SUMA del valor de DESTINO (VALOR DINAMICO) -->
                 <p>+ ${res.Transaction[x].transactionAmount + " " + coin}</p> 
             </div> 
         </div>  `
        }
        else if (res.Transaction[x].transactionDescription == "Daily Quest") {
            document.getElementById("transactions").innerHTML += ` <!-- BUY Data row -->
            <div class="dataRow">
                  <img src="../../../Assets/Icons/Transaction/gift.svg" alt="buy-icon" class="transactionIcon" />
                  <!-- Type + label + date container-->
                  <div class="typeInfo">
                      <!-- Tipo de operación (VALOR DINAMICO) -->
                      <h2 class="operationType">Daily</h2>
                      <!-- Etiqueta de divisa de transacción (VALOR DINAMICO) -->
                      <span>btl</span>
                      <!-- Fecha de transacción (VALOR DINAMICO) -->
                      <p>${date}</p>
                 </div> 

                  <!-- Origin transaction data -->
                  <div class="originInfo">
                      <!-- Etiqueta divisa (VALOR DINAMICO)-->
                      <h2>BL</h2>
                      <!-- concatenacion de texto (VALOR FIJO) -->
                      <p>${method}</p>
                      <!-- RESTA del valor de ORIGEN (VALOR DINAMICO) -->
                      <p>${res.Transaction[x].transactionBenefit} </p>
                  </div>

                  <!-- Destination transaction data -->
                  <div class="destInfo">
                      <!-- Etiqueta divisa (VALOR DINAMICO)-->
                      <h2>Me</h2>
                      <!-- concatenacion de texto (VALOR FIJO) -->
                      <p>wallet</p>
                      <!-- SUMA del valor de DESTINO (VALOR DINAMICO) -->
                      <p>+ ${res.Transaction[x].transactionAmount + " " + coin}</p>
                  </div>
              </div>
`
        }

        else if (res.Transaction[x].transactionDescription == "Deposit Fiat") {
            document.getElementById("transactions").innerHTML += ` <!-- DEPOSIT Data row -->
            <div class="dataRow">
                <!-- Operation type icon -->
                <img src="../../../Assets/Icons/Transaction/credit-card.svg" alt="credit-card-icon" class="transactionIcon" />
                <!-- Type + label + date container-->
                <div class="typeInfo">
                    <!-- Tipo de operación (VALOR DINAMICO) -->
                    <h2 class="operationType">Deposit</h2>
                    <!-- Etiqueta de divisa de transacción (VALOR DINAMICO) -->
                    <span>USD</span>
                    <!-- Fecha de transacción (VALOR DINAMICO) -->
                    <p>${date}</p>
                </div>

                <!-- Origin transaction data -->
                <div class="originInfo">
                    <!-- Etiqueta divisa (VALOR DINAMICO)-->
                    <h2>Me</h2>
                    <!-- concatenacion de texto (VALOR FIJO) -->
                    <p>${method}</p>
                    <!-- RESTA del valor de ORIGEN (VALOR DINAMICO) -->
                    <p>- ${res.Transaction[x].transactionAmount + " $"}</p>
                </div>

                <!-- Destination transaction data -->
                <div class="destInfo">
                    <!-- Etiqueta divisa (VALOR DINAMICO)-->
                    <h2>Me</h2>
                    <!-- concatenacion de texto (VALOR FIJO) -->
                    <p>balance</p>
                    <!-- SUMA del valor de DESTINO (VALOR DINAMICO) -->
                    <p>+ ${res.Transaction[x].transactionAmount + " $"}</p>
                </div>
            </div>`
        }
    }
}
function setUsername(username) {
    welcome = document.getElementById("bit-log-username").innerHTML = `<p>Welcome ${username}</p><br>`
    document.getElementById("P-title").innerHTML = username + "'s Portfolio"
}

function setFiat(ammount) {

}

async function setCryptos(jsonArr, resultado) {

    fiat = 0
    h = 0
    increment = 0
    total = 0
    if (jsonArr.length == 0) {
        document.getElementById("cryptoBalance").innerHTML = "NO CRYPTOS"
    }
    else {
        document.getElementById("cryptoBalance").innerHTML = ""
        for (var x = 0; x < jsonArr.length; x++) {
            if (jsonArr[x].tag == "btl") {
                document.getElementById("cryptoBalance").innerHTML += `<div class="dataRow">
                <div class="currencyInfo">
                    <div>
                        <img src="../../../Assets/Images/Logotypev2.png" alt="btl-icon" />
                        <h2>BTL BitLevelCoin</h2>
                    </div>
                    <!-- Futuro valor dinamico para actualizar dependiendo balance almacenado en idVault de usuario -->
                        <h3 id="coinAmmount">${jsonArr[x].amount}</h3>
                </div>
        
                <div class="currencyOptions">
                    <p onclick="showBuyViewFunction()">Buy</p>
                    <p onclick="showSellViewFunction()">Sell</p>
                    <p onclick="showSendViewFunction()">Send</p>
                </div>
            </div>`;
                total += jsonArr[x].amount * 0.10;
            }
            else if (jsonArr[x].tag != "undefined") {
                const url =
                    "https://api.coingecko.com/api/v3/search?query=" +
                    jsonArr[x].tag
                    ;
                const res = await fetch(url);
                const data = await res.json();

                a = data.symbol


                document.getElementById("cryptoBalance").innerHTML += `<div class="dataRow">
        <div class="currencyInfo">
            <div>
                <img src="${data.coins[0].thumb}" alt="${data.coins[0].symbol}-icon" />
                <h2>${data.coins[0].symbol} ${data.coins[0].name}</h2>
            </div>
            <!-- Futuro valor dinamico para actualizar dependiendo balance almacenado en idVault de usuario -->
                <h3 id="coinAmmount">${jsonArr[x].amount}</h3>
        </div>

        <div class="currencyOptions">
            <p onclick="showBuyViewFunction()">Buy</p>
            <p onclick="showSellViewFunction()">Sell</p>
            <p onclick="showSendViewFunction()">Send</p>
        </div>
    </div>`;
                const url2 = "https://api.coingecko.com/api/v3/coins/" + data.coins[0].name.toLowerCase() + "?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false"
                const res2 = await fetch(url2);
                const data2 = await res2.json();
                total += data2.market_data.current_price.bmd * jsonArr[x].amount
                increment += data2.market_data.price_change_24h * jsonArr[x].amount
                h += data2.market_data.price_change_percentage_24h

            }

        }

        if (resultado.Fiat[0].amount == "") {
            fiat = 0
        }
        else {
            fiat = resultado.Fiat[0].amount
        }


        document.getElementById("Fiat-balance").innerHTML = fiat
        document.getElementById("Total-balanace").innerHTML = "$ " + total.toFixed(4)

        document.getElementById("24h").innerHTML = "$ " + increment.toFixed(4)

        graphic(1, h)
    }

}

//GRAFICO 1 - DIFERENCIA DE DEPOSITO FIAT CON TOTAL DE FIAT+CRYPTO %
let number_1 = document.getElementById("graphicNumber_1");
let counter = 0;

setInterval(() => {
    if (counter == 32) { //VALOR DINÁMICO n %
        clearInterval();
    }
    else {
        counter++;
        number_1.innerHTML = counter + "%";
    }
}, 55);

function graphic(gr1, h) {
    let root = document.querySelector(':root');

    let rs = getComputedStyle(root);

    let graphicValue_1 = rs.getPropertyValue("--graphicValue_1");

    console.log(graphicValue_1);

    function setGraphicValue() {
        /* PARA REPRESENTAR UN PORCENTAJE (32% POR EJEMPLO) SE REALIZA EL SIGUIENTE CALCULO : TOTAL_DEL_TRAZO(472) - TOTAL_DEL_TRAZO(472) * PORCENTAJE(0.32) = 151,04 */
        root.style.setProperty('--graphicValue_1', 151); //VALOR DINAMICO DEL RECORRIDO DE LA ANIMACIÓN
    }

    //GRAFICO 2 - DIFERENCIA DEL TOTAL DEL BALANCE EN 24H EN %
    let number_2 = document.getElementById("graphicNumber_2");
    let counter2 = 0;
    let time = 0
    let iterator = 0
    setInterval(() => {
        if (h[0] == 0) {
            time = 60
            iterator = 0.1
        }
        if (h > 0 && h < 100) {
            time = 60
            iterator = 1
        }
        else if (h > 100 && h < 200) {
            time = 15
            iterator = 1
        }
        else if (h > 200) {
            time = 5
            iterator = 1
        }



        if (counter2 >= h.toFixed(1)) { //VALOR DINÁMICO n %
            clearInterval();
        }
        else {
            counter2 += iterator;
            number_2.innerHTML = counter2 + "%";
        }
    }, time);


    //let root = document.querySelector(':root');
    //let rs = getComputedStyle(root);

    let graphicValue_2 = rs.getPropertyValue("--graphicValue_2");

    console.log(graphicValue_2);


    /* PARA REPRESENTAR UN PORCENTAJE (54% POR EJEMPLO) SE REALIZA EL SIGUIENTE CALCULO : TOTAL_DEL_TRAZO(472) - TOTAL_DEL_TRAZO(472) * PORCENTAJE(0.54) = 217 */

    root.style.setProperty('--graphicValue_2', 472 - 472 * h.toFixed(1) / 100); //VALOR DINAMICO DEL RECORRIDO DE LA ANIMACIÓN

}
function resetValues() {
    load()
}

window.onload = function () {

    load()
}