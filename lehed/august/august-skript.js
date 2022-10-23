const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");


let xPosition = canvas.width/2;
let yPosition = canvas.height-30;
let playerRadius = 10;
let dx = 2
let dy = -2



function drawPlayer() {
    context.beginPath();
    context.arc(xPosition, yPosition, playerRadius, 0, Math.PI*2);
    context.fillStyle = "#0095DD";
    context.fill();
    context.closePath();


}

function draw() {
    context.clearRect(0,0, canvas.width, canvas.height);
    drawPlayer();
    xPosition += dx;
    yPosition += dy;

    if (xPosition + dx > canvas.width - playerRadius || xPosition + dx < playerRadius) {
        dx = -dx;
      }
      if (yPosition + dy > canvas.height - playerRadius || yPosition + dy < playerRadius) {
        dy = -dy;
      }
      
}

setInterval(draw, 10);
  
