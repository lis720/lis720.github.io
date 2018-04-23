var x = 500;
var y = 300;
var i, n, j, m, b;
var r=15;
var angleX = 50;
var angleY = 75;
var s1 = 0;
var s2 = 0;

var p1Up = false;
var p1Down = false;
var p2Up = false;
var p2Down = false;


var easy=30;//7.5 to Infinity easy


var bricks = [];


var leftpaddle;
var rightpaddle;
var bg;
var ball;
var sand;
var star;
var leftwon;
var rightwon;


function preload(){

leftpaddle = loadImage('data/leftpaddle.png');
  rightpaddle = loadImage('data/rightpaddle.png');
  bg = loadImage('data/bg.png');
  ball= loadImage('data/ball.png');
  sand= loadImage('data/sand.png');
  star= loadImage('data/star.png');
  leftwon= loadImage('data/leftwon.png');
  rightwon= loadImage('data/rightwon.png');
}



function setup() {

  fill(255,0,0);
  createCanvas(1000, 600);



  for (var b=0; b<20; b++) {
    bricks.push(new brickgone());
  }


  i = 15;
  j = 975;
  n = 270;
  m = 270;

  
}

function draw() {
  move();
  cleantrails();
  notifications();
  breakout();
  brickgone();
  bouncing();
  paddleMove();
}


function paddleMove() {
  if (p1Up ) {
    n=n-6;
  }
  if (p1Down) {
    n=n+6;
  } 
  if (p2Up ) {
    m=m-6;
  } 
  if (p2Down) {
    m=m+6;
  }
}

function keyPressed() {
  if (key === 'W') {
    p1Up = true;
  }
  if (key === 'S') {
    p1Down = true;
  }

  // note - we aren't checking for keyCode anymore.
  if (keyCode === UP_ARROW) {
    p2Up = true;
  }
  if (keyCode === DOWN_ARROW) {
    p2Down = true;
  }
}

function keyReleased() {
  if (key === 'W') {
    p1Up = false;
  }
  if (key === 'S') {
    p1Down = false;
  }

  if (keyCode === UP_ARROW) {
    p2Up = false;
  }
  if (keyCode === DOWN_ARROW) {
    p2Down = false;
  }
}



/////////////////////////////



var bricks_gone;
var bx, by;

function brickgone() {
  bricks_gone = 1;

  for (var b=0; b<20; b++) {
    // Calculate the x,y position of upper right corner
    bx = 500;
    by = b*30; 

    // Check if we we have a brick (bricks[x] is 1)
    if (bricks[b]==1) { 
      // Draw the brick
      noStroke();
      rect(bx, by, r, r);

      // Since we drew a brick, all are not gone
      bricks_gone = 0;

    }
    // Check if ball is over the brick, if so, remove it (bricks[i]=0) 
    // first check bounce on top/bottom
    if (x>(bx) && x<(bx+r+easy) &&
      y>(by) && y<(by+r+easy) && bricks[b]==1) { 
      bricks[b]=0;
    }
  }
}


/////////////////////////////

function bouncing() {
  if (y < 25) {
    angleY = abs(angleY);
  }
  if (y > 575) {
    angleY = -angleY;
  }
  if (x < 95 && y > n && y < n+60) {
    angleX = abs(angleX);
    angleX = angleX+0.5;
    angleY = random(-10, 10);
  }

  if (x > 880 && y > m && y < m+60) {
    angleX = -angleX;
    angleX = angleX-0.5;
    angleY = random(-10, 10);
  }

  //scores
  if (x < 15) {
    s2 = s2+1;
    x = 500;
    y = 300;
    angleX = 7;
    angleY = 0;
    if (s2 ==6 ) {
      noLoop();
      image(rightwon, 340, 200);


    }
  }
  if (x > 975) {
    s1 = s1+1;
    x = 500;
    y = 300;
    angleX = -7;
    angleY = 0;
    if (s1 == 6) {
      noLoop();
      image(leftwon, 340, 200);

     
    }
  }
}

/////////////////////////////

function breakout() {



  //left one  
  image(leftpaddle, i, n);

  //right one
  image(rightpaddle, j-80, m);
    
      smooth();
      fill(255);
      rect(x, y, r, r);
      image(ball, x-50, y-50);


}

/////////////////////////////

function cleantrails() {

  background(0);
  image(sand, 0, 0);

  image(bg, 0, 0);
}

/////////////////////////////

function move() {
  x = x+angleX;
  y = y+angleY;
}

/////////////////////////////


function notifications() {


  textSize(50);
  //text pos
  fill(255);
  text(s1, 400, 70);
  text(s2, 570, 70);
  }
