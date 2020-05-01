class BaseClass
{
  constructor(x,y) 
  {
  this.body = Bodies(x,y);
  this.image = loadImage();
  World.add(world, this.body);
  }
  
  display()
  {
  imageMode(CENTER);
  image(this.image);
  }
}