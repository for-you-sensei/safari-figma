import React, { useContext, useState } from "react";
import { ProductsData } from "../../Data/Data";
import "./Checkout.css";
import CheckIcon from "@mui/icons-material/Check";
import DoneIcon from "@mui/icons-material/Done";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Drawer } from "@mui/material";

export function Checkout() {
  const [open, setOpen] = useState(false);

  const [gift, setGift] = useState(false);
  const [tick, setTick] = useState(false);

  const [card, setCard] = useState();
  const [yesno, setYesNo] = useState();

  const {
    user,
    setUser,
    setCart,
    Cart,
    setDiscount,
    discount,
    setDeliveryOrder,
    address,
    setAddress,
  } = useContext(ProductsData);

  const minus = (id) => {
  setCart(() =>
      Cart.map((item) =>
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
    setCart(() =>
      Cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quality: item.quality + 1,
            }
          : item
      )
    );
  };


  const getAddress = () => {
    setUser({
      ...user,
      id: user.id,
      name: user.name,
      surname: user.surname,
      email: user.email,
      address: user.address,
      state: user.state,
      city: user.city,
      phone: user.phone,
    });
  };

  const inputChange = (e) => {
    setAddress({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div id="checkout">
      <Drawer
        className="drawer"
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <form id="checkout_form">
          <div>
            <div className={tick ? "checkout_tick active" : "checkout_tick"}>
              <CheckIcon />
            </div>
            <p>Shipping Address </p>
          </div>
          <label>
            <p>Email</p>
            <input
              type="text"
              name="name"
              value={address.name}
              onChange={inputChange}
            />
          </label>
          {/* <label>
          <p>Full name</p>
          <input
            type="text"
            name="surname"
            value={address.surname}
            onChange={inputChange}
          />
        </label> */}
          <label>
            <p>Address</p>
            <textarea
              name="address"
              id=""
              cols="30"
              rows="6"
              value={address.address}
              onChange={inputChange}
            ></textarea>
          </label>
          <label>
            <p>State/Province </p>
            <input
              type="text"
              name="state"
              value={address.state}
              onChange={inputChange}
            />
          </label>
          <label>
            <p>City</p>
            <input
              type="text"
              name="city"
              value={address.city}
              onChange={inputChange}
            />
          </label>
          <label>
            <p>Phone number</p>
            <input
              type="text"
              name="phone"
              value={address.phone}
              onChange={inputChange}
            />
          </label>
          <button
            id="checkout_checkbox"
            onClick={async (e) => {
              e.preventDefault();
              getAddress();

              const addres = await JSON.parse(
                localStorage.getItem("address") || "[]"
              );
              setAddress(addres[0]);
              setTick(true);
            }}
          >
            Set default shipping address
          </button>
        </form>
      </Drawer>

      <div id="devery-container">
        <div id="delivery_card">
          <div id="delivery_method">
            <figure id="checkout_figure">
              <DoneIcon style={{ fontSize: "medium" }} />
            </figure>
            <p>Delivery method</p>
          </div>
          <label id="delivery_input_radio">
            <input type="radio" defaultChecked="true" />
            <p>₦ 2,000</p>
            <p>Delivery fee</p>
            <p>Door delivery</p>
          </label>
        </div>
        <div id="payment_card">
          <div id="delivery_method">
            <figure id="checkout_figure">
              <DoneIcon style={{ fontSize: "medium" }} />
            </figure>
            <p>Payment Methods</p>
          </div>
          <label
            id="delivery_input_radio"
            onClick={() => {
              setDiscount(true);
            }}
          >
            <input
              type="radio"
              name="card"
              value="card"
              onChange={(e) => {
                setCard(e.target.value);
                // console.log(card, yesno);
              }}
            />
            <p>Pay with card </p>
          </label>
          <p id="get_discount">
            (Get 5% off total price and money back guarantee)
          </p>
          <p id="redirect">
            You will be redirected to Paystack payment gateway
          </p>
          <label
            id="delivery_input_radio"
            onClick={() => {
              setDiscount(false);
            }}
          >
            <input
              type="radio"
              name="card"
              value="card"
              onChange={(e) => setCard(e.target.value)}
            />
            <p>Pay on delivery </p>
          </label>
          <ul id="payment_ul">
            <li>
              Kindly note that we will only accept POS payment option on
              delivery
            </li>
            <li>You have to make payment before opening package</li>
            <li>
              Once the seal is broken, item can only be returned if damaged or
              defective{" "}
            </li>
          </ul>
        </div>
      </div>
      <div id="order_summary_container">
        <div id="oreder_summary_card">
          <p id="oreder_summary">ORDER SUMMARY</p>
          {Cart.length === 0 ? (
            <div id="no_product_card">
              <p>No Product</p> <NavLink to="/">Go Back</NavLink>
            </div>
          ) : (
            <>
              <div id="checkout_cards_container">
                {Cart.map((item, i) => {
                  return (
                    <div id="checkout_card" key={item.id}>
                      <figure id="checkout_item_figure">
                        <img src={item.productImg} alt="" />
                      </figure>
                      <div id="checkout_text">
                        <p>{item.name}</p>
                        <p>
                          Size: {""}
                          {item.size}
                        </p>
                        <p>₦ {item.totalPrice}</p>
                        <div id="checkout_plus_minus_btn">
                          <span>Qty</span>
                          <button id="count-btn" onClick={() => plus(item.id)}>
                            +
                          </button>
                          <p>{item.quality}</p>
                          <button id="count-btn" onClick={() => minus(item.id)}>
                            -
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <dir id="checkout_line"></dir>
              <div id="price_info_card">
                <div>
                  <p>Cart sub-total</p>
                  <p>
                    ₦ {""}
                    {Cart.reduce(
                      (a, b) => a + b.quality * b.totalPrice,
                      0
                    )}
                  </p>
                </div>
                <div
                  className={
                    discount ? "card_discount active" : "card_discount"
                  }
                >
                  <p>Card discount</p>
                  <p>
                    - ₦{" "}
                    {Cart.reduce(
                      (a, b) => a + ((b.quality * b.totalPrice) / 100) * 5,
                      0
                    )}
                  </p>
                </div>
                <div>
                  <p>Delivery fee</p>
                  <p>₦ 2,000</p>
                </div>
              </div>
              <dir id="checkout_line" style={{ marginTop: "0" }}></dir>
              <div id="total_price_card">
                <p>TOTAL</p>
                <p>
                  ₦ {""}
                  {discount
                    ? Cart.reduce(
                        (a, b) =>
                          a +
                          (b.quality * b.totalPrice -
                            ((b.quality * b.totalPrice) / 100) * 5) ,
                        0 +2000
                      )
                    : Cart.reduce(
                        (a, b) => a + (b.quality * b.totalPrice ),
                        0 +2000
                      )}
                </p>
              </div>
            </>
          )}
        </div>
        <div id="yes_no_card">
          <p>Is this a gift?</p>
          <div id="yes_no_btns">
            <label
              onClick={() => {
                setGift(true);
              }}
            >
              <input
                type="radio"
                name="yesno"
                value="yes"
                onChange={(e) => setYesNo(e.target.value)}
              />
              <p>Yes</p>
            </label>
            <label
              onClick={() => {
                setGift(false);
              }}
            >
              <input
                type="radio"
                name="yesno"
                value="no"
                onChange={(e) => setYesNo(e.target.value)}
              />
              <p>No</p>
            </label>
          </div>
        </div>
        <p className={gift ? "checkout_text show" : "checkout_text"}>
          A complimentary gift receipt will be included in the package, and
          prices will be hidden on the receipt.
        </p>

        <Button
          id="place_order"
          onClick={() => {
            setOpen(true);
          }}
        >
          Open Address
        </Button>

        <Button
          id="place_order"
          onClick={(e) => {
            console.log(e.target.name.value);
            setDeliveryOrder([...Cart]);
            toast.success(
              <>
                <p style={{ fontSize: "14px", color: "#07BC0CFF" }}>
                  Your Order was succefully booked{" "}
                </p>
              </>
            );
            toast.info(
              <>
                <p
                  style={{
                    color: "#3498DBFF",
                    fontSize: "14px",
                    paddingTop: "10px",
                    fontWeight: "600",
                  }}
                >
                  Go to order page to see your orders
                </p>
              </>
            );
          }}
        >
          PLACE ORDER
        </Button>
      </div>
    </div>
  );
}
