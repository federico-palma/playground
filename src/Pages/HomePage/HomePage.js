import Card from "../../Components/Card";
import "./HomePage.css";
import { Link } from "react-router-dom";
import { useEffect } from "react"


const HomePage = () => {
  useEffect(() => {
    document.title = "PlayGround"
  }, [])

  return (
    <div className="homepage-container">
      <div className="card-list">
        <Link to="/Etch-a-Sketch">
          <Card title="Etch-a-Sketch" imagePath="" />
        </Link>
        <Link to="/Memory-Match">
          <Card title="Memory-Match" imagePath="" />
        </Link>

        <Card title="Tic-Tac-Toe" imagePath="" />
      </div>
    </div>
  );
};

export default HomePage;
