
const option={
    method: 'GET'
}


function excuse(){

fetch('https://excuser.herokuapp.com/v1/excuse', option)
    .then(response => response.json())
    .then(response => document.getElementById("text").innerHTML = (response[0].excuse))
    .catch(error => console.log('Midagi on pekkis'))

}