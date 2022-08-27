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
    if (playerChoiceArray === sequenceArray.slice(0, playerChoiceArray.length - 1)) {
      return true;
    }
    return false;
  }, [playerChoiceArray, sequenceArray]);

  useEffect(() => {
    console.log("Player choices: " + playerChoiceArray);
    if (playerChoiceArray.length > 0) {
      if (checkMatchingArrays()) {
        console.log("Matching Arrays!");
      }
    }
  }, [playerChoiceArray, checkMatchingArrays]);

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
