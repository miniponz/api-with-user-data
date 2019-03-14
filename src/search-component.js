import { writeSearchToQuery } from '../src/hash-functions.js';

const searchForm = document.getElementById('search-form');
const citySearch = searchForm.querySelector('input');

searchForm.addEventListener('submit', event => {
    event.preventDefault();

    const q = citySearch.value;
    const existingQuery = window.location.hash.slice(1);
    const newQuery = writeSearchToQuery(existingQuery, q);
    window.location.hash = newQuery;
});

export function updateCityName(q) {
    citySearch.value = q;
}