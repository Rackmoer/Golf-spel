class Bal{
    constructor(x,y,w,h,vx,vy,c){
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.vx = vx;
    this.vy = vy;
    this.color = c;
    this.gravity = 1.05
    }


    vx = 0
  
    draw(){
    fill(this.color)
    ellipse(this.x,this.y,this.width,this.height)
    this.vx /= this.gravity
    this.vy /= this.gravity
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

// class blok{
// constructor(x,y,w,h,vx,vy,c)  
//   this.bx = x;
//   this.by = y;
//   this.bwidth = w;
//   this.bheight = h;
//   this.bvx = vx;
//   this.bvy = vy;
//   this.bcolor = c;
// draw(){
//   ellipse(this.x,this.y,this.width,this.height)
    
}


  
 var bal1, bal2, bal3, bal4;
 var lineX, lineY;
 var blok1; 

  function setup(){
  createCanvas(800, 400);
  bal1 = new Bal(400,200,25,25, 0, 0,'white');
  // blok1 = new blok(400,200,25,25, 0, 0,'white');
}


function draw() {
  background("lightblue");
  bal1.draw();
  if(lineX){
    line(lineX, lineY, mouseX, mouseY);	
  }


function mousePressed() {
  lineX = mouseX;
  lineY = mouseY;

}

function mouseReleased() {
 
}

function mouseClicked(){
 
  
    let vx = 0
    let distX = mouseX - bal1.x;
    let distY = bal1.y - mouseY;
    let timeX = distX / vx;
    let speedY = distY / timeX;
    let vy = speedY;
    bal1.vx = distX / 10;
    bal1.vy = distY / 10 * -1;
  
}




// function draw() {
//   background(225);

//   fill("white");
//   rect(block.x, block.y, block.w, block.h);

//   if (x < block.x + block.w && x + w > block.x) {
//     fill("red");
//   }
//   else {
//     fill("green");
//   }


//   rect(x, y, w, h);
//   x = x + vx;


//   }
// }