import classes from "../Memory-Match.module.css";

const StartGameModal = (props) => {
  return (
    <div className={classes["start-game-modal"]}>
      <button
        className={classes["start-game-btn"]}
        onClick={props.handleIsPlaying}
      >
        Start Game
      </button>
    </div>
  );
};

export default StartGameModal;
