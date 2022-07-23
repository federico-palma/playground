import ColorSettingsComponent from "./Components/ColorSettingsComponent";
import GridSettingsComponent from "./Components/GridSettingsComponent";
import ScreenComponent from "./Components/ScreenComponent";
import classes from "./Etch-a-SketchPage.module.css";

const EtchASketchPage = () => {
  return (
    <main className={classes.main}>
      <h1 id="title">Etch-a-Sketch</h1>
      <ColorSettingsComponent />

      <ScreenComponent />
      
      <GridSettingsComponent />
    </main>
  );
};

export default EtchASketchPage;
