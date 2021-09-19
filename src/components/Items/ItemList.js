import classes from "./ItemList.module.css";
import Item from "./Item";

const DUMMY_ITEMS = [
  {
    id: "1",
    name: "Flap Pocket Drop Shoulder Cord Blouse",
    price: "20.00",
    size: "XS",
    purchased: "true",
    img: "https://img.ltwebstatic.com/images3_pi/2021/07/20/1626764865fd8fe2dc0c84729174a9763f689a420d_thumbnail_900x.webp",
  },
  {
    id: "2",
    name: "DAZY Asymmetrical Hem Super Crop Tee",
    price: "10.00",
    size: "S",
    purchased: "true",
    img: "https://img.ltwebstatic.com/images3_pi/2021/07/30/16276263252a0ed19c2157550da8d486075c6468a9_thumbnail_900x.webp",
  },
  {
    id: "3",
    name: "SHEIN Sheer Twist Front Top",
    price: "7.00",
    size: "M",
    purchased: "true",
    img: "https://img.ltwebstatic.com/images3_pi/2021/06/24/1624516110bdc4e14e0fce11205e28a42875f2a8ba_thumbnail_900x.webp",
  },
  {
    id: "4",
    name: "SHEIN SXY Press Crease Tube Bodycon Dress",
    price: "24.00",
    size: "M",
    purchased: "true",
    img: "https://img.ltwebstatic.com/images3_pi/2021/08/20/162945108213861599e785a71353cc861f5ba8a5af_thumbnail_900x.webp",
  },
  {
    id: "5",
    name: "SHEIN PETITE Solid Lapel Neck Belted Blazer & Pants Set",
    price: "22.00",
    size: "S",
    purchased: "true",
    img: "https://img.ltwebstatic.com/images3_pi/2021/08/30/1630308712ce67f4e621a5b38e9ec7417b239b7570_thumbnail_900x.webp",
  },
  {
    id: "6",
    name: "SHEIN SXY Washed Asymmetrical Raw Hem Jeans",
    price: "22.00",
    size: "29",
    purchased: "true",
    img: "https://img.ltwebstatic.com/images3_pi/2021/08/23/162972189951dd488addeee94e55b20c87206994a3_thumbnail_900x.webp",
  },
  {
    id: "7",
    name: "Clear Chunky Heeled Mule Sandals",
    price: "29.00",
    size: "7",
    purchased: "true",
    img: "https://img.ltwebstatic.com/images3_pi/2021/05/28/1622187793b3ca16492c6595a5e2ab1165727ab86d_thumbnail_900x.webp",
  },
];

const ItemList = (props) => {
  // CREATE TWO LISTS
  const purchased = DUMMY_ITEMS.filter((item) => item.purchased);
  const notPurchased = DUMMY_ITEMS.filter((item) => !item.purchased);

  // USE PROPS TO DECIDE WHICH LIST TO SHOW
  const filteredList = props.purchased ? purchased : notPurchased;

  // PASS LIST INTO CONTAINER VIEW
  const list = filteredList.map((item) => (
    <Item
      id={item.id}
      key={item.id}
      name={item.name}
      price={item.price}
      img={item.img}
    />
  ));

  return <section className={classes.section}>{list}</section>;
};

export default ItemList;
