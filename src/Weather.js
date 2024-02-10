import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "London",
    date: "Last updated Wednesday",
    description: "Moderate rain",
    image: "☀️",
    temperature: "24",
    temperatureUnit: "°C",
    humidity: "87%",
    wind: "7.2km/h",
  };
  return (
    <div className="current-weather">
      <div>
        <h1 className="current-city">{weatherData.city}</h1>
        <p className="current-details">
          <span> {weatherData.date} </span>
          <br />
          <span> {weatherData.description}</span>
          <br />
          <span>
            Humidity: <strong>{weatherData.humidity}</strong>, Wind:{" "}
            <strong>{weatherData.wind}</strong>
          </span>
        </p>
      </div>
      <div className="current-temperature">
        <span className="current-temperature-icon">{weatherData.image}</span>
        <span className="current-temperature-value">
          {weatherData.temperature}
        </span>
        <span className="current-temperature-unit"></span>
      </div>
    </div>
  );
}
