class notcannon {

  constructor(x, y, width, height, angle) {
    this.angle = angle,
    this.x = x,
    this.y = y,
    this.width = width,
    this.height = height

  }


  display() {

    if (keyIsDown(39)&& this.angle < 0.8) {
      this.angle += 0.02;
    }
    else if (keyIsDown(37) && this.angle > -1.2) {
      this.angle -= 0.02;
    }

    push();
    translate(this.x, this.y);
    rotate(this.angle);
    rect(-10,-20,this.width,this.height);
    pop();
    arc(this.x -40,this.y + 80,180,230,PI,TWO_PI);
  }
}
