import React from "react";
import ReactDOM from "react-dom";

function getRandomInt(min, max) {
  // min = Math.ceil(min);
  // max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

const name = "Aman";
const number = getRandomInt(1, 10);
ReactDOM.render(
  <div>
    <h1>Hello {name}!</h1>
    <p>Your Lucky Number is {number}.</p>
  </div>,
  document.getElementById("root")
);
