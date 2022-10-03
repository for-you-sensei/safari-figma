import React, { useContext, useState } from "react";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../Assets/Icons/Navbar/Logo.svg";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuIcon from "@mui/icons-material/Menu";
import { ProductsData } from "../Data/Data";
import { DrawerLeft } from "./DrawerLeft";
import { toast } from "react-toastify";
import SearchIcon from "@mui/icons-material/Search";
// import { DrawerLeft } from "./Drawer/DraweLeft";

export function Navbar() {
  // const [profil, setProfil] = useState(false);
  const Data = useContext(ProductsData);
  const [open, setOpen] = useState(false);
  const { setSearch } = useContext(ProductsData);
  const navigate = useNavigate();

  const searchFun = (e) => {
    if (e.target.search.value === "") {
      toast.error("Please write smth to search");
    } else {
      navigate("/search");
    }
  };

  return (
    <nav id="nav">
      <div id="menu">
        <button
          id="menu-btn"
          onClick={() => {
            setOpen(true);
          }}
        >
          {Data.Cart.length + Data.Fav.length > 0 ? (
            <span className="dataLengthMenu">
              {Data.Cart.length + Data.Fav.length}
            </span>
          ) : (
            ""
          )}
          <MenuIcon />
        </button>

        <DrawerLeft open={open} setOpen={setOpen} />
      </div>

      <div id="nav-texts">
        <NavLink
          id="pages"
          to="/"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          Home
        </NavLink>
        <NavLink
          id="pages"
          to="/clothes"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          Clothes
        </NavLink>
        <NavLink
          id="pages"
          to="/shoes"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          Shoes
        </NavLink>
        <NavLink
          id="pages"
          to="/accessories"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          Accessories
        </NavLink>
      </div>

      <NavLink
        to="/"
        id="nav-icon"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <img src={logo} alt="" />
      </NavLink>

      <div id="nav-tools">
        <form
          id="n-t-form"
          onSubmit={(e) => {
            e.preventDefault();
            searchFun(e);
            setSearch(e.target.search.value.toLowerCase());
            e.target.search.value = "";
          }}
        >
          <input
            type="text"
            placeholder="Search..."
            name="search"
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />

          <button id="searchBtn" onClick={(e) => {}}>
            <SearchIcon color="black" sx={{ fontSize: 25 }} />
          </button>
        </form>

        <div id="n-t-trio">
          {/* <button id="nav-icons"> */}
          <NavLink
            id="nav-icons"
            // to={profil ? "/accaunt/accaunt_info" : "/signIn"}
            to="/signIn"
          >
            <PersonIcon />
          </NavLink>
          {/* </button> */}

          <NavLink id="nav-icons" to="/cart">
            {Data.Cart.length > 0 ? (
              <span className="dataLength">{Data.Cart.length}</span>
            ) : (
              ""
            )}
            <ShoppingCartIcon />
          </NavLink>

          <NavLink id="nav-icons" to="/accaunt/my_favorites">
            {Data.Fav.length > 0 ? (
              <span className="dataLength">{Data.Fav.length}</span>
            ) : (
              ""
            )}
            <FavoriteIcon />
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
