let points = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(2);
  angleMode(DEGREES);
  noiseDetail(1);

  const density = 100;

  for (let x = 0; x <= width; x += width / density) {
    for (let y = 0; y <= height; y += width / density) {
      const p = createVector(x + random(-10, 10), y + random(-10, 10));
      points.push(p);
    }
  }

  background(10, 20, 30);
}

function draw() {
  if (frameCount < 400) {
    noStroke();

    const mult = 0.01;

    for (let j = 0; j < 1; j++) {
      for (let i = 0; i < points.length; i++) {
        const r = map(points[i].x, 0, width, 50, 255);
        const g = map(points[i].y, 0, height, 255, 50);
        const b = map(points[i].x, 0, width, 255, 50);

        fill(r, g, b, 10);

        const angle = map(
          noise(points[i].x * mult, points[i].y * mult),
          0,
          1,
          0,
          720
        );

        points[i].add(createVector(cos(angle), sin(angle)));
        ellipse(points[i].x, points[i].y, 1);
      }
    }
  } else {
    noLoop();
  }
}

function mouseClicked() {
  saveCanvas("flowfield", "png");
}
