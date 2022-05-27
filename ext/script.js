// when you are building extensions you need to be very familiar with the dom
// LETS GET MORE FAMILIAR WITH THE DOM AND BROWSER EXTENSIONS

const cartItem = {};

const imgs = document.getElementsByTagName("img");

for (const img of imgs) {
  var button = document.createElement("button");
  button.innerHTML = "AddtoCart";
  img.after(button);

  button.onclick = function (e) {
    cartItem.imgSrc = img.src;
    cartItem.websiteHref = window.location.href;
    cartItem.favicon = document.querySelector("link[rel*='icon']")?.href;
    console.log(cartItem);
    e.stopImmediatePropagation();
  };
}

// AFTER ON CALL
// HOW ARE WE STORING THIS INFORMATION? - WHERE SHOULD WE SEND IT TO?

// img.addEventListener("click", function () {
//   cartItem.imgSrc = img.src;
//   cartItem.websiteHref = window.location.href;
//   cartItem.favicon = document.querySelector("link[rel*='icon']").href;
//   console.log(cartItem);
// });
