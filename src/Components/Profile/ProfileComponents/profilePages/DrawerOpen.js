import React from "react";
import { Drawer } from "@mui/material";
import { NavLink } from "react-router-dom";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import Person2Icon from "@mui/icons-material/Person2";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuBookIcon from "@mui/icons-material/MenuBook";

export function DrawerOpen({ open, setOpen }) {
  return (
    <Drawer
      className="drawer"
      open={open}
      onClose={() => {
        setOpen(false);
      }}
    >
      <div id="nav-2-address">
        <p>ACCOUNT DASHBOARD</p>
        <div id="n2-links">
          <NavLink to="/accaunt/profile">
            <Person2Icon />
            Account Information
          </NavLink>

          <NavLink to="/accaunt/address">
            <MenuBookIcon />
            Address Book
          </NavLink>

          <NavLink to="/accaunt/my_orders">
            <CardGiftcardIcon />
            My Orders
          </NavLink>

          <NavLink to="/accaunt/my_favorites">
            <FavoriteIcon />
            My Favorites
          </NavLink>
        </div>
      </div>
    </Drawer>
  );
}
