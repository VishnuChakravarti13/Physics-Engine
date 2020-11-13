const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground,box1,box2,box3,box4,box5,log1,log2,log3,log4,pig1,pig2,bird;

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  box1 = new Box(700,320,70,70);
  box2 = new Box(920,320,70,70);
  ground = new Ground(600,height,1200,20); 
  pig1 = new Pig(810,350);
  log1 = new Log(810,260,300,PI/2);
  box3 = new Box(700,240,70,70);
  box4 = new Box(920,240,70,70);
  pig2 = new Pig(810,220);
  log2 = new Log(810,180,300,PI/2);
  box5 = new Box(800,160,70,70);
  log3 = new Log(790,130,150,PI/7);
  log4 = new Log(810,130,150,-PI/7);
  bird = new Bird(50,50,50,50);
}
    
function draw() {
  background(0);  
  Engine.update(engine);
  box1.Display();
  box2.Display();
  ground.Display();
  pig1.Display();
  log1.Display();
  box3.Display();
  box4.Display();
  pig2.Display();
  log2.Display();
  box5.Display();
  log3.Display();
  log4.Display();
  bird.Display();
}