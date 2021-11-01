import React, { useState } from "react";
import "./NavItem.css";

const NavItem = ({ color, label }) => {
  const [mouseHovered, setMouseHovered] = useState(false);

  const handleMouseEnter = () => {
    setMouseHovered(true);
  };

  const handleMouseExit = () => {
    setMouseHovered(false);
  };

  const additionalStyle = {
    backgroundColor: mouseHovered ? color : "rgba(190, 190, 190, 0.459)",
  };
  return (
    <div
      className="nav-content-item"
      style={additionalStyle}
      onMouseOver={handleMouseEnter}
      onMouseOut={handleMouseExit}
    >
      {label}
    </div>
  );
};

export default NavItem;
