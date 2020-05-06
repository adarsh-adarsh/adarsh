class CataPult
{
  constructor(bodyA, pointB)
  {
    var options = 
    {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 0.04,
      length: 10
    }
    this.cata1 = loadImage("sprites/sling1.png");
    this.cata2 = loadImage("sprites/sling2.png");
    this.cata3 = loadImage("sprites/sling3.png");
    this.cataB = pointB
    this.cata = Constraint.create(options);
    World.add(world, this.cata);
  }

  fly()
  {
    this.cata.bodyA = null;
  }

  display()
  {
    image(this.cata1,170,420);
    image(this.cata2,142,411);
    if(this.cata.bodyA)
    {
      var pointA = this.cata.bodyA.position;
      var pointB = this.pointB;
      push();
      strokeWeight(7);
      stroke(48,22,8);
      if(pointA.x<220)
      {
        line(pointA.x-20,pointA.y, pointB.x-10, pointB.y);
        line(pointA.x-20,pointA.y, pointB.x+30, pointB.y-3);
        image(this.cata3,pointA.x-30,pointA.y-10,15,30);   
      }
      else 
      {
        strokeWeight(4);
        line(pointA.x+25,pointA.y, pointB.x-10, pointB.y);
        line(pointA.x+25,pointA.y, pointB.x+30, pointB.y-3);
        image(this.cata3,pointA.x+25,pointA.y-10,15,30);  
      }
      pop();
    }
  }
}