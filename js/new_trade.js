let jsonItems;
let invload = false;

const inventoryEl = document.getElementById("inventory");
const tradeEl = document.getElementById("trade");
const tradeBtn = document.getElementById("submit");
tradeBtn.addEventListener(postTrade);

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
    console.log("Player: " + player.username);

    console.log(player.inventory);

    for (let i of player.inventory) {
        let item;

        jsonItems.forEach(j => {
            if (i.item === j.id) { item = j; }
        });

        console.log("creating " + item.name)
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
        itemAddBtn.addEventListener("click", () => {
            addToTrade(item);
            itemName.innerHTML = `(${i.amount}) ${item.name}`; //update display
        });

        //append image and name to item div
        itemEl.append(itemImg, itemName, itemAddBtn);

        //append to inventory
        inventoryEl.appendChild(itemEl);
    }
}

function addToTrade(item) {
    
}

function postTrade() {
    //posts data
    let data = new FormData();
    data.append('inventory', JSON.stringify(player.inventory));
    data.append('terrarium', JSON.stringify(player.terrarium));
}