import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { img, name, brand, price, _id, quantity } = props.item;
  return (
    <div className="card-div">
      <img src={img} alt="" />
      <h4>{name}</h4>
      <p>Brand: {brand}</p>
      <p>Price: {price} BDT</p>
      <p>Quantity:{quantity}</p>
      <Link to={`/product/${_id}`}>View Details</Link>
    </div>
  );
};

export default Card;
