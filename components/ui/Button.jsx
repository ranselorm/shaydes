import React from "react";

const Button = ({ text, icon, hidden, color }) => {
  return (
    <button
      className={`bg-gray-300 px-4 py-2 rounded-full ${
        hidden ? "hidden lg:flex" : "flex lg:hidden"
      }`}
    >
      <p className="text-black">{text ? text : icon}</p>
    </button>
  );
};

export default Button;
