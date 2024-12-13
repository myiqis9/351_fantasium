let tileSize = 56;
let cols, rows;
let charX, charY;
let tileColors = [];
let moveCount = 0;
let maxMoves = 5;

let load = false;
let jsonItems;


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
    const canvas = createCanvas(675, 450);
    canvas.parent("exploration");

    //calculate the number of columns and rows based on canvas size
    cols = floor(width / tileSize);
    rows = floor(height / tileSize);

    //character's position to the middle of the grid
    charX = floor(cols / 2);
    charY = floor(rows / 2);

    let colorPool = [];
    for (let i = 0; i < 54; i++) colorPool.push(color(114, 154, 93)); //green (common) for 54/96 tiles
    for (let i = 0; i < 30; i++) colorPool.push(color(156, 195, 203)); //blue (rare) for 30/96 tiles
    for (let i = 0; i < 12; i++) colorPool.push(color(251, 187, 201)); //pink (srare) for 12/96 tiles

    shuffleArray(colorPool);

    tileColors = colorPool;

    fetch('../json/items.json')
      .then((response) => response.json())
      .then((json) => { jsonItems = json; })
      .catch(error => console.error('Error:', error));
  }
}

function draw() {
  if (load) {
    background(220);

    push();

    stroke(236, 243, 158);
    strokeWeight(4);
    square(20, 20, 60);
    //drawing the grid with tile colors
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let index = j * cols + i; //calculate the tile index
        if (tileColors[index]) {
          fill(tileColors[index]); //use the color from the shuffled array
        }
        rect(i * tileSize, j * tileSize, tileSize, tileSize);
      }
    }
    pop();

    push();
    //character (circle for now)
    noStroke();
    fill(60, 90, 52);
    ellipse(charX * tileSize + tileSize / 2, charY * tileSize + tileSize / 2, tileSize * 0.6);
    pop();
  }
}

function keyPressed() {
  //moving the character w/ arrow keys as long as they haven't used all their daily moves
  if (moveCount < maxMoves) {
    //tracking the last tile they were on
    let previousX = charX;
    let previousY = charY;

    if (keyCode === LEFT_ARROW) {
      charX = max(charX - 1, 0);
    } else if (keyCode === RIGHT_ARROW) {
      charX = min(charX + 1, cols - 1);
    } else if (keyCode === UP_ARROW) {
      charY = max(charY - 1, 0);
    } else if (keyCode === DOWN_ARROW) {
      charY = min(charY + 1, rows - 1);
    }

    //increase the movecount
    if (charX !== previousX || charY !== previousY) {
      moveCount++;
    }
  }

  //tiles change color when character passes over them
  let currentTileIndex = charY * cols + charX;
  tileColors[currentTileIndex] = color(253, 255, 228);
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = floor(random(i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}