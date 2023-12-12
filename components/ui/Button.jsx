import React from "react";

const Button = ({ text, icon, hidden, color }) => {
  return (
    <button
      className={`bg-[#CFB53B] bg-opacity-25 border border-[#CFB53B] border-opacity-25 px-7 py-2 hover:bg-inherit transition rounded-full text-white ${
        hidden ? "hidden lg:flex" : "flex lg:hidden"
      }`}
    >
      <p className="">{text ? text : icon}</p>
    </button>
  );
};

export default Button;
