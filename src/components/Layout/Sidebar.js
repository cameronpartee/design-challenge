import styled from "styled-components";

// TODO: ADD SIDEBAR FUNCTIONALITY ONCLICK
// TODO: RESTYLE SIDEBAR

const Sidebar = () => {
  return (
    <Container>
      <Section>
        <Title>My Account</Title>
        <SectionOptions>
          <Option>My Profile</Option>
        </SectionOptions>
      </Section>
      <Section>
        <Title>My Orders</Title>
        <SectionOptions>
          <Option>All Orders</Option>
          <Option>Shipped Orders</Option>
          <Option>Return Orders</Option>
        </SectionOptions>
      </Section>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  padding: 50px;
  background: rgb(202, 202, 202);
  border: 3px dashed rgb(192, 192, 192);
`;

const Section = styled.div`
  padding-bottom: 15px;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  padding-bottom: 10px;
`;

const SectionOptions = styled.div`
  padding-left: 15px;
`;

const Option = styled.div`
  padding-bottom: 10px;
  font-size: 1.2rem;
`;
