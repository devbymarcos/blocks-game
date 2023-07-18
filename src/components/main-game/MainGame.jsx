import Block from "../block/Block";
import Cannon from "../cannon/Cannon";
import style from "./style.module.css";
import { useEffect, useState, useRef } from "react";

function MainGame() {
  const [blockRepeat, setBlockRepeat] = useState(Array.from({ length: 8 }));
  const areaHeight = useRef();
  const mainHeight = useRef();

  function setBlock() {
    const area = areaHeight.current.getBoundingClientRect().bottom;
    const main = mainHeight.current.getBoundingClientRect().bottom;
    if (area + 50 < main) {
      setBlockRepeat(blockRepeat.concat(Array.from({ length: 8 })));
    }
  }

  function handleClick(e) {
    e.currentTarget.style.backgroundColor = "#fff";
  }

  useEffect(() => {
    const time = setTimeout(() => {
      setBlock();
    }, 1000);
    return () => clearTimeout(time);
  }, [blockRepeat]);

  return (
    <div ref={mainHeight} className={style.mainGame}>
      <div ref={areaHeight} className={style.areaGame}>
        {blockRepeat.map((_, index) => {
          return <Block onClick={handleClick} key={index} />;
        })}
      </div>
      <Cannon />
    </div>
  );
}

export default MainGame;
