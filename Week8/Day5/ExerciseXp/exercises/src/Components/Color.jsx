import React, { useEffect, useState } from "react";

const Color = () => {
  const [favoriteColor, setFavoriteColor] = useState("red");
  useEffect(() => {
    setFavoriteColor("yellow");
  }, []);
  return (
    <>
      <div>My favorite color is {favoriteColor}</div>
      <button onClick={()=>setFavoriteColor("blue")}>Change color</button>
    </>
  );
};

export default Color;
