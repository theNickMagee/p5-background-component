import React, { useRef, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import SquareNavigation from "./nav-component/SquareNavigation";
import NavItem from "./nav-component/nav-items/NavItem";
import NavPage from "./nav-component/NavPage";

//pages
import HomePage from "./pages/home/HomePage";
//vars
import { navVars } from "./vars/vars";
function App() {
  return (
    <Router>
      <div className="App"></div>

      <Switch>
        {/* <Route path="/"></Route> */}
        <Route exact path="/" component={NavPage}></Route>
        <Route exact path={navVars.page1.path}>
          <HomePage />
        </Route>
        <Route path={navVars.page2.path}>{/* <Users /> */}</Route>
        <Route path={navVars.page3.path}>{/* <Home /> */}</Route>
      </Switch>
    </Router>
  );
}

export default App;
