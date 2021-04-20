let w = 500;

let cx = w/2;
let cw = w/2;

let ag = 20; // grosor a
let ae = 0; // excenticidad e

let alphaMode = true;

function setup() {
  let cv = createCanvas(w, w);
}

function draw() {
  background(0);
  
  // la C
  if(alphaMode == true){
    fill(255,128); 
  } else {
    fill(255); 
  }
  
  noStroke();
  arc(cx,w/2, cw, cw, PI/4, PI/4*7);
  
  fill(0);
  circle(cx,w/2, w/4);
  
  // la A
  strokeWeight(ag);
  if(alphaMode == true){
    stroke(255, 128);
  } else {
    stroke(255); 
  }
  
  noFill();
  // triangle(w/5,w/5*4, w/2, w/5, w/5*4, w/5*4);
  line(w/5,w/5*4, w/2 + ae, w/10);
  line(w/2 + ae, w/10, w/5*4, w/5*4);
  
  // text
  textAlign(CENTER, CENTER);
  fill(128);
  strokeWeight(0);
  text("press the spacebar or m", w/2, w-32);
  
}

function keyTyped(){
  // console.log(key);
  
  if(key == ' '){
    cx = random(w/5, w/5*4);
    cw = random(w/4, w/5*4);
  
    // ag = random(1,5)*10;
    ag = (cw - w/4)/2;
  
    ae = random(-10,10)* 10;
  }
  
  if(key == 's'){
    let fileName = 'ac_logo_' + frameCount;
    saveCanvas(fileName, 'png');
    console.log("save ...");
  }
  
  if(key == 'm'){
    alphaMode = !alphaMode;
  }
}