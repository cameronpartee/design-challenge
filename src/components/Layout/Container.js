import classes from "./Container.module.css";
import ItemList from "../Items/ItemList";

export const Container = (props) => {
  return (
    <div className={classes.container}>
      <ItemList purchased={props.purchased} />
    </div>
  );
};

export default Container;
