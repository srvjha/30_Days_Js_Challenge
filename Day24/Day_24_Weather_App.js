import { API_KEY } from "./config.js";

let body = document.querySelector("body")
let search = document.querySelector("#city");
let searchButton = document.querySelector(".get-weather");
let temperature = document.querySelector(".temp");
let humidity = document.querySelector(".humidity");
let windSpeed = document.querySelector(".wind");
let weather = document.querySelector('.weather-img');
let country = document.querySelector('.country');
let forecast = document.querySelector('.forecast');
let feel = document.querySelector('.feelLike');
let pressure = document.querySelector('.pressure');
let region = document.querySelector(".region");
let timezone = document.querySelector(".timezone");
let time = document.querySelector(".time");
let toggle = document.querySelector(".toggle");
let nextForecast = document.querySelector(".future-info");

searchButton.addEventListener('click', async (e) => {
    e.preventDefault();
    toggle.style.display = "block";
    let city = search.value.trim();
    
    if (city === "") {
        alert("Please Enter a city name..");
        return;
    }

    let getWeather = await fetchCurrentWeather(city);
    if (!getWeather) return;

   
    temperature.textContent = getWeather.current.temp_c + "°C";
    humidity.textContent = "Humidity: " + getWeather.current.humidity;
    windSpeed.textContent = "Wind: " + getWeather.current.wind_mph + " mph " + getWeather.current.wind_degree + " deg";
    weather.src = `https:${getWeather.current.condition.icon}`;
    pressure.textContent = "Pressure: " + getWeather.current.pressure_mb;
    forecast.textContent = getWeather.current.condition.text;
    feel.textContent = "Feels Like: " + getWeather.current.feelslike_c;
    region.textContent = "City: " + getWeather.location.region;
    timezone.textContent = "Timezone: " + getWeather.location.tz_id;
    country.textContent = "Country: " + getWeather.location.country;
    time.textContent = getWeather.current.last_updated;

    let futureWeather = await futureForecast(city, 5);
    console.log("FutureWeather: ",futureForecast)
    if (futureWeather) {
        nextForecast.innerHTML = ''; // Clear previous forecasts
        nextForecast.append(futureWeather);
    }
});

async function futureForecast(city, days) {
    let mainBox = document.createElement("div");
    mainBox.className = "main-box";
    const weatherInfo = await fetchFutureForecastWeather(city, days);
    if (!weatherInfo) return null; // Exit if no valid data returned
    
    weatherInfo.forecast.forecastday.forEach((info) => {
        let box = document.createElement("div");
        box.className = "box";
        let date = document.createElement("h2");
        date.textContent = info.date;
        let condition = document.createElement("div");
        condition.className = "condition";
        condition.textContent = info.day.condition.text; // Use forecast day's condition text
        let icon = document.createElement("img");
        icon.src = `https:${info.day.condition.icon}`; // Use forecast day's icon
        let maxTemp = document.createElement("div");
        maxTemp.textContent = "Max Temp: " + info.day.maxtemp_c + "°C";
        let minTemp = document.createElement("div");
        minTemp.textContent = "Min Temp: " + info.day.mintemp_c + "°C";
        box.appendChild(date);
        box.appendChild(condition);
        box.appendChild(icon);
        box.appendChild(maxTemp);
        box.appendChild(minTemp);
        mainBox.appendChild(box);
    });

    let conditionText = weatherInfo.current.condition.text.toLowerCase();

    switch (true) {
        case conditionText.includes("partly cloudy"):
            body.style.backgroundImage = "url('./images/partlycloud.png')";
            break;
        case conditionText.includes("sunny"):
            body.style.backgroundImage = "url('./images/sunny.png')";
            break;
        case conditionText.includes("cloudy"):
            body.style.backgroundImage = "url('./images/cloudy.png')";
            break;
        case conditionText.includes("light rain"):
        case conditionText.includes("drizzle"):
            body.style.backgroundImage = "url('./images/lightrain.png')";
            break;
        case conditionText.includes("heavy rain"):
            body.style.backgroundImage = "url('./images/heavyrain.png')";
            break;
        case conditionText.includes("thunderstorm"):
            body.style.backgroundImage = "url('./images/thunderstorm.png')";
            break;
        case conditionText.includes("snow"):
            body.style.backgroundImage = "url('./images/snow.png')";
            break;
        case conditionText.includes("fog"):
            body.style.backgroundImage = "url('./images/fog.png')";
            break;
        case conditionText.includes("windy"):
            body.style.backgroundImage = "url('./images/windy.png')";
            break;
        case conditionText.includes("hail"):
            body.style.backgroundImage = "url('./images/hail.png')";
            break;
        default:
            body.style.backgroundImage = "";
            break;
    }

    return mainBox;
}




const fetchCurrentWeather = async (city) => {
    try {
        const baseURL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;
        const response = await fetch(baseURL);
        if (!response.ok) throw new Error('City not found');
        return await response.json();
    } catch (error) {
        alert(error.message);
        return null;
    }
}

const fetchFutureForecastWeather = async (city, days) => {
    try {
        const baseURL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=${days}&aqi=no&alerts=no`;
        const response = await fetch(baseURL);
        if (!response.ok) throw new Error('City not found');
        const data = await response.json();
        console.log(data);
        return data
    } catch (error) {
        alert(error.message);
        return null;
    }
}
