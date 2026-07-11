"use strict";

const images = document.querySelectorAll(".skibuss-gallery img");
console.log(images);

images.forEach(image => image.addEventListener("click", event => {
    const target = event.target;
    const src = target.getAttribute("src");
    console.log(target);
    console.log(src);
}));
