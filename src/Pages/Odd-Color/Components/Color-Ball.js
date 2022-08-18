import classes from "../Odd-Color.module.css";

const ColorBall = (props) => {
  return (
    <div
      onClick={props.handleChoice}
      className={classes["color-ball"]}
      style={{ backgroundColor: props.ballColor }}
    ></div>
  );
};

export default ColorBall;
