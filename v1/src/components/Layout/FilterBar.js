import styled from "styled-components";

const FilterBar = (props) => {
  const onSelectionChangeHandler = (e) => {
    props.onChange(e.target.value);
  };

  return (
    <Container>
      <Filter>
        <label for="category">Sort By Tags</label>
        <select onChange={onSelectionChangeHandler}>
          <option value="all">All</option>
          <option value="top">Tops</option>
          <option value="bottom">Bottoms</option>
          <option value="jacket">Jackets</option>
          <option value="dress">Dresses</option>
          <option value="set">Sets</option>
          <option value="shoe">Shoes</option>
          <option value="wig">Wigs</option>
          <option value="tech">Tech</option>
          <option value="archive">Archive</option>
          <option value="other">Other</option>
        </select>
      </Filter>
      <Filter>
        <label for="category">Sort By Store</label>
        <select onChange={onSelectionChangeHandler}>
          <option value="target">Target</option>
          <option value="nike">Nike</option>
          <option value="amazon">Amazon</option>
          <option value="shein">Shein</option>
          <option value="fashionnova">Fashion Nova</option>
        </select>
      </Filter>
      <Filter>
        <label for="sort">Sort By Order</label>
        <select onChange={onSelectionChangeHandler}>
          <option value="new">New Arrivals</option>
          <option value="low">Price Low to High</option>
          <option value="high">Price High to Low</option>
        </select>
      </Filter>
    </Container>
  );
};

export default FilterBar;

const Container = styled.div`
  border: 1px solid rgb(224, 224, 224);
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Filter = styled.div`
  label {
    font-size: 0.9rem;
    padding-right: 10px;
  }
  select {
    font-size: 0.8rem;
    width: 200px;
    height: 20px;

    &:hover {
      cursor: pointer;
    }
  }
`;
