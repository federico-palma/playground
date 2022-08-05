import classes from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div className={classes.modal}>
      {props.modalText && (
        <h3 className={classes["game-text"]}>{props.modalText}</h3>
      )}
      {props.btnActive && (
        <button
          className={classes["modal-btn"]}
          onClick={props.handleStartGame}
        >
          Start Game
        </button>
      )}
    </div>
  );
};

export default Modal;
