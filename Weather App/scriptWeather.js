const apiKey = "c62659bd12addd77e4b15ea844296bf6";
const searchBtn = document.getElementById("search-btn");
const locationBtn = document.getElementById("location-btn");
const cityInput = document.getElementById("city-input");
const unitToggle = document.getElementById("unit-toggle");
let unit = "metric"; 

async function getWeather(city) {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`
    );
    return response.json();
}

async function getForecast(city) {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${apiKey}`
    );
    return response.json();
}

function displayWeather(data) {
    const currentCity = document.getElementById("current-city");
    const currentTemp = document.getElementById("current-temp");
    const currentIcon = document.getElementById("current-icon");
    const currentDetails = document.getElementById("current-details");

    currentCity.textContent = data.name;
    currentTemp.textContent = `Temp: ${data.main.temp}°`;
    currentIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="icon">`;
    currentDetails.textContent = `Humidity: ${data.main.humidity}%, Wind: ${data.wind.speed} m/s`;
}

function displayForecast(data) {
    const forecastContainer = document.getElementById("forecast-container");
    forecastContainer.innerHTML = "";

    for (let i = 0; i < data.list.length; i += 8) { 
        const forecast = data.list[i];
        const day = new Date(forecast.dt_txt).toLocaleDateString("en-US", { weekday: 'short' });
        const temp = forecast.main.temp;
        const icon = forecast.weather[0].icon;

        forecastContainer.innerHTML += `
            <div class="forecast-day">
                <p>${day}</p>
                <img src="http://openweathermap.org/img/wn/${icon}.png" alt="icon">
                <p>${temp}°</p>
            </div>
        `;
    }
}

searchBtn.addEventListener("click", async () => {
    const city = cityInput.value;
    if (city) {
        const weatherData = await getWeather(city);
        displayWeather(weatherData);

        const forecastData = await getForecast(city);
        displayForecast(forecastData);
    }
});

locationBtn.addEventListener("click", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${unit}&appid=${apiKey}`
            );
            const data = await response.json();
            displayWeather(data);

            const forecastResponse = await fetch(
                `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=${unit}&appid=${apiKey}`
            );
            const forecastData = await forecastResponse.json();
            displayForecast(forecastData);
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
});

unitToggle.addEventListener("change", () => {
    unit = unitToggle.value;
    if (cityInput.value) {
        searchBtn.click(); 
    } else {
        locationBtn.click();
    }
});
