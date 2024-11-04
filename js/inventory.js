var jsonItems, jsonPlayer;

fetch('../json/items.json')
.then((response) => response.json())
.then((json) => { jsonItems = json;})
.catch(error => console.error('Error:', error));

fetch('../json/player.json')
.then((response) => response.json())
.then((json) => { jsonPlayer = json; loadInventory();})
.catch(error => console.error('Error:', error));

var player;
var inventoryEl = document.getElementById("inventory");

function loadInventory() {
    console.log("Player: " + jsonPlayer.username);
    player = new Player(jsonPlayer);

    console.log(player.inventory);

    player.inventory.forEach((i) => {
        let item = jsonItems.findIndex(it => it.id === i.id);
        console.log("creating " + item.name)
        const itemEl = document.createElement("div");
        itemEl.classList.add("item");
        inventoryEl.appendChild(itemEl);
        itemEl.addEventListener("click", ()=>
        {
            console.log(item);
        });
    });
}