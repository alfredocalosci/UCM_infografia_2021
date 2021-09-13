/* 
    basado en un trabajo de Santiago Ortiz
    del que ya no encuentro referencias 
    http://moebio.com
*/

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
}

function draw() {
    background(240);
    fill(128);
    noStroke();

    // el cuerpo
    arc(300,300,500,500, -180, 0);

    // nariz y patas -> en negativo
    fill(240);
    arc(200, 300, 250,250, -180, 0);
    arc(300 + 125 +12.5, 300, 150,150, -180, 0);

    // ojo
    circle(140,140,16);

    // oreja – de nuevo en positivo
    fill(128);
    circle(200,70,64);

}
