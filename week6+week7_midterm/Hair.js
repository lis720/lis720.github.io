
function Hair() {
  var anchor;
  var offset;
  var hairColor;
  var gravity;

  var growDir;
  var thickness;

  var h;

  var segments = [];


  this.init = function(setAnchor, setSegments, Offset){
    anchor = setAnchor;

    if (grower.isActive) {
      growDir = p5.Vector.random2D();
    }
    else {
      growDir = createVector();
    }


    segments = [];

    for (var x = 0; x < setSegments; x++) {
      segments.push(createVector(anchor.x, anchor.y+10*x));
    }


    thickness = segments.length/25;

    h = segments.length-1;

    //offset = random(100)/100 + preOffset;
    hairColor = color(random(0, 100), random(0, 10), random(0, 10));
    gravity = random(2, 4);

    //grounding force
    segments[0].x = anchor.x;
    segments[0].y = anchor.y;
  }    
  

  this.update = function(blow,force) {
    //perlin noise wind, slightly offset from every other Hair
    var wind = 0.05;//(noise(frameCount/100.0+offset)-0.5)/4;

    //apply forces to each Hair segment
    for (var x = 1; x < segments.length; x++) {
      var segment = segments[x];
      segment.y += gravity*x+growDir.y*5;
      segment.x += x*wind*(4/detailLvl)+growDir.x*5;

      //effect of mouse acceleration
      var secondWind = dist(blow.x, blow.y, segment.x, segment.y-30);
      //blower 

      if (hairBlower.getIsActivated()) {
        force = createVector(segment.x-mouseX, segment.y-mouseY-30);
        force.setMag(30);
        force.rotate(random(radians(40)));
        secondWind = 99;
      }

      if (secondWind < 100 && force.mag() > 10) {
        emotion = constrain(emotion += 0.005*(15/segments.length), -50, 50);
        segment.x += force.x*(20/secondWind*(4/detailLvl));
        segment.y += force.y*(20/secondWind*(4/detailLvl));
      }
      
      //comb
      if (comb.getIsActivated() && secondWind < 30) {
        if (growDir.x < 0)
          growDir.x += 0.1;
        else if (growDir.x > 0)
          growDir.x -= 0.1;

        if (growDir.y < 0)
          growDir.y += 0.1;
        else if (growDir.y > 0)
          growDir.y -= 0.1;
      }
      segments[x] = segment;

      //scissor
      if (scissor.getIsActivated() && secondWind < 10) {
        for (var y = segments.length-1; y > x; y--) {
          emotion += 0.5;
          emotion = constrain(emotion, -50, 50);
          segments.splice(x,1);
        }
        if (segments.length == 2) {
          emotion -= 10;
          emotion = constrain(emotion, -50, 50);
          segments.splice(1,1);
        }
      }
      
     
      }
    

    if (grower.isActive && dist(blow.x, blow.y, anchor.x, anchor.y) < 10) {
      if (frameCount%10 == 0)
        segments.push(createVector(anchor.x, anchor.y));
      thickness = segments.length/15;
      h = segments.length - 2;
    }

    //pull all together
    for (var x = 0; x < segments.length-1; x++) {
      var jovar = p5.Vector.sub(segments[x], segments[x+1]); 

      if (jovar.mag() > 5*(4/detailLvl)) {
        jovar.normalize();

        jovar.mult(-5*(4/detailLvl));

        segments[x+1].x = segments[x].x + jovar.x;
        segments[x+1].y = segments[x].y + jovar.y;
      }
    }
    
    return this;
  }

  this.draw = function() {
    fill(hairColor);
    stroke(hairColor);

    beginShape(TRIANGLE_STRIP);
    for (var x = 0; x < segments.length-1; x++) {
      var segment = segments[x];
      vertex(segment.x+5*thickness*((h-x)/h), segment.y);
      vertex(segment.x-5*thickness*((h-x)/h), segment.y);
    }
    endShape();
  }
}