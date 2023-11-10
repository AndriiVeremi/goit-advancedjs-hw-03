import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_YGiFEHjPi1lBCUuzNbWelyd7J1oPEfn9W20OXOYFFrZcwqF6HuW05CNOxCFEtTY7';


export async function fetchBreeds() {
  return await axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(res => res.data);
}

export async function fetchCatByBreed(breedId) {
  return await axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(res => res.data);
}
