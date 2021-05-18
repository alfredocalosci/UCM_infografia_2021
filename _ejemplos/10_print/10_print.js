let w = 600;
let n = 11;

let datos = [];

function setup() {
  createCanvas(w, w);

  // crea los datos
  creaDatos();
}

function draw() {
  background(220);

  // matrix loop
  let m = w/n;
  for(let fila= 0; fila< n; fila++){

    strokeWeight(1);
    stroke(255,128);
    line(0, (fila*m), w, (fila*m));
    line((fila*m), 0, (fila*m), w);

        for(col = 0; col<n; col++){
            let i = (fila*n) + col; // indice
            let x = col*m; // angolo superiore
            let y = fila*m;
            let xc = x + (m/2);
            let yc = y + (m/2);

            fill(0);
            noStroke();
            // circle(xc,yc,m/4);
            // text(i, xc, yc);
            // text(dati[i], xc, yc);

            strokeWeight(8);
            stroke(0);
            // diagonali
            if(datos[i] == 0){
                line(x,y+m, x+m, y);
            } else {
                line(x,y, x+m, y+m);

            }
            

        }
    }
}

// coin flip algorithm
function moneda(){
    let c = random(1);

    let resultado = 1; // the result
    if(c < 0.5){
        resultado = 0;
    }
    return resultado;
}

function creaDatos(){
    console.log("creo i dati");

    datos = []; // new array or cleanUp

    for(let i = 0; i < (n*n); i++){
        datos.push(moneda());
    }
    console.log(datos);

}

function keyTyped(){
  console.log(key);
  creaDatos();
}