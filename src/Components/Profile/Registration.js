import React, { useState } from "react";
import "./Registration.css";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";

import { NavLink } from "react-router-dom";

export function Registr() {
  return (
    <>
      <div id="sign">
        <div id="s-texts-1">
          <p>Hello there!</p>
          <p>Please sign in or create acca unt to continue</p>
        </div>

        <div id="s-texts-2">
          <form action="" id="sign-form">
            <p id="sg-f-t">Sign In</p>

            <input placeholder="email" name="a" />

            <input placeholder="password" />

            <label id="sg-f-check">
              <Checkbox
                sx={{
                  color: pink[800],
                  "&.Mui-checked": {
                    color: pink[600],
                  },
                }}
              />
              <p>Remember my details</p>
            </label>

            <NavLink to="/accaunt/profile" id="signIn">
              <button type="submit">SIGN IN</button>
            </NavLink>

            <NavLink to="/forgot" id="forgot">
              Forgot Password?
            </NavLink>
          </form>

          <form action="" id="sign-form">
            <p id="sg-f-t">CREATE ACCAUNT</p>

            <input placeholder="first name" />

            <input placeholder="last name" />
            <input placeholder="email" />
            <input placeholder="create password" />
            <input placeholder="confirm password" />

            <label id="sg-f-check">
              <Checkbox
                sx={{
                  color: pink[800],
                  "&.Mui-checked": {
                    color: pink[600],
                  },
                }}
              />
              <p>
                I want to receive Safari newsletters with the best deals and
                offers
              </p>
            </label>

            <NavLink to="/accaunt/profile" id="signIn">
              <button type="submit">CREATE ACCAUNT</button>
            </NavLink>
          </form>
        </div>
      </div>
    </>
  );
}
