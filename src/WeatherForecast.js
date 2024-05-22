import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";
export default function WeatherForecast(props) {
  function handleForecast(response) {
    console.log(response.data);
  }

  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiKey = "3f6be1c407b0d9d1933561808db358ba";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleForecast);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="Weather-Forecast-day">Tue</div>
          <WeatherIcon code="01d" size={40} />
          <div className="WeatherForecast-temp">
            <span className="WeatherForecast-temp-max">19°</span>
            <span className="WeatherForecast-temp-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
