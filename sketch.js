var button;
var _self;

function setup() {
  createCanvas(1450,800);
  background(0);
  button = createButton('GO')
  button.mousePressed(LinkClik);
  button.position(740,520);
  button.size(50,40);
 button.style("font-family", "Impact");
  button.style("background-color","#000");
 button.style("color","#FFF");
 button.style('font-size', '20px');
}

function randomColor() {
  var a = random(0, 255);
  var b = random(0, 255);
  var c = random(0, 255);
  background(a, b, c);
}

function draw() { 
  fill(0);
  textFont('Impact');
  textSize(130);
  textAlign(CENTER);
  text('PORTFOLIO',745,495);
  var d = random(150, 255);
  var e = random(0, 255);
  var f = random(0, 225);
  fill(d,e,f);
  noStroke();
  ellipse(mouseX, mouseY,150,150);
}

function LinkClik(){
 window.open("menu.html", _self);
}
