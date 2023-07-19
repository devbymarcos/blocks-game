import style from "./style.module.css";
import { useEffect, useRef, useState } from "react";

function Cannon() {
  const tankRef = useRef();
  const [x, setX] = useState(10);
  const [y, setY] = useState(0);

  function key(e) {
    if (e.keyCode === 68) {
      setX((x) => {
        return x + 10;
      });
    }
    if (e.keyCode === 65) {
      setX((x) => {
        return x - 10;
      });
    }
    if (e.keyCode === 87) {
      setY((y) => {
        return y + 10;
      });
    }
    if (e.keyCode === 83) {
      setY((y) => {
        return y - 10;
      });
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", key);

    return () => {
      document.removeEventListener("keydown", key);
    };
  }, [x, y]);

  return (
    <div
      ref={tankRef}
      style={{
        left: x,
        bottom: y,
      }}
      className={style.cannon}
    ></div>
  );
}

export default Cannon;
