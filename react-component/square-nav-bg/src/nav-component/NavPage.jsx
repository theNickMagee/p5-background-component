import React, { useEffect } from "react";
import NavItem from "./nav-items/NavItem";
import { navVars } from "../vars/vars";
import SquareNavigation from "./SquareNavigation";
import "./SquareNavigation.css";
import "../App.css";
function NavPage(props) {
  useEffect(() => {
    console.log("hello form nav page");
  }, []);
  return (
    <>
      <div className="home-nav-bg-container">
        <SquareNavigation />
      </div>
      <div className="nav-content-container">
        <NavItem
          color={navVars.page1.color}
          label={navVars.page1.label}
          link={navVars.page1.path}
        />
        <NavItem
          color={navVars.page2.color}
          label={navVars.page2.label}
          link={navVars.page2.path}
        />
        <NavItem
          color={navVars.page3.color}
          label={navVars.page3.label}
          link={navVars.page3.path}
        />

        <NavItem color={navVars.page4.color} label={navVars.page4.label} />
        <NavItem color={navVars.page5.color} label={navVars.page5.label} />
        <NavItem color={navVars.page6.color} label={navVars.page6.label} />
      </div>
    </>
  );
}

export default NavPage;
