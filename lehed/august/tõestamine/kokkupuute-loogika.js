




export function kokkupuuteLoogika(hiireAsukoht, diagrammidJärj) {
    for (let indeks in diagrammidJärj) {
        //console.log("indeks: " +indeks+",",hiireAsukoht[0]+":"+diagrammidJärj[indeks].x, diagrammidJärj[indeks].laius, hiireAsukoht[1]+":"+ diagrammidJärj[indeks].kõrgus)  
        //console.log("indeks: " +indeks,diagrammidJärj[indeks].x+":"+diagrammidJärj[indeks].laius, diagrammidJärj[indeks].y+":"+ diagrammidJärj[indeks].kõrgus)  

        if (diagrammidJärj[indeks].x + diagrammidJärj[indeks].laius  > hiireAsukoht[0]
            && hiireAsukoht[0] > parseInt(diagrammidJärj[indeks].x)
            && diagrammidJärj[indeks].y + diagrammidJärj[indeks].kõrgus > hiireAsukoht[1]
            && hiireAsukoht[1] > diagrammidJärj[indeks].y)
            {

            return indeks
        }
    }
    return false
}