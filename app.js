const lightbox = document.querySelector(".gallery-container .light-box");
const lightboxImage = document.querySelector(".gallery-container .light-box img");
const nextBtn = document.querySelector(".gallery-container .next-btn");
const previousBtn = document.querySelector(".gallery-container .previous-btn");
const closeBtn = document.querySelector(".gallery-container .close-btn");

let currentImage = "";


const showImage = (data) => {
        currentImage = data;
    lightbox.classList.add("active");
    let image = data.querySelector("img");

    lightboxImage.src = image.src;
};

closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("active");
});

nextBtn.addEventListener("click", () => {
    if (currentImage.nextElementSibling) {
        currentImage = currentImage.nextElementSibling;
        showImage(currentImage);
    }
});

previousBtn.addEventListener("click", () => {
    if (currentImage.previousElementSibling) {
        currentImage = currentImage.previousElementSibling;
        showImage(currentImage);
    }
});