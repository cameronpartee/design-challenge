import styled from "styled-components";

const Selection = (props) => {
  const isNew = props.item.tags.includes("new");
  return <Container>{isNew && <New>New</New>}</Container>;
};

export default Selection;

const Container = styled.div`
  width: 300px;
  height: 400px;
  background: rgb(202, 202, 202);
  border: 3px dashed rgb(192, 192, 192);
  margin: auto;
`;

const New = styled.div`
  margin-top: 8px;
  margin-left: -2px;
  width: 80px;
  height: 35px;
  background: rgb(0, 190, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.1rem;
`;
