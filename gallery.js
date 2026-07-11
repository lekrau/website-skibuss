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
    document.addEventListener("keydown", escKey);

    skibussGallery.appendChild(overlay);
    overlay.appendChild(image);
    overlay.appendChild(close);
};

const closeOverlay = () => {
    const overlay = document.querySelector(".overlay");
    overlay.remove();
    document.removeEventListener("keydown", escKey);
};

const escKey = () => {
    const key = event.key;
    if (key === "Escape") {
        closeOverlay();
    }
};

// MAIN
const images = document.querySelectorAll(".skibuss-gallery img");
// console.log(images);

// Add event listeners
images.forEach(image => image.addEventListener("click", showOverlay));
