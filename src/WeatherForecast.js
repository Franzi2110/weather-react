import React, { useState } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function showForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="row justify-content-evenly">
        <div className="col-2">
          <WeatherForecastDay data={forecast[0]} />
        </div>
        <div className="col-2">
          <WeatherForecastDay data={forecast[1]} />
        </div>
        <div className="col-2">
          <WeatherForecastDay data={forecast[2]} />
        </div>
        <div className="col-2">
          <WeatherForecastDay data={forecast[3]} />
        </div>
        <div className="col-2">
          <WeatherForecastDay data={forecast[4]} />
        </div>
      </div>
    );
  } else {
    let apiKey = "b400ae3b711a616262d18b0ca2cbe78f";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showForecast);
    return <div>Loading...</div>;
  }
}
