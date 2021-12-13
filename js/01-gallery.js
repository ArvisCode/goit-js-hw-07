import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRefs = document.querySelector(".gallery");
galleryRefs.addEventListener("click", onShowLargeImage);

(function createMarkup() {
  const itemMarkup = galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>
    `;
    })
    .join("");
  galleryRefs.insertAdjacentHTML("beforeend", itemMarkup);
})();

function onShowLargeImage(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

	let largeImageSrc = event.target.dataset.source;

  const modal = basicLightbox.create(
    `<img src="${largeImageSrc}" width="800" height="600">`
  );
  modal.show();

  if (modal.visible()) {
    window.addEventListener("keydown", onPressKeyESC);
  }

  function onPressKeyESC(event) {
    if (event.code === "Escape") {
      modal.close();
      window.removeEventListener("keydown", onPressKeyESC);
    }
  }
}

console.log(galleryItems);