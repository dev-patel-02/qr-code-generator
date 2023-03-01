import React from "react";
import code from "../images/code.png";

function Card() {
  return (
    <div className="bg-white w-80 rounded-3xl p-4 shadow-xl">
      <img className="rounded-xl" src={code} alt="code" />
      <p className="text-xl font-bold px-4 py-4 text-center">
        Improve your front-end skills by building projects
      </p>
      <p className="text-sm text-gray-600 font-medium px-6 pb-5  text-center">
        Scan the QR code to visit Fronted mentor and take your coding skills to
        the next level
      </p>
    </div>
  );
}

export default Card;
