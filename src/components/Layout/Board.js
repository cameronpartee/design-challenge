import styled from "styled-components";
import Selection from "../Items/Selection";
import FilterBar from "./FilterBar";
import { useState, useEffect } from "react";

const masterCopy = [
  { id: 1, name: "Shirt", tags: ["top", "all", "new"] },
  { id: 2, name: "Jeans", tags: ["bottom", "all"] },
  { id: 3, name: "Skirt", tags: ["bottom", "all"] },
  { id: 4, name: "Heel", tags: ["shoe", "all"] },
  { id: 5, name: "Bodysuit", tags: ["top", "all", "new"] },
  { id: 6, name: "Sneaker", tags: ["shoe", "all"] },
];

const Filters = ["top", "bottom", "dress", "shoe"];

const Board = () => {
  // dynamically setBoardItems
  const [filter, setFilter] = useState("all");
  const [boardItems, setBoardItems] = useState(masterCopy);

  useEffect(() => {
    setBoardItems([]);
    let tempBoardItems = [];
    masterCopy.forEach((item) => {
      if (item.tags.includes(filter)) {
        tempBoardItems.push(item);
      }
    });
    setBoardItems(tempBoardItems);
  }, [filter]);

  const onChangeFilterHandler = (userInput) => {
    setFilter(userInput);
  };

  // based off what tho?
  // based off the user input - well lets work on that then

  // if (hasFilters) {
  //

  // }

  return (
    <Container>
      <Title>REACT TEMPLATE</Title>
      <FilterBar onChange={onChangeFilterHandler}></FilterBar>
      <Content>
        {boardItems.map((item) => (
          <Selection item={item} />
        ))}
      </Content>
    </Container>
  );
};

export default Board;

const Container = styled.div`
  display: grid;
  grid-template-rows: 200px 150px auto;
`;

const Title = styled.div`
  margin: auto;
  font-size: 2.5rem;
  text-align: center;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  row-gap: 125px;
`;
