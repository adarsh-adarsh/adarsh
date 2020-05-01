const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var One,Zero;

function setup()
{
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
}
function draw() 
{
  background("black");  
  NUMBERS();
  Engine.update(engine);
  drawSprites();
}

function NUMBERS()
{
  function number0()
  {
    function ZERO()
    {
      if(World.frameCount % 1 === 0) 
      {
        Zero = new createSprite();
        Zero.x = randomNumber(0,400);
        Zero.scale = 0.5;
        Zero.velocityY = 7;
      }
    }
  }

  function number1()
  {
    function ONE()
    {
      if(World.frameCount % 1 === 0) 
      { 
        One = new createSprite();
        One.x = randomNumber(0,400);
        One.scale = 0.5;
        One.velocityY = 7;
      }
    }
  }
}