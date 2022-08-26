import { useState, useCallback } from "react";
import Board from "./Components/Board";
import classes from "./SimonSays.module.css";

const SimonSaysPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [btnsRefs, setBtnsRefs] = useState([]);
  const [disableBtns, setDisableBtns] = useState(false);
  const [sequenceArray, setSequenceArray] = useState([]);
  const [playerChoiceArray, setPlayerChoiceArray] = useState([]);
  const [playerTurn, setPlayerTurn] = useState(false);

  const setRefsHandler = useCallback((a, b, c, d) => {
    setBtnsRefs([a, b, c, d]);
  }, []);

  const getRandomNum = () => {
    return Math.floor(Math.random() * 3);
  };

  const playSequence = () => {
    console.log("Starting seq");
    let index = 0;
    const clearFilter = currentIndex => {
      btnsRefs[currentIndex - 1].current.style.filter = "contrast(100%)";
    };

    const sequenceInterval = setInterval(() => {
      if (index === sequenceArray.length - 1) {
        clearInterval(sequenceInterval);
      }

      btnsRefs[sequenceArray[index]].current.style.filter = "contrast(400%)";
      
      setTimeout(() => {
        clearFilter(index);
      }, 500);

      index += 1;
    }, 1500);
  };

  const newRound = () => {
    console.log("New Round");
    setPlayerTurn(false);
    setPlayerChoiceArray([]);
    setSequenceArray(prevState => [...(prevState + getRandomNum())]);
    playSequence();
  };

  const addPlayerChoiceHandler = btnIndex => {
    if (isPlaying && playerTurn) {
      setPlayerChoiceArray(prevState => [...(prevState + btnIndex)]);
    }
  };

  const startGame = () => {
    console.log("Starting game");
    setIsPlaying(true);
    setSequenceArray([]);
    newRound();
  };

  return (
    <div className={classes.background}>
      <button onClick={startGame}>Start Game</button>
      <main className={classes.board}>
        <Board
          addPlayerChoiceHandler={addPlayerChoiceHandler}
          setRefsHandler={setRefsHandler}></Board>
      </main>
    </div>
  );
};

export default SimonSaysPage;
