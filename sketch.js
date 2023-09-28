let zBereich;

function setup() {
  
  zBereich = createCanvas(windowWidth, windowHeight);
  zBereich.position(0, 0);
  zBereich.style('z-index', '1');
}

function draw() {
  noStroke();
  fill(255, 125, 0, 80);
  circle(mouseX, mouseY, 24);
}