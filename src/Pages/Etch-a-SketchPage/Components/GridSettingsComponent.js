import classes from "../Etch-a-SketchPage.module.css";

const GridSettingsComponent = (props) => {
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
          onChange={(e) => props.handleChangeScreenDefinition(e.target.value)}
        />
      </div>
      <button className={classes["btn-clear"]} onClick={props.handleClearBoard}>Clear Board</button>
    </div>
  );
};

export default GridSettingsComponent;
