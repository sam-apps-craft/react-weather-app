import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <p>
        This project was coded by
        <a
          href="https://github.com/sam-apps-craft"
          target="_blank"
          rel="noreferrer"
        >
          Sam Wright
        </a>{" "}
        and is
        <a
          href="https://github.com/sam-apps-craft/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          on GitHub
        </a>{" "}
        and
        <a
          href="https://sam1246-react-weather-app.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>
      </p>
    </div>
  );
}
