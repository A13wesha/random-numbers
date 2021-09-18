var ground,groundimage;
var invisibleground;
var num
var cloud,cloudimage
var trex ,trex_running;
var edges;
function preload(){
 trex_running=loadAnimation("trex1.png","trex3.png","trex4.png") ;
groundimage=loadImage("ground2.png")
cloudimage=loadImage("cloud.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex=createSprite(50,150,20,50);
 trex.addAnimation("running",trex_running);
 trex.scale=0.5;

 edges=createEdgeSprites();
 ground=createSprite(200,180,300,10);
 ground.velocityX=-4;
 ground.x=ground.width/2;
 ground.addImage(groundimage);

 invisibleground=createSprite(100,195,300,10);
 invisibleground.visible=false;
 num=Math.round(random(1,100));
}

function draw(){
  background(0)
  console.log(num)
  if(keyDown("space")&&trex.y>=100){
    trex.velocityY=-10;
  }
  trex.velocityY=trex.velocityY+0.8;
  if(ground.x<0){
    ground.x=ground.width/2
  }
  trex.collide(invisibleground);
  spawnClouds();
drawSprites();
}

function spawnClouds(){
  if(frameCount%60===0){
    cloud=createSprite(600,30,20,10);
    cloud.velocityX=-3;
    cloud.y= Math.round(random(20,50))
    cloud.addImage(cloudimage)
    cloud.scale=0.5
  }

}