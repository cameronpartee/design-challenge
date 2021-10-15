import styled from "styled-components";

const Selection = (props) => {
  return <Container>{props.item.name}</Container>;
};

export default Selection;

const Container = styled.div`
  width: 300px;
  height: 400px;
  background: rgb(202, 202, 202);
  border: 3px dashed rgb(192, 192, 192);
  margin: auto;
`;
