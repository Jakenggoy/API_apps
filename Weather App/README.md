# Weather App

This Weather App is a simple yet powerful application that provides users with current weather data and a 5-day forecast for any city globally. Additionally, users can quickly retrieve weather information for their current location. The app presents temperature, humidity, wind speed, and weather conditions complemented by an appropriate icon, and allows toggling between Celsius and Fahrenheit.

## Features

- City Search: Easily search for the weather in any city by entering its name.
- Current Location: Retrieve and display weather data for your current location.
- 5-Day Forecast: Access a detailed 5-day weather forecast for any selected city.
- Unit Toggle: Switch between Celsius and Fahrenheit for temperature representations.
- Weather Icons: Visualize weather conditions using icons that depict current weather statuses.

## Technologies Used

- HTML: Structures the layout of the application.
- CSS: Provides styling and visual design for the app.
- JavaScript: Manages functionality and API integrations.
- OpenWeatherMap API: Serves as the data source for current weather and forecasts.

## Setup

To install and run the app locally, use the following steps:

1. Clone the repository:
```
      git clone https://github.com/your-username/weather-app.git
```   

2. Navigate to the project directory:
```
      cd weather-app
```   

3. OpenWeatherMap API:

   - Create an account on [OpenWeatherMap](https://openweathermap.org/) to obtain your API key.
   - Replace the apiKey variable in the scriptWeather.js file with your API key:
  ```
      const apiKey = "your-api-key";
  ```
4. Run the application:

   - Open index.html in your web browser to start using the app.

## Usage

- Search for a City: Enter the city's name in the input field and click "Search" to view current weather conditions and a 5-day forecast.
- Get Current Location: Click "Get My Location" to automatically retrieve and display weather information for your present location.
- Toggle Units: Use the dropdown menu to switch between Celsius (°C) and Fahrenheit (°F).

## File Structure
```
weather-app/
│
├── index.html          # Main HTML file
├── styleWeather.css    # Styles for the app
├── scriptWeather.js    # JavaScript functionality
└── README.md           # Project documentation
```
## Example Screenshots

- Current Weather: Displays current temperature, conditions, and more.
- 5-Day Forecast: Presents a detailed forecast for the following five days.

## License

This project is open-source and available under the MIT License.
