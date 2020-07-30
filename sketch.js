var frec,mrec;
function setup() {
  createCanvas(800,400);
  frec = createSprite(400, 200, 50, 50);
  frec.shapeColor  = "green";
  frec.debug = true;
  mrec = createSprite(600, 400, 50, 50);
  mrec.shapeColor = "green";
  mrec.debug = true;
}
function draw() {
  background(255,255,255);  
  mrec.x = World.mouseX;
  mrec.y = World.mouseY;
  console.log (mrec.x - frec.x);
  if (mrec.x - frec.x < mrec.width/2+frec.width/2 && frec.x - mrec.x < mrec.width/2+frec.width/2 
    && mrec.y - frec.y < mrec.height/2+frec.height/2 && frec.y - mrec.y < mrec.height/2+frec.height/2){
    frec.shapeColor  = "red";
    mrec.shapeColor  = "red";
  }
  else{
    frec.shapeColor  = "green";
    mrec.shapeColor  = "green";
  }
  drawSprites();
}