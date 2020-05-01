class Ground
{
  constructor(x,y)
  {
    var options = 
    {
    isStatic:true
    }
    
    this.body = Body.rectangle(x,y,800,50,options);
    this.width = 800;
    this.heigth = 50;
    
    World.add(world,this.body)
  }

  display()
  {
    var pos = this.body.position;
    fill("brown");
    rectMode(CENTER);
    rect(pos.x,pos.y,this.width,this.heigth);
  }
}