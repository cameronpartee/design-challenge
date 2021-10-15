import styled from "styled-components";
import Selection from "../Items/Selection";

// HERE WE WOULD PASS THE ARRAY OF OBJECTS AS A PROP
const Board = () => {
  // FOR NOW LETS MAKE A VARIABLE
  const boardItems = [1, 2, 3, 4, 5, 6, 7, 8, 10];
  return (
    <Container>
      <Title>REACT TEMPLATE</Title>
      <FilterBar></FilterBar>
      <Content>
        {boardItems.map((item) => (
          <Selection />
        ))}
      </Content>
    </Container>
  );
};

export default Board;

const Container = styled.div`
  display: grid;
  grid-template-rows: 200px 150px auto;
`;

const Title = styled.div`
  margin: auto;
  font-size: 2.5rem;
  text-align: center;
`;

const FilterBar = styled.div`
  background: rgb(202, 202, 202);
  border: 3px dashed rgb(192, 192, 192);
  margin: 1.5%;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  row-gap: 125px;
`;
