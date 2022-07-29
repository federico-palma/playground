import classes from "../Memory-Match.module.css"

const StartGameModal = () => {
    return (
        <div className={classes["start-game-modal"]}>
            <button className={classes["start-game-btn"]}>Start Game</button>
        </div>
    );
}
 
export default StartGameModal;