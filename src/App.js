import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Card from "./components/Card";
import { axe } from "@axe-core/react";

function App() {
  return (
      <div className="container mx-auto flex justify-center items-center h-screen px-4">
        <Card />
      </div>
  );
}

export default App;

if (process.env.NODE_ENV !== "production") {
  const axe = require("@axe-core/react");
  axe(React, ReactDOM, 1000);
}
