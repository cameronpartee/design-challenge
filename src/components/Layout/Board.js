import styled from "styled-components";
import Selection from "../Selection/Selection";

const Board = (props) => {
  return (
    <Container>
      <Content>
        {props.boardItems.map((item) => (
          <Selection item={item} />
        ))}
      </Content>
    </Container>
  );
};

export default Board;

const Container = styled.div`
  display: grid;
  grid-template-rows: auto;
`;

// ADD MEDIA QUERIES FOR SMALLER SCREEN SIZE
const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  row-gap: 65px;
  height: 800px;
  overflow: hidden;
  overflow-y: scroll;
`;
