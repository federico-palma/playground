import { useEffect, useState } from "react";
import MemoryCard from "./Components/MemoryCard";
import classes from "./Memory-Match.module.css";

const MemoryMatchPage = () => {
  useEffect(() => {
    document.title = "PlayGround | Memory-Match";
  }, []);
  
  const [cardArrayState, setCardArrayState] = useState([
    { symbol: 1, isTurned: false },
    { symbol: 1, isTurned: false },
    { symbol: 2, isTurned: false },
    { symbol: 2, isTurned: false },
    { symbol: 3, isTurned: false },
    { symbol: 3, isTurned: false },
    { symbol: 4, isTurned: false },
    { symbol: 4, isTurned: false },
    { symbol: 5, isTurned: false },
    { symbol: 5, isTurned: false },
    { symbol: 6, isTurned: false },
    { symbol: 6, isTurned: false },
    { symbol: 7, isTurned: false },
    { symbol: 7, isTurned: false },
    { symbol: 8, isTurned: false },
    { symbol: 8, isTurned: false },
  ]);

  //   const [isPlaying, setIsPlaying] = useState(false);

  const handleTurnCard = (index) => {
    let tempArray = cardArrayState;
    tempArray[index].isTurned = !tempArray[index].isTurned;
    setCardArrayState([...tempArray]);
  };

  return (
    <div className={classes.background}>
      <main className={classes["card-table"]}>
        {cardArrayState.map((elem, i) => {
          return (
            <MemoryCard
              symbol={elem.symbol}
              isTurned={elem.isTurned}
              key={i}
              index={i}
              handleTurnCard={handleTurnCard}
            />
          );
        })}
      </main>
    </div>
  );
};

export default MemoryMatchPage;
