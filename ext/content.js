// when you are building extensions you need to be very familiar with the dom
// LETS GET MORE FAMILIAR WITH THE DOM AND BROWSER EXTENSIONS

const cartItem = {};

const imgs = document.getElementsByTagName("img");
for (const img of imgs) {
  // add click to get info
  img.addEventListener("click", function () {
    cartItem.imgSrc = img.src;
    cartItem.websiteHref = window.location.href;
    cartItem.favicon = document.querySelector("link[rel*='icon']").href;
    console.log(cartItem);
  });

  var button = document.createElement("button");
  button.innerHTML = "CAMERONPARTEE";
  button.onclick = function () {
    console.log("clicked");
  };
  document.body.appendChild(button);
}

// AFTER ON CALL
// HOW ARE WE STORING THIS INFORMATION? - WHERE SHOULD WE SEND IT TO?
