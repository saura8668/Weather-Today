const Weather = async (position) => {
    let lat = position.coords.latitude
    let long = position.coords.longitude
    let weatherData = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}6&q=${lat},${long}&aqi=yes`)
    weatherData = await weatherData.json()
    //set data
    document.getElementById('name').innerHTML = `${weatherData.location.name}, ${weatherData.location.region}, ${weatherData.location.country}`
    const time = weatherData.current.last_updated.split(" ")[1]
    const date = weatherData.current.last_updated.split(" ")[0]
    const [yyyy, mm, dd] = date.split("-")
    document.getElementById('time').innerHTML = `${time}<br/>${dd}/${mm}/${yyyy}`
    document.getElementById('heading').innerHTML = `${weatherData.current.temp_c} &degC`
    document.getElementById('condition').innerHTML = `${weatherData.current.condition.text}`
    document.getElementById('condition_image').src = `https:${weatherData.current.condition.icon}`
    document.getElementById('wind_speed').innerHTML = `${weatherData.current.wind_kph} km/h`
    document.getElementById('humidity').innerHTML = `Humidity: ${weatherData.current.humidity} %`
}

const fetchLocation=()=>{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(Weather)
    }
} 

fetchLocation()