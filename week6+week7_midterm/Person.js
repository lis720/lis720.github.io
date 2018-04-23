function Person(){
  var hair = [];

  var eyeWidth = 40;

  var hairRoot = createVector(200, 200);
  var scalp = createVector(0, -100);
  

  this.init = function(){
    scalp.rotate(radians(10));
    hairRoot.add(scalp);


    hair = [];
    //creates to layers of hair, each with slightly different perlin noise offset
    for (var x = 0; x < 40; x++) {
      hairRoot = createVector(450, 300);
      scalp = createVector(0, -100);

      scalp.rotate(radians(5*x-5*40/2));
      hairRoot.add(scalp);
      var h = new Hair();
      h.init(hairRoot, 30, 0.0);
      hair.push(h);
    }
  }

  this.update = function() {
    if (emotion < 0) {
      emotion = constrain(emotion += 1, -50, 50);
    } else if (emotion > 0) {
      emotion = constrain(emotion -= 0.5, -50, 50);
    }
    for (var x = 0; x < hair.length; x++) {
      hair[x] = hair[x].update(createVector(mouseX, mouseY), createVector(mouseX-pmouseX, mouseY-pmouseY));
    }
  }

  this.display = function() {
    image(face, 0, -25);

    this.drawEyes();

    //draw face;
    beginShape();
    fill(205,55,55);
    vertex(width/2-eyeWidth, height/2+50+45);
    bezierVertex(width/2-eyeWidth, height/2+50+emotion+45, width/2+eyeWidth, height/2+50+emotion+45, width/2+eyeWidth, height/2+50+45);
    endShape();

    for (var x = 0; x < hair.length-1; x++) {
      hair[x].draw();
    }
  }

  this.drawEyes = function() {
    fill(255);
    noStroke();
    ellipse(width/2-eyeWidth, height/2+10, 40, 40);
    ellipse(width/2+eyeWidth, height/2+10, 40, 40);

    var lookDirL = createVector(mouseX - width/2-eyeWidth, mouseY-height/2);
    if (lookDirL.mag() > 10) {
      lookDirL.setMag(10);
    }

    var lookDirR = createVector(mouseX - width/2+eyeWidth, mouseY-height/2);
    if (lookDirR.mag() > 10) {
      lookDirR.setMag(10);
    }

    fill(0);
    //black eye
    ellipse(width/2-eyeWidth+lookDirR.x, height/2+lookDirR.y+10, 20, 20);
    ellipse(width/2+eyeWidth+lookDirL.x, height/2+lookDirL.y+10, 20, 20);
    
     fill(255);
     //white eye
    ellipse(width/2-eyeWidth+lookDirR.x, height/2+lookDirR.y+10, 8, 8);
    ellipse(width/2+eyeWidth+lookDirL.x, height/2+lookDirL.y+10, 8, 8);
  }
}