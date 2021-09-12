import classes from "./ItemList.module.css";
import Item from "./Item";

const DUMMY_ITEMS = [
  {
    id: "1",
    name: "Frayed Raw-Cut High Waisted Jean",
    price: "20.00",
    img: "https://img.ltwebstatic.com/images3_pi/2020/08/20/159789188603aa98179657756ac4044ef576bb5a36_thumbnail_900x.webp",
  },
  {
    id: "2",
    name: "High Waist Flare Leg Jeans",
    price: "25.00",
    img: "https://img.ltwebstatic.com/images3_pi/2020/12/28/1609138869421bc53f659dbff2948c615bf5050ad5_thumbnail_900x.webp",
  },
  {
    id: "3",
    name: "Curvy High Waist Skinny Jeans",
    price: "25.00",
    img: "https://img.ltwebstatic.com/images3_pi/2021/05/06/16202662380cf20784612e47de360539c99987254e_thumbnail_900x.webp",
  },
  {
    id: "6",
    name: "Solid Button Front Blouse",
    price: "17.00",
    img: "https://img.ltwebstatic.com/images3_pi/2021/07/08/1625730124276a95367ae522bcc522eddb53eeaeeb_thumbnail_900x.webp",
  },
  {
    id: "7",
    name: "Sheer Twist Front Top",
    price: "7.00",
    img: "https://img.ltwebstatic.com/images3_pi/2021/06/24/16245161045800933e5dad44d0c7649f8ee5524127_thumbnail_900x.webp",
  },
  {
    id: "11",
    name: "Clear Chunky Heeled Thong Sandals",
    price: "18.00",
    img: "https://img.ltwebstatic.com/images3_pi/2021/07/27/16273861604b95771388f2d6e6db7d59facafc4ff8_thumbnail_900x.webp",
  },
  {
    id: "12",
    name: "Clear Pyramid Heeled Mules",
    price: "21.00",
    img: "https://img.ltwebstatic.com/images3_pi/2021/06/17/16239183761ec965c23a06a623945b800ce4d64820_thumbnail_900x.webp",
  },
];

const ItemList = () => {
  const list = DUMMY_ITEMS.map((item) => (
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
