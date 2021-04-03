class Paper {
    constructor(x, y,radius) {
      var options = {
          isStactic:false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.rectangle(x, y,radius, options);
      this.radius = radius;
      
      World.add(world, this.body);
      }
     display(){
      ellipseMode(RADIUS);
      fill("yellow");
      rect(this.body.positionX, this.body.positionY, this.radius);
    }
  };
  