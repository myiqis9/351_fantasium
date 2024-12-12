function loaded() {
    console.log(player);
}

function setup() {
    if (load) {
        console.log(loggedIn);
        const canvas = createCanvas(675, 500);
        canvas.parent("terrarium");
    }
}