import Block from "../block/Block";
import Cannon from "../cannon/Cannon";
import style from "./style.module.css";
import { useEffect, useState, useRef } from "react";

function MainGame() {
  const [block, setBlock] = useState([
    { color: "#000", x: 100, y: 100 },
    { color: "#000", x: 100, y: 100 },
    { color: "#000", x: 100, y: 100 },
    { color: "#000", x: 100, y: 100 },
    { color: "#000", x: 100, y: 100 },
    { color: "#000", x: 100, y: 100 },
    { color: "#000", x: 100, y: 100 },
    { color: "#000", x: 100, y: 100 },
  ]);
  const [click, setClick] = useState(1);
  const [item, setItem] = useState(0);
  const [arrDrop, setArrDrop] = useState([]);

  const areaHeight = useRef();
  const mainHeight = useRef();

  const velocity = 1000;

  function createBlock() {
    const area = areaHeight.current.getBoundingClientRect().bottom;
    const main = mainHeight.current.getBoundingClientRect().bottom;

    if (area + 50 < main) {
      setBlock((block) => {
        const arr = [...block];
        arr.unshift(
          { color: "#000", x: 100, y: 100 },
          { color: "#000", x: 100, y: 100 },
          { color: "#000", x: 100, y: 100 },
          { color: "#000", x: 100, y: 100 },
          { color: "#000", x: 100, y: 100 },
          { color: "#000", x: 100, y: 100 },
          { color: "#000", x: 100, y: 100 },
          { color: "#000", x: 100, y: 100 }
        );
        return arr;
      });
      setItem((item) => {
        return item + 1;
      });
    }
  }

  function handleClick(e) {
    const id = e.currentTarget.id;
    const changeBlock = [...block];
    changeBlock[id].color = "green";
    setBlock(changeBlock);
  }

  useEffect(() => {
    const time = setInterval(() => {
      createBlock();
    }, velocity);
    return () => clearInterval(time);
  }, []);

  return (
    <div ref={mainHeight} className={style.mainGame}>
      <div ref={areaHeight} className={style.areaGame}>
        {block.map((item, index) => {
          return (
            <Block
              onClick={handleClick}
              id={index}
              color={item.color}
              key={index}
            ></Block>
          );
        })}
      </div>
      <Cannon />
    </div>
  );
}

export default MainGame;
