float x = 500;
float y = 300;
int i, n, j, m, b;
int r=15;
float angleX = 10;
float angleY = 0;
int s1 = 0;
int s2 = 0;

int easy=30;//7.5 to Infinity easy

int[] blocks = new int[600];






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
  


}

void draw() {
  move();
  cleantrails();
  blockgone();
  bouncing();
  notifications();
  breakout();
  print(by+"                                      ");
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