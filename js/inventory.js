var jsonItems, jsonPlayer;

fetch('../json/items.json')
.then((response) => response.json())
.then((json) => { jsonItems = json; done();})
.catch(error => console.error('Error:', error));

fetch('../json/player.json')
.then((response) => response.json())
.then((json) => { jsonPlayer = json; done();})
.catch(error => console.error('Error:', error));

var loaded = 0;
var player;
var inventoryEl = document.getElementById("inventory");

function done() {
    loaded++;
    if(loaded == 2) loadInventory();
}

function loadInventory() {
    console.log("Player: " + jsonPlayer.username);
    player = new Player(jsonPlayer);

    console.log(player.inventory);

    player.inventory.forEach((i) => {
        var item;

        for(j of jsonItems) {
            if(i.item === j.id) { item = j; break; }
        }

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
        itemEl.addEventListener("click", ()=>
        {
            console.log(item);
        });
    });
}