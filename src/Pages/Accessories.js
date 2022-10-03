import React, { useContext } from "react";
import { AccessoriesSec1 } from "../Components/Accessories/Sec1";
import { ProductsData } from "../Components/Data/Data";

export function Accessories() {
  const data = useContext(ProductsData);

  const filterData = data.products.filter((data) => {
    return data.type === "accesories";
    // data.views > 0
  });

  return (
    <div id="clothes">
      <AccessoriesSec1 FilterData={filterData} />
    </div>
  );
}
