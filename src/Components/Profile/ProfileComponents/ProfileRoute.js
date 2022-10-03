import React from "react";
import "./ProfileRoute.css";
import { Routes, Route } from "react-router-dom";
import { AccountInfo } from "./profilePages/AccountInfo/AccountInfo";
import { Address } from "./profilePages/Address/Address";
import { MyOrders } from "./profilePages/My Orders/My Orders";
import { MyFav } from "./profilePages/My Favorites/MyFav";

export function ProfileRoute() {
  return (
    <>
      <Routes>
        <Route path="/profile" element={<AccountInfo />} />
        <Route path="/address" element={<Address />} />
        <Route path="/my_orders" element={<MyOrders />} />
        <Route path="/my_favorites" element={<MyFav />} />
      </Routes>
    </>
  );
}
