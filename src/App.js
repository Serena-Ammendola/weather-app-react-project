import React from "react";
import "./App.css";
import SearchEngine from "./SearchEngine";
import Main from "./Main";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="weather-app">
        <SearchEngine />
        <Main />
        <Footer />
      </div>
    </div>
  );
}
