
const option={
    method: 'GET'
}


function excuse(){
    var SuvaNR = String(Math.floor(Math.random() * 149))
    var SuvaNR2 = String(Math.floor(Math.random() * 50))
  
console.log(SuvaNR)
    fetch('https://api.disneyapi.dev/characters?page='+SuvaNR, option)
        
        .then(response => response.json())
        .then(response => {
            document.getElementById("pilt").src = response.data[SuvaNR2].imageUrl;
            console.log(response.data[SuvaNR2].films[0]);
            document.getElementById("text").innerHTML = response.data[SuvaNR2].name;
            if ((response.data[SuvaNR2].films).length !=0){
                document.getElementById("films1").innerHTML = response.data[SuvaNR2].films[0];
                if ((response.data[SuvaNR2].films).length !=1){
                    document.getElementById("films2").innerHTML = response.data[SuvaNR2].films[1];
                    if ((response.data[SuvaNR2].films).length !=2){
                        document.getElementById("films3").innerHTML = response.data[SuvaNR2].films[2];
                    };};};
            if ((response.data[SuvaNR2].films).length ==0){
                    document.getElementById("films1").innerHTML ='Pole kuskil filmis olnud';
                    document.getElementById("films2").innerHTML ='';
                    document.getElementById("films3").innerHTML ='';
                };
            if ((response.data[SuvaNR2].films).length ==1){
                document.getElementById("films2").innerHTML ='';
                document.getElementById("films3").innerHTML ='';
                };
            if ((response.data[SuvaNR2].films).length ==2){
                document.getElementById("films3").innerHTML ='';
                };
            /*Siiani on filmid */
                if ((response.data[SuvaNR2].tvShows).length !=0){
                    document.getElementById("series1").innerHTML = response.data[SuvaNR2].tvShows[0];
                    if ((response.data[SuvaNR2].tvShows).length !=1){
                        document.getElementById("series2").innerHTML = response.data[SuvaNR2].tvShows[1];
                        if ((response.data[SuvaNR2].tvShows).length !=2){
                            document.getElementById("series3").innerHTML = response.data[SuvaNR2].tvShows[2];
                        };};};
                if ((response.data[SuvaNR2].tvShows).length ==0){
                        document.getElementById("series1").innerHTML ='Pole kuskil seriaalis olnud';
                        document.getElementById("series2").innerHTML ='';
                        document.getElementById("series3").innerHTML ='';
                    };
                if ((response.data[SuvaNR2].tvShows).length ==1){
                    document.getElementById("series2").innerHTML ='';
                    document.getElementById("series3").innerHTML ='';
                    };
                if ((response.data[SuvaNR2].tvShows).length ==2){
                    document.getElementById("series3").innerHTML ='';
                    };
           
            
            
            
            })
    

}
