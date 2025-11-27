import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from './WeatherCard';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null); // New state for forecast
  const [city, setCity] = useState('Toronto');
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');

  const API_KEY = '9d9ff36b1fc6953d85aa595010726215';

  const fetchWeather = async (cityName) => {
    try {
      // 1. Fetch Current Weather
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
      const weatherRes = await axios.get(weatherUrl);
      setWeatherData(weatherRes.data);

      // 2. Fetch Forecast
      const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric`;
      const forecastRes = await axios.get(forecastUrl);
      
      // Filter to get one reading per day (e.g., at 12:00 PM)
      const dailyData = forecastRes.data.list.filter(reading => reading.dt_txt.includes("12:00:00"));
      setForecastData(dailyData);

      setError('');
    } catch (err) {
      setError('City not found');
      setWeatherData(null);
      setForecastData(null);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (search) {
      fetchWeather(search);
      setCity(search);
      setSearch('');
    }
  };

  return (
    <div className="app-container">
      <h1>Weather App</h1>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Enter city name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {error && <div className="error-message">{error}</div>}
      
      {/* Pass BOTH data sets to the card */}
      {weatherData && forecastData && (
        <WeatherCard weatherData={weatherData} forecastData={forecastData} />
      )}
    </div>
  );
}

export default App;
