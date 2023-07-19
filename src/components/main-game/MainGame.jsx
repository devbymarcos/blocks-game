import Block from "../block/Block";
import Cannon from "../cannon/Cannon";
import style from "./style.module.css";
import { useEffect, useState, useRef } from "react";

function MainGame() {
  const [blockRepeat, setBlockRepeat] = useState([]);
  const [item, setItem] = useState(0);
  const [click, setClick] = useState(1);
  const [arrDrop, setArrDrop] = useState([]);

  const areaHeight = useRef();
  const mainHeight = useRef();

  function setBlock() {
    const area = areaHeight.current.getBoundingClientRect().bottom;
    const main = mainHeight.current.getBoundingClientRect().bottom;

    if (area + 50 < main) {
      setBlockRepeat((blockRepeat) => {
        const arr = [...blockRepeat];
        arr.unshift(item);
        return arr;
      });
      setItem((item) => {
        return item + 1;
      });
    }
  }

  function handleClick(e) {
    const id = e.currentTarget.id;
    console.log(id);
    setArrDrop((arrDrop) => {
      const arr = [...arrDrop];
      arr.push(id);
      return arr;
    });
    e.currentTarget.style.backgroundColor = "transparent";
    setClick((click) => {
      return click + 1;
    });
  }

  function update() {
    if (click >= 8) {
      const arr = [...blockRepeat];
      console.log(arrDrop);
      arrDrop.forEach((item) => {
        //arr.splice(item, 1);
        document.getElementById(item).style.display = "none";
      });
      setArrDrop([]);
      setBlockRepeat(arr);
      setClick(1);
    }
  }

  useEffect(() => {
    update();
  }, [arrDrop]);

  useEffect(() => {
    const time = setTimeout(() => {
      setBlock();
    }, 3000);
    return () => clearTimeout(time);
  }, [blockRepeat]);

  return (
    <div ref={mainHeight} className={style.mainGame}>
      <div ref={areaHeight} className={style.areaGame}>
        {blockRepeat.map((bl, index) => {
          return (
            <Block id={index} onClick={handleClick} key={index}>
              {""}
            </Block>
          );
        })}
      </div>
      <Cannon />
    </div>
  );
}

export default MainGame;
