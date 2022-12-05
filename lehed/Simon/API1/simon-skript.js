const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		'X-RapidAPI-Key': 'b329f033ccmshc0e31e9d4a46e5ap1cf3b2jsne0c37ab14dff',
		'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
	}
};

function nali(){
	fetch('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random', options)
		.then(response => response.json()) 
		.then(response => {document.getElementById("info").innerHTML = response.value
		
	})
		.catch(err => console.error(err));

};


var audio = document.getElementById("Music")
function EpicTrack(){
	if (audio.paused){
		audio.play()
	}
	else{
		audio.pause()
	}
		
}
	
		
	








