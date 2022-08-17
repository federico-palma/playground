import { useEffect, useState } from "react";
import Clock from "./Components/Clock";
import ColorBall from "./Components/Color-Ball";
import classes from "./Odd-Color.module.css";

const OddColorPage = () => {
  useEffect(() => {
    document.title = "PlayGround | Odd Color";
  }, []);

  const [isPlaying, setIsPlaying] = useState(false);
  const [countdown, setCountdown] = useState(10);

  const handleTimer = () => {
    setCountdown((prevState) => prevState - 1);
  };

  const handleStartGame = () => {
    setIsPlaying((prevState) => !prevState);
  };

  const handleResetTimer = () => {
    setCountdown(10);
  };

  return (
    <div className={classes.background}>
      <main className={classes["main-container"]}>
        <div>
          <Clock
            countdown={countdown}
            isPlaying={isPlaying}
            handleTimer={handleTimer}
          ></Clock>
          <button onClick={handleStartGame}>Start/Stop timer</button>
          <button onClick={handleResetTimer}>Reset timer</button>
        </div>
        <div className={classes["color-balls-container"]}>
          {[...Array(9)].map((elem, index) => {
            if (index === 4) {
              return <ColorBall key={index} correctBall={true}></ColorBall>
            } else {
              return <ColorBall key={index} correctBall={false}></ColorBall>
            }
          })}
        </div>
      </main>
    </div>
  );
};

export default OddColorPage;
