import { useEffect } from "react";
import MemoryCard from "./Components/MemoryCard";
import classes from "./Memory-Match.module.css";

const cardArray = [
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
  { symbol: 9, isTurned: false },
  { symbol: 9, isTurned: false },
  { symbol: 10, isTurned: false },
  { symbol: 10, isTurned: false },
];

const MemoryMatchPage = () => {
  useEffect(() => {
    document.title = "PlayGround | Memory-Match";
  }, []);
  return (
    <div className={classes.background}>
      <main className={classes["card-table"]}>
        {cardArray.map((elem, i) => {
          return <MemoryCard symbol={elem.symbol} isTurned={elem.isTurned} key={i}/>;
        })}
      </main>
    </div>
  );
};

export default MemoryMatchPage;
