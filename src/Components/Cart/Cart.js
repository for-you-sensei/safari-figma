import React, { useState } from "react";
import { useContext } from "react";
import "./Cart.css";
import { ProductsData } from "../Data/Data";
import Checkbox from "@mui/material/Checkbox";
import { pink } from "@mui/material/colors";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { Button } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { NavLink, useNavigate } from "react-router-dom";

export function Cart() {
  const Data = useContext(ProductsData);
  // console.log(Data.Cart);

  const navigate = useNavigate();

  const deleteData = (i) => {
    let del = Data.Cart.filter((item, index) => index !== i);
    Data.setCart(del);
    // console.log(Data.setCart(del));
  };

  const AddFav = (item) => {
    if (Data.Fav.filter((fil) => fil.id === item.id).length === 0) {
      Data.setFav([...Data.Fav, { ...item }]);
      item.like = true;
    } else {
      Data.setFav((Fav) => Data.Fav.filter((fil) => fil.id !== item.id));
      item.like = false;
    }
  };

  const minus = (id) => {
    Data.setCart(() =>
      Data.Cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quality: item.quality > 1 ? item.quality-- : 1,
            }
          : item
      )
    );
  };

  const plus = (id) => {
    Data.setCart(() =>
      Data.Cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quality: item.quality + 1,
            }
          : item
      )
    );
  };

  return (
    <div id="cart">
      {Data.Cart.length === 0 ? (
        <p>No Product</p>
      ) : (
        <div id="cart-texts">
          <p id="cart-info">Shopping Cart ({Data.Cart.length} item)</p>

          <div id="c-table">
            <table>
              <tr id="c-t-tr-1">
                <th id="c-t-tr-1-1">ITEM DESCRIPTION</th>
                <th id="c-t-tr-1-2">QUANTITY</th>
                <th id="c-t-tr-1-3">UNIT PRICE</th>
                <th id="c-t-tr-1-3">SUB TOTAL</th>
              </tr>

              {Data.Cart.map((item, index) => {
                return (
                  <tr key={index} id="c-card-tr">
                    <td id="c-c-tr-td-1">
                      <figure id="c-figure">
                        <img src={item.productImg} alt="" />
                      </figure>

                      <div id="c-texts">
                        <div></div>
                        <p id="c-t-1">{item.name}</p>
                        <p id="c-t-2">size: {item.size}</p>

                        <div id="c-btns">
                          <label id="c-label" onClick={() => AddFav(item)}>
                            <Button id="c-label-btn">
                              <Checkbox
                                className="c-icon"
                                checked={item.like}
                                icon={
                                  <FavoriteBorder sx={{ color: pink[600] }} />
                                }
                                checkedIcon={
                                  <Favorite sx={{ color: pink[500] }} />
                                }
                              />
                              <p>MOVE TO FAVORITES</p>
                            </Button>
                          </label>

                          <Button
                            onClick={() => {
                              deleteData(index);
                            }}
                          >
                            <label id="c-label">
                              <DeleteForeverIcon className="c-icon-2" />
                              <p>REMOVE</p>
                            </label>
                          </Button>
                        </div>
                      </div>
                    </td>

                    <td id="c-c-tr-td-2">
                      {/* <select id="cartSelect">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select> */}

                      <button id="count-btn" onClick={() => plus(item.id)}>+</button>
                      <p id="count-text">{item.quality}</p>
                      <button id="count-btn" onClick={() => minus(item.id)}>-</button>
                    </td>
                    <td id="c-c-tr-td-3">
                      <p> ₦ {item.totalPrice} </p>
                    </td>
                    <td id="c-c-tr-td-3">
                      <p> ₦ {item.quality * item.totalPrice} </p>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>

          <div id="cart-total">
            <div id="cart-t-texts">
              <div id="cart-t-t-1">
                <p id="cart-t-t-1-1">Total: </p>

                <p id="cart-t-t-1-1">
                  ₦{Data.Cart.reduce((a, b) => a + b.quality * b.totalPrice, 0)}
                  $
                </p>
              </div>
              <p id="cart-t-t-2">Delivery fee not included yet</p>
            </div>

            <div id="cart-total-btns">
              <Button
                className="cart-t-btn"
                id="cart-total-btn-1"
                onClick={() => navigate(-1)}
              >
                CONTINUE SHOPPING
              </Button>
              <NavLink
                className="cart-t-btn"
                to="checkout"
                id="cart-total-btn-2"
              >
                <p>PROCEED TO CHECKOUT</p>
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
