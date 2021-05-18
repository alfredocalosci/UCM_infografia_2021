let w = 500;
let n = 3;

let datos = [];
let datos_red = [];
var m = w/n;

function setup() {
  createCanvas(w, w);
 colorMode(HSB, 360,100,100,100); //  -> H 0-360  S 0-100, B 0-100
  angleMode(DEGREES);
  //blendMode(EXCLUSION);

  creaDatos();
}

function draw() {
    blendMode(BLEND);
    background(0,0,100);

    blendMode(MULTIPLY); // BURN

    // the matrix
    noStroke();
    let c = color(240, 100, 80);
    let c2 = color(0, 100, 80);

    for(let fila= 0; fila< n; fila++){
        for(col = 0; col<n; col++){

            let i = (fila*n) + col; // indice
            let x = col*m;
            let y = fila*m;
            let xc = x + (m/2);
            let yc = y + (m/2); 

            

            stamp(datos[i],xc,yc,m,c);
            stamp(datos_red[i],xc,yc,m,c2);

        }
    }

}

function stamp(i,x,y,m,c){

    fill(c);

    switch (i) {
        case 0:
            rectMode(CENTER)
            rect(x,y,m,m);
          break;
        case 1:
            rectMode(CORNER);
            rect(x-m/2, y, m, m/2);
          break;
        case 2:
            rectMode(CORNER);
            rect(x-m/2, y-m/2, m/4*3, m);
          break;
        case 3:
            triangle(x-m/2, y-m/2, x+m/2, y-m/2, x-m/2, y+m/2);
          break;
        case 4:
            triangle(x-m/2, y+m/2, x+m/2, y+m/2, x-m/2, y-m/2);
          break;
        case 5:
            // circle(x,y,m);
            beginShape();
            vertex(x-m/2, y-m/2);
            vertex(x-m/2, y+m/2);
            vertex(x+m/2, y+m/2);
            vertex(x+m/2, y-m/4);
            endShape(CLOSE);
          break;
        case 6:
            beginShape();
            vertex(x-m/2, y-m/2);
            vertex(x-m/2, y+m/2);
            vertex(x+m/2, y+m/2);
            vertex(x+m/2, y);
            endShape(CLOSE);
          break;
        case 7:
            beginShape();
            vertex(x-m/2, y-m/2);
            vertex(x-m/2, y+m/2);
            vertex(x+m/2, y+m/2);
            vertex(x+m/2, y);
            vertex(x, y-m/2);
            endShape(CLOSE);
          break;
        case 8:
            beginShape();
            vertex(x-m/2, y-m/2);
            vertex(x-m/2, y+m/2);
            vertex(x+m/2, y+m/2);
            vertex(x+m/2, y-m/4);
            vertex(x+m/4, y-m/2);
            endShape(CLOSE);
          break;
     
        default:
          break;
      }

}

function keyTyped(){
    datos=[];
    datos_red=[];
    creaDatos();
    // console.log(key);
}

function creaDatos(){
    let max = 9;
    for(let i = 0; i< n*n; i++){

        let v = floor(random(max));
        let vv = floor(random(max));

         datos.push(v);
         datos_red.push(vv);
    }
    // console.log(datos);
    // console.log(datos_red);
}