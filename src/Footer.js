import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <p>
        This project was coded by
        <a href="https://github.com/sam1246" target="_blank" rel="noreferrer">
          Sam Wright
        </a>{" "}
        and is
        <a
          href="https://github.com/sam1246/My-Weather-App"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          on GitHub
        </a>{" "}
        and
        <a
          href="https://spectacular-taffy-400a1b.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>
      </p>
    </div>
  );
}
