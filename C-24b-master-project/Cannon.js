class Cannon
{
  constructor(x,y)
  {
    var options = 
    {
      isStatic:true
    }
    
    this.body1 = Body.rectangle(145,287.5,100,25,options);
    this.body2 = Body.circle(100,300,50,options);
    this.body3 = Body.rectangle(100,312.5,100,25,options);
    this.body4 = Body.rectangle(100,337.5,100,25,options);
    this.width1 = 100;
    this.heigth1 = 25;
    this.radius2 = 50;
    this.width3 = 100;
    this.heigth3 = 25;
    this.width4 = 100;
    this.heigth4 = 25;

    World.add(world,this.body1)
    World.add(world,this.body2)
    World.add(world,this.body3)
    World.add(world,this.body4)
  }

  display()
  {
    strokeWeight(1);
    stroke("black");
    fill("white");
    rectMode(CENTER);
    this.body1.display();
    this.body2.display();
    this.body3.display();
    this.body4.display();
  }
}