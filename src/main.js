// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getPhotos } from './js/pixabay-api.js';
import { createGallaryMarkup } from './js/render-functions.js';

const list = document.querySelector('.gallary');
const form = document.querySelector('.js-form');
const loader = document.querySelector('.loader');
let gallery;

export function showLoader() {
  loader.classList.remove('is-hidden');
}

export function hiddeLoader() {
  loader.classList.add('is-hidden');
}

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const searchQuery = event.currentTarget.elements.search.value.trim();
  showLoader();
  list.innerHTML = '';

  getPhotos(searchQuery)
    .then(res => {
      if (res.hits.length === 0) {
        return iziToast.error({
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
      list.innerHTML = createGallaryMarkup(res.hits);

      gallery = new SimpleLightbox('.gallary a');
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      hiddeLoader();
    });
}
