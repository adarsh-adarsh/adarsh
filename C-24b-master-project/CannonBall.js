class CannonBall
{
  constructor(x,y)
  {
    var options = 
    {
      'restitution' : 1.0,
      'friction' : 0.5,
      'density' : 0.5,
    }
    
    this.body = Body.circle(x,y,10,options);
    this.radius = 10;

    World.add(world,this.body)
  }

  display()
  {
    var pos = this.body.position;
    fill("black");
    circle(pos.x,pos.y,this.radius);
  }
}