//selector variable
var inputval = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var descrip = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var inputStorage = document.querySelector('#inputs');


apik = "7243ee94aac9ca1d950b59b2d143d442"
//kelvin to celcious
function convertion(val){
    return (val - 273).toFixed(2)
}
//fetch
    btn.addEventListener('click', function(){
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
        .then(res => res.json())
        .then(data => {
            var nameval = data['name']
            var tempature = data['main']['temp']
            var wndspd = data['wind']['speed']
            var humidity = data['main']['humidity']
            
            city.innerHTML=`City: ${nameval}`
            temp.innerHTML = `Temperature: ${ convertion(tempature)} C`
            description.innerHTML = `Huminity: ${humidity}%`
            wind.innerHTML = `Wind: ${wndspd} km/h`

        })
        .catch(err => alert('Please enter a valid city name'))
        localStorage.setItem("inputval.value" , "city")
        
    })
