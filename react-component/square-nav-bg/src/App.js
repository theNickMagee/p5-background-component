import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import SquareNavigation from "./nav-component/SquareNavigation";

function App() {
  return (
    <div className="App">
      <div className="home-nav-container">
        <SquareNavigation />
      </div>
    </div>
  );
}

export default App;
