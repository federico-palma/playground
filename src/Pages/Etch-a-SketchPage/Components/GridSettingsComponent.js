import classes from "../Etch-a-SketchPage.module.css";

const GridSettingsComponent = () => {
  return (
    <div className={classes["grid-settings"]}>
      <div className={classes["slider-div"]}>
        <label htmlFor="grid-def-slider">Set Grid Definition:</label>
        <input
          name="grid-def-slider"
          type="range"
          className={classes["grid-def-slider"]}
          min="16"
          max="100"
        />
      </div>
      <button className={classes["btn-clear"]}>Clear Board</button>
    </div>
  );
};

export default GridSettingsComponent;
