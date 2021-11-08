import styled from "styled-components";
import Selection from "../Items/Selection";
import FilterBar from "./FilterBar";
import { useState, useEffect } from "react";

// https://cdn.wigginshair.com/media/catalog/product/cache/1/image/600x/040ec09b1e35df139433887a97daa66f/_/4/_4_loose_deep_wave_wig_5.jpg
// https://cdn.wigginshair.com/media/catalog/product/cache/1/image/600x/9df78eab33525d08d6e5fb8d27136e95/1/_/1_146_.jpg

// TODO: ADD ARCHIVE BEHAVIOR
const masterCart = [
  {
    id: 1,
    name: "Oculus Quest 2 VR Headset",
    price: "299",
    size: "128 GB",
    tags: ["all", "target", "tech"],
    img: "https://i5.walmartimages.com/asr/16a9974e-a5b0-4cad-a98e-730148409bef.3e8858a1d3beb01ff2fbc79a880beedf.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    url: "https://www.walmart.com/ip/Oculus-Quest-2-All-In-One-VR-Headset-128-GB/723227733?wmlspartner=wlpa&selectedSellerId=0&wl13=3775&adid=22222222420450916370&wmlspartner=wmtlabs&wl0=&wl1=g&wl2=c&wl3=547331341345&wl4=aud-1307710396940:pla-293946777986&wl5=9010937&wl6=&wl7=&wl8=&wl9=pla&wl10=8175035&wl11=local&wl12=723227733&wl13=3775&veh=sem_LIA&gclid=CjwKCAjwq9mLBhB2EiwAuYdMtbTmA3CMd_QDXybTDuyjURlOwabqBkUI6j78wTRPY0ckOclSgo7VqBoC2cQQAvD_BwE&gclsrc=aw.ds",
  },
  {
    id: 3,
    name: "Wmns Dunk Low 'Light Bone'",
    price: "193",
    size: "7W",
    tags: ["shoe", "all", "nike"],
    img: "https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/060/558/537/original/778291_01.jpg.jpeg?1631906637",
    url: "https://www.goat.com/sneakers/wmns-dunk-low-light-bone-dd1503-107?utm_source=google_int&utm_medium=google_shopping_int&utm_campaign=14323870519_134709671228&utm_content=540105504230_&utm_term=195238099381&gclid=CjwKCAjwk6-LBhBZEiwAOUUDp2rpklIc5ZP-noGtun5andqnXzj2ayFnc9WBSDSt8377NuLUv0uCihoCOKgQAvD_BwE",
  },
  {
    id: 4,
    name: "Kanye Lucky Me Shorts",
    price: "26.66",
    size: "Medium",
    tags: ["all", "otw", "amazon", "bottom", "mombday"],
    img: "https://images-na.ssl-images-amazon.com/images/I/616wWVibUOL.__AC_SY445_SX342_QL70_FMwebp_.jpg",
    url: "https://www.amazon.com/dp/B091NVGF8X?psc=1&smid=A3FIWB8CQZD4W1&ref_=chk_typ_imgToDp",
  },
  {
    id: 5,
    name: "Adidas Women 3-Stripes Pants",
    price: "29.99",
    size: "Medium",
    tags: ["all", "otw", "amazon", "bottom", "mombday"],
    img: "https://images-na.ssl-images-amazon.com/images/I/71ZqGpRhKTL._AC_UL232_SR232,232_.jpg",
    url: "https://www.amazon.com/dp/B08MLFMB87?psc=1&smid=ATVPDKIKX0DER&ref_=chk_typ_imgToDp",
  },
  {
    id: 6,
    name: "Adidas Originals Bucket Hat",
    price: "24.99",
    size: "One Size",
    tags: ["all", "otw", "amazon", "other", "mombday"],
    img: "https://images-na.ssl-images-amazon.com/images/I/71QqjgMli5S._AC_UL232_SR232,232_.jpg",
    url: "https://www.amazon.com/dp/B07KZ5NNP5?psc=1&smid=A1ROLXALUI4LTM&ref_=chk_typ_imgToDp",
  },
  {
    id: 7,
    name: "Chocolate Brown Human Hair",
    price: "312.09",
    size: "22 13x4 180%",
    tags: ["wig", "all"],
    img: "https://cdn.wigginshair.com/media/catalog/product/cache/1/image/600x/040ec09b1e35df139433887a97daa66f/_/4/_4_loose_deep_wave_wig_5.jpg",
    url: "https://www.wigginshair.com/4-chocolate-brown-wigs-human-hair-loose-deep-wave-lace-front-wigs-for-sale.html",
  },
];

