import React, { useState } from 'react';
import axios from 'axios';
import WeatherCard from './WeatherCard';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [city, setCity] = useState('');
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');

  const API_KEY = '9d9ff36b1fc6953d85aa595010726215';

  const fetchWeather = async (cityName) => {
    try {
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
      const weatherRes = await axios.get(weatherUrl);
      setWeatherData(weatherRes.data);

      const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric`;
      const forecastRes = await axios.get(forecastUrl);
      
      const dailyData = forecastRes.data.list.filter(reading => reading.dt_txt.includes("12:00:00"));
      setForecastData(dailyData);

      setError('');
    } catch (err) {
      setError('City not found');
      setWeatherData(null);
      setForecastData(null);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (search) {
      fetchWeather(search);
      setCity(search);
      setSearch('');
    }
  };

  return (
    <div 
      className="app-container"
      style={{
        backgroundImage: 'url(/clouds.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
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
      
      {/* IF we have data, show the card. IF NOT, show the Welcome Message */}
      {weatherData && forecastData ? (
        <WeatherCard weatherData={weatherData} forecastData={forecastData} />
      ) : (
        <div className="welcome-message" style={{ 
            textAlign: 'center', 
            color: '#333', 
            marginTop: '50px',
            backgroundColor: 'rgba(255,255,255,0.8)',
            padding: '30px',
            borderRadius: '20px'
        }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '10px', color: '#5c6bc0' }}>
            Ready to Check the Weather? ☀️
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#555' }}>
            Type a city name above and click search
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
