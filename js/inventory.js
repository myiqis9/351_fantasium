let jsonIt;

function loaded() {
    console.log(player);
    loadInventory();
}

fetch('../json/items.json')
    .then((response) => response.json())
    .then((json) => { jsonItems = json; })
    .catch(error => console.error('Error:', error));

var inventoryEl = document.getElementById("inventory");

function loadInventory() {
    console.log("Player: " + player.username);

    console.log(player.inventory);

    for(let i of player.inventory) {
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
        itemName.innerText = `(${i.amount}) ${item.name}`;
        itemImg.classList.add("item-name");

        //append image and name to item div
        itemEl.append(itemImg, itemName);

        //append to inventory
        inventoryEl.appendChild(itemEl);
        itemEl.addEventListener("click", () => {
            console.log(item);
        });
    }
}