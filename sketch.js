var manImage
var thunder1,thunder2,thunder3,thunder4
var man
var ground,thunder,thunderGroup
var batman,batmanImage,batarang,batarangImage
var twoface,twofaceImage
var gameState = "Play"
function preload(){
   manImage = loadAnimation("walking_8.png","walking_7.png","walking_6.png","walking_5.png","walking_4.png","walking_3.png","walking_2.png","walking_1.png") 
   thunder1 = loadImage("1.png")
   thunder2 = loadImage("2.png")
   thunder3 = loadImage("3.png")
   thunder4 = loadImage("4.png")
   batmanImage = loadImage("Batman-PNG-File.png")
   twofaceImage = loadImage("5.png")
   batarangImage = loadImage("batarang.png")
}

function setup(){
   createCanvas(400,600)
   man = createSprite(150,450)
   man.addAnimation("Walking",manImage)
   man.scale = 0.4
   ground = createSprite(200,590,400,10)
   batman = createSprite(50,300)
   batman.addImage(batmanImage)
   batman.scale = 0.1
   thunderGroup = new Group()
}

function draw(){
  if(gameState==="Start"){
    background(0)
    spawnThunder();
    fill("red")
    drawSprites();  
    text("Bruce has lost his parents and is ready to take the vengence",10,200)
    text("He is Ready To Become the Batman in order to kill the enemies",10,220)
    text("Press S to Start",10,240)
    batman.visible = false
    // if(KeyWentDown("s")){
    //   gameState = "Play"
    // }
  }
  if(gameState==="Play"){
    background(150);
    man.visible = false
    thunderGroup.destroyEach()
    //if(KeyDown("UP_ARROW")){
    //  batman.y-=5
    //}
    //if(KeyDown("DOWN_ARROW")){
      batman.y = mouseY
   // }
   drawSprites();
  }
  
}   

function spawnThunder(){
  if(frameCount%60===0){
    thunder = createSprite(Math.round(random(50,350)),50)
    var rand = Math.round(random(1,4))
    if(rand===1){
        thunder.addImage(thunder1)
    }
    else if(rand===2){
      thunder.addImage(thunder2)
    }
    else if(rand===3){
      thunder.addImage(thunder3)
    }
    else if(rand===4){
      thunder.addImage(thunder4)
    } 
    thunder.scale = 0.5
    thunder.lifetime = 20
    thunderGroup.add(thunder)
  }
 
}
function spawnLasers() {
  //write code here to spawn the clouds
  if (frameCount % 200 === 0) {
    var laser = createSprite(600,120,Math.round(random(5,20)),Math.round(random(30,60)));
    laser.y = Math.round(random(80,120));
    var colour=color(random(0, 255));
    laser.shapeColor = colour;
    // cloud.scale = 0.5;
    laser.velocityX = -(2);
    laser.rotation;
    laser.rotationSpeed=20;
    laser.lifetime = 300;
    //l-3
    laser.velocityY=-1;
    
    lasersGroup.add(laser);
  }
}