import React, { useContext } from "react";
import { ProductsData } from "../Components/Data/Data";
import { Sec1 } from "../Components/Home/Sec1";
import { Sec2 } from "../Components/Home/Sec2";

export function Home() {
  const data = useContext(ProductsData);

  const filterData = data.products.filter((data) => {
    return data.bestSeling > 4 || data.moreSeen > 63;
    // data.views > 0
  });

  return (
    <>
      <Sec1 />
      <Sec2 FilterData={filterData} />
    </>
  );
}
