function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    pixelDensity(1);
    angleMode(DEGREES);
    rectMode(CENTER);
    noiseDetail(1);
}

function draw() {
    background(30);
    noFill();
    stroke(255);
    strokeWeight(3);

    translate(0, -100, isMobile() ? -2500 : -800); 
    
    rotateX(50);

    for (let n = 0; n < 50; n++) {
        beginShape();
        for (let i = 0; i < 360; i += 3) {
            const rad = n * 16;
            const x = rad * cos(i);
            const y = rad * sin(i);
            const z = map(cos(frameCount * 3 + n * 10), 0, 1, -50, 50);

            const g = map(z, -100, 100, 150, 200) + sin(frameCount * 2) * 50;
            const b = map(n, 0, 500, 100, 150) + cos(frameCount / 2) * 100;
            const r = map(n, 0, 500, 200, 150) - sin(frameCount / 4) * 50;

            stroke(r, g, b);
            vertex(x, y, z);
        }
        endShape(CLOSE);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
