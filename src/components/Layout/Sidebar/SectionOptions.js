import styled from "styled-components";

const SectionOptions = (props) => {
  const optionsToDisplay = props.sideBarOptions.map((option) => (
    <Option>{option}</Option>
  ));

  return (
    <Container
      style={{
        opacity: props.hideOptions ? "0" : "1",
        visibility: props.hideOptions ? "hidden" : "visible",
        transition: props.hideOptions
          ? "transition: visibility 0s linear 1.5s, opacity 1.5s"
          : "visibility 0s linear 0s, opacity 1.5s",
      }}
    >
      {optionsToDisplay}
    </Container>
  );
};

export default SectionOptions;

const Container = styled.div`
  position: absolute;
  padding-left: 15px;
  cursor: pointer;
`;

const Option = styled.div`
  padding-top: 10px;
  font-size: 1.2rem;

  &:hover {
    font-size: 1.25rem;
  }
`;
