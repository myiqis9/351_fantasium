let invload = false;
let tradeListEl = document.getElementById("trades");
let page = 1;
let jsonItems;

let example = {
    id: 0,
    creator: "test",
    creatoroffer: [1, 10, 10, 3]
}

let tradelist = [example];

function loaded() {
    if (invload) {
        console.log(player);
        loadTrades();
    }
}

fetch('../json/items.json')
    .then((response) => response.json())
    .then((json) => { jsonItems = json; invload = true; loaded(); })
    .catch(error => console.error('Error:', error));


// function tradeDisplay() {
//     let data = new FormData();
//     data.append('page', page);

//     fetch('trading.php', {
//         method: 'POST'
//     })
//         .then((response) => {
//             return response.json();
//         })
//         .then((response) => {
//             tradelist = response;
//             console.log(tradelist);
//             loadTrades();
//         })
// }

function loadTrades() {
    for (let trade of tradelist) {
        const tradeEl = document.createElement("div");
        tradeEl.classList.add("trade-container");

        const tradeBox = document.createElement("div");
        tradeBox.classList.add("trade-box", "trade-left", "eighty");

        for (let i of trade.creatoroffer) {
            let item;

            jsonItems.forEach(j => {
                if (i === j.id) { item = j; }
            });

            const itemEl = document.createElement("div");
            itemEl.classList.add("item-box");

            //create image and txt
            const itemImg = document.createElement("img");
            itemImg.src = `../assets/images/items/${item.name}.png`;
            itemImg.classList.add("item-image");
            const itemName = document.createElement("p");
            itemName.innerHTML = `${item.name}`;
            itemImg.classList.add("item-name");


            //append image and name to item div
            itemEl.append(itemImg, itemName);
            tradeBox.append(itemEl);
        }

        const tradeBtn = document.createElement("button");
        tradeBtn.innerHTML = `Offer on Trade`;
        tradeBtn.classList.add("trade-box", "trade-right", "twenty");

        tradeEl.append(tradeBox, tradeBtn);
        tradeListEl.append(tradeEl);
    }
}