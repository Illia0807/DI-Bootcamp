import React from "react";
import jsonData from "../../jsonData.json";

const Example1 = () => {
  return (
    <>
      <div>Example1</div>
      {jsonData.SocialMedias.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </>
  );
};

export default Example1;
