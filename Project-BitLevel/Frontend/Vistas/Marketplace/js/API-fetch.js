

document.addEventListener("DOMContentLoaded", marketCapFetch(1));

const tableBody = document.getElementById('tableBody');

function marketCapFetch(pageNum){

    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page='+pageNum+'&sparkline=true&price_change_percentage=1h%2C24h%2C7d').then(response => {
        return response.json();
    }).then(data => {

        console.log(data.length); // TOTAL LENGTH OF THE JSON ARRAY

        console.log(data[0]); // INFO OF THE FIRST OBJECT BTC

        // console.log(data[0].image);


        for(i = 0; i <= data.length; i++){

            // CREATE TABLE ROW ELEMENT
            var tr = document.createElement("tr");

        
            // EMPTY TABLE DATA TD
            var td_empty = document.createElement("td");

            // RANK NUMBER 
            var td_rank = document.createElement("td");
                let td_rank_data = document.createTextNode(data[i].market_cap_rank);
                td_rank.appendChild(td_rank_data);

            // CRYPTO LOGO + NAME + TICKET
            var td_logoName = document.createElement("td");

                let logo = document.createElement("img");
                    logo.setAttribute("src", data[i].image);
                    logo.setAttribute("style","width: 20px; transform: translateY(4px);");

                let name = document.createElement("span");
                    let name_data = document.createTextNode(data[i].id);
                    name.appendChild(name_data);

                    td_logoName.appendChild(logo);
                    td_logoName.appendChild(name);

            // TICKET LABEL
            var td_ticket = document.createElement("td");
                let ticket_data = document.createTextNode((data[i].symbol).toUpperCase());
                td_ticket.appendChild(ticket_data);


            // CURRENT PRICE
            var td_price = document.createElement("td");
                let td_price_data = document.createTextNode(data[i].current_price + " $");
                td_price.appendChild(td_price_data);

            // PRICE CHANGE 1H PERCENTAGE
            var td_1h = document.createElement("td");
                let td_1h_data = document.createTextNode(((data[i].price_change_percentage_1h_in_currency).toFixed(2)) + "%");
                td_1h.appendChild(td_1h_data);

                if(String(data[i].price_change_percentage_1h_in_currency).charAt(0) == "-"){
                    td_1h.setAttribute("style","color: #e15241;")
                }else{
                    td_1h.setAttribute("style","color: #4eaf0a;")
                }

            // PRICE CHANGE 24H PERCENTAGE
            var td_24h = document.createElement("td");
                let td_24h_data = document.createTextNode(((data[i].price_change_percentage_24h_in_currency).toFixed(2)) + "%");
                td_24h.appendChild(td_24h_data);
            
                if(String(data[i].price_change_percentage_24h_in_currency).charAt(0) == "-"){
                    td_24h.setAttribute("style","color: #e15241;")
                }else{
                    td_24h.setAttribute("style","color: #4eaf0a;")
                }

            // PRICE CHANGE 7 DAYS PERCENTAGE
            var td_7d = document.createElement("td");
                let td_7d_data = document.createTextNode(((data[i].price_change_percentage_7d_in_currency).toFixed(2)) + "%");
                td_7d.appendChild(td_7d_data);

                if(String(data[i].price_change_percentage_7D_in_currency).charAt(0) == "-"){
                    td_7d.setAttribute("style","color: #e15241;")
                }else{
                    td_7d.setAttribute("style","color: #4eaf0a;")
                }

            // 24H TOTAL VOLUME 
            var td_24_vol = document.createElement("td");
                let td_24_vol_data = document.createTextNode(((data[i].total_volume).toLocaleString('en-US') +" $"));
                td_24_vol.appendChild(td_24_vol_data);

            // MARKET CAPITALIZATION
            var td_mrkt_cap = document.createElement("td");
                let td_mrkt_cap_data = document.createTextNode(((data[i].market_cap).toLocaleString('en-US') +" $"));
                td_mrkt_cap.appendChild(td_mrkt_cap_data);

            // ALL TIME HIGH
            var td_ath = document.createElement("td");
                let td_ath_data = document.createTextNode((data[i].ath).toLocaleString('en-US') +" $");
                td_ath.appendChild(td_ath_data);

            
            // APPEND ALL THE TABLE DATA TO THE NEW ROW
            tr.appendChild(td_empty); // POSSIBLE ENTRY FOR 'WATCHLIST" <td><img src="../../../Assets/Icons/star.svg" alt="star-icon"></td>
            tr.appendChild(td_rank);
            tr.appendChild(td_logoName);
            tr.appendChild(td_ticket);
            tr.appendChild(td_price);
            tr.appendChild(td_1h);
            tr.appendChild(td_24h);
            tr.appendChild(td_7d);
            tr.appendChild(td_24_vol);
            tr.appendChild(td_mrkt_cap);
            tr.appendChild(td_ath);

            var cryptoImage = data[i].image;
            var cryptoName = data[i].id;
            // ADD A EVENT FOR DISPLAY THE OPERATION OPTIONS FOR CRYPTO CLICKED
            tr.setAttribute("onclick", 'displayBuyOp(this)');
            tr.setAttribute("style", 'cursor:pointer;');

            // APPEND THE NEW ROW DATA TO THE MAIN TABLE
            tableBody.appendChild(tr)
        }

    })
}

// PAGINATION FUNCTIONS
const pages = document.querySelectorAll('.page__numbers');
// let num = pagNumeration[0].innerText;

console.log(pages[0].innerText);

pages.forEach(item => {
    item.addEventListener('click', () => {
        let pagNum = item.innerText;
        item.classList.add('activePage');

        tableBody.innerHTML = "";
        marketCapFetch(pagNum);

        window.scrollBy(0,-100);

        for(i=0; i<pages.length; i++){
            if(i != item.innerText){
                pages[i].classList.remove('activePage');
            }
        }
    })
})




// pages[2].addEventListener('click', () => {
//     let pagNum = pages[2].innerText;
//     pages[2].classList.add('active');

//     pages[0].classList.remove('active');
//     pages[1].classList.remove('active');
//     pages[3].classList.remove('active');
//     pages[4].classList.remove('active');
//     pages[5].classList.remove('active');

//     tableBody.innerHTML = "";
//     marketCapFetch(pagNum);

//     window.scrollBy(0,-100);

//     console.log(target);
// });