let gameState = 0;
var slagen = 0;
function keyPressed() {

  if (keyCode == 49 && gameState == 0) {
    gameState += 1;

  } else if (gameState == 2) {
    gameState = 0;
  }

}

function startGame() {
  background("lightyellow");
  textAlign(CENTER);
  textSize(20);
  text("PRESS 1 TO START GAME", width / 2, height / 2);

}

var bal1, bal2, bal3, bal4;
var lineX, lineY;
var blok = [];
function addObb(x,y,w,h){
  blok.push(new Blok(x, y, w, h, 'white'))
}
function setup() {
  createCanvas(1600, 600);
  bal1 = new Ball(100, 200, 25, 25, 0, 0, 'white');
  addObb(400,200,100,100)
  addObb(1000,200,100,100)
  addObb(0,0,1600,10)
  addObb(0,590,1600,10)
  addObb(0,0,10,600)
  addObb(1590,0,10,600)
  addObb(800,0,20,400)
  addObb(0,400,400,20)
  addObb(500,400,320,20)
  addObb(900,200,20,400)
  addObb(1500,0,20,200)

  
}

class Text {
  constructor(text, x, y, w) {
    this.text = text;
    this.x = x;
    this.y = y;
    this.w = w;
  }
}
function draw() {
  background(255);

  if (gameState == 0) {
    startGame();
  }
  else if (gameState == 1) {
    playGame();
  }
  else if (gameState == 2) {
    endGame();
  }
}




function mousePressed() {
  if (bal1.vx > 0.005 || bal1.vy > 0.005) {
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

function mouseClicked() {
  if (bal1.vx >= 0.005 && bal1.vy >= 0.005) {
    if (bal1.vx <= -0.005 && bal1.vy <= -0.005) {
       
      lineX = 0
      lineY = 0
    }
  }
  else {
    let vx = 0
    let distX = mouseX - bal1.x;
    let distY = bal1.y - mouseY;
    let timeX = distX / vx;
    let speedY = distY / timeX;
    let vy = speedY;
    bal1.vx = distX / 10;
    bal1.vy = distY / 10 * -1;
  }
  if (bal1.vx >= 0.005 && bal1.vy >= 0.005) {
    slagen = slagen + 1;
    console.log(slagen);
  }
}

function playGame() {
  background("lightblue");
  bal1.draw();
  ellipse(1550, 70, 30, 30);
  text("slagen: " + slagen,70, 30);
  blok.forEach((b) => {b.draw();bal1.checkCollision(b)})


  if (lineX) {
    line(lineX, lineY, mouseX, mouseY);
  }
  if (bal1.x > 1550 && bal1.x < 1580 && bal1.y > 70 && bal1.y < 100) {
     gameState += 1;
  }
    

  
}
// if bal1 collision with hole +1 op gamestate
function endGame() {
  background("black");
  textAlign(CENTER);
  textSize(20);
  text("You win!!!!", width / 2, height / 2);
}
