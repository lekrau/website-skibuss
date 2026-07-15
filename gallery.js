"use strict";

// CONSTANTS
const GALLERY_ROOT_SELECTOR = ".skibuss-gallery";

// FUNCTIONS
const showOverlay = () => {
    const source = images[currentImagePosition].getAttribute("src");
    const overlay = document.createElement("div");
    const image = document.createElement("img");
    const close = document.createElement("button");
    const next = document.createElement("button");

    //  setAttribute is a HTML injection sink?
    image.setAttribute("src", getFullResolution(source));
    overlay.classList.add("overlay");
    
    close.classList.add("close");
    close.textContent = "x";
    close.addEventListener("click", closeOverlay);
    
    next.classList.add("next");
    next.textContent = ">";
    next.addEventListener("click", nextImage);

    document.addEventListener("keydown", escKey);
    overlay.addEventListener("click", backgroundClick);

    const skibussGallery = document.querySelector(GALLERY_ROOT_SELECTOR);
    skibussGallery.appendChild(overlay);
    overlay.appendChild(image);
    overlay.appendChild(close);
    overlay.appendChild(next);
};

const thumbnailClick = event => {
    const target = event.target;
    currentImagePosition = getImagePosition(target);
    showOverlay(currentImagePosition);
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

const getImagePosition = image => {
    for (let i = 0; i < images.length; i++) {
        const element = images[i];
        if (element === image) {
            return i;
        }
    }
};

const nextImage = () => {
    if (currentImagePosition < images.length - 1) {
        currentImagePosition++;
        closeOverlay();
        showOverlay();
    }
};

// MAIN
const images = document.querySelectorAll(GALLERY_ROOT_SELECTOR + " img");
var currentImagePosition = -1;

// Add event listeners
images.forEach(image => image.addEventListener("click", thumbnailClick));


// Plan Bild-Navigation
// Änderung an bestehender LogiK: Das aktuelle Bild wird durch eine Position im Array abgebildet -> array[akt] liefert die benötigte SRC
// Woher weiß das Bild, in welchem Stock es ist?


// Vermutlich obsolet

// const imageArray = [];

// const createImageArray = () => {
//     if (imageArray === []) {
//         images.forEach
//     }
// };