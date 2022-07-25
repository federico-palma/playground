import { useState } from "react";
import ColorSettingsComponent from "./Components/ColorSettingsComponent";
import GridSettingsComponent from "./Components/GridSettingsComponent";
import ScreenComponent from "./Components/ScreenComponent";
import classes from "./Etch-a-SketchPage.module.css";

const EtchASketchPage = () => {
  const [screenDefinition, setScreenDefinition] = useState(16);
  const [currentColorMode, setCurrentColorMode] = useState([
    "color",
    "#000000",
  ]);
  const [triggerClearBoard, setTriggerClearBoard] = useState(false);

  const handleChangeColorMode = (
    newColorMode,
    newColor = currentColorMode[1]
  ) => {
    setCurrentColorMode([newColorMode, newColor]);
  };

  const handleClearBoard = () => {
    setTriggerClearBoard(true);
    setTimeout(() => {
      setTriggerClearBoard(false)
    }, 1400)
  };

  const handleChangeScreenDefinition = (newDef) => {
    handleClearBoard();
    setTimeout(() => {
      setScreenDefinition(newDef);
    }, 1400)
  };

  return (
    <div className={classes.background}>
      <main className={`${classes.main} ${triggerClearBoard && classes['shake-anim']}`}>
        <h1 id={classes.title}>Etch-a-Sketch</h1>
        <ColorSettingsComponent
          currentColorMode={currentColorMode[0]}
          handleChangeColorMode={handleChangeColorMode}
        />

        <ScreenComponent
          currentColorMode={currentColorMode[0]}
          currentColor={currentColorMode[1]}
          triggerClearBoard={triggerClearBoard}
          screenDefinition={screenDefinition}
        />

        <GridSettingsComponent
          handleClearBoard={handleClearBoard}
          handleChangeScreenDefinition={handleChangeScreenDefinition}
          triggerClearBoard={triggerClearBoard}
        />
      </main>
    </div>
  );
};

export default EtchASketchPage;
