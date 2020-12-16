var maze1,maze2,maze3,maze4,maze5,maz6,maze7
,maze8,maze9,maze10,maze11,maze12,maze13,maze14,
maze15,maze16,maze17,maze18,maze19,maze20

var AlmondImg,AppleImg,BroccoliImg,CarrotImg,CheeseImg,ChickenImg,EggImg,Egg2Image,GuavaImg,MangoImg,MilkImg,Milk2Img,Milk3Img;
var MushroomImg,OrangeJuiceImg,PeanutsImg,StrawberryImg,TunaImg,TheNutrientTestImg;

var boy

var mazeGroup


function preload(){

//loading the images

almondImg=loadImage("Images/Almonds.png");
appleImg=loadImage("Images/Apple.png");
broccoliImg=loadImage("Images/Broccoli.png");
peanutsImg=loadImage("Images/Peanuts.png");
strawberryImg=loadImage("Images/Strawberry.png");
chickenImg=loadImage("Images/Chicken.png");
eggImg=loadImage("Images/Egg.png");
carrotImg=loadImage("Images/Carrots.png");
cheeseImg=loadImage("Images/Cheese.png");
milkImg=loadImage("Images/Milk.png");


boyStanding = loadImage("Images/Boy_Standing.png")
boyRunning= loadAnimation("Images/Boy_Running.png","Images/Boy_Standing.png");

boyLStanding = loadImage("Images/boyLeft.png")
boyLRunning= loadAnimation("Images/boy_leftRunning.png","Images/boyLeft.png");

}

function setup(){

createCanvas(1200,600);

maze1 = createSprite(600,20,1000,20)
maze2= createSprite(90,240,20,460)
maze10= createSprite(1100,185,20,350)
maze13= createSprite(1030,180,150,20)
maze14= createSprite(1000,300,200,20)
maze15= createSprite(550,580,1100,20)
maze20= createSprite(315,380,200,20)
maze21= createSprite(205,470,20,200)
maze22= createSprite(600,420,20,300)
maze23= createSprite(420,290,20,200)
maze24= createSprite(550,280,80,20)
maze25= createSprite(315,200,200,20)
maze26= createSprite(220,190,20,100)
maze27= createSprite(700,350,20,450)
maze29= createSprite(760,370,100,20)
maze30= createSprite(810,420,20,120)
maze31= createSprite(630,180,150,20)
maze33= createSprite(470,65,20,100)
maze34= createSprite(330,65,20,100)
maze36= createSprite(850,480,100,20)
maze37= createSprite(390,480,200,20)
maze38= createSprite(1100,540,20,100)
maze39= createSprite(800,80,20,100)
maze40= createSprite(750,220,100,20)
maze41= createSprite(850,120,100,20)

mazeGroup = new Group()
mazeGroup.add(maze1)
mazeGroup.add(maze2)
mazeGroup.add(maze10)
mazeGroup.add(maze13)
mazeGroup.add(maze14)
mazeGroup.add(maze15)
mazeGroup.add(maze20)
mazeGroup.add(maze21)
mazeGroup.add(maze22)
mazeGroup.add(maze23)
mazeGroup.add(maze24)
mazeGroup.add(maze25)
mazeGroup.add(maze26)
mazeGroup.add(maze27)
mazeGroup.add(maze29)
mazeGroup.add(maze30)
mazeGroup.add(maze31)
mazeGroup.add(maze33)
mazeGroup.add(maze34)
mazeGroup.add(maze36)
mazeGroup.add(maze37)
mazeGroup.add(maze38)
mazeGroup.add(maze39)
mazeGroup.add(maze40)
mazeGroup.add(maze41)




Almond=createSprite(370,250);
Almond.addImage(almondImg)
Almond.scale = 0.05

Apple=createSprite(630,150);
Apple.addImage(appleImg)
Apple.scale = 0.05

Broccoli=createSprite(380,470);
Broccoli.addImage(broccoliImg)
Broccoli.scale = 0.08

Peanuts=createSprite(660,230);
Peanuts.addImage(peanutsImg)
Peanuts.scale = 0.08

Strawberry=createSprite(570,320);
Strawberry.addImage(strawberryImg)
Strawberry.scale = 0.06

Chicken=createSprite(850,450);
Chicken.addImage(chickenImg)
Chicken.scale = 0.07

Egg=createSprite(1060,270);
Egg.addImage(eggImg)
Egg.scale = 0.05

Carrot = createSprite(130,60)
Carrot.addImage(carrotImg)
Carrot.scale = 0.3

Cheese = createSprite(1060,150)
Cheese.addImage(cheeseImg)
Cheese.scale = 0.05

Milk = createSprite(850,70)
Milk.addImage(milkImg)
Milk.scale = 0.05


boy = createSprite(30,400,70,70)
boy.addAnimation("runningR", boyRunning)
boy.addAnimation("standingR", boyStanding)
boy.addAnimation("runningL", boyLRunning)
boy.addAnimation("standingL", boyLStanding)
boy.scale = 0.8
}

function draw(){
    
background("rgb(173,216,230)")

boy.collide(mazeGroup)

if(keyDown("space")){
    boy.velocityY  = -13
}
if(keyDown("right")){
    boy.x  = boy.x + 5
    boy.changeAnimation("runningR", boyRunning)
}
if(keyDown("left")){
    boy.x  = boy.x - 5
    boy.changeAnimation("runningL", boyLRunning)
}

if(boy.isTouching(Almond)){
    Almond.destroy()
}

if(boy.isTouching(Apple)){
    Apple.destroy()
}

if(boy.isTouching(Broccoli)){
    Broccoli.destroy()
}

if(boy.isTouching(Peanuts)){
    Peanuts.destroy()
}

if(boy.isTouching(Strawberry)){
    Strawberry.destroy()
}

if(boy.isTouching(Chicken)){
    Chicken.destroy()
}

if(boy.isTouching(Egg)){
    Egg.destroy()
}

if(boy.isTouching(Carrot)){
    Carrot.destroy()
}

if(boy.isTouching(Cheese)){
    Cheese.destroy()
}

if(boy.isTouching(Milk)){
    Milk.destroy()
}

boy.velocityY = boy.velocityY + 0.8

drawSprites()
}

