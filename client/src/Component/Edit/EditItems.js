import { async } from "@firebase/util";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import "./EditItem.css";

const EditItems = () => {
  const [user] = useAuthState(auth);
  const { productId } = useParams();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/my-product";
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [brand, setbrand] = useState("");
  const [price, setprice] = useState("");
  const [quantity, setquantity] = useState("");
  const [description, setdescription] = useState("");
  const [img, setimg] = useState("");
  const [supplier, setsupplier] = useState("");

  useEffect(() => {
    dataFetch();
  }, []);

  const dataFetch = async () => {
    const url = `https://frozen-earth-93030.herokuapp.com/product/${productId}`;
    let data = await fetch(url);
    data = await data.json();
    setName(data.name);
    setbrand(data.brand);
    setprice(data.price);
    setquantity(data.quantity);
    setdescription(data.description);
    setimg(data.img);
    setsupplier(data.supplier);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const url = `https://frozen-earth-93030.herokuapp.com/product/update/${productId}`;
    let data = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        name,
        brand,
        price,
        quantity,
        supplier,
        img,
        description,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    data = await data.json();
    console.log(data);
    navigate(from, { replace: true });
    toast("Product update successful");
  };

  return (
    <div>
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
            <h1>Update Product</h1>
            <form action="">
              <label htmlFor="user-name">Product Name</label>
              <input
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                name="productName"
                id="product-name"
                placeholder="Enter Product Name"
                value={name}
                required
              />
              <label htmlFor="brand-name">Brand</label>
              <input
                type="text"
                name="brand"
                onChange={(e) => {
                  setbrand(e.target.value);
                }}
                id="brand-name"
                placeholder="Brand name"
                value={brand}
                required
              />
              <label htmlFor="product-price">Price</label>
              <input
                type="text"
                name="price"
                onChange={(e) => {
                  setprice(e.target.value);
                }}
                id="product-price"
                placeholder="Product Price"
                value={price}
                required
              />
              <label htmlFor="brand-name">Quantiity</label>
              <input
                type="text"
                name="quantity"
                onChange={(e) => {
                  setquantity(e.target.value);
                }}
                id="add-quantity"
                placeholder="Quantiity"
                value={quantity}
                required
              />
              <label htmlFor="supplier-name">Supplier</label>
              <input
                type="text"
                name="supplier"
                onChange={(e) => {
                  setsupplier(e.target.value);
                }}
                id="supplier"
                placeholder="Supplier"
                value={supplier}
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
                onChange={(e) => {
                  setimg(e.target.value);
                }}
                id="img-url"
                placeholder="Enter Image URL"
                value={img}
                required
              />
              <div>
                <img className="item-img" src={img} alt="" />
              </div>
              <label htmlFor="img-url">Description</label>
              <textarea
                type="text"
                name="description"
                onChange={(e) => {
                  setdescription(e.target.value);
                }}
                id="description"
                placeholder="Write a overview"
                value={description}
                required
              />

              <button
                type="submit"
                onClick={handleUpdate}
                className="login-btn"
              >
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditItems;