const masterCloset = [
  {
    id: 1,
    name: "Sleeve Blouse",
    price: "11",
    size: "M(6)",
    tags: ["top", "all", "shein"],
    img: "https://i.imgur.com/689qbuQ.jpg",
    url: "https://us.shein.com/Square-Neck-Split-Hem-Bishop-Sleeve-Shirred-Blouse-p-2842079-cat-1733.html",
  },
  {
    id: 2,
    name: "Belted Blazer & Pants Set",
    price: "22",
    size: "Petite M",
    tags: ["set", "all", "shein"],
    img: "https://img.ltwebstatic.com/images3_pi/2021/08/30/1630308714103c0213c235bc55e511ce635ed3ce25_thumbnail_900x.webp",
    url: "https://us.shein.com/SHEIN-PETITE-Solid-Lapel-Neck-Belted-Blazer-Pants-Set-p-3217110-cat-1780.html",
  },
  {
    id: 3,
    name: "Split Hem Jeans",
    price: "27",
    size: "M(6)",
    tags: ["bottom", "all", "shein"],
    img: "https://img.ltwebstatic.com/images3_pi/2021/05/31/1622437569fed1ba7c6257229332781f539dcbaa08_thumbnail_900x.webp",
    url: "https://us.shein.com/SHEIN-SXY-Ripped-Detail-Split-Hem-Jeans-p-2319456-cat-1934.html",
  },
  {
    id: 4,
    name: "Flare Leg Jeans",
    price: "25",
    size: "M(6)",
    tags: ["bottom", "all", "shein"],
    img: "https://img.ltwebstatic.com/images3_pi/2020/12/16/16080867037780d06f6a87728bab6077d0e4d614b4_thumbnail_900x.webp",
    url: "https://us.shein.com/High-Waist-Ripped-Detail-Flare-Leg-Jeans-p-1835649-cat-1934.html",
  },
  {
    id: 5,
    name: "Ripped Flare Leg Jeans",
    price: "16",
    size: "W28 L32",
    tags: ["bottom", "all", "shein"],
    img: "https://img.ltwebstatic.com/images3_pi/2021/07/29/16275250747f12a7ab6ec800008a62c22e2bb1705c_thumbnail_900x.webp",
    url: "https://us.shein.com/SHEIN-SXY-High-Waisted-Ripped-Flare-Leg-Jeans-p-2948531-cat-1934.html",
  },
  {
    id: 6,
    name: "Asymmetrical Hem Jeans",
    price: "10",
    size: "27",
    tags: ["bottom", "all", "shein"],
    img: "https://img.ltwebstatic.com/images3_pi/2021/08/23/162972189951dd488addeee94e55b20c87206994a3_thumbnail_900x.webp",
    url: "https://us.shein.com/SHEIN-SXY-Washed-Asymmetrical-Raw-Hem-Jeans-p-3170334-cat-1934.html",
  },
  {
    id: 7,
    name: "Scrunch Maxi Dress",
    price: "24",
    size: "M(6)",
    tags: ["dress", "all", "shein"],
    img: "https://i.imgur.com/CCU8iLj.jpg",
    url: "https://us.shein.com/SHEIN-SXY-Press-Crease-Tube-Bodycon-Dress-Open-Front-Coat-p-3216644-cat-1780.html",
  },
  {
    id: 8,
    name: "Rib-knit Bodysuit",
    price: "14",
    size: "M(6)",
    tags: ["top", "all", "shein"],
    img: "https://img.ltwebstatic.com/images3_pi/2021/08/10/1628566403bb494db5e6add0a825119d8d62c73a31_thumbnail_900x.webp",
    url: "https://us.shein.com/SHEIN-Scoop-Neck-Rib-knit-Bodysuit-p-3294408-cat-1882.html",
  },
  {
    id: 9,
    name: "Premium Blouse",
    price: "34.99",
    size: "XS(2)",
    tags: ["top", "all", "shein"],
    img: "https://img.ltwebstatic.com/images3_pi/2021/04/19/161883127627902f3bcc500db9cd848039c4641cf4_thumbnail_900x.webp",
    url: "https://us.shein.com/MOTF-PREMIUM-OVERSIZE-BATWING-SLEEVE-BLOUSE-p-2288561-cat-1733.html",
  },
  {
    id: 10,
    name: "Cord Blouse",
    price: "22",
    size: "XS(2)",
    tags: ["top", "all", "shein"],
    img: "https://i.imgur.com/NWYfJ4c.jpg",
    url: "https://us.shein.com/SHEIN-Patch-Pocket-Button-Placket-Cord-Blouse-p-1739500-cat-1733.html",
  },
  {
    id: 11,
    name: "Floral Orangie Crop Top",
    price: "14",
    size: "M(6)",
    tags: ["top", "all", "shein"],
    img: "https://i.imgur.com/nV8U7Cc.jpg",
    url: "https://us.shein.com/Floral-Print-Smocked-Trumpet-Sleeve-Crop-Top-p-1449086-cat-1733.html",
  },
  {
    id: 12,
    name: "A-Line Halloween Skirt",
    price: "7",
    size: "M(6)",
    tags: ["bottom", "all", "shein"],
    img: "https://i.imgur.com/rwXfbie.jpg",
    url: "https://us.shein.com/SHEIN-High-Waist-A-Line-Halloween-Print-Contrast-Binding-Skirt-p-3245782-cat-1732.html",
  },
  {
    id: 13,
    name: "Asymmetrical Top & Flare Pants",
    price: "19",
    size: "M(6)",
    tags: ["all", "otw", "shein", "set", "fallclothinghaul"],
    img: "https://img.ltwebstatic.com/images3_pi/2021/09/27/1632710641ad2b2d237ee07d092da40ce5285fee25_thumbnail_900x.webp",
    url: "https://us.shein.com/SHEIN-SXY-Ribbed-Knit-Asymmetrical-Hem-Cami-Top-Flare-Leg-Pants-p-4524981-cat-1780.html",
  },
  {
    id: 14,
    name: "Solid Flare Leg Jeans",
    price: "15",
    size: "27",
    tags: ["all", "otw", "shein", "shein", "bottom", "fallclothinghaul"],
    img: "https://img.ltwebstatic.com/images3_pi/2021/08/23/1629721908dc3267f80ac9a0c4ac89ccc7bc8db439_thumbnail_900x.webp",
    url: "https://us.shein.com/SHEIN-SXY-Solid-Flare-Leg-Jeans-p-3170601-cat-1934.html",
  },
  {
    id: 15,
    name: "High Waist Flare Leg Jeans",
    price: "25",
    size: "M(6)",
    tags: ["all", "otw", "shein", "bottom", "fallclothinghaul"],
    img: "https://img.ltwebstatic.com/images3_pi/2020/12/28/16091388623d74a9f517c08c291b608fa220a40eca_thumbnail_900x.webp",
    url: "https://us.shein.com/High-Waist-Flare-Leg-Jeans-p-1835643-cat-1934.html",
  },
  {
    id: 16,
    name: "Solid Ruched Bodycon Dress",
    price: "15",
    size: "M(6)",
    tags: ["all", "otw", "shein", "dress", "fallclothinghaul"],
    img: "https://img.ltwebstatic.com/images3_pi/2021/08/06/16282208626447e5270bffe018cb96378c4d1dd6bc_thumbnail_900x.webp",
    url: "https://us.shein.com/SHEIN-SXY-Solid-Ruched-Bodycon-Dress-p-3124930-cat-1727.html",
  },
  {
    id: 17,
    name: "Adidas Women's 3-Stripe Jacket",
    price: "30",
    size: "Medium",
    tags: ["all", "new", "amazon", "top", "mombday"],
    img: "https://images-na.ssl-images-amazon.com/images/I/814l148C+UL._AC_UL232_SR232,232_.jpg",
    url: "https://www.amazon.com/dp/B07F2PMSVR?psc=1&smid=ATVPDKIKX0DER&ref_=chk_typ_imgToDp",
  },
  {
    id: 18,
    name: "Deep Wave HDLace13X6 frontal",
    price: "229.99",
    size: "14 Inch",
    tags: ["all", "new", "amazon", "wig", "hairhaul"],
    img: "https://images-na.ssl-images-amazon.com/images/I/61ug1IyLF7L._SX300_SY300_QL70_FMwebp_.jpg",
    url: "https://www.amazon.com/Density-Highlight-frontal-plucked-bleached/dp/B08QVLGZQW",
  },
  {
    id: 19,
    name: "Adidas Originals Bucket Hat",
    price: "30",
    size: "One Size",
    tags: ["all", "new", "amazon", "other", "mombday"],
    img: "https://images-na.ssl-images-amazon.com/images/I/71DIJkXOjdL._AC_UL232_SR232,232_.jpg",
    url: "https://www.amazon.com/dp/B0734W4YRQ?psc=1&smid=ATVPDKIKX0DER&ref_=chk_typ_imgToDp",
  },
];

