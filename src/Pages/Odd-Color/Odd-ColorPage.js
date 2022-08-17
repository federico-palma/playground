import { useEffect, useState } from "react";
import Clock from "./Components/Clock";
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
        </div>
        <div className={classes["color-balls"]}>
          <button onClick={handleStartGame}>Start/Stop timer</button>
          <button onClick={handleResetTimer}>Reset timer</button>
        </div>
      </main>
    </div>
  );
};

export default OddColorPage;
