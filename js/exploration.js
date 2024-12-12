let tileSize = 56;
let cols, rows;
let charX, charY;
let load = false;
let jsonItems;

fetch('../json/items.json')
  .then((response) => response.json())
  .then((json) => { jsonItems = json; })
  .catch(error => console.error('Error:', error));


function loaded() {
  console.log(player);
  load = true;
}

//randomizer
function getRarity() {
  var r = Math.floor(Math.random() * 100);
  console.log(r);
  //if (r < 7) return 'urare';
  if (r < 21) return 'srare';
  if (r < 42) return 'rare';
  return 'common';
}

function explore() {
  let biomeItems = [];
  let count = 0;

  jsonItems.forEach(i => {
    if (i.biome == player.biome) biomeItems.push(i);
  });

  for (let i = 0; count < 3; i++) {
    let r = getRarity();
    let n = Math.floor(Math.random() * biomeItems.length);
    if (biomeItems[n].rarity == r) {
      console.log(`adding ${biomeItems[n].name} to inventory`)
      player.addToInventory(biomeItems[n].id, 1);
      count++;
    }
  }
  console.log(player.inventory);
  updatePlayerInventory();
}

function updatePlayerInventory() {
  let data = new FormData();
  data.append('inventory', JSON.stringify(player.inventory));

  fetch('exploration.php', {
    method: 'POST',
    body: data
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      if (response.message == 'success') {
        console.log('Successfully updated inventory.')
      }
    })
}

function setup() {
  if (load) {
    console.log(loggedIn);
    const canvas = createCanvas(675, 500);
    canvas.parent("exploration");

    //calculate the number of columns and rows based on canvas size
    cols = floor(width / tileSize);
    rows = floor(height / tileSize);

    //character's position to the middle of the grid
    charX = floor(cols / 2);
    charY = floor(rows / 2);
  }
}

function draw() {
  if (load) {
    background(220);

    //grid
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        fill((i + j) % 2 === 0 ? 255 : 200); //checkerboard pattern
        rect(i * tileSize, j * tileSize, tileSize, tileSize);
      }
    }

    //character (circle for now)
    fill(0, 100, 255);
    ellipse(charX * tileSize + tileSize / 2, charY * tileSize + tileSize / 2, tileSize * 0.6);
  }
}

function keyPressed() {
  //moving the character w/ arrow keys
  if (keyCode === LEFT_ARROW) {
    charX = max(charX - 1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    charX = min(charX + 1, cols - 1);
  } else if (keyCode === UP_ARROW) {
    charY = max(charY - 1, 0);
  } else if (keyCode === DOWN_ARROW) {
    charY = min(charY + 1, rows - 1);
  }
}