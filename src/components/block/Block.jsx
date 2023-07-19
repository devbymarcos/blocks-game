import React from "react";
import style from "./style.module.css";

const Block = ({ onClick, id, children }) => {
  const [click, setClick] = useState(1);

  return (
    <div id={id} onClick={onClick} className={style.block}>
      {children}
    </div>
  );
};

export default Block;
