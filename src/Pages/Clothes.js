import React, { useContext } from "react";
import { ClothesSec1 } from "../Components/Clothes/Sec1";
import { ProductsData } from "../Components/Data/Data";

export function Clothes() {
  const data = useContext(ProductsData);

  const filterData = data.products.filter((data) => {
    return data.type === "clothes";
    // data.views > 0
  });

  return (
    <div id="clothes">
      <ClothesSec1 FilterData={filterData} />
    </div>
  );
}
