import gallery from "./gallery-items.js";

const body = document.querySelector("body");
const jsGallery = document.querySelector(".js-gallery");
const divLightbox = document.querySelector(".js-lightbox");
const divOverlay = document.querySelector(".lightbox__overlay");
const imgModal = document.querySelector(".lightbox__image");
const buttonClose = document.querySelector(".lightbox__button");

gallery.map((el) => {
  jsGallery.innerHTML += `<li class="gallery__item"><a class="gallery__link" href="${el.preview}"><img class="gallery__image" src="${el.preview}" data-source="${el.original}" alt="${el.description}"/></a></li>`;
});
const galleryItem = document.querySelectorAll(".gallery__item");

jsGallery.addEventListener("click", (e) => {
  e.preventDefault();
  let modalLink = e.target.dataset.source;
  divLightbox.classList.add("is-open");
  imgModal.src = modalLink;
});

buttonClose.addEventListener("click", () => {
  divLightbox.classList.remove("is-open");
  imgModal.src = "";
});

divOverlay.addEventListener("click", () => {
  divLightbox.classList.remove("is-open");
  imgModal.src = "";
});

body.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    divLightbox.classList.remove("is-open");
    imgModal.src = "";
  }
});
