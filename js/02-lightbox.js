import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRefs = document.querySelector(".gallery");

console.log(galleryRefs);

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

const lightbox = new SimpleLightbox(".gallery a", {
	overlay: true,
	captions: true,
	captionsData: "alt",
	//closeText: "Close",
	disableRightClick: true,
  
});

console.log(galleryItems);
