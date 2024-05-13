import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      This project was coded by
      <a
        href="https://github.com/Serena-Ammendola"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        Serena Ammendola
      </a>
      {"  "}
      and is
      <a
        href="https://github.com/Serena-Ammendola/weather-app-react-project"
        target="_blank"
        rel="noreferrer"
      >
        {"  "}
        on GitHub
      </a>
      {"  "}
      and hosted
      <a
        href="https://my-weather-react-app-project.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        on Netlify.
      </a>
    </footer>
  );
}
