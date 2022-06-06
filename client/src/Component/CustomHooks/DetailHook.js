//custom hook for single data

import { useEffect, useState } from "react";

const useDetails = (productId) => {
  const [detail, setDetails] = useState({});

  useEffect(() => {
    const url = `https://frozen-earth-93030.herokuapp.com/product/${productId}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, [productId]);
  return [detail];
};
export default useDetails;
