var output = document.getElementById('output');
var latitude, longitude, weatherData;

function getCoords() {
  if (!navigator.geolocation)
    console.log('Geolocation is not supported');

  function succes(position) {
    latitude = position.coords.latitude, longitude = position.coords.longitude; 
    getWeather(latitude, longitude);
  }

  function error() {
    console.log('Error while retrieving location');
  }

  navigator.geolocation.getCurrentPosition(succes, error);
}
getCoords();
function listener() {
  weatherData = JSON.parse(this.responseText);
  var city = weatherData.name, temp = weatherData.main.temp, desc = weatherData.weather[0].description;
  var weatherInfo = [];
  weatherInfo.push(city, temp, desc);
  appendToDOM(weatherInfo);
}
function getWeather(lat, lon) {
  var key = 'c6ab22fb510471242d6784203ec9a3ff';
  var url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&APPID=' + key;
  var request = new XMLHttpRequest();
  request.addEventListener('load', listener);
  request.open('GET', url);
  request.send();
}

function appendToDOM(arr) {
  for (var i = 1, l = arr.length; i <= l; i++) {
    var element = document.createTextNode(arr[i-1]);
    var parent = document.getElementById('weather-' + i);
    parent.appendChild(element);
  }
}

