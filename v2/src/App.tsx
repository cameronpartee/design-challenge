import "./App.css";

function App() {
  const itemsArray: any[] = [
    {
      img: "https://media.missguided.com/i/missguided/TW105118_01?$product-page__main--2x$&fmt=auto&qlt=default",
      store: "Missguided", // make this an enum
      item: "https://www.missguidedus.com/lilac-mesh-panel-corset-top-10291253",
      icon: "https://media.glassdoor.com/sqll/1027187/missguided-squarelogo-1564147912496.png",
    },
    {
      img: "https://media.missguided.com/i/missguided/TW102951_01?$product-page__main--2x$&fmt=auto&qlt=default",
      store: "Missguided",
      item: "https://www.missguidedus.com/plum-contrast-strap-tulle-corset-top-10285829",
      icon: "https://media.glassdoor.com/sqll/1027187/missguided-squarelogo-1564147912496.png",
    },
    {
      img: "https://media.missguided.com/i/missguided/TWR630279_01?$product-page__main--2x$&fmt=auto&qlt=default",
      store: "Missguided",
      item: "https://www.missguidedus.com/blush-drape-front-bandeau-corset-top-10259213",
      icon: "https://media.glassdoor.com/sqll/1027187/missguided-squarelogo-1564147912496.png",
    },
    {
      img: "https://media.missguided.com/i/missguided/TJ104107_01?$product-page__main--2x$&fmt=auto&qlt=default",
      store: "Missguided",
      item: "https://www.missguidedus.com/white-extreme-strappy-back-bralette-10288529",
      icon: "https://media.glassdoor.com/sqll/1027187/missguided-squarelogo-1564147912496.png",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0414/2622/3270/products/62592B02_20LILAC-1_900x.jpg?v=1645057919",
      store: "Selfie Leslie",
      item: "https://www.selfieleslie.com/collections/new-tops/products/love-like-this-balloon-sleeve-open-back-crop-top-lilac",
      icon: "https://s3-eu-west-1.amazonaws.com/tpd/logos/5e2ef55fb9e8c80001e8fa15/0x0.png",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0414/2622/3270/products/25589B_20HOT_20PINK-1_900x.jpg?v=1645057917",
      store: "Selfie Leslie",
      item: "https://www.selfieleslie.com/collections/new-tops/products/cant-stop-me-bow-shoulder-bodysuit-hot-pink",
      icon: "https://s3-eu-west-1.amazonaws.com/tpd/logos/5e2ef55fb9e8c80001e8fa15/0x0.png",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0414/2622/3270/products/27464D_BLUE-1_900x.jpg?v=1641437846",
      store: "Selfie Leslie",
      item: "https://www.selfieleslie.com/collections/tops/products/romantics-shirred-bodice-puff-sleeve-crop-top-blue",
      icon: "https://s3-eu-west-1.amazonaws.com/tpd/logos/5e2ef55fb9e8c80001e8fa15/0x0.png",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0414/2622/3270/products/KJ0133D-T_FOREST_GREEN-1_540x.jpg?v=1641437866",
      store: "Selfie Leslie",
      item: "https://www.selfieleslie.com/collections/tops/products/bright-side-puff-sleeve-ruched-crop-top-forest-green",
      icon: "https://s3-eu-west-1.amazonaws.com/tpd/logos/5e2ef55fb9e8c80001e8fa15/0x0.png",
    },
  ];

  return (
    <div className="Container">
      <div className="Header"></div>
      <div className="Filters">
        <div>PRICE</div>
        <div>STORE</div>
        <div>COLOR</div>
        <div>CATEGORY</div>
        <div>SEASON</div>
        <div>BRAND</div>
      </div>
      <div className="Content">
        <div className="Grid">
          {itemsArray.map((item) => (
            <div key={item.img} className="Item">
              <a href={item.item} target="_blank">
                <img src={item.img} alt={item.store} />
                <img src={item.icon} alt={item.store} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
