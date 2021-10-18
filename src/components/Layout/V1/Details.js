import classes from "./Details.module.css";

const Details = (props) => {
  return (
    <div className={classes.details}>
      <img src={props.item.img} alt="clothing" />
      <div className={classes.info}>
        <div className={classes.name}>{props.item.name}</div>
        <div className={classes.price}>US${props.item.price}</div>
        <div className={classes.bottom}>
          <div className={classes.size}>Size (US): {props.item.size}</div>
          <a href={props.item.website}>{props.item.brand}</a>
          <button>ADD TO BAG</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
