const apiKey = "your_api_key_here"; // replace with your OpenWeatherMap API key

function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  if (!city) return alert("Please enter a city name.");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error("City not found");
      return response.json();
    })
    .then((data) => {
      document.getElementById("weatherInfo").hidden = false;
      document.getElementById("cityName").textContent = data.name;
      document.getElementById("description").textContent = data.weather[0].description;
      document.getElementById("temperature").textContent = data.main.temp;
      document.getElementById("tempMin").textContent = data.main.temp_min;
      document.getElementById("tempMax").textContent = data.main.temp_max;
      document.getElementById("humidity").textContent = data.main.humidity;
      document.getElementById("wind").textContent = data.wind.speed;

      const iconCode = data.weather[0].icon;
      document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    })
    .catch((error) => {
      alert(error.message);
      document.getElementById("weatherInfo").hidden = true;
    });
}
