//the basis of the canvas
const image = document.getElementById("road")

const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

//Road Map to the Canvas
function copyImageToCanvas() {
  ctx.drawImage(image, 0, 0, 500, 650) 
  
}

setTimeout(() => {copyImageToCanvas()},);

//get the car to the canvas 
const carImg = new Image()

carImg.src ="../images/car.png"
let carImgX = 0
let carImgY = 0

function draw(x,y) {
  ctx.clearRect(0, 0, 700, 700);
  ctx.drawImage(carImg, carImgX, carImgY, 50,50)
}


window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
  

  function startGame() {}
};

