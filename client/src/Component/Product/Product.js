import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import Popup from "../Popup/Popup";
import { Helmet } from "react-helmet-async";
import "./Product.css";
import { toast } from "react-toastify";
import Spinner from "../Spinner/Spinner";

const Product = () => {
  const { productId } = useParams();
  const [user] = useAuthState(auth);
  const [popup, setPopup] = useState(false);

  const [loading, setloading] = useState(false);

  const [name, setName] = useState("");
  const [brand, setbrand] = useState("");
  const [price, setprice] = useState("");
  const [quantity, setquantity] = useState("");
  const [description, setdescription] = useState("");
  const [img, setimg] = useState("");
  const [supplier, setsupplier] = useState("");
  const [inputNum, setInputNum] = useState();

  const [addBox, setAddBox] = useState(false);

  useEffect(() => {
    setloading(true);
    dataFetch();
  }, []);

  //fetching data from the api

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
    setloading(false);
  };

  //Remove an item from the inventory
  const removeSingleItem = async () => {
    let upQuan = quantity - 1;
    setquantity(quantity - 1);
    const url = `https://frozen-earth-93030.herokuapp.com/product/update/${productId}`;
    let data = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        quantity: upQuan,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    data = await data.json();
    console.log(data);
    toast(`${name} has been delivered`);
    setPopup(false);
  };

  const handleRemove = () => {
    setPopup(true);
  };

  //add item to the stock
  const addMoreItem = async () => {
    if (inputNum === "") {
      return toast("Please add Quantity");
    }
    let numCon = inputNum;
    let qNum = parseInt(numCon);
    if (isNaN(qNum) || qNum < 1) {
      return toast("Please input only Positive Value");
    }
    let newQuan = quantity + qNum;
    setquantity(newQuan);
    const url = `https://frozen-earth-93030.herokuapp.com/product/update/${productId}`;
    let data = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        quantity: newQuan,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    data = await data.json();
    toast(`${inputNum} ${name} has been addded to inventory`);
    setAddBox(false);
    inputNum.value = " ";
  };

  const showAddBox = () => {
    setAddBox(!addBox);
  };

  return (
    <div className="product-div">
      <Helmet>
        <title>{`BikePark - ${name}`}</title>
      </Helmet>
      <div className="product-container">
        <div className="name-price">
          <h1>{name}</h1>
          <h2>{price} BDT</h2>
        </div>
        {popup && (
          <Popup
            itemRemove={removeSingleItem}
            clsBtn={setPopup}
            message={"Deliver an item ?"}
          ></Popup>
        )}
        <div className="product-details">
          <div className="product-img">
            {loading ? <Spinner></Spinner> : <img src={img} alt={name} />}
          </div>
          <div className="specification">
            <h1>Details</h1>
            <div className="spe-data">
              <p className="key">Brand</p>
              <p className="value">{brand}</p>
            </div>
            <div className="spe-data">
              <p className="key">Price</p>
              <p className="value">{price} BDT</p>
            </div>
            <div className="spe-data">
              <p className="key">Quantity</p>
              <p className="value">{quantity}</p>
            </div>
            <div className="spe-data">
              <p className="key">Supplier</p>
              <p className="value">{supplier}</p>
            </div>
          </div>
        </div>
        <div className="product-details">
          <div className="description">
            <h3>Bike's Overview</h3>
            <p>{description}</p>
          </div>
          <div className="btn-div">
            <div className="add-remove">
              {user && (
                <>
                  <button className="add-btn" onClick={showAddBox}>
                    {addBox ? "Cancel" : "Restock"}
                  </button>
                  <button className="rmv-btn" onClick={handleRemove}>
                    Delivered
                  </button>
                </>
              )}
            </div>
            {addBox && (
              <div className="quan-box">
                <input
                  type="text"
                  onChange={(e) => {
                    setInputNum(e.target.value);
                  }}
                />
                <button onClick={addMoreItem}>Add</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
