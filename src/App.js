import "./App.css";
import { Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import HomePage from "./Pages/HomePage/HomePage";
import EtchASketchPage from "./Pages/Etch-a-SketchPage/Etch-a-SketchPage";
import Header from "./Layout/Header";
import MemoryMatchPage from "./Pages/Memory-MatchPage/Memory-MatchPage";
import OddColorPage from "./Pages/Odd-Color/Odd-ColorPage";
import SimonSaysPage from "./Pages/Simon-says/SimonSaysPage";

function App() {
  useEffect(() => {
    document.title = "PlayGround";
  }, []);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/Etch-a-Sketch" exact>
          <EtchASketchPage />
        </Route>
        <Route path="/Memory-Match" exact>
          <MemoryMatchPage />
        </Route>
        <Route path="/Odd-Color" exact>
          <OddColorPage />
        </Route>
        <Route path="/Simon-Says" exact>
          <SimonSaysPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
