import styled from "styled-components";

const SelectionImage = (props) => {
  const handleClick = () => {
    window.open(props.item.url);
  };

  const isNew = props.item.tags.includes("new");
  const isOTW = props.item.tags.includes("otw");
  return (
    <Container>
      {isNew && <New>New</New>}
      {isOTW && <OTW>Otw</OTW>}
      <img src={props.item.img} alt={props.item.name} onClick={handleClick} />
    </Container>
  );
};

export default SelectionImage;

const Container = styled.div`
  height: 300px;
  background: rgb(255, 255, 255);
  border: 2px dashed rgb(245, 245, 245);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    max-width: 99%;
    max-height: 100%;
  }

  &:hover {
    cursor: pointer;
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

const OTW = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 5px;
  margin-left: 3px;
  width: 80px;
  height: 35px;
  background: rgb(255, 51, 51);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.1rem;
`;
