//custome hooks for fetch all data

import { useEffect, useState } from "react";

const useProduct = (page, size, brand) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(
      `https://frozen-earth-93030.herokuapp.com/all-product?page=${page}&size=${size}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [page, size, brand]);
  return [products];
};

export default useProduct;
