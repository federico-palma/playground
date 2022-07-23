import ColorSettingsComponent from "./Components/ColorSettingsComponent";
import GridSettingsComponent from "./Components/GridSettingsComponent";
import ScreenComponent from "./Components/ScreenComponent";
import classes from "./Etch-a-SketchPage.module.css";

const EtchASketchPage = () => {
  return (
    <div className={classes.background}>
      <main className={classes.main}>
        <h1 id={classes.title} >Etch-a-Sketch</h1>
        <ColorSettingsComponent />

        <ScreenComponent />

        <GridSettingsComponent />
      </main>
    </div>
  );
};

export default EtchASketchPage;
