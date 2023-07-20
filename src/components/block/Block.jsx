import { useState } from "react";
import style from "./style.module.css";

const Block = ({ id, children, color, onClick }) => {
  return (
    <div
      id={id}
      style={{ backgroundColor: color }}
      onClick={onClick}
      className={style.block}
    ></div>
  );
};

export default Block;
