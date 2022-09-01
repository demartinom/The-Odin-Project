export default async function getWeather(location = 'London') {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=5b68bfbb2d7e87d01488acd1e787cae5&units=imperial`
  );
  const weatherData = await response.json();
  console.log(weatherData);
  locationData(weatherData);
  locationTemperature(weatherData);
  feelsLikeData(weatherData);
  humidityData(weatherData);
  locationWeather(weatherData);
}

const locationData = (json) => {
  let location = document.querySelector(".location");
  location.innerText = json.name;
};

const locationTemperature = (json) => {
  let temperature = document.querySelector(".temperature");
  //   let currentTemperature = ((json.main.temp - 273.15) * 9) / 5 + 32;
  //   let roundedTemperature = Math.round(currentTemperature);
  let currentTemperature = json.main.temp;
  temperature.innerText = `Temperature: ${currentTemperature}º F`;
};
const feelsLikeData = (json) => {
  let feelsLike = document.querySelector(".feels-like");
  let feelsLikeData = json.main.feels_like;
  feelsLike.innerText = `Currently feels like: ${feelsLikeData}`;
};
const humidityData = (json) => {
    let humidity = document.querySelector('.humidity')
    let humidityData = json.main.humidity
    humidity.innerText = `The current humidity is: ${humidityData}%`
};
const locationWeather = (json) => {
  let weather = document.querySelector(".current-weather");
  let weatherStatus = json.weather[0].description;
  weather.innerText = `Current Condition: ${weatherStatus}`;
};
