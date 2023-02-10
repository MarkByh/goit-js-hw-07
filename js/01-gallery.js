import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery')
const galeryList = galleryItems.map(item => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </div>`
}).join(' ');
gallery.insertAdjacentHTML('beforeend', galeryList)

gallery.addEventListener('click', showImage)

function showImage(event){
     event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
      };
  const bigImg = event.target.dataset.source;
  const closeModal = event => {  
      if(event.code === "Escape"){
        instance.close()
      }
}
  const instance = basicLightbox.create(`
    <img src="${bigImg}" >`, { 
      onShow: () =>document.addEventListener('keydown', closeModal),
      onClose: () =>document.removeEventListener('keydown', closeModal)
    });
    instance.show();
}
  
