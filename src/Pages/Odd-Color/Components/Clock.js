import { useEffect } from "react";
import classes from "../Odd-Color.module.css";

const Clock = (props) => {
  const { handleTimer } = props;

  useEffect(() => {
    let countdownTimeout;
    if (props.isPlaying && props.timer > 0) {
      countdownTimeout = setTimeout(() => {
        handleTimer();
      }, 1000);
    }
    return () => clearTimeout(countdownTimeout);
  }, [props.timer, props.isPlaying, handleTimer]);

  return <div className={classes.clock}>{props.timer}</div>;
};

export default Clock;
