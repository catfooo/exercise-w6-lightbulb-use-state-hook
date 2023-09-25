import React, { useState } from "react";

export const Lightbulb = () => {
  // Initialize the state for on/off
  const [isLightOn, setIsLightOn] = useState(false);

  const toggleLight = () => {
    // Toggle the on/off state
    setIsLightOn(!isLightOn);
    console.log("Clicked");
  };
  return (
    // <div className={`lightbulb-container ${isLightOn ? 'on' : 'off'}`}>
    //   <div className={`lightbulb ${isLightOn ? 'on' : 'off'}`} onClick={toggleLight}>
    //     <div className={`bulb ${isLightOn ? 'on' : 'off'}`}></div>
    //   </div>
    // </div>




<div className={`lightbulb ${isLightOn ? 'on' : 'off'}`} onClick={toggleLight}>
  {/* Content of the lightbulb */}
</div>




    // <div className="lightbulb-container">
    //   <div className="lightbulb" onClick={toggleLight}>
    //     <div className="bulb"></div>
    //   </div>
    // </div>
  );
};
