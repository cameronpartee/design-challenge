import Wishlist from "./components/Layout/Wishlist";

function App() {
  return <Wishlist />;
}

export default App;

/*

// import Header from "./components/Layout/V1/Header";
// import Container from "./components/Layout/V1/Container";
// import Cart from "./components/Cart/Cart";
// import { useState } from "react";
// import CartProvider from "./store/CartProvider";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


 const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const DUMMY_ITEMS_COPY = [
    {
      id: "10",
      name: "SHEIN Snakeskin Print Split Hem Jeans",
      price: "11.00",
      size: "M",
      purchased: "false",
      img: "https://img.ltwebstatic.com/images3_pi/2021/06/23/16244197303daab2266e8e1c2820c2e16737c50878_thumbnail_405x552.webp",
      website:
        "https://us.shein.com/SHEIN-Snakeskin-Print-Split-Hem-Jeans-p-2390970-cat-1934.html",
      brand: "Shein",
    },
  ];

  
    // <Router>
    //   <CartProvider>
    //     {cartIsShown && <Cart onClose={hideCartHandler} />}
    //     <Header onShowCart={showCartHandler} />
    //     <Switch>
    //       <Route path="/details">
    //         <Details item={DUMMY_ITEMS_COPY[0]} />
    //       </Route>
    //       <Route path="/want">
    //         <Container purchased={false} />
    //       </Route>
    //       <Route path="/have">
    //         <Container purchased={true} />
    //       </Route>
    //       <Route path="/">
    //         <Container purchased={"all"} />
    //       </Route>
    //     </Switch>
    //   </CartProvider>
    // </Router>
*/
