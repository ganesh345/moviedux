import React from "react";
import "../styles.css";

export default function Footer() {
    const date = new Date().getFullYear(); 
  return (
    <footer className="footer">
      <p className="footer"> © {date} moviedux, All rights are reserved</p>
    </footer>
  );
}