function setup() {
  createCanvas(500, 500)
  xvelocity = 5
  yvelocity = 5
  x = 50
  y = 50
  gravity=1
}

function draw() {
  clear();
  fill(color(x, y, 0));
  ellipse(x, y, 80, 80);
  x+=xvelocity
  y+=yvelocity
  if(x>=width-40 || x<=40){
    xvelocity*=-1
  }
  if(y>=height-40 || y<=40){
    yvelocity*=-1
  }
  else {
    yvelocity+=gravity
  }
}

function mouseClicked() {
  gravity*=-1
}
