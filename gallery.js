"use strict";

// CONSTANTS
const GALLERY_ROOT_SELECTOR = ".skibuss-gallery";

// FUNCTIONS
const showOverlay = event => {
    const target = event.target;
    const source = target.getAttribute("src");

    const skibussGallery = document.querySelector(GALLERY_ROOT_SELECTOR);
    const overlay = document.createElement("div");
    const image = document.createElement("img");
    const close = document.createElement("button");

    //  setAttribute is a HTML injection sink?
    image.setAttribute("src", getFullResolution(source));
    overlay.classList.add("overlay");
    close.classList.add("close");
    close.textContent = "x";
    close.addEventListener("click", closeOverlay);
    document.addEventListener("keydown", escKey);
    overlay.addEventListener("click", backgroundClick);

    skibussGallery.appendChild(overlay);
    overlay.appendChild(image);
    overlay.appendChild(close);
};

const getFullResolution = thumb => {
    const THUMB_IDENTIFIER = "-thumb"
    const position = thumb.indexOf(THUMB_IDENTIFIER);
    const fileName = thumb.substring(0, position);
    const fileExtension = thumb.substring(position + THUMB_IDENTIFIER.length);
    const result = fileName + fileExtension;
    return result;
}

const closeOverlay = () => {
    const overlay = document.querySelector(GALLERY_ROOT_SELECTOR + " .overlay");
    overlay.remove();
    document.removeEventListener("keydown", escKey);
};

const escKey = event => {
    const key = event.key;
    if (key === "Escape") {
        closeOverlay();
    }
};

const backgroundClick = event => {
    const target = event.target;
    const overlay = document.querySelector(GALLERY_ROOT_SELECTOR + " .overlay");
    const image = document.querySelector(GALLERY_ROOT_SELECTOR + " .overlay img");
    if (target === image) {
        // Do nothing
    } else if (target === overlay) {
        closeOverlay();
    }
};

// MAIN
const images = document.querySelectorAll(GALLERY_ROOT_SELECTOR + " img");

// Add event listeners
images.forEach(image => image.addEventListener("click", showOverlay));
