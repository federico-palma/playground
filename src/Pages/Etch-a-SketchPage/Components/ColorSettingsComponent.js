import classes from "../Etch-a-SketchPage.module.css";

const ColorSettingsComponent = (props) => {

  return (
    <div className={classes["color-settings"]}>
      <input
        type="color"
        className={classes["colorPicker"]}
        onChange={(e) => {
          props.handleChangeColorMode("color", e.target.value);
          console.log(e.target.value)
        }}
      />
      <button className={`${classes["btn-mode"]} ${classes["btn-active"]}`}>
        Color
      </button>
      <button className={classes["btn-mode"]} id="btn-rainbow-mode">
        Rainbow
      </button>
      <button className={classes["btn-mode"]} id="btn-grayscale-mode">
        Grayscale
      </button>
      <button className={classes["btn-mode"]} id="btn-eraser-mode">
        Eraser
      </button>
    </div>
  );
};

export default ColorSettingsComponent;
