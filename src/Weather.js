import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import SearchForm from "./SearchForm";
export default function Weather() {
  return (
    <div className="container">
      <div className="WeatherApp">
        <div className="row">
          <div className="col-8">
            <SearchForm />
          </div>
          <div className="col-4">
            <button>Use my current location</button>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-4">
            <p id="cityName">Munich</p>
          </div>
          <div class="row justify-content-left">
            <div class="col-4">
              <span id="actualDegree">️️5°C</span>&nbsp;
              <sup>
                <span>
                  <a href="/" id="celsius" class="active">
                    °C
                  </a>{" "}
                  |
                  <a href="/" id="fahrenheit">
                    °F
                  </a>
                </span>
              </sup>
              <p id="current-date"></p>
            </div>
            <div className="col-4" id="moreInformation">
              <ul>
                <li id="description">Overcast clouds</li>
                <li id="current-humidity">Humidity: 40%</li>
                <li id="wind">Wind speed: 4,92 km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
