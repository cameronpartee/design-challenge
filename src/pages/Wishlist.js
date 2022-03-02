import styled from "styled-components";
import Board from "../components/Layout/Board";
import Navbar from "../components/Layout/Navbar/Navbar";
import { useState } from "react";

const Wishlist = () => {
  const [toggleBoard, flipToggleBoard] = useState(true);

  const tester = (name) => {
    flipToggleBoard(name === "Universal Cart" ? false : true);
  };

  return (
    <Container>
      <Navbar test={tester}></Navbar>
      <Main>
        <Board toggleBoard={toggleBoard}></Board>
      </Main>
    </Container>
  );
};

export default Wishlist;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 230px auto;
`;

const Main = styled.div`
display: grid;
grid-template-rows auto;
background: rgb(255, 255, 255);
`;
