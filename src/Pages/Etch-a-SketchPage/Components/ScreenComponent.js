import { useState } from "react";
import classes from "../Etch-a-SketchPage.module.css";

const ScreenComponent = () => {
  const [screenDefinition, setScreenDefinition] = useState(16);

  return (
    <div className={classes.screen}>
      <div className={classes["grid-container"]} style={{gridTemplateRows: `repeat(${screenDefinition}, 1fr)`, gridTemplateColumns: `repeat(${screenDefinition}, 1fr)`}}>
        {[...Array(screenDefinition * screenDefinition)].map((n, i) => {
          return (
            <div
              className={classes["grid-cell"]}
              onMouseEnter={() => console.log(i)}
              key={i}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default ScreenComponent;
