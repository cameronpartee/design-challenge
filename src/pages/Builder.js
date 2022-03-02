import SimpleImageSlider from "react-simple-image-slider";
import closetData from "../data/closet.json";
import styled from "styled-components";

export const Builder = () => {
  const { masterCloset } = closetData;

  const populateSliderContent = (filter) => {
    let sliderContent = [];
    for (let i in masterCloset) {
      if (masterCloset[i].tags.includes(filter)) {
        let tempObj = { url: masterCloset[i].img };
        sliderContent.push(tempObj);
      }
    }
    return sliderContent;
  };

  populateSliderContent();

  return (
    <Container>
      <Title>Welcome to your digital closet outfit builder!🛍</Title>
      <Subconatiner>
        <SimpleImageSlider
          width={400}
          height={400}
          images={populateSliderContent("top")}
          showNavs={true}
        />
        <SimpleImageSlider
          width={350}
          height={450}
          images={populateSliderContent("bottom")}
          showNavs={true}
        />
      </Subconatiner>
    </Container>
  );
};

export default Builder;

const Container = styled.div``;

const Title = styled.div`
  font-size: 1.2em;
  font-weight: 600;
  text-align: center;
`;

const Subconatiner = styled.div`
  margin: auto;
  margin-top: 50px;
  width: 70%;
  display: flex;
  justify-content: space-around;
`;
