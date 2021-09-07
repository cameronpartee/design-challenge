import classes from "./Header.module.css";

export const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>Your Universal Cart</h1>
        <div className={classes["icon-row"]}>
          <i className="fa fa-shopping-bag"></i>
          <i className="fa fa-heart"></i>
        </div>
      </header>
    </>
  );
};

export default Header;
