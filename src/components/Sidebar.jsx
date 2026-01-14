import React from "react";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div
      className={`bg-red-300 absolute z-1000 top-0 left-0 h-full border-2 border-black ${
        isOpen ? "translate-0" : "-translate-100"
      }`}
    >
      Sidebar Component
    </div>
  );
};

export default Sidebar;
