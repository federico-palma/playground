import { useEffect, useState } from "react";
import Modal from "../../Components/Modal";
import Clock from "./Components/Clock";
import ColorBall from "./Components/Color-Ball";
import classes from "./Odd-Color.module.css";

const OddColorPage = () => {
  useEffect(() => {
    document.title = "PlayGround | Odd Color";
  }, []);

  const [isPlaying, setIsPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [endTextTitle, setEndTextTitle] = useState("");
  const [timer, setTimer] = useState(3);
  const [turnNum, setTurnNum] = useState(1);
  const [difficulty, setdifficulty] = useState(0);
  const [correctBallIndex, setCorrectBallIndex] = useState();
  const [wrongColor, setWrongColor] = useState(null);
  const [rightColor, setRightColor] = useState(null);

  const gameDesc = `You have 3 seconds to find the odd colored ball.
                    The game will get increasingly difficult.`;
  const endDesc = `${endTextTitle}!
                  You found the odd colored ball ${turnNum} time${turnNum === 1 ? "" : "s"}!`;

  // Func updates the ball colors state with a "wrong" color, and "correct" color.
  const setBallColors = () => {
    let letters = "0123456789ABCDEF";
    let wrongColor = "#";
    for (let i = 0; i < 6; i++) {
      if (i === 4) {
        wrongColor += "A";
      } else {
        wrongColor += letters[Math.floor(Math.random() * 16)];
      }
    }
    let correctColor =
      wrongColor.slice(0, wrongColor.length - 2) +
      difficulty +
      wrongColor.slice(wrongColor.length - 1);

    setWrongColor(wrongColor);
    setRightColor(correctColor);
  };

  const handleTimer = () => {
    setTimer((prevState) => prevState - 1);
  };

  const handleCorrectChoice = () => {
    if (difficulty < 9) {
      setdifficulty((prevState) => prevState + 1);
    }
    setBallColors();
    setTimer(3);
    setTurnNum((prevState) => prevState + 1);
    setCorrectBallIndex(Math.floor(Math.random() * (8 - 0 + 1)) + 0);
  };

  const handleEndGame = (endText) => {
    setEndTextTitle(endText);
    setGameOver(true);
    setIsPlaying(false);
    setdifficulty(0);
  };

  const handleStartGame = () => {
    setGameOver(false);
    setTurnNum(0);
    setTimer(3);
    setBallColors();
    setIsPlaying(true);
    setCorrectBallIndex(Math.floor(Math.random() * (8 - 0 + 1)) + 0);
  };

  return (
    <div className={classes.background}>
      <main className={classes["main-container"]}>
        {!isPlaying && (
          <Modal
            btnActive={true}
            handleStartGame={handleStartGame}
            modalText={gameOver ? endDesc : gameDesc}
            backColor="#2ba198"
          ></Modal>
        )}
        <div>
          <Clock
            timer={timer}
            isPlaying={isPlaying}
            handleTimer={handleTimer}
            handleEndGame={handleEndGame}
          ></Clock>
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
                  handleChoice={() => {
                    handleEndGame("Wrong Ball");
                  }}
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
