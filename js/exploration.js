  let tileSize = 56;
  let cols, rows;
  let charX, charY;
  
  function setup() {
    const canvas = createCanvas(675, 450);
    canvas.parent("exploration");
    
    //calculate the number of columns and rows based on canvas size
    cols = floor(width / tileSize);
    rows = floor(height / tileSize);
  
    //character's position to the middle of the grid
    charX = floor(cols / 2);
    charY = floor(rows / 2);
  }
  
  function draw() {
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