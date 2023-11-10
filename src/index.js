import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SlimSelect from 'slim-select';
import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const refs = {
  breedSelect: document.querySelector('.breed-select'),
  catInfo: document.querySelector('.cat-info'),
};

const slimSelect = new SlimSelect({
  select: refs.breedSelect,
});

async function onSelect() {
  try {
    const catId = refs.breedSelect.value;
      const data = await fetchCatByBreed(catId);
      console.log(data)

  } catch (error) {
    console.log(error);
  }
}

async function catsSeerch() {
  try {
      await fetchBreeds().then(breeds => {
        const data = breeds.map(({ id, name }) => ({ value: id, text: name }));
          console.log(data)
          slimSelect.setData(Array.from(data));
    });
    refs.breedSelect.addEventListener('change', onSelect);
  } catch (error) {
    console.log(error)
  }
}

catsSeerch();

