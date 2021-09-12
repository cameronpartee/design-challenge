import classes from "./Item.module.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

export const Item = (props) => {
  const cartCtx = useContext(CartContext);

  /* ADD TO CART HANDLER IS CONNECTED TO THE CARTCONTEXT */
  const addToCartHandler = (amount) => {
    console.log("Item clicked");
    console.log(props);
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
      img: props.img,
    });
  };

  return (
    <div className={classes.item}>
      <img src={props.img} alt="clothing" />
      <div className={classes.backdrop}>
        {/* ADD BUTTON CLICK SHOULD GO HERE */}
        <div className={classes.text} onClick={addToCartHandler}>
          ADD TO CART
        </div>
      </div>
      <div className={classes.info}>
        <p className={classes.name}>{props.name}</p>
        <div class={classes.row}>
          <p className={classes.price}>US${props.price}</p>
          <i class="fa fa-heart"></i>
        </div>
      </div>
    </div>
  );
};

export default Item;
