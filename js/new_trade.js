let jsonItems;
let invload = false;
let trade = [];

const inventoryEl = document.getElementById("inventory");
const tradeEl = document.getElementById("trade");
const tradeBtn = document.getElementById("submit");
tradeBtn.addEventListener('click', postTrade);

function loaded() {
    if (invload) {
        console.log(player);
        loadInventory();
    }
}

fetch('../json/items.json')
    .then((response) => response.json())
    .then((json) => { jsonItems = json; invload = true; loaded(); })
    .catch(error => console.error('Error:', error));


function loadInventory() {
    inventoryEl.innerHTML = ""; //empty display whenever called

    for (let i of player.inventory) {
        let item;

        jsonItems.forEach(j => {
            if (i.item === j.id) { item = j; }
        });

        console.log("creating " + item.name);
        const itemEl = document.createElement("div");
        itemEl.classList.add("item-box");

        //create image and txt
        const itemImg = document.createElement("img");
        itemImg.src = `../assets/images/items/${item.name}.png`;
        itemImg.classList.add("item-image");
        const itemName = document.createElement("p");
        itemName.innerHTML = `(${i.amount}) ${item.name}`;
        itemImg.classList.add("item-name");
        const itemAddBtn = document.createElement("button");
        itemAddBtn.innerHTML = `Add to Trade`;
        itemAddBtn.classList.add("small-button");
        itemAddBtn.addEventListener("click", () => {
            if (trade.length < 4) {
                addToTrade(item);
                player.moveToTrade(item, itemEl);
                itemName.innerHTML = `(${i.amount}) ${item.name}`; //update display
            }
        });

        //append image and name to item div
        itemEl.append(itemImg, itemName, itemAddBtn);

        //append to inventory
        inventoryEl.appendChild(itemEl);
    }
}

function addToTrade(item) {
    console.log("moving " + item.name + " to trade");
    const itemEl = document.createElement("div");
    itemEl.classList.add("item-box");

    //create image and txt
    const itemImg = document.createElement("img");
    itemImg.src = `../assets/images/items/${item.name}.png`;
    itemImg.classList.add("small-item-image");
    const itemName = document.createElement("p");
    itemName.innerHTML = item.name;
    itemImg.classList.add("item-name");
    const itemAddBtn = document.createElement("button");
    itemAddBtn.innerHTML = `Remove`;
    itemAddBtn.classList.add("small-button");
    //move item back to inv
    itemAddBtn.addEventListener("click", () => {
        player.addToInventory(item.id, 1);
        loadInventory(); //update display
        itemEl.remove();
    });

    itemEl.append(itemImg, itemName, itemAddBtn);
    tradeEl.appendChild(itemEl);
}

function postTrade() {
    //posts data
    let data = new FormData();
    data.append('inventory', JSON.stringify(player.inventory));
    data.append('trade', JSON.stringify(trade));

    //fetch
    fetch('new_trade.php', {
        method: 'POST',
        body: data
    })
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            console.log(response);
            if (response.message == 'success') {
                tradeEl.innerHTML = `Your trade has been successfully created!`;
                inventoryEl.innerHTML = "";
                tradeBtn.innerText = '';
                tradeBtn.disabled = true;
            }
        })
}