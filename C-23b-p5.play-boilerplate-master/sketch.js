
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;

function setup()
{
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    ground = new ground(200,400,400,1); 

    brick1 = new brick(25,380,50,40);
    brick2 = new brick(75,380,50,40);
    brick3 = new brick(125,380,50,40);
    brick4 = new brick(175,380,50,40);
    brick5 = new brick(225,380,50,40);
    brick6 = new brick(275,380,50,40);
    brick7 = new brick(325,380,50,40);
    brick8 = new brick(375,380,50,40);
    brick9 = new brick(50,340,50,40);
    brick10 = new brick(100,340,50,40);
    brick11 = new brick(150,340,50,40);
    brick12 = new brick(200,340,50,40);
    brick13 = new brick(250,340,50,40);
    brick14 = new brick(300,340,50,40);
    brick15 = new brick(350,340,50,40);
    brick16 = new brick(75,300,50,40);
    brick17 = new brick(125,300,50,40);
    brick18 = new brick(175,300,50,40);
    brick19 = new brick(225,300,50,40);
    brick20 = new brick(275,300,50,40);
    brick21 = new brick(325,300,50,40);
    brick22 = new brick(200,260,300,40);
    brick23 = new brick(100,220,100,40);
    brick24 = new brick(300,220,100,40);
    brick25 = new brick(100,180,100,40);
    brick26 = new brick(300,180,100,40);
    brick27 = new brick(200,140,300,40);
    brick28 = new brick(200,110,200,20);

    pillar1 = new pillar(12.5,240,240,25);
    pillar2 = new pillar(387.5,240,240,25);
    pillar3 = new pillar(37.5,230,180,25);
    pillar4 = new pillar(362.5,230,180,25);

    rooftop1 = new rooftops(12.5,100,1,119,24,119);
    rooftop2 = new rooftops(387.5,100,376,121,399,121);
    rooftop3 = new rooftops(37.5,120,26,139,49,139);
    rooftop4 = new rooftops(362,120,351,139,174,139);
    rooftop5 = new rooftops(200,60,180,100,220,100);

    stand1 = new stand(200,90,20,20);

    flagpost1 = new flagpost(200,35,10,50);

    flag1 = new flag(220,22.5,30,25);
}

function draw()
{
    background(0);
    
    Engine.update(engine);
    
    ground.display();
    
    brick1.display();
    brick2.display();
    brick3.display();
    brick4.display();
    brick5.display();
    brick6.display();
    brick7.display();
    brick8.display();
    brick9.display();
    brick10.display();
    brick11.display();
    brick12.display();
    brick13.display();
    brick14.display();
    brick15.display();
    brick16.display();
    brick17.display();
    brick18.display();
    brick19.display();
    brick20.display();
    brick21.display();
    brick22.display();
    brick23.display();
    brick24.display();
    brick25.display();
    brick26.display();
    brick27.display();
    brick28.display();

    rooftop1.display();
    rooftop2.display();
    rooftop3.display();
    rooftop4.display();
    rooftop5.display();

    pillar1.display();
    pillar2.display();
    pillar3.display();
    pillar4.display();
    
    stand1.display();

    flagpost1.display();
    
    flag1.display();
}
