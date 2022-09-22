
let gameState = 0;
function setup() {
  createCanvas(800, 400);
}
function keyPressed() {

  if (keyCode == 49) {
    gameState += 1;
  console.log(gameState);

  } else if(gameState == 2){
    gameState = 0;
  }

}
function draw() {
  background(255);

  if(gameState == 0){
    startGame();
  } else if(gameState == 1){
    playGame();
}

function startGame(){
  background("green");
  textAlign(CENTER);
  textSize(20);
  text("PRESS 1 TO START GAME", width/2,height/2);

}

function playGame(){
 
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
    
  
    draw(){
    fill(this.color)
    ellipse(this.x,this.y,this.width,this.height)
    this.vx /= this.gravity
    this.vy /= this.gravity
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
    
    //collision
    if (this.x > 800 || this.x < 0){
    this.vx = this.vx * -1;
    }
   
    if (this.y > 400 || this.y < 0){
    this.vy = this.vy * -1; 
    }
 }
 }
  function setup(){
    bal1 = new Bal(400,200,25,25, 0, 0,'white');
  }
  
  function draw() {
    background("lightblue");
    bal1.draw();
    if(lineX){
      line(lineX, lineY, mouseX, mouseY);	
    }
  }
  
  function mousePressed() {
    if (bal1.vx > 0.005 || bal1.vy > 0.005){
     lineX = 0 
     lineY = 0
     }
    else {
     lineX = bal1.x;
     lineY = bal1.y;
    }
  }
  
  function mouseReleased() {
  lineX = 0
  lineY = 0  
  
   
  }
  
  function mouseClicked(){
    if (bal1.vx > 0.005 || bal1.vy > 0.005){
      vx = 0
      lineX = 0 
      lineY = 0
    }
    else{
      let vx = 0
      let distX = mouseX - bal1.x;
      let distY = bal1.y - mouseY;
      let timeX = distX / vx;
      let speedY = distY / timeX;
      let vy = speedY;
      bal1.vx = distX / 10;
      bal1.vy = distY / 10 * -1;
    }
  }


}
}
