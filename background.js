let bg;
let img;

function setup() {
  bg = loadImage('assets/bowl.png');
  createCanvas(windowWidth, windowHeight);
  
  img=loadImage('assets/chopsticks.png');
}

function draw() {
  background(182, 255, 169);
image(bg, 100,-200, 1500,1500);
  
   image(img, mouseX, mouseY, 500, 500);
  
}