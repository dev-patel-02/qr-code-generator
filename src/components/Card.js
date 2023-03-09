import React from "react";
import code from "../images/code.png";

function Card() {
  return (
    <div className="bg-white w-80 rounded-3xl p-4 shadow-xl">
      <div className="banner">
      <img 
          className="rounded-xl w-[300px] h-[288px]"
          src={code}
          alt="barcode"
        />
      </div>
      
      <div className="contentinfo">
        <h1 className="text-xl font-bold px-4 py-4 text-center">
          Improve your front-end skills by building projects
        </h1>
        <p className="text-sm text-gray-600 font-medium px-6 pb-5  text-center">
          Scan the QR code to visit Fronted mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}

export default Card;
