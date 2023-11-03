let x, x1, x2, x3, x4;
let y, y1, y2, y3, y4; 
let scale;
let r, r1, r2, r3, r4;
let g, g1, g2, g3, g4;
let b, b1, b2, b3, b4;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  x1 = windowWidth/4;
  y1 = windowHeight/4;
  x2 = windowWidth/4*3;
  y2 = windowHeight/4;
  x3 = windowWidth/4;
  y3 = windowHeight/4*3;
  x4 = windowWidth/4*3;
  y4 = windowHeight/4*3;
  x = [x1, x2, x3, x4];
  y = [y1, y2, y3, y4];
  scale = 10;
  noStroke();
  r1 = 255; g1 = 0; b1 = 0;
  r2 = 0; g2 = 255; b2 = 0;
  r3 = 0; g3 = 0; b3 = 255;
  r4 = 255; g4 = 255; b4= 255;
  r = [r1, r2, r3, r4];
  g = [g1, g2, g3, g4];
  b = [b1, b2, b3, b4];
}

function draw() {
  for (var i = 0; i < x.length; i++) { 
  r[i] += random(-2, 2);
  g[i] += random(-2, 2);
  b[i] += random(-2, 2);
  r[i] = constrain(r[i], 0, 255)
  g[i] = constrain(g[i], 0, 255);
  b[i] = constrain(b[i], 0, 255);
  fill(r[i], g[i], b[i]);
  circle(x[i], y[i], scale);
  x[i] += random(2*scale) -1*scale;
  y[i] += random(2*scale) -1*scale;
  x[i] = constrain(x[i], 0, windowWidth);
  y[i] = constrain(y[i], 0, windowHeight);
  
}}