function convertToJSON(response){
    return response.json();
}
function showData(data){
    let B_data            = document.getElementById('bitcoin_price_Container');
    let ethereumData      = document.getElementById('ethereum_price_Container');
    let teatherData       = document.getElementById('tether_price_Container');
    let cardanoData       = document.getElementById('cardano_price_Container');
    let solanaData        = document.getElementById('solana_price_Container');
    let polkadoData       = document.getElementById('polkadot_price_Container');
    let dogeData          = document.getElementById('dogecoin_price_Container');
    let uniswapData       = document.getElementById('uniswap_price_Container');
    let chainlinkData     = document.getElementById('chainlink_price_Container');
    let coronosData       = document.getElementById('cronos_price_Container');
    let stellarData       = document.getElementById('Stellar_price_Container');
    let polygonData       = document.getElementById('polygon_price_Container');


    B_data.innerText            = data.bitcoin.inr;
    ethereumData.innerText      = data.ethereum.inr;
    teatherData.innerText       = data.tether.inr;
    cardanoData.innerText       = data.cardano.inr;
    solanaData.innerText        = data.solana.inr;
    polkadoData.innerText       = data.polkadot.inr;
    dogeData.innerText          = data.dogecoin.inr;
    polygonData.innerText       = data.polygon.inr;
    uniswapData.innerText       = data.uniswap.inr;
    chainlinkData.innerText     = data.chainlink.inr;
    coronosData.innerText       = data.cronos.inr;
    stellarData.innerText       = data.stellar.inr;
}
fetch('https://api.coingecko.com/api/v3/simple/price?ids=dogecoin%2Cpolkadot%2Csolana%2Ccardano%2Ctether%2Cethereum%2Cbitcoin%2Cuniswap%2Cchainlink%2Ccronos%2Cstellar&vs_currencies=inr').then(convertToJSON).then(showData);
