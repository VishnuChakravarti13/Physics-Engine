const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground,ball;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  var fall = {
    isStatic : true
  }
  ground = Bodies.rectangle(400,390,800,20,fall);
  World.add(world,ground);
  var sphere = {
    restitution: 2.0
  }
  ball = Bodies.circle(400,100,30,sphere);
  World.add(world,ball);
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER); 
  rect(ground.position.x,ground.position.y,800,20);
  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,30,30);
}