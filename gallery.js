"use strict";

// WEITER: Caption aktualisieren

// CONSTANTS
const GALLERY_ROOT_SELECTOR = ".skibuss-gallery";

// FUNCTIONS
const thumbnailClick = event => {
    const target = event.target;
    currentImagePosition = getImagePosition(target);
    showOverlay();
};

const showOverlay = () => {
    const source = images[currentImagePosition].getAttribute("src");
    const overlay = document.querySelector(GALLERY_ROOT_SELECTOR + " .overlay");
    // WIESO IST HIER BEREITS DAS IMG (SRC) GEÄNDERT?
    const image = overlay.querySelector(".overlay__image");
    const close = overlay.querySelector(".overlay__button--close");
    const next = overlay.querySelector(".overlay__button--nav--next");
    const previous = overlay.querySelector(".overlay__button--nav--previous");
    const imageTotal = overlay.querySelector(".overlay__bottom__caption__image-total");
    const currentImage = overlay.querySelector(".overlay__bottom__caption__current-image");
    const floor = overlay.querySelector(".overlay__bottom__caption__floor");

    //  setAttribute is a HTML injection sink?
    image.setAttribute("src", getFullResolution(source));
    imageTotal.textContent = images.length;
    currentImage.textContent = currentImagePosition + 1;
    floor.textContent = getFloor(source);
    overlay.classList.remove("overlay--inactive")

    document.addEventListener("keydown", keydown);
    overlay.addEventListener("click", backgroundClick);
    close.addEventListener("click", closeOverlay);
    next.addEventListener("click", nextImage);
    previous.addEventListener("click", previousImage);
};


const closeOverlay = () => {
    const overlay = document.querySelector(GALLERY_ROOT_SELECTOR + " .overlay");
    const close = overlay.querySelector(".overlay__button--close");
    const next = overlay.querySelector(".overlay__button--nav--next");
    const previous = overlay.querySelector(".overlay__button--nav--previous");

    overlay.classList.add("overlay--inactive")

    document.removeEventListener("keydown", keydown);
    overlay.removeEventListener("click", backgroundClick);
    close.removeEventListener("click", closeOverlay);
    next.removeEventListener("click", nextImage);
    previous.removeEventListener("click", previousImage);
};

const getFullResolution = thumb => {
    const THUMB_IDENTIFIER = "-thumb"
    const position = thumb.indexOf(THUMB_IDENTIFIER);
    const fileName = thumb.substring(0, position);
    const fileExtension = thumb.substring(position + THUMB_IDENTIFIER.length);
    const result = fileName + fileExtension;
    return result;
}

const getFloor = thumb => {
    const FOLDER = "/";
    const TRANSLATION = "stāvs";
    const position = thumb.indexOf(FOLDER) + 1;
    const floor = thumb.substring(position, position + 1);
    if (floor === "0") {
        return "";
    } else {
        return `${floor} ${TRANSLATION}`;
    }
}

const keydown = event => {
    const key = event.key;
    if (key === "Escape") {
        closeOverlay();
    } else if (key === "ArrowRight") {
        nextImage();
    } else if (key === "ArrowLeft") {
        previousImage();
    }
};

const backgroundClick = event => {
    const target = event.target;
    const image = document.querySelector(GALLERY_ROOT_SELECTOR + " .overlay__image");
    const close = document.querySelector(GALLERY_ROOT_SELECTOR + " .overlay__button--close");
    const next = document.querySelector(GALLERY_ROOT_SELECTOR + " .overlay__button--nav--next");
    const previous = document.querySelector(GALLERY_ROOT_SELECTOR + " .overlay__button--nav--previous");
    if (target === image || target === close || target === next || target === previous) {
        // Do nothing
    } else {
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

const previousImage = () => {
    if (currentImagePosition > 0) {
        currentImagePosition--;
        closeOverlay();
        showOverlay();
    }
};

// MAIN
const images = document.querySelectorAll(GALLERY_ROOT_SELECTOR + " .images img");
var currentImagePosition = -1;

// Add event listeners
images.forEach(image => image.addEventListener("click", thumbnailClick));


// Plan Bild-Navigation
// Änderung an bestehender LogiK: Das aktuelle Bild wird durch eine Position im Array abgebildet -> array[akt] liefert die benötigte SRC
// Woher weiß das Bild, in welchem Stock es ist?