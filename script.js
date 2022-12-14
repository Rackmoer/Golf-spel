let gameState = 0;
var slagen = -1;
var highscore = 99999;
let img;

function preload() {
  img = loadImage('img/naamspel.png');
  paal = loadImage('img/vlag.png');
  Golfbal = loadImage('img/Golfbal.png');
  golfbal2 = loadImage('img/golfbal2.png');
  golfclub = loadImage('img/golfclub.png');
}





function keyPressed() {

  if (keyCode == 13 && gameState == 0) {
    gameState = 1;

  }
  else if (gameState == 2) {
    gameState = 0;
  }
  if (keyCode == 82) {
    gameState = 0;
    bal1.x == 100;
    bal1.y == 200;
    slagen = 0;

  }
}

// beginscherm
function startGame() {

  fill("black");
  background("lightyellow");
  textAlign(CENTER);
  textSize(20);
  text("PRESS ENTER TO START GAME", 800, 400);
  image(img, 600, 0, 400, 400)
  image(golfclub, 1200, 120, 300, 300)
  image(golfbal2, 200, 150, 300, 300)
}

var bal1, bal2, bal3, bal4;
var lineX, lineY;
var blok = [];
// maak een object
function addObb(x, y, w, h) {
  blok.push(new Blok(x, y, w, h, 'white'))
}
function setup() {
  // alle losse opjecten 
  createCanvas(1600, 600);
  scoretext = new Text(700, 400, 100)
  bal1 = new Ball(100, 200, 25, 25, 0, 0, 'white');
  addObb(400, 200, 100, 100);
  addObb(1000, 200, 100, 100);
  addObb(0, 0, 1600, 10);
  addObb(0, 590, 1600, 10);
  addObb(0, 0, 10, 600);
  addObb(1590, 0, 10, 600);
  addObb(800, 0, 20, 400);
  addObb(0, 400, 400, 20);
  addObb(500, 400, 320, 20);
  addObb(900, 200, 20, 400);
  addObb(1500, 0, 20, 200);
  addObb(1000, 40, 20, 160);
  addObb(1350, 140, 20, 160);
  addObb(1100, 280, 250, 20);
  addObb(1100, 400, 250, 20);
  addObb(1350, 400, 20, 200);
  image(img, 600, 0, 400, 400);
  image(paal, 1550, 70, 300, 300);
  image(golfclub, 650, 50, 300, 300)
  image(golfbal2, 200, 150, 300, 300)
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
  // bal mag alleen bewegen bij lage snelheid/ stilstaan 
  if (bal1.vx <= 0.005 && bal1.vy <= 0.005) {
    if (bal1.vx >= -0.005 && bal1.vy >= -0.005) {

      let vx = 0
      let distX = mouseX - bal1.x;
      let distY = bal1.y - mouseY;
      let timeX = distX / vx;
      let speedY = distY / timeX;
      let vy = speedY;
      bal1.vx = distX / 10;
      bal1.vy = distY / 10 * -1;
      // slagen bijhouden
      slagen = slagen + 1;
    }
  }

}
// gamestate 1 (main game)
function playGame() {
  background(0, 135, 90);
  bal1.draw();
  ellipse(1550, 70, 30, 30);
  fill(210)
  text("hits: " + slagen, 70, 30);
  // add object 
  blok.forEach((b) => { b.draw(); bal1.checkCollision(b) })
  // lijn op bal bij het schieten
  if (lineX) {
    line(lineX, lineY, mouseX, mouseY);
  }
  if (bal1.x > 1535 && bal1.x < 1565 && bal1.y > 65 && bal1.y < 95 && bal1.vx <= 0.01 && bal1.vy <= 0.01 && bal1.vx >= -0.01 && bal1.vy >= -0.01) {
    gameState += 1;
    bal1.x = 100;
    bal1.y = 200
  }

  image(paal, 1503, -15, 120, 120);

}
// if bal1 collision with hole +1 op gamestate
function endGame() {
  background("black");
  text('Your score was: ' + slagen, 800, 500);
  text('Your highscore is: ' + highscore, 800, 550);
  text('Press "R" to play again', 800, 420);
  textAlign(CENTER);
  textSize(20);
  if (slagen <= highscore) {
    highscore = slagen
  }
  text("You win!", width / 2, height / 2);

}
