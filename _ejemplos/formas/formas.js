function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
}

function draw() {
    background(220);
    strokeWeight(1);
    fill(255);

    line(0,0,100,100);
    circle(150,50,90);
    ellipse(250,50,90,45);
    // square(350,50,90);
    square(305,5,90);
    square(405,5,90, 10);

    triangle(0,200,50,100,100,200);
    arc(150,150,90,90,-90, 180);
    arc(250,150,90,90,-90, 90, CHORD);

    strokeWeight(5);
    line(0,200,100,300);

    fill(128);
    circle(150,250,90);

    beginShape();
      vertex(250,200);
      vertex(300,220);
      vertex(300,300);
      vertex(200,220);
    endShape(CLOSE);


}
