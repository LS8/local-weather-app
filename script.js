window.onload = function() {
  requestWeatherData();
}

function requestWeatherData() {
  if (!navigator.geolocation)
    console.log('Your browser does not support GeoLocation');
  function success(position) {
    var latitude = position.coords.latitude, longitude = position.coords.longitude; 
    XHRequest(latitude, longitude);
  }
  function error() {
    console.log('Error while retrieving location');
  }
  navigator.geolocation.getCurrentPosition(success, error);
}

function XHRequest(lat, lon) {
  var cors = 'https://crossorigin.me/',
  key = 'c6ab22fb510471242d6784203ec9a3ff',
  // Use this url for local usage
  // url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&units=imperial' + '&APPID=' + key,
  // and this for https (e.g github pages)
  url = cors + 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&units=imperial' + '&APPID=' + key,
  request = new XMLHttpRequest();
  request.open('GET', url);
  request.onload = function() {
    if (this.status >= 200 && this.status < 400) {
      handleResponse(this.responseText);
    } else {
      console.log("Server returned an Error#", this.status);
    }
  };
  request.onerror = function() {
    console.log('Connection Error');
  };
  request.send();
}

function handleResponse(response) {
  weatherData = JSON.parse(response);
  var city = weatherData.name, temp = weatherData.main.temp, desc = weatherData.weather[0].description, wind = weatherData.wind.speed,
    weatherInfo = [];
  weatherInfo.push(city + ', ' + weatherData.sys.country, desc, temp  + ' ' + String.fromCharCode(176) + 'F', wind + ' mph');
  getIcon('icon', weatherData.weather[0].id, 'wi-owm-');
  getIcon('temp', 'wi-thermometer');
  getIcon('wind', 'wi-small-craft-advisory');
  getDate('date');
  appendToDOM(weatherInfo);
  toggleUnit(temp);
}

function appendToDOM(arr) {
  for (var i = 1, l = arr.length; i <= l; i++) {
    var element = document.createTextNode(arr[i-1]),
      parent = document.getElementById('weather-' + i);
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
  var date = new Date();
  document.getElementById(id).innerHTML = date.toDateString();
}

function toggleUnit(temp) {
  var unit = document.getElementById('weather-3'),
    fahrenheit = true;
  unit.addEventListener('click', function(event) {
    var toChange = this.childNodes[1];
    if (fahrenheit) {
      toChange.nodeValue = ((temp - 32)/1.8).toFixed(2) + ' ' + String.fromCharCode(176) + 'C';
      fahrenheit = false;
    } else {
      toChange.nodeValue = temp + ' ' + String.fromCharCode(176) + 'F';
      fahrenheit = true;
    }
  });
}
