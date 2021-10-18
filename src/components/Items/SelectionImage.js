import styled from "styled-components";

const SelectionImage = (props) => {
  const isNew = props.item.tags.includes("new");
  return (
    <Container>
      {isNew && <New>New</New>}
      <img src={props.item.img} alt={props.item.name} />
    </Container>
  );
};

export default SelectionImage;

const Container = styled.div`
  height: 300px;
  background: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    max-width: 99%;
    max-height: 100%;
  }
`;

const New = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 5px;
  margin-left: 3px;
  width: 80px;
  height: 35px;
  background: rgb(0, 190, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.1rem;
`;
