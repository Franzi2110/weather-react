import React, { useState } from "react";
import axios from "axios";

export default function SearchForm() {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState();
  let [description, setDescription] = useState();
  let [wind, setWind] = useState();
  let [humidity, setHumidity] = useState();
  let [icon, setIcon] = useState();
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
    setLoaded(true);
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
  }

  if (loaded) {
    return (
      <div>
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
        <div>{temperature}</div>
      </div>
    );
  } else {
    return (
      <div>
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
    );
  }
}
