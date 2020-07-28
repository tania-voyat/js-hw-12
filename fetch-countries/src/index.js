const debounce = require('lodash.debounce');
import './styles.css';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import fetchCountries from './fetchCountries';

const refs = {
  input: document.querySelector('.input'),
};

refs.input.addEventListener('input', debounce(fetchCountries, 500));

