import React, { useContext } from "react";
import { ProductsData } from "../Components/Data/Data";
import { ShoesSec1 } from "../Components/Shoes/Sec1";

export function Shoes() {
  const data = useContext(ProductsData);

  const filterData = data.products.filter((data) => {
    return data.type === "shoes";
    // data.views > 0
  });

  return (
    <div id="clothes">
      <ShoesSec1 FilterData={filterData} />
    </div>
  );
}
