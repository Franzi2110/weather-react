import React, { useState } from "react";
import axios from "axios";
import CurrentDate from "./CurrentDate";
import "bootstrap/dist/css/bootstrap.css";
import WeatherTemperature from "./WeatherTemperature";
import WeatherForecast from "./WeatherForecast";

export default function SearchForm() {
  let [city, setCity] = useState("Munich");
  let [weatherData, setWeatherData] = useState({ ready: false });

  function citySearch(event) {
    setCity(event.target.value);
  }

  function sendData(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b400ae3b711a616262d18b0ca2cbe78f&units=metric`;
    axios.get(url).then(showDetails);
  }

  function showDetails(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      coordinates: response.data.coord,
    });
  }

  if (weatherData.ready) {
    return (
      <div>
        <div className="row">
          <div className="col-8">
            <form onSubmit={sendData}>
              <input
                type="search"
                placeholder="Enter your current city"
                id="currentCity"
                autoComplete="off"
                onChange={citySearch}
              />
              <input type="submit" value="Search" />
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-4 cityName">{weatherData.city}</div>
        </div>
        <div className="row justify-content-left">
          <div className="col-4">
            <WeatherTemperature celsius={weatherData.temperature} />

            <div>
              <img
                src={`http://openweathermap.org/img/wn/${weatherData.icon}.png`}
                alt="Weather Icon"
              />
            </div>
            <div id="current-date">
              <CurrentDate date={weatherData.date} />
            </div>
          </div>
          <div className="col-5" id="moreInformation">
            <ul>
              <li id="description">{weatherData.description}</li>
              <li id="current-humidity">Humidity: {weatherData.humidity}%</li>
              <li id="wind">Wind speed: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
        <br />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    let city = "Munich";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b400ae3b711a616262d18b0ca2cbe78f&units=metric`;
    axios.get(url).then(showDetails);
    return <div>Loading</div>;
  }
}