const Board = ({ toggleBoard }) => {
  const masterBoard = toggleBoard
    ? masterCloset.reverse()
    : masterCart.reverse();
  // const masterBoard = [
  //   ...masterClosetList.reverse(),
  //   ...masterWishlist.reverse(),
  // ];

  const [filter, setFilter] = useState("all");
  const [boardItems, setBoardItems] = useState(masterBoard);

  useEffect(() => {
    setBoardItems([]);
    let tempBoardItems = [];
    masterBoard.forEach((item) => {
      if (item.tags.includes(filter)) {
        tempBoardItems.push(item);
      }
    });
    setBoardItems(tempBoardItems);
  }, [filter, masterBoard]);

  const onChangeFilterHandler = (userInput) => {
    setFilter(userInput);
  };

  return (
    <Container>
      <FilterBar onChange={onChangeFilterHandler}></FilterBar>
      <Title>{`Home/${toggleBoard ? "Closet" : "Cart"}/${filter}`}</Title>
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
  grid-template-rows: 100px 80px auto;
`;

const Title = styled.div`
  font-size: 1.2rem;
  color: grey;
  font-weight: 600;
  margin: auto;
  margin-left: 50px;
`;

// ADD MEDIA QUERIES FOR SMALLER SCREEN SIZE
const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  row-gap: 65px;
  height: 800px;
  overflow: hidden;
  overflow-y: scroll;
`;
