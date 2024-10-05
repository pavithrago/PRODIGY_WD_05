// OpenWeatherMap API key and endpoint
const apiKey = '419e534cf774bf6c0e439950463ea8f7';  // Replace with your actual OpenWeatherMap API key
const apiEndpoint = 'https://api.openweathermap.org/data/2.5/weather';

// Function to get weather data from the OpenWeatherMap API
async function getWeather(city) {
  try {
    const response = await fetch(`${apiEndpoint}?q=${city}&appid=${apiKey}&units=metric`);
    if (!response.ok) {
      throw new Error('City not found');
    }
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    alert(error.message);
  }
}

// Function to display weather data on the page
function displayWeather(data) {
  const weatherDisplay = document.getElementById('weatherDisplay');
  
  const city = data.name;
  const temp = data.main.temp;
  const description = data.weather[0].description;
  const humidity = data.main.humidity;
  const windSpeed = data.wind.speed;

  weatherDisplay.innerHTML = `
    <h2>Weather in ${city}</h2>
    <p><strong>Temperature:</strong> ${temp}°C</p>
    <p><strong>Description:</strong> ${description}</p>
    <p><strong>Humidity:</strong> ${humidity}%</p>
    <p><strong>Wind Speed:</strong> ${windSpeed} m/s</p>
  `;

  weatherDisplay.style.display = 'block';
}

// Event listener for button click
document.getElementById('getWeatherBtn').addEventListener('click', () => {
  const city = document.getElementById('cityInput').value;
  if (city) {
    getWeather(city);
  } else {
    alert('Please enter a city name');
  }
});
