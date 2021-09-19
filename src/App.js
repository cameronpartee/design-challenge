import Header from "./components/Layout/Header";
import Container from "./components/Layout/Container";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./store/CartProvider";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Router>
      <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <Switch>
          <Route path="/want">
            <Container />
          </Route>
          <Route path="/have">
            <Container />
          </Route>
          <Route path="/">
            <Container />
          </Route>
        </Switch>
      </CartProvider>
    </Router>
  );
}

export default App;
