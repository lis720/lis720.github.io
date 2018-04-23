function Object(x,y,img) {
  var home;
  var pos;

  var isActive = false;
  var isHeld = false;

  var sprite;

  this.getIsActivated = function(){
    return isActive;
  }

  if(img == null){
    home = createVector(x, y);
    pos = createVector(x, y);

    isActive = false;
    isHeld = false;
  }else{
      home = createVector(x, y);
    pos = createVector(x, y);

    sprite = loadImage(img);

    isActive = false;
    isHeld = false;
  }

  this.update = function() {
    if (dist(mouseX, mouseY, pos.x, pos.y) <= 50 && toolHeld && selected == null || (selected == this && toolHeld))
    {
      selected = this;

      pos.x = mouseX;
      pos.y = mouseY;

      if (toolActivated)
      {
        isActive = true;
      } else {
        isActive = false;
      }
      isHeld = true;
    } else if (dist(home.x, home.y, pos.x, pos.y) >= 2) {
      if (selected == this) {
        selected = null;
      }

      var move = createVector(home.x - pos.x, home.y - pos.y);
      move.div(10);
      pos.add(move);

      isActive = false;

      isHeld = false;
    }
  }

  this.display = function() {
    ellipseMode(CENTER);

    if (!isActive)
      fill(255,100);
    else
      fill(255,100);

    noStroke();
    ellipse(pos.x+30, pos.y+20, 100, 100);

    if (sprite != null) {
      image(sprite, pos.x+16, pos.y-10);
    }
  }
}

function mousePressed() {
  toolHeld = true;
  toolActivated = true;
}

function mouseReleased() {
  toolActivated = false;
  toolHeld = false;
}