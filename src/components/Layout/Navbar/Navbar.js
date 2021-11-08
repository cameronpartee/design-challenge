import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { useState } from "react";
import Options from "./Options";

// TODO: MAKE THE SIDEBAR CLICKABLE, FUNCTIONABLE

const navbarData = {
  key: "1",
  title: "DIGITAL CLOSET",
  list: {
    Home: <HomeIcon />,
    "Universal Cart": <AddShoppingCartIcon />,
  },
};

const Navbar = ({ test }) => {
  const [showList, flipShowList] = useState(false);

  const onShowListHandler = () => {
    flipShowList(!showList);
  };

  const expandIcon = <ExpandMoreIcon />;
  const ChevronIcon = <ChevronRightIcon />;

  return (
    <Container>
      <div>EXPLORER</div>
      <MainSection>
        <Title onClick={onShowListHandler}>
          {showList ? ChevronIcon : expandIcon}
          <Text>{navbarData.title}</Text>
        </Title>
        <Options test={test} showList={showList} navbarList={navbarData.list} />
      </MainSection>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  padding-left: 10px;
  border: 1px solid rgb(224, 224, 224);
`;

/*
 background: rgb(202, 202, 202);
  border: 3px dashed rgb(192, 192, 192);
*/

const MainSection = styled.div`
  padding: 5px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Text = styled.div`
  font-weight: bold;
  font-size: 1rem;
`;
