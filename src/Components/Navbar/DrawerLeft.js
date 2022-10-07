import React, { useContext } from "react";
import { Drawer, List, ListItemButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import logo from "../Assets/Icons/Navbar/Logo.svg";
import "./DrawerLeft.css";
import { ProductsData } from "../Data/Data";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";

export function DrawerLeft({ open, setOpen, show }) {
  const Data = useContext(ProductsData);

  return (
    <Drawer
      open={open}
      onClose={() => {
        setOpen(false);
      }}
      anchor="left"
      id="drawer"
    >
      <List id="List">
        <NavLink
          to="/"
          id="nav-icon-drawer"
          onClick={() => {
            setOpen(false);
          }}
        >
          <img src={logo} alt="" />
        </NavLink>

        <NavLink to="/" id="ListItem">
          <ListItemButton
            onClick={() => {
              setOpen(false);
            }}
          >
            <p id="nav-t">Home</p>
          </ListItemButton>
        </NavLink>

        <NavLink to="/clothes" id="ListItem">
          <ListItemButton
            onClick={() => {
              setOpen(false);
            }}
          >
            <p id="nav-t">Clothes</p>
          </ListItemButton>
        </NavLink>

        <NavLink to="/shoes" id="ListItem">
          <ListItemButton
            onClick={() => {
              setOpen(false);
            }}
          >
            <p id="nav-t">Shoes</p>
          </ListItemButton>
        </NavLink>

        <NavLink to="/accessories" id="ListItem">
          <ListItemButton
            onClick={() => {
              setOpen(false);
            }}
          >
            <p id="nav-t">Accessories</p>
          </ListItemButton>
        </NavLink>

        <NavLink id="ListItem" to="/accaunt/profile">
          <ListItemButton
            onClick={() => {
              setOpen(false);
            }}
          >
            <PersonIcon />
            Profile
          </ListItemButton>
        </NavLink>

        <NavLink id="ListItem" to="/cart">
          <ListItemButton
            onClick={() => {
              setOpen(false);
            }}
          >
            {Data.Cart.length > 0 ? (
              <span id="dataLengthDrawer">{Data.Cart.length}</span>
            ) : (
              ""
            )}
            <ShoppingCartIcon />
            Cart
          </ListItemButton>
        </NavLink>

        <NavLink id="ListItem" to="/accaunt/my_favorites">
          <ListItemButton
            onClick={() => {
              setOpen(false);
            }}
          >
            {Data.Fav.length > 0 ? (
              <span id="dataLengthDrawer">{Data.Fav.length}</span>
            ) : (
              ""
            )}
            <FavoriteIcon />
            My Favorites
          </ListItemButton>
        </NavLink>
      </List>
    </Drawer>
  );
}
