import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="row">
      <div className="col-sm-2">
        <div className="forecast-day">Sun</div>
        <div className="forecast-icon">☀️</div>
        <div className="forecast-temperature">18°</div>
      </div>
      <div className="col-sm-2">
        <div className="forecast-day">Mon</div>
        <div className="forecast-icon">🌦️</div>
        <div className="forecast-temperature">19°</div>
      </div>
      <div className="col-sm-2">
        <div className="forecast-day">Tue</div>
        <div className="forecast-icon">🌥️</div>
        <div className="forecast-temperature">19°</div>
      </div>
      <div className="col-sm-2">
        <div className="forecast-day">Wed</div>
        <div className="forecast-icon"></div>
        🌤️
        <div className="forecast-temperature">20°</div>
      </div>
      <div className="col-sm-2">
        <div className="forecast-day">Thu</div>
        <div className="forecast-icon">⛅</div>
        <div className="forecast-temperature">18°</div>
      </div>
    </div>
  );
}
