float x = 500;
float y = 300;
int i, n, j, m, b;
int r=15;
float angleX = 50;
float angleY = 75;
int s1 = 0;
int s2 = 0;
boolean UpL, DownL, UpR, DownR;


int easy=30;//7.5 to Infinity easy

int[] blocks = new int[600];


PImage leftpaddle;
PImage rightpaddle;
PImage bg;
PImage ball;
PImage sand;
PImage star;
PImage leftwon;
PImage rightwon;
PImage beer;








void setup() {
  size(1000, 600);
  background(155);




  for (b=0; b<20; b++) {
    blocks[b] = 1;
  }


  i = 15;
  j = 975;
  n = 270;
  m = 270;

  leftpaddle = loadImage("leftpaddle.png");
  rightpaddle = loadImage("rightpaddle.png");
  bg = loadImage("bg.png");
  ball= loadImage("ball.png");
  sand= loadImage("sand.png");
  star= loadImage("star.png");
  leftwon= loadImage("leftwon.png");
  rightwon= loadImage("rightwon.png");
  beer= loadImage("beer.png");
}

void draw() {
  move();
  cleantrails();
  notifications();
  breakout();
  blockgone();

  bouncing();
  paddleMove();
}


void paddleMove() {
  if (UpL ) {
    n=n-6;
  }
  if (DownL) {
    n=n+6;
  } 
  if (UpR ) {
    m=m-6;
  } 
  if (DownR) {
    m=m+6;
  }
}

void keyPressed() {
  if (key == 'w'||key == 'W') {
    UpL = true;
  }
  if (key == 's'||key == 'S') {
    DownL = true;
  }
  if (key == CODED) {
    if (keyCode == UP) {
      UpR = true;
    }
  }
  if (key == CODED) {
    if (keyCode == DOWN) {
      DownR = true;
    }
  }
}

void keyReleased() {
  if (key == 'w'||key == 'W') {
    UpL = false;
  }
  if (key== 's'||key == 'S') {
    DownL = false;
  }
  if (key == CODED) {
    if (keyCode == UP) {
      UpR = false;
    }
  }
  if (key == CODED) {
    if (keyCode == DOWN) {
      DownR = false;
    }
  }
}