// when you are building extensions you need to be very familiar with the dom
// TODO: LETS GET MORE FAMILIAR WITH THE DOM
// AND ALSO BROWSER EXTENSIONS

const cartItem = {};

const imgs = document.getElementsByTagName("img");
for (let i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("click", function () {
    cartItem.imgSrc = imgs[i].src;
    cartItem.websiteHref = window.location.href;
    cartItem.favicon = document.querySelector("link[rel*='icon']").href;
    console.log(cartItem);
  });
}

// TODO: HOW ARE WE STORING THIS INFORMATION? - WHERE SHOULD WE SEND IT TO?
