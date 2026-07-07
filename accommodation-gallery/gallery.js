"use strict";
const section = document.querySelector(".section");
const para1 = document.querySelector(".para-1");
const para2 = document.querySelector(".para-2");
const para3 = document.querySelector("p");
console.log(document);
console.log(section);
console.log(para1);
console.log(para2);
// alert("hello w0rld!");


const button = document.querySelector(".skibuss-gallery .button");
console.log(button);
button.addEventListener("click", event => {
    const newPara = document.createElement("p");
    newPara.textContent = "Para";
    const skibussGallery = document.querySelector(".skibuss-gallery");
    skibussGallery.appendChild(newPara);
});