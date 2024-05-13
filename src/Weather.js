import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather">
      <header>
        <form className="search-form">
          <input
            type="search"
            placeholder="Enter a city.."
            required
            className="search-input"
          />
          <input type="submit" value="Search" className="search-submit" />
        </form>
      </header>
      <main>
        <div className="weather-data">
          <div>
            <h1 className="weather-city">Dublin</h1>
            <p className="weather-details">
              <span>Friday 22:27</span>, <span>few clouds</span>
              <br />
              Humidity: <strong>75%</strong>, Wind:
              <strong>3.09km/h</strong>
            </p>
          </div>
          <div className="weather-temperature-data">
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-night.png"
              alt="weather-icon"
            />
            <div className="weather-temperature">8</div>
            <div className="weather-temperature-unit">°C</div>
          </div>
        </div>
      </main>
    </div>
  );
}
