class Blok {
  constructor(x, y, w, h, c) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = c;

    // for easy readable calculation
    this.halfWidth = this.w / 2;
    this.halfHeight = this.h / 2 ;
  }

  draw() {
    rect(this.x, this.y, this.w, this.h);
  }
}