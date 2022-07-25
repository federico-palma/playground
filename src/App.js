import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import EtchASketchPage from "./Pages/Etch-a-SketchPage/Etch-a-SketchPage";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "PlayGround"
  }, [])

  return (
    <div className="App">
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/Etch-a-Sketch' exact>
          <EtchASketchPage />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
