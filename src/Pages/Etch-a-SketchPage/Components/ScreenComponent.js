import { useEffect } from "react";
import classes from "../Etch-a-SketchPage.module.css";

const ScreenComponent = (props) => {
  useEffect(() => {
    console.log('loglog')
    let boardCells = document.getElementsByClassName('cell')
    for (let i = 0; i < boardCells.length; i++) {
      boardCells[i].style.backgroundColor = 'white';
  }
  }, [props.screenDefinition, props.triggerClearBoard]);

  const getRandomColor = () => {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  function greyscaleFunction(targetCellColor) {
    switch (targetCellColor) {
      case "rgb(200, 200, 200)":
        return "rgb(150, 150, 150)";
      case "rgb(150, 150, 150)":
        return "rgb(100, 100, 100)";
      case "rgb(100, 100, 100)":
        return "rgb(50, 50, 50)";
      case "rgb(50, 50, 50)":
        return "rgb(0, 0, 0)";
      case "rgb(0, 0, 0)":
        return "rgb(0, 0, 0)";
      default:
        return "rgb(200, 200, 200)";
    }
  }

  const changeColor = (targetElement) => {
    switch (props.currentColorMode) {
      case "color":
        targetElement.style = `background-color: ${props.currentColor}`;
        break;

      case "rainbow":
        targetElement.style = `background-color: ${getRandomColor()}`;
        break;

      case "greyscale":
        targetElement.style = `background-color: ${greyscaleFunction(
          targetElement.style.backgroundColor
        )}`;
        break;

      case "eraser":
        targetElement.style = "background-color: #ffffff";
        break;

      default:
        break;
    }
  };

  return (
    <div className={classes.screen}>
      <div
        className={classes["grid-container"]}
        style={{
          gridTemplateRows: `repeat(${props.screenDefinition}, 1fr)`,
          gridTemplateColumns: `repeat(${props.screenDefinition}, 1fr)`,
        }}
      >
        {[...Array(props.screenDefinition * props.screenDefinition)].map((n, i) => {
          return (
            <div
              className={`${classes["grid-cell"]} cell`}
              onMouseEnter={(e) => {
                changeColor(e.target);
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
