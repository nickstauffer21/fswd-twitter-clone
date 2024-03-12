import React from "react";
import ReactDOM from "react-dom";

const Dashboard = () => {
  return <h1>HJE</h1>;
};

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Dashboard />,
    document.body.appendChild(document.createElement("div"))
  );
});
