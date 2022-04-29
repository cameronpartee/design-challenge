import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Options = (props) => {
  const [path, setPath] = useState("Home");

  const updateOptionsHandler = (e) => {
    setPath(e.target.innerText);
  };

  useEffect(() => {
    props.onClick(path);
  }, [path, props]);

  const displayList = Object.keys(props.navbarList).map((key) => (
    <Link to={`/${path}`}>
      <Option onClick={updateOptionsHandler}>
        {props.navbarList[key]} {key}
      </Option>
    </Link>
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
  padding-top: 5px;
  font-size: 0.7em;
  font-weight: 600;
  display: flex;
  align-items: center;

  &:hover {
    font-size: 0.75rem;
  }

  svg {
    font-size: 1.3em;
    margin-right: 5px;
  }
`;
