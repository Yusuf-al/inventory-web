import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import "./AddProduct.css";

const AdProduct = () => {
  const [user] = useAuthState(auth);
  const [imgURL, setImgURL] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const qunNum = parseInt(e.target.quantity.value);
    if (isNaN(qunNum) || qunNum < 1) {
      return toast("Please input only positive number");
    }
    const data = {
      img: e.target.imgUrl.value,
      name: e.target.productName.value,
      brand: e.target.brand.value,
      price: e.target.price.value,
      quantity: qunNum,
      supplier: e.target.supplier.value,
      user: e.target.userEmail.value,
      description: e.target.description.value,
    };

    const url = `https://frozen-earth-93030.herokuapp.com/add-product`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast("Product added successfully");
        e.target.productName.value = "";
        e.target.imgUrl.value = "";
        e.target.productName.value = "";
        e.target.brand.value = "";
        e.target.price.value = "";
        e.target.quantity.value = "";
        e.target.description.value = "";
        e.target.supplier.value = "";
        setImgURL("");
      });
  };

  return (
    <div className="addPro-div">
      <div className="inv-link">
        <NavLink className="link-btn" to="/manage-inventory">
          Manage Inventory
        </NavLink>
        <NavLink className="link-btn" to="/my-product">
          My Product
        </NavLink>
      </div>
      <div className="add-pro-container">
        <div className="login-form form-div">
          <h1>Add Product</h1>
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="user-name">Product Name</label>
            <input
              type="text"
              name="productName"
              id="product-name"
              placeholder="Enter Product Name"
              required
            />
            <label htmlFor="brand-name">Brand</label>
            <input
              type="text"
              name="brand"
              id="brand-name"
              placeholder="Brand name"
              required
            />
            <label htmlFor="product-price">Price</label>
            <input
              type="text"
              name="price"
              id="product-price"
              placeholder="Product Price"
              required
            />
            <label htmlFor="brand-name">Quantiity</label>
            <input
              type="text"
              name="quantity"
              id="add-quantity"
              placeholder="Quantiity"
              required
            />
            <label htmlFor="supplier-name">Supplier</label>
            <input
              type="text"
              name="supplier"
              id="supplier"
              placeholder="Supplier"
              required
            />
            <label htmlFor="user-email">Email</label>
            <input
              type="email"
              name="userEmail"
              id="user-email"
              placeholder="Enter eamil"
              value={user?.email}
              readOnly
              required
            />
            <label htmlFor="img-url">Image URL</label>
            <input
              type="text"
              name="imgUrl"
              id="img-url"
              onChange={(e) => {
                setImgURL(e.target.value);
              }}
              placeholder="Enter Image URL"
              required
            />
            <div>
              <img className="item-img" src={imgURL} alt="" />
            </div>
            <label htmlFor="img-url">Description</label>
            <textarea
              type="text"
              name="description"
              id="description"
              placeholder="Write an overview"
              required
            />

            <button type="submit" className="login-btn">
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdProduct;
