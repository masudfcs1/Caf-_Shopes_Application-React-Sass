import React from "react";
import "./Wrapper.scss";

const Wrapper = ({ className, children }) => {
  return <div className={`wapper ${className || ""}`}>{children} </div>;
};

export default Wrapper;
