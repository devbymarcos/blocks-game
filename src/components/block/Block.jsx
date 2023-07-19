import React from "react";
import style from "./style.module.css";

const Block = ({ onClick, id, children }) => {
  return (
    <div id={id} onClick={onClick} className={style.block}>
      {children}
    </div>
  );
};

export default Block;
