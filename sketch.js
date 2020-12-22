var ground;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstaclesGroup
var score = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.1;
  
  
  
  ground = createSprite(400,350,400,20);
  
  ground.x = ground.width /2;
  console.log(ground.x);
  FoodGroup= new Group();
  obstaclesGroup= new Group();
  
 
}


function draw() {
  background("white");
  
  text("score:"+score,350,10);
  
  
  
  if(keyDown("space")){
    monkey.velocityY=-12;
  }
  monkey.velocityY = monkey.velocityY + 0.6;
  
  if(ground<0) {
    ground.x=ground.width /2;
  }
  if(FoodGroup.isTouching(monkey)){
    score=score+2;
    FoodGroup.destroyEach();
  }
  if(obstaclesGroup.isTouching(monkey)){
    text("GAME OVER",200,200);
    background("white");
    monkey.velocityX=0;
    obstacle.velocityX=0;
    banana.velocityX=0;
    obstaclesGroup.setLifetimeEach(-1);
    FoodGroup.setLifetimeEach(-1);
  }
  if(score===40){
    text("YOU WIN",200,200);
    
  }
  
 switch (score){
  case 10 : monkey.scale=0.12;
     break;
  case 20 : monkey.scale=0.14;
     break;
  case 30 :monkey.scale=0.16;
     break;
  case 40:monkey.scale=0.2;
     break;
     default:break;
 }
  monkey.collide(ground);
  
  
  obstacles();
  bananas();
  drawSprites();
  
}



function bananas (){
  if (frameCount%100===0){
    banana=createSprite(400,220,30,30);
    banana.addImage("bananas",bananaImage);
    banana.scale=0.1;
    banana.velocityX=-4;
    banana.lifetime=110;
    FoodGroup.add(banana);
  }
}

function obstacles () {
  if(frameCount%100===0){
  obstacle=createSprite(400,335,30,30);
  obstacle.addImage("obstacle",obstacleImage);
  obstacle.scale=0.1;
  obstacle.velocityX=-4;
  obstacle.lifetime=110;
  obstaclesGroup.add(obstacle);
}
}
