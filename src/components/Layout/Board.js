import styled from "styled-components";
import Selection from "../Items/Selection";
import FilterBar from "./FilterBar";
import { useState, useEffect } from "react";

// https://cdn.wigginshair.com/media/catalog/product/cache/1/image/600x/040ec09b1e35df139433887a97daa66f/_/4/_4_loose_deep_wave_wig_5.jpg
// https://cdn.wigginshair.com/media/catalog/product/cache/1/image/600x/9df78eab33525d08d6e5fb8d27136e95/1/_/1_146_.jpg

const masterCopy = [
  {
    id: 1,
    name: "Wmns Dunk Low 'Light Bone'",
    price: "193",
    size: "7W",
    tags: ["shoe", "all", "new"],
    img: "https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/060/558/537/original/778291_01.jpg.jpeg?1631906637",
    url: "https://www.goat.com/sneakers/wmns-dunk-low-light-bone-dd1503-107?utm_source=google_int&utm_medium=google_shopping_int&utm_campaign=14323870519_134709671228&utm_content=540105504230_&utm_term=195238099381&gclid=CjwKCAjwk6-LBhBZEiwAOUUDp2rpklIc5ZP-noGtun5andqnXzj2ayFnc9WBSDSt8377NuLUv0uCihoCOKgQAvD_BwE",
  },
  {
    id: 2,
    name: "#4 Chocolate Brown Wigs Human Hair",
    price: "312.09",
    size: "22 13x4 180%",
    tags: ["hair", "all"],
    img: "https://cdn.wigginshair.com/media/catalog/product/cache/1/image/600x/040ec09b1e35df139433887a97daa66f/_/4/_4_loose_deep_wave_wig_5.jpg",
    url: "https://www.wigginshair.com/4-chocolate-brown-wigs-human-hair-loose-deep-wave-lace-front-wigs-for-sale.html",
  },
  {
    id: 3,
    name: "Eva Naturals Vitamin C Serum",
    price: "14.95",
    size: "N/A",
    tags: ["all", "new"],
    img: "https://m.media-amazon.com/images/I/51AJQATgjoL._AC_AA440_.jpg",
    url: "https://www.amazon.com/gp/product/B01BT02Q88/ref=ox_sc_act_title_2?smid=AYBNWO8ZGP63G&th=1",
  },
];

const Board = () => {
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

  return (
    <Container>
      <Title>UNIVERSAL WISHLIST</Title>
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

// ADD MEDIA QUERIES FOR SMALLER SCREEN SIZE
const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  row-gap: 125px;
`;
