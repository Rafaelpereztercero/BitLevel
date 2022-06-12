
// DISPLAY BUY OPERATION PANEL
const display_buy_operation = document.getElementById('buy-operation');


const close_buy_panel = document.getElementById('close-buy-operation');

close_buy_panel.addEventListener('click', ()=>{
    display_buy_operation.classList.add('displayed');
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
        fiat_info.classList.remove('fiat-info');
    }
    
    console.log(pay_method.value)
}



function displayBuyOp(){
    display_buy_operation.classList.remove('displayed');
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


// CONVERT THE INPUT AMMOUT TO EQUIVALENT COIN AMMOUNT

buy_ammount.addEventListener('click', ()=>{
    let name = "bitcoin";

    const url = "https://api.coingecko.com/api/v3/coins/" + name + "?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false"

    fetch(url).then(response => {
        return response.json();
    }).then(data => {

        console.log(data);

        const buy_ammount = document.getElementById('buy-ammount');
        const coin_value = document.getElementById('coinEquivalent');

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

    })
})

