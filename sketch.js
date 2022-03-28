var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie,zombieImg;
var heart1image,heart2image,heart3image;
var heart1,heart2,heart3;
var ZombieGroup;

function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bgImg = loadImage("assets/BG2.jpg")
  zombieImg=loadImage("assets/zombie.png");
  
  heart1image = loadImage("assets/heart_1.png");

  heart2image = loadImage("assets/heart_2.png");

  heart3image = loadImage("assets/heart_3.png");


}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)

   //creating a sprite for remaing life

   heart1=createSprite(displayWidth-150,40,20,20)
   heart1.visible=false
   heart1.addImage("heart1",heart1image)
   heart1.scale=0.4

   heart2=createSprite(displayWidth-100,40,20,20)
   heart2.visible=false
   heart2.addImage("heart2",heart2image)
   heart2.scale=0.4

   heart3=createSprite(displayWidth-150,40,20,20)
  
   heart3.addImage("heart3",heart3image)
   heart3.scale=0.4
   
// creating a group for Zombies
ZombieGroup=new Group()


        

}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}

if(ZombieGroup.isTouching(player)){
  for(var i=0;i<ZombieGroup.length;i++){
    if(ZombieGroup[i].isTouching(player)){
      ZombieGroup[i].destroy()
    }
  }
}

enemy();


drawSprites();



}
//creating a function to spawn Zombies
function enemy(){
if(frameCount%50===0){
  // creating Random Position of ZOmbie in X and Y position
  zombie=createSprite(random (500,1100),random(100,500),40,40)

  zombie.addImage(zombieImg)
  zombie.scale=0.15
  zombie.velocityX=-3
  zombie.debug=true
  zombie.setCollider("rectangle",0,0,400,400)

  zombie.lifetime=400
  ZombieGroup.add(zombie);

}


}

