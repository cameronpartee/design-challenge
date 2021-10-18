import styled from "styled-components";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { useState } from "react";
import SectionOptions from "./SectionOptions";

const SidebarSection = (props) => {
  const [hideOptions, setHideOptions] = useState(false);

  const onShowOptionsHandler = () => {
    setHideOptions(!hideOptions);
  };

  const showIcon = <AddIcon />;
  const hideIcon = <RemoveIcon />;

  return (
    <Container>
      <SectionTitle onClick={onShowOptionsHandler}>
        <Title>{props.sideBarData.title}</Title>
        {hideOptions ? showIcon : hideIcon}
      </SectionTitle>
      <SectionOptions
        hideOptions={hideOptions}
        sideBarOptions={props.sideBarData.optionsArray}
      />
    </Container>
  );
};

export default SidebarSection;

const Container = styled.div`
  padding: 5px;
`;

const SectionTitle = styled.div`
  background: rgb(185, 185, 185);
  border: 3px dashed rgb(192, 192, 192);
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
`;
