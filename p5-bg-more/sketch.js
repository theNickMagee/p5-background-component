function setup() {
  var div = document.getElementById("sketch");
  var width = div.offsetWidth;
  var height = div.offsetHeight;

  var myCanvas = createCanvas(width, height);
  myCanvas.parent("sketch");

  var CIRCLES_NUM = 7;
  let MIN_R = 10;
  let MAX_R = 100;
  circles = [];
  for (let i = 0; i < CIRCLES_NUM; i++) {
    //   let
    let x = random(0, width);
    let y = random(0, height);
    let r = random(MIN_R, MAX_R);
    let stroke_weight = random(1, 10);
    let x_speed = random(-2, 2);
    let y_speed = random(-2, 2);
    circles[i] = new Circle(x, y, r, stroke_weight, x_speed, y_speed);
  }
}

function draw() {
  background(207);

  for (let i = 0; i < circles.length; i++) {
    circles[i].run();
  }
}

function windowResized() {
  var div = document.getElementById("sketch");
  var width = div.offsetWidth;
  var height = div.offsetHeight;
  resizeCanvas(width, height);
}

class Circle {
  constructor(x, y, r, sw, x_speed, y_speed) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.sw = sw;
    this.x_s = x_speed;
    this.y_s = y_speed;
    // this.num_rings = num_rings;
  }

  run() {
    noFill();
    stroke(255);
    strokeWeight(this.sw);
    ellipse(this.x, this.y, this.r);
    this.x += this.x_s;
    this.y += this.y_s;
  }
}
