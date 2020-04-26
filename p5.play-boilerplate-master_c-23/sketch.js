
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

    brick1 = new pillar(25,380,50,40);
    brick2 = new pillar(75,380,50,40);
    brick3 = new pillar(125,380,50,40);
    brick4 = new pillar(175,380,50,40);
    brick5 = new pillar(225,380,50,40);
    brick6 = new pillar(275,380,50,40);
    brick7 = new pillar(325,380,50,40);
    brick8 = new pillar(375,380,50,40);
    brick9 = new pillar(50,340,50,40);
    brick10 = new pillar(100,340,50,40);
    brick11 = new pillar(150,340,50,40);
    brick12 = new pillar(200,340,50,40);
    brick13 = new pillar(250,340,50,40);
    brick14 = new pillar(300,340,50,40);
    brick15 = new pillar(350,340,50,40);
    brick16 = new pillar(75,300,50,40);
    brick17 = new pillar(125,300,50,40);
    brick18 = new pillar(175,300,50,40);
    brick19 = new pillar(225,300,50,40);
    brick20 = new pillar(275,300,50,40);
    brick21 = new pillar(325,300,50,40);
    brick22 = new pillar(200,260,300,40);
    brick23 = new pillar(100,220,100,40);
    brick24 = new pillar(300,220,100,40);
    brick25 = new pillar(100,180,100,40);
    brick26 = new pillar(300,180,100,40);
    brick27 = new pillar(200,140,300,40);
    brick28 = new pillar(200,110,200,20);

    pillar1 = new pillar(12.5,240,240,25);
    pillar2 = new pillar(387.5,240,240,25);
    pillar3 = new pillar(37.5,230,180,25);
    pillar4 = new pillar(362.5,230,180,25);

    rooftop1 = new rooftops(12.5,100,1,119,24,119);
    rooftop2 = new rooftops(387.5,100,376,121,399,121);
    rooftop3 = new rooftops(37.5,120,26,139,49,139);
    rooftop4 = new rooftops(362,120,351,139,174,139);
    rooftop5 = new rooftops(200,60,180,100,220,100);

    stand = new pillar(200,90,20,20);

    flagpost = new pillar(200,35,10,50);

    flag = new pillar(220,22.5,30,25);
}

function draw()
{
    background(0);
    
    Engine.update(engine);
    
    ground.display();
    
    brick1.display();
    brick1.fill("white");
    brick2.display();
    brick2.fill("white");
    brick3.display();
    brick3.fill("white");
    brick4.display();
    brick4.fill("white");
    brick5.display();
    brick5.fill("white");
    brick6.display();
    brick6.fill("white");
    brick7.display();
    brick7.fill("white");
    brick8.display();
    brick8.fill("white");
    brick9.display();
    brick9.fill("white");
    brick10.display();
    brick10.fill("white");
    brick11.display();
    brick11.fill("white");
    brick12.display();
    brick12.fill("white");
    brick13.display();
    brick13.fill("white");
    brick14.display();
    brick14.fill("white");
    brick15.display();
    brick15.fill("white");
    brick16.display();
    brick16.fill("white");
    brick17.display();
    brick17.fill("white");
    brick18.display();
    brick18.fill("white");
    brick19.display();
    brick19.fill("white");
    brick20.display();
    brick20.fill("white");
    brick21.display();
    brick21.fill("white");
    brick22.display();
    brick22.fill("white");
    brick23.display();
    brick23.fill("white");
    brick24.display();
    brick24.fill("white");
    brick25.display();
    brick25.fill("white");    
    brick26.display();
    brick26.fill("white");
    brick27.display();
    brick27.fill("white");
    brick28.display();
    brick28.fill("white");
    
    pillar1.display();
    pillar1.fill("green");
    pillar2.display();
    pillar2.fill("green");
    pillar3.display();
    pillar3.fill("green");
    pillar4.display();
    pillar4.fill("green");
    
    stand.display();
    stand.fill("yellow"); 

    flagpost.display();
    flagpost.fill("brown");

    flag.display();
    flag.fill("blue");
}
