import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import useProduct from "../CustomHooks/ProductHook";
import InventoryCard from "../InventoryCard/InventoryCard";
import "react-toastify/dist/ReactToastify.css";

import "./Inventory.css";
import { NavLink } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

const Inventory = () => {
  const [products] = useProduct();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const deleteItem = (id) => {
    const url = `https://frozen-earth-93030.herokuapp.com/product/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const remaining = items.filter((item) => item._id !== id);
        setItems(remaining);
        toast("Item deleted");
      });
  };

  useEffect(() => {
    setLoading(true);
    const featureItems = [...products];
    setItems(featureItems);
    setLoading(false);
  }, [products]);
  return (
    <div className="inventory-div">
      <div className="inv-link">
        <NavLink className="link-btn" to="/add-product">
          Add Product
        </NavLink>
        <NavLink className="link-btn" to="/my-product">
          My Product
        </NavLink>
      </div>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <>
          <div className="item-div">
            {items.map((item) => (
              <InventoryCard
                key={item._id}
                item={item}
                delItem={() => deleteItem(item._id)}
              ></InventoryCard>
            ))}
          </div>
        </>
      )}

      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Inventory;
