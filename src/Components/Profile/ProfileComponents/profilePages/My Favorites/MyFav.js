import React, { useContext } from "react";
import "./MyFav.css";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Button } from "@mui/material";
import { ProductsData } from "../../../../Data/Data";
import { toast } from "react-toastify";

export function MyFav() {
  const Data = useContext(ProductsData);
  // console.log(Data.Fav);

  const deleteData = (i) => {
    // let del = Data.Fav.filter((item, index) => index !== i && item.like === false);
    let del = Data.Fav.filter((item, index) => index !== i);
    Data.setFav(del);
    // console.log(Data.setFav(del));
  };

  const AddCart = (item) => {
    if (Data.Cart.filter((fil) => fil.id === item.id).length === 0) {
      item.like = true;

      Data.setCart([...Data.Cart, { ...item }]);
      toast.dark("product added to the cart :)", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    } else {
      toast("This is a previously added product", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    }
  };

  return (
    <div id="fav">
      <p id="info">My Favorites</p>

      {Data.Fav.length === 0 ? (
        <p id="noProduct">No Product</p>
      ) : (
        <div id="fav-container">
          {Data.Fav.map((item, index) => {
            return (
              <div id="f-card" key={index}>
                <div id="f-c-texts">
                  <figure id="f-c-t-img">
                    <img src={item.productImg} alt="" />
                  </figure>

                  <div id="f-c-text">
                    <p id="f-c-t-1">{item.name}</p>
                    <p id="f-c-t-2">Size: {item.size}</p>
                    <p id="f-c-t-3">₦ {item.totalPrice}</p>
                  </div>
                </div>

                <div id="f-c-btns">
                  <Button
                    id="f-c-btn-buy"
                    onClick={() => {
                      AddCart(item);
                    }}
                  >
                    BUY NOW
                  </Button>

                  <Button
                    id="f-c-btn-del"
                    onClick={() => {
                      deleteData(index);
                    }}
                  >
                    <HighlightOffIcon />
                    remove
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
