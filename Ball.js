class Ball {
  constructor(x, y, w, h, vx, vy, c) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.vx = vx;
    this.vy = vy;
    this.color = c;
    this.gravity = 1.05;

    // for easy readable calculation
    this.halfWidth = this.w / 2;
    this.halfHeight = this.h / 2;



  }


  draw() {
    fill(this.color)
    ellipse(this.x, this.y, this.w, this.h)
    this.vx /= this.gravity
    this.vy /= this.gravity
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
    this.nx = this.x + this.vx;
    this.ny = this.y + this.vy;
  }

  hit(block) {
    //collision


  }

  checkCollision(block) {
    let nx = bal1.x + bal1.vx;
    let ny = bal1.y + bal1.vy;
    let colliding = false;
    // calculate difference from x and y axis centres
    let dx = (nx + this.halfWidth - 10) - (block.x + block.halfWidth);
    let dy = (ny + this.halfHeight - 10) - (block.y + block.halfHeight);

    let combinedHalfWidths = this.halfWidth + block.halfWidth;
    let combinedHalfHeights = this.halfHeight + block.halfHeight;

    // x-axis collision?
    if (Math.abs(dx) < combinedHalfWidths) {


      // y-axis collision?
      if (Math.abs(dy) < combinedHalfHeights) {

        let overlapX = combinedHalfWidths - Math.abs(dx);
        let overlapY = combinedHalfHeights - Math.abs(dy);

        // collision is on the smallest overlap
        if (overlapX >= overlapY) {
          if (dy > 0) {
            this.vy = this.vy * -1;
            colliding = "top";
          }
          else {
            this.vy = this.vy * -1;
            colliding = "bottom";
          }
        }
        else {
          if (dx > 0) {
            this.vx = this.vx * -1;
            colliding = "left";
          }
          else {
            this.vx = this.vx * -1;
            colliding = "right";
          }
        }


      }


      return colliding;
    }
  }

}




