import React from "react";
import "./Profile.css";
import { ProfileRoute } from "./ProfileRoute";
import { Navbar2 } from "./ProfileNavbar/Navbar2";

export function Profile() {
  return (
    <>
      <div id="profile">
        <Navbar2 />

        <ProfileRoute />
      </div>
    </>
  );
}
