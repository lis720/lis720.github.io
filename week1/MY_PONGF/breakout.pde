void breakout() {

//ball


  //paddle one
  //left one
  //rect(i, n, 6*r, 6*r);
  
  image(leftpaddle, i, n);

  //right one
  //rect(j-80, m, 6*r, 6*r);
    image(rightpaddle, j-80, m);
    
      smooth();
  fill(255);
  rect(x, y, r, r);
    image(ball, x-50, y-50);


}