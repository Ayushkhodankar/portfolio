import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
function Pre(props) {
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
}

export default Pre;
