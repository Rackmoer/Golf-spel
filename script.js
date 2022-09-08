class Bal{
    constructor(x,y,w,h,vx,vy,c){
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.vx = vx;
    this.vy = vy;
    this.color = c;
    }

    vx = 0
  
    draw(){
    fill(this.color)
    ellipse(this.x,this.y,this.width,this.height)
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    //collision
    if (this.x > 770 || this.x < 0){
    this.vx = this.vx * -1;
    }
   
    if (this.y > 370 || this.y < 0){
    this.vy = this.vy * -1; 
      
    }
 }
}
  
 var bal1, bal2, bal3, bal4;
 var lineX, lineY;

  function setup(){
  createCanvas(800, 400);
  bal1 = new Bal(30,200,25,25, 0, 0,'white');
 
}


function draw() {
  background("lightblue");
  bal1.draw();
  if(lineX){
    line(lineX, lineY, mouseX, mouseY);	
  }
}

function mousePressed() {
  lineX = mouseX;
  lineY = mouseY;

}

function mouseReleased() {
 
}

function mouseClicked(){
 
  
  let vx = 5;

  let distX = mouseX - bal1.x;
  let distY = bal1.y - mouseY;


  let timeX = distX / vx;
 
  let speedY = distY / timeX;
  let vy = speedY;
  bal1.vx = vx;
  bal1.vy = vy * -1;
}