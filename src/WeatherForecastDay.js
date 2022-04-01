import React from "react";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <img
        src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}.png`}
        alt="weather icon"
      />
      <div>
        <span>{Math.round(props.data.temp.max)}°C</span> |
        <span> {Math.round(props.data.temp.min)}°C</span>
      </div>
    </div>
  );
}
