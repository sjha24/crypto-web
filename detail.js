function convertToJSON(response) {
  return response.json();
}
function show_Info_Data(data) {
  let coin_image = document.getElementById("coin_img");
  let coin_Rank = document.getElementById("coin_rank");
  let coinName = document.getElementById("coin_name");
  let btn_description = document.getElementById("bicoin_description");

  btn_description.innerHTML = data.description.en;
  coin_image.src = data.image.large;
  coin_Rank.innerText = data.market_cap_rank;
  coinName.innerText = data.name;
  // console.log(data);
}

function showPriceData(data) {
  let bitcoin_price = document.getElementById("Bitcoin_price");
  let price_usd = document.getElementById("price_usd");
  let price_eur = document.getElementById("price_eur");

  bitcoin_price.innerText = data[coin_key].inr;
  price_usd.innerText = data[coin_key].usd;
  price_eur.innerText = data[coin_key].eur;

  console.log(data);
}

function show_market_Data(data) {
    showChart(data);
}

const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
let coin_key = params.get("coin");
// console.log(coin_key);
//information
fetch(
  `https://api.coingecko.com/api/v3/coins/${coin_key}?localization=false&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=true`
)
  .then(convertToJSON)
  .then(show_Info_Data);

//market chart--
fetch(
    `https://api.coingecko.com/api/v3/coins/${coin_key}/market_chart?vs_currency=inr&days=7&interval=daily`  
    //"https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=inr&days=14&interval=daily"
)
  .then(convertToJSON)
  .then(show_market_Data);

//price inr usd--
fetch(
  `https://api.coingecko.com/api/v3/simple/price?ids=${coin_key}&vs_currencies=inr%2Cusd%2Ceur`
)
  .then(convertToJSON)
  .then(showPriceData);

function convrt_UnixTime_format_To_HumanReadeble(timestamp){
 
let date = new Date(timestamp);
let date_string = date.getDate();
let month =  date.getMonth() + 1;

let formattedTime = date_string + ' - ' + month ;

return formattedTime;
}
  //chart---
function showChart(HistoryData) {

    let labels = [];
    let prices = [];
    for(let i = 0 ; i < HistoryData.prices.length; i += 1){
        let singlePrice = HistoryData.prices[i];
        let DateMonth = convrt_UnixTime_format_To_HumanReadeble(singlePrice[0]);
        labels.push(DateMonth);
        prices.push(singlePrice[1]);
    }
    // console.log(labels);
    // console.log(prices);

  const ctx = document.getElementById("myChart").getContext("2d");
  const myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "# of Votes",
          data: prices,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}
