import { Link, useLocation } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  const { pathname } = useLocation();

  const setStyleFromPath = () => {
      switch (pathname) {
          case '/':
              return classes.homepage
          case '/Etch-a-Sketch':
              return classes.eas
          case '/Memory-Match':
              return classes["memory-match"]
          case '/Odd-Color':
              return classes["odd-color"]
      
          default:
              break;
      }
  }

  return (
    <header className={`${classes.header} ${setStyleFromPath()}`}>
      <Link to="/">
        <h1 className={classes.title}>PlayGround!</h1>
      </Link>
    </header>
  );
};

export default Header;
