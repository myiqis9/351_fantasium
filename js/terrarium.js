let load = false;
let terrarium = [];
let activeItem = null;
let jsonItems;


function loaded() {
    console.log(player);
    if(load) createPlayerTerrarium();
}

function setup() {
    const canvas = createCanvas(675, 500);
    canvas.parent("terrarium");

    fetch('../json/items.json')
    .then((response) => response.json())
    .then((json) => { jsonItems = json; load = true; loaded(); })
    .catch(error => console.error('Error:', error));
}

function draw() {
    if (load) {
        background(220);
        imageMode(CENTER);

        for (let item of terrarium) {
            push();
            image(item.img, item.x, item.y, 50, 50);
            pop();
        }
    }
}

function createPlayerTerrarium() {
    for (let item of player.terrarium) {
        let i;

        jsonItems.forEach(j => {
            if (item.item === j.name) { i = j; }
        });

        let image = loadImage(`../assets/images/items/${item.item}.png`);

        let obj = {
            id: i.id,
            name: i.name,
            requirements: i.requirements,
            upgrades_to: i.upgrades_to,
            x: item.x,
            y: item.y,
            img: image
        }

        terrarium.push(obj);
    }

}