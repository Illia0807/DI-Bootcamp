import React, { useState } from "react";

const Events = () => {
  const [click,setClick]=useState(" ")
  const [isToggleOn,setIsToggleOn]=useState(true);


  const handleOnClick = () => {
    alert("Was called");
  };
  const handleKeyDown=(e)=>{

        
        if(e.key=="Enter"){
        alert(`Enter was pressed your input is ${click}`);
        setClick(" ");
        }
  }

  return (
    <>
      <button onClick={handleOnClick}>Click me</button>
      <input type="text" onKeyDown={(e)=>handleKeyDown(e)} value={click} onChange={(e)=>setClick(e.target.value)} />
      <div><p>
        Exercise9:
        
        </p>
        <button onClick={()=>setIsToggleOn(!isToggleOn)}>{isToggleOn?"on":"off"} </button>
        </div>
    </>
  );
};

export default Events;
