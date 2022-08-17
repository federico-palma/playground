import classes from "../Odd-Color.module.css";

const Clock = (props) => {
  return <div className={classes.clock}>{props.countdown}</div>;
};

export default Clock;
