
const Engine = Matter.Engine
const World = Matter.World
const Body = Matter.Bodies

var ground;
var cannon;
var cannonball;

function setup() 
{
  var canvas = createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,375);

  cannon = new Cannon(100,300);

  cannonball = new CannonBall(150,287.5);
}

function draw() 
{
  background("yellow");

  Engine.update(engine);

  ground.display();
  cannonball.display();
  cannon.display();

  keyReleased();
}


function keyReleased() 
{
  if(KeyCode=32)
  {
    cannonball.velocityX = 50;
  }
}
