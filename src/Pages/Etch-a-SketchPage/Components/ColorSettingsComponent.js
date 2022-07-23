import classes from "../Etch-a-SketchPage.module.css";

const ColorSettingsComponent = (props) => {
  return (
    <div class={classes["color-settings"]}>
      <input type="color" id="colorPicker" class={classes["colorPicker"]} value="#000000" />
      <button class={classes["btn-mode btn-active"]} id="btn-color-mode">
        Color
      </button>
      <button class={classes["btn-mode"]} id="btn-rainbow-mode">
        Rainbow
      </button>
      <button class={classes["btn-mode"]} id="btn-grayscale-mode">
        Grayscale
      </button>
      <button class={classes["btn-mode"]} id="btn-eraser-mode">
        Eraser
      </button>
    </div>
  );
};

export default ColorSettingsComponent;
