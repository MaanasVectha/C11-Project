var ship;
var ship_running;
var sea;
var sea_running;
var bird1,bird_running;
var bird2;
var bird3;
function preload(){
 ship_running=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
 sea_running=loadAnimation("sea.png");
 bird_running=loadAnimation("flying-bird1.jpg","flying-bird2.jpg","flying-bird3.jpg","flying-bird4.jpg","flying-bird5.jpg","flying-bird6.jpg");
}
function setup(){
  createCanvas(800,800);
  sea = createSprite(200,300,400,400);
  sea.addAnimation("running",sea_running);
  sea.velocityX=-1;
  bird1 = createSprite(100,135,20,20);
  bird1.addAnimation("running",bird_running);
  bird1.scale=0.25;
  bird2 = createSprite(150,170,20,20);
  bird2.addAnimation("running",bird_running);
  bird2.scale=0.25;
  bird3 = createSprite(150,100,20,20);
  bird3.addAnimation("running",bird_running);
  bird3.scale=0.25;
  bird4 = createSprite(50,100,20,20);
  bird4.addAnimation("running",bird_running);
  bird4.scale=0.25;
  bird5 = createSprite(50,170,20,20);
  bird5.addAnimation("running",bird_running);
  bird5.scale=0.25;
  ship = createSprite(370,500,20,20);
  ship.addAnimation("running",ship_running);
  ship.scale=0.25;
  
}

function draw() {
  background("white");
  drawSprites();
  console.log(sea.x)
  if(sea.x<0){
    sea.x=199;
  }
}
