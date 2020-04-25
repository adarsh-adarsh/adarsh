
function setup() 
{
  createCanvas(1600,400);

  var thickness = 0;
  var weight = 0;
  var speed = 0;
}

function draw() 
{
  background("black");
  
  bullet1();
  bullet2();
  bullet3();
  bullet4();

  wall1();
  wall2();
  wall3();
  wall4();

  wall1damage();
  wall2damage();
  wall3damage();
  wall4damage();

  drawSprites();
}

function wall1()
{
  var wall1 = createSprite(1530,50,60,80);
  wall1.thickness = randomNumber(22,37);
}

function wall2()
{
  var wall2 = createSprite(1530,150,60,80);
  wall2.thickness = randomNumber(37,52);
}

function wall3()
{
  var wall3 = createSprite(1530,250,60,80);
  wall3.thickness = randomNumber(52,67);
}

function wall4()
{
  var wall4 = createSprite(1530,350,60,80);
  wall4.thickness = randomNumber(67,82);
}

function bullet1()
{
  var bullet1 = createSprite(100,50,50,20);
  bullet1.shapecolor = "white";
  bullet1.weight = randomNumber(30,41);
  bullet1.speed = randomNumber(295,320);
}

function bullet2()
{
  var bullet2 = createSprite(100,150,50,20);
  bullet2.shapecolor = "white";
  bullet2.weight = randomNumber(30,41);
  bullet2.speed = randomNumber(270,295);
}

function bullet3()
{
  var bullet3 = createSprite(100,250,50,20);
  bullet3.shapecolor = "white";
  bullet3.weight = randomNumber(41,52);
  bullet3.speed = randomNumber(245,270);
}

function bullet4()
{
  var bullet4 = createSprite(100,350,50,20);
  bullet4.shapecolor = "white";
  bullet4.weight = randomNumber(41,52);
  bullet4.speed = randomNumber(220,245);
}

function wall1damage()
{
  damage1 = (0.5*bullet1weight*bullet1.speed*bullet1.speed)/(wall1.thickness*wall1.thickness*wall1.thickness);
  if(bullet1.collide(wall1))
  {
    if(damage1<10)
    {
      bullet1.shapecolor = "green";
    }

    if(damage1>10)
    {
      bullet1.shapecolor = "red";
    }
  }
}

function wall2damage()
{
  damage2 = (0.5*bullet2.weight*bullet2.speed*bullet2.speed)/(wall2.thickness*wall2.thickness*wall2.thickness);
  if(bullet2.collide(wall2))
  {
    if(damage2<10)
    {
      bullet2.shapecolor = "green";
    }

    if(damage2>10)
    {
      bullet2.shapecolor = "red";
    }
  }
}

function wall3damage()
{
  damage3 = (0.5*bullet3.weight*bullet3.speed*bullet3.speed)/(wall3.thickness*wall3.thickness*wall3.thickness);
  if(bullet3.collide(wall3))
  {
    if(damage3<10)
    {
      bullet3.shapecolor = "green";
    }

    if(damage3>10)
    {
      bullet3.shapecolor = "red";
    }
  }
}

function wall4damage()
{
  damage4 = (0.5*bullet4.weight*bullet4.speed*bullet4.speed)/(wall4.thickness*wall4.thickness*wall4.thickness);
  if(bullet4.collide(wall4))
  {
    if(damage4<10)
    {
      bullet4.shapecolor = "green";
    }

    if(damage4>10)
    {
      bullet4.shapecolor = "red";
    }
  }
}
