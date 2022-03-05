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
      </div>
    </div>
  );
}
