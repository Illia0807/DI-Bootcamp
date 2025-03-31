import jsonData from "../../jsonData.json";
import React from "react";

const Example2 = () => {
  return (
    <>
      <div>Example2</div>
      {jsonData.Skills.map((item,index) => (
        <div key={index}>
        <h3>{item.Area}</h3>
        <ul>
          {item.SkillSet.map((skill, skillIndex) => (
            <li key={skillIndex}>
              <span>{skill.Name}</span> 
              
            </li>
          ))}
        </ul>
      </div>
        
      ))}
    </>
  );
};

export default Example2;
