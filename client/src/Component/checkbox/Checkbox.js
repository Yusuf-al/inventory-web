import React from "react";
const brands = [
  {
    id: 1,
    brand: "Yamaha",
  },
  {
    id: 2,
    brand: "Honda",
  },
  {
    id: 3,
    brand: "Hero",
  },
  {
    id: 4,
    brand: "Bajaj",
  },
  {
    id: 5,
    brand: "KTM",
  },
  {
    id: 6,
    brand: "TVS",
  },
];

const Checkbox = ({ handleCheckBox }) => {
  // const [checkbox, setCheckbox] = useState([]);
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div>
      {brands.map((brand) => (
        <div className="brand-list" key={brand.id}>
          <input
            type="checkbox"
            onChange={handleCheckBox}
            name="brandCheckbox"
            id={brand.brand.toLowerCase()}
            value={capitalizeFirstLetter(brand.brand)}
          />
          <label htmlFor={brand.brand.toLowerCase()}>
            {brand.brand.toUpperCase()}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Checkbox;

// const checkItem = checbox.indexOf(brand);
//         const newItem = [...checkItem];
//         if (checkItem === -1) {
//             newItem.push(brand);
//         } else {
//             newItem.splice(checkItem,1)
//         }
//         setCheckbox(newItem)
