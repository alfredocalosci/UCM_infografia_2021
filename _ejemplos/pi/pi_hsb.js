let w = 600;
let a = 0; // angle // angolo
let r = w/3; // raggio // radius

let n = 24;

function setup() {
  createCanvas(w, w);
  colorMode(HSB);
}

function draw() {
  background(0,0,0);

    let h = map(a%TWO_PI, 0,TWO_PI,0,360); // hue

    // circle
    fill(h,80,75);
    noStroke();
    strokeWeight(1);
    circle(w/2, w/2, r*2);

    // center
    fill(0,0,100);
    stroke(0);
    strokeWeight(3);
    circle(w/2,w/2,12);

    // point
    let x = (w/2) + cos(a)*r;  // center x + cos(a) * radius
    let y = (w/2) + sin(a)*r;  // center y + sin(a) * radius
    circle(x,y,12);

    let m = w/n;
    stroke(0);
    strokeWeight(1);
    for(let i = 0; i<n; i++){
        let hh = map(i,0,n,0,360);
        fill(hh,80,80);
        rect(i*m, w-24, m, 24);
    }
  
    a+= 0.005;

}
