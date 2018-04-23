


var started = 0;
var sec = 0;
var min = 0;
var millisec = 0;
var start_time = 0;
var delay = 0;


var detailLvl = 1;

var toolActivated;
var toolHeld;

var hairBlower;
var scissor;
var grower;

var comb;


var selected;

var person;
var emotion = 0;

var face;
var play;
var playPressed;
var sample;
var question;
var title;


//makeup
var lineDraw=false;
var Size=30;
var shapeR=255;
var shapeG=0;
var shapeB=0;
var circleColors = [];
var Circle = [];
var circleSize = [];
var lineDrawing = [];
var linePovars = [];
var lineColors = [];

var makeups = [];
var makeupDataFile = 'makeupData.json';

function setup() {
  createCanvas(900, 550);
  background(255);

  play = loadImage("data/play.png");
  playPressed = loadImage("data/playPressed.png");

  sample = loadImage("data/sample.png");
  question = loadImage("data/question.png");
  face = loadImage("data/face.png");


  Circle= [];
  circleColors= [];
  circleSize= [];
  lineDrawing= [];
  linePovars= [];
  lineColors= [];
  noStroke();


  toolActivated = false;
  toolHeld = false;

  hairBlower = new Object(20, 50-20+50, "data/blower.png");
  scissor = new Object(20, 320, "data/scissors.png");
  comb = new Object(30, 200, "data/comb.png");
  grower = new Object(30, 200, "data/grower.png");


  person = new Person();
  person.init();
}

function draw() {
  background(255);
  
   person.update();
   hairBlower.update();
  scissor.update();
  grower.update();
  comb.update();

   person.display();
  hairBlower.display();
  scissor.display();
  comb.display();



  textSize(40);
  if (delay == 1) {//delay after a button press before it becomes resposive again
    if (millis() - start_time >= 400) {
      delay = 0;
    }
  }
  if (started == 0) {
    textSize(20);
    image(play, 200+width/2+30, 250+150);
    play.resize(100, 40);
    image(question, 100+width/2+80, 100);
    question.resize(200, 200);
  } else {

    image(playPressed, 200+width/2+30, 250+150);
    playPressed.resize(100, 40);
    image(sample, 100+width/2+80, 100);
    sample.resize(200, 200);

    textSize(20);
  }
  if (started == 1) {//keep track of time values after pressed only works for an hour
    millisec = (millis() - start_time) % 100;
    sec = ((millis() - start_time)/1000) % 10;
  }
  text(millisec, 220+100+width/2-20-5, 200+150);//display the times on the varerface
  text(sec, 180+100-10+width/2-20-5, 200+150);

  text(':', 210+100-10+width/2-20-5, 200+150);
  
  if (mouseIsPressed) {//check if mouse was pressed on the start button
    if (mouseX >= 680 && mouseX <= 776 && mouseY >= 404 && mouseY <= 430 && delay == 0) {
      started = -1*started + 1;
      start_time = millis();
      delay = 1;//make sure after button is pressed it cant be pressed for a certain amount of time
    }
  }


  if(mouseIsPressed) {
    if(!lineDraw) {

      Circle.push(createVector(mouseX,mouseY));
      circleColors.push(createVector(shapeR,shapeG,shapeB));
      var yui=Size;
      circleSize.push(yui);
    }

    else if(lineDraw) {
      if(Size<10) {


        lineDrawing.push(createVector(mouseX,mouseY));
        linePovars.push(createVector(pmouseX,pmouseY));
        lineColors.push(createVector(shapeR,shapeG,shapeB));
      }
    }
  }

  for(var i=0;i<Circle.length;i++) {
    var newVector= Circle[i];
    var newColor= circleColors[i];
    fill(newColor.x,newColor.y,newColor.z);
    var arraySize=circleSize[i];
    noStroke();
    ellipse(newVector.x,newVector.y,arraySize,arraySize);
  }

  for(var i=0;i<linePovars.length;i++) {
    var newLine= lineDrawing[i];
    var newLineP= linePovars[i];
    var newlineColors= lineColors[i];
    stroke(newlineColors.x,newlineColors.y,newlineColors.z);
    line(newLine.x,newLine.y,newLineP.x,newLineP.y);
  }
  fill(shapeR+30,shapeG+30,shapeB+30,200);
  noStroke();
  ellipse(mouseX,mouseY,Size,Size);
}

function keyTyped(){
  if(key == '['){
    Size-=10;
  }
  if(key == ']'){
    Size+=10;
  }
}

function keyPressed() {

if(key == 'Û'){
  console.log("1");
}
if(key == 'Ý'){
  console.log("2");
}
  console.log(keyTyped());

  if(key=='d'||key=='D'||keyCode==8) {
    noStroke();
    Circle = [];
    circleSize= [];
    linePovars= [];
    lineDrawing= [];
    circleColors= [];
    background(0);
  }
  if(key=='1') {
    shapeR=240;
    shapeG=142;
    shapeB=209;
    // "color": "no1",
  }
  if(key=='2') {
    shapeR=248;
    shapeG=73;
    shapeB=135;
    // "color": "no2",
  }
  if(key=='3') {
    shapeR=69;
    shapeG=0;
    shapeB=9;
    // "color": "no3",
  }
  
  if(key=='5') {
    lineDraw=!lineDraw;
  }
}