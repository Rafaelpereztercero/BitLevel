//LOAD VIEW
// LOAD DATA
var resultado = ""
async function load() {
    if (document.cookie != "") {


        const cookie = getCookies()
        resultado = JSON.parse(await getJson(cookie))

        document.getElementById("bit-log-buttons").classList.remove("log-buttons")
        document.getElementById("bit-log-buttons").classList.add("displayed")
        setImg(resultado.image, resultado)
        setUsername(resultado.username)
        document.getElementById("user-fiat").innerText = resultado.Fiat[0].amount + " $";
        for (x = 0; x < resultado.Card.length; x++) {
            document.getElementById("card-select2").innerHTML += `<option value="#cardID">${resultado.username} **** ${resultado.Card[x].digits.substring(resultado.Card[x].digits.length - 4, resultado.Card[x].digits.length)}</option>`
        }
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
// DISPLAY BUY OPERATION PANEL
const display_buy_operation = document.getElementById('buy-operation');


const close_buy_panel = document.getElementById('close-buy-operation');

close_buy_panel.addEventListener('click', ()=>{
    display_buy_operation.classList.add('displayed');
    const coin_value = document.getElementById('coinEquivalent');
    buy_ammount.value = "";
    coin_value.innerText = "";
})


const pay_method = document.getElementById('pay-method');
const card_select = document.getElementById('card-select');
const fiat_info = document.getElementById('fiat-info');



pay_method.onchange = function() {
    
    if(pay_method.value == "Credit Card"){
        card_select.classList.remove('displayed');
        fiat_info.classList.add('displayed');
    }
    else{
        card_select.classList.add('displayed');
        fiat_info.classList.remove('displayed');
        fiat_info.classList.remove('displayed');
      
    }
    
    console.log(pay_method.value)
}


// CHECK INPUT VALUE MIN-MAX REGULAR EXPRESSION
const buy_ammount = document.getElementById('buy-ammount');
const warnings = document.getElementById('warnings');

const regExp = {ammount: /^[0-9.,]{2,6}$/}

const checkAmmount = (e) =>{
    if(regExp.ammount.test(e.target.value)){
        warnings.innerHTML = "";
    }
    else if(regExp.ammount.test(e.target.value) == false){
        warnings.innerHTML = "min 10$ and max 100,000$";
    }
}

buy_ammount.addEventListener('keyup', checkAmmount);
buy_ammount.addEventListener('blur', checkAmmount);



// DISPLAY PANEL
function displayBuyOp(e){

    var crypto =  e.getElementsByTagName('span')[0].innerText

    console.log(crypto);

    display_buy_operation.classList.remove('displayed');

    var url = "https://api.coingecko.com/api/v3/coins/" + crypto + "?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false"

    // OPERATION SELECTION BUTTONS
    const select_buy = document.getElementById('select-buy');
    const select_sell = document.getElementById('select-sell');
    const select_send = document.getElementById('select-send');

    // INPUTS
    const sell_ammount = document.getElementById('sell-ammount');
    const send_ammount = document.getElementById('send-ammount');

    // ELEMENTS TO CHANGE DEPENDING ON THE OPERATION SELECTED
    const op_selected = document.getElementById('op-selected'); //TITLE
    const op_question_txt = document.getElementById('op-question-txt'); //QUESTION TEXT

    const buy_btn = document.getElementById('buy-btn');
    const sell_btn = document.getElementById('sell-btn');
    const send_btn = document.getElementById('send-btn');

    const destination_info = document.getElementById('destination-info');
    const price = document.getElementById("price-coin");

    // BUY OPERATION SELECTED 
    select_buy.addEventListener('click', ()=>{
        op_selected.innerText = "Buy";
        op_question_txt.innerText = " buy?";

        buy_ammount.classList.remove('displayed');

        sell_ammount.classList.add('displayed');
        send_ammount.classList.add('displayed');

        const pay_method = document.getElementById('pay-method');
        pay_method.classList.remove('displayed');

        const pay_method_container = document.getElementById('pay-method-container');
        pay_method_container.classList.remove('displayed');

        const coin_value = document.getElementById('coinEquivalent');
        coin_value.innerText = "";

        const user_crypto_info = document.getElementById('user-crypto-info');
        user_crypto_info.classList.add('displayed');


        // const buy_btn = document.getElementById('buy-btn');
        // const sell_btn = document.getElementById('sell-btn');
        // const send_btn = document.getElementById('send-btn');

        buy_btn.classList.remove('displayed');
        sell_btn.classList.add('displayed');
        send_btn.classList.add('displayed');

        destination_info.classList.add('displayed');
    })

    // SELL OPERATION SELECTED 
    select_sell.addEventListener('click', ()=>{
        op_selected.innerText = "Sell";
        op_question_txt.innerText = " sell?";

        sell_ammount.classList.remove('displayed');

        buy_ammount.classList.add('displayed');
        send_ammount.classList.add('displayed');

        const pay_method_container = document.getElementById('pay-method-container');
        pay_method_container.classList.add('displayed');

        const pay_method = document.getElementById('pay-method');
        pay_method.classList.add('displayed');

        const coin_value = document.getElementById('coinEquivalent');
        coin_value.innerText = "";

        const user_crypto_info = document.getElementById('user-crypto-info');
        user_crypto_info.classList.remove('displayed');

        const userBalance = document.getElementById("user-balance");
        const cryptoTag = document.getElementById("name-coin");
        document.getElementById("crypto-ticket"). innerText = cryptoTag.innerText

        balance = 0
        for (x = 0; x< resultado.Crypto.length;x++){
            if (resultado.Crypto[x].tag == cryptoTag.innerText.toLowerCase() ){
              
                balance = resultado.Crypto[x].amount
            }
        }
        userBalance.innerText = balance

        // const buy_btn = document.getElementById('buy-btn');
        // const sell_btn = document.getElementById('sell-btn');
        // const send_btn = document.getElementById('send-btn');

        buy_btn.classList.add('displayed');
        sell_btn.classList.remove('displayed');
        send_btn.classList.add('displayed');

        destination_info.classList.add('displayed');
    })

    // SEND OPERATION SELECTED 
    select_send.addEventListener('click', ()=>{
        op_selected.innerText = "Send";
        op_question_txt.innerText = " send?";

        send_ammount.classList.add('displayed');

        sell_ammount.classList.remove('displayed');
        buy_ammount.classList.add('displayed');

        const pay_method_container = document.getElementById('pay-method-container');
        pay_method_container.classList.add('displayed');

        const pay_method = document.getElementById('pay-method');
        pay_method.classList.add('displayed');

        const coin_value = document.getElementById('coinEquivalent');
        coin_value.innerText = "";

        const user_crypto_info = document.getElementById('user-crypto-info');
        user_crypto_info.classList.add('displayed');


        // const buy_btn = document.getElementById('buy-btn');
        // const sell_btn = document.getElementById('sell-btn');
        // const send_btn = document.getElementById('send-btn');

        buy_btn.classList.add('displayed');
        sell_btn.classList.add('displayed');
        send_btn.classList.remove('displayed');

        destination_info.classList.remove('displayed');
    })

    fetch(url).then(response => {
         return response.json();
    }).then(data => {
        console.log(data);
        price.innerHTML = data.market_data.current_price.usd+" $";
        const buy_ammount = document.getElementById('buy-ammount');
        const sell_ammount = document.getElementById('sell-ammount');
        const send_ammount = document.getElementById('send-ammount');

         const coin_value = document.getElementById('coinEquivalent');
         const crypto_logo = document.getElementById('crypto-logo');
         const crypto_name = document.getElementById('name-coin');

         crypto_logo.setAttribute('src', data.image.thumb);
         crypto_name.innerText = data.symbol;

        // BUY OPERATION INPUT
         buy_ammount.oninput = ()=>{
            let in_ammount = buy_ammount.value;
            let price = data.market_data.current_price.usd;
            let x = ((in_ammount * 1) / price).toFixed(8);
            // console.log(in_ammount);
            // console.log(price);
            console.log(x);
            let symbol = data.symbol;
            coin_value.innerHTML = x +" "+ symbol;
         }

         // SELL OPERATION INPUT
         sell_ammount.oninput = ()=>{
            let in_crypto = sell_ammount.value;
            let sell_price = data.market_data.current_price.usd;
            let y = (in_crypto * sell_price).toFixed(2); // PRICE SOLD

            console.log(y);
            let symbol = data.symbol;
            coin_value.innerHTML = y +" $";
         }
     })
}
function comprarCrypto() {
    var price = document.getElementById('price-coin').innerText
    price = price.substring(0,price.length-2)
    var amount =  document.getElementById('coinEquivalent').innerText
    var newAmount = ""
    url = "http://127.0.0.1:8080/BitLevel/BuyCrypto"
    for (x=0;x<amount.length;x++){
        if (amount.charAt(x) == " "){
            x = 100
        }
        else {
            newAmount += amount.charAt(x)
        }
    }
 
        
    price= parseFloat(price)
       
   
    if (document.getElementById("pay-method").value == "Credit Card"){
       conf = ""
}else { conf = "fiatBuy" }
    var sxmlhttp;
    sxmlhttp = new XMLHttpRequest();
    sxmlhttp.onreadystatechange = function () {
        if (sxmlhttp.readyState == 4 && sxmlhttp.status == 200) {
            alert(sxmlhttp.responseText)
            
        }
    }

    sxmlhttp.open("POST", "http://127.0.0.1:8080/BitLevel/BuyCrypto", true);
    sxmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    sxmlhttp.send("idVault=" + resultado.idVault + "&priceCrypto=" + price + "&&amount=" +  newAmount + "&&crypto=" + document.getElementById('name-coin').innerText + "&&conf=" + conf );
}

function venderCrypto() {
    var price = document.getElementById('price-coin').innerText
    price = price.substring(0,price.length-2)
    var amount =  document.getElementById('sell-ammount').value
     tag = document.getElementById('crypto-ticket').innerText
     tag = tag.toLowerCase()
    var sxmlhttp;
    
    sxmlhttp = new XMLHttpRequest();

    sxmlhttp.onreadystatechange = function () {
        if (sxmlhttp.readyState == 4 && sxmlhttp.status == 200) {
            alert(sxmlhttp.responseText)
            
        }
    }

    sxmlhttp.open("POST", "http://127.0.0.1:8080/BitLevel/SellCrypto", true);
    sxmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    sxmlhttp.send("idVault=" + resultado.idVault + "&priceCrypto=" + price + "&&amount=" +  amount + "&&crypto=" + tag);
}
function sendCrypto(){
    var price = document.getElementById('price-coin').innerText
    price = price.substring(0,price.length-2)
    var amount =  document.getElementById('sell-ammount').value
     tag = document.getElementById('name-coin').innerText
     tag = tag.toLowerCase()
    var sxmlhttp;
    
    sxmlhttp = new XMLHttpRequest();

    sxmlhttp.onreadystatechange = function () {
        if (sxmlhttp.readyState == 4 && sxmlhttp.status == 200) {
            
            alert(sxmlhttp.responseText)
        }
    }

    sxmlhttp.open("POST", "http://127.0.0.1:8080/BitLevel/SendCrypto", true);
    sxmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    sxmlhttp.send("idVault=" + resultado.idVault + "&priceCrypto=" + price + "&&amount=" +  amount + "&&crypto=" + tag + "&&username=" + document.getElementById("destination-usr").value);
}