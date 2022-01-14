function setup() {
  createCanvas(400, 400);
}

function draw() {
  if (mouseIsPressed) {
    var num = random(0, 255);
    stroke(num);
    fill(num);
  } else {
    stroke(255);
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}