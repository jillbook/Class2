function setup () {
 
}

function draw() {
createCanvas(600,600);
if (mouseY <=300) {
  background(200,100,70)}
  else {(background(170,50, 20));
}
for (var x = 0; x <= width; x += 200) {
    new orb (x, mouseY, 20);
    }
  }

var orb = function(x,y, ellipseSize) {
    var blues = color(random(0,100), random(100,255), random(100,255));
  fill(blues);
 
  ellipse(x, mouseY, mouseX-200, mouseY-200);
};
