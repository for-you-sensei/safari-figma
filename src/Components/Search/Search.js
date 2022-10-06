import React, { useContext } from "react";
import "./Search.css";
import { pink } from "@mui/material/colors";
import { Button, Checkbox } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { ProductsData } from "../Data/Data";
import { toast } from "react-toastify";

export function Search() {
  const { search, products, setCart, Cart, Fav, setFav } =
    useContext(ProductsData);

  const AddCart = (item) => {
    if (Cart.filter((fil) => fil.id === item.id).length === 0) {
      setCart([...Cart, { ...item }]);
      toast.dark("product added to the cart :)", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    } else {
      toast("This is a previously added product", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    }
  };

  const AddFav = (item) => {
    if (Fav.filter((fil) => fil.id === item.id).length === 0) {
      setFav([...Fav, { ...item }]);
      item.like = true;
    } else {
      setFav((Fav) => Fav.filter((fil) => fil.id !== item.id));
      item.like = false;
    }
  };

  return (
    <div id="search">
      {search === ""
        ? ""
        : products
            .filter((item) => item.name.toLowerCase().includes(search))
            .map((item) => {
              return (
                <div id="s2-cards" key={item.id}>
                  <figure id="s2-c-img">
                    <img src={item.productImg} alt="" />
                    <div id="hover_card">
                      <label onClick={() => AddFav(item)}>
                        <Checkbox
                          checked={item.like}
                          icon={<FavoriteBorder sx={{ color: pink[600] }} />}
                          checkedIcon={<Favorite sx={{ color: pink[500] }} />}
                        />
                      </label>

                      <Button
                        id="hover-btn"
                        onClick={() => {
                          AddCart(item);
                        }}
                      >
                        Add to cart
                      </Button>
                    </div>
                  </figure>

                  <div id="s2-c-texts">
                    <p>{item.name}</p>
                    <p>₦{item.totalPrice}</p>
                  </div>
                </div>
              );
            })}
    </div>
  );
}
