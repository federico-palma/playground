import classes from "../Etch-a-SketchPage.module.css";

const ScreenComponent = () => {
  return (
    <div className={classes.screen}>
      <div id="grid-container" className={classes["grid-container"]}></div>
    </div>
  );
};

export default ScreenComponent;
