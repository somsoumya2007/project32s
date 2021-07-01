const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint =Matter.Constraint;

var holder,ball,ground;
var stand1,stand2;
var ball;
var slingshot;
var polygonImg;
var backgroundImg

var bg ="background.jpg";
var gameState="background2.jpg";

function preload(){
  getTime();  
}


function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(900,400);
  ground = new Ground();
  stand1 = new Stand(380,300,270,10);
  stand2 = new Stand(700,200,200,10);
 //1st level
 block1 = new Block(280,275,30,40);
 block2 = new Block(310,275,30,40);
 block3= new Block (340,275,30,40);
 block4 = new Block(370,275,30,40);
 block5 = new Block(400,275,30,40);
 block6 = new Block(430,275,30,40);
 block7 = new Block(460,275,30,40);
 block8 = new Block(490,275,30,40);
 
 //2nd level
 block9 = new Block(310,235,30,40);
 block10 = new Block(340,235,30,40);
 block11 = new Block(370,235,30,40);
 block12 = new Block(400,235,30,40);
 block13 = new Block(430,235,30,40);
 block14 = new Block(460,235,30,40);

 //3rd level
 block15 = new Block(340,195,30,40);
 block16 = new Block(370,195,30,40);
 block17 = new Block(400,195,30,40);
 block18 = new Block(430,195,30,40);

 //4th level
 block19 = new Block(370,115,30,40);
 block20 = new Block(400,115,30,40);

 //5th level
 block21 = new Block(385,115,30,40);

 //set two
 //1st level
 bloc1 = new Block(640,175,30,40);
 bloc2 = new Block(670,175,30,40);
 bloc3 = new Block(700,175,30,40);
 bloc4 = new Block(730,175,30,40); 
 bloc5 = new Block(760,175,30,40);

 //2nd level
 bloc6 = new Block(670,135,30,40);
 bloc7 = new Block(700,135,30,40);
 bloc8 = new Block(730,135,30,40);

 //3rd level
 bloc9 = new Block(700,95,30,40);

 //ball with slings
 ball = new Ball(150,120,30);

 slingshot = new SlingShot(ball.body,{x:150,y:120});

}

function draw() {
 if(backgroundImg)
  background(backgroundImg);
  
 Engine.update(engine);
 
 //ground.display
 strokeWeight(2);
 stroke(15);

 stand1.display();
 stand2.display();

 stroke(15);
 fill("purple");
 block1.display();
 block2.display();
 block3.display();
 block4.display();
 block5.display();
 block6.display();
 block7.display();
 block8.display();

 
 stroke(15);
 fill("orange");
 block9.display();
 block10.display();
 block11.display();
 block12.display();
 block13.display();
 block14.display();
 
 stroke(15);
 fill("yellow");
 block15.display();
 block16.display();
 block17.display();
 block18.display();

 stroke(15);
 fill("blue");
 block19.display();
 block20.display();

 stroke(15);
 fill("green");
 block21.display();

 stroke(15);
 fill("pink");
 bloc1.display();
 bloc2.display();
 bloc3.display();
 bloc4.display();
 bloc5.display();


 stroke(15);
 fill("red");
bloc6.display();
bloc7.display();
bloc8.display();


stroke(15);
fill("violet");
bloc9.display();
text("drag line and relise to hit the crazy boxes",600,250);

ball.display();

slingshot.display();

drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(ball.body);
  }
}

async function getTime(){
   var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
   var responseJSON = await response.json();
   var datetime=responseJSON.datetime;
 
   console.log(datetime)
   var hour=datetime.slice(11,13);
   console.log(hour);
   if(hour>=06 && hour<=12   ){
    bg = "background3.jpg";
  }
   else{
    bg= "background4.jpg";
   }
   if (hour>=19 &&hour<=24){
    bg = "background2.jpg";
   }
   else{
     bg="background.jpg";
   }
   
   backgroundImg=loadImage(bg);
   console.log(backgroundImg);
   


}


