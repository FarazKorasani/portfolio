let increment = 0;
let rectanglesStore = [];

function setup() {
  createCanvas(innerWidth, innerHeight);
  rectMode(CENTER);
  let test = new Rectangles();
  rectanglesStore.push(test);
  angleMode(DEGREES);
}

function draw() {
  background(255);
  noFill();
  stroke(0);

  increment++;

  if (increment > 10) {
    rectanglesStore.push(new Rectangles());
    increment = 0;
  }

  for (let i = 0; i < rectanglesStore.length; i++) {
    rectanglesStore[i].show();
    rectanglesStore[i].update();

    if (rectanglesStore[i].gone()) {
      rectanglesStore.splice(i, 1);
    }
  }
}

class Rectangles {
  constructor() {
    this.size = 5;
    this.rotation = 0;
  }

  update() {
    this.size++;
    this.rotation++;
  }

  show() {
    push();
    translate(width / 2, height / 2);
    rotate(this.rotation);
    rect(0, 0, this.size, this.size * 2);
    pop();
  }
  gone() {
    return this.size > width;
  }
}
