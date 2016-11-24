var output = document.getElementById('output');
var latitude, longitude;

function getCoords() {
  if (!navigator.geolocation)
    console.log('Geolocation is not supported');

  function succes(position) {
    latitude = position.coords.latitude, longitude = position.coords.longitude; 
    log();
  }

  function error() {
    console.log('Error while retrieving location');
  }

  navigator.geolocation.getCurrentPosition(succes, error);
}
getCoords();
function log() {
  console.log(latitude);
}

