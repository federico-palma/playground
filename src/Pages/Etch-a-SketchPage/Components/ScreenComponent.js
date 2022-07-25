import { useState } from "react";
import classes from "../Etch-a-SketchPage.module.css";

const ScreenComponent = (props) => {
  const [screenDefinition, setScreenDefinition] = useState(16);

  const changeColor = (targetElement) => {
    targetElement.target.style = `background-color: ${props.currentColor}`;
  };

  return (
    <div className={classes.screen}>
      <div
        className={classes["grid-container"]}
        style={{
          gridTemplateRows: `repeat(${screenDefinition}, 1fr)`,
          gridTemplateColumns: `repeat(${screenDefinition}, 1fr)`,
        }}
      >
        {[...Array(screenDefinition * screenDefinition)].map((n, i) => {
          return (
            <div
              className={classes["grid-cell"]}
              onMouseEnter={(e) => {
                changeColor(e);
              }}
              key={i}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default ScreenComponent;
