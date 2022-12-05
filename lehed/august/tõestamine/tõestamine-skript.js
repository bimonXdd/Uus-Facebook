import {kokkupuuteLoogika} from "./kokkupuute-loogika.js"
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
let keskpuntk = [canvas.width/2,canvas.height/2];
let hiireAshukoht = [0,0];
let onDiagrammiMuut = false;
let indeksPuutubKokku = false;
let reaPikkus = 30

let andmed = [
  { 
    tüüp  : "väide",
    x     : 200,
    y     : 50,
    laius : 10,
    kõrgus: 10,
    tekstSuurus : 20,
    ridu : 1,
    tekst  : "Kohahoidja tekst see on ainult test!",
    värv  : "rgb(2,90,2)",

  },
  { 
    tüüp  : "väide",
    x     : 550,
    y     : 100,
    laius : 10,
    kõrgus: 10,
    tekstSuurus : 20,
    ridu : 1,
    tekst  : "Kohahoidja tekst see on ainult test! Kohahoidja tekst see on ainult test! Kohahoidja tekst see on ainult test!",
    värv  : "rgb(2,110,2)",

  },
  { 
    tüüp  : "väide",
    x     : 50,
    y     : 400,
    laius : 10,
    kõrgus: 10,
    tekstSuurus : 20,
    ridu : 1,
    tekst  : "Kohahoidja tekst see on ainult test! See on väga lahe",
    värv  : "rgb(2,110,2)",
  }
]
function arvutaDiagrammiSuurus() {
  for (let indeks in andmed) {

    let objekt = andmed[indeks]
    let tekst = objekt.tekst
    let tekstPikkus = tekst.length
    let tekstPx = objekt.tekstSuurus
    objekt.ridu =  Math.floor(tekstPikkus/reaPikkus) 
    objekt.laius = reaPikkus / 2 * tekstPx + 10
    objekt.kõrgus = tekstPx * objekt.ridu + 30
  } 
}
arvutaDiagrammiSuurus()

function joonistaDiagramm () {
  for (let indeks in andmed) {
    let objekt = andmed[indeks]

    context.beginPath();
    context.rect(objekt.x, objekt.y, objekt.laius, objekt.kõrgus); 
    context.fillStyle = objekt.värv;
    context.fill();
    context.closePath();

    for (let indeks = 0; indeks < objekt.ridu+1; indeks++) {
      context.beginPath();
      context.font = objekt.tekstSuurus+"px serif";
      context.fillStyle = "rgb(255,255,255)";
      context.textAlign = "start";
      context.fillText(objekt.tekst.slice(indeks*reaPikkus, (indeks+1)*reaPikkus), objekt.x + 10 , objekt.y + objekt.tekstSuurus + indeks*20);
      context.closePath();
    }
    context.beginPath();
    context.font = objekt.tekstSuurus+"px serif";
    context.fillStyle = "rgb(255,0,0)";
    context.textAlign = "start";
    context.fillText(indeks, objekt.x+objekt.laius , objekt.y+objekt.kõrgus);
    context.closePath();


  } 
}
function joonistaDiagrammMuut(indeks) {

  let kastiSuurus = [16,16]
  let kastiAsukoht = [andmed[indeks].x + andmed[indeks].laius - 23,andmed[indeks].y + 6]
  let padding = 4
  let nupuSuurus = 12

  context.beginPath();
  //tulevikus roundRect(hetkel puudub toetus)
  context.fillStyle = "rgb(200,250,200)"
  context.rect(andmed[indeks].x, andmed[indeks].y, andmed[indeks].laius, andmed[indeks].kõrgus); 
  context.fill();
  context.closePath();
  context.beginPath();
  context.rect(andmed[indeks].x, andmed[indeks].y, andmed[indeks].laius, andmed[indeks].kõrgus); 
  context.stroke();
  context.closePath();
  context.beginPath();
  context.rect(kastiAsukoht[0], kastiAsukoht[1], kastiSuurus[0], kastiSuurus[1]); 
  context.fillStyle = "rgb(100,10,10)"
  context.fill();
  context.closePath();
}




function joonistaLeht() {
  console.log(andmed)
  keskpuntk = [canvas.width/2,canvas.height/2]
  context.canvas.width  = window.innerWidth;
  context.canvas.height = window.innerHeight;
  context.clearRect(0,0, canvas.width, canvas.height);

  context.beginPath();
  context.rect(canvas.width/2, canvas.height/2, 12, 2); 
  context.fill();
  context.closePath();
  context.beginPath();
  context.rect(canvas.width/2, canvas.height/2, 2, 12); 
  context.fill();
  context.closePath();

  joonistaDiagramm()
  if (onDiagrammiMuut) {
    joonistaDiagrammMuut(indeksPuutubKokku)
    
    if (kokkupuuteLoogika(hiireAshukoht,
      [{x : andmed[indeksPuutubKokku].x  + andmed[indeksPuutubKokku].laius - 23,
        y : andmed[indeksPuutubKokku].y + 6,
        laius  : 12,
        kõrgus : 12}])){
          andmed.splice(indeksPuutubKokku, 1)
        }
  }
}


(function() {
  document.onmousemove = hiirVajutusJuht;
  function hiirVajutusJuht(juht) {
      var eventDoc, doc, body;

      juht = juht || window.juht; // IE-ism


      // If pageX/Y aren't available and clientX/Y are,
      // calculate pageX/Y - logic taken from jQuery.
      // (This is to support old IE)
      if (juht.pageX == null && juht.clientX != null) {
          eventDoc = (juht.target && juht.target.ownerDocument) || document;
          doc = eventDoc.documentElement;
          body = eventDoc.body;

          juht.pageX = juht.clientX +
            (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
            (doc && doc.clientLeft || body && body.clientLeft || 0);
          juht.pageY = juht.clientY +
            (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
            (doc && doc.clientTop  || body && body.clientTop  || 0 );
      }

      // Use event.pageX / event.pageY here
      hiireAshukoht = [juht.pageX, juht.pageY]
      indeksPuutubKokku = kokkupuuteLoogika(hiireAshukoht, andmed)
      if (Number.isInteger(parseInt(indeksPuutubKokku))) {
        console.log(indeksPuutubKokku)
        onDiagrammiMuut = true
      }
      else {onDiagrammiMuut = false}

  }
})();


setInterval(joonistaLeht, 1)
