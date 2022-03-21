import React, { useState } from "react";

export default function WeatherTemperature(props) {
  let [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheit() {
    return Math.round((props.celsius * 9) / 5 + 32);
  }
  if (unit === "celsius") {
    return (
      <div>
        <span id="actualDegree">️️{props.celsius}</span>&nbsp;
        <sup>
          <span>
            °C |
            <a href="/" onClick={showFahrenheit} id="fahrenheit">
              °F
            </a>
          </span>
        </sup>
      </div>
    );
  } else {
    return (
      <div>
        <span id="actualDegree">️️{fahrenheit()}</span>&nbsp;
        <sup>
          <span>
            <a href="/" onClick={showCelsius} className="active">
              °C
            </a>{" "}
            | °F
          </span>
        </sup>
      </div>
    );
  }
}
