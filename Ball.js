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


    // if (this.x <= 1525 && this.x >= 1500 && this.y <= 230 && this.y >= 200 && this.vx <= 0.007 && this.vy <= 0.007) {
    //   gameState += 1;
    // }
  }


  draw() {
    fill(this.color)
    ellipse(this.x, this.y, this.w, this.h)
    this.vx /= this.gravity
    this.vy /= this.gravity
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
  }
    
  hit(block) {
    //collision


  }
  
  checkCollision(block) {

    let colliding = false;
    // calculate difference from x and y axis centres
    let dx = (this.x + this.halfWidth) - (block.x + block.halfWidth);
    let dy = (this.y + this.halfHeight) - (block.y + block.halfHeight);

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





  //  if(this.x <= 500 && this.x >= 400 && this.y <= 220 && this.y >= 200 || this.x <= 500 && this.x >= 400 && this.y < 300 && this.y >= 280 ){
  //    this.vy = this.vy * -1;
  //  } 
  //  if(this.x <= 500 && this.x >= 400 && this.y <= 295 && this.y >= 205 ){
  //    this.vx = this.vx * -1;
  //  }
  //   //collision
  //   if (this.x > 1600 || this.x < 0){
  //   this.vx = this.vx * -1;
  //   }

  //   if (this.y > 400 || this.y < 0){
  //   this.vy = this.vy * -1;  
  //   }
  // if(this.x <= 1525 && this.x >= 1500 && this.y <= 230 && this.y >= 200 && this.vx <= 0.007 && this.vy <= 0.007){
  //     gameState += 1;
  //  }
