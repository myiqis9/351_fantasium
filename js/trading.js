let load = false;
let tradelist = [];
let tradeListEl = document.getElementById("trades");

function loaded() {
    if (load) {
        console.log(player);
        loadTrades();
    }
}

fetch('trading.php?action=load')
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        tradelist = response;
    })

function loadTrades() {
    for (let trade of tradelist) {
        const tradeEl = document.createElement("div");
        tradeEl.classList.add("trade-container");

        const tradeBox = document.createElement("div");
        tradeBox.classList.add("trade-box trade-left eighty");

        for (let item of trade.creatoroffer) {
            const itemEl = document.createElement("div");
            itemEl.classList.add("item-box");

            //create image and txt
            const itemImg = document.createElement("img");
            itemImg.src = `../assets/images/items/${item.name}.png`;
            itemImg.classList.add("item-image");
            const itemName = document.createElement("p");
            itemName.innerHTML = `(${item.name}`;
            itemImg.classList.add("item-name");


            //append image and name to item div
            itemEl.append(itemImg, itemName, itemAddBtn);
            tradeBox.append(itemEl);
        }

        const tradeBtn = document.createElement("button");
        tradeBtn.classList.add("trade-box trade-right twenty");

        tradeEl.append(tradeBox, tradeBtn);
        tradeListEl.append(tradeEl);
    }
}