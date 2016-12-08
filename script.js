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
//make this on load
function listener(response) {
  weatherData = JSON.parse(response);
  var city = weatherData.name, temp = weatherData.main.temp, desc = weatherData.weather[0].description, wind = weatherData.wind.speed;
  var weatherInfo = [];
  weatherInfo.push(city + ', ' + weatherData.sys.country, desc, temp  + ' ' + String.fromCharCode(176) + 'F', wind + ' mph');
  getIcon('icon', weatherData.weather[0].id, 'wi-owm-');
  getIcon('temp', 'wi-thermometer');
  getIcon('wind', 'wi-small-craft-advisory');
  getDate('date');
  appendToDOM(weatherInfo);
  toggleUnit(temp);
}
function getWeather(lat, lon) {
  var cors = 'https://crossorigin.me/';
  var key = 'c6ab22fb510471242d6784203ec9a3ff';
  // var url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&units=imperial' + '&APPID=' + key;
  var url = cors + 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&units=imperial' + '&APPID=' + key;
  var request = new XMLHttpRequest();
  //get rid of this
  // request.addEventListener('load', listener);
  request.open('GET', url);
  request.onload = function() {
    if (this.status >= 200 && this.status < 400) {
      listener(this.responseText);
    } else {
      console.log("Server returned an Error#", this.status);
    }
  };
  request.onerror = function() {
    console.log('Connection Error');
  };
  request.send();
}

function appendToDOM(arr) {
  for (var i = 1, l = arr.length; i <= l; i++) {
    var element = document.createTextNode(arr[i-1]);
    var parent = document.getElementById('weather-' + i);
    parent.appendChild(element);
  }
}
function getIcon(id, code, ref = false) {
  var icon = document.getElementById(id);
  if (ref)
    icon.className += ' ' + ref + code; 
  else
    icon.className += ' ' + code;
}
function getDate(id) {
  var d = new Date();
  document.getElementById(id).innerHTML = d.toDateString();
}

function toggleUnit(temp) {
  var unit = document.getElementById('weather-3');
  var fahrenheit = true;
  unit.addEventListener('click', function(event) {
    var toChange = this.childNodes[1];
    if (fahrenheit) {
      toChange.nodeValue = ((temp - 32)/1.8).toFixed(2) + ' ' + String.fromCharCode(176) + 'C';
      fahrenheit = false;
    } else {
      toChange.nodeValue = temp + ' ' + String.fromCharCode(176) + 'F';
      fahrenheit = true;
    }
  })
}
