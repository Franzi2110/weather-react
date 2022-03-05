import React from "react";
import axios from "axios";

export default function Weather(props) {
  function showDetails(response) {
    alert(`The weather in ${props.city} is ${response.data.main.temp}°C.`);
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=b400ae3b711a616262d18b0ca2cbe78f&units=metric`;
  axios.get(url).then(showDetails);

  return <div>Hi</div>;
}
