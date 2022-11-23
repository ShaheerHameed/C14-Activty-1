var boxdetails = {
  x:9,
  y:8,
  width:4,
  height:5,
  color:["red","blue","green"]
}







function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  boxdetails.width = 400
  boxdetails.height = 400
  fill (boxdetails.color[1])
  rect(boxdetails.x,boxdetails.y,boxdetails.width,boxdetails.height)
}