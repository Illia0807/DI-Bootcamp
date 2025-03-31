import React from "react";
import jsonData from "../../jsonData.json";

const Example3 = () => {
  return (
    <>
      <div>Example3</div>
      {jsonData.Experiences.map((item, index) => (
        <div key={index}>
          <img src={item.logo} style={{ border: "50%" }} alt={item.logo} />
          <h2>{item.companyName}</h2>
          {item.roles.map((role, i) => (
            <div key={i}>
              <p>
                {role.startDate}
                {role.location}
              </p>
              <p>{role.description}</p>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default Example3;
