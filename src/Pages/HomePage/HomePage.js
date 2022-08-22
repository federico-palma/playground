import Card from "../../Components/Card";
import "./HomePage.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    document.title = "PlayGround";
  }, []);

  return (
    <div className="homepage-container">
      <div className="card-list">
        <Link to="/Etch-a-Sketch">
          <Card className="homepage-card" title="Etch-a-Sketch" imagePath="" />
        </Link>
        <Link to="/Memory-Match">
          <Card className="homepage-card" title="Memory Match" imagePath="" />
        </Link>
        <Link to="/Odd-Color">
          <Card className="homepage-card" title="Odd Color" imagePath="" />
        </Link>
        <Link>
          <Card className="homepage-card" title="Tic-Tac-Toe" imagePath="" />
        </Link>
        <Link>
          <Card
            className="homepage-card"
            title="Rock Paper Scissors"
            imagePath=""
          />
        </Link>
        <Link>
          <Card className="homepage-card" title="Simon Says" imagePath="" />
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
