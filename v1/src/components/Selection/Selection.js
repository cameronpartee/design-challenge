import styled from "styled-components";
import SelectionImage from "./SelectionImage";
import SelectionInfo from "./SelectionInfo";

const Selection = (props) => {
  return (
    <Container>
      <SelectionImage item={props.item} />
      <SelectionInfo item={props.item} />
    </Container>
  );
};

export default Selection;

const Container = styled.div`
  height: 300px;
  width: 250px;
  margin: auto;
`;
