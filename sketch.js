const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground,box1,box2;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  box1 = new Box(200,100,100,100)
  box2 = new Box(250,200,75,75);
  ground = new Ground(400,390,800,20); 
}
    
function draw() {
  background(0);  
  Engine.update(engine);
  box1.Display();
  box2.Display();
  ground.Display();
}