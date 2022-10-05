import React, { useContext, useState } from "react";
import "./My Orders.css";
import { ProductsData } from "../../../../Data/Data";
import DoneIcon from "@mui/icons-material/Done";
import { toast } from "react-toastify";
import { DrawerOpen } from "../DrawerOpen";

export function MyOrders() {
  const Data = useContext(ProductsData);
  const [open, setOpen] = useState(false);
  const AddOrder = (item, i) => {
    Data.setOrder([...Data.Order, { ...item }]);
    let del = Data.DeliveryOrder.filter((item, index) => index !== i);
    Data.setDeliveryOrder(del);
  };

  const data = JSON.parse(localStorage.getItem("data")) || [];

  return (
    <div id="order">
      <button
        id="open-dash"
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Dashboard
      </button>

      <DrawerOpen open={open} setOpen={setOpen} />

      <p>My Orders</p>
      <div id="order_card_container">
        {Data.Order.length === 0 ? (
          <p id="no_order">No order was delivered</p>
        ) : (
          Data.Order.map((item) => {
            return (
              <div id="order_card" key={item.id}>
                <div id="order_card_detail">
                  <figure id="order_figure">
                    <img src={item.productImg} alt="" />
                    <div id="delivered_card">
                      <p> Delivered </p>
                    </div>
                  </figure>

                  <div id="order_detail_text">
                    <p>{item.name}</p>
                    <p>
                      Size: {""}
                      {item.size}
                    </p>
                    <p>₦ {item.totalPrice}</p>
                    <p>Qty {item.quality}</p>
                    <p>
                      {new Date().getDay()} / {new Date().getMonth()} /{""}
                      {new Date().getFullYear()}
                    </p>
                  </div>
                </div>
                <div id="payment_details">
                  <p>Payment details</p>
                  <p>Item’s total - ₦ {item.quality * item.totalPrice}</p>
                  <p>Delivery fee - ₦ 2,000 </p>
                  <p>Total - ₦ {item.quality * item.totalPrice + 2000}</p>
                </div>
                <div id="order_delivery_method">
                  <p>Delivery method</p>
                  <p>Door delivery</p>
                  <p>Shipping address</p>
                  <p>Ayokunle Oriolowo 4, Barnawa Close, Barnawa Kaduna.</p>
                </div>
              </div>
            );
          })
        )}
      </div>
      {Data.Order.length === 0 && Data.DeliveryOrder.length === 0 ? (
        ""
      ) : (
        <div id="order_btns">
          <button>ORDER AGAIN</button>
          <button
            onClick={() => {
              toast.info("Sorry but you can't return gotten products");
            }}
          >
            REQUEST A RETURN
          </button>
        </div>
      )}
      {/* <div id="order_btns">
          <button>ORDER AGAIN</button>
          <button
            onClick={() => {
              toast.info("Sorry but you can't return gotten products");
            }}
          >
            REQUEST A RETURN
          </button>
        </div> */}
      <div id="order_delivery_container">
        {Data.DeliveryOrder.length === 0 ? (
          <p id="no_order">You ordered nothing</p>
        ) : (
          Data.DeliveryOrder.map((item, i) => {
            return (
              <div id="order_card" key={item.id}>
                <div id="order_card_detail">
                  <figure id="order_figure">
                    <img src={item.productImg} alt="" />
                    <div className="delivered_card">
                      <p>To arrive</p>
                    </div>
                  </figure>

                  <div id="order_detail_text">
                    <p>{item.name}</p>
                    <p>
                      Size: {""}
                      {item.size}
                    </p>
                    <p>₦ {item.totalPrice}</p>
                    <p>Qty {item.quality}</p>
                    <p>
                      Between {""}
                      {new Date().getDay()} / {new Date().getMonth()} /{""}
                      {new Date().getFullYear()}
                      {""}- {""}
                      {new Date().getDay() + 7} / {new Date().getMonth()} /{""}
                      {new Date().getFullYear()}
                    </p>
                  </div>
                </div>
                <div id="payment_details">
                  <p>Payment details</p>
                  <p>Item’s total - ₦ {item.quality * item.totalPrice}</p>
                  <p>Delivery fee - ₦ 2,000 </p>
                  <p
                    style={
                      Data.discount
                        ? { display: "flex", paddingBottom: "5px" }
                        : { display: "none" }
                    }
                  >
                    Discount - ₦ {""}
                    {Data.Cart.reduce(
                      (a, b) => a + ((b.quality * b.totalPrice) / 100) * 5,
                      0
                    )}
                  </p>
                  <p>
                    Total - ₦{" "}
                    {Data.discount
                      ? Data.Cart.reduce(
                          (a, b) =>
                            a +
                            (b.quality * b.totalPrice -
                              ((b.quality * b.totalPrice) / 100) * 5) +
                            2000,
                          0
                        )
                      : Data.Cart.reduce(
                          (a, b) => a + (b.quality * b.totalPrice + 2000),
                          0
                        )}
                  </p>
                </div>
                <div id="order_delivery_method">
                  <p>Delivery method</p>
                  <p>Door delivery</p>
                  <p>Shipping address</p>
                  <div>
                    {data.map((item) => {
                      return (
                        <p key={item.id}>
                          {item.name} {""} {item.surname}, {""} {item.address}{" "}
                          {""} {item.state}
                        </p>
                      );
                    })}
                  </div>
                </div>
                <button
                  style={{
                    border: "none",
                    background: "green",
                    color: "#FFf",
                    borderRadius: "5px",
                  }}
                  onClick={() => {
                    AddOrder(item, i);
                  }}
                >
                  <DoneIcon />
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
