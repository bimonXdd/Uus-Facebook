const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");


let mängijaAsukohtX = canvas.width/2;
let mängijaAsukohtY = canvas.height-30;
let mängijaSuurus = 10;
let dx = 2
let dy = -2

let onVasakule = false;
let onParemale = false;
let hiireAsukoht = {"x": 0, "y":0}

function leiaHiireAsukoht(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}
canvas.addEventListener('mousemove', function(evt) {
  hiireAsukoht = leiaHiireAsukoht(canvas, evt);
}, false);

function drawPlayer() {
    context.beginPath();
    context.arc(mängijaAsukohtX, mängijaAsukohtY, mängijaSuurus, 0, Math.PI*2);
    context.fillStyle = "#0095DD";
    context.fill();
    context.closePath();


}

function draw() {
    context.clearRect(0,0, canvas.width, canvas.height);
    context.canvas.width = window.innerWidth-10
    context.canvas.height = window.innerHeight/1.1

    drawPlayer();
    mängijaAsukohtX = hiireAsukoht.x;
    mängijaAsukohtY = hiireAsukoht.y;

    if (mängijaAsukohtX + dx > canvas.width - mängijaSuurus || mängijaAsukohtX + dx < mängijaSuurus) {
        dx = -dx;
      }
      if (mängijaAsukohtY + dy > canvas.height - mängijaSuurus || mängijaAsukohtY + dy < mängijaSuurus) {
        dy = -dy;
      }
      
}


setInterval(draw, 0.0001);
  
