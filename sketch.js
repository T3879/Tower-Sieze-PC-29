const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  //Level one
  ball1 = new Block(700,180,30,40);
 ball2 = new Block(670,180,30,40);
 ball3 = new Block(640,180,30,40);
 ball4 = new Block(730,180,30,40);
 ball5 = new Block(760,180,30,40);
  
 //Level 2
 ball6 = new Block(700,140,30,40);
 ball7 = new Block(670,140,30,40);
 ball8 = new Block(730,140,30,40);

 //Level 3
 ball9 = new Block(700,100,30,40);

 var polygon_options={
   "restitution":0.04,
   "density":0.005
 }

 polygon = Bodies.circle(120,200,20,polygon_options);
 World.add(world,polygon);
 
 slingShot = new SlingShot(this.polygon,{x:120,y:150});
  

}
function draw() {
  background(56,44,44); 

  fill("#d47fff");
  textSize(20);
  text("Press Space to get a second Chance to Play!!",400 ,350);

  fill("#4286ff");
  textSize(25);
  text("Drage the Hexagonal Stone and Release it,to launch it towards blocks",50,40);


  slingShot.display();

 
  imageMode(CENTER);
  image(polygon_img,polygon.position.x,polygon.position.y,40,40);

 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();

  fill("skyblue");
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  fill("turquoise");
  ball6.display();
  ball7.display();
  ball8.display();

  fill("pink");
  ball9.display();
 

}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(this.polygon,{x:120,y:200});
    slingShot.attach(this.polygon);
  
  }
}