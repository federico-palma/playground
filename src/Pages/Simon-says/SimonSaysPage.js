import classes from "./SimonSays.module.css";

const SimonSaysPage = () => {
  return (
    <div className={classes.background}>
      <main className={classes.board}>
        <div className={`${classes.btn} ${classes["btn-1"]}`}></div>
        <div className={`${classes.btn} ${classes["btn-2"]}`}></div>
        <div className={`${classes.btn} ${classes["btn-3"]}`}></div>
        <div className={`${classes.btn} ${classes["btn-4"]}`}></div>
      </main>
    </div>
  );
};

export default SimonSaysPage;
