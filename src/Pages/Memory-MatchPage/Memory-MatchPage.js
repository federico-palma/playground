import { useEffect, useState } from "react";
import Modal from "../../Components/Modal";
import MemoryCard from "./Components/MemoryCard";
import classes from "./Memory-Match.module.css";

const MemoryMatchPage = () => {
  useEffect(() => {
    document.title = "PlayGround | Memory-Match";
  }, []);

  const [cardArrayState, setCardArrayState] = useState([
    { id: "1a", symbol: "\u03A9", isTurned: false, isMatched: false },
    { id: "1b", symbol: "\u03A9", isTurned: false, isMatched: false },
    { id: "2a", symbol: "\u262F", isTurned: false, isMatched: false },
    { id: "2b", symbol: "\u262F", isTurned: false, isMatched: false },
    { id: "3a", symbol: "\u25B2", isTurned: false, isMatched: false },
    { id: "3b", symbol: "\u25B2", isTurned: false, isMatched: false },
    { id: "4a", symbol: "\u2663", isTurned: false, isMatched: false },
    { id: "4b", symbol: "\u2663", isTurned: false, isMatched: false },
    { id: "5a", symbol: "\u2605", isTurned: false, isMatched: false },
    { id: "5b", symbol: "\u2605", isTurned: false, isMatched: false },
    { id: "6a", symbol: "\u058E", isTurned: false, isMatched: false },
    { id: "6b", symbol: "\u058E", isTurned: false, isMatched: false },
    { id: "7a", symbol: "\u2388", isTurned: false, isMatched: false },
    { id: "7b", symbol: "\u2388", isTurned: false, isMatched: false },
    { id: "8a", symbol: "\u23FE", isTurned: false, isMatched: false },
    { id: "8b", symbol: "\u23FE", isTurned: false, isMatched: false },
  ]);

  const [isPlaying, setIsPlaying] = useState(false);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disableCards, setDisableCards] = useState(false);
  const [turnNum, setTurnNum] = useState(0);
  const [gameWon, setGameWon] = useState(false)

  const gameDesc = "Find the paired cards in the least number of turns possible."
  const winDesc = `Congratulations! You found all the pairs in ${turnNum} turns.`

  const handleTurnCard = (card) => {
    if (!card.isMatched && !disableCards) {
      card.isTurned = true;
      choiceOne && card !== choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    }
  };

  useEffect(() => {
    let gameIsWon = !cardArrayState.some(elem => elem.isMatched === false)
    if (gameIsWon) {
      setIsPlaying(false)
      setGameWon(true)
    }
  }, [cardArrayState])

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisableCards(true);
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
        resetTurn();
        // checkGameIsWon();
      } else {
        setTimeout(() => resetTurn(), 1500);
      }
    }
  }, [choiceOne, choiceTwo]);

  const turnAllCards = () => {
    setCardArrayState((preVal) =>
      preVal.map((card) => {
        return { ...card, isTurned: true, isMatched: false };
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

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setDisableCards(false);
    setTurnNum((preVal) => preVal + 1);
  };

  const startGame = () => {
    setIsPlaying(true);
    setGameWon(false)
    setTurnNum(0);
    turnAllCards();
    shuffleCards();
  };

  return (
    <div className={classes.background}>
      {!isPlaying && (
        <Modal btnActive={true} handleStartGame={startGame} modalText={gameWon ? winDesc : gameDesc}></Modal>
      )}
      <h2 className={classes["turn-counter"]}>Turn number: {turnNum}</h2>
      <main className={classes["card-table"]}>
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
