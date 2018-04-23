void bouncing() {
  if (y < 25) {
    angleY = abs(angleY);
  }
  if (y > 575) {
    angleY = -angleY;
  }
  if (x < 25 && y > n && y < n+60) {
    angleX = abs(angleX);
    angleX = angleX+0.5;
    angleY = random(-10, 10);
  }
  if (x > 960 && y > m && y < m+60) {
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
    if (s2 == 100) {
      noLoop();
      fill(255);
      textSize(30);
      text("Right player win", 50, 300);
    }
  }
  if (x > 975) {
    s1 = s1+1;
    x = 500;
    y = 300;
    angleX = -7;
    angleY = 0;
    if (s1 == 100) {
      noLoop();
      fill(255);
      textSize(30);
      text("Left player win", 50, 300);
    }
  }
}