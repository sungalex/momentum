const API_KEY = 'API_KEY'; // replace an api-key

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const temp = document.querySelector('#weather span:first-child');
      const weather = document.querySelector('#weather span:nth-child(2)');
      const city = document.querySelector('#weather span:last-child');
      temp.innerText = `${data.main.temp}℃`;
      weather.innerText = `${data.weather[0].main}`;
      city.innerText = `${data.name}`;
    });
}

function onGeoError() {
  alert("Can't find you. No Weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
