import Card from "../../Components/Card";
import "./HomePage.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="card-list">
        <Link to="/Etch-a-Sketch">
          <Card title="Etch-a-Sketch" imagePath="" />
        </Link>
        <Card title="Tic-Tac-Toe" imagePath="" />
        <Card title="Calculator" imagePath="" />
      </div>
    </div>
  );
};

export default HomePage;
