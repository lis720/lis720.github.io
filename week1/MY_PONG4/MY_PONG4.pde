float x = 500;
float y = 300;
int i, n, j, m, b;
int r=15;
float angleX = 50;
float angleY = 75;
int s1 = 0;
int s2 = 0;

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




PFont font1;
PFont font2;







void setup() {
  size(1000, 600);
  background(155);

  font1 = createFont("Carre.ttf", 72); 
  font2 = createFont("junegull rg.ttf", 28); 



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

}


void keyPressed() {

  if (keyCode == 'W') {
    if (n>0) {
      n = n-60;
    }
  }

  if (keyCode == 'S') {
    if (n<600) {
      n = n+60;
    }
  }
  if (key == CODED) {
    if (keyCode == UP) {
      if (m>0) {
        m = m-60;
      }
    }
  }
  if (key == CODED) {
    if (keyCode == DOWN) {
      if (m<600) {
        m = m+60;
      }
    }
  }
}