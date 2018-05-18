var apt;
var ballerina;
var bgm;
var se;
var spr;
var colliders;
var items;
var boyr;
var boyl;
var boyd;
var boyu;
var home;
var obj;
var obj2;
var obj3;
var toilet;
var textColor = 40;
var score = 0;

var threshold = 8;

function Home(xvr,yvr) {
    this.pixelHome = loadImage('data/apt.png');
    this.posx = xvr;
    this.posy = yvr;
    this.r = 255;
    this.g = 255;
    this.b = 255;
}

Home.prototype = {
  constructor : Home,
    draw: function(){
      tint(this.r, this.g, this.b);
      image(this.pixelHome, this.posx, this.posy, 904, 712);
      noTint();
    }
}

function preload() {
  apt = loadImage("data/apt.png");
  boyr = loadAnimation("data/1r.png", "data/2r.png", "data/3r.png", "data/4r.png", "data/5r.png", "data/6r.png","data/7r.png");
  boyl = loadAnimation("data/1l.png", "data/2l.png", "data/3l.png", "data/4l.png", "data/5l.png", "data/6l.png","data/7l.png");
  boyd = loadAnimation("data/1d.png", "data/2d.png", "data/3d.png", "data/4d.png", "data/5d.png", "data/6d.png","data/7d.png");
  boyu = loadAnimation("data/1u.png", "data/2u.png", "data/3u.png", "data/4u.png", "data/5u.png", "data/6u.png","data/7u.png");
  boyi = loadAnimation("data/4d.png");
  fontRegular = loadFont("data/Armegoe.ttf");
}


function draw() {

  if(introMode){
      intro();
  }

  if(gameStarted){
    introMode = false;
    gameDraw();
    if(frameCount%threshold==0){
      timeCounter--;
    }
    fill(255);
    textSize(65);
    text(+timeCounter+"s",70,60);
    if(timeCounter==0){
      gameStarted = false;
      gameOverMode = true;
    }
  }

  if(gameOverMode){
    background(0);
    textSize(35);
    textAlign(CENTER);
    fill(255);

    text("No worries.",width/2,height/2);
    text("Mom is coming to clean your shit.",width/2,height/2-30);

  }
}


var introMode = true;
var slide = 1;
var introImages = [];
var gameStarted = false;
var gameOverMode = false;

var timeCounter = 120;

function intro(){
  var img = introImages[slide];
  background(img);
}

function keyPressed(){
  if(keyCode == 13){
    slide++;
    if(slide==5){
      introMode = false;
      gameStarted=true;
    }
  }
}


