import { useState, useCallback, useEffect } from "react";
import Board from "./Components/Board";
import Modal from "../../Components/Modal";
import Hud from "./Components/Hud";
import classes from "./SimonSays.module.css";

const SimonSaysPage = () => {
  useEffect(() => {
    document.title = "PlayGround | Simon Says";
  }, []);

  const [isPlaying, setIsPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [btnsRefs, setBtnsRefs] = useState([]);
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  const [sequenceArray, setSequenceArray] = useState([]);
  const [playerChoiceArray, setPlayerChoiceArray] = useState([]);
  const [playerTurn, setPlayerTurn] = useState(false);

  const gameDesc = `Follow the sequence and try to repeat it.`;
  const endDesc = `Wrong Answer!
                  You completed ${sequenceArray.length - 1} round${
    sequenceArray.length !== 2 ? "s" : ""
  }!`;

  const setRefsHandler = useCallback((a, b, c, d) => {
    setBtnsRefs([a, b, c, d]);
  }, []);

  const getRandomNum = () => {
    return Math.floor(Math.random() * 4);
  };

  const newRound = useCallback(() => {
    setPlayerTurn(false);
    setPlayerChoiceArray([]);
    setSequenceArray(prevState => [...prevState, getRandomNum()]);
  }, []);

  // Sequence is played with useEffect whenever the sequenceArray changes.
  const playSequence = useCallback(() => {
    setIsBtnDisabled(true);
    let index = 0;
    const clearFilter = () => {
      for (let i = 0; i < btnsRefs.length; i++) {
        btnsRefs[i].current.removeAttribute("Style");
      }
    };

    const sequenceInterval = setInterval(() => {
      if (index === sequenceArray.length) {
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
    }, 1000);
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
      if (playerChoiceArray.length === sequenceArray.length && checkMatchingArrays()) {
        newRound();
      } else if (checkMatchingArrays()) {
      } else {
        setGameOver(true);
        setIsPlaying(false);
      }
    }
  }, [playerChoiceArray, sequenceArray, checkMatchingArrays, newRound]);

  const handleStartGame = () => {
    setSequenceArray([]);
    setGameOver(false);
    setIsPlaying(true);
    newRound();
  };

  return (
    <div className={classes.background}>
      {!isPlaying && (
        <Modal
          btnActive={true}
          handleStartGame={handleStartGame}
          modalText={gameOver ? endDesc : gameDesc}
          backColor="#57a759"></Modal>
      )}
      <main className={classes.main}>
        <Hud roundNumber={sequenceArray.length}></Hud>
        <Board
          addPlayerChoiceHandler={addPlayerChoiceHandler}
          setRefsHandler={setRefsHandler}
          isBtnDisable={isBtnDisabled}></Board>
      </main>
    </div>
  );
};

export default SimonSaysPage;
