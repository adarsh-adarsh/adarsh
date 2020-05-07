const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var backgroundImg,platform;
var bird,slingshot;
var pig1,pig3;
var box1,box2,box3,box4,box5;
var log1,log3,log4,log5;

var gameState = "onSling";
var bg = "sprites/bg1.png";

var score1 = 0;
var score2 = 0;
var score3 = 0;
var SCORE = score1 + score2 + score3;

function preload() 
{
    getBackgroundImg();
}

function setup()
{
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70);
    
    pig1 = new Pig(810, 350);
    pig3 = new Pig(810, 220);
    
    log1 = new Log(810,260,300, PI/2);
    log3 =  new Log(810,180,300, PI/2);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw()
{
    if(backgroundImg)
        background(backgroundImg);

        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + SCORE, width-300, 50)
    
    Engine.update(engine);
    //strokeWeight(4);
    
    pig1.display();
    pig1.score1();
    pig3.display();
    pig3.score1();

    box1.display();
    box1.score2();
    box2.display();
    box2.score2();
    box3.display();
    box3.score2();
    box4.display();
    box4.score2();
    box5.display();
    box5.score2();

    log1.display();
    log1.score3();
    log3.display();
    log3.score3();
    log4.display();
    log4.score3();
    log5.display();
    log5.score3();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged()
{
    //if (gameState!=="launched"){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased()
{
    slingshot.fly();
    gameState = "launched";
}

function keyPressed()
{
    if(keyCode === 32 )
    {
    slingshot.attach(bird.body);
    }
}

async function getBackgroundImg()
{
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900)
    {
        bg = "sprites/bg1.png";
    }
    else
    {
        bg = "sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}