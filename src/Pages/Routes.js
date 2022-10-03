import React from "react";
import "./Routes.css";
import { Navbar } from "../Components/Navbar/Navbar";
import { Home } from "./Home";
import { Cart } from "../Components/Cart/Cart";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "./NotFound";
import { Footer } from "../Components/Footer/Footer";
import { Clothes } from "./Clothes";
import { Registr } from "../Components/Profile/Registration";
import { Profile } from "../Components/Profile/ProfileComponents/Profile";
import { Shoes } from "./Shoes";
import { Accessories } from "./Accessories";
import { Checkout } from "../Components/Cart/Checkout/Checkout";
import { Search } from "../Components/Search/Search";

export function Router() {
  return (
    <div id="route">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clothes" element={<Clothes />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/accessories" element={<Accessories />} />

        <Route path="/cart/*" element={<Cart />} />
        <Route path="/signIn" element={<Registr />} />
        <Route path="/accaunt/*" element={<Profile />} />
        <Route path="cart/checkout" element={<Checkout />} />
        <Route path="search" element={<Search />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}
