import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SlimSelect from 'slim-select';
import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const refs = {
  breedSelect: document.querySelector('.js-breed-select'),
  catInfo: document.querySelector('.cat-info'),
  loader: document.querySelector('.loader'),
};

function showElement(element, isVisible) {
  element.classList.toggle('hidden', !isVisible);
}

showElement(refs.breedSelect, false);
showElement(refs.loader, true);

const slimSelect = new SlimSelect({
  select: refs.breedSelect,
});

async function onSelectCats() {
  try {
    showElement(refs.loader, true);
    showElement(refs.catInfo, false);
    const catId = refs.breedSelect.value;
    const data = await fetchCatByBreed(catId);
    markupCats(data);
  } catch (error) {
    iziToast.show({
      position: 'topRight',
      message: 'Oops! Something went wrong! Try reloading the page!',
    });
  }
  showElement(refs.loader, false);
}

function markupCats(data) {
  const imgCats = data[0].url;
  const infoCats = data[0].breeds[0];
  const cat = `<div class="card">
  <img class="img" src="${imgCats}" alt="${infoCats.name}"/>
      <div class="info">
        <h2 class="name">${infoCats.name}</h2>
        <p><b class="description">Description:</b> ${infoCats.description}</p>
        <p><b class="temperament">Temperament:</b> ${infoCats.temperament}</p>   
       </div>
</div>`;

  refs.catInfo.innerHTML = cat;
  showElement(refs.catInfo, true);
}

async function searchCats() {
  try {
    await fetchBreeds().then(breeds => {
      const data = breeds.map(({ id, name }) => ({ value: id, text: name }));
      console.log(data);
      slimSelect.setData(Array.from(data));
    });
    showElement(refs.breedSelect, true);
    refs.breedSelect.addEventListener('change', onSelectCats);
  } catch (error) {
    iziToast.show({
      position: 'topRight',
      message: 'Oops! Something went wrong! Try reloading the page!',
    });
  }
  showElement(refs.loader, false);
}

searchCats();
