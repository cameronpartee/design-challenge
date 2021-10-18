import styled from "styled-components";

const SelectionInfo = (props) => {
  return (
    <Container>
      <Name>{props.item.name}</Name>
      <Row>
        <Price>US${props.item.price}</Price>
        <i class="fa fa-heart"></i>
      </Row>
    </Container>
  );
};

export default SelectionInfo;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 3px solid rgb(230, 230, 230);
`;

const Name = styled.div`
  height: 47px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Price = styled.div`
  font-weight: bold;
`;
