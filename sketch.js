var width, height;

var circles = [];

function setup() {
  width = 640;
  height = 480;
  createCanvas(width, height);

  circles.push(new Circle(50, 50, 50, 50));
  circles.push(new Circle(150, 50, 50, 50));
}

function draw() {
  background(255);
  color(0);
  circles.forEach(function (circle) {
    circle.draw();
    circle.moveDown();
  })
}

function Circle(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

Circle.prototype = {
  moveDown: function () {
    this.y++;
  },
  draw: function () {
    ellipse(this.x, this.y, this.width, this.height);
  }
}
