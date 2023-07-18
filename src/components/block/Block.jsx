import React from "react";
import style from "./style.module.css";

const Block = ({ onClick }) => {
  return <div onClick={onClick} className={style.block}></div>;
};

export default Block;
