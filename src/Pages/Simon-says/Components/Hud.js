import classes from "../SimonSays.module.css";

const Hud = props => {
  return (
    <div className={classes.hud}>
      <h3>Round:</h3>
      <h3>{props.roundNumber}</h3>
    </div>
  );
};

export default Hud;
