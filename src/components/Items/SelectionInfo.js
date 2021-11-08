import styled from "styled-components";

const SelectionInfo = (props) => {
  return (
    <Container>
      <Name>{props.item.name}</Name>
      <Price>US${props.item.price}</Price>
    </Container>
  );
};

export default SelectionInfo;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.div``;

const Price = styled.div`
  font-weight: bold;
  text-align: right;
`;
