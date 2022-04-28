import styled from "styled-components";
import Board from "../components/Layout/Board";
import { useState } from "react";

const Wishlist = () => {
  const [toggleBoard, flipToggleBoard] = useState(true);

  return (
    <Container>
      <Board toggleBoard={toggleBoard}></Board>
    </Container>
  );
};

export default Wishlist;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows auto;
  background: rgb(255, 255, 255);
`;
