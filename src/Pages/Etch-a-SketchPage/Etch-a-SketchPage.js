import { useState } from "react";
import ColorSettingsComponent from "./Components/ColorSettingsComponent";
import GridSettingsComponent from "./Components/GridSettingsComponent";
import ScreenComponent from "./Components/ScreenComponent";
import classes from "./Etch-a-SketchPage.module.css";

const EtchASketchPage = () => {
  const [currentColorMode, setCurrentColorMode] = useState(["color", "#000000"]);

  const handleChangeColorMode = (newColorMode, newColor = currentColorMode[1]) => {
    setCurrentColorMode([newColorMode, newColor])
  }

  return (
    <div className={classes.background}>
      <main className={classes.main}>
        <h1 id={classes.title}>Etch-a-Sketch</h1>
        <ColorSettingsComponent currentColorMode={ currentColorMode[0] } handleChangeColorMode={handleChangeColorMode}/>

        <ScreenComponent currentColorMode={ currentColorMode[0] } currentColor={ currentColorMode[1] } />

        <GridSettingsComponent />
      </main>
    </div>
  );
};

export default EtchASketchPage;
