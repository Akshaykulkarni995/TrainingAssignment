import React from "react";
import spinner from "../../src/loding.png";

const Spinner = () => {
  return (
    <img
      src={spinner}
      style={{ width: "200px", margin: "auto" }}
      alt="loading"
    ></img>
  );
};

export default Spinner;
