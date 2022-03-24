import React, { useState } from "react";
import axios from "axios";
import CurrentDate from "./CurrentDate";
import "bootstrap/dist/css/bootstrap.css";
import WeatherTemperature from "./WeatherTemperature";
import WeatherForecast from "./WeatherForecast";

export default function SearchForm() {
  let [city, setCity] = useState("Munich");
  let [coordinates, setCoordinates] = useState();
  let [temperature, setTemperature] = useState();
  let [description, setDescription] = useState();
  let [wind, setWind] = useState();
  let [humidity, setHumidity] = useState();
  let [icon, setIcon] = useState();
  let [citydate, setCitydate] = useState();
  let [loaded, setLoaded] = useState(false);

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
    setCoordinates(response.data.coord);
    setTemperature(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].description);
    setWind(response.data.wind.speed);
    setHumidity(response.data.main.humidity);
    setIcon(
      <img
        src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`}
        alt="weather icon"
      />
    );
    setCitydate(new Date(response.data.dt * 1000));
    setLoaded(true);
  }

  if (loaded) {
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
          <div className="col-4 cityName">{city}</div>
        </div>
        <div className="row justify-content-left">
          <div className="col-4">
            <WeatherTemperature celsius={temperature} />

            <div>{icon}</div>
            <div id="current-date">
              <CurrentDate date={citydate} />
            </div>
          </div>
          <div className="col-5" id="moreInformation">
            <ul>
              <li id="description">{description}</li>
              <li id="current-humidity">Humidity: {humidity}%</li>
              <li id="wind">Wind speed: {wind} km/h</li>
            </ul>
          </div>
        </div>
        <br />
        <WeatherForecast coordinates={coordinates} />
      </div>
    );
  } else {
    let city = "Munich";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b400ae3b711a616262d18b0ca2cbe78f&units=metric`;
    axios.get(url).then(showDetails);
    return <div>Loading</div>;
  }
}
