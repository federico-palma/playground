import classes from "../Memory-Match.module.css";

const MemoryCard = (props) => {
  return (
    <div className={classes["memory-card"]} onClick={() => props.handleTurnCard(props.index)}>
      <h1 className={props.isTurned ? classes.hidden : ''}>{ props.symbol }</h1>
    </div>
  );
};

export default MemoryCard;
