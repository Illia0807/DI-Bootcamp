import React, { useState } from "react";

const Phone = () => {
  const [phone, setPhone] = useState({
    brand: "Samsung",
    model: "Galaxy S20",
    color: "black",
    year: 2020,
  });
  const chageColor = () => {
    if (phone.color == "black") {
      setPhone((prevState) => ({ ...prevState, color: "gray" }));
    }
    if (phone.color == "gray") {
      setPhone((prevState) => ({ ...prevState, color: "black" }));
    }
  };
  return (
    <div>
      <h3>My phone is {phone.brand}</h3>
      <p>
        it is a {phone.model} {phone.color}
        {phone.year}{" "}
      </p>
      <button onClick={chageColor}>Change color</button>
    </div>
  );
};

export default Phone;
