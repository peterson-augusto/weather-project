const API_KEY = "cf667d3604c26bf9aac8c9f24eaaf150";

const handleClick = () => {
    const city = document.querySelector('.input-city').value
    searchCity(city)
}

const searchCity = async (city) => {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=pt_br&units=metric`)
        .then((response) => response.json())
    showData(data)
}

const showData = (data) => {
    console.log(data)
    document.querySelector('.city').innerHTML = `Tempo em ${data.name}`;
    document.querySelector('.temp').innerHTML = `${data.main.temp} ºC`;
    document.querySelector('.humidity').innerHTML = `Umidade: ${data.main.humidity} ºC`
    document.querySelector('.description').innerHTML = `${data.weather[0].description}`
    document.querySelector('.weather-icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
}