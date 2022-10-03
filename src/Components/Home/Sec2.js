import React, { useContext, useState } from "react";
import "../Styles/Home/Sec2.css";
import ReactPaginate from "react-paginate";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Button, Checkbox } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { pink } from "@mui/material/colors";
import { ProductsData } from "../Data/Data";
import { toast } from "react-toastify";

export function Sec2({ FilterData }) {
  const [pageNUmber, setPageNumber] = useState(0);
  const usersPerPage = 16;
  const pagesVisited = pageNUmber * usersPerPage;

  const pageCount = Math.ceil(FilterData.length / usersPerPage);

  const data = useContext(ProductsData);

  const AddCart = (item) => {
    if (data.Cart.filter((fil) => fil.id === item.id).length === 0) {
      data.setCart([...data.Cart, { ...item }]);
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
    if (data.Fav.filter((fil) => fil.id === item.id).length === 0) {
      data.setFav([...data.Fav, { ...item }]);
      item.like = true;
    } else {
      data.setFav((Fav) => data.Fav.filter((fil) => fil.id !== item.id));
      item.like = false;
    }
  };
  function changePage({ selected }) {
    setPageNumber(selected);
  }

  console.log(data.Fav);

  return (
    <div id="sec-2">
      <div id="s2-t-1">
        <div id="line"></div>
        <p>Shop your style</p>
        <div id="line"></div>
      </div>
      <p id="s2-t-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae gravida
        cursus adipiscing viverra at tortor, egestas odio parturient. Morbi ut
        lorem in erat. Et et molestie diam diam ultricies. Scelerisque duis diam
        ac cras dictum adipiscing. Venenatis at sit proin ut vitae adipiscing id
        facilisis.
      </p>

      <div id="s2-texts">
        <div id="container">
          {FilterData.slice(pagesVisited, pagesVisited + usersPerPage).map(
            (item, index) => {
              return (
                <div id="s2-cards" key={index}>
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
            }
          )}
        </div>

        <ReactPaginate
          previousLabel={<NavigateBeforeIcon />}
          nextLabel={<NavigateNextIcon />}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"pagination_btns"}
          previousLinkClassName={"previuos_btns"}
          nextLinkClassName={"next_btn"}
          disabledClassName={"pagination_disabled"}
          activeClassName={"pagination_active"}
          onClick={() => {
            window.scrollTo(0, 1000);
          }}
        />

        <button
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          id="top"
        >
          Top
        </button>
      </div>
    </div>
  );
}

// import React, { useState, useContext } from "react";
// import "../Styles/Home/Sec2.css";
// import { ProductsData } from "../Data/Data";
// export function Sec2({ products }) {
//   const data = useContext(ProductsData);
//   return (
//     <div id="sec-2">
//       <div id="s2-t-1">
//         <div id="line"></div>
//         <p>Shop your style</p>
//         <div id="line"></div>
//       </div>
//       <p id="s2-t-2">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae gravida
//         cursus adipiscing viverra at tortor, egestas odio parturient. Morbi ut
//         lorem in erat. Et et molestie diam diam ultricies. Scelerisque duis diam
//         ac cras dictum adipiscing. Venenatis at sit proin ut vitae adipiscing id
//         facilisis.
//       </p>

//       {data.map((item, index) => {
//         return (
//           <div id="" key={index}>
//             <p>{item.name}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
