import classes from "./Container.module.css";
import ItemList from "../Items/ItemList";

export const Container = () => {
  return (
    <div className={classes.container}>
      <ItemList purchased={"true"} />
    </div>
  );
};

export default Container;
