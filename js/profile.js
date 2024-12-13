const userEl = document.getElementById("user");
const statsEl = document.getElementById("stats");
const tNameEl = document.getElementById("t_name");
const terrariumEl = document.getElementById("terrarium");

let load = false;
let jsonItems;
let terrarium = [];
let bgImage;

function loaded() {
    console.log(player);
    userEl.innerText = player.username;
    if (load) createPlayerTerrarium();
}

function setup() {
    const canvas = createCanvas(675, 500);
    canvas.parent("terrarium");

    bgImage = loadImage(`../assets/images/terrariumbg.png`);

    fetch('../json/items.json')
        .then((response) => response.json())
        .then((json) => { jsonItems = json; load = true; loaded(); })
        .catch(error => console.error('Error:', error));
}

function createPlayerTerrarium() {
    for (let item of player.terrarium) {
        let i;

        jsonItems.forEach(j => {
            if (item.item === j.name) { i = j; }
        });

        let image = loadImage(`../assets/images/items/${item.item}.png`);

        let obj = {
            name: i.name,
            x: item.x,
            y: item.y,
            img: image
        }
        terrarium.push(obj);
    }
}

function draw() {
    if (load) {
        background(220);
        imageMode(CENTER);
        rectMode(CENTER);

        push();
        image(bgImage, width / 2 - 7, height / 2, 870, 532);
        pop();


        for (let item of terrarium) {
            push();
            image(item.img, item.x, item.y, 95, 95);
            pop();
        }
    }
}

