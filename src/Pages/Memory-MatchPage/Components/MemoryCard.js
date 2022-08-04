import classes from "../Memory-Match.module.css";

const MemoryCard = ({ card, handleTurnCard, showCard }) => {
  return (
    <div
      className={`${classes["memory-card"]} ${
        !showCard ? classes.turned : ""
      }`}
      onClick={() => handleTurnCard(card)}
    >
      <h1 className={!showCard ? classes.hidden : ""}>{card.symbol}</h1>
    </div>
  );
};

export default MemoryCard;
