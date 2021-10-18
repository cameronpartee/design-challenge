import styled from "styled-components";
import SidebarSection from "./SidebarSection";

const sideBarData = [
  {
    key: "1",
    title: "My Account",
    optionsArray: ["Profile", "Whishlist", "Inspiration"],
  },
  {
    key: "2",
    title: "My Orders",
    optionsArray: ["All", "Processing", "Shipped", "Returned"],
  },
];

const Sidebar = () => {
  return (
    <Container>
      <SidebarSection sideBarData={sideBarData[0]} />
      <SidebarSection sideBarData={sideBarData[1]} />
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  background: rgb(202, 202, 202);
  border: 3px dashed rgb(192, 192, 192);
  display: flex;
  flex-direction: column;
  gap: 125px;
`;
