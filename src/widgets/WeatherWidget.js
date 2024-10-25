import React, { useState } from 'react'
import { Divider } from 'rsuite'
import '../styles/WeatherWidget.css'

const WeatherWidget = () => {
  const [location, setLocation] = useState('')
  const [weatherData, setWeatherData] = useState(null)
  const apiKey = 'e9dd92430c41fa069cd1d9606f663ad5'

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`
      )
      const data = await response.json()
      setWeatherData(data)
    } catch (error) {
      alert('Failed to fetch weather data. Please try again later.')
      console.error('Failed to fetch weather data:', error)
    }
  }

  const handleLocationChange = (event) => {
    setLocation(event.target.value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    fetchWeatherData()
  }

  return (
    <div id='weather-widget'>
      <h2>Weather</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type='text'
          value={location}
          onChange={handleLocationChange}
          placeholder='Enter location'
        />
        <button type='submit'>Get Weather</button>
      </form>
      {weatherData && (
        <div id='weather-content'>
          <div id='weather-location'>{weatherData.name}</div>
          <Divider />
          {/* <div id="weather-date">{new Date().toDateString()}</div> */}
          <div id='weather-icon'>
            <img
              src={`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
              alt='Weather Icon'
            />
          </div>
          <div id='weather-description'>
            {weatherData.weather[0].description}
          </div>
          <div id='weather-temperature'>
            {(weatherData.main.temp - 273.15).toFixed(1)}°C
          </div>
          <div id='weather-humidity'>{weatherData.main.humidity}% Humidity</div>
          <div id='weather-wind'>{weatherData.wind.speed} m/s Wind</div>
        </div>
      )}
    </div>
  )
}

export default WeatherWidget
