import React from "react";

const Sidebar = ({ isOpen, toggle }) => {


console.log(toggle);

  return (
    <div
      className={`bg-red-300 absolute z-1000 top-0 left-0 h-full border-2 border-black duration-350 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-100"
      }`}
    >
      <div onClick={toggle}>☰</div>
      <div>Sidebar Component</div>
    </div>
  );
};

export default Sidebar;
