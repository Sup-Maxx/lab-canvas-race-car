//the basis of the canvas
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 500
canvas.height = 650
let frames = 0
let score = 0
let gamespeed = 2
const roadImg = document.getElementById("road");
//width(x) = 500 height(y) = 650

//setting up the car image
const carImg = new Image();
carImg.src = "./images/car.png";
let carImgX = canvas.width / 2 - 25; // X position of the car on the canvas
let carImgY = 560; // Y position of the car on the canvas

//character movement controls
let keys = [];
window.addEventListener("keydown", function (e) {
  keys[e.keyCode] = true;
});

window.addEventListener("keyup", function (e) {
  keys[e.keyCode] = false;
});

function init() {
  carImgX = canvas.width / 2 - 25;
  carImgY = 560;
}

function loop() {
  update();
  render();
}

function update() {
  //player movement control
  if (keys[65] == true) {carImgX -= 3} // to the left A
  if (keys[87] == true) {carImgY -= 6} // to the top W
  if (keys[68] == true) {carImgX += 3} // to the right D
  if (keys[83] == true) {carImgY += 6} // to the bottom S

  //collision detection with the boundries
  if (carImgX < 0) {carImgX = 0}
  if (carImgX > 500) {carImgX = 500 - 50;}
  if (carImgY < 0) {carImgY = 0;}
  if (carImgY > 650) {carImgY = 650 - 50;}
}

class Obstacle {
  constructor(width, height, color, x, y){
    this.width = width
    this.height = height
    this.color = color
    this.x = x
    this.y = y

    
    /* this.top = (Math.random()*canvas.height/3)+20;
    this.bototm = (Math.random()*canvas.height/3)+20;
    this.x = canvas.width;
    this.width = 20;
    this.color = "rgb(228,2,120)" */
  }
  draw(){
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, 0, this.width, this.top) // upper obstacle
    ctx.fillRect(this.x, canvas.height-this.bottom, this.width, this.bottom)
  }
  update(){
    this.x -= gamespeed
    this.draw()
  }
}

const obstaclesArray = [];

function createObstacles() {
  for (i = 0; i < myObstacles.length; i++) {
    myObstacles[i].x += -1;
    myObstacles[i].render();
  }
  
  frames+=1

  if (frames%120===0) {
    let x = canvas.width
    let minHeight = 20;
    let maxHeight = 200;
    let height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);

    let minGap = 50;
    let maxGap = 200;
    let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
    //top obstacles
    obstaclesArray.push(new Obstacle(10, height, "red", x, 0))
    obstaclesArray.push(new Obstacle(10, x-height-gap, "red", x, height+gap))
  }
}



/* function handleObstacles() {
  if (frames%50 === 0) {
    obstaclesArray.unshift(new Obstacle);  
  }
  for (let i=0; i<obstaclesArray.length; i++) {
    obstaclesArray[i].update()
  }
  if (obstaclesArray.length > 20) {
    obstaclesArray.pop(obstaclesArray[0])
  }
} */

function render() {
  //clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //draw the canvas background
  ctx.drawImage(roadImg, 0, 0, 500, 650);
  //draw the car
  ctx.drawImage(carImg, carImgX, carImgY, 50, 70);

  handleObstacles()
}

window.setInterval(loop, 1000 / 60);

init();

/* window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {}
};
 */
