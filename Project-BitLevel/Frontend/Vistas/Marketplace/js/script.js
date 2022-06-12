
//DEFS

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("tableContainer-02").classList.add("displayed");
});

async function Filter(text) {
    if (text == "") {
        try {
            document.getElementById("tableContainer").classList.remove("displayed")
            document.getElementById("tableContainer-02").classList.add("displayed")

        } catch {

        }

    } else {
        try {
            document.getElementById("tableContainer").classList.add("displayed")

            document.getElementById("tableContainer-02").classList.remove("displayed")
            // document.getElementById("tableContainer-02").classList.toggle("tableContainer")

            const url = "https://api.coingecko.com/api/v3/coins/" + text;
            const res = await fetch(url);
            const data = await res.json();
            // alert (data.id)

            console.log(data)

            const tableBody = document.getElementById('tableBody-02');

            tableBody.innerHTML = "";

            var tr = document.createElement("tr");

            // EMPTY TABLE DATA TD
            var td_empty = document.createElement("td");

            // RANK NUMBER 
            var td_rank = document.createElement("td");
            let td_rank_data = document.createTextNode(data.market_cap_rank);
            td_rank.appendChild(td_rank_data);

            // CRYPTO LOGO + NAME + TICKET
            var td_logoName = document.createElement("td");

            let logo = document.createElement("img");
            logo.setAttribute("src", data.image.thumb);
            logo.setAttribute("style", "width: 20px; transform: translateY(4px);");

            let name = document.createElement("span");
            let name_data = document.createTextNode(data.id);
            name.appendChild(name_data);

            td_logoName.appendChild(logo);
            td_logoName.appendChild(name);

            // TICKET LABEL
            var td_ticket = document.createElement("td");
            let ticket_data = document.createTextNode((data.symbol).toUpperCase());
            td_ticket.appendChild(ticket_data);


            // CURRENT PRICE
            var td_price = document.createElement("td");
            let td_price_data = document.createTextNode(data.market_data.current_price.usd + " $");
            td_price.appendChild(td_price_data);

            // PRICE CHANGE 1H PERCENTAGE
            var td_1h = document.createElement("td");
            let td_1h_data = document.createTextNode(((data.market_data.price_change_percentage_1h_in_currency.usd).toFixed(2)) + "%");
            td_1h.appendChild(td_1h_data);

            if (String(data.market_data.price_change_percentage_1h_in_currency.usd).charAt(0) == "-") {
                td_1h.setAttribute("style", "color: #e15241;")
            } else {
                td_1h.setAttribute("style", "color: #4eaf0a;")
            }

            // PRICE CHANGE 24H PERCENTAGE
            var td_24h = document.createElement("td");
            let td_24h_data = document.createTextNode(((data.market_data.price_change_percentage_24h_in_currency.usd).toFixed(2)) + "%");
            td_24h.appendChild(td_24h_data);

            if (String(data.market_data.price_change_percentage_24h_in_currency.usd).charAt(0) == "-") {
                td_24h.setAttribute("style", "color: #e15241;")
            } else {
                td_24h.setAttribute("style", "color: #4eaf0a;")
            }

            // PRICE CHANGE 7 DAYS PERCENTAGE
            var td_7d = document.createElement("td");
            let td_7d_data = document.createTextNode(((data.market_data.price_change_percentage_7d_in_currency.usd).toFixed(2)) + "%");
            td_7d.appendChild(td_7d_data);

            if (String(data.market_data.price_change_percentage_7d_in_currency.usd).charAt(0) == "-") {
                td_7d.setAttribute("style", "color: #e15241;")
            } else {
                td_7d.setAttribute("style", "color: #4eaf0a;")
            }

            // 24H TOTAL VOLUME 
            var td_24_vol = document.createElement("td");
            let td_24_vol_data = document.createTextNode(((data.market_data.total_volume.usd).toLocaleString('en-US') + " $"));
            td_24_vol.appendChild(td_24_vol_data);

            // MARKET CAPITALIZATION
            var td_mrkt_cap = document.createElement("td");
            let td_mrkt_cap_data = document.createTextNode(((data.market_data.market_cap.usd).toLocaleString('en-US') + " $"));
            td_mrkt_cap.appendChild(td_mrkt_cap_data);

            // ALL TIME HIGH
            var td_ath = document.createElement("td");
            let td_ath_data = document.createTextNode((data.market_data.ath.usd).toLocaleString('en-US') + " $");
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

            console.log(tr);

            // ADD EVENT LISTENER FOR DISPLAY THE OPERATIONS PANEL FOR THE CRYPTO CLICKED
            tr.setAttribute('onclick', 'displayBuyOp(this)');
            tr.setAttribute('style','cursor:pointer;');
            // APPEND THE NEW ROW DATA TO THE MAIN TABLE
            tableBody.appendChild(tr)

        } catch {

        }
    }
}
