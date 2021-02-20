var fixedRect, movingRect;
var neer;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
neer=createSprite(400,150,20,50);
  movingRect.velocityY = -5;
  neer.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  bounceoff(movingRect,neer)
  drawSprites();
}
