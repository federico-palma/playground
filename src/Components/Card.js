import classes from "../Styles/Card.module.css";

const Card = (props) => {
  return (
    <div className={classes["card-container"]}>
      <div className={classes["card-img-container"]}>
        <img src={props.imagePath} alt="" className={classes["card-img"]} />
      </div>
      <div className={classes["card-title-container"]}>
        <h2 className={classes["card-title"]}>{props.title}</h2>
      </div>
    </div>
  );
};

export default Card;
