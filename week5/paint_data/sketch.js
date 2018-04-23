// week 5
// saving/loading paint data
// based on example by Jon Beilin

var paintmarks = [];
var paintDataFile = 'paintData.json';
var red;
var size;

var img;


function preload() {
  img = loadImage('assets/peter.jpg');
}

function setup() {
  createCanvas(800, 1200);
  image(img, 0, 0);

}

function draw() {
  // background(255);
  size = random(30,40);
  red = random(100,200);
  for (var i = 0; i < paintmarks.length; i++) {
    paintmarks[i].display();
  }

  fill(0);
  textSize(30);
  text("Drag the mouse across the canvas to draw peter's hair.", 20, 60);
  fill(255);
  textSize(24);
  text("press 'S' to save a json file with the current paint data.", 50, 600);
  text("press 'L' to load a json file from your computer.", 50, 630);

}

function PaintMark(position,red,size) {
  this.position = position;
  this.red = red;
  this.size = size;

  this.display = function() {
    noStroke();
    fill(red, 55, 55, 85);
    ellipse(this.position.x, this.position.y, this.size, this.size);
  }

}

function mouseDragged() {
  paintmarks.push(new PaintMark(createVector(mouseX, mouseY),red,size));
}


//JSON!!!!

function keyPressed() {
  if (key === 'S') {
    savePaintData();
  }
  if (key === 'L') {
    loadPaintData();
  }
}

function savePaintData() {
  positionsToSave = [];
  for (var i = 0; i < paintmarks.length; i++) {
    positionsToSave.push(
      { 
        x: paintmarks[i].position.x, 
        y: paintmarks[i].position.y,
        c: paintmarks[i].red,
        s: paintmarks[i].size
      }
    );
  }
  saveJSON(positionsToSave, 'paintData.json');
}









//load JSON!!!

function loadPaintData() {
  loadJSON(paintDataFile, parsePaintData);
}

function parsePaintData(data) {
  paintmarks = [];

  for (var i = 0; i < data.length; i++) {
    paintmarks.push(new PaintMark(createVector(data[i].x, data[i].y),data[i].red,data[i].size));
  }
}