import classes from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <div className={classes.item}>
      <img src={props.img} alt="clothing" />
      <div className={classes.info}>
        <p className={classes.name}>{props.name}</p>
        <div class={classes.row}>
          <p className={classes.price}>{props.price}</p>
          <i class="fa fa-heart"></i>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
