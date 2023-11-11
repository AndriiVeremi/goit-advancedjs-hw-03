import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SlimSelect from 'slim-select';
import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const refs = {
  breedSelect: document.querySelector('.js-breed-select'),
  catInfo: document.querySelector('.cat-info'),
};

const slimSelect = new SlimSelect({
  select: refs.breedSelect,
});

async function onSelectCats() {
  try {
    const catId = refs.breedSelect.value;
    const data = await fetchCatByBreed(catId);
    markupCats(data);
  } catch (error) {
    console.log(error);
  }
}

function markupCats(data) {
  const imgCats = data[0].url;
  const infoCats = data[0].breeds[0];
 const cat = `<div class="wrapper">
      <img class="img" src="${imgCats}" alt="${infoCats.name}"/>
      <div class="info">
        <h2 class="name">${infoCats.name}</h2>
        <p><b class="description">Description:</b> ${infoCats.description}</p>
        <p><b class="temperament">Temperament:</b> ${infoCats.temperament}</p>   
       </div>
    </div>`;

refs.catInfo.insertAdjacentHTML('afterbegin', cat);
}

async function searchCats() {
  try {
    await fetchBreeds().then(breeds => {
      const data = breeds.map(({ id, name }) => ({ value: id, text: name }));
      console.log(data);
      slimSelect.setData(Array.from(data));
    });
    refs.breedSelect.addEventListener('change', onSelectCats);
  } catch (error) {
    console.log(error);
  }
}

searchCats();
