import styled from "styled-components";
import Board from "./Board";

const Wishlist = () => {
  return (
    <Container>
      <Header></Header>
      <Main>
        <Sidebar></Sidebar>
        <Board></Board>
      </Main>
    </Container>
  );
};

export default Wishlist;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 100px auto;
`;

const Header = styled.div`
  background: rgb(0, 25, 51);
`;

const Main = styled.div`
display: grid;
grid-template-columns 300px auto;
background: rgb(224, 224, 224);
`;

const Sidebar = styled.div`
  background: rgb(0, 51, 102);
`;
