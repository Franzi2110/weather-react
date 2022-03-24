import React, { useState } from "react";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  let [icon, setIcon] = useState();

  function showForecast(response) {
    setForecast(response.data.daily);
    setIcon(
      <img
        src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`}
        alt="weather icon"
      />
    );
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="row justify-content-evenly">
        <div className="col-2">
          {icon}
          <div>
            <span>{forecast[0].temp.max}°C</span> |
            <span>{forecast[0].temp.min}°C</span>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "fadce719bac91d538e4639319b92aced";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showForecast);
    return <div>Loading...</div>;
  }
}
