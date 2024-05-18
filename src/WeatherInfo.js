import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <main>
        <div className="weather-data">
          <div>
            <h1 className="weather-city">{props.data.city}</h1>
            <div className="weather-details">
              <span>
                <FormattedDate date={props.data.date} />
              </span>
              <div className="text-capitalize">{props.data.description}</div>
              <div>
                Humidity: <strong>{props.data.humidity}%</strong>, Wind:
                <strong>{props.data.wind}km/h</strong>
              </div>
            </div>
          </div>
          <div className="weather-temperature-data">
            <div className="weather-icon">
              <WeatherIcon code={props.data.icon} className="weather-icon" />{" "}
            </div>
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
      </main>
    </div>
  );
}
