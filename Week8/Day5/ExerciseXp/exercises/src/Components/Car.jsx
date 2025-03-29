import React, { useState } from "react";
import Garage from "./Garage";

const Car = ({ carInfo }) => {
  const [color, setColor] = useState("Red");
  const [model, setModel] = useState(carInfo.model);

  return (
    <>

      <div>This car is {carInfo.model}</div>
      <div>
        This car is {color} {model}
      </div>
      <Garage size={"small"}/>
    </>
  );
};

export default Car;
