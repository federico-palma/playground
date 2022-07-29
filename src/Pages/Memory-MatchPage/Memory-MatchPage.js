import { useEffect, useState } from "react";
import MemoryCard from "./Components/MemoryCard";
import classes from "./Memory-Match.module.css";

const MemoryMatchPage = () => {
  useEffect(() => {
    document.title = "PlayGround | Memory-Match";
  }, []);

  const [cardArrayState, setCardArrayState] = useState([
    { id: "1a", symbol: 1, isTurned: false },
    { id: "1b", symbol: 1, isTurned: false },
    { id: "2a", symbol: 2, isTurned: false },
    { id: "2b", symbol: 2, isTurned: false },
    { id: "3a", symbol: 3, isTurned: false },
    { id: "3b", symbol: 3, isTurned: false },
    { id: "4a", symbol: 4, isTurned: false },
    { id: "4b", symbol: 4, isTurned: false },
    { id: "5a", symbol: 5, isTurned: false },
    { id: "5b", symbol: 5, isTurned: false },
    { id: "6a", symbol: 6, isTurned: false },
    { id: "6b", symbol: 6, isTurned: false },
    { id: "7a", symbol: 7, isTurned: false },
    { id: "7b", symbol: 7, isTurned: false },
    { id: "8a", symbol: 8, isTurned: false },
    { id: "8b", symbol: 8, isTurned: false },
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
              key={elem.id}
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
