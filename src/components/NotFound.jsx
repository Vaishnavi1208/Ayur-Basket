import React from "react";
import nf from "./notfound.png";

const NotFound = () => {
  return (
    <div>
      <h1>Page Not Found!!</h1>
      <img src={nf} class="d-block w-50 mx-auto" alt="..."></img>
    </div>
  );
};

export default NotFound;