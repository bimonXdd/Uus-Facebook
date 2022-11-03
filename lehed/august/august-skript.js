const canvas = document.getElementById("mäng");
const context = canvas.getContext("2d");

let aega = 1

let mängija = {
  "asukohtX" : 200,
  "asukohtY" : 300,
  "asubKõrguses" : {
    vasakult: true,
    paremalt: true,
  },
  "asubLaiuses" : {
    ülevalt: true,
    alt: true,
  },
  "suurus"  : {
    "laius" : 30,
    "kõrgus": 30, 
  },

  "onMängijaVastas" : false,
  "suund" : "vasakule",

  "kiirus" : { 
    "dx"  : 20,
    "dy"  : 20,
  },
  "värvid" : {
    "nägu" : "#F6C0BA",
    "keha" : "#0095DD",

  },

  "nupud" : {
    "paremale" : false,
    "vasakule" : false,
    "ülesse" : false,
    "alla" : false,
  }
}

let vastane = {
  "asukohtX" : suvalineInt(0,canvas.width),
  "asukohtY" : suvalineInt(0,canvas.height),
  "suurus"  : suvalineInt(5,20),
  "onMängijaVastas" : false,
}

function uusVastane(){
  vastane.asukohtX = suvalineInt(0,canvas.width)
  vastane.asukohtY = suvalineInt(0,canvas.height)
  vastane.suurus = suvalineInt(5,20)
}

function suvalineInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function joonistaMängija() {
  context.beginPath();
  context.rect(mängija.asukohtX, mängija.asukohtY, mängija.suurus.laius, mängija.suurus.kõrgus);
  context.fillStyle = mängija.värvid.keha;
  context.fill()
  context.closePath();
  context.beginPath();
  if (mängija.nupud.vasakule || mängija.nupud.paremale)
    context.rect(mängija.asukohtX,mängija.asukohtY,20*mängija.dx/Math.abs(mängija.dx),mängija.suurus.kõrgus)
  context.fillStyle = mängija.värvid.nägu;
  context.fill();
  context.closePath();
} 
function joonistaVastane() {
  context.beginPath();
  context.rect(vastane.asukohtX, vastane.asukohtY, vastane.suurus, vastane.suurus);
  context.fillStyle = "#d13929";
  context.fill()
  context.closePath();
}
function joonistaAeg() {
  context.beginPath();
  context.rect(0,0,canvas.width*aega, 20);
  context.fillStyle = "rgba(2,3,255,0.3)";
  context.fill()
  context.closePath();
}
function joonistaMängLäbi() {
  context.beginPath();
  context.rect(0,0,canvas.width,canvas.height);
  context.fillStyle = "rgba(91, 136, 126,0.4)";
  context.fill();
  context.closePath();
  context.beginPath();
  context.font = "40px serif";
  context.fillStyle = "rgb(255,255,255)";
  context.fillText("Mäng Läbi!", canvas.width*0.41, canvas.height*0.5);
  context.closePath();
  context.beginPath();
  context.font = "15px serif";
  context.fillStyle = "rgb(255,255,255)";
  context.fillText("[ vajuta 'u' et uuesti alustada ]", canvas.width*0.42, canvas.height*0.98);
  context.closePath();
}


function mänguLoogika() {
  aega -= 0.001
  if (vastane.onMängijaVastas) {
    uusVastane()
    aega += 0.01
  }
}

function kokkupuuteLoogika() {
  vastane.onMängijaVastas = 
    (mängija.asukohtX+mängija.suurus.laius >= vastane.asukohtX &&
      mängija.asukohtX <= vastane.asukohtX ||
      vastane.asukohtX+vastane.suurus >= mängija.asukohtX &&
      vastane.asukohtX <= mängija.asukohtX) &&
    (mängija.asukohtY+mängija.suurus.kõrgus >= vastane.asukohtY &&
      mängija.asukohtY <= vastane.asukohtY ||
      vastane.asukohtY+vastane.suurus >= mängija.asukohtY &&
      vastane.asukohtY <= mängija.asukohtY)
  mängija.asubLaiuses.paremalt = !(mängija.asukohtX + mängija.suurus.laius + mängija.kiirus.dx > canvas.width)
  mängija.asubLaiuses.vasakult = !(mängija.asukohtX - mängija.kiirus.dx < 0)
  mängija.asubKõrguses.alt     = !(mängija.asukohtY + mängija.suurus.kõrgus + mängija.kiirus.dx > canvas.height)
  mängija.asubKõrguses.ülevalt = !(mängija.asukohtY - mängija.kiirus.dy < 0)
}

function mängijaLiikumiseLoogika() {
  if (mängija.nupud.paremale){
    if (mängija.asubLaiuses.paremalt) {
      mängija.asukohtX += mängija.kiirus.dx;
    }
    else { mängija.asukohtX = canvas.width-mängija.suurus.laius}
  }
  if (mängija.nupud.vasakule){
    if (mängija.asubLaiuses.vasakult) {
      mängija.asukohtX -= mängija.kiirus.dx;
    }
    else { mängija.asukohtX = 0}
  }
  if (mängija.nupud.ülesse){
    if (mängija.asubKõrguses.ülevalt) {
      mängija.asukohtY -= mängija.kiirus.dy;
    }
    else { mängija.asukohtY = 0}
  }
  if (mängija.nupud.alla){
    if (mängija.asubKõrguses.alt) {
      mängija.asukohtY += mängija.kiirus.dy;
    }
    else { mängija.asukohtY = canvas.height-mängija.suurus.kõrgus}
  }
}

function joonistaMäng() {
  context.canvas.width = window.innerWidth-10
  context.canvas.height = window.innerHeight/1.1

  context.clearRect(0,0, canvas.width, canvas.height);

  if (aega > 0) {
    joonistaMängija();
    joonistaVastane();
    joonistaAeg();  

    mänguLoogika();
    kokkupuuteLoogika();
    mängijaLiikumiseLoogika(); 
  }
  else {
    joonistaMängLäbi();
  }

  if (false){
    console.log("x:",mängija.asukohtX, "dx:",mängija.kiirus.dx, "laius:",canvas.width, "mängija-laius:",mängija.suurus.laius)
    console.log("Y:",mängija.asukohtY, "dy:",mängija.kiirus.dy, "kõrgus:",canvas.height, "mängija-kõrgus:",mängija.suurus.kõrgus)
  }

  
}


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("keypress", function(e) {
  if(e.key == "u") {
    aega  = 1
  }
  if(e.key == "l") {
    aega = 0
  }
});

function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        mängija.nupud.paremale = true;
    }
    if(e.key == "Left" || e.key == "ArrowLeft") {
        mängija.nupud.vasakule = true;
    }
    if(e.key == "Down" || e.key == "ArrowDown") {
      mängija.nupud.alla = true;
    }
    if(e.key == "Up" || e.key == "ArrowUp") {
        mängija.nupud.ülesse = true;
    }

    console.log(e)
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        mängija.nupud.paremale = false;
    }
    if(e.key == "Left" || e.key == "ArrowLeft") {
        mängija.nupud.vasakule = false;
    }
    if(e.key == "Down" || e.key == "ArrowDown") {
      mängija.nupud.alla = false;
    }
    if(e.key == "Up" || e.key == "ArrowUp") {
        mängija.nupud.ülesse = false;
    }
}

setInterval(joonistaMäng, 1)
