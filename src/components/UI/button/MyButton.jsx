import React from "react";
import classses from "./MyButton.module.css";

const MyButton = ({ children, ...props }) => {
  return (
    <button className={classses.myBtn} {...props}>
      {children}{" "}
    </button>
  );
};

export default MyButton;
