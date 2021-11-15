import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import BuildIcon from "@material-ui/icons/Build";
import { useState } from "react";
import Options from "./Options";

// TODO: MAKE THE SIDEBAR CLICKABLE, FUNCTIONABLE

const navbarData = {
  key: "1",
  title: "DIGITAL CLOSET",
  list: {
    Builder: <BuildIcon />,
    Cart: <ShoppingCartIcon />,
    Closet: <HomeIcon />,
  },
};

const Navbar = ({ onClick }) => {
  const [showList, flipShowList] = useState(false);

  const onShowListHandler = () => {
    flipShowList(!showList);
  };

  const expandIcon = <ExpandMoreIcon />;
  const ChevronIcon = <ChevronRightIcon />;

  return (
    <Container>
      <Top>EXPLORER</Top>
      <MainSection>
        <Title onClick={onShowListHandler}>
          {showList ? ChevronIcon : expandIcon}
          <Text>{navbarData.title}</Text>
        </Title>
        <Options
          onClick={onClick}
          showList={showList}
          navbarList={navbarData.list}
        />
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

const Top = styled.div`
  font-size: 0.7em;
  font-weight: 600;
  color: grey;
`;

const MainSection = styled.div`
  padding: 5px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Text = styled.div`
  font-size: 0.8rem;
  font-weight: 600;
`;
