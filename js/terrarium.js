let load = false;
let jsonItems;

//p5 vars
let terrarium = [];
let bgImage = null;
let activeItem = null;
let activeDragged = false;

//document vars
const terrName = document.getElementById('terra_name');


function loaded() {
    console.log(player);
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
    //set terrarium name
    terrName.value = player.terr_name;
    let count = 0;

    for (let item of player.terrarium) {
        let i;

        jsonItems.forEach(j => {
            if (item.item === j.name) { i = j; }
        });

        let image = loadImage(`../assets/images/items/${item.item}.png`);

        let obj = {
            num: count,
            id: i.id,
            name: i.name,
            requirements: i.requirements,
            upgrades_to: i.upgrades_to,
            x: item.x,
            y: item.y,
            img: image,
            mouseHover: false
        }
        count++;
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
            if(activeItem !== null && item.num == activeItem.num) {
                stroke('rgb(100%, 0%, 10%)');
                strokeWeight(4);
                rect(square(item.x, item.y, 110));
            }
            image(item.img, item.x, item.y, 95, 95);
            pop();
        }

        checkHover();
        checkDragging();
    }
}

function checkHover() {
    for (let item of terrarium) {
        item.mouseHover = mouseIsInside(item) ? true : false;
    }
}

function mouseIsInside(obj) {
    let d = dist(mouseX, mouseY, obj.x, obj.y);
    if (d < 95 / 2) return true;
    else return false;
}

function checkDragging() {
    if (activeItem !== null && activeDragged == true) {
        activeItem.x = mouseX;
        activeItem.y = mouseY;

        activeItem.x = constrain(activeItem.x, 0, width);
        activeItem.y = constrain(activeItem.y, 0, height);
    }
}

function mousePressed() {
    for(let item of terrarium) {
        if(item.mouseHover) {
            activeItem = item;
            console.log(item.name);
            break;
        }
    }
}

function mouseDragged() {
    if(activeItem !== null) activeDragged = true;
}

function mouseReleased() {
    if(activeItem !== null && activeDragged) activeDragged = false;
}

function saveTerrarium() {
    //update the player inventory with changes
    player.terrarium = [];

    for (let it of terrarium) {
        let obj = {item: it.name, x: it.x, y: it.y};
        player.terrarium.push(obj);
    }

    //form
    let data = new FormData();
    data.append('terr_name', terrName.value);
    data.append('terrarium', JSON.stringify(player.terrarium));

    //send form
    fetch('terrarium.php', {
        method: 'POST',
        body: data
    })
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            if (response.message == 'success') {
                console.log('Successfully updated terrarium.')
            }
        })
}