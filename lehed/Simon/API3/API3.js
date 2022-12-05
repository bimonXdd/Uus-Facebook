


function randomFact(){
    
    fetch("https://uselessfacts.jsph.pl/random.json?language=en")
        .then(response => response.json())
        .then(response => {
            document.getElementById('random').innerHTML = response.text;
        })
}
function randomFactOfToday(){
    
    fetch("https://uselessfacts.jsph.pl/today.json?language=en")
        .then(response => response.json())
        .then(response => {
            
            document.getElementById('RandomFactOfTheDay').innerHTML = response.text;
        })
}