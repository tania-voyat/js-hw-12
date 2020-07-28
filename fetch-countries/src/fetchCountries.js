import multiplyCountriesTpl from './templates/multiply-countries.hbs';
import singleCountryTpl from './templates/single-country.hbs';
import { error } from '@pnotify/core/dist/PNotify.js';

const refs = {
  list: document.querySelector('.js-list'),
};

export default function fetchCountries(event) {
  const inputValue = event.target.value;
  fetch(`https://restcountries.eu/rest/v2/name/${inputValue}`)
    .then(result => result.json())
    .then(countries => {
      if (countries.length === 1) {
        onSingleFetch(countries);
      } else if (countries.length > 1 && countries.length < 10) {
        onMultiplyFetch(countries);
      } else {
        error('Too many matches found. Please enter a more specific query!');
      }
    });
}

function onSingleFetch(arr) {
  const markupOne = singleCountryTpl(arr);
  refs.list.insertAdjacentHTML('beforeend', markupOne);
}

function onMultiplyFetch(arr) {
  const markupMany = multiplyCountriesTpl(arr);
  refs.list.insertAdjacentHTML('beforeend', markupMany);
}
