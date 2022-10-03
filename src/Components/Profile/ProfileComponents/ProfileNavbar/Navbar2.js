import React from "react";
import "./Navbar2.css";
import { NavLink } from "react-router-dom";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import Person2Icon from "@mui/icons-material/Person2";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuBookIcon from "@mui/icons-material/MenuBook";

export function Navbar2() {
  return (
    <>
      <div id="nav-2">
        <p>ACCOUNT DASHBOARD</p>
        <div id="n2-links">
          <NavLink to="profile">
            <Person2Icon />
            Account Information
          </NavLink>

          <NavLink to="address">
            <MenuBookIcon />
            Address Book
          </NavLink>

          <NavLink to="my_orders">
            <CardGiftcardIcon />
            My Orders
          </NavLink>

          <NavLink to="my_favorites">
            <FavoriteIcon />
            My Favorites
          </NavLink>
        </div>
        
      </div>
    </>
  );
}
