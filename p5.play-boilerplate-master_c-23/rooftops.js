
class rooftops
{
  constructor(x1,y1,x2,y2,x3,y3) 
  {
    var options = 
    {
      isStatic:true
    }
    this.body = Bodies.triangle(x1,y1,x2,y2,x3,y3);
    
    World.add(world,this.body);
  }
  display()
  {
    var pos = this.body.position;
    fill("red");
    triangle(pos.x1,pos.y1,pos.x2,pos.y2,pos.x3,pos.y3);
  }
}
