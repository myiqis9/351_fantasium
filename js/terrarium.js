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

function draw() {
    if (load) {
        background(220);
        imageMode(CENTER);


        push();
        image(bgImage, width / 2 - 7, height / 2, 870, 532);
        pop();


        for (let item of terrarium) {
            push();
            image(item.img, item.x, item.y, 50, 50);
            pop();
        }

        checkHover();
        checkDragging();
    }
}

function saveTerrarium() {
    //update the player inventory with changes
    for(let item of player.terrarium) {
        for(let it of terrarium) {
            if(it.name == item.item) {
                item.x = it.x;
                item.y = it.y;
                break;
            }
        }
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