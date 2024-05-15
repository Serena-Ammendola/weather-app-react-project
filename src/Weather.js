import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function showTemp(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      iconUrl:
        "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-night.png",
      date: "Friday 22:27",
    });
  }

  if (weatherData.ready) {
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
              <h1 className="weather-city">{weatherData.city}</h1>
              <p className="weather-details">
                <span>{weatherData.date}</span>,{" "}
                <span className="text-capitalize">
                  {weatherData.description}
                </span>
                <br />
                Humidity: <strong>{weatherData.humidity}%</strong>, Wind:
                <strong>{weatherData.wind}km/h</strong>
              </p>
            </div>
            <div className="weather-temperature-data">
              <img src={weatherData.iconUrl} alt="weather-icon" />
              <div className="weather-temperature">
                {Math.round(weatherData.temperature)}
              </div>
              <div className="weather-temperature-unit">°C</div>
            </div>
          </div>
        </main>
      </div>
    );
  } else {
    let apiKey = "6643c7326a4c2a38838264a28531d97e";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showTemp);
    return "Weather app loading..";
  }
}
