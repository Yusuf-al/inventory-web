import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import useProduct from "../CustomHooks/ProductHook";
import "./FeatureBike.css";

const FetaureBike = () => {
  const [products] = useProduct();
  const [items, setItem] = useState([]);
  useEffect(() => {
    const featureItems = [...products];
    let arr = featureItems.slice(0, 6);
    setItem(arr);
  }, [products]);

  return (
    <div className="feature-div">
      <div className="feature-container">
        <p className="check-out-title">Check out our new collection</p>
        <h1 className="feature-title">Feature Bikes</h1>
        <div className="feature-items">
          {items.map((item) => (
            <Card key={item._id} item={item}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FetaureBike;
