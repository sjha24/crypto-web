function convert_to_json(data){
    return data.json();
}
function showData(data){
    for(let i = 0 ; i<data.coins.length; i++){
        let singleData = data.coins[i];

        let T_head = document.getElementById('Search_data')

        let newRow = document.createElement('tr');
        let s_no = document.createElement('td');
        let logo = document.createElement('td');
        let name = document.createElement('td');
        let link = document.createElement('td');
        let img = document.createElement('img');
        let anchorTag = document.createElement('a');

        img.src = singleData.thumb;
        logo.appendChild(img)

        s_no.innerText = i+1;
        name.innerText = singleData.name + "(" + singleData.symbol+ ")";
        anchorTag.href = `detail.html?coin=${singleData.id}`
        anchorTag.innerText = 'Show More'
        link.appendChild(anchorTag);

        newRow.appendChild(s_no);
        newRow.appendChild(logo);
        newRow.appendChild(name);
        newRow.appendChild(link);

        T_head.appendChild(newRow);
        console.log(singleData);
    }
    // console.log(data);
}

let search = document.getElementById('search');
const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
let search_key = params.get("q");
search.value = search_key

fetch(`https://api.coingecko.com/api/v3/search?query=${search_key}`).then(convert_to_json).then(showData);


