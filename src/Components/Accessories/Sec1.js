import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Button, Checkbox, Drawer } from "@mui/material";
import { pink } from "@mui/material/colors";
import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import ReactPaginate from "react-paginate";
import { ProductsData } from "../Data/Data";
import "../Styles/Clothes/Sec1.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export function AccessoriesSec1({ FilterData }) {
  const data = useContext(ProductsData);
  const Accessories = data.products.filter((item) => item.type === "accessory");
  const [sort, setSort] = useState("all");

  const [open, setOpen] = useState(false);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if (sort === "all") {
      setAccessoriesData(Accessories);
    } else if (sort === "mp") {
      const MP = Accessories.filter(
        (item) => item.moreSeen > 64 || item.bestSeling > 4
      );
      const Sort1 = MP.sort(function (a, b) {
        return b.moreSeen - a.moreSeen;
      });
      setAccessoriesData(Sort1);
    } else if (sort === "bs") {
      const BS = Accessories.filter((item) => item.bestSeling);
      const Sort2 = BS.sort(function (a, b) {
        return b.bestSeling - a.bestSeling;
      });
      // console.log(Sort2);
      setAccessoriesData(Sort2);
    } else if (sort === "ptl") {
      const PTL = Accessories.filter((item) => item.totalPrice);
      const Sort3 = PTL.sort(function (a, b) {
        return b.totalPrice - a.totalPrice;
      });
      // console.log(Sort3);
      setAccessoriesData(Sort3);
    } else if (sort === "pth") {
      const PTH = Accessories.filter((item) => item.totalPrice);
      const Sort4 = PTH.sort(function (a, b) {
        return a.totalPrice - b.totalPrice;
      });
      // console.log(Sort4);
      setAccessoriesData(Sort4);
    }
  }, [sort]);
  // eslint-disable-next-line react-hooks/exhaustive-deps

  const [AccessoriesData, setAccessoriesData] = useState(
    data.products.filter((item) => {
      return item.type === "accessory";
    })
  );

  const [pageNUmber, setPageNumber] = useState(0);
  const usersPerPage = 12;
  const pagesVisited = pageNUmber * usersPerPage;
  const pageCount = Math.ceil(AccessoriesData.length / usersPerPage);

  const AddCart = (item) => {
    if (data.Cart.filter((fil) => fil.id === item.id).length === 0) {
      data.setCart([...data.Cart, { ...item }]);
      // toast.dark("product added to the cart :)", {
      //   position: toast.POSITION.BOTTOM_LEFT,
      // });
    } else {
      // toast("This is a previously added product", {
      //   position: toast.POSITION.BOTTOM_LEFT,
      // });
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
    window.scrollTo(0, 0);
  }

  const AccessoriesFillter = (fil) => {
    const result = data.products
      .filter((item) => {
        return item.type === "accessory";
      })
      .filter((item) => item.category === fil);
    setAccessoriesData(result);
    // window.scrollTo(0, 0);
  };

  const SizeFillter = (size) => {
    const result = data.products
      .filter((item) => {
        return item.type === "accessory";
      })
      .filter((item) => item.size === size);
    setAccessoriesData(result);
    // window.scrollTo(0, 0);
  };

  const ColorFillter = (color) => {
    const result = data.products
      .filter((item) => {
        return item.type === "accessory";
      })
      .filter((item) => item.color === color);
    setAccessoriesData(result);
    // window.scrollTo(0, 0);
  };

  const AccessoriesFillterAll = () => {
    const All = data.products.filter((item) => item.type === "accessory");
    setAccessoriesData(All);
    // window.scrollTo(0, 0);
  };

  const PriceFillter = (price1, price) => {
    const result = data.products.filter((item) => {
      return (
        item.type === "accessory" &&
        item.totalPrice >= price1 &&
        item.totalPrice <= price
      );
    });
    // .filter((item) => item.price === price);
    setAccessoriesData(result);
    window.scrollTo(0, 0);
  };

  return (
    <div id="clothesSec1">
      <div id="line-cat">
        <div id="info">
          <div id="info-cat">
            <p id="clothes-text">Clothes</p>

            <p
              className="clothes-text-drawer"
              onClick={() => {
                setOpen(true);
              }}
            >
              CATEGORY
            </p>

            <p id="category">CATEGORY</p>
            <div id="cat-line-1"></div>
          </div>

          <div id="select">
            <label id="cl-select-label">
              <p>Sorty By: </p>
              <select
                id="cl-select"
                onChange={(e) => {
                  setSort(e.target.value);
                }}
              >
                <option value="all">All</option>
                <option value="mp">Most popular</option>
                <option value="bs">Best Selling</option>
                <option value="ptl">Price: High to Low</option>
                <option value="pth">Price: Low to High</option>
              </select>
            </label>
            <div id="cat-line-1"></div>
          </div>
        </div>

        <div id="two-cat">
          <div id="category_container">
            <div id="category_card">
              <button
                onClick={() => {
                  AccessoriesFillterAll();
                }}
              >
                All
              </button>
              <button
                onClick={() => {
                  AccessoriesFillter("facemask");
                }}
              >
                Facemask
              </button>

              <button
                onClick={() => {
                  AccessoriesFillter("jewelry");
                }}
              >
                Jewelry
              </button>

              <button
                onClick={() => {
                  AccessoriesFillter("watches");
                }}
              >
                Watches
              </button>

              <button
                onClick={() => {
                  AccessoriesFillter("hairAccessories");
                }}
              >
                Hair accessories
              </button>

              <button
                onClick={() => {
                  AccessoriesFillter("belts");
                }}
              >
                Belts
              </button>

              <button
                onClick={() => {
                  AccessoriesFillter("backpacks");
                }}
              >
                Backpacks
              </button>

              <button
                onClick={() => {
                  AccessoriesFillter("handbags");
                }}
              >
                Handbags
              </button>

              <button
                onClick={() => {
                  AccessoriesFillter("fragrances");
                }}
              >
                Fragrances
              </button>

              <button
                onClick={() => {
                  AccessoriesFillter("glasses");
                }}
              >
                Sunglasses & eyewears
              </button>

              <button
                onClick={() => {
                  AccessoriesFillter("socks");
                }}
              >
                Socks
              </button>

              <button
                onClick={() => {
                  AccessoriesFillter("beanies");
                }}
              >
                Hats and beanies
              </button>

              <button
                onClick={() => {
                  AccessoriesFillter("gloves");
                }}
              >
                Gloves
              </button>
            </div>

            <div id="size_container">
              <div id="size_clear_card">
                <p>Size</p>
                <button
                  onClick={() => {
                    AccessoriesFillterAll();
                  }}
                >
                  Clear X
                </button>
              </div>
              <span id="line"></span>
              <div id="choose_accessory_size_card">
                <label
                  id="choose_size"
                  onClick={() => {
                    SizeFillter("XS");
                  }}
                >
                  <input type="radio" name="radio" />
                  <p id="size">XS</p>
                </label>

                <label
                  id="choose_size"
                  onClick={() => {
                    SizeFillter("S");
                  }}
                >
                  <input type="radio" name="radio" />
                  <p id="size">S</p>
                </label>

                <label
                  id="choose_size"
                  onClick={() => {
                    SizeFillter("S/M");
                  }}
                >
                  <input type="radio" name="radio" />
                  <p id="size">S/M</p>
                </label>

                <label
                  id="choose_size"
                  onClick={() => {
                    SizeFillter("M");
                  }}
                >
                  <input type="radio" name="radio" />
                  <p id="size">M</p>
                </label>

                <label
                  id="choose_size"
                  onClick={() => {
                    SizeFillter("M/L");
                  }}
                >
                  <input type="radio" name="radio" />
                  <p id="size">M/L</p>
                </label>

                <label
                  id="choose_size"
                  onClick={() => {
                    SizeFillter("L");
                  }}
                >
                  <input type="radio" name="radio" />
                  <p id="size">L</p>
                </label>

                <label
                  id="choose_size"
                  onClick={() => {
                    SizeFillter("XL");
                  }}
                >
                  <input type="radio" name="radio" />
                  <p id="size">XL</p>
                </label>

                <label
                  id="choose_size"
                  onClick={() => {
                    SizeFillter("6");
                  }}
                >
                  <input type="radio" name="radio" />
                  <p id="size">6</p>
                </label>

                <label
                  id="choose_size"
                  onClick={() => {
                    SizeFillter("7");
                  }}
                >
                  <input type="radio" name="radio" />
                  <p id="size">7</p>
                </label>

                <label
                  id="choose_size"
                  onClick={() => {
                    SizeFillter("8");
                  }}
                >
                  <input type="radio" name="radio" />
                  <p id="size">8</p>
                </label>
              </div>
            </div>
            <div id="size_container">
              <div id="size_clear_card">
                <p>Color</p>
                <button
                  onClick={() => {
                    AccessoriesFillterAll();
                  }}
                >
                  Clear X
                </button>
              </div>
              <span id="line"></span>
              <div id="choose_size_card">
                <label
                  id="choose_color"
                  onClick={() => {
                    ColorFillter("beige");
                  }}
                >
                  <input type="radio" name="radio" />
                  <div id="color_card"></div>
                  <p id="color">Beige</p>
                </label>

                <label
                  id="choose_color"
                  onClick={() => {
                    ColorFillter("blue");
                  }}
                >
                  <input type="radio" name="radio" />
                  <div id="color_card" className="blue"></div>
                  <p id="color">Blue</p>
                </label>

                <label
                  id="choose_color"
                  onClick={() => {
                    ColorFillter("black");
                  }}
                >
                  <input type="radio" name="radio" />
                  <div id="color_card" className="black"></div>
                  <p id="color">Black</p>
                </label>

                <label
                  id="choose_color"
                  onClick={() => {
                    ColorFillter("brange");
                  }}
                >
                  <input type="radio" name="radio" />
                  <div id="color_card" className="orange"></div>
                  <p id="color">Orange</p>
                </label>

                <label
                  id="choose_color"
                  onClick={() => {
                    ColorFillter("green");
                  }}
                >
                  <input type="radio" name="radio" />
                  <div id="color_card" className="green"></div>
                  <p id="color">Green</p>
                </label>

                <label
                  id="choose_color"
                  onClick={() => {
                    ColorFillter("brown");
                  }}
                >
                  <input type="radio" name="radio" />
                  <div id="color_card" className="brown"></div>
                  <p id="color">Brown</p>
                </label>

                <label
                  id="choose_color"
                  onClick={() => {
                    ColorFillter("purple");
                  }}
                >
                  <input type="radio" name="radio" />
                  <div id="color_card" className="purple"></div>
                  <p id="color">Purple</p>
                </label>

                <label
                  id="choose_color"
                  onClick={() => {
                    ColorFillter("gold");
                  }}
                >
                  <input type="radio" name="radio" />
                  <div id="color_card" className="gold"></div>
                  <p id="color">Gold</p>
                </label>

                <label
                  id="choose_color"
                  onClick={() => {
                    ColorFillter("taupe");
                  }}
                >
                  <input type="radio" name="radio" />
                  <div id="color_card" className="taupe"></div>
                  <p id="color">Taupe</p>
                </label>

                <label
                  id="choose_color"
                  onClick={() => {
                    ColorFillter("white");
                  }}
                >
                  <input type="radio" name="radio" />
                  <div id="color_card" className="white"></div>
                  <p id="color">White</p>
                </label>

                <label
                  id="choose_color"
                  onClick={() => {
                    ColorFillter("pink");
                  }}
                >
                  <input type="radio" name="radio" />
                  <div id="color_card" className="pink"></div>
                  <p id="color">Pink</p>
                </label>

                <label
                  id="choose_color"
                  onClick={() => {
                    ColorFillter("red");
                  }}
                >
                  <input type="radio" name="radio" />
                  <div id="color_card" className="red"></div>
                  <p id="color">Red</p>
                </label>
              </div>
            </div>
            <div id="size_container">
              <div id="size_clear_card">
                <p>Price</p>
                <button
                  onClick={() => {
                    AccessoriesFillterAll();
                  }}
                >
                  Clear X
                </button>
              </div>
              <span id="line"></span>
              <div id="choose_price_card">
                <label
                  id="choose_price"
                  onClick={() => {
                    PriceFillter(0, 10000);
                  }}
                >
                  <input type="radio" name="radio" />
                  <p id="price">₦0 - ₦10,000</p>
                </label>

                <label
                  id="choose_price"
                  onClick={() => {
                    PriceFillter(10000, 20000);
                  }}
                >
                  <input type="radio" name="radio" />
                  <p id="price">₦10,000 - ₦20,000</p>
                </label>

                <label
                  id="choose_price"
                  onClick={() => {
                    PriceFillter(20000, 50000);
                  }}
                >
                  <input type="radio" name="radio" />

                  <p id="price">₦20,000 - ₦ 50,000</p>
                </label>
                <label
                  id="choose_price"
                  onClick={() => {
                    PriceFillter(50000, 100000);
                  }}
                >
                  <input type="radio" name="radio" />
                  <p id="price">₦50,000 - ₦ 100,000</p>
                </label>

                <label
                  id="choose_price"
                  onClick={() => {
                    PriceFillter(100000, 200000);
                  }}
                >
                  <input type="radio" name="radio" />
                  <p id="price">₦100,000 - ₦ 200,000</p>
                </label>

                <form
                  id="write_price_form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const firstValue = e.target.price1.value;
                    const secondValue = e.target.price2.value;
                    PriceFillter(firstValue, secondValue);
                  }}
                >
                  <input type="number" name="price1" />
                  <p>to</p>

                  <input type="number" name="price2" />
                  <input type="submit" value="Apply" />
                </form>
              </div>
            </div>
          </div>

          <Drawer
            className="drawer"
            open={open}
            onClose={() => {
              setOpen(false);
            }}
          >
            <div id="category-container-drawer">
              <div id="category_card">
                <button
                  onClick={() => {
                    AccessoriesFillterAll();
                  }}
                >
                  All
                </button>
                <button
                  onClick={() => {
                    AccessoriesFillter("facemask");
                  }}
                >
                  Facemask
                </button>

                <button
                  onClick={() => {
                    AccessoriesFillter("jewelry");
                  }}
                >
                  Jewelry
                </button>

                <button
                  onClick={() => {
                    AccessoriesFillter("watches");
                  }}
                >
                  Watches
                </button>

                <button
                  onClick={() => {
                    AccessoriesFillter("hairAccessories");
                  }}
                >
                  Hair accessories
                </button>

                <button
                  onClick={() => {
                    AccessoriesFillter("belts");
                  }}
                >
                  Belts
                </button>

                <button
                  onClick={() => {
                    AccessoriesFillter("backpacks");
                  }}
                >
                  Backpacks
                </button>

                <button
                  onClick={() => {
                    AccessoriesFillter("handbags");
                  }}
                >
                  Handbags
                </button>

                <button
                  onClick={() => {
                    AccessoriesFillter("fragrances");
                  }}
                >
                  Fragrances
                </button>

                <button
                  onClick={() => {
                    AccessoriesFillter("glasses");
                  }}
                >
                  Sunglasses & eyewears
                </button>

                <button
                  onClick={() => {
                    AccessoriesFillter("socks");
                  }}
                >
                  Socks
                </button>

                <button
                  onClick={() => {
                    AccessoriesFillter("beanies");
                  }}
                >
                  Hats and beanies
                </button>

                <button
                  onClick={() => {
                    AccessoriesFillter("gloves");
                  }}
                >
                  Gloves
                </button>
              </div>
              <div id="size_container">
                <div id="size_clear_card">
                  <p>Size</p>
                  <button
                    onClick={() => {
                      AccessoriesFillterAll();
                    }}
                  >
                    Clear X
                  </button>
                </div>
                <span id="line"></span>
                <div id="choose_accessory_size_card">
                  <label
                    id="choose_size"
                    onClick={() => {
                      SizeFillter("XS");
                    }}
                  >
                    <input type="radio" name="radio" />
                    <p id="size">XS</p>
                  </label>

                  <label
                    id="choose_size"
                    onClick={() => {
                      SizeFillter("S");
                    }}
                  >
                    <input type="radio" name="radio" />
                    <p id="size">S</p>
                  </label>

                  <label
                    id="choose_size"
                    onClick={() => {
                      SizeFillter("S/M");
                    }}
                  >
                    <input type="radio" name="radio" />
                    <p id="size">S/M</p>
                  </label>

                  <label
                    id="choose_size"
                    onClick={() => {
                      SizeFillter("M");
                    }}
                  >
                    <input type="radio" name="radio" />
                    <p id="size">M</p>
                  </label>

                  <label
                    id="choose_size"
                    onClick={() => {
                      SizeFillter("M/L");
                    }}
                  >
                    <input type="radio" name="radio" />
                    <p id="size">M/L</p>
                  </label>

                  <label
                    id="choose_size"
                    onClick={() => {
                      SizeFillter("L");
                    }}
                  >
                    <input type="radio" name="radio" />
                    <p id="size">L</p>
                  </label>

                  <label
                    id="choose_size"
                    onClick={() => {
                      SizeFillter("XL");
                    }}
                  >
                    <input type="radio" name="radio" />
                    <p id="size">XL</p>
                  </label>

                  <label
                    id="choose_size"
                    onClick={() => {
                      SizeFillter("6");
                    }}
                  >
                    <input type="radio" name="radio" />
                    <p id="size">6</p>
                  </label>

                  <label
                    id="choose_size"
                    onClick={() => {
                      SizeFillter("7");
                    }}
                  >
                    <input type="radio" name="radio" />
                    <p id="size">7</p>
                  </label>

                  <label
                    id="choose_size"
                    onClick={() => {
                      SizeFillter("8");
                    }}
                  >
                    <input type="radio" name="radio" />
                    <p id="size">8</p>
                  </label>
                </div>
              </div>
              <div id="size_container">
                <div id="size_clear_card">
                  <p>Color</p>
                  <button
                    onClick={() => {
                      AccessoriesFillterAll();
                    }}
                  >
                    Clear X
                  </button>
                </div>
                <span id="line"></span>
                <div id="choose_size_card">
                  <label
                    id="choose_color"
                    onClick={() => {
                      ColorFillter("beige");
                    }}
                  >
                    <input type="radio" name="radio" />
                    <div id="color_card"></div>
                    <p id="color">Beige</p>
                  </label>

                  <label
                    id="choose_color"
                    onClick={() => {
                      ColorFillter("blue");
                    }}
                  >
                    <input type="radio" name="radio" />
                    <div id="color_card" className="blue"></div>
                    <p id="color">Blue</p>
                  </label>

                  <label
                    id="choose_color"
                    onClick={() => {
                      ColorFillter("black");
                    }}
                  >
                    <input type="radio" name="radio" />
                    <div id="color_card" className="black"></div>
                    <p id="color">Black</p>
                  </label>

                  <label
                    id="choose_color"
                    onClick={() => {
                      ColorFillter("brange");
                    }}
                  >
                    <input type="radio" name="radio" />
                    <div id="color_card" className="orange"></div>
                    <p id="color">Orange</p>
                  </label>

                  <label
                    id="choose_color"
                    onClick={() => {
                      ColorFillter("green");
                    }}
                  >
                    <input type="radio" name="radio" />
                    <div id="color_card" className="green"></div>
                    <p id="color">Green</p>
                  </label>

                  <label
                    id="choose_color"
                    onClick={() => {
                      ColorFillter("brown");
                    }}
                  >
                    <input type="radio" name="radio" />
                    <div id="color_card" className="brown"></div>
                    <p id="color">Brown</p>
                  </label>

                  <label
                    id="choose_color"
                    onClick={() => {
                      ColorFillter("purple");
                    }}
                  >
                    <input type="radio" name="radio" />
                    <div id="color_card" className="purple"></div>
                    <p id="color">Purple</p>
                  </label>

                  <label
                    id="choose_color"
                    onClick={() => {
                      ColorFillter("gold");
                    }}
                  >
                    <input type="radio" name="radio" />
                    <div id="color_card" className="gold"></div>
                    <p id="color">Gold</p>
                  </label>

                  <label
                    id="choose_color"
                    onClick={() => {
                      ColorFillter("taupe");
                    }}
                  >
                    <input type="radio" name="radio" />
                    <div id="color_card" className="taupe"></div>
                    <p id="color">Taupe</p>
                  </label>

                  <label
                    id="choose_color"
                    onClick={() => {
                      ColorFillter("white");
                    }}
                  >
                    <input type="radio" name="radio" />
                    <div id="color_card" className="white"></div>
                    <p id="color">White</p>
                  </label>

                  <label
                    id="choose_color"
                    onClick={() => {
                      ColorFillter("pink");
                    }}
                  >
                    <input type="radio" name="radio" />
                    <div id="color_card" className="pink"></div>
                    <p id="color">Pink</p>
                  </label>

                  <label
                    id="choose_color"
                    onClick={() => {
                      ColorFillter("red");
                    }}
                  >
                    <input type="radio" name="radio" />
                    <div id="color_card" className="red"></div>
                    <p id="color">Red</p>
                  </label>
                </div>
              </div>
              <div id="size_container">
                <div id="size_clear_card">
                  <p>Price</p>
                  <button
                    onClick={() => {
                      AccessoriesFillterAll();
                    }}
                  >
                    Clear X
                  </button>
                </div>
                <span id="line"></span>
                <div id="choose_price_card">
                  <label
                    id="choose_price"
                    onClick={() => {
                      PriceFillter(0, 10000);
                    }}
                  >
                    <input type="radio" name="radio" />
                    <p id="price">₦0 - ₦10,000</p>
                  </label>

                  <label
                    id="choose_price"
                    onClick={() => {
                      PriceFillter(10000, 20000);
                    }}
                  >
                    <input type="radio" name="radio" />
                    <p id="price">₦10,000 - ₦20,000</p>
                  </label>

                  <label
                    id="choose_price"
                    onClick={() => {
                      PriceFillter(20000, 50000);
                    }}
                  >
                    <input type="radio" name="radio" />

                    <p id="price">₦20,000 - ₦ 50,000</p>
                  </label>
                  <label
                    id="choose_price"
                    onClick={() => {
                      PriceFillter(50000, 100000);
                    }}
                  >
                    <input type="radio" name="radio" />
                    <p id="price">₦50,000 - ₦ 100,000</p>
                  </label>

                  <label
                    id="choose_price"
                    onClick={() => {
                      PriceFillter(100000, 200000);
                    }}
                  >
                    <input type="radio" name="radio" />
                    <p id="price">₦100,000 - ₦ 200,000</p>
                  </label>

                  <form
                    id="write_price_form"
                    onSubmit={(e) => {
                      e.preventDefault();
                      const firstValue = e.target.price1.value;
                      const secondValue = e.target.price2.value;
                      PriceFillter(firstValue, secondValue);
                    }}
                  >
                    <input type="number" name="price1" />
                    <p>to</p>

                    <input type="number" name="price2" />
                    <input type="submit" value="Apply" />
                  </form>
                </div>
              </div>

              <button
                id="cat-drawer-close"
                onClick={() => {
                  setOpen(false);
                }}
              >
                X
              </button>
            </div>
          </Drawer>

          <div id="cl-card-container">
            <div id="clothes-card">
              {AccessoriesData.slice(
                pagesVisited,
                pagesVisited + usersPerPage
              ).map((item, index) => {
                return (
                  <div id="cl-cards" key={index}>
                    <figure id="cl-c-img">
                      <img src={item.productImg} alt="" />
                      <div id="cl-hover_card">
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

                    <div id="cl-c-texts">
                      <p id="cl-c-t-1">{item.name}</p>
                      <p id="cl-c-t-2">₦{item.totalPrice}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            {AccessoriesData.length > 12 ? (
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
              />
            ) : (
              ""
            )}
          </div>

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
    </div>
  );
}
