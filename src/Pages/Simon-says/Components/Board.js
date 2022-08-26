import { useEffect } from "react";
import { useRef } from "react";
import classes from "../SimonSays.module.css";

const Board = ({ addPlayerChoiceHandler, setRefsHandler }) => {
  const btn1Ref = useRef();
  const btn2Ref = useRef();
  const btn3Ref = useRef();
  const btn4Ref = useRef();

  useEffect(() => {
    setRefsHandler(btn1Ref, btn2Ref, btn3Ref, btn4Ref);
  }, [setRefsHandler, btn1Ref, btn2Ref, btn3Ref, btn4Ref])


  return (
    <>
      <div
        className={`${classes.btn} ${classes["btn-1"]}`}
        ref={btn1Ref}
        onClick={() => {
          addPlayerChoiceHandler(0);
        }}></div>
      <div
        className={`${classes.btn} ${classes["btn-2"]}`}
        ref={btn2Ref}
        onClick={() => {
          addPlayerChoiceHandler(1);
        }}></div>
      <div
        className={`${classes.btn} ${classes["btn-3"]}`}
        ref={btn3Ref}
        onClick={() => {
          addPlayerChoiceHandler(2);
        }}></div>
      <div
        className={`${classes.btn} ${classes["btn-4"]}`}
        ref={btn4Ref}
        onClick={() => {
          addPlayerChoiceHandler(3);
        }}></div>
    </>
  );
};

export default Board;