function setup() {
  createCanvas(904,712);
  home = new Home(width/2,height/2);


  for(var i=1;i<=4;i++){
    var img = loadImage(i+".png");
    img.resize(200,200);
    introImages[i] = img;
  }
  
  walls = new Group();
  spr = createSprite(width/2, height/2);
  spr.addAnimation("default", boyr);
  spr.addAnimation("left", boyl);
  spr.addAnimation("down", boyd);
  spr.addAnimation("up", boyu);
  spr.addAnimation("idle", boyi);
  
  
  //shit
  //done
  obj = createSprite(720,540);
  obj.addAnimation("default", "data/s1.png", "data/s2.png", "data/s3.png", "data/s4.png");
  //done
  obj2 = createSprite(460,300);
  obj2.addAnimation("default", "data/s1.png", "data/s2.png", "data/s3.png", "data/s4.png");
  //done
  obj3 = createSprite(620,620);
  obj3.addAnimation("default", "data/s1.png", "data/s2.png", "data/s3.png", "data/s4.png");
  


  //socks
  //done
  obj4 = createSprite(332,365);
  obj4.addAnimation("default", "data/w1.png", "data/w2.png", "data/w3.png", "data/w4.png");
  //done
  obj5 = createSprite(720,200);
  obj5.addAnimation("default", "data/w1.png", "data/w2.png", "data/w3.png", "data/w4.png");
  //done
  obj6 = createSprite(800,650);
  obj6.addAnimation("default", "data/w1.png", "data/w2.png", "data/w3.png", "data/w4.png");
  
  
  //food
  //done
  obj7 = createSprite(400,670);
  obj7.addAnimation("default", "data/p1.png", "data/p2.png", "data/p3.png", "data/p4.png");
  //done
  obj8 = createSprite(600,430);
  obj8.addAnimation("default", "data/p1.png", "data/p2.png", "data/p3.png", "data/p4.png");
  
  

  //book
  //done
  obj9 = createSprite(850,460);
  obj9.addAnimation("default", "data/b1.png", "data/b2.png", "data/b3.png", "data/b4.png");
  //done
  obj10 = createSprite(480,180);
  obj10.addAnimation("default", "data/b1.png", "data/b2.png", "data/b3.png", "data/b4.png");  
  //done
  obj11 = createSprite(538,580);
  obj11.addAnimation("default", "data/b1.png", "data/b2.png", "data/b3.png", "data/b4.png");
  

  //machines

  bed = createSprite(750,410);
  bed.addAnimation("default", "data/bed.png","data/bed.png","data/bed.png","data/bed.png");

  wash = createSprite(510,120);
  wash.addAnimation("default", "data/wash.png","data/wash.png","data/wash.png","data/wash.png");

  fri = createSprite(327,100);
  fri.addAnimation("default", "data/fri.png","data/fri.png","data/fri.png","data/fri.png");

  toilet = createSprite(840,120);
  toilet.addAnimation("default", "data/toilet.png","data/toilet.png","data/toilet.png","data/toilet.png");


  
  shelf = createSprite(330,625);
  shelf.addAnimation("default", "data/shelf.png","data/shelf.png","data/shelf.png","data/shelf.png");

  can = createSprite(190,648);
  can.addAnimation("default", "data/can.png","data/can.png","data/can.png","data/can.png");


  //apt
  outdoor = createSprite(140,347);
  outdoor.addAnimation("default", "data/outdoor.png","data/outdoor.png","data/outdoor.png","data/outdoor.png");
  indoor = createSprite(888,350);
  indoor.addAnimation("default", "data/indoor.png","data/indoor.png","data/indoor.png","data/indoor.png");


  
     //items group
  items = new Group();
  items.add(obj);
  items.add(obj2);
  items.add(obj3);
  items.add(obj4);
  items.add(obj5);
  items.add(obj6);
  items.add(obj7);
  items.add(obj8);
  items.add(obj9);
  items.add(obj10);
  items.add(obj11);

  items.add(bed);
  items.add(wash);
  items.add(fri);
  items.add(toilet);
  items.add(shelf);
  items.add(can);
  items.add(outdoor);
  items.add(indoor);

  //colliders



//1884 X 920
   var info = createSprite(0,0,580,670);
    info.shapeColor = color(20,20,20,0);

  var topwall = createSprite(0,0,1884,160);
    topwall.shapeColor = color(20,20,20,0);
 

  var leftwall = createSprite(0,0,30,1884);
    leftwall.shapeColor = color(20,20,20,0);

  
  var rightwall = createSprite(900,0,30,1884);
    rightwall.shapeColor = color(20,20,20,0);
  

  var bottomwall = createSprite(0,704,1884,30);
    bottomwall.shapeColor = color(20,20,20,0);

  var doorwall = createSprite(255,700,57,490);
    doorwall.shapeColor = color(20,20,20,0);

  
  var beddoor = createSprite(830,290,320,90);
    beddoor.shapeColor = color(20,20,20,0);

  // var bed = createSprite(750,410,120,100);
  //   bed.shapeColor = color(20,20,20,0);
  
  var table = createSprite(480,360,120,8);
    table.shapeColor = color(20,20,20,0);
   
  // var shelf = createSprite(310,800,130,500);
  //   shelf.shapeColor = color(20,20,20,0);

  var sofa = createSprite(545,540,150,26);
    sofa.shapeColor = color(20,20,20,0);
  
  
  
    walls.add(info);
    walls.add(topwall);
    walls.add(rightwall);
    walls.add(bottomwall);
    walls.add(leftwall);
    walls.add(doorwall);
    walls.add(beddoor);
    walls.add(bed);
    walls.add(table);
    walls.add(shelf);
    walls.add(sofa);
    walls.add(fri);
    walls.add(wash);

    walls.add(toilet);
    walls.add(can);
    walls.add(outdoor);
    walls.add(indoor);


}



