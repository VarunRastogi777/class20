var rectanle,rectangle1
function setup() {

  createCanvas(800,400);
  rectangle=createSprite(50,250,50,50)
  rectangle1=createSprite(250,250,50,50)
  rectangle.shapeColor="green"
  rectangle1.shapeColor="green"
}


function draw() {
  background(255,255,255);  
  rectangle.x=mouseX
  rectangle.y=mouseY
  if(rectangle.x-rectangle1.x<rectangle.width/2+rectangle1.width/2 &&
    rectangle1.x-rectangle.x<rectangle1.width/2+rectangle.width/2 &&
    rectangle.y-rectangle1.y<rectangle.height/2+rectangle1.height/2 &&
    rectangle1.y-rectangle.y<rectangle1.height/2+rectangle.height/2){
    rectangle.shapeColor="red"
    rectangle1.shapeColor="red"
  }else{
    rectangle.shapeColor="green"
    rectangle1.shapeColor="green"
  }

  drawSprites();
}