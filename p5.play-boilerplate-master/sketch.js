
function setup() 
{
  createCanvas(1600,400);

  var weight = 0;
  var speed = 0;
}

function draw() 
{
  background("black"); 
  
  wall();

  car1();
  car2();
  car3();

  deformation1();  
  deformation2();
  deformation3();

  drawSprites();
}

function wall()
{
  var wall = createSprite();
  wall.shapecolor = "brown";
}

function car1()
{
  var car1 = createSprite(100,100,50,50);
  car1.shapecolor = "white";
  car1.speed = RandomNumber();
  car1.weight = RandomNumber();
}

function car2()
{
  var car2 = createSprite(200,100,50,50);
  car2.shapecolor = "white";
  car2.speed = RandomNumber();
  car2.weight = RandomNumber();
}

function car3()
{
  var car3 = createSprite(300,100,50,50);
  car3.shapecolor = "white";
  car3.speed = RandomNumber();
  car3.weight = RandomNumber();
}

function deformation1()
{
  deformation1 = (0.5*weight*speed*speed)/22500;
  if(car1.collide(wall))
  {
    if(deformation1<100)
    {
      car1.shapecolor = "green";
    }
    if(deformation1>100 && deformation1<180)
    {
      car1.shapecolor = "yellow";
    }
    if(deformation1>180)
    {
      car1.shapecolor = "red";
    }
  }
}

function deformation2()
{
  deformation2 = (0.5*weight*speed*speed)/22500;
  if(car2.collide(wall))
  {
    if(deformation2<100)
    {
      car2.shapecolor = "green";
    }
    if(deformation2>100 && deformation2<180)
    {
      car2.shapecolor = "yellow";
    }
    if(deformation2>180)
    {
      car2.shapecolor = "red";
    }
  }
}

function deformation3()
{
  deformation3 = (0.5*weight*speed*speed)/22500;
  if(car3.collide(wall))
  {
    if(deformation3<100)
    {
      car3.shapecolor = "green";
    }
    if(deformation3>100 && deformation3<180)
    {
      car3.shapecolor = "yellow";
    }
    if(deformation3>180)
    {
      car3.shapecolor = "red";
    }
  }
}
