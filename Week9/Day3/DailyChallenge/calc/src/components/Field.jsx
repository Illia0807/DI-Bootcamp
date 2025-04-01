import React from "react";

const Field = ({  value, onChange }) => {
  return (
    <div className="fields">
      
      <input placeholder="1"
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Field;
