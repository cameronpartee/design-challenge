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

const Name = styled.div`
  font-size: 0.8em;
`;

const Price = styled.div`
  font-size: 0.8em;
  font-weight: 600;
  text-align: right;
`;
