import classes from "../Memory-Match.module.css";

const MemoryCard = (props) => {
  return (
    <div className={classes["memory-card"]}>
      <h1>{ props.symbol }</h1>
    </div>
  );
};

export default MemoryCard;
