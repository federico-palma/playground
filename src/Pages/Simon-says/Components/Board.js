import { useRef, useEffect } from "react";
import classes from "../SimonSays.module.css";

const Board = ({ addPlayerChoiceHandler, setRefsHandler, isBtnDisable }) => {
  const btn1Ref = useRef();
  const btn2Ref = useRef();
  const btn3Ref = useRef();
  const btn4Ref = useRef();

  useEffect(() => {
    setRefsHandler(btn1Ref, btn2Ref, btn3Ref, btn4Ref);
  }, [setRefsHandler, btn1Ref, btn2Ref, btn3Ref, btn4Ref]);

  return (
    <div className={classes.board}>
      <button
        className={`${classes.btn} ${classes["btn-1"]}`}
        ref={btn1Ref}
        onClick={() => {
          addPlayerChoiceHandler(0);
        }}
        disabled={isBtnDisable}></button>
      <button
        className={`${classes.btn} ${classes["btn-2"]}`}
        ref={btn2Ref}
        onClick={() => {
          addPlayerChoiceHandler(1);
        }}
        disabled={isBtnDisable}></button>
      <button
        className={`${classes.btn} ${classes["btn-3"]}`}
        ref={btn3Ref}
        onClick={() => {
          addPlayerChoiceHandler(2);
        }}
        disabled={isBtnDisable}></button>
      <button
        className={`${classes.btn} ${classes["btn-4"]}`}
        ref={btn4Ref}
        onClick={() => {
          addPlayerChoiceHandler(3);
        }}
        disabled={isBtnDisable}></button>
    </div>
  );
};

export default Board;
