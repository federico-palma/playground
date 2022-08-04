import { useEffect, useState } from "react";
import MemoryCard from "./Components/MemoryCard";
import StartGameModal from "./Components/StartGameModal";
import classes from "./Memory-Match.module.css";

const MemoryMatchPage = () => {
  useEffect(() => {
    document.title = "PlayGround | Memory-Match";
  }, []);

  const [cardArrayState, setCardArrayState] = useState([
    { id: "1a", symbol: 1, isTurned: false, isMatched: false },
    { id: "1b", symbol: 1, isTurned: false, isMatched: false },
    { id: "2a", symbol: 2, isTurned: false, isMatched: false },
    { id: "2b", symbol: 2, isTurned: false, isMatched: false },
    { id: "3a", symbol: 3, isTurned: false, isMatched: false },
    { id: "3b", symbol: 3, isTurned: false, isMatched: false },
    { id: "4a", symbol: 4, isTurned: false, isMatched: false },
    { id: "4b", symbol: 4, isTurned: false, isMatched: false },
    { id: "5a", symbol: 5, isTurned: false, isMatched: false },
    { id: "5b", symbol: 5, isTurned: false, isMatched: false },
    { id: "6a", symbol: 6, isTurned: false, isMatched: false },
    { id: "6b", symbol: 6, isTurned: false, isMatched: false },
    { id: "7a", symbol: 7, isTurned: false, isMatched: false },
    { id: "7b", symbol: 7, isTurned: false, isMatched: false },
    { id: "8a", symbol: 8, isTurned: false, isMatched: false },
    { id: "8b", symbol: 8, isTurned: false, isMatched: false },
  ]);

  const [isPlaying, setIsPlaying] = useState(false);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const handleTurnCard = (card) => {
    if (!card.isMatched) {
      card.isTurned = true;
      choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    }
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.symbol === choiceTwo.symbol) {
        setCardArrayState((preVal) => {
          return preVal.map((card) => {
            if (card.symbol === choiceOne.symbol) {
              return { ...card, isMatched: true };
            } else {
              return card;
            }
          });
        });
        setChoiceOne(null);
        setChoiceTwo(null);
      } else {
        setTimeout(() => {
          setChoiceOne(null);
          setChoiceTwo(null);
        }, 1500);
      }
    }
  }, [choiceOne, choiceTwo]);

  const handleIsPlaying = () => {
    setIsPlaying(true);
    startGame();
  };

  const turnAllCards = () => {
    setCardArrayState((preVal) =>
      preVal.map((card) => {
        return { ...card, isTurned: true };
      })
    );
  };

  const shuffleCards = () => {
    setCardArrayState((preVal) => {
      return preVal.sort((a, b) => {
        return 0.5 - Math.random();
      });
    });
  };

  const startGame = () => {
    turnAllCards();
    shuffleCards();
  };

  return (
    <div className={classes.background}>
      <main className={classes["card-table"]}>
        {!isPlaying && <StartGameModal handleIsPlaying={handleIsPlaying} />}
        {cardArrayState.map((card) => {
          return (
            <MemoryCard
              card={card}
              key={card.id}
              handleTurnCard={handleTurnCard}
              showCard={
                card === choiceOne ||
                card === choiceTwo ||
                card.isMatched === true ||
                card.isTurned === false
              }
            />
          );
        })}
      </main>
    </div>
  );
};

export default MemoryMatchPage;
