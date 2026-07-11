"use strict";

// FUNCTIONS
const showOverlay = event => {
    const target = event.target;
    const source = target.getAttribute("src");
    // console.log("target", target);
    // console.log("image", source);

    const skibussGallery = document.querySelector(".skibuss-gallery");
    const overlay = document.createElement("div");
    const image = document.createElement("img");
    const close = document.createElement("button");

    //  setAttribute is a HTML injection sink?
    image.setAttribute("src", source);
    overlay.classList.add("overlay");
    close.classList.add("close");
    close.textContent = "x";
    close.addEventListener("click", closeOverlay);

    skibussGallery.appendChild(overlay);
    overlay.appendChild(image);
    overlay.appendChild(close);
};

const closeOverlay = () => {
    console.log("Close button clicked!");  
};

// MAIN
const images = document.querySelectorAll(".skibuss-gallery img");
// console.log(images);

// Add event listeners
images.forEach(image => image.addEventListener("click", showOverlay));
