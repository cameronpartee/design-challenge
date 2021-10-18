import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

export const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>YUC</h1>
        <HeaderCartButton onClick={props.onShowCart} />
        {/* <div className={classes["icon-row"]}>
          <i className="fa fa-shopping-bag"></i>
          <i className="fa fa-heart"></i>
        </div> */}
      </header>
    </>
  );
};

export default Header;
