import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import EtchASketchPage from "./Pages/Etch-a-SketchPage/Etch-a-SketchPage";
import { useEffect } from "react";
import Header from "./Layout/Header";
import MemoryMatchPage from "./Pages/Memory-MatchPage/Memory-MatchPage";

function App() {
  useEffect(() => {
    document.title = "PlayGround"
  }, [])

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/Etch-a-Sketch' exact>
          <EtchASketchPage />
        </Route>
        <Route path='/Memory-Match' exact>
          <MemoryMatchPage />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
