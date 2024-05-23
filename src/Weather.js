import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function showTemperature(response) {
    setWeatherData({
      ready: true,
      coord: response.data.coord,
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
  }

  function handleError() {
    console.log("Error retrieving city!");
  }

  function search() {
    let apiKey = "3f6be1c407b0d9d1933561808db358ba";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showTemperature).catch(handleError);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(); // Call the search function only when the form is submitted
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <header>
          <form className="search-form" onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter a city.."
              required
              className="search-input"
              onChange={handleCityChange}
            />
            <input type="submit" value="Search" className="search-submit" />
          </form>
        </header>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coord} />
      </div>
    );
  } else {
    search();
    return "Weather app loading..";
  }
}
