let load = false;

function loaded() {
    console.log(player);
    load = true;
}

function setup() {
    if (load) {
        console.log(loggedIn);
        const canvas = createCanvas(675, 500);
        canvas.parent("terrarium");
    }
}

function draw() {
    if (load) {
      background(220);
      
    }
  }