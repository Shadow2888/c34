const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;



function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);

   ball = new Ball(300,200,60,60);
  
   rope = new Rope(ball.body,{x:300, y:50});

   box1 = new Box(400,370,60,60);
   box2 = new Box(400,250,60,60);
   box3 = new Box(400,130,60,60);
   box4 = new Box(400,10,60,60);
   box5 = new Box(500,370,60,60);
   box6 = new Box(500,250,60,60);
   box7 = new Box(500,150,60,60);
   box8 = new Box(500,10,60,60);

   box9 = new Box(200,370,60,60);
   box10 = new Box(200,250,60,60);
   box11 = new Box(200,130,60,60);
   box12 = new Box(200,10,60,60);
   box13 = new Box(100,370,60,60);
   box14 = new Box(100,250,60,60);
   box15 = new Box(100,150,60,60);
   box16 = new Box(100,10,60,60);






}

function draw() {
  background(0,0,0);  
  Engine.update(engine);
ground.display();

ball.display();

rope.display();

box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();





}




function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  //}
}
