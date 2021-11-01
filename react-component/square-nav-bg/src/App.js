import React, { useRef, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import SquareNavigation from "./nav-component/SquareNavigation";
import NavItem from "./nav-component/nav-items/NavItem";

//pages
import HomePage from "./pages/home/HomePage";
//vars
import { navVars } from "./vars/vars";
function App() {
  return (
    <Router>
      <div className="App">
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

          <NavItem color={navVars.page3.color} label={navVars.page3.label} />
          <NavItem color={navVars.page4.color} label={navVars.page4.label} />
          <NavItem color={navVars.page5.color} label={navVars.page5.label} />
        </div>
      </div>

      <Switch>
        <Route path={navVars.page1.path}>
          <HomePage />
        </Route>
        <Route path={navVars.page2.path}>{/* <Users /> */}</Route>
        <Route path={navVars.page3.path}>{/* <Home /> */}</Route>
      </Switch>
    </Router>
  );
}

export default App;
