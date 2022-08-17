import classes from "../Odd-Color.module.css";

const ColorBall = (props) => {
  return (
    <div
      className={classes["color-ball"]}
      style={{ backgroundColor: props.correctBall ? "darkBlue" : "blue" }}
    ></div>
  );
};

export default ColorBall;
