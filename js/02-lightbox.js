import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const contGallery = document.querySelector('.gallery');
const insImg = createGallery(galleryItems);
contGallery.insertAdjacentHTML('beforeend', insImg);

function createGallery(imgList) {
const createImg = imgList.map(({preview, original, description}) => {
    return `
    <li class="gallery__item">
         <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="Image ${description}" />
         </a>
    </li>
    `;
})
.join('');
return createImg;
};

var lightbox = new SimpleLightbox('.gallery a', {'captionsData': 'alt', 'captionsDelay': 250});


   