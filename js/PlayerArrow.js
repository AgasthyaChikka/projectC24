class ComputerArrow {
    constructor(x, y, width, height, archerAngle) {
      var options = {
        restitution: 0.8,
        friction: 1.0,
        density: 1.0,
        isStatic: true
      };

      shoot(archerAngle);{
        var velocity=p5.vector.fromAngle(archerAngle);
        velocity.mult(20);
        matter.Body.setStatic(this.body,false);
        matter.Body.setVelocity(this.body,{x: velocity.x,y:velocity.y});
      }

      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      this.image = loadImage("./assets/playerarrow.png");
      World.add(world, this.body);
    }
  

  }
   display(); {
      var pos = this.body.position;
      var angle = this.body.angle;
      
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }
  