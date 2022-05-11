// when you are building extensions you need to be very familiar with the dom
// TODO: LETS GET MORE FAMILIAR WITH THE DOM

let myImages =
  "https://yt3.ggpht.com/yti/APfAmoF3cbabr_gXui2CEhK87UuJFQg_2gGzH0Mj9g3gaw=s88-c-k-c0x00ffffff-no-rj-mo";

const imgs = document.getElementsByTagName("img");
for (let i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("click", function () {
    // img src link
    console.log(imgs[i].src);
    // website link
    console.log(window.location.href);
    // fav icon
    console.log(document.querySelector("link[rel*='icon']").href);
  });
}

// TODO: HOW ARE WE STORING THIS INFORMATION? - WHERE SHOULD WE SEND IT TO?
