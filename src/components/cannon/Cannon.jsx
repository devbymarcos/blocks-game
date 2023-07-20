import style from "./style.module.css";
import { useEffect, useRef, useState } from "react";

function Cannon() {
  const tankRef = useRef();
  const cannonRef = useRef();
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [angle, setAngle] = useState(0);

  const velocity = 10; //move o tanque com o teclado
  function moveTank(e) {
    console.log(e);
    if (e.keyCode === 68) {
      setX((y) => {
        return y + velocity;
      });
    }
    if (e.keyCode === 65) {
      setX((y) => {
        return y - velocity;
      });
    }
    if (e.keyCode === 87) {
      setY((y) => {
        return y - velocity;
      });
    }
    if (e.keyCode === 83) {
      setY((y) => {
        return y + velocity;
      });
    }
  }

  function moveCannon(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const elemRec = cannonRef.current.getBoundingClientRect();
    const elem = cannonRef.current;

    const elementoX = elemRec.left + elemRec.width / 2;
    const elementoY = elemRec.top + elemRec.height / 2;

    const deltaX = mouseX - elementoX;
    const deltaY = mouseY - elementoY;

    const angleRadians = Math.atan2(deltaX, deltaY);
    const angleInDegrees = (angleRadians * 180) / Math.PI;

    elem.style.transform = `rotate(-${angleInDegrees + 180}deg)`;
  }

  useEffect(() => {
    document.addEventListener("keydown", moveTank);
    document.addEventListener("mousemove", moveCannon);

    return () => {
      document.removeEventListener("keydown", moveTank);
      document.removeEventListener("mousemove", moveCannon);
    };
  }, [x, y]);

  return (
    <div
      ref={tankRef}
      style={{
        transform: `translate(${x}px, ${y}px)`,
      }}
      className={style.tank}
    >
      <span ref={cannonRef} className={style.cannon}></span>
    </div>
  );
}

export default Cannon;
