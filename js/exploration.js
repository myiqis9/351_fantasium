function setup() {
    const canvas = createCanvas(675, 500);
    canvas.parent("exploration");
  }
  
  function draw() {
    background(220);
    ellipse(width / 2, height / 2, 100, 100);
  }