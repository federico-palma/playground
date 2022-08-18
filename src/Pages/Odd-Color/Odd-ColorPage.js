import { useEffect, useState } from "react";
import Clock from "./Components/Clock";
import ColorBall from "./Components/Color-Ball";
import classes from "./Odd-Color.module.css";

const OddColorPage = () => {
  useEffect(() => {
    document.title = "PlayGround | Odd Color";
  }, []);

  const [isPlaying, setIsPlaying] = useState(false);
  const [timer, setTimer] = useState(5);
  const [turnNum, setTurnNum] = useState(1);
  // const [difficulty, setdifficulty] = useState(1);
  const [correctBallIndex, setCorrectBallIndex] = useState();
  const [wrongColor, setWrongColor] = useState(null);
  const [rightColor, setRightColor] = useState(null);

  const gameDesc =
    "Find the paired cards in the least number of turns possible.";
  const winDesc = `Congratulations!
                  You found all the pairs in ${turnNum} turns.`;

  // Func updates the ball colors state with a "wrong" color, and "correct" color.
  const setBallColors = () => {
    let letters = "0123456789ABCDEF";
    let wrongColor = "#";
    for (let i = 0; i < 6; i++) {
      if (i === 4) {
        wrongColor += "9";
      } else {
        wrongColor += letters[Math.floor(Math.random() * 16)];
      }
    }
    let correctColor =
      wrongColor.slice(0, wrongColor.length - 2) +
      "8" +
      wrongColor.slice(wrongColor.length - 1);

    setWrongColor(wrongColor);
    setRightColor(correctColor);
  };

  const handleCorrectChoice = () => {
    setBallColors();
    setTimer(5);
    setTurnNum((prevState) => prevState + 1);
    setCorrectBallIndex(Math.floor(Math.random() * (8 - 0 + 1)) + 0);
  };

  const handleWrongChoice = () => {
    setIsPlaying(false);
  };

  const handleTimer = () => {
    setTimer((prevState) => prevState - 1);
  };

  const handleStartGame = () => {
    setBallColors();
    setIsPlaying((prevState) => !prevState);
    setCorrectBallIndex(Math.floor(Math.random() * (8 - 0 + 1)) + 0);
  };

  const handleResetTimer = () => {
    setTimer(5);
  };

  return (
    <div className={classes.background}>
      <main className={classes["main-container"]}>
        {!isPlaying && (
          <Modal
            btnActive={true}
            handleStartGame={startGame}
            modalText={gameWon ? winDesc : gameDesc}
          ></Modal>
        )}
        <div>
          <Clock
            timer={timer}
            isPlaying={isPlaying}
            handleTimer={handleTimer}
          ></Clock>
          <div>turn: {turnNum}</div>
          <button onClick={handleStartGame}>Start/Stop timer</button>
          <button onClick={handleResetTimer}>Reset timer</button>
        </div>
        <div className={classes["color-balls-container"]}>
          {[...Array(9)].map((elem, index) => {
            if (index === correctBallIndex) {
              return (
                <ColorBall
                  key={index}
                  ballColor={rightColor}
                  handleChoice={handleCorrectChoice}
                ></ColorBall>
              );
            } else {
              return (
                <ColorBall
                  key={index}
                  ballColor={wrongColor}
                  handleChoice={handleWrongChoice}
                ></ColorBall>
              );
            }
          })}
        </div>
      </main>
    </div>
  );
};

export default OddColorPage;
