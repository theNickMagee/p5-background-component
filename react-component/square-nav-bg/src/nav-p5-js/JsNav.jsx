import React from "react";
import useScript from "./useScript";

function JsNav(props) {
  useScript("./p5.js");
  useScript("./sketch.js");
  return <div></div>;
}

export default JsNav;
