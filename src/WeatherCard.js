import React from 'react';
import './WeatherCard.css';

export default function WeatherCard({ weatherData, forecastData }) {
  const iconUrl = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`;

  const dateBuilder = (d) => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    const day = days[d.getDay()];
    const date = d.getDate();
    const month = months[d.getMonth()];
    const year = d.getFullYear();

    return `${day}, ${date} ${month} ${year}`;
  };

  const getTime = () => {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const getDayName = (dateStr) => {
      const date = new Date(dateStr);
      return date.toLocaleDateString("en-US", { weekday: 'short' });
  };

  return (
    <div className="weather-card">
      <div className="left-panel">
        <div className="header-info">
          <h2 className="day-name">{dateBuilder(new Date())}</h2>
          <p style={{ fontSize: '1.2rem', margin: '5px 0', fontWeight: '500', opacity: '0.9' }}>
            {getTime()}
          </p>
          <p className="location">{weatherData.name}, {weatherData.sys.country}</p>
        </div>
        
        <div className="main-weather">
          <img src={iconUrl} alt={weatherData.weather[0].description} className="weather-icon" />
          <h1 className="temperature">{Math.round(weatherData.main.temp)}°C</h1>
          <p className="description">{weatherData.weather[0].main}</p>
        </div>
      </div>
      
      <div className="right-panel">
        <div className="details-grid">
            <div className="detail-row">
            <span className="label">Predictability</span>
            <span className="value">71%</span>
            </div>
            <div className="detail-row">
            <span className="label">Humidity</span>
            <span className="value">{weatherData.main.humidity}%</span>
            </div>
            <div className="detail-row">
            <span className="label">Wind</span>
            <span className="value">{weatherData.wind.speed} km/h</span>
            </div>
            <div className="detail-row">
            <span className="label">Air Pressure</span>
            <span className="value">{weatherData.main.pressure} mb</span>
            </div>
            <div className="detail-row">
            <span className="label">Max Temp</span>
            <span className="value">{Math.round(weatherData.main.temp_max)}°C</span>
            </div>
            <div className="detail-row">
            <span className="label">Min Temp</span>
            <span className="value">{Math.round(weatherData.main.temp_min)}°C</span>
            </div>
        </div>

        <div className="forecast-container">
            {forecastData.slice(0, 5).map((day, index) => (
                <div key={index} className="forecast-item">
                    <img 
                        src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`} 
                        alt="icon" 
                    />
                    <div className="forecast-day">{getDayName(day.dt_txt)}</div>
                    <div className="forecast-temp">{Math.round(day.main.temp)}°</div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}
