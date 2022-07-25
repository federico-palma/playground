import classes from "../Etch-a-SketchPage.module.css";

const ColorSettingsComponent = (props) => {
  return (
    <div className={classes["color-settings"]}>
      <input
        type="color"
        className={classes["colorPicker"]}
        onChange={(e) => {
          props.handleChangeColorMode("color", e.target.value);
        }}
      />
      <button
        className={`${classes["btn-mode"]} ${props.currentColorMode === "color" ? classes["btn-active"] : ''}`}
        onClick={() => {
          props.handleChangeColorMode("color");
        }}
      >
        Color
      </button>
      <button
        className={`${classes["btn-mode"]} ${props.currentColorMode === "rainbow" ? classes["btn-active"] : ''}`}
        id="btn-rainbow-mode"
        onClick={() => {
          props.handleChangeColorMode("rainbow");
        }}
      >
        Rainbow
      </button>
      <button
        className={`${classes["btn-mode"]} ${props.currentColorMode === "greyscale" ? classes["btn-active"] : ''}`}
        id="btn-grayscale-mode"
        onClick={() => {
          props.handleChangeColorMode("greyscale");
        }}
      >
        Greyscale
      </button>
      <button
        className={`${classes["btn-mode"]} ${props.currentColorMode === "eraser" ? classes["btn-active"] : ''}`}
        id="btn-eraser-mode"
        onClick={() => {
          props.handleChangeColorMode("eraser");
        }}
      >
        Eraser
      </button>
    </div>
  );
};

export default ColorSettingsComponent;
