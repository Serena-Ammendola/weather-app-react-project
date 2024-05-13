import React from "react";
import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="weather-app">
        <Weather />
        <Footer />
      </div>
    </div>
  );
}
