let w = 600;
let a = 0; // angle // angolo
let r = w/3; // raggio // radius

function setup() {
  createCanvas(w, w);
}

function draw() {
  background(220);

    // circle
    noFill();
    stroke(0);
    strokeWeight(1);
    circle(w/2, w/2, r*2);

    // center
    fill(0);
    circle(w/2,w/2,12);

    // point
    let x = (w/2) + cos(a)*r;  // center x + cos(a) * radius
    let y = (w/2) + sin(a)*r;  // center y + sin(a) * radius
    circle(x,y,12);

    noStroke();
    fill(0,12);
    rect(x,y,cos(a)*r*-1, sin(a)*r*-1)

    // cos
    stroke(200,0,0);
    strokeWeight(3);
    line(w/2, w/2, x, w/2);

    // sin
    line(w/2, w/2, w/2, y);

    // txt
    noStroke();
    fill(0);
    text(nf(sin(a),1,3), w/2 + 6, y); // nf() -> number format -> 3 decimali
    text(nf(cos(a),1,3), x, w/2 - 6);

    let g = map(sin(a), -1, 1, 0, 255);
    fill(g);
    stroke(0);
    strokeWeight(1);
    rect(0,w-24, w, 24);

    // planet
    fill(0);
    noStroke();
    let xp = x + cos(a*3)* r/4;
    let yp = y + sin(a*3)* r/4;
    circle(xp,yp, 8);


    stroke(0,0,200);
    strokeWeight(3);
    line(w-3, w/2, w-3, yp);
 
    a+= 0.005;

}
