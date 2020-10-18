import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("main")
);

const formatName = (name) => {
  return name.firstName + " " + name.lastName;
};
const name = {
  firstName: "choi",
  lastName: "youhyun",
};
const element = <h1>Hello, {formatName(name)}!</h1>;

function tick() {
  const elem = (
    <div>
      <h1>Hellos, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );

  ReactDOM.render(elem, document.getElementById("root"));
}
// setInterval(tick, 1000);

// ReactDOM.render(element, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
