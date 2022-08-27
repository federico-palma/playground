import { useState, useCallback, useEffect } from "react";
import Board from "./Components/Board";
import classes from "./SimonSays.module.css";

const SimonSaysPage = () => {
  useEffect(() => {
    document.title = "PlayGround | Simon Says";
  }, []);

  const [isPlaying, setIsPlaying] = useState(false);
  const [btnsRefs, setBtnsRefs] = useState([]);
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  const [sequenceArray, setSequenceArray] = useState([]);
  const [playerChoiceArray, setPlayerChoiceArray] = useState([]);
  const [playerTurn, setPlayerTurn] = useState(false);

  const setRefsHandler = useCallback((a, b, c, d) => {
    setBtnsRefs([a, b, c, d]);
  }, []);

  const getRandomNum = () => {
    return Math.floor(Math.random() * 3);
  };

  const newRound = useCallback(() => {
    console.log("New Round");
    setPlayerTurn(false);
    setPlayerChoiceArray([]);
    setSequenceArray(prevState => [...prevState, getRandomNum()]);
  }, []);

  // Sequence is played with useEffect whenever the sequenceArray changes.
  const playSequence = useCallback(() => {
    console.log(sequenceArray);
    setIsBtnDisabled(true);
    let index = 0;
    const clearFilter = () => {
      for (let i = 0; i < btnsRefs.length; i++) {
        btnsRefs[i].current.removeAttribute("Style");
      }
    };

    const sequenceInterval = setInterval(() => {
      if (index === sequenceArray.length) {
        console.log("finished sequence");
        clearFilter();
        setIsBtnDisabled(false);
        setPlayerTurn(true);
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

  // Check player choices with the sequence array.
  const addPlayerChoiceHandler = btnIndex => {
    if (isPlaying && playerTurn) {
      setPlayerChoiceArray(prevState => [...prevState, btnIndex]);
    }
  };

  const checkMatchingArrays = useCallback(() => {
    if (playerChoiceArray.every((value, index) => value === sequenceArray[index])) {
      return true;
    }
    return false;
  }, [playerChoiceArray, sequenceArray]);

  useEffect(() => {
    if (playerChoiceArray.length > 0) {
      console.log("Player choices: " + playerChoiceArray);
      if (playerChoiceArray.length === sequenceArray.length && checkMatchingArrays()) {
        console.log("Matching Arrays!");
        newRound();
      } else if (checkMatchingArrays()) {
        console.log("You're doing good!");
      } else {
        console.log("LOOSER");
      }
    }
  }, [playerChoiceArray, sequenceArray, checkMatchingArrays, newRound]);

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
          setRefsHandler={setRefsHandler}
          isBtnDisable={isBtnDisabled}></Board>
      </main>
    </div>
  );
};

export default SimonSaysPage;
