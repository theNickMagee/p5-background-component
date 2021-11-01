import React, { useEffect } from "react";
import "./HomePage.css";

const HomePage = (props) => {
  useEffect(() => {
    console.log("hello from home page");
  }, []);
  return <div>Home Page</div>;
};

export default HomePage;
