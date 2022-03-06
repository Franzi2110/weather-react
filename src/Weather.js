import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import SearchForm from "./SearchForm";

export default function Weather() {
  return (
    <div className="container">
      <div className="WeatherApp">
        <div className="row">
          <SearchForm />
        </div>
        <br />
      </div>
    </div>
  );
}
