import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const containerGallery = document.querySelector('.gallery');
const insertImg = createGallery(galleryItems);
containerGallery.insertAdjacentHTML('beforeend', insertImg);
// console.log(createGallery(galleryItems));

containerGallery.addEventListener('click', onImgClick);


function createGallery(imgList) {
    const createImg = imgList.map(({preview, original, description}) => { //рендер разметки
        return `
        <li class="gallery__item">   
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
             </a>
        </li>
        `;
        })
        .join('');

    // console.log(createImg[0]);
    // console.log(createImg);
    return createImg;
};


function onImgClick(event) {
    event.preventDefault();
    //console.log(event.target.nodeName);
    
    if (event.target.nodeName !== 'IMG') {      
        return;
    }
    // console.log(event.target);
    // console.log(event.currentTarget);
    const img = event.target;
    const tag = img.dataset.source;
    const modal = basicLightbox.create(`<img src= ${tag} width="800" height="600">
    `);
    modal.show();

    window.addEventListener('keydown', closeModal);

    function closeModal(event) {
        if (event.key === 'Escape') {
            modal.close();
            window.removeEventListener('keydown', closeModal);
        }
    };
};





















// const imgClick = document.querySelectorAll('.gallery__item');
// console.log(imgClick);
// imgClick.addEventListener("click", (event) => {
//     event.preventDefault();
// });

// const list = document.querySelector('ul');
// const modalImage = document.querySelector(".gallery__image");
// const backdrop = document.querySelector(".gallery__item");



// modalImage.addEventListener('click', openModal);
// modalImage.addEventListener('click', closeModal);

// function closeModal({target}) {

//  instance.close();
// }

// console.log(list);

// list.addEventListener('click', closeModal);

// function closeModal({target}) {

// instance.close(() => console.log('lightbox not visible anymore'))
//     let content;
//     // console.log("This", target.nodeName);

//     if (target.nodeName === "IMG") {
//         // content = target.nodeName;
//         content = target.dataset.source;
//         console.log(content);
        
//     }
//     modalImage = content;
//     // backdrop.classList.add("backdrop");
//     backdrop.classList.add("open");
// }






















/***** */
// console.log(list);

// list.addEventListener('click', openModal);

// function openModal({target}) {
//     let content;
//     // console.log("This", target.nodeName);

//     if (target.nodeName === "IMG") {
//         // content = target.nodeName;
//         content = target.dataset.source;
//         console.log(content);
        
//     }
//     modalImage = content;
//     // backdrop.classList.add("backdrop");
//     backdrop.classList.add("open");
// }




 // const elem = instance.element()
    // console.log(elem)

    // const content = document.createElement('div')

    // const h1 = document.createElement('h1')
    // const p = document.createElement('p')
    
    // h1.textContent = 'Create element'
    // p.textContent = 'Create elements dynamicly and use them in your lightbox.'
    
    // content.appendChild(h1)
    // content.appendChild(p)
    
    // const instance = basicLightbox.create(content)
    
    // document.querySelector('button.create').onclick = instance.show


    // instance.show(() => console.log('lightbox now visible'))
    // instance.close(() => console.log('lightbox not visible anymore'))

    // console.log(event.target);
    // console.log("llll", event.target.dataset.source);
    // console.log(event.currentTarget);
    // console.log(parentTargetEl);
    
    // console.log(event.target.dataset.original);


    /********пример моеё функции */
    // function onImgContainerClick(event) {
    //     // let selectedTag = null;
    //     event.preventDefault();
    //     if (!event.target.classList.contains('gallery__image')) {
    //         return;
    //     }
    //     // const targetEl = event.target;
    //     // const parentTargetEl = targetEl.closest('.gallery');
    //     const linkUrl = event.target.dataset.source;
    //     // console.log(linkUrl);
    
    //     const instance = basicLightbox.create(`
    //     <img src= ${linkUrl} width="800" height="600">
    //     `);
        
    //     instance.show()
    
    //     //11
    
    //     // const currentActiveImg = document.querySelector('.tags__img--active');
    //     // console.log(currentActiveImg);
    
    //     // if (currentActiveImg) {
    //     //     currentActiveImg.classList.remove('tags__img--active');
    //     // }
    
    //     // const nextActiveImg = event.target;
    //     // nextActiveImg.classList.add('tags__img--active');
    
    //     // selectedTag = nextActiveImg.dataset.source;
    //     // console.log('url текущего изображения', selectedTag); //url текущего изображения
    
    
    //     /*или можно так*/
    // //11
    
    // const img = event.target;
    // const tag = img.dataset.source;
    // const isActive = img.classList.contains('tags__img--active');
    
    // if (isActive) {
    //     selectedTags.delete(tag);
    // } else {
    //     selectedTags.add(tag) 
    // }
    //  img.classList.toggle('tags__img--active');
    //  console.log(selectedTags);
    
    
    //     // const visible = basicLightbox.visible()
    //     // console.log(visible);
       
    //     // event.preventDefault();
    //     // if (!event.target.classList.contains('.gallery__image')) {
    //     //     return;
    //     // }
    //     // console.log(event.target.dataset.preview);
    
    
    
       
        
    // }