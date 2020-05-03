const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var paddle;
var ball;

function setup()
{
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var paddle_options =
  {
    isStatic: true
  }
  paddle = Bodies.rectangle(200,100,300,50,paddle_options);
  World.add(world,paddle);
  var ball_options = 
  {
    restitution:1
  }
  ball = Bodies.circle(200,300,50,ball_options);
  World.add(world,ball);
}

function draw()
{
  background("black");
  Engine.update(engine);
  
  fill("brown");
  rectMode(CENTER);
  rect(paddle.position.x,paddle.position.y,300,50);
  
  fill("blue");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  
  var line_options = 
  {
    lenght : 0.01,
    stiffness : 0.001
  }

  strokeWeight(5);
  stroke("white");
  line(paddle.position.x,paddle.position.y,ball.position.x,ball.position.y,line_options);
}