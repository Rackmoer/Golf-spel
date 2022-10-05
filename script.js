
let gameState = 0;

function keyPressed() {

  if (keyCode == 49 && gameState == 0) {
    gameState += 1;

  } else if(gameState == 2){
    gameState = 0;
  }

}

function startGame(){
  background("lightyellow");
  textAlign(CENTER);
  textSize(20);
  text("PRESS 1 TO START GAME", width/2,height/2);
  
}


   
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
      
   if(this.x <= 500 && this.x >= 400 && this.y <= 220 && this.y >= 200 || this.x <= 500 && this.x >= 400 && this.y < 300 && this.y >= 280 ){
     this.vy = this.vy * -1;
   } 
   if(this.x <= 500 && this.x >= 400 && this.y <= 295 && this.y >= 205 ){
     this.vx = this.vx * -1;
   }
    //collision
    if (this.x > 1600 || this.x < 0){
    this.vx = this.vx * -1;
    }
   
    if (this.y > 400 || this.y < 0){
    this.vy = this.vy * -1;  
    }
  if(this.x <= 1525 && this.x >= 1500 && this.y <= 230 && this.y >= 200 && this.vx <= 0.007 && this.vy <= 0.007){
      gameState += 1;
   }
        
 }
}  


class Blok {
  constructor(x, y, w, h, c) {
    this.bx = x;
    this.by = y;
    this.bwidth = w;
    this.bheight = h;
    this.bcolor = c;
  }

  draw() {
    rect(this.bx, this.by, this.bwidth, this.bheight);
  }
}

  var bal1, bal2, bal3, bal4;
  var lineX, lineY;
  var blok1; 
  
  function setup(){
    createCanvas(1600, 400);
    bal1 = new Bal(100,200,25,25, 0, 0,'white');
    blok1 = new Blok(400, 200, 100, 100, 'white');
  }
  
    
  function draw() {
  background(255);

  if(gameState == 0){
    startGame();
  } 
  else if(gameState == 1){
    playGame();
  }
  else if(gameState == 2){
  endGame();
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
  
function playGame(){
   background("lightblue");
  bal1.draw();
  ellipse(1500,200,30,30);
  blok1.draw();
  if(lineX){
    line(lineX, lineY, mouseX, mouseY);	
  }
}
// if bal1 collision with hole +1 op gamestate
function endGame(){
background("black");
  textAlign(CENTER);
  textSize(20);
  text("You win!!!!", width/2,height/2);
}
