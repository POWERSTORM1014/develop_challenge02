// API Key
const API_KEY = '69b101bb90cc296da187dfac3848dcc3'

// DOM Elements
const weatherForm = document.getElementById('weather-form')
const cityInput = document.getElementById('city-input')
const weatherInfo = document.getElementById('weather-info')
const cityName = document.getElementById('city-name')
const weatherIcon = document.getElementById('weather-icon')
const weatherTemperature = document.getElementById('weather-temperature')
const tempMin = document.getElementById('temp-min')
const tempMax = document.getElementById('temp-max')
const humidity = document.getElementById('humidity')
const windSpeed = document.getElementById('wind-speed')
const windDeg = document.getElementById('wind-deg')

// Event Listener for form submission
weatherForm.addEventListener('submit', function (event) {
  event.preventDefault()
  const city = cityInput.value
  getWeather(city)
})

// Function to fetch weather data
function getWeather(city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  )
    .then((response) => response.json())
    .then((data) => displayWeather(data))
    .catch((error) => console.error('Error:', error))
}

// Function to display weather data
function displayWeather(data) {
  if (data.cod === 200) {
    cityName.innerText = data.name
    weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    weatherIcon.classList.remove('d-none')
    weatherTemperature.innerText = `온도: ${data.main.temp} °C`
    tempMin.innerText = `최저 온도: ${data.main.temp_min} °C`
    tempMax.innerText = `최고 온도: ${data.main.temp_max} °C`
    humidity.innerText = `습도: ${data.main.humidity}%`
    windSpeed.innerText = `바람 속도: ${data.wind.speed} m/s`
    windDeg.innerText = `바람 각도: ${data.wind.deg}°`
    weatherInfo.classList.remove('d-none')
  } else {
    alert('날씨 데이터를 가져올 수 없습니다. 도시 이름을 확인해주세요.')
  }
}
