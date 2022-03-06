import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Weather from "./Weather";
import Header from "./Header";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Weather />
    <footer>
      See my projects on <a href="https://github.com/Franzi2110">Github</a>
    </footer>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
