let w = 500;
let n = 10;
function setup() {
  createCanvas(w, w);
}

function draw() {
  background(220);
  let m = w/n;

  stroke(128);

   for(let fila= 0; fila< n; fila++){
     line(0, (fila*m), w, (fila*m));
   }


}
