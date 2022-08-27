import { useEffect } from "react";
import { useState, useCallback } from "react";
import Board from "./Components/Board";
import classes from "./SimonSays.module.css";

const SimonSaysPage = () => {
  useEffect(() => {
    document.title = "PlayGround | Simon Says";
  }, []);

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

  // Sequence is payed with useEffect whenever the sequenceArray changes.
  const playSequence = useCallback(() => {
    console.log("Starting seq");
    console.log(sequenceArray);
    setDisableBtns(true);
    let index = 0;
    const clearFilter = () => {
      for (let i = 0; i < btnsRefs.length; i++) {
        btnsRefs[i].current.style.filter = "contrast(100%)";
      }
    };

    const sequenceInterval = setInterval(() => {
      if (index === sequenceArray.length) {
        clearFilter();
        clearInterval(sequenceInterval);
        return;
      }
      btnsRefs[sequenceArray[index]].current.style.filter = "contrast(400%)";

      setTimeout(() => {
        clearFilter();
      }, 500);
      index = index + 1;
    }, 1500);
  }, [btnsRefs, sequenceArray]);

  useEffect(() => {
    if (sequenceArray.length > 0) {
      playSequence();
    }
  }, [sequenceArray, playSequence]);

  const newRound = () => {
    console.log("New Round");
    setPlayerTurn(false);
    setPlayerChoiceArray([]);
    setSequenceArray(prevState => {
      let newNumber = getRandomNum();
      console.log("new number is: " + newNumber);
      return [...prevState, newNumber];
    });
  };

  const addPlayerChoiceHandler = btnIndex => {
    if (isPlaying && playerTurn) {
      setPlayerChoiceArray(prevState => [...prevState, btnIndex]);
    }
  };

  const startGame = () => {
    setIsPlaying(true);
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
