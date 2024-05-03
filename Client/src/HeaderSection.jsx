import React from "react";
import logo from "./assets/Logo_off.png"

export default function HeaderSection () {
  return (
    <div className="header-section">
      <div className="overlap">
        <img className="logo-white-svg" alt="Logo white" src={logo} />
        <div className="nav-list">
          <a
            className="item-link"
            href="#"
            target="_blank"
            style={{ marginLeft: "60px" }}
          >
            Home
          </a>
          <a className="item-link"
            href="#"
            target="_blank"
            >Services</a>
         <a className="item-link"
            href="#"
            target="_blank"
            >About us</a>
            <a className="item-link"
            href="#"
            target="_blank"
            style={{  marginRight: "0" }}
            >Contact Us</a>
          
        </div>
      </div>
      <div className="link">
        <div className="text-wrapper">Log in</div>
      </div>
      <div className="link-wrapper">
        <div className="div-wrapper">
          <div className="text-wrapper-2">Sign up</div>
        </div>
      </div>
    </div>
  );
};
