import { async } from "@firebase/util";
import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Checkbox from "../checkbox/Checkbox";
import useProduct from "../CustomHooks/ProductHook";
import Spinner from "../Spinner/Spinner";
import "./AllProducts.css";

const AllProducts = () => {
  const [items, setItem] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(5);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dataFetch();
  }, []);

  const dataFetch = async () => {
    setLoading(true);
    const url = "https://frozen-earth-93030.herokuapp.com/pagecount";
    let data = await fetch(url);
    data = await data.json();

    const count = data.count;
    const pages = Math.ceil(count / 5);
    setPageCount(pages);
    setLoading(false);
  };

  const [filter, setFilter] = useState([]);
  const [products] = useProduct(currentPage, pageSize, filter);

  useEffect(() => {
    const featureItems = [...products];
    setItem(featureItems);
  }, [products]);

  //filter by brand
  const handleCheckBox = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFilter((filter) => [...filter, value]);
    } else {
      setFilter((filter) => filter.filter((el) => el !== value));
    }
  };

  return (
    <>
      <div className="products-div">
        <div className="catogory">
          <h4>Filter by Brands</h4>
          <div>
            <Checkbox handleCheckBox={handleCheckBox}></Checkbox>
          </div>
        </div>
        {loading ? (
          <Spinner></Spinner>
        ) : (
          <div className="products-list">
            {items.map((item) => (
              <Card key={item._id} item={item}></Card>
            ))}
          </div>
        )}
      </div>
      <div className="page-btn-div">
        {[...Array(pageCount).keys()].map((num, ind) => (
          <button
            key={ind}
            className={currentPage === num ? "actv" : ""}
            onClick={() => {
              setCurrentPage(num);
            }}
          >
            {num + 1}
          </button>
        ))}
        <select
          defaultValue="5"
          onChange={(e) => {
            setPageSize(e.target.value);
          }}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </>
  );
};

export default AllProducts;

// const handleCheckBox = (e) => {
//   const { value, checked } = e.target;
//   if (checked) {
//     brandList.push(value);
//   } else {
//     let ind = brandList.indexOf(value);
//     brandList.splice(ind, 1);
//   }
//   // setFilter(brandList.toString());
//   console.log(brandList);
//   let arr = [...brandList];
//   setFilter(arr.toString());
// };
