let w = 600;
let n = 24;
let t = 0;

function setup() {
  createCanvas(w, w);
}

function draw() {
  background(220);
  let m = w/n;

  stroke(0);

   for(let fila= 0; fila< n; fila++){
     strokeWeight(1);
     line(0, (fila*m), w, (fila*m));
     line((fila*m), 0, (fila*m), w);

     for(col = 0; col<n; col++){

      let i = (fila*n) + col; // indice
      let x = col*m;
      let y = fila*m;
      let xc = x + (m/2);
      let yc = y + (m/2);

      let d = map(i, 0, n*n, 2, m); // diametro
      // let g = map(fila, 0, n-1, 0,255); // gris
      let g = map(i, 0, n*n, 0,255); // gris
      let s = map(fila, 0, n-1, 1,8);

      fill(noise(t + x/100,y/100)*255);
      noStroke();
      rect(x,y,m,m);

      // fill(g);
      // strokeWeight(s);
      let z = noise(t + x/100,y/100);
      fill(0);
      circle(xc, yc, z*m);

      // textAlign(CENTER, CENTER);
      // text(fila, xc, yc);

     }
   }

   t+= 0.01;

}
