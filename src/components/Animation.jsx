import React from "react";
import "./Animation.css";
import Import from "./Import";

const Animation = () => {
  return (
    <div className="z-20 relative left-72 bottom-6 opacity-0 md:opacity-100" id="wifi-loader"><img src={Import.workingemoji} alt="" />
      <svg className="circle-outer  -z-10 bg-[#a3705d] rounded-full" viewBox="0 0 86 86"> Frontend 
        <circle className="back" cx="43" cy="43" r="40"></circle>
        <circle className="front" cx="43" cy="43" r="40"></circle>
        <circle className="new" cx="43" cy="43" r="40"></circle>
      </svg>
    </div>
  );
};

export default Animation;
