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
  {
    id: "8",
    name: "SHEIN SXY High Waisted Ripped Flare Leg Jeans",
    price: "16.00",
    size: "W28 L32",
    purchased: "false",
    img: "https://img.ltwebstatic.com/images3_pi/2021/07/29/16275250747f12a7ab6ec800008a62c22e2bb1705c_thumbnail_405x552.webp",
  },
  {
    id: "9",
    name: "High Waist Ripped Detail Flare Leg Jeans",
    price: "25.00",
    size: "M",
    purchased: "false",
    img: "https://img.ltwebstatic.com/images3_pi/2020/12/16/16080867037780d06f6a87728bab6077d0e4d614b4_thumbnail_405x552.webp",
  },
  {
    id: "10",
    name: "SHEIN SXY Ripped Detail Split Hem Jeans",
    price: "27.00",
    size: "M",
    purchased: "false",
    img: "https://img.ltwebstatic.com/images3_pi/2021/05/31/1622437569fed1ba7c6257229332781f539dcbaa08_thumbnail_405x552.webp",
  },
  {
    id: "11",
    name: "SHEIN Solid Open Back Cami Jumpsuit",
    price: "19.00",
    size: "M",
    purchased: "false",
    img: "https://img.ltwebstatic.com/images3_pi/2021/07/22/1626944247a8a0e3050ccc9be9c196c6f54c8d9a21_thumbnail_405x552.webp",
  },
  {
    id: "12",
    name: "SHEIN SXY Solid Lantern Sleeve Coat & Bodycon Dress",
    price: "29.00",
    size: "XS",
    purchased: "false",
    img: "https://img.ltwebstatic.com/images3_pi/2021/08/11/16286540362857ff50181e5e4c5c1bb30370361e03_thumbnail_405x552.webp",
  },
  {
    id: "13",
    name: "SHEIN SXY Solid Button Through Longline Blouse",
    price: "14.00",
    size: "XS",
    purchased: "false",
    img: "https://img.ltwebstatic.com/images3_pi/2021/08/30/16302889243f5ad3f008bce1a06472254912a47cff_thumbnail_405x552.webp",
  },
  {
    id: "14",
    name: "SHEIN SXY Criss Cross Tie Back Tank top",
    price: "14.00",
    size: "XS",
    purchased: "false",
    img: "https://img.ltwebstatic.com/images3_pi/2021/08/30/163028892646578b0d1a42ae44736738237f485045_thumbnail_405x552.webp",
  },
  {
    id: "15",
    name: "All Over Print Button Up Blouse",
    price: "19.00",
    size: "S",
    purchased: "false",
    img: "https://img.ltwebstatic.com/images3_pi/2021/07/26/16272686470f1bab8c6d7314637295b1b71f3a41df_thumbnail_405x552.webp",
  },
  {
    id: "16",
    name: "SHEIN Solid Tank Bodysuit",
    price: "12.00",
    size: "M",
    purchased: "false",
    img: "https://img.ltwebstatic.com/images3_pi/2021/08/10/162856522452490d51ea55b5c1793eecc7a58facd9_thumbnail_405x552.webp",
  },
  {
    id: "17",
    name: "SHEIN Scoop Neck Rib-knit Bodysuit",
    price: "14.00",
    size: "M",
    purchased: "false",
    img: "https://img.ltwebstatic.com/images3_pi/2021/08/10/1628566403bb494db5e6add0a825119d8d62c73a31_thumbnail_405x552.webp",
  },
  {
    id: "18",
    name: "SHEIN Scoop Neck Rib-knit Bodysuit",
    price: "14.00",
    size: "M",
    purchased: "false",
    img: "https://img.ltwebstatic.com/images3_pi/2021/08/10/1628566423e19cf52542933f96a7ac8c82063c2725_thumbnail_405x552.webp",
  },
];

const ItemList = (props) => {
  // CREATE TWO LISTS
  const purchased = DUMMY_ITEMS.filter((item) => item.purchased === "true");
  const notPurchased = DUMMY_ITEMS.filter((item) => item.purchased === "false");

  // USE PROPS TO DECIDE WHICH LIST TO SHOW
  let filteredList;

  if (props.purchased === "all") {
    filteredList = DUMMY_ITEMS;
  } else if (props.purchased) {
    filteredList = purchased;
  } else {
    filteredList = notPurchased;
  }

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
