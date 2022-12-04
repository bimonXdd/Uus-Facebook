function otsi() {
    const leht = "https://api.giphy.com/v1/gifs/random?api_key=3225PhfbH5MY04mgEIvX1BMpXq1ysD97&tag=fail&rating=pg-13";
    console.log(leht);
    const asukoht = document.getElementById("gif")
    asukoht.replaceChildren()
    fetch(leht).then(function(data) {
        return data.json()
    })
    .then(function(json){
        console.log(json)
        console.log(json.data.images.fixed_height.url)
        var pildini = json.data.images.fixed_height.url
        var img = document.createElement("img")
        img.src = pildini
        asukoht.appendChild(img)
    })
}
