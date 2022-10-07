import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import logo from "../Assets/Icons/Navbar/Logo.svg";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export function Footer() {
  return (
    <div id="footer">
      <div id="ft-texts-1">
        <NavLink to="/" id="ft-logo">
          <img src={logo} alt="" />
        </NavLink>

        <div id="ft-trio">
          <div id="ft-t-1">
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/privacy">Privacy & Conditions</NavLink>
          </div>

          <div id="ft-t-2">
            <NavLink to="/facebook">
              <FacebookIcon /> Facebook
            </NavLink>
            <NavLink to="/twitter">
              <TwitterIcon /> Twitter
            </NavLink>
            <NavLink to="/instagram">
              <InstagramIcon /> Instagram
            </NavLink>
          </div>

          <div id="ft-t-3">
            <p>Subscribe to out newsletter</p>
            <form
              action=""
              id="ft-form"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                type="text"
                placeholder="Email Address"
                autoComplete="off"
                id="ft-inp"
                name="email"
              />
              <button id="ft-btn">Ok</button>
            </form>
          </div>
        </div>
      </div>

      <div id="ft-texts-2">
        <p>Created By Sensei in 2022</p>
        <p>+998 99 999 99 99 /|\</p>
        <p>nsrt@gmail.com</p>
      </div>
    </div>
  );
}
