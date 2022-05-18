/*
class notcannonball {
  constructor(x, y) {
    var options = {
      isStatic: true
    };

    this.x=x;
    this.y=y;

    //this.image = loadImage("assets/cannonball.png");

    this.body = Bodies.rectangle(this.x,this.y,20,20, options);
    World.add(world, this.body);
  }
  display() {

    var pos = this.body.position;
    push();
    translate(this.body.position.x, this.body.position.y);
    imageMode(CENTER);
    //image(this.image, 0, 0, 20, 20);
    rect(0,0,20,20)
    pop();
  }
}
*/
class notcannonball {
  constructor(x, y) {
    var options = {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
      isStatic: true
    };
    this.r = 40;

    this.body = Bodies.circle(x, y, this.r, options);

    this.image = loadImage("./assets/cannonball.png");
    World.add(world, this.body);
  }

  shoot() {
    var velocity = p5.Vector.fromAngle(cannon.angle);
    velocity.mult(20);
    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body, { x: velocity.x, y: velocity.y });
  }

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.r, this.r);
    pop();

    }
  }