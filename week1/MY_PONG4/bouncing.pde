void bouncing() {
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
      image(rightwon, 350, 200);

      //fill(255);
      //textFont(font2);

      //text("Right Crab win", 150, 50);
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
      image(leftwon, 350, 200);

      //fill(255);
      //textFont(font2);

      //text("Left Crab win", 150, 50);
    }
  }
}