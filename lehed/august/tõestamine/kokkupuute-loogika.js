




export function kokkupuuteLoogika(hiireAsukoht, diagrammidJärj) {
    for (let indeks in diagrammidJärj) {
        if  (diagrammidJärj[indeks].x + diagrammidJärj[indeks].laius[0] > hiireAsukoht[0]
            && hiireAsukoht[0] > diagrammidJärj[indeks].x
            && diagrammidJärj[indeks].y + diagrammidJärj[indeks].kõrgus[1]> hiireAsukoht[1]
            && hiireAsukoht[1] > diagrammidJärj[indeks].y)
            {
            console.log(diagrammidJärj[indeks].x,diagrammidJärj[indeks].y,diagrammidJärj[indeks].laius,diagrammidJärj[indeks].kõrgus,hiireAshukoht)

            return indeks
        }
    }
    return false
}