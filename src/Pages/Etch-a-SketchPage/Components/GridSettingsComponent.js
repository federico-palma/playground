import classes from "../Etch-a-SketchPage.module.css";

const GridSettingsComponent = (props) => {
  return (
    <div className={classes["grid-settings"]}>
      <div className={classes["slider-div"]}>
        <label htmlFor="grid-def-slider">Set Grid Definition:</label>
        <input
          className={classes["grid-def-slider"]}
          name="grid-def-slider"
          type="range"
          min="16"
          max="100"
          disabled={props.triggerClearBoard ? true : false}
          onMouseUp={(e) => props.handleChangeScreenDefinition(e.target.value)}
        />
      </div>
      <button
        className={classes["btn-clear"]}
        onClick={props.handleClearBoard}
        disabled={props.triggerClearBoard ? true : false}
      >
        Clear Board
      </button>
    </div>
  );
};

export default GridSettingsComponent;
