import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./NavItem.css";

const NavItem = ({ color, label, link }) => {
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
      <Link
        to={link}
        style={{
          textDecoration: "none",
          color: mouseHovered ? "black" : "white",
        }}
      >
        {label}
      </Link>
    </div>
  );
};

export default NavItem;
