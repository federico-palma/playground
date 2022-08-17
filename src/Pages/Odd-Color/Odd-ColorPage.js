import { useEffect } from "react";
import classes from "./Odd-Color.module.css"

const OddColorPage = () => {
  useEffect(() => {
    document.title = "PlayGround | Odd Color";
  }, []);

  return <div className={classes.background}>test</div>;
};

export default OddColorPage;
