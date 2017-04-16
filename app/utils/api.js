const axios = require('axios');
const key = 'c6ab22fb510471242d6784203ec9a3ff';

function queryCurrentData(city) {
  const endpoint = `http://api.openweathermap.org/data/2.5/weather?q=${city}&type=accurate&APPID=${key}&units=metric`;
  return axios.get(endpoint)
          .then((response) => {
            return filterCurrentData(response.data);
          });
}

function filterCurrentData(weather) {
  const weatherData = {
    minTemp: weather.main.temp_min,
    temp: weather.main.temp,
    maxTemp: weather.main.temp_max,
    humidity: weather.main.humidity,
    location: `${weather.name}, ${weather.sys.country}`,
    description: weather.weather[0].description
  }
  return weatherData;
}

function getCurrentWeather(city) {
  return queryCurrentData(city);
}

function queryForecast(city) {
  const endpoint = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&type=accurate&APPID=${key}&units=metric&cnt=5`;
  return axios.get(endpoint)
          .then((response) => {
            return filterForecast(response.data);
          });
}

function filterForecast(data) {
  const forecast = [];
  const location = `${data.city.name}, ${data.city.country}`;
  data.list.forEach(function(day) {
    const weatherData = {
      minTemp: day.temp.min,
      maxTemp: day.temp.max,
      humidity: day.humidity,
      date: day.dt,
      location: location,
      description: day.weather[0].description,
      icon: day.weather[0].icon
    };
    forecast.push(weatherData);
  });
  return forecast;
}

function getForecast(city) {
  return queryForecast(city);
}

module.exports = {
  currentWeather: getCurrentWeather,
  forecastWeather: getForecast
}
