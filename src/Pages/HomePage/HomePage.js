import Card from "../../Components/Card";
import classes from "./HomePage.module.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    document.title = "PlayGround";
  }, []);

  return (
    <div className={classes["homepage-container"]}>
      <div className={classes["card-list"]}>
        <Link to="/Etch-a-Sketch">
          <Card
            className={classes["homepage-card"]}
            title="Etch-a-Sketch"
            imagePath=""
          />
        </Link>
        <Link to="/Memory-Match">
          <Card
            className={classes["homepage-card"]}
            title="Memory Match"
            imagePath=""
          />
        </Link>
        <Link to="/Odd-Color">
          <Card
            className={classes["homepage-card"]}
            title="Odd Color"
            imagePath=""
          />
        </Link>
        <Link>
          <Card
            className={classes["homepage-card"]}
            title="Tic-Tac-Toe"
            imagePath=""
          />
        </Link>
        <Link to="/Simon-Says">
          <Card
            className={classes["homepage-card"]}
            title="Simon Says"
            imagePath=""
          />
        </Link>
        <Link>
          <Card
            className={classes["homepage-card"]}
            title="Rock Paper Scissors"
            imagePath=""
          />
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
