import styled from "styled-components";
import Board from "./components/Layout/Board";
import cartData from "./data/cart.json";
import closetData from "./data/closet.json";
import styleBookData from "./data/stylebook.json";
import { useState, useEffect } from "react";
import Navbar from "./components/Layout/Navbar/Navbar";
import FilterBar from "./components/Layout/FilterBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Builder from "./pages/Builder";
import StyleBook from "./pages/StyleBook";

function App() {
  const { masterCart } = cartData;
  const { masterCloset } = closetData;
  const { masterStyleBook } = styleBookData;

  const [filter, setFilter] = useState("all");
  const [breadcrumbPath, setBreadcrumbPath] = useState("");
  const [cartBoardItems, setCartBoardItems] = useState(masterCart.reverse());
  const [closetBoardItems, setClosetBoardItems] = useState(
    masterCloset.reverse()
  );

  const onNavbarClickHandler = (path) => {
    setBreadcrumbPath(path);
  };

  const onChangeFilterHandler = (userInput) => {
    setFilter(userInput);
  };

  useEffect(() => {
    setCartBoardItems([]);
    setClosetBoardItems([]);

    let tempCartBoardItems = [];
    let tempClosetBoardItems = [];

    masterCloset.forEach((item) => {
      if (item.tags.includes(filter)) {
        tempClosetBoardItems.push(item);
      }
    });
    setClosetBoardItems(tempClosetBoardItems);

    masterCart.forEach((item) => {
      if (item.tags.includes(filter)) {
        tempCartBoardItems.push(item);
      }
    });
    setCartBoardItems(tempCartBoardItems);
  }, [filter]);

  return (
    <BrowserRouter>
      <Container>
        <Navbar onClick={onNavbarClickHandler}></Navbar>
        <Main>
          <FilterBar onChange={onChangeFilterHandler}></FilterBar>
          <Breadcrumb>{`home/${breadcrumbPath.toLowerCase()}/${filter}`}</Breadcrumb>
          <Switch>
            <Route exact path="/Builder" component={Builder} />
            <Route
              exact
              path="/StyleBook"
              component={() => <Board boardItems={masterStyleBook}></Board>}
            />
            <Route
              exact
              path="/Cart"
              component={() => <Board boardItems={cartBoardItems}></Board>}
            />
            <Route
              exact
              path="/Closet"
              component={() => <Board boardItems={closetBoardItems}></Board>}
            />
          </Switch>
        </Main>
      </Container>
    </BrowserRouter>
  );
}
export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 185px auto;
`;

const Main = styled.div`
display: grid;
grid-template-rows 80px 60px auto; 
background: rgb(255, 255, 255);
`;

const Breadcrumb = styled.div`
  font-size: 0.9rem;
  color: grey;
  font-weight: 600;
  margin: auto;
  margin-left: 55px;
`;
