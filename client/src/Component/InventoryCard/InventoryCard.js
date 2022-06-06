import React, { useState } from "react";
import { FaTrash, FaEdit, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Popup from "../Popup/Popup";
import "./InventoryCard.css";
const InventoryCard = (props) => {
  const [popup, setPopup] = useState(false);
  const { img, name, brand, price, quantity, _id, user, supplier } = props.item;

  const deleteItem = props.delItem;
  const navigate = useNavigate();

  const viewDel = (id) => {
    navigate(`/product/${id}`);
  };

  const EditItem = (id) => {
    navigate(`/product/edit/${id}`);
  };

  return (
    <>
      <div className="inv-card">
        <img src={img} alt="" />
        <div className="inven-data">
          <h4>{name}</h4>
          <p>Brand: {brand}</p>
          <p>{user}</p>
        </div>
        <div className="inven-data">
          <h4>Price: {price}</h4>
          <p>Quantity: {quantity}</p>
          <p>Supplier: {supplier}</p>
        </div>
        <div>
          <button onClick={() => viewDel(_id)}>
            <FaEye className="acv-icon view-bg" />
          </button>
          <button>
            <FaEdit
              onClick={() => {
                EditItem(_id);
              }}
              className="acv-icon edit-bg"
            />
          </button>

          <button
            onClick={() => {
              setPopup(true);
            }}
          >
            <FaTrash className="acv-icon delete-bg" />
          </button>
        </div>
      </div>
      {popup && (
        <Popup
          clsBtn={setPopup}
          itemRemove={deleteItem}
          message={"Delete this Item from inventory ?"}
        ></Popup>
      )}
    </>
  );
};

export default InventoryCard;
