var font;
var vehicles = [];

function preload() {
  font = loadFont('Inconsolata-Regular.otf');
}

function getPoint() {
  let hr = hour();
  let mn = minute();
  let sc = second();

  let end_sec = map(sc, 0, 60, 0, 360);
  let end_min = map(mn, 0, 60, 0, 360);
  let end_hour = map(hr, 0, 12, 0, 360);
  const time = (hr < 10 ? "0" + hr : hr) + ":" +
    (mn < 10 ? "0" + mn : mn) + ":" +
    (sc < 10 ? "0" + sc : sc);

  return font.textToPoints(time, 100, 180, 128);
}

function setup() {
  createCanvas(800, 300);

  let points = getPoint();

  for (var i = 0; i < points.length; i++) {
    var p = points[i];
    var vehicle = new Vehicle(p.x, p.y);
    vehicles.push(vehicle);
  }
}

function draw() {
  background(50);

  let points = getPoint();

  for (var i = 0; i < vehicles.length; i++) {
    let v = vehicles[i];
    let p = points[i];

    if (p) {
      v.target = createVector(p.x, p.y);
    } else {
      return v = null;
    }

    v.behaviors();
    v.update();
    v.show();
  }
}
