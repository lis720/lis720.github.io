var sceneData;

var currentScene = 0;
var scenes = [];

function preload() {
  sceneData = loadJSON('scenes.json');
}

function setup() {
  createCanvas(800, 800);
  CreateScenesFromData(sceneData.scenes);
}

function draw() {
  background(0);
  scenes[currentScene].display();

  fill(255);
  textSize(24);
  text("press the option number to advance to the next hair style", 50, 700);
}

function CreateScenesFromData(data) {
  for (var i = 0; i < data.length; i++) {
    scenes.push(new Scene(data[i].sceneText, data[i].options, data[i].nextScenes, data[i].x, data[i].y,data[i].r,data[i].a));
  }
}

function Scene(sceneText, options, nextScenes,x,y,r,a) {
  this.sceneText = sceneText;
  this.options = options;
  this.nextScenes = nextScenes;
  this.x = x;
  this.y = y;
  this.r = r;
  this.a = a;

  this.display = function() {
    fill(random(this.r+100),random(this.x),random(this.y/2));
    textSize(32);
    text(this.sceneText, 50, 50);

    for (var i = 0; i < options.length; i++) {
      text('OPTION ' + (i + 1) + ': ' + this.options[i], 50, 90+ i * 50);
    }

    //scene here

    for (var i = 0; i < this.a+1; i++) {
    for (var j = 0; j < this.a; j++) {
   
  }

    noStroke(2);
    fill(245,224,80);
    quad(this.x+i*152+25,this.y+25,150+25,150+25,this.x+25,this.y+j*152+25,400+25,50+25);

    noStroke(2);
    fill(255,224,189);
    quad(300,300,500,300,600,500+25,200,600);
    fill(0);
    ellipse(350,400,20,20);
    ellipse(450,400,20,20);
   

  }


  //end
  
  }
}


function keyPressed() {
  var numberPressed = parseInt(key);
  var newScene = scenes[currentScene].nextScenes[numberPressed - 1];
  if (newScene !== undefined) {
    currentScene = newScene;
  }
}
