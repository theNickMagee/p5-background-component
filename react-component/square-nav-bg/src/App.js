import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import SquareNavigation from "./nav-component/SquareNavigation";
import NavItem from "./nav-component/nav-items/NavItem";

function App() {
  return (
    <div className="App">
      <div className="home-nav-bg-container">
        <SquareNavigation />
      </div>

      <div className="nav-content-container">
        <NavItem color={"#ff1100"} label={"Home"} />
        <NavItem color={"#0008ff"} label={"Browse"} />
        <NavItem color={"#ff6600"} label={"Contact"} />

        <NavItem color={"#8100fa"} label={"Store"} />
        <NavItem color={"#00fa53"} label={"Store"} />
        <NavItem color={"#fae900"} label={"Store"} />
      </div>
    </div>
  );
}

export default App;
