import styled from "styled-components";

const FilterBar = (props) => {
  const onSelectionChangeHandler = (e) => {
    props.onChange(e.target.value);
  };

  return (
    <Container>
      <Filter>
        <label for="category">Category</label>
        <select onChange={onSelectionChangeHandler}>
          <option value="all">All</option>
          <option value="top">Tops</option>
          <option value="bottom">Bottoms</option>
          <option value="dress">Dresses</option>
          <option value="shoe">Shoes</option>
        </select>
      </Filter>
      <Filter>
        <label for="sort">Sort By</label>
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
  background: rgb(202, 202, 202);
  border: 3px dashed rgb(192, 192, 192);
  margin: 1.5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 35px;
  padding-right: 35px;
`;

const Filter = styled.div`
  label {
    font-size: 1.1rem;
    padding-right: 10px;
  }
  select {
    font-size: 1.1rem;
    width: 250px;
    height: 25px;
  }
`;