function gameDraw(){
  spr.displace(obj);
  spr.displace(obj2);
  spr.displace(obj3);
  spr.displace(obj4);
  spr.displace(obj5);
  spr.displace(obj6);
  spr.displace(obj7);
  spr.displace(obj8);
  spr.displace(obj9);
  spr.displace(obj10);
  spr.displace(obj11);



  // //find the positions
  // fill(255,0,0)
  // ellipse(200, 400, 10, 10);



  //organize


  if(obj.overlap(toilet))
    obj.remove();

  if(obj2.overlap(toilet))
    obj2.remove();

  if(obj3.overlap(toilet))
    obj3.remove();

  if(obj4.overlap(wash))
    obj4.remove();

  if(obj5.overlap(wash))
    obj5.remove();

  if(obj6.overlap(wash))
    obj6.remove();

  if(obj7.overlap(fri))
    obj7.remove();

  if(obj8.overlap(fri))
    obj8.remove();

  if(obj9.overlap(shelf))
    obj9.remove();

  if(obj10.overlap(shelf))
    obj10.remove();

  if(obj11.overlap(shelf))
    obj11.remove();
  
  //background
  background('#663637');
  imageMode(CENTER);
  home.draw();
  
  //text
  noStroke();
  textSize(72);
  fill(textColor);
  textFont(fontRegular);
  textAlign(CENTER, CENTER);
  scoretext();
 
  
  //colliders
  spr.collide(walls);
  obj.collide(walls);
  obj2.collide(walls);
  obj3.collide(walls);
  obj4.collide(walls);
  obj5.collide(walls);
  obj6.collide(walls);
  obj7.collide(walls);
  obj8.collide(walls);
  obj9.collide(walls);
  obj10.collide(walls);
  obj11.collide(walls);
  // spr.overlap(items, getObj);
  
  //velocity-based movement with mouse
  spr.velocity.x = (mouseX-spr.position.x)*0.1
    // (mouseX-spr.position.x)*0.1;
  spr.velocity.y = (mouseY-spr.position.y)*0.1
    // (mouseY-spr.position.y)*0.1;
  
 
  //idle movement
  if ((mouseX-spr.position.x < .5 && mouseX-spr.position.x > -.5) && (mouseY-spr.position.y < .5 && mouseY-spr.position.y > -.5)){
    spr.changeAnimation('idle');
  }
  
  //up and down movement
  else if ((spr.velocity.x < 2 && spr.velocity.x > -2) && ((mouseY-spr.position.y)>0)){
    spr.changeAnimation('down');
  }
  else if (spr.velocity.x < 2 && spr.velocity.x > -2){
    spr.changeAnimation('up');
  }
  
  
  //left and right movement
  else if ((mouseX-spr.position.x)<0) {
    spr.changeAnimation('left');
  }
  else if ((mouseX-spr.position.x)>0) {
    spr.changeAnimation('default');
  }
  

  drawSprites();
}

//score add
// function getObj(spr, obj) {
//   obj.remove();
//   score += 1;
// }


//score text
function scoretext(){
   if (items.length > 0) {
    text(score + " clean", width/7, height/14);
  }
  else {
    text("You Win!", width/7+5, height/14+35);
    textSize(50);
    text("Refresh to Try Again!", width/7+10, height/14+70);
    noLoop();
  }

}