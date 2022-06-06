import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import InventoryCard from "../InventoryCard/InventoryCard";
import "react-toastify/dist/ReactToastify.css";

import "./Myitem.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { NavLink } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

const Inventory = () => {
  const [items, setItems] = useState([]);
  const [user] = useAuthState(auth);
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
    const email = user?.email;

    const url = `https://frozen-earth-93030.herokuapp.com/my-item?user=${email}`;
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("acc-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      });
  }, []);

  const showItem = () => {
    if (loading) {
      return <Spinner></Spinner>;
    } else {
      if (items.length === 0) {
        return (
          <>
            <h1 className="empty-msg">You haven't added any items yet</h1>
          </>
        );
      } else {
        return (
          <>
            {items.map((item) => (
              <InventoryCard
                key={item._id}
                item={item}
                delItem={() => deleteItem(item._id)}
              ></InventoryCard>
            ))}
          </>
        );
      }
    }
  };

  return (
    <div className="inventory-div">
      <div className="inv-link">
        <NavLink className="link-btn" to="/add-product">
          Add Product
        </NavLink>
        <NavLink className="link-btn" to="/manage-inventory">
          Manage Inventory
        </NavLink>
      </div>
      <div>{showItem()}</div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Inventory;
