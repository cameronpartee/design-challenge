import styled from "styled-components";
import React, { useState, useEffect } from "react";

const Options = (props) => {
  const [option, setOption] = useState("");

  const updateOptionsHandler = (e) => {
    setOption(e.target.innerText);
  };

  useEffect(() => {
    props.test(option);
  }, [option, props]);

  const displayList = Object.keys(props.navbarList).map((key) => (
    <Option onClick={updateOptionsHandler}>
      {props.navbarList[key]}
      {key}
    </Option>
  ));

  return (
    <Container
      style={{
        opacity: props.showList ? "0" : "1",
        visibility: props.showList ? "hidden" : "visible",
        transition: props.showList
          ? "transition: visibility 0s linear 1.5s, opacity 1.5s"
          : "visibility 0s linear 0s, opacity 1.5s",
      }}
    >
      {displayList}
    </Container>
  );
};

export default Options;

const Container = styled.div`
  position: absolute;
  padding-left: 10px;
  cursor: pointer;
`;

const Option = styled.div`
  padding-top: 10px;
  font-size: 1.2rem;
  display: flex;
  align-items: center;

  &:hover {
    font-size: 1.25rem;
  }
`;
